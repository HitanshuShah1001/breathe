import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Context } from "./src/Statemanagement/Context";
import { useFonts } from "expo-font";
import Navigation from "./Navigation";
import { Light } from "./src/Utils/Constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export default function App() {
  let [fontsLoaded] = useFonts({
    Secular: require("./assets/fonts/SecularOne-Regular.ttf"),
  });

  const [isLoaded, setisLoaded] = useState<Boolean>(false);

  const [Lightmode, setLightMode] = useState<Boolean>(true);
  const [duration, setDuration] = useState<number>(120);
  const [colors, setColors] = useState<Object>(Light);
  const [sessions, setSessions] = useState<number>(0);
  const [sound, setSound] = useState<String>("Angry");
  const [paused, setPaused] = useState<Boolean>(false);

  useEffect(() => {
    checkBreatheSessions();
  }, []);

  useEffect(() => {
    askNotificationPermission();
  }, []);

  const askNotificationPermission = async () => {
    const permission = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowDisplayInCarPlay: true,
        allowAnnouncements: true,
      },
      android: {},
    });
    if (permission.status === "granted") {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "What are you dealing with currently?Let's make it simpler",
        },
        trigger: {
          hour: 12,
          minute: 30,
          repeats: true,
        },
      });
    }
  };

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
