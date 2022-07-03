import { EChartsOption } from "echarts";


const fontColor = '#d2dcdc'

// @ts-ignore
const px = (n: number) => n / 2420 * window.pageWidth;
const getBaseOptions = () => ({
  textStyle: {
    fontSize: px(12),
    color: fontColor
  },
  title: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    x: px(20),
    y: px(20),
    x2: px(20),
    y2: px(20),
    containLabel: true
  },
})


export const withEchartsOptions = (options: EChartsOption | any) => {
  const result = {
    ...getBaseOptions(),
    ...options,
  };
  if (!(options?.xAxis?.axisLabel?.fontSize)) {
    result.xAxis = result.xAxis || {};
    result.xAxis.axisLabel = result.xAxis.axisLabel || {};
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if (!(options?.yAxis?.axisLabel?.fontSize)) {
    result.yAxis = result.yAxis || {};
    result.yAxis.axisLabel = result.yAxis.axisLabel || {};
    result.yAxis.axisLabel.fontSize = px(12);
  }
  return result;
};
