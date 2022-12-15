import React, { useEffect, useState } from 'react'
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Timer from '../Timer/Timer'
import BreatheAnimation from './Animation'
import { useNavigationState } from '@react-navigation/native'
import { Audio } from 'expo-av'
const { width, height } = Dimensions.get('window')
const circleSize = width / 2
const Breathing = () => {
  return (
    <View style={{ flex: 1 }}>
      <BreatheAnimation />
      <Timer />
    </View>
  )
}

export default Breathing
