import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import { withEchartsOptions, px } from '../utils/echarts';

const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  legend: {
    show: false
    // top: '0',
    // left: 'center',
    // itemGap: px(20)
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#00000000',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: px(20),
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
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
    <Part className="section5 left">
      <h2 className="part-title">{'省市电量增长率'}</h2>
      <div className="part-content">
        <div ref={divRef} className="chart" style={{ height: `calc(100% - ${px(30 + 32)})` }}></div>
      </div>
    </Part>
  )
}

export default Chart5
