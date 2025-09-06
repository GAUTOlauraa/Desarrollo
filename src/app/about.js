import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function About() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.titulo}>Pagina About.</Text>
                <Link style={styles.texto} href="/">Volver a inicio</Link>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    titulo: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
    texto: {
        fontFamily: "Cochin",
        fontSize: 20,
        textAlign: "center"
    },
});

