import { useContext, useState } from "react";
import { View, Text, StyleSheet, Switch, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { Context } from "../../Statemanagement/Context";
import { Light, Dark } from "../../Utils/Constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import ContactUs from "../../Components/Contactus/Contactus";
import TotalSessions from "../../Components/TotalSessions/TotalSessions";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);
  const { Lightmode, setLightMode, colors, setColors } = useContext(Context);

  const toggleMode = () => {
    setLightMode(!Lightmode);
    setEnabled((enabled) => !enabled);
    setColors(Lightmode == false ? Light : Dark);
  };

  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "space-around" }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={colors.Background}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={[styles.text, { color: colors.Text }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleMode}
            value={enabled}
          />
        </View>
        <TotalSessions />
        <ContactUs />
      </View>
      <View style={{ flex: 1 }}></View>
    </LinearGradient>
  );
}
