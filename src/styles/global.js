import { StyleSheet } from "react-native";

// #5F7161
// #6D8B74
// #EFEAD8
// #D0C9C0
// https://colorhunt.co/palette/5f71616d8b74efead8d0c9c0

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5F7161",
  },
  headerText: {},
  plainText: {},

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
    borderColor: "#6D8B74",
    borderRadius: 5,
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
  button: { borderRadius: 80 },
  list: {
    margin: 15,
  },
});
