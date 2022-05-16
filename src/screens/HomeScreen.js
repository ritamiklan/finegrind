import React from "react";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { firebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useUser } from "../context/UserContext";

export default function Home({ navigation }) {
  const auth = getAuth(firebaseApp);

  const { username, setUsername, isLoggedIn, setIsLoggedIn, setFavs } =
    useUser();

  const handleSignout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    setUsername("");
    setFavs({});
  };

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
          Start to exploreand save your favorites!
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

  let userProfButton;
  if (isLoggedIn) {
    userProfButton = (
      <View style={globalStyles.buttonContainer}>
        <Button
          color="#5F7161"
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button
          color="#5F7161"
          title="User Profile"
          onPress={() => navigation.navigate("UserProfile")}
        />
      </View>
    );
  } else {
    userProfButton = (
      <View style={globalStyles.buttonContainer}>
        <Button
          color="#5F7161"
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    );
  }

  let loginButtons;
  if (isLoggedIn) {
    loginButtons = (
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity onPress={handleSignout}>
          <Text style={globalStyles.touchable}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    loginButtons = (
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterUserScreen")}
        >
          <Text style={globalStyles.touchable}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={globalStyles.touchable}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      {welcomeText}
      {userProfButton}
      {loginButtons}
    </View>
  );
}
