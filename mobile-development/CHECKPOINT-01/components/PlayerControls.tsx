import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface PlayerControlsProps {
  onNextSong: () => void;
  onPreviousSong: () => void;
}

const PlayerControls = ({
  onNextSong,
  onPreviousSong,
}: PlayerControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="repeat" size={28} color="gray" />
      <Ionicons name="shuffle" size={28} color="gray" />
      <Pressable onPress={onPreviousSong}>
        <Ionicons name="play-skip-back" size={32} color="white" />
      </Pressable>
      <Pressable onPress={handlePlayPause}>
        <Ionicons
          name={isPlaying ? "pause-circle" : "play-circle"}
          size={80}
          color="lightblue"
        />
      </Pressable>
      <Pressable onPress={onNextSong}>
        <Ionicons name="play-skip-forward" size={32} color="white" />
      </Pressable>
      <Ionicons name="bar-chart" size={28} color="gray" />
      <Ionicons name="add" size={28} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1E1E1E",
  },
});

export default PlayerControls;
