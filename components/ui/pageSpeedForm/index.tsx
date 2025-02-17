import { View, TouchableOpacity, ActivityIndicator, Text } from "react-native";
import { TextInput, Checkbox } from "react-native-paper";
import InputLabelSelect from "@/components/ui/selectNative/CustomSelect";
import FontSizes from "@/styles/fontSize";
import { scale } from "react-native-size-matters";

interface PageSpeedFormProps {
  url: string;
  setUrl: (text: string) => void;
  strategy: string;
  setStrategy: (value: string) => void;
  isChecked: Record<string, boolean>;
  setIsChecked: (value: Record<string, boolean>) => void;
  loading: boolean;
  onAnalyze: () => void;
}

export const PageSpeedForm = ({
  url,
  setUrl,
  strategy,
  setStrategy,
  isChecked,
  setIsChecked,
  loading,
  onAnalyze,
}: PageSpeedFormProps) => {
  const categoriasSeleccionadas =
    Object.values(isChecked).filter(Boolean).length;
  const puedeAnalizar = categoriasSeleccionadas >= 2 && !loading;

  return (
    <View style={{ gap: scale(10) }}>
      <View>
        <TextInput
          activeOutlineColor="#6053C1"
          outlineColor="#6053C1"
          placeholderTextColor="gray"
          placeholder="https://www.google.com"
          textColor="#6053C1"
          label="URL"
          selectionColor="#6053C1"
          mode="outlined"
          style={{
            fontSize: FontSizes.S,
            backgroundColor: "white",
          }}
          value={url}
          onChangeText={setUrl}
        />
      </View>
      <View
        style={{
          gap: scale(10),
          backgroundColor: "white",
          borderRadius: scale(10),
          padding: scale(10),
        }}
      >
        <InputLabelSelect
          defaultValue={"Dispositivo"}
          onChange={setStrategy}
          options={[
            {
              title: "Desktop",
              icon: "emoticon-frown-outline",
              value: "DESKTOP",
            },
            {
              title: "Mobile",
              icon: "emoticon-frown-outline",
              value: "MOBILE",
            },
          ]}
        />
        <View className="flex-row flex-wrap">
          {Object.keys(isChecked).map((key) => (
            <View className="flex-row items-center" key={key}>
              <Checkbox
                color="#6053C1"
                status={isChecked[key] ? "checked" : "unchecked"}
                onPress={() =>
                  setIsChecked({ ...isChecked, [key]: !isChecked[key] })
                }
              />
              <Text style={{ fontSize: FontSizes.S }}>
                {key.toLocaleLowerCase()}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: puedeAnalizar ? "#6053C1" : "#9991D8",
          width: "100%",
          paddingVertical: scale(10),
          borderRadius: scale(6),
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onAnalyze}
        disabled={!puedeAnalizar}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={{ color: "white", fontSize: FontSizes.XL }}>
            {categoriasSeleccionadas < 2
              ? "Selecciona al menos 2 categorías"
              : "Ejecutar análisis"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
