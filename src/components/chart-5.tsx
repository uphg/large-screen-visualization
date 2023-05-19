import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import { withEchartsOptions, px } from '../utils/echarts';

const colors = ['#8457ee', '#fe6464', '#fdd02c', '#4ced90', '#3185ff'];

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  color: colors,
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  legend: {
    show: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['65%', '80%'],
      // avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#00000000',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center',
        color: '#FFF',
        // fontSize: px(40)
      },
      emphasis: {
        label: {
          show: true,
          fontSize: px(28),
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '合肥市 35%' },
        { value: 735, name: '滁州市 25%' },
        { value: 580, name: '六安市 20%' },
        { value: 484, name: '安庆市 15%' },
        { value: 300, name: '池州市 5%' }
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
      <h2 className="part-title">{'各区电量分布占比'}</h2>
      <div className="part-content">
        <div ref={divRef} className="chart" style={{ height: `calc(100% - ${px(30 + 32)})` }}></div>
      </div>
    </Part>
  )
}

export default Chart5
