import React, { useContext } from "react";
import { View } from "react-native";
import Timer from "../Timer/Timer";
import BreatheAnimation from "./Animation";
import { Context } from "../../Statemanagement/Context";
import { LinearGradient } from "expo-linear-gradient";
const Breathing = () => {
  const { colors } = useContext(Context);
  return (
    <LinearGradient
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.Background}
    >
      <BreatheAnimation
        animation={colors.Breathe}
        background={colors.Background}
      />
      <Timer color={colors.Text} buttoncolor={colors.Buttoncolor} />
    </LinearGradient>
  );
};

export default Breathing;
