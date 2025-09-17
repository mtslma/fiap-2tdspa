import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Song } from "../App";

interface MusicInfoProps {
  currentSong: Song;
}

const MusicInfo = ({ currentSong }: MusicInfoProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={{ uri: currentSong.cover }} />
      <View style={styles.musicDetails}>
        <Text style={styles.title}>{currentSong.title}</Text>

        <View style={styles.artistRow}>
          <Text style={styles.artist}>{currentSong.artist}</Text>
          <View style={styles.iconRow}>
            <Ionicons name="share-social" size={32} color="gray" />
            <Ionicons name="heart-outline" size={32} color="gray" />
          </View>
        </View>

        <View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
            <View style={styles.thumb} />
          </View>
          {/* Vou reaproveitar esse estilo de artista para não ter que refazer!!! */}
          <View style={styles.artistRow}>
            <Text style={styles.artist}>00:00</Text>
            <Text style={styles.artist}>{currentSong.duration}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MusicInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  coverImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  artist: {
    fontSize: 18,
    color: "#888",
  },
  musicDetails: {
    alignSelf: "flex-start",
  },
  iconRow: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "flex-end",
  },
  artistRow: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  progressBarContainer: {
    alignSelf: "center",
    width: 300,
    height: 4,
    backgroundColor: "gray",
    borderRadius: 7,
    position: "relative",
  },
  progressBar: {
    width: "40%",
    height: "100%",
    backgroundColor: "lightblue",
    borderRadius: 4,
  },
  thumb: {
    width: 14,
    height: 14,
    backgroundColor: "lightblue",
    borderRadius: 7,
    position: "absolute",
    left: "40%",
    top: -4,
  },
});
