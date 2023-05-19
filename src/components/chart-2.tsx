import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const data = [
  { name: '河北', 2011: 2, },
  { name: '陕西', 2011: 6, },
  { name: '河南', 2011: 5, },
  { name: '北京', 2011: 3, },
  { name: '上海', 2011: 4, },
  { name: '深圳', 2011: 3, },
];

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    type: 'category',
    data: data.map(item => item.name)
  },
  series: [
    {
      name: '2011年',
      type: 'bar',
      barWidth: px(15),
      data: data.map(item => item[2011]),
      itemStyle: {
        normal: {
          barBorderRadius: [px(7.5), px(7.5), px(7.5), px(7.5)],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#B92AE8'
            }, {
              offset: 1,
              color: '#6773E7'
            }
          ]),
        }
      }
    },
  ]
})

const Chart2 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section2 left">
      <h2 className="part-title">{'用电及区外来电'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="本月全网最高用电负荷" total="5563万千瓦" />
          <TotalItem title="本月社会用电量" total="1236亿万千瓦" />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart2
