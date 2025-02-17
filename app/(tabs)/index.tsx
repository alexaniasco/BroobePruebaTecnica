import { StyleSheet, View, ScrollView, Text } from "react-native";
import RenderLineChart from "@/components/ui/charts/RenderLineChart";
import FontSizes from "@/styles/fontSize";
import { PageSpeedForm } from "@/components/ui/pageSpeedForm";
import { ResultsSection } from "@/components/ui/resultSection";
import { usePageSpeed } from "@/handles/usePageSpeed";

export default function HomeScreen() {
  const {
    url,
    setUrl,
    loading,
    setLoading,
    data,
    strategy,
    setStrategy,
    isChecked,
    setIsChecked,
    handleAnalyze,
  } = usePageSpeed();

  const option = {
    xAxis: {
      type: "category",
      data: ["ACC", "BP", "PERFO", "SEO"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data?.chartData || [0, 0, 0, 0],
        type: "bar",
      },
    ],
  };

  return (
    <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
      <View className="flex-1 p-4 gap-4 justify-between">
        <Text style={styles.titleContainer}>Análisis de rendimiento</Text>

        <PageSpeedForm
          url={url}
          setUrl={setUrl}
          strategy={strategy}
          setStrategy={setStrategy}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          loading={loading}
          onAnalyze={handleAnalyze}
        />

        <RenderLineChart option={option} />

        <ResultsSection data={data} setLoading={setLoading} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: FontSizes.XL,
    fontWeight: "bold",
    color: "#6053C1",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
