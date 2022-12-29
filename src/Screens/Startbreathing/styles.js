import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingTop: 40,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  subcontainer: {
    flex: 1,
    alignItems: "center",
  },
  content: { flex: 1, justifyContent: "space-around", alignItems: "center" },
});
