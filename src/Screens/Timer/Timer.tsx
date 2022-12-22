import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import Actionbutton from "../../Components/Actionbutton/Actionbutton";
import { styles } from "./styles";
import { Context } from "../../Statemanagement/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  color: String;
  buttoncolor: String;
}

export default function Timer({ color, buttoncolor }: Props) {
  const { duration, sessions, setSessions } = useContext(Context);
  const navigation = useNavigation();
  const [time, setTime] = useState<number>(duration);
  const [minutes, setMinutes] = useState<number>(Math.floor(time / 60));
  const [seconds, setSeconds] = useState<number>(Math.floor(time % 60));
  const [pause, setPause] = useState<boolean>(false);
  const [sound, setSound] = useState<any>();
  const durationRef = useRef<NodeJS.Timeout | any>(null);

  useEffect(() => {
    console.log(sessions, "Sessions");
    playSound();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  useEffect(() => {
    if (!pause) {
      durationRef.current = setInterval(() => {
        setTime(time - 1);
        setSeconds(Math.floor(time % 60));
        setMinutes(Math.floor(time / 60));
      }, 1000);
    }

    return () => clearInterval(durationRef.current);
  }, [time, pause]);

  useEffect(() => {
    if (time == 0) {
      Timerfinished();
    }
  }, [time]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../Music/Anxiety.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  const Stop = async () => {
    await sound.unloadAsync();
    clearInterval(durationRef.current);
    navigation.goBack();
  };

  const Pause = async () => {
    setPause(true);
    await sound.pauseAsync();
  };

  const Resume = async () => {
    setPause(false);
    await sound.playAsync();
  };

  const RenderAction = () => (pause ? Resume() : Pause());

  const Timerfinished = async () => {
    await sound.unloadAsync();
    AsyncStorage.setItem("Sessions", JSON.stringify(sessions + 1));
    setSessions(sessions + 1);
    navigation.goBack();
    clearInterval(durationRef.current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {[minutes, seconds].map((item, index) => (
          <Text key={index} style={[styles.time, { color: color as any }]}>
            {item < 0 ? "00" : item} {index === 0 && ": "}
          </Text>
        ))}
      </View>
      <View style={styles.subcontainer}>
        <Actionbutton
          action={RenderAction}
          pause={pause}
          showpause
          color={buttoncolor}
        />
        <Actionbutton action={Stop} color={buttoncolor} />
      </View>
    </View>
  );
}
