import React, { useState } from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { globalStyles } from "../styles/global";
import firebaseApp from "../utils/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// this is just a boilerplate code so it's easy to copy/paste when a new screen or component is added

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentioals) => {
        const user = userCredentioals.user;
        console.log("registered with", user.email);
      }
    );
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentioals) => {
        const user = userCredentioals.user;
        console.log("logged in with", user.email);
      }
    );
  };

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <TextInput
          style={globalStyles.inputField}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={globalStyles.inputField}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
        />
        <TextInput
          style={globalStyles.inputField}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Sign up" onPress={handleSignup} />
      </View>
    </KeyboardAvoidingView>
  );
}
