import React, { useEffect } from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { globalStyles } from "../styles/global";
import firebaseApp from "../utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseSaveUser from "../utils/firebaseSaveUser";

import { useUser } from "../context/UserContext";

// FIRST TIME REGISTER FOR USERS, DATA SAVED TO DB

export default function RegisterUserScreen({ navigation }) {
  const { username, email, password, setUsername, setEmail, setPassword } =
    useUser();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        firebaseSaveUser(user, username);
      }
    );
  };

  // const handleLogin = () => {
  //   signInWithEmailAndPassword(auth, email, password).then(
  //     (userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log("logged in with", user.email);
  //     }
  //   );
  // };

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
        <Button title="REGISTER" onPress={handleSignup} />
      </View>
    </KeyboardAvoidingView>
  );
}
