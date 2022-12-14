import React, { useContext, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Context } from "../../Statemanagement/Context";
import { styles } from "./styles";
import Animatedcircles from "./Animatedview/Animatedcircles";

const { width } = Dimensions.get("window");
const circleSize = width / 2;
const BreatheAnimation = () => {
  const { colors, paused } = useContext(Context);
  const move = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  Animated.loop(
    Animated.sequence([
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(move, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 300,
          delay: 100,
          useNativeDriver: true,
        }),
        Animated.timing(move, {
          toValue: 0,
          duration: 4000,
          delay: 1000,
          useNativeDriver: true,
        }),
      ]),
    ])
  ).start();

  useEffect(() => {
    if (paused) {
      move.stopAnimation();
    }
  }, [paused]);

  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleSize / 6],
  });
  const exhale = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  return (
    <View style={styles.container}>
      <Animatedcircles textOpacity={textOpacity} text={"Inhale"} />
      <Animatedcircles textOpacity={exhale} text={"Exhale"} />

      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1],
          outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
        });
        return (
          <Animated.View
            key={item}
            style={{
              opacity: 0.2,
              backgroundColor: colors.Breathe,
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
              ...StyleSheet.absoluteFill,
              transform: [
                {
                  rotateZ: rotation,
                },
                { translateX: translate },
                { translateY: translate },
              ],
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default BreatheAnimation;
