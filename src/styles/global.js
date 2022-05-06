import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#333",
  },
  image: {
    flex: 1,
    width: "auto",
    height: 150,
  },
  details: {
    flex: 2,
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50,
  },
  button: {},
  list: {
    margin: 15,
  },
});
