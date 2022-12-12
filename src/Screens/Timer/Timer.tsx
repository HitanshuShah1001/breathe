import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Actionbutton from '../../Components/Actionbutton/Actionbutton'
import { styles } from './styles'
import { Context } from '../../Statemanagement/Context'
interface Props {
  duration?: Number
}
export default function Timer() {
  const {duration} = useContext(Context);
  const navigation = useNavigation();
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [time, setTime] = useState<number>(duration)
  const [pause, setPause] = useState<boolean>(false)

  const durationRef = useRef<NodeJS.Timeout | any >(null)

  const Stop = () => {
    clearInterval(durationRef.current);
    navigation.goBack();
  }

  useEffect(() => {
    if (!pause) {
      durationRef.current = setInterval(() => {
        setTime(time - 1)
        setSeconds(Math.floor(time % 60))
        setMinutes(Math.floor(time / 60))
      }, 1000)
    }
    return () => clearInterval(durationRef.current)
  }, [time, pause])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {[minutes, seconds].map((item, index) => (
          <Text key={index} style={styles.time}>
            {item < 0 ? '00' : item} {index === 0 && ': '}
          </Text>
        ))}
      </View>
      <View
        style={styles.subcontainer}
      >
        <Actionbutton action={() => setPause(!pause)} pause={pause} showpause />
        <Actionbutton action={Stop} />
      </View>
    </View>
  )
}
