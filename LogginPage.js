import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
export default function LoginPage({ navigation }) {
  let [fontsLoaded] = useFonts({ Inter_600SemiBold });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login validation here
    if (username === "Admin" && password === "123") {
      // If username and password are correct, navigate to the home screen
      navigation.navigate("Home");
    } else {
      // If username or password is incorrect, you can display an error message or take appropriate action
      alert("Invalid username or password");
    }
  };

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >
      <StatusBar style="light" backgroundColor="#0A3832" />
      <View style={styles.top}>
        <Animated.Image
          entering={FadeInUp.delay(100).duration(100).springify()}
          source={require("./assets/GreenHouse.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottom}>
        <Animated.Text
          entering={FadeInUp.delay(200).duration(100).springify()}
          style={styles.text}
        >
          Login Screen
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(300).duration(100).springify()}
          style={styles.Input}
        >
          <TextInput
            placeholder="Username"
            placeholderTextColor="#8F8F8F"
            style={styles.username}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#8F8F8F"
            secureTextEntry
            style={styles.password}
            value={password}
            onChangeText={setPassword}
          />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(100).springify()}
          style={styles.btnView}
        >
          <TouchableOpacity style={styles.btn} onPress={handleLogin}>
            <Text style={styles.text1}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: "#0A3832",
    flex: 1,
  },
  top: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottom: {
    alignItems: "center",
    flex: 1.6,
  },
  image: {
    width: "600@msr",
    height: "400@msr",
    resizeMode: "contain",
  },
  text: {
    marginTop: 20,
    color: "white",
    fontSize: "29@msr",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    marginBottom: 60,
  },

  Input: {
    width: "100%",
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
    marginBottom: 60,
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

  btnView: {
    width: "100%",
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
