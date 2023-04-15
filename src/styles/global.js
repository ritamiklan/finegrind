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
    borderColor: color.mediumBlue,
    borderRadius: 10,
    backgroundColor: color.lightGrey,
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
  },

  //  T E X T S

  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.mediumBlue,
    marginBottom: 20,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: color.mediumBlue,
    margin: 20,
    alignSelf: "center",
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.mediumBlue,
    margin: 5,
    alignSelf: "center",
  },

  plainText: {
    fontSize: 15,
    color: color.mediumBlue,
    marginHorizontal: 10,
  },

  plainCenterText: {
    fontSize: 15,
    color: color.mediumBlue,
    marginHorizontal: 10,
    alignSelf: "center",
  },

  info: {
    fontSize: 12,
    color: color.medium,
    alignSelf: "center",
  },

  // I N P U T

  inputField: {
    borderWidth: 1,
    borderColor: color.mediumBlue,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
    backgroundColor: color.white,
  },

  // B U T T O N

  touchable: {
    color: color.mediumBlue,
    fontWeight: "bold",
    fontSize: 18,
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
    width: 60,
    height: 60,
    alignSelf: "center",
  },

  markerIcon: {
    width: 18,
    height: 18,
    tintColor: color.darkBlue,
  },

  // T O O L T I P

  tooltip: {
    width: 100,
    height: 60,
    padding: 5,
    backgroundColor: color.white,
    color: color.mediumBlue,
    borderColor: color.mediumBlue,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    alignSelf: "center",
  },
});
