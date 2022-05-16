import { StyleSheet } from "react-native";

// #5F7161
// #6D8B74
// #EFEAD8
// #D0C9C0
// https://colorhunt.co/palette/5f71616d8b74efead8d0c9c0

export const globalStyles = StyleSheet.create({
  // C O N T A I N E R S

  container: {
    flex: 1,
  },

  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    margin: 7,
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

  textContainer: {
    marginTop: 30,
    padding: 20,
    alignItems: "center",
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

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5F7161",
    margin: 5,
    alignSelf: "center",
  },

  plainText: {
    color: "#6D8B74",
  },

  info: {
    fontSize: 12,
    color: "#D0C9C0",
    alignSelf: "center",
  },

  // I N P U T

  inputField: {
    borderWidth: 1,
    borderColor: "#5F7161",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
    backgroundColor: "#EFEAD8",
  },

  // B U T T O N

  touchable: {
    color: "#6D8B74",
    fontWeight: "bold",
    fontSize: 16,
  },

  // I M A G E S

  image: {
    flex: 1,
    width: "auto",
    height: 150,
  },

  listimage: {
    width: "98%",
    height: 80,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },

  // ???

  details: {
    flex: 2,
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
});
