import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  color: String;
}
export default function Header({ color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: color as any }]}>
        Hi, How are you feeling today?
      </Text>
    </View>
  );
}
