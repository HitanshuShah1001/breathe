import React, { useContext } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Context } from "../../Statemanagement/Context";
import Body from "./Body/Body";

export default function Startbreathing() {
  const { colors } = useContext(Context);
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.Background}
    >
      <View style={styles.parent}>
        <Body colors={colors} />
      </View>
    </LinearGradient>
  );
}
