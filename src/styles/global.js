import { StyleSheet } from "react-native";
import color from "./color";

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
    borderColor: color.lightGreen,
    borderRadius: 10,
    backgroundColor: color.light,
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

  details: {
    // CoffeeDetailsScreen
    flex: 2,
    marginHorizontal: 10,
    justifyContent: "space-around",
  },

  //  T E X T S

  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.lightGreen,
    marginBottom: 20,
  },

  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.lightGreen,
    margin: 20,
    alignSelf: "center",
  },

  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: color.darkGreen,
    margin: 5,
    alignSelf: "center",
  },

  plainText: {
    color: color.darkGreen,
  },

  info: {
    fontSize: 12,
    color: color.medium,
    alignSelf: "center",
  },

  // I N P U T

  inputField: {
    borderWidth: 1,
    borderColor: color.darkGreen,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
    backgroundColor: color.light,
  },

  // B U T T O N

  touchable: {
    color: color.lightGreen,
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
});
