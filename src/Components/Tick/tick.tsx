import { Image, ImageSourcePropType } from "react-native";
import { Tick } from "../../Resources/Images";

export default function Selected() {
  return (
    <Image
      source={Tick}
      style={{ width: 12, height: 12, position: "absolute", right: 5 }}
    />
  );
}
