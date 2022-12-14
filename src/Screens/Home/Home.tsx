import { View, Image, Text } from 'react-native'
import { Sources } from '../../Resources/Images'
import Card from './Card/Card'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <View style={{ flex: 0.3 }}></View>
      <Card uri={Sources[0]} uri2={Sources[1]} label={"Anger"} label2={"Cluttered"}/>
      <Card uri={Sources[2]} uri2={Sources[3]}  label={"Excited"} label2={"Sleepless"}/>
      <Card uri={Sources[4]} uri2={Sources[5]}  label={"Stressed"} label2={"Tired"}/>
    </View>
  )
}
