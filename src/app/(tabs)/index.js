import { FlatList, View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import usePokemons from "../../hooks/usePokemon";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { pokemons } = usePokemons(20);

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Pagina Index</Text>
        <Link style={styles.texto} href="/about">
          About Screen
        </Link>
      </SafeAreaView>


      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    paddingVertical: 4,
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
    textAlign: "center",
    color: "#b89feeff"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});