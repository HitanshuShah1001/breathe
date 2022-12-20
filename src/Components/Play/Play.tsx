import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  onClick?: any;
}

export default function Play({ onClick }: Props) {
  return (
    <Pressable onPress={onClick}>
      <Image
        source={require("../../../assets/play.png")}
        style={{ height: 100, width: 100, marginTop: 40 }}
      />
    </Pressable>
  );
}
