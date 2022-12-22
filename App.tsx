import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Context } from "./src/Statemanagement/Context";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";
import { Light } from "./src/Utils/Constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Secular: require("./assets/fonts/SecularOne-Regular.ttf"),
  });

  const [isLoaded, setisLoaded] = useState<Boolean>(false);

  const [Lightmode, setLightMode] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number>(120);
  const [colors, setColors] = useState<Object>(Light);
  const [sessions, setSessions] = useState<number>();

  useEffect(() => {
    checkBreatheSessions();
  }, []);

  const values = {
    duration,
    setDuration,
    colors,
    setColors,
    Lightmode,
    setLightMode,
    sessions,
    setSessions,
  };

  const checkBreatheSessions = async () => {
    const totalSessions = await AsyncStorage.getItem("Sessions");
    if (totalSessions !== null) {
      setSessions(+totalSessions);
    } else {
      const Sessionsstring = JSON.stringify(0);
      await AsyncStorage.setItem("Sessions", Sessionsstring);
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <Context.Provider value={values}>
        <View style={{ flex: 1 }}>
          <Navigation />
        </View>
      </Context.Provider>
    );
  }
}
