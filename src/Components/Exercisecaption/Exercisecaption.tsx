import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  text?: String;
  color?: String;
}
export default function Exercisecaption({
  text = "Tap to start the exercise",
  color,
}: Props) {
  return (
    <View>
      <Text style={[styles.text, { color: color as any }]}>{text}</Text>
    </View>
  );
}
