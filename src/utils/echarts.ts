import { EChartsOption } from "echarts";

const fontColor = '#d2dcdc'

// @ts-ignore
export const px = (n: number) => n / 2420 * window.pageWidth;
const getBaseOptions = () => ({
  textStyle: {
    fontSize: px(16),
    color: fontColor
  },
  title: {
    show: false
  },
  legend: {
    show: false
  },
  grid: {
    left: 0,
    x: px(32),
    y: px(32),
    x2: px(32),
    y2: px(32),
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
