import { View } from "react-native";
import Exercisetitle from "../../../Components/Exercisetitle/Exercisetitle";
import Exercisecaption from "../../../Components/Exercisecaption/Exercisecaption";
import Play from "../../../Components/Play/Play";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { Colortypes } from "../../../Statemanagement/Context";

interface Props {
  colors: Colortypes;
}
export default function Body({ colors }: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.subcontainer}>
      <View style={styles.content}>
        <Exercisetitle color={colors.Text} />
        <Exercisecaption color={colors.Text} />
        <Play onClick={() => navigation.navigate("Breathing")} />
        <Dropdown />
      </View>
    </View>
  );
}