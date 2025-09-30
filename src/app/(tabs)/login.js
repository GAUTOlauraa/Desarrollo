import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../hooks/useAuth";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo"
                keyboardType="default"
            ></TextInput>
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                keyboardType="default"
            ></TextInput>
            <View style={styles.diseñoBoton}>
                <Button title={styles.boton.title} color={styles.boton.color}></Button>
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
        title: "sign up",
        color: "#ad7fd0ff",
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
