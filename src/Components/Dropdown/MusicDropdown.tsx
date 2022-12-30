import React, { useRef, useState } from "react";
import { View, TouchableOpacity, ScrollView, Button } from "react-native";
import { Audio } from "expo-av";
import { styles } from "./styles";
import { Music } from "../../Resources/Music";
import { Context } from "../../Statemanagement/Context";
import { AudioStoporPlay } from "../../Screens/Startbreathing/Body/Body";
import ButtonLabels from "../Buttonlabels/Buttonlabels";
import Selected from "../Tick/tick";
import Buttons from "./Button";

export default function MusicDropdown() {
  const { sound: music, setSound } = React.useContext(Context);
  const { audio, setAudio } = React.useContext(AudioStoporPlay);
  const [show, setShow] = useState<Boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | any>(null);

  const selectSound = async () => {
    await audio?.stopAsync();
    setShow(!show);
  };
  const demoSound = async (music: string) => {
    setSound(music);
    await audio?.stopAsync();
    const { sound } = await Audio.Sound.createAsync(
      Music[Music.findIndex((x) => x.mood == music)].audio,
      {
        isLooping: false,
      }
    );

    await sound.playAsync();
    setAudio(sound);
    // timerRef.current = setTimeout(() => {
    //   sound.stopAsync();
    // }, 10000);
  };

  const Nomusicthanks = () => {
    setSound("No Music");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShow(!show)}
        >
          <ButtonLabels text={music} />
        </TouchableOpacity>

        {show && (
          <ScrollView>
            {Music.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.duration}
                  onPress={() => {
                    demoSound(item.mood);
                  }}
                  key={index}
                >
                  <ButtonLabels text={item.mood} />
                  {item.mood === music && <Selected />}
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              style={styles.duration}
              onPress={() => Nomusicthanks()}
            >
              <ButtonLabels text="No Music" />
              {"No Music" === music && <Selected />}
            </TouchableOpacity>

            <Button title="Select" onPress={() => selectSound()} />
          </ScrollView>
        )}
      </View>
    </View>
  );
}
