import { Link } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterScreen() {
    const {register, error} = useAuth();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = async () => {
        console.log(`nombre: ${name}, usuario: ${username}, pass${password}`)
        register({username, password, name})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                keyboardType="default"
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                keyboardType="default"
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                keyboardType="default"
            ></TextInput>
            <View style={styles.diseñoBoton}>
                <Button title={styles.boton.title} color={styles.boton.color} onPress={handleRegister}></Button>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    boton: {
        title: "aceptar",
        color: "#841584",
        width: 300,
    },
    diseñoBoton: {
        width: 300,
        marginTop: 12,
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
