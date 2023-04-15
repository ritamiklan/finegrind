import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import firebaseRegisterUser from "../utils/firebaseRegisterUser";
import { useUser } from "../context/UserContext";
import color from "../styles/color";

// FIRST TIME REGISTER FOR USERS, DATA SAVED TO DB

export default function RegisterUserScreen({ navigation }) {
  const {
    username,
    email,
    password,
    setIsLoggedIn,
    setUsername,
    setEmail,
    setPassword,
    setUid,
  } = useUser();

  const [err, setErr] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        navigation.navigate("Home");
      }
    });
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        firebaseRegisterUser(user, username);
        setUid(user.uid);
      })
      .catch((err) => setErr(err));
  };

  let errorMessage;
  if (err !== null) {
    errorMessage = (
      <Text style={globalStyles.errorText}>
        Please make sure you fill all the fields correctly.
      </Text>
    );
  }

  let warning;
  if (password.length < 6) {
    warning = (
      <View>
        <Text>The password must be at least 6 characters.</Text>
      </View>
    );
  } else {
    warning = null;
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.headerText}>Please register</Text>
        {errorMessage}
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
        {warning}
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button
          color={color.mediumBlue}
          title="REGISTER"
          onPress={handleSignup}
        />
      </View>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.plainText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={globalStyles.touchable}>Log in instead</Text>
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.info}>
        We won't use your data for anything bad, promise!
      </Text>
    </KeyboardAvoidingView>
  );
}
