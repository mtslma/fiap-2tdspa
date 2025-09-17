import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import PlayerControls from "./components/PlayerControls";
import MusicInfo from "./components/MusicInfo";
import React, { useState } from "react";

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  listened: number;
}

export default function App() {
  const songs: Song[] = require("./assets/musics.json");

  // Isso vai servir para pegar a música atual
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Pular música
  const handleNextSong = () => {
    const isLastSong = currentSongIndex === songs.length - 1;
    if (isLastSong) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  // Voltar música
  const handlePreviousSong = () => {
    const isFirstSong = currentSongIndex === 0;
    if (isFirstSong) {
      setCurrentSongIndex(songs.length - 1);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Pegar a música atual baseada no index
  const currentSong = songs[currentSongIndex];

  return (
    <View style={styles.container}>
      <Header />

      {/* Passando as informações da música para o componente MusicInfo */}
      <MusicInfo currentSong={currentSong} />

      {/* Passando as funções para o player controller */}
      <PlayerControls
        onNextSong={handleNextSong}
        onPreviousSong={handlePreviousSong}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
