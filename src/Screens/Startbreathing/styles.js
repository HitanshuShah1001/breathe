import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
  },
  subcontainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { flex: 1, justifyContent: "space-around", alignItems: "center" },
});
