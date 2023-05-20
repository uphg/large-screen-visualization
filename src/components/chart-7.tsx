import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  color: colors,
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  grid: {
    top: 0,
    bottom: px(32)
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: ['20%', '60%'],
      // center: ['50%', '50%'],
      label: {
        color: 'rgba(255, 255, 255, 0.7)'
      },
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: '合肥市' },
        { value: 38, name: '芜湖市' },
        { value: 32, name: '六安市' },
        { value: 28, name: '滁州市' },
        { value: 15, name: '池州市' },
      ]
    }
  ]
})

const Chart7 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section7 right">
      <h2 className="part-title">{'售电及电损'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="本年国网计划售电量" total="18956万千瓦" />
          <TotalItem title="本月全网售电量" total="10634万千瓦" />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart7
