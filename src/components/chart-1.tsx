import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => {
  const width = px(20)
  return {
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: width,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'inherit'
          }
        },
        axisTick: {
          distance: -1 * width,
          length: 8,
          lineStyle: {
            color: '#070a0f',
            width: 2
          }
        },
        splitLine: {
          distance: -1 * width,
          length: width,
          lineStyle: {
            color: '#070a0f',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: px(30),
          fontSize: px(16)
        },
        detail: {
          fontSize: px(18),
          valueAnimation: true,
          formatter: '{value}%',
          color: 'inherit',
          offsetCenter: [0, px(70)]
        },
        title: {
          color: '#fff',
          fontSize: px(16),
          // fontWeight: 800,
          // fontFamily: 'Arial',
          offsetCenter: [0, px(40)]
        },
        data: [
          {
            value: 50,
            name: '可用率'
          }
        ]
      }
    ]
  }
}

const Chart1 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section1 left">
      <h2 className="part-title">{'业务平均可用率'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="预算执行情况（万元）" total={5563} />
          <TotalItem title="本月运维费用（万元）" total={489} />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart1
