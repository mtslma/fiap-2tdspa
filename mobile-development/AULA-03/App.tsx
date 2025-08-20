import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native";

export default function App() {
    const [nome, setNome] = useState("Aluno");

    return (
        <View style={styles.container}>
            <Text style={styles.warning}>Aula 01 - React Native</Text>

            <TextInput placeholder="Digite seu nome..." style={styles.textInput} onChangeText={setNome} value={nome} />
            <Text style={styles.welcome}>Bem-vindo,</Text>
            <Text style={styles.welcomeName}>{nome}!</Text>
            <Image source={require("./assets/react-icon.png")} style={styles.image} />

            <Pressable
                onPress={() => {
                    alert(`Olá, ${nome}!`);
                }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : {}]}
            >
                <Text style={styles.buttonText}>Pressione aqui!</Text>
            </Pressable>

            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c2125",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
    },
    warning: {
        fontSize: 18,
        color: "#8ce2ffff",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 10,
        textTransform: "uppercase",
    },
    welcome: {
        fontSize: 48,
        color: "#ecf0f1",
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 1,
    },
    welcomeName: {
        fontSize: 64,
        color: "#6656e5ff",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: 1.5,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginBottom: 20,
        borderRadius: 75,
    },
    textInput: {
        backgroundColor: "#fff",
        width: "80%",
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 16,
        color: "#333",
        borderColor: "#ddd",
        borderWidth: 1,
    },
    button: {
        backgroundColor: "#6656e5ff",
        padding: 15,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
        marginTop: 20,
        textAlign: "center",
    },
    buttonPressed: {
        backgroundColor: "#4c42b0ff",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
