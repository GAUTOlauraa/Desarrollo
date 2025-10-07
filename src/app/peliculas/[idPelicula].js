import { View, Text, StyleSheet, Image } from "react-native";
import usePeliculas from "../../hooks/usePeliculas";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";


export default function App() {

  const { idPelicula } = useLocalSearchParams();

  const { pelicula, getPeliculaById, loading } = usePeliculas();

  const stripHtmlTags = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<[^>]*>/g, '').trim();
  };

  const cleanSummary = pelicula?.summary ? stripHtmlTags(pelicula.summary) : "cargando...";

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.container}>
        <Text style={styles.titulo}>{pelicula.name}</Text>
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: pelicula.image?.original }}
            style={styles.imagen}
          />
          <Text style={styles.subtitulo}>{pelicula.name}</Text>
          <Text style={{ color: "#e8ba89ff", fontWeight: "bold", fontSize: 25, textAlign: "center", marginBottom: 10 }}>
            ★ {pelicula.rating?.average}</Text>
          <Text style={styles.texto}>{cleanSummary}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9d4f9ff",
    padding: 1,
  },
  itemContainer: {
    padding: 8,
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#e9d4f9ff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  titulo: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: "#d9b3f7ff",
    textAlign: "center",
  },
  subtitulo: {
    fontFamily: "Cochin",
    textAlign: "center",
    fontSize: 30,
  },
  texto: {
    fontStyle: "normal",
    fontSize: 20,
    textAlign: "center",
  },
  imagen: {
    width: 300,
    height: 400,
    marginBottom: 10,
  },
});
