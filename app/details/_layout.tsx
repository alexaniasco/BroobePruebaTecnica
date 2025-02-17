import RenderLineChart from "@/components/ui/charts/RenderLineChart";
import FontSizes from "@/styles/fontSize";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { scale } from "react-native-size-matters";

export default function TabLayout() {
  const route = useRoute();
  const navigation = useNavigation();
  const { result } = route?.params;

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
        data: result?.chartData || [0, 0, 0, 0],
        type: "bar",
      },
    ],
  };

  const getScreenshotHeight = () => {
    return result?.configSettings?.formFactor === "desktop"
      ? scale(200)
      : scale(300);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {result && (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.backButton}>Volver</Text>
            </TouchableOpacity>

            {result?.fullPageScreenshot?.screenshot?.data && (
              <View>
                <Image
                  source={{
                    uri: result?.fullPageScreenshot?.screenshot?.data,
                  }}
                  resizeMode={
                    result?.configSettings?.formFactor === "desktop"
                      ? "cover"
                      : "contain"
                  }
                  style={[styles.screenshot, { height: getScreenshotHeight() }]}
                />
              </View>
            )}

            <View style={styles.chartContainer}>
              <RenderLineChart option={option} />
            </View>

            <InfoRow label="Final URL" value={result?.finalUrl} />
            <Divider />
            <InfoRow
              label="LighthouseVersion"
              value={result?.lighthouseVersion}
            />
            <Divider />
            <InfoRow label="Fetch Time" value={result?.fetchTime} />
            <Divider />
            <InfoRow label="Timing" value={result?.timing?.total} />
            <Divider />
            <InfoRow label="User Agent" value={result?.userAgent} />
            <Divider />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <Text style={styles.infoText}>
    {label} : {value}
  </Text>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentContainer: {
    padding: scale(10),
    gap: scale(10),
  },
  backButton: {
    fontSize: FontSizes.M,
    paddingVertical: 10,
    fontWeight: "600",
  },
  screenshot: {
    width: "100%",
    borderRadius: scale(14),
  },
  chartContainer: {
    flex: 1,
    marginVertical: 10,
  },
  infoText: {
    fontSize: FontSizes.M,
    paddingVertical: 10,
  },
};
