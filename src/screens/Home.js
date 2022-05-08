import React from "react";
import { Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { firebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default function Home({ navigation }) {
  const auth = getAuth(firebaseApp);

  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.details}>
        <Text>Hello</Text>
        <Text>{auth.currentUser?.email}</Text>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          title="Cafe list"
          onPress={() => navigation.navigate("CoffeeListScreen")}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
}
