import { StyleSheet, ScrollView, View } from "react-native";
import { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Card } from "react-native-paper";
import { scale } from "react-native-size-matters";
import { useNavigation } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { handleDelete } from "@/handles/StorageHandles";

export default function TabTwoScreen() {
  const [savedResults, setSavedResults] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      loadResults();
    }, [])
  );

  const loadResults = async () => {
    try {
      const results = await AsyncStorage.getItem("savedResults");
      if (results) {
        setSavedResults(JSON.parse(results));
      }
    } catch (error) {
      console.error("Error al cargar los resultados", error);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: scale(50) }}
    >
      <View style={{ gap: scale(10) }}>
        {savedResults.map((result, index) => (
          <Card
            style={{
              backgroundColor: "white",
              overflow: "hidden",
            }}
            key={index}
            onPress={() => {
              navigation.navigate("details", {
                result,
              });
            }}
          >
            <Card.Cover
              style={{
                borderRadius: 0,
              }}
              source={{ uri: result.fullPageScreenshot.screenshot.data }}
            />
            <Card.Actions>
              <Button
                onPress={async () => {
                  await handleDelete(result?.id);
                  loadResults();
                }}
              >
                Eliminar
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
