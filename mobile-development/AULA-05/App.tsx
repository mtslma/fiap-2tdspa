import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Player from "./components/Player";
import { useState } from "react";
import RestartButton from "./components/RestartButton";

export default function App() {
    const MAX_SCORE = 12;
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const finished = score1 == MAX_SCORE || score2 == MAX_SCORE;

    function handleRestart() {
        setScore1(0);
        setScore2(0);
    }
    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <Header></Header>
                <Player score={score1} setScore={setScore1} finished={finished}></Player>
                <Image source={require("./assets/versus.png")}></Image>
                <Player score={score2} setScore={setScore2} finished={finished}></Player>
                {finished && <RestartButton onPress={handleRestart}></RestartButton>}
                <StatusBar style="light" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#457429",
    },
    container: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: "#457429",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
