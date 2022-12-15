import React, { useState } from 'react'
import { Pressable, SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Duration from '../../Components/Duration/Duration'
import Exercisecaption from '../../Components/Exercisecaption/Exercisecaption'
import Exercisetitle from '../../Components/Exercisetitle/Exercisetitle'
import Play from '../../Components/Play/Play'
import { styles } from './styles'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Close from '../../Components/Close/Close'
import { LinearGradient } from 'expo-linear-gradient'

export default function Startbreathing() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1}}>
        <LinearGradient style={{flex:1,justifyContent:'space-around'}}  start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} colors={['#c2e59c','#64b3f4']}>
    <View style={styles.parent}>
     
      <View style={styles.container}>
      <Close />
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.content}>
        <Exercisetitle />
        <Exercisecaption />
        <Play onClick={() => navigation.navigate('Breathing')} />
        <Dropdown />
        </View>
      </View>
      <View style={{ flex: 2 }}></View>
    </View>
    </LinearGradient>
    </SafeAreaView>
  )
}
