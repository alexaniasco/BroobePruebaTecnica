import { View, Text, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { scale } from "react-native-size-matters";
import FontSizes from "@/styles/fontSize";
import { handleSave } from "@/handles/StorageHandles";

interface ResultsSectionProps {
  data: any;
  setLoading: (loading: boolean) => void;
}

export const ResultsSection = ({ data, setLoading }: ResultsSectionProps) => {
  if (!data?.lighthouseResult) return null;

  return (
    <View>
      <Text
        style={{
          fontSize: FontSizes.M,
          paddingVertical: 10,
          fontWeight: "600",
        }}
      >
        Resultados
      </Text>
      {data?.lighthouseResult?.fullPageScreenshot?.screenshot?.data && (
        <View>
          <Image
            source={{
              uri: data?.lighthouseResult?.fullPageScreenshot?.screenshot?.data,
            }}
            resizeMode={
              data?.lighthouseResult?.configSettings?.formFactor === "desktop"
                ? "cover"
                : "contain"
            }
            style={{
              width: "100%",
              height:
                data?.lighthouseResult?.configSettings?.formFactor === "desktop"
                  ? scale(200)
                  : scale(300),
              top: 0,
              borderRadius: scale(14),
            }}
          />
        </View>
      )}
      <Text style={{ fontSize: FontSizes.M, paddingVertical: 10 }}>
        Final URL : {data?.lighthouseResult?.finalUrl}
      </Text>
      <Divider />
      <Text style={{ fontSize: FontSizes.M, paddingVertical: 10 }}>
        LighthouseVersion : {data?.lighthouseResult?.lighthouseVersion}
      </Text>
      <Divider />
      <Text style={{ fontSize: FontSizes.M, paddingVertical: 10 }}>
        Fetch Time : {data?.lighthouseResult?.fetchTime}
      </Text>
      <Divider />
      <Text style={{ fontSize: FontSizes.M, paddingVertical: 10 }}>
        Timing : {data?.lighthouseResult?.timing?.total}
      </Text>
      <Divider />
      <Text style={{ fontSize: FontSizes.M, paddingVertical: 10 }}>
        User Agent : {data?.lighthouseResult?.userAgent}
      </Text>
      <Divider />
      <TouchableOpacity
        onPress={() => handleSave(data, setLoading)}
        style={{
          backgroundColor: "#039124",
          width: "100%",
          paddingVertical: scale(10),
          borderRadius: scale(6),
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: FontSizes.XL, color: "white" }}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};
