import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RestartButtonProps {
    onPress: () => void;
}

const RestartButton = ({ onPress }: RestartButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Reiniciar</Text>
        </TouchableOpacity>
    );
};
export default RestartButton;
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#742025",
        borderRadius: 24,
        paddingVertical: 8,
        paddingHorizontal: 36,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
});
