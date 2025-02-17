import AsyncStorage from "@react-native-async-storage/async-storage";

const handleSave = async (data, setLoading) => {
  if (data?.lighthouseResult) {
    setLoading(true);
    const {
      finalUrl,
      lighthouseVersion,
      userAgent,
      fetchTime,
      configSettings,
      categories,
      timing,
      fullPageScreenshot,
    } = data.lighthouseResult;

    const resultToSave = {
      id: Date.now().toString(),
      finalUrl,
      lighthouseVersion,
      userAgent,
      fetchTime,
      configSettings,
      categories,
      timing,
      fullPageScreenshot,
      chartData: data?.chartData || [0, 0, 0, 0],
    };

    try {
      const existingResults = await AsyncStorage.getItem("savedResults");
      const resultsArray = existingResults ? JSON.parse(existingResults) : [];
      resultsArray.push(resultToSave);
      await AsyncStorage.setItem("savedResults", JSON.stringify(resultsArray));
      console.log("Resultados guardados exitosamente");
      setLoading(false);
    } catch (error) {
      console.error("Error al guardar los resultados", error);
      setLoading(false);
    }
  }
};

const handleDelete = async (id) => {
  try {
    const existingResults = await AsyncStorage.getItem("savedResults");
    if (existingResults) {
      const resultsArray = JSON.parse(existingResults);
      const filteredResults = resultsArray.filter((result) => result.id !== id);
      await AsyncStorage.setItem(
        "savedResults",
        JSON.stringify(filteredResults)
      );
      console.log("Resultado eliminado exitosamente");
    }
  } catch (error) {
    console.error("Error al eliminar el resultado", error);
  } finally {
  }
};

export { handleSave, handleDelete };
