import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import firebaseApp, { auth } from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "../context/UserContext";
import color from "../styles/color";

// LOGIN SCREEN FOR RETURNING, ALREADY REGISTERED USERS

export default function LoginScreen({ navigation }) {
  const {
    email,
    setEmail,
    setFavs,
    password,
    setIsLoggedIn,
    setPassword,
    setUid,
    setUsername,
  } = useUser();

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
        console.log("LOGGED IN WITH ", user.email, user.uid);
      }
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={globalStyles.container}>
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
        <Button color={color.lightBlue} title="LOG IN" onPress={handleLogin} />
      </View>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.plainText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterUserScreen")}
        >
          <Text style={globalStyles.touchable}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
