import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import Part from './part'
import TotalItem from './total-item'
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    data: ['合肥', '淮北', '亳州', '宿州', '蚌埠', '阜阳', '淮南', '滁州', '六安'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      formatter(val: string) {
        if (val.length > 2) {
          const array = val.split('');
          array.splice(2, 0, '\n');
          return array.join('');
        } else {
          return val;
        }
      }
    },
  },
  yAxis: {
    show: false,
    boundaryGap: false,
  },
  series: [
    {
      type: 'bar',
      barWidth: px(15),
      data: [20, 12, 42, 35, 16, 36, 22, 28, 16],
      itemStyle: {
        normal: {
          barBorderRadius: [px(7.5), px(7.5), px(7.5), px(7.5)]
        }
      },
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#18d1fd'
        }, {
          offset: 1,
          color: '#1b96f6'
        }
      ]),
    }
  ]
})

const Chart8 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(getChartOptions())
    chart.setOption(options);
  }, []);

  return (
    <Part className="section8 right">
      <h2 className="part-title">{'电网可靠性'}</h2>
      <div className="part-content">
        <div className="total">
          <TotalItem title="本月100KV线路跳闸次" total="0次"/>
          <TotalItem title="500KV系统设备跳闸事件数" total="1起" />
        </div>
        <div ref={divRef} className="chart"></div>
      </div>
    </Part>
  )
}

export default Chart8
