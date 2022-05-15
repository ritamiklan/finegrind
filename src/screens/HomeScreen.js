import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { firebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useUser } from "../context/UserContext";

export default function Home({ navigation }) {
  const auth = getAuth(firebaseApp);

  const { username, setUsername, isLoggedIn, setIsLoggedIn } = useUser();

  const handleSignout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    setUsername("");
  };

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
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button
          title="User Profile"
          onPress={() => navigation.navigate("UserProfile")}
        />
      </View>
    );
  } else {
    userProfButton = (
      <View style={globalStyles.buttonContainer}>
        <Button
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.details}>
        <Text style={globalStyles.mainText}>Hello {username}</Text>
      </View>
      {userProfButton}
      {loginButtons}
    </View>
  );
}
