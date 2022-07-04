import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { withEchartsOptions, px } from '../utils/echarts';

const getChartOptions: () => echarts.EChartsCoreOption = () => ({
  xAxis: {
    data: ['山东', '河北', '陕西', '河南', '北京', '上海', '深圳', '广东', '杭州'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false,
      // lineStyle: {
      //   color: '#083B70'
      // }
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
    <div ref={divRef} className="chart"></div>
  );
};

export default Chart1