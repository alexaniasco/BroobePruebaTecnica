import { SvgChart, SVGRenderer } from "@wuba/react-native-echarts";
import * as echarts from "echarts/core";
import { useRef, useEffect } from "react";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { Dimensions, View } from "react-native";
import { scale } from "react-native-size-matters";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer,
  BarChart,
]);

const E_HEIGHT = Dimensions.get("window").height / 2;
const E_WIDTH = Dimensions.get("window").width / 1.2;

export default function RenderLineChart({ option }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      // @ts-ignore
      chart = echarts.init(chartRef.current, "light", {
        renderer: "svg",
        width: E_WIDTH,
        height: E_HEIGHT,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, [option]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: scale(14),
        }}
      >
        <SvgChart ref={chartRef} />
      </View>
    </View>
  );
}
