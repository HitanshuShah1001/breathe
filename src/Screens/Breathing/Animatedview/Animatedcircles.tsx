import { useContext } from "react";
import { styles } from "../styles";
import { Text, Animated, Dimensions, StyleSheet } from "react-native";
import { Context } from "../../../Statemanagement/Context";

const { width } = Dimensions.get("window");
const circleSize = width / 2;

export default function Animatedcircles({ textOpacity, text }: any) {
  const { colors } = useContext(Context);
  return (
    <Animated.View
      style={{
        width: circleSize,
        height: circleSize,
        ...StyleSheet.absoluteFill,
        alignItems: "center",
        justifyContent: "center",
        opacity: textOpacity,
      }}
    >
      <Text style={[styles.text, { color: colors.Breathetext as any }]}>
        {text}
      </Text>
    </Animated.View>
  );
}
