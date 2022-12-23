import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    top: width / 4,
    left: width / 4,
  },
  text: {
    fontSize: 20,
    fontWeight: "900",

    fontFamily: "Secular",
  },
});
