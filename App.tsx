import { useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Context } from './src/Statemanagement/Context'
import { useFonts } from 'expo-font'
import Navigation from './Navigation'
import { Light, Dark } from './src/Utils/Constants/Colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    Secular: require('./assets/fonts/SecularOne-Regular.ttf'),
  })

  const [Lightmode,setLightMode] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number>(120)
  const [colors, setColors] = useState<Object>(Lightmode ? Light: Dark)
  const values = { duration, setDuration, colors, setColors,Lightmode,setLightMode }

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  return (
    <Context.Provider value={values}>
      <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    </Context.Provider>
  )
}

