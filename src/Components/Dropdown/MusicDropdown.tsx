import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Audio } from "expo-av";
import { styles } from "./styles";
import { Music } from "../../Resources/Music";
import { Context } from "../../Statemanagement/Context";
import { useRoute } from "@react-navigation/native";
import { AudioStoporPlay } from "../../Screens/Startbreathing/Body/Body";

export default function MusicDropdown() {
  const route = useRoute();
  const { sound: music, setSound } = React.useContext(Context);
  const { audio, setAudio } = React.useContext(AudioStoporPlay);
  const [show, setShow] = useState<Boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | any>(null);

  // useEffect(() => {
  //   stopAudioifnavigatedtoanotherroute();
  // }, [route]);

  const demoSound = async (mood: string) => {
    setShow(!show);
    setSound(mood);
    await audio?.stopAsync();
    const { sound } = await Audio.Sound.createAsync(
      Music[Music.findIndex((x) => x.mood == mood)].audio,
      {
        isLooping: true,
      }
    );

    await sound.playAsync();
    setAudio(sound);
    timerRef.current = setTimeout(() => {
      sound.stopAsync();
    }, 10000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShow(!show)}
        >
          <Text style={{ color: "white" }}>{music}</Text>
        </TouchableOpacity>

        {show && (
          <ScrollView>
            {Music.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.duration}
                  onPress={() => demoSound(item.mood)}
                  key={index}
                >
                  <Text style={{ color: "white" }}>{item.mood}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
