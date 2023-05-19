import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  color: '#F7A110',
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [0, 18, 28, 38, 48, 58, 68, 78],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [{
    type: 'line',
    data: [
      0.19, 0.20, 0.26,
      0.35, 0.26, 0.20,
      0.08, 0.06
    ],
    symbol: 'circle',
    symbolSize: px(12),
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#F7A110'
      }, {
        offset: 1,
        color: '#1B1D52'
      }]),
    }
  }],
  grid: {
    left: px(32),
    right: px(32),
    bottom: px(32)
  }
})

const Chart3 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section3 left">
      <h2 className="part-title">{'科技发展'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="六安年度累计输送电量" total={686} />
          <TotalItem title="马鞍年度累计输送电量" total={832} />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart3
