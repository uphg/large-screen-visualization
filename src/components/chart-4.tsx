import anhui from '../geo/anhui.json';
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import { withEchartsOptions, px } from '../utils/echarts';

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
          name: '合肥市', 
          value: 1
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: '#fe6b92',
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
          name: '安庆市', 
          value: 2
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: '#15B8FD',
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
          name: '芜湖市', 
          value: 3
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: '#6d59de',
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
          name: '滁州市', 
          value: 3
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: '#ffce6e',
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
          name: '六安市', 
          value: 4
        },
      ],
      label: {
        show: false,
        color: 'white'
      },
      itemStyle: {
        areaColor: '#070a0f',
        color: '#12cddb',
        borderColor: '#007ac0',
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
    echarts.registerMap('CN', anhui);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section4 left">
      <div className="part-title" style={{ justifyContent: 'center' }}>安徽市运营关键指标</div>
      <div className="part-content">
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart4
