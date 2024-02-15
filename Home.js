<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";

=======
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  useFonts,
  Inter_600SemiBold,
  Inter_300Light,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { ScaledSheet } from "react-native-size-matters";
<<<<<<< HEAD
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { ref, onValue } from "firebase/database";
import { db } from "./config";

export default function Home() {
  const [Humidity, setHumidity] = useState(null);
  const [PHLevel, setPHLevel] = useState(null);
  const [SoilMoistureLevel, setSoilMoistureLevel] = useState(null);
  const [SunLight, setSunLight] = useState(null);
  const [Temperature, setTemperature] = useState(null);
  // console.log("Humidity", Humidity);
  // console.log("PHLevel", PHLevel);
  // console.log("SoilMoistureLevel", SoilMoistureLevel);
  // console.log("SunLight", SunLight);
  // console.log("Temperature", Temperature);

  useEffect(() => {
    const HumidityRef = ref(db, "Humidity");
    const PHLevelRef = ref(db, "PH Level");
    const SoilMoistureLevelRef = ref(db, "Soil Moisture Level");
    const SunLightRef = ref(db, "Sun Light");
    const TemperatureRef = ref(db, "Temperature");

    onValue(HumidityRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "Level" in data) {
        setHumidity(data.Level);
      }
    });

    onValue(PHLevelRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "Level" in data) {
        setPHLevel(data.Level);
      }
    });

    onValue(SoilMoistureLevelRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "Level" in data) {
        setSoilMoistureLevel(data.Level);
      }
    });

    onValue(SunLightRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "Level" in data) {
        setSunLight(data.Level);
      }
    });

    onValue(TemperatureRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "Level" in data) {
        setTemperature(data.Level);
      }
    });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(db, "Count");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data === "object" && "count" in data) {
        setPassengerCount(data.count);
      }
      setLoading(false);
    });
  }, []);

=======
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeIn,
} from "react-native-reanimated";

export default function Home() {
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }
  return (
<<<<<<< HEAD
    <SafeAreaView
      style={styles.container1}
      contentInsetAdjustmentBehavior="automatic"
    >
      <StatusBar style="light" backgroundColor="#0A3832" />
      <View style={styles.container}>
        <View style={styles.Top}>
          <Animated.Image
            entering={FadeInUp.delay(100).duration(100).springify()}
            source={require("./assets/topbackground.png")}
            style={styles.imageBk}
          />
          <View style={styles.TopLeft}>
            <Animated.View
              entering={FadeInUp.delay(200).duration(100).springify()}
              style={styles.TopLeftTop}
            >
              <Text style={styles.headLeftText}>Hello,</Text>
              <Text style={styles.headRightText}> Farmer</Text>
            </Animated.View>
            <Animated.View
              entering={FadeInUp.delay(300).duration(100).springify()}
              style={styles.TopLeftBottom}
            >
              <Text style={styles.NameText}>Green House</Text>
              <Text style={styles.AddressText}>
                Galenbidunu wawe , Anuradhapura
              </Text>
              <Text style={styles.AddressText}>200ha X 200ha</Text>
            </Animated.View>
          </View>
          <Animated.View
            entering={FadeInUp.delay(400).duration(100).springify()}
            style={styles.TopRight}
          >
            <View style={styles.ImageView}>
              <Image
                source={require("./assets/map.png")}
                style={styles.image}
              />
            </View>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInUp.delay(500).duration(100).springify()}
          style={styles.Middle}
        >
          <View style={styles.Box}>
            <View style={styles.BoxTop}>
              <View style={styles.BoxSun}>
                <Feather
                  name="sun"
                  size={29}
                  color="#189877"
                  style={styles.icon}
                />
                <Text style={styles.Text1}>Sun light</Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0A3832" />
                ) : (
                  <>
                    <Text style={styles.Text2}>
                      {SunLight === 1 ? "High" : "Low"}
                    </Text>
                  </>
                )}
              </View>
              <View style={styles.BoxHum}>
                <MaterialCommunityIcons
                  name="water-outline"
                  size={29}
                  color="#189877"
                  style={styles.icon}
                />
                <Text style={styles.Text1}>Humidty</Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0A3832" />
                ) : (
                  <>
                    <Text style={styles.Text2}>{Humidity}%</Text>
                  </>
                )}
              </View>
              <View style={styles.BoxTem}>
                <FontAwesome6
                  name="temperature-quarter"
                  size={29}
                  color="#189877"
                  style={styles.icon}
                />
                <Text style={styles.Text1}>Temperature</Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0A3832" />
                ) : (
                  <>
                    <Text style={styles.Text2}>{Temperature}°C</Text>
                  </>
                )}
              </View>
            </View>
            <View style={styles.BoxBottom}>
              <View style={styles.BoxSun}>
                <MaterialIcons
                  name="water"
                  size={29}
                  color="#189877"
                  style={styles.icon}
                />
                <Text style={styles.Text1}>Soil Moisture</Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0A3832" />
                ) : (
                  <>
                    <Text style={styles.Text2}>{SoilMoistureLevel}%</Text>
                  </>
                )}
              </View>
              <View style={styles.BoxHum}>
                <MaterialCommunityIcons
                  her
                  name="test-tube"
                  size={29}
                  color="#189877"
                  style={styles.icon}
                />
                <Text style={styles.Text1}>PH Value</Text>
                {loading ? (
                  <ActivityIndicator size="small" color="#0A3832" />
                ) : (
                  <>
                    <Text style={styles.Text2}>{PHLevel}</Text>
                  </>
                )}
              </View>
            </View>
          </View>
        </Animated.View>
        <View style={styles.Bottom}>
          <Animated.Text
            entering={FadeInDown.delay(600).duration(100).springify()}
            style={styles.BottomText}
          >
            Analysis
          </Animated.Text>
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              entering={FadeInDown.delay(700).duration(100).springify()}
              style={styles.Box2}
            >
              <Text style={styles.Box2Text}>
                Sun Light, Humidity, Temperature
              </Text>
              <Image
                source={require("./assets/chart1.png")}
                style={styles.imageChart1}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(800).duration(100).springify()}
              style={styles.Box2}
            >
              <Text style={styles.Box2Text}>Soil Moisture, ph Value</Text>
              <Image
                source={require("./assets/chart2.png")}
                style={styles.imageChart2}
              />
            </Animated.View>
          </ScrollView>
        </View>
