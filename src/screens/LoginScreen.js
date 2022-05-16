import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { globalStyles } from "../styles/global";
import firebaseApp from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../context/UserContext";

// LOGIN SCREEN FOR RETURNING, ALREADY REGISTERED USERS (NOT FULLY IMPLEMENTED YET)

export default function LoginScreen({ navigation }) {
  const {
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    setIsLoggedIn,
    setUid,
    setFavs,
  } = useUser();

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const db = getDatabase(firebaseApp);
        const userRef = ref(db, "users/" + user.uid);
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          setUsername(data.username);
          setIsLoggedIn(true);
          navigation.navigate("Home");
          setEmail("");
          setPassword("");
          setUid(user.uid);
          if (data.favs) setFavs(data.favs);
          else setFavs({});
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
        <Text style={globalStyles.headerText}>Log in to your account</Text>
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
        <Button color="#6D8B74" title="LOG IN" onPress={handleLogin} />
      </View>
    </KeyboardAvoidingView>
  );
}
