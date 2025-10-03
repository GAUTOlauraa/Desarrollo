import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import usePeliculas from "../../hooks/usePeliculas";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function App() {
  const { idPelicula } = useLocalSearchParams();
  const { pelicula, getPeliculaById, loading } = usePeliculas();

  useEffect(() => {
    if (idPelicula) {
      getPeliculaById(idPelicula);
    }
  }, [idPelicula]);

  if (loading)
    return (
      <View>
        <Text>cargando...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{pelicula.name}</Text>
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: pelicula.image.medium }}
          style={styles.imagen}
        />
        <Text style={styles.texto}>{pelicula.name}</Text>
        <Text style={styles.texto}>★ {pelicula.rating?.average}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "center",
  },
  imagen: {
    width: 300,
    height: 350,
  },
});
