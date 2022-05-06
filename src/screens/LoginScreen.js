import React, { useState } from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { globalStyles } from "../styles/global";

// this is just a boilerplate code so it's easy to copy/paste when a new screen or component is added

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={globalStyles.loginContainer}>
      <TextInput
        style={globalStyles.inputContainer}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={globalStyles.inputContainer}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={globalStyles.inputContainer}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={globalStyles.buttonContainer}>
        <Button title="Login" onPress={() => console.log("login")} />
        <Button title="Sign up" onPress={() => console.log("sign up")} />
      </View>
    </KeyboardAvoidingView>
  );
}
