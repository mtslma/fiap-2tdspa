import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Quote(props: { text: string }) {
  const { text } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>"{text}"</Text>
      <View style={styles.icons}>
        <Ionicons name="bookmark-outline" size={20} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    textAlign: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
});
