import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: { height: "70%", width: "80%", borderRadius: 20 },
  text: { fontFamily: "Secular" },
});
