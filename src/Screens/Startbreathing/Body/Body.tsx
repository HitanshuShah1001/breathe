import React from "react";
import { View } from "react-native";
import Exercisetitle from "../../../Components/Exercisetitle/Exercisetitle";
import Exercisecaption from "../../../Components/Exercisecaption/Exercisecaption";
import Play from "../../../Components/Play/Play";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { Colortypes } from "../../../Statemanagement/Context";
import MusicDropdown from "../../../Components/Dropdown/MusicDropdown";
import { useState } from "react";

interface Props {
  colors: Colortypes;
}

export const AudioStoporPlay = React.createContext<any>();

export default function Body({ colors }: Props) {
  const [audio, setAudio] = useState<any>();
  const navigation = useNavigation();
  const values = { audio, setAudio };
  return (
    <AudioStoporPlay.Provider value={values}>
      <View style={styles.subcontainer}>
        <Exercisetitle color={colors.Text} />
        <Exercisecaption color={colors.Text} />
        <Play
          onClick={async () => {
            await audio?.stopAsync();
            navigation.navigate("Breathing");
          }}
        />
        <Dropdown />
        <MusicDropdown />
      </View>
    </AudioStoporPlay.Provider>
  );
}
