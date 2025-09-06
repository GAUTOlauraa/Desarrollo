import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Tab() {
    return (
        <View>
            <SafeAreaView styles={StyleSheet.container}>
            <Text styles={StyleSheet.titulo}>Pagina de Settings</Text>
            </SafeAreaView>
        </View>
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