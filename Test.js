import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function LogginPage() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_300Light,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Image
          source={require("./assets/GreenHouse.png")}
          style={styles.image}
        />

        <Text style={styles.text}>Login Screen</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#8F8F8F"
          // value={username}
          // onChangeText={(text) => setUsername(text)}
          style={styles.username}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#8F8F8F"
          // value={password}
          // onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.password}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#0A3832",
    flex: 1,
  },

  bottom: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    marginTop: -260,

    width: "600@msr",
    height: "400@msr",
    resizeMode: "contain",
  },

  text: {
    marginTop: "20@ms0.3",
    color: "white",
    fontSize: "29@msr",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    marginBottom: "50@mvs0.1",
  },

  username: {
    marginBottom: 30,
    fontSize: 20,
    color: "#FFFFFF",
    paddingLeft: 10,
    alignSelf: "center",
    width: "90%",
    height: 70,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    borderRadius: 15,
  },

  password: {
    marginBottom: "50@ms0.3",
    fontSize: 20,
    color: "#FFFFFF",
    paddingLeft: 10,
    alignSelf: "center",
    width: "90%",
    height: 70,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    borderRadius: 15,
  },

  btn: {
    backgroundColor: "#BBD409",
    width: "90%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },

  text1: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
});
