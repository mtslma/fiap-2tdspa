import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import React, { useState } from "react";
import Control from "./components/Controls";
import CirclesContainer from "./components/CirclesContainer";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [time, setTime] = useState(1500);

  // INICIAR A CONTAR O TEMPO
  function handleStart() {
    setInterval(() => {
      setTime((currentValue) => currentValue - 1);
    }, 1000);
  }

  function handleNext() {
    console.log("next");
  }

  return (
    <View style={styles.container}>
      <Timer time={time.toString()}></Timer>
      <Control onStart={handleStart} onNext={handleNext}></Control>
      <CirclesContainer></CirclesContainer>

      <Text style={styles.text}>Focus Time</Text>
      <Ionicons name="at-circle-sharp" size={24} color="#fff"></Ionicons>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BA4949",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 36,
    fontSize: 34,
    color: "#fff",
  },
});
