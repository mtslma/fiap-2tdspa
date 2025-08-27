import { StyleSheet, TextInput, View } from "react-native";

interface PlayerNameProps {
    name: string;
}

const PlayerName = ({ name }: PlayerNameProps) => {
    return (
        <View>
            <TextInput style={styles.text}>{name}</TextInput>
        </View>
    );
};
export default PlayerName;
const styles = StyleSheet.create({
    text: {
        color: "#fff",
        textAlign: "center",
        padding: 8,
        margin: 2,
        backgroundColor: "#203c10ff",
        borderRadius: 15,
    },
});
