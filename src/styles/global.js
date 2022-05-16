import { StyleSheet } from "react-native";

// #5F7161
// #6D8B74
// #EFEAD8
// #D0C9C0
// https://colorhunt.co/palette/5f71616d8b74efead8d0c9c0

export const globalStyles = StyleSheet.create({
  // C O N T A I N E R S

  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listitemContainer: {
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6D8B74",
    borderRadius: 10,
    backgroundColor: "#EFEAD8",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50,
  },

  //  T E X T S

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5F7161",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5F7161",
    margin: 20,
    alignSelf: "center",
  },
  plainText: {},

  // I N P U T

  inputField: {
    borderWidth: 1,
    borderColor: "#6D8B74",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
  },

  // B U T T O N

  touchable: {
    color: "#6D8B74",
    fontWeight: "bold",
  },

  list: {
    margin: 15,
  },

  // I M A G E S

  image: {
    flex: 1,
    width: "auto",
    height: 150,
  },

  listimage: {
    width: "90%",
    height: 80,
    borderRadius: 10,
    marginBottom: 20,
  },

  logo: {
    width: 250,
    height: 250,
    alignSelf: "flex-start",
  },

  // ???

  details: {
    flex: 2,
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
});
