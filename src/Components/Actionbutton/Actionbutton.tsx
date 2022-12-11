import React from "react";
import { Pressable,Text } from "react-native";
import { styles } from "./styles";

interface Props {
    action:() => void
    showpause?:Boolean
    pause?:Boolean
}
export default function Actionbutton({action,pause,showpause}:Props) {
  return (
    <Pressable onPress={action} style={styles.pressable}>
        {
            showpause===true ? (
                <Text>{pause ? "Resume" : "Pause"}</Text>
            ): <Text>Stop</Text>
        }
        
     
    </Pressable>
  );
}
