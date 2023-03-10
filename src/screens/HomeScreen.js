import React from "react";
import { Text, View, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useUser } from "../context/UserContext";

export default function Home({ navigation }) {
  const { username, isLoggedIn } = useUser();

  let welcomeText;
  if (isLoggedIn) {
    welcomeText = (
      <View style={globalStyles.textContainer}>
        <Image
          source={require("../../assets/fg_logo.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.mainText}>Hello, {username}!</Text>
        <Text style={globalStyles.plainText}>Welcome to FineGrind!</Text>
        <Text style={globalStyles.plainText}>
          Specialty Cafés at your fingertips!
        </Text>
        <Text style={globalStyles.plainText}>
          Start to explore and save your favorites!
        </Text>
      </View>
    );
  } else {
    welcomeText = (
      <View style={globalStyles.textContainer}>
        <Image
          source={require("../../assets/fg_logo.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.mainText}>Hello!</Text>
        <Text style={globalStyles.plainText}>Welcome to FineGrind!</Text>
        <Text style={globalStyles.plainText}>
          Specialty Cafés at your fingertips!
        </Text>
        <Text style={globalStyles.plainText}>
          Log in or register to get the most out of the app!
        </Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {welcomeText}
      <View style={globalStyles.buttonContainer}>
        <Button
          color="#5F7161"
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    </View>
  );
}
