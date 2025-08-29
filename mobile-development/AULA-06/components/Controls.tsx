import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface ControlsProp {
  onStart: () => void;
  onNext: () => void;
}

const Controls = ({ onStart, onNext }: ControlsProp) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={onStart}
        name="play-circle"
        size={64}
        color="#fff"
        style={{ marginLeft: 55 }}
      ></Ionicons>
      <Ionicons
        onPress={onNext}
        name="play-skip-forward"
        size={32}
        color="#fff"
      ></Ionicons>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 30,
    alignItems: "center",
    gap: 16,
  },
});
