
import React, {useRef} from 'react';
import {Animated, Dimensions, Easing, StyleSheet,Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');
const circleSize = width / 2;
const BreatheAnimation = () => {
  const move = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  Animated.loop(Animated.sequence([
    Animated.parallel([
      Animated.timing(textOpacity,{
        toValue:1,
        duration:300,
        useNativeDriver:true
      }),
      Animated.timing(move,{
        toValue:1,
        duration:4000,
        useNativeDriver:true
      })
    ]),
    Animated.parallel([
      Animated.timing(textOpacity,{
        toValue:0,
        duration:300,
        delay:100,
        useNativeDriver:true
      }),
      Animated.timing(move,{
        toValue:0,
        duration:4000,
        delay:1000,
        useNativeDriver:true
      })  
    ])
  ])).start();
  const translate = move.interpolate({
    inputRange:[0,1],
    outputRange:[0,circleSize/6],
  })
  const exhale = textOpacity.interpolate({
    inputRange: [0,1],
    outputRange: [1,0],
  })
  return (
    <View style={styles.container}>
      <Animated.View style={{
        width:circleSize,
        height:circleSize,
        ...StyleSheet.absoluteFill,
        alignItems:'center',
        justifyContent:'center',
        opacity:textOpacity
      }}>
      <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Inhale
        </Text>
      </Animated.View>
      <Animated.View style={{
        width:circleSize,
        height:circleSize,
        ...StyleSheet.absoluteFill,
        alignItems:'center',
        justifyContent:'center',
        opacity:exhale
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Exhale
        </Text>
      </Animated.View>
      {[0,1,2,3,4,5,6,7].map(item => {
        const rotation = move.interpolate({
          inputRange:[0,1],
          outputRange:[`${item * 45}deg`,`${item * 45 + 180}deg`]
        }); 
        return (
          <Animated.View
          key={item}
          style={{
            opacity:0.1,
            backgroundColor:'purple',
            width:circleSize,
            height:circleSize,
            borderRadius:circleSize/2,
            ...StyleSheet.absoluteFill,
            transform: [
              {
                rotateZ:rotation
              },
              {translateX:translate},
              {translateY:translate}
            ]
          }}>

          </Animated.View>
        )
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    top:width/4,
    left:width/4
  },
});

export default BreatheAnimation;