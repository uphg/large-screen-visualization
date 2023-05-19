import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  // backgroundColor: '#161627',
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  radar: {
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ],
    center: ['50%', '50%'],
    radius: 75,
    axisName: {
      color: 'rgb(238, 197, 102)',
      // backgroundColor: '#666',
      // borderRadius: 3,
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
        },
        // {
        //   value: [5000, 14000, 28000, 26000, 42000, 21000],
        //   name: 'Actual Spending'
        // }
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
      <h2 className="part-title">{'分布区域统计'}</h2>
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

export default Chart9
