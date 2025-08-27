import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScoreButton from "./ScoreButton";
import PlayerName from "./PlayerName";
import { Ionicons } from "@expo/vector-icons";

interface PlayerProps {
    score: number;
    setScore: (score: number) => void;
    finished: boolean;
}

const Player = ({ score, setScore, finished }: PlayerProps) => {
    const endMessage = score == 12 ? "Vencedor" : "Perdedor";

    function addScore() {
        if (score < 12) {
            setScore(score + 1);
        }
    }

    function removeScore() {
        if (score > 0) {
            setScore(score - 1);
        }
    }

    return (
        <View style={styles.container}>
            <PlayerName name={"Jogador 1"}></PlayerName>
            <PlayerName name={"Jogador 2"}></PlayerName>

            <View style={styles.card}>
                <Text style={styles.cardText}>{finished ? score == 12 ? <Ionicons name="trophy-sharp" size={80} color={"#742025"}></Ionicons> : <Ionicons name="thumbs-down" size={80} color={"#742025"}></Ionicons> : score}</Text>
            </View>

            {finished ? (
                <Text style={styles.text}>{endMessage}</Text>
            ) : (
                <View style={{ flexDirection: "row" }}>
                    <ScoreButton onScore={removeScore} iconName={"remove-circle-outline"}></ScoreButton>
                    <ScoreButton onScore={addScore} iconName={"add-circle-outline"}></ScoreButton>
                </View>
            )}
        </View>
    );
};
export default Player;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
    card: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#F8F8F8",
        paddingVertical: 16,
        width: 120,
        height: 120,
        margin: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        fontSize: 48,
        fontWeight: "semibold",
    },
});
