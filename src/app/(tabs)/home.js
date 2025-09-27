import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home () {

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.titulo}>HOME</Text>
      </SafeAreaView>
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