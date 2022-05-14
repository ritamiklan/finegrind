import React, { useEffect } from "react";
import { View, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { globalStyles } from "../styles/global";
import firebaseApp from "../utils/firebase";
import { getDatabase, ref } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useUser } from "../context/UserContext";
import { onValue } from "firebase/database";

// LOGIN SCREEN FOR RETURNING, ALREADY REGISTERED USERS (NOT FULLY IMPLEMENTED YET)

export default function LoginScreen({ navigation }) {
  const { username, email, password, setUsername, setEmail, setPassword } =
    useUser();

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const db = getDatabase(firebaseApp);
        const userRef = ref(db, "users/" + user.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUsername(data.username);
          navigation.navigate("Home");
          setEmail("");
          setPassword("");
        });
      }
    });
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentioals) => {
        const user = userCredentioals.user;
        console.log("LOGGED IN WITH ", user.email);
      }
    );
  };

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
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
        <Button title="LOG IN" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}
