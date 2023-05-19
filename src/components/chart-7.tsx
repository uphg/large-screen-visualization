import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  color: colors,
  // legend: {
  //   top: 'bottom'
  // },
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
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
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
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

export default Chart7
