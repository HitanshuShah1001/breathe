import { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../../Statemanagement/Context";
import { styles } from "./styles";

export default function TotalSessions() {
  const { sessions, colors } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.Text }]}>
        Sessions Completed
      </Text>
      <View>
        <Text style={[styles.sessions, { color: colors.Text }]}>
          {sessions}
        </Text>
      </View>
    </View>
  );
}
