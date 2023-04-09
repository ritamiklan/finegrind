import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import { auth } from "../utils/firebase";
import { globalStyles } from "../styles/global";

// User profile screen
// LOG OUT BUTTON LIVES HERE NOW

export default function UserProfile({ navigation }) {
  const { username, setUsername, setIsLoggedIn, setFavs } = useUser();

  const handleSignout = () => {
    auth.signOut();
    setIsLoggedIn(false);
    setUsername("");
    setFavs({});
    navigation.navigate("Home");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.plainText}>Your username: {username}</Text>
      </View>

      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity onPress={handleSignout}>
          <Text style={globalStyles.touchable}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
