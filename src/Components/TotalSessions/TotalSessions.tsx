import { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../../Statemanagement/Context";
import { styles } from "./styles";

interface Props {
  text: string;
  value: number;
}
export default function TotalSessions({ text, value }: Props) {
  const { colors } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.Text }]}>{text}</Text>
      <View>
        <Text style={[styles.sessions, { color: colors.Text }]}>{value}</Text>
      </View>
    </View>
  );
}
