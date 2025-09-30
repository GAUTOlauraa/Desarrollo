import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import usePeliculas from "../../hooks/usePeliculas";

export default function App() {
  const { Peliculas } = usePeliculas(30);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cuevana</Text>

      <FlatList
        data={Peliculas}
        numColumns={3}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) =>

          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image.original }}
              style={styles.imagen}></Image>
            <Text style={styles.texto}>{item.name}</Text>
            <Text style={styles.texto}>★ {item.rating.average}</Text>
          </View>

        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#e9d4f9ff",
  },
  itemContainer: {
    flex: 1,
    margin: 3,
    alignItems: "center",
  },
  titulo: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: "#d9b3f7ff",
    textAlign: "center"
  },

  texto: {
    fontStyle: "normal",
    fontFamily: "small-caps",
    fontWeight: "light",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 100,
    height: 150,
  }
});