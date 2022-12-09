import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions,Button } from 'react-native'

interface Props {
  duration: Number
}
export default function Timer({ duration }: Props) {

  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [time,setTime] = useState<number>(600);
  const [pause,setPause] = useState<number>(false);

  const durationRef = useRef(null)


  const getTime = () => {
    setTime(time-1);
    console.log(time);
    if (time <= 0) {
      clearInterval(durationRef.current)
      durationRef.current = null
    }
    setSeconds(Math.floor(time%60))
    setMinutes(Math.floor(time/60))
  }
  useEffect(() => {
    if(!pause){
      durationRef.current = setInterval(() => {
        setTime(time-1);
        setSeconds(Math.floor(time%60))
      setMinutes(Math.floor(time/60))
      }, 1000)
    }
   

    return () => clearInterval(durationRef.current)
  }, [time,pause])
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',marginTop:25}}>
      <Text>{minutes < 0 ? 0 : minutes} : </Text>
      <Text>{seconds < 0 ? 0 : seconds}</Text>
      <Button title={pause?'Resume':'Pause'} onPress={() => setPause(!pause)}/>
    </View>
  )
}
