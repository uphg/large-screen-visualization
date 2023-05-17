import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  legend: {
    bottom: px(10),
    textStyle: {
      color: 'white'
    },
    itemWidth: px(30),
    itemHeight: px(16)
  },
  grid: {
    x: px(32),
    x2: px(32),
    y: px(32),
    y2: px(32),
    // containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      name: '抢劫',
      type: 'line',
      data: [0.01, 0.02, 0.05, 0.03, 0.05, 0.06, 0.07, 0.08, 0.09]
    },
    {
      name: '醉驾',
      type: 'line',
      data: [0.02, 0.03, 0.07, 0.08, 0.06, 0.04, 0.08, 0.05, 0.10]
    },
    {
      name: '盗窃',
      type: 'line',
      data: [0.03, 0.05, 0.04, 0.07, 0.06, 0.08, 0.10, 0.09, 0.11]
    }
  ].map(obj => ({
    ...obj,
    symbol: 'circle',
    symbolSize: px(12),
    lineStyle: { width: px(2) }
  }))
})

const Chart5 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section6 left">
      <h2 className="part-title">{'省市电量增长率'}</h2>
      <div className="part-content">
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart5
