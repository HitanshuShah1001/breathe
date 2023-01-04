import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Context } from "./src/Statemanagement/Context";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";
import { Light } from "./src/Utils/Constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { askNotificationPermission } from "./src/Utils/ScheduleNotification";
import { LogBox } from "react-native";
import { Sessiondata } from "./src/Utils/Sessiondata";

export default function App() {
  LogBox.ignoreAllLogs();
  let [fontsLoaded] = useFonts({
    Secular: require("./assets/fonts/SecularOne-Regular.ttf"),
  });
  const [Lightmode, setLightMode] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number>(120);
  const [colors, setColors] = useState<Object>(Light);
  const [sessions, setSessions] = useState<number>(0);
  const [sound, setSound] = useState<String>("Soft");
  const [paused, setPaused] = useState<Boolean>(false);
  const [incompletesessions, setIncompletesessions] = useState<number>(0);
  const [sessiondata, setSessiondata] = useState<Object>(Sessiondata);

  useEffect(() => {
    checkBreatheSessions();
    CheckIncompleteBreatheSessions();
    Getminutewisebreathingdata();
  }, []);

  useEffect(() => {
    askNotificationPermission();
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
    sound,
    setSound,
    paused,
    setPaused,
    incompletesessions,
    setIncompletesessions,
    sessiondata,
    setSessiondata,
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

  const CheckIncompleteBreatheSessions = async () => {
    const Incompletesessions = await AsyncStorage.getItem("Incompletesessions");
    if (Incompletesessions !== null) {
      setIncompletesessions(+Incompletesessions);
    } else {
      const Incompletesessionsstring = JSON.stringify(0);
      await AsyncStorage.setItem(
        "Incompletesessions",
        Incompletesessionsstring
      );
    }
  };

  const Getminutewisebreathingdata = async () => {
    const data = await AsyncStorage.getItem("@minutewisebreathingsession");
    if (data !== null) {
      setSessiondata(JSON.parse(data));
    } else {
      const data = JSON.stringify(sessiondata);
      await AsyncStorage.setItem("@minutewisebreathingsession", data);
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
