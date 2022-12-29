import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  time: {
    fontSize: 24,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "Secular",
  },
  button: {
    backgroundColor: "green",
    color: "white",
  },
  pressable: {
    backgroundColor: "lightgreen",
    width: 100,
    alignItems: "center",
    height: 45,
    justifyContent: "center",
    borderRadius: 20,
  },
  subcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
});
