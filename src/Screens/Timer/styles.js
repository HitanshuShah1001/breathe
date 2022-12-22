import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  time: {
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
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
