import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import firebaseApp, { auth } from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import useList from "../hooks/useList";
import { globalStyles } from "../styles/global";
import ListDetail from "../components/ListDetailComponent";

// User profile screen
// LOG OUT BUTTON LIVES HERE NOW

export default function UserProfile({ navigation }) {
  const { uid, username, setUsername, setIsLoggedIn, setFavs } = useUser();
  const [coffeeList] = useList();

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