=======
    <SafeAreaView style={styles.container}>
      <View style={styles.Top}>
        <Image
          source={require("./assets/topbackground.png")}
          style={styles.imageBk}
        />
        <View style={styles.TopLeft}>
          <View style={styles.TopLeftTop}>
            <Text style={styles.headLeftText}>Hello,</Text>
            <Text style={styles.headRightText}> Farmer</Text>
          </View>
          <Animated.View
            entering={FadeIn.delay(100).duration(200)}
            style={styles.TopLeftBottom}
          >
            <Text style={styles.NameText}>Green House</Text>
            <Text style={styles.AddressText}>
              Galenbidunu wawe , Anuradhapura
            </Text>
            <Text style={styles.AddressText}>200ha X 200ha</Text>
          </Animated.View>
        </View>
        <View style={styles.TopRight}>
          <View style={styles.ImageView}>
            <Image source={require("./assets/map.png")} style={styles.image} />
          </View>
        </View>
      </View>
      <Animated.View
        entering={FadeIn.delay(150).duration(200)}
        style={styles.Middle}
      >
        <View style={styles.Box}>
          <View style={styles.BoxTop}>
            <View style={styles.BoxSun}>
              <Feather
                name="sun"
                size={29}
                color="#189877"
                style={styles.icon}
              />
              <Text style={styles.Text1}>Sun light</Text>
              <Text style={styles.Text2}>High</Text>
            </View>
            <View style={styles.BoxHum}>
              <MaterialCommunityIcons
                name="water-outline"
                size={29}
                color="#189877"
                style={styles.icon}
              />
              <Text style={styles.Text1}>Humidty</Text>
              <Text style={styles.Text2}>10%</Text>
            </View>
            <View style={styles.BoxTem}>
              <FontAwesome6
                name="temperature-quarter"
                size={29}
                color="#189877"
                style={styles.icon}
              />
              <Text style={styles.Text1}>Temperature</Text>
              <Text style={styles.Text2}>24°C</Text>
            </View>
          </View>
          <View style={styles.BoxBottom}>
            <View style={styles.BoxSun}>
              <MaterialIcons
                name="water"
                size={29}
                color="#189877"
                style={styles.icon}
              />
              <Text style={styles.Text1}>Soil Moisture</Text>
              <Text style={styles.Text2}>High</Text>
            </View>
            <View style={styles.BoxHum}>
              <MaterialCommunityIcons
                her
                name="test-tube"
                size={29}
                color="#189877"
                style={styles.icon}
              />
              <Text style={styles.Text1}>PH Value</Text>
              <Text style={styles.Text2}>6.5</Text>
            </View>
          </View>
        </View>
      </Animated.View>
      <View style={styles.Bottom}>
        <Animated.Text
          entering={FadeIn.delay(200).duration(200)}
          style={styles.BottomText}
        >
          Analysis
        </Animated.Text>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            entering={FadeIn.delay(100).duration(200)}
            style={styles.Box2}
          >
            <Text style={styles.Box2Text}>
              Sun Light, Humidity, Temperature
            </Text>
            <Image
              source={require("./assets/chart1.png")}
              style={styles.imageChart1}
            />
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(250).duration(200)}
            style={styles.Box2}
          >
            <Text style={styles.Box2Text}>Soil Moisture, ph Value</Text>
            <Image
              source={require("./assets/chart2.png")}
              style={styles.imageChart2}
            />
          </Animated.View>
        </ScrollView>
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
<<<<<<< HEAD
  container1: {
    flex: 1,
  },
  container: {
    paddingTop: 20,
=======
  container: {
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
    // backgroundColor: "#0A3832",
    flex: 1,
  },

  Top: {
    // backgroundColor: "#0A3832",
    flexDirection: "row",
    flex: 1.3,
    justifyContent: "center",
  },

  imageBk: {
    resizeMode: "cover",
    width: "470@ms",
    height: "290@ms",
    position: "absolute",
    alignSelf: "flex-start",
    marginTop: "-90@ms1.1",
  },

  Middle: {
    paddingTop: 10,
    flex: 1.4,
    justifyContent: "center",
    alignItems: "center",
  },

  Bottom: {
    flex: 1.9,
  },

  TopLeft: {
    flex: 1.5,
  },

  TopLeftTop: {
    flex: 1,
    flexDirection: "row",
  },
  TopLeftBottom: {
    flex: 1.6,
    flexDirection: "colum",

    justifyContent: "flex-start",
  },

  TopRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ImageView: {
    justifyContent: "center",
    alignItems: "center",

    height: "90@mvs",
    width: "90@mvs",
    backgroundColor: "#BBD4",
    overflow: "hidden",
    borderRadius: 20,
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  headLeftText: {
    marginTop: 20,
    marginLeft: 20,
    color: "white",
    fontSize: "35@mvs",
    fontFamily: "Inter_500Medium",
  },

  headRightText: {
    marginTop: 20,
    color: "#BBD409",
    fontSize: "35@mvs",
    fontFamily: "Inter_500Medium",
  },
  NameText: {
    marginTop: 10,
    marginLeft: 20,
    color: "white",
    fontSize: "20@mvs",
    fontFamily: "Inter_500Medium",
  },

  AddressText: {
    marginLeft: 20,
    color: "white",
    fontSize: "10@mvs",
    fontFamily: "Inter_300Light",
  },

  Box: {
<<<<<<< HEAD
    height: "95%",
=======
    height: "90%",
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
    width: "90%",
    elevation: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  BoxTop: {
    flex: 1,

    flexDirection: "row",
  },

  BoxBottom: {
    flex: 1,

    flexDirection: "row",
  },

  BoxSun: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  BoxHum: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  BoxTem: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 7,
  },

  Text1: {
    color: "#DBDCE2",
    fontSize: "17@mvs",
    fontFamily: "Inter_500Medium",
<<<<<<< HEAD
    marginBottom: -4,
=======
>>>>>>> 9bcba4d73d52d47f0e7fa55b72c9ec89d5284223
  },

  Text2: {
    color: "#0A3832",
    fontSize: "17@mvs",
    fontFamily: "Inter_600SemiBold",
  },

  BottomText: {
    marginTop: 20,
    marginLeft: 20,
    color: "#595757",
    fontSize: "27@mvs",
    fontFamily: "Inter_500Medium",
  },

  Box2: {
    padding: 10,
    height: 200,
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    borderColor: "#D3DEDD",
    borderWidth: 2,
    marginTop: 20,
  },

  scroll: {
    paddingTop: 1,
    paddingBottom: 20,
  },

  Box2Text: {
    paddingBottom: 10,
    color: "#595757",
    fontSize: "15@mvs",
    fontFamily: "Inter_500Medium",
  },

  imageChart1: {
    resizeMode: "cover",
    width: "160@mvs",
    height: "130@mvs",
    alignSelf: "center",
  },

  imageChart2: {
    resizeMode: "cover",
    width: "160@mvs",
    height: "130@mvs",
    alignSelf: "center",
  },
});
