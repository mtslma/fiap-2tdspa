import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as z from "zod";

const loginSchema = z.object({
    email: z.email("Informe um e-mail válido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const IndexScreen = () => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit({ email, password }: LoginFormData) {
        const plainUsers = await AsyncStorage.getItem("@usersDB");
        const users = JSON.parse(plainUsers || "[]");

        const user = users.find((item: LoginFormData) => item.email === email && item.password === password);

        if (user) {
            router.replace("/home");
        } else {
            Alert.alert("Usuário ou senha inválidos");
        }
    }

    async function onSignUp(data: LoginFormData) {
        const plainUsers = await AsyncStorage.getItem("@usersDB");
        const users = JSON.parse(plainUsers || "[]");
        const newUsers = [...users, data];
        await AsyncStorage.setItem("@usersDB", JSON.stringify(newUsers));
        Alert.alert("Cadastro realizado com sucesso!");
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
                <Image source={require("../assets/images/medix-logo.jpeg")} style={styles.logo} />
                <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

                <View style={styles.form}>
                    <Controller name="email" control={control} render={({ field: { onChange, onBlur, value } }) => <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#7fbfbf" onChangeText={onChange} onBlur={onBlur} value={value} keyboardType="email-address" autoCapitalize="none" />} />
                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

                    <Controller name="password" control={control} render={({ field: { onChange, onBlur, value } }) => <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#7fbfbf" secureTextEntry onChangeText={onChange} onBlur={onBlur} value={value} />} />
                    {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSubmit(onSignUp)} style={[styles.button, styles.secondaryButton]} activeOpacity={0.8}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default IndexScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0fdfd",
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 50,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2a9d8f",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: "#5c5c5c",
        marginBottom: 32,
    },
    form: {
        width: "100%",
        gap: 16,
    },
    input: {
        backgroundColor: "#e0f7f7",
        color: "#2a9d8f",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#b2dfdb",
    },
    button: {
        backgroundColor: "#2a9d8f",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 8,
    },
    secondaryButton: {
        backgroundColor: "#48c9b0",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    errorText: {
        color: "#e63946",
        fontSize: 14,
        marginTop: -8,
    },
});
