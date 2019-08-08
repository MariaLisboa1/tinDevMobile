import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  platform
} from "react-native";
import api from "../services/api";

import logo from "../assets/logo.png";

async function Login() {
  const [user, setUser] = useState("");
  const response = await api.post("/Devs", {
    username: user
  });

  const { _id } = response.data;

  function handleLogin({ navigation }) {
    navigation.navigate("Main", { _id });
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={platform.OS === "ios"}
      style={styles.container}
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={user}
        onChangeText={setUser}
        placeholderTextColor="#999"
        placeholder="Digite seu usuário no github"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  },
  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#DF4723",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
