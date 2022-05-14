import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { firebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useUser } from "../context/UserContext";

export default function Home({ navigation }) {
  const auth = getAuth(firebaseApp);

  const { username } = useUser();

  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.details}>
        <Text style={globalStyles.mainText}>Hello {username}</Text>
        <Text>{auth.currentUser?.email}</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate("RegisterUserScreen")}
        />
        <Button
          title="Log in"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <Button title="Log out" onPress={handleSignout} />
      </View>
    </View>
  );
}
