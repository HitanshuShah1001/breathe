import { TouchableOpacity } from "react-native";
import ButtonLabels from "../Buttonlabels/Buttonlabels";
import Selected from "../Tick/tick";
import { useContext } from "react";
import { Context } from "../../Statemanagement/Context";
import { styles } from "./styles";

export default function Buttons({ action }: any) {
  const { sound: music } = useContext(Context);
  return (
    <TouchableOpacity style={styles.duration} onPress={() => action}>
      <ButtonLabels text="No Music" />
      {"No Music" === music && <Selected />}
    </TouchableOpacity>
  );
}
