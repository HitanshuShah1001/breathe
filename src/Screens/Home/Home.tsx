import { LinearGradient } from 'expo-linear-gradient'
import { View,Text, SafeAreaView } from 'react-native'
import { Sources } from '../../Resources/Images'
import Card from './Card/Card'
import Header from './Header/Header'
import { Context } from '../../Statemanagement/Context'
import { useContext } from 'react'

export default function Home() {
  const {colors} = useContext(Context);
  return (
    <SafeAreaView style={{flex:1}}>
      <LinearGradient style={{flex:1,justifyContent:'space-around'}}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} colors={colors.Background}>
      <Header color={colors.Text} />
      <Card uri={Sources[0]} uri2={Sources[1]} color={colors.Text} label={"Anger"} label2={"Cluttered"} />
      <Card uri={Sources[2]} uri2={Sources[3]} color={colors.Text} label={"Excited"} label2={"Sleepless"}/>
      <Card uri={Sources[4]} uri2={Sources[5]} color={colors.Text} label={"Stressed"} label2={"Tired"}/>
      </LinearGradient>    
    </SafeAreaView>
  )
}
