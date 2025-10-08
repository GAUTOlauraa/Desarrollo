import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HOME</Text>

      <View style={styles.itemContainer}>
        <Text style={styles.texto}>Listado de Peliculas y Series. Con su imagen, calificacion e informacion</Text>

        <View style={styles.diseñoBoton}>
          <Link href="/peliculas" asChild>
            <Button title="Ir a Películas" color="#ad7fd0ff" />
          </Link>
        </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  titulo: {
    fontFamily: "Cochin",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  texto: {
    fontFamily: "Cochin",
    fontWeight: "light",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 8,
    margin: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 3,
    alignItems: "center",
  },
  diseñoBoton: {
    width: 300,
    marginTop: 20,
    alignContent: "center"
  },
});
