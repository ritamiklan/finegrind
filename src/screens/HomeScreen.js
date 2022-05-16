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
      <View>
        <Text style={globalStyles.mainText}>Hello, {username}!</Text>
        <Text>Welcome to FineGrind!</Text>
        <Text>Specialty Cafés at your fingertips!</Text>
        <Text>Start to explore, save favorites, and enjoy your day!</Text>
      </View>
    );
  } else {
    welcomeText = (
      <View>
        <Text style={globalStyles.mainText}>Hello!</Text>
        <Text>Welcome to FineGrind!</Text>
        <Text>Specialty Cafés at your fingertips!</Text>
        <Text>Log in or register to get the most out of the app!</Text>
      </View>
    );
  }

  let loginButtons;
  if (isLoggedIn) {
    loginButtons = (
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity onPress={handleSignout}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    loginButtons = (
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterUserScreen")}
        >
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }

  let userProfButton;
  if (isLoggedIn) {
    userProfButton = (
      <View style={globalStyles.buttonContainer}>
        <Button
          style={globalStyles.button}
          color="#6D8B74"
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button
          style={globalStyles.button}
          color="#6D8B74"
          title="User Profile"
          onPress={() => navigation.navigate("UserProfile")}
        />
      </View>
    );
  } else {
    userProfButton = (
      <View style={globalStyles.buttonContainer}>
        <Button
          style={globalStyles.button}
          color="#6D8B74"
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.details}>
        <Image
          source={require("../../assets/fg_logo.png")}
          style={{ width: 250, height: 250 }}
        />
        {welcomeText}
        {userProfButton}
        {loginButtons}
      </View>
    </View>
  );
}
