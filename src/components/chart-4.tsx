import sichuan from '../geo/sichuan.json';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import { withEchartsOptions } from '../utils/echarts';

const colors = {
  '青海省': '#b72ce8', 
  '甘肃省': '#15B8FD', 
  '四川省': '#06E1EE'
};

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  series: [
    {
      type: 'map',
      mapType: 'CN', // 自定义扩展图表类型
      data: [
        {
          name: '甘肃省', 
          value: 1
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: colors['甘肃省'],
        borderColor: '#007ac0',
        emphasis: {
          label: {
            color: 'white'
          },
          areaColor: '#5470C6',
        },
      }
    },
    {
      type: 'map',
      mapType: 'CN', // 自定义扩展图表类型
      data: [
        {
          name: '四川省',
          value: 100
        },
      ],
      itemStyle: {
        areaColor: '#010D3D',
        color: colors['四川省'],
        borderColor: 'yellow',
        emphasis: {
          label: {
            color: 'white'
          },
          areaColor: '#5470C6',
        },
      }
    },
    {
      type: 'map',
      mapType: 'CN', // 自定义扩展图表类型
      data: [
        {
          name: '青海省',
          value: 100
        },
      ],
      itemStyle: {
        areaColor: '#010D3D',
        color: colors['青海省'],
        borderColor: '#01A7F7',
        emphasis: {
          label: {
            color: 'white'
          },
          areaColor: '#5470C6',
        },
      }
    },
  ]
})

const Chart4 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    const chart = echarts.init(divRef.current!);
    // @ts-ignore
    echarts.registerMap('CN', sichuan);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section4 left">
      <div className="part-content">
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart4
