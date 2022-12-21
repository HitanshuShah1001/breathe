import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  action?: any;
  showpause?: Boolean;
  pause?: Boolean;
  color: String;
}
export default function Actionbutton({
  action,
  pause,
  showpause,
  color,
}: Props) {
  return (
    <Pressable
      onPress={action}
      style={[styles.pressable, { backgroundColor: color as any }]}
    >
      {showpause === true ? (
        <Text>{pause ? "Resume" : "Pause"}</Text>
      ) : (
        <Text>Stop</Text>
      )}
    </Pressable>
  );
}
