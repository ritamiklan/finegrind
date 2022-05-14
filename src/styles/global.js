import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
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
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
