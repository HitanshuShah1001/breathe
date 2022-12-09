
import React, {useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet,Text, View} from 'react-native';
import Timer from '../Timer/Timer';
import BreatheAnimation from './Animation';

const {width, height} = Dimensions.get('window');
const circleSize = width / 2;
const Breathing = () => {
  return(
    <View style={{flex:1}}><BreatheAnimation /><Timer duration={60}/></View>
  )
};


export default Breathing;