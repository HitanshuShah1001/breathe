import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { Context } from "../../../Statemanagement/Context";

interface Props {
  uri: any;
  uri2: any;
  label: String;
  label2: String;
  color: String;
}
export default function Card({ uri, uri2, label, label2, color }: Props) {
  const navigation = useNavigation();
  const { sound, setSound } = useContext(Context);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.subcontainer}
        onPress={() => {
          setSound(label);
          navigation.navigate("Startbreathing");
        }}
      >
        <Image source={uri} style={styles.image} resizeMode="cover" />
        <Text style={[styles.text, { color: color }]}>{label}</Text>
      </Pressable>
      <Pressable
        style={styles.subcontainer}
        onPress={() => {
          setSound(label2);
          navigation.navigate("Startbreathing");
        }}
      >
        <Image source={uri2} style={styles.image} resizeMode="cover" />
        <Text style={[styles.text, { color: color }]}>{label2}</Text>
      </Pressable>
    </View>
  );
}
