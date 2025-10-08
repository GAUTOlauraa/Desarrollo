import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import usePeliculas from "../../hooks/usePeliculas";
import { Link } from "expo-router";

export default function App() {
  const { peliculas } = usePeliculas();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cuevana</Text>

      <FlatList
        data={peliculas}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Link
              href={`/peliculas/${item.id}`}
              asChild
            >
              <Pressable>
                <Image
                  source={{ uri: item.image.original }}
                  style={styles.imagen}
                ></Image>
              </Pressable>
            </Link>
            <Text
              style={styles.texto}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.name}</Text>
            <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 15, fontWeight: "bold" }}>★ {item.rating.average}</Text>
          </View>
        )}
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
    textAlign: "center",
  },

  texto: {
    fontStyle: "normal",
    fontFamily: "small-caps",
    fontWeight: "light",
    fontSize: 20,
    textAlign: "center",
    width: 100,
  },
  imagen: {
    width: 100,
    height: 150,
  },
});
