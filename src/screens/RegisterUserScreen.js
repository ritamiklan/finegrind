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
import firebaseApp from "../utils/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseRegisterUser from "../utils/firebaseRegisterUser";
import { useUser } from "../context/UserContext";

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

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        navigation.navigate("Home");
      }
    });
  }, []);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        firebaseRegisterUser(user, username);
        setUid(user.uid);
      }
    );
  };

  return (
    <KeyboardAvoidingView style={globalStyles.container}>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.headerText}>Please register</Text>
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
        <View style={globalStyles.textContainer}>
          <Text style={globalStyles.plainText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={globalStyles.touchable}>Log in instead</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button color="#6D8B74" title="REGISTER" onPress={handleSignup} />
      </View>
      <Text style={globalStyles.info}>
        We won't use your data for anything bad, promise!
      </Text>
    </KeyboardAvoidingView>
  );
}
