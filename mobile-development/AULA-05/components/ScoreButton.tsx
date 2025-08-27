import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ScoreButtonProps {
    onScore: () => void;
    iconName: keyof typeof Ionicons.glyphMap; // nova prop
}

const ScoreButton = ({ onScore, iconName }: ScoreButtonProps) => {
    return (
        <View>
            <TouchableOpacity onPress={onScore}>
                <Ionicons name={iconName} size={64} style={styles.add} />
            </TouchableOpacity>
        </View>
    );
};

export default ScoreButton;

const styles = StyleSheet.create({
    add: {
        color: "#742025",
    },
});
