import React, { useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { Context } from "../../Statemanagement/Context";
import GoBack from "./Close/Close";
import Body from "./Body/Body";

export default function Startbreathing() {
  const { colors } = useContext(Context);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, justifyContent: "space-around" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={colors.Background}
      >
        <View style={styles.parent}>
          <GoBack />
          <Body colors={colors} />
          <View style={{ flex: 2 }}></View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
