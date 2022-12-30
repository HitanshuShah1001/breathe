import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { Context } from "../../Statemanagement/Context";
import { openComposer } from "react-native-email-link";

export default function ContactUs() {
  const { colors } = useContext(Context);
  return (
    <Pressable onPress={() => openComposer({ to: "hitanshushah5@gmail.com" })}>
      <Text style={[styles.text, { color: colors.Text }]}>ContactUs</Text>
    </Pressable>
  );
}
