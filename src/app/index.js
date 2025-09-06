import { Link } from "expo-router";
import { StyleSheet, View, Text, } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <View>
            <SafeAreaView>
            <Link href="/about">
                <Text style={styles.titulo}>Pagina About</Text>
            </Link>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
    },
    titulo: {
        fontFamily: "Cochin",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center"
    },
});
