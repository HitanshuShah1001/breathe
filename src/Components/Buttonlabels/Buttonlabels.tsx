import { View, Text } from "react-native";

interface Props {
  text: string | String | number;
  color?: string | String;
}

export default function ButtonLabels({ text, color = "black" }: Props) {
  return <Text style={{ color: color as any }}>{text}</Text>;
}
