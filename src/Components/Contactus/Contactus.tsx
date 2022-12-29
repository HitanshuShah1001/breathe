import { Text } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { Context } from "../../Statemanagement/Context";

export default function ContactUs() {
  const { colors } = useContext(Context);
  return <Text style={[styles.text, { color: colors.Text }]}>ContactUs</Text>;
}
