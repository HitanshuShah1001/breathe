import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

interface Props {
  duration: Number
}
export default function Timer({ duration }: Props) {
  const {width, height} = Dimensions.get('window');
  const [minutes, setMinutes] = useState<Number>(0)
  const [seconds, setSeconds] = useState<Number>(0)
  const durationRef = useRef(null)
  const totalDuration = Date.now() + 1000 * (30 + 2)

  const getTime = () => {
    const time = totalDuration - Date.now()
    if (time <= 0) {
      clearInterval(durationRef.current)
      durationRef.current = null
    }
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }
  useEffect(() => {
    durationRef.current = setInterval(() => {
      getTime()
    }, 1000)

    return () => clearInterval(durationRef.current)
  }, [])
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:25}}>
      <Text>{minutes < 0 ? 0 : minutes} : </Text>
      <Text>{seconds < 0 ? 0 : seconds}</Text>
    </View>
  )
}
