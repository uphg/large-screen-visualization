import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  radar: {
    indicator: [
      { name: 'PM 2.5', max: 6500 },
      { name: 'PM 10', max: 16000 },
      { name: 'CO', max: 30000 },
      { name: 'NO2', max: 38000 },
      { name: 'SO2', max: 52000 },
      { name: 'AQI', max: 25000 }
    ],
    center: ['50%', '50%'],
    radius: 75,
    axisName: {
      color: 'rgb(238, 197, 102)',
      padding: [0, 0]
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 145, 124, 0.2)' // 将轴线的颜色设置为透明
      }
    },
    splitLine: {
      lineStyle: {
        color: [
          'rgba(238, 197, 102, 0.1)',
          'rgba(238, 197, 102, 0.2)',
          'rgba(238, 197, 102, 0.3)',
          'rgba(238, 197, 102, 0.4)',
          'rgba(238, 197, 102, 0.5)',
          'rgba(238, 197, 102, 0.5)'
        ].reverse()
      }
    },
    splitArea: {
      show: false
    },
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 1,
        opacity: 0.5
      },
      itemStyle: {
        color: '#F9713C'
      },
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget',
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(255, 145, 124, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(255, 145, 124, 0.9)',
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
})

const Chart9 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section9 right">
      <h2 className="part-title">{'信息通讯系统运行'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="累计通信安全运行天数" total="5563天" />
          <TotalItem title="电力调度业务保障率" total="100%" />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart9
