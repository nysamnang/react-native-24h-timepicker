import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonAction: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "#006BFF",
    fontWeight: "500"
  },
  buttonTextCancel: {
    color: "#666",
    fontWeight: "400"
  },
  body: {
    flexDirection: "row"
  },
  picker: {
    flex: 1
  },
  separator: {
    alignSelf: "center",
    fontSize: 16
  }
});

export default styles;
