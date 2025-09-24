import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>👋 Olá!</Text>
            <Text style={styles.message}>Você está logado com sucesso.</Text>
            <Text style={styles.subtext}>Aproveite sua experiência no app 💚</Text>

            <Link replace href="/" style={styles.logoutButton}>
                <Text style={styles.logoutText}>Sair</Text>
            </Link>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6fefc",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    greeting: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#2a9d8f",
        marginBottom: 8,
    },
    message: {
        fontSize: 18,
        color: "#264653",
        marginBottom: 4,
    },
    subtext: {
        fontSize: 14,
        color: "#6c757d",
        marginBottom: 32,
    },
    logoutButton: {
        backgroundColor: "#2a9d8f",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
