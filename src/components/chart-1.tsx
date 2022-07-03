import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { withEchartsOptions } from '../utils/withEchartsOptions';

const chartOptions: echarts.EChartsOption = {
  xAxis: {
    data: ['山东省', '河北省', '陕西省', '河南省', '北京市', '上海市', '深圳市', '广东省', '杭州市'],
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#083B70'
      }
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
    splitLine: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#083B70'
      }
    }
  },
  series: [
    {
      type: 'bar',
      data: [20, 12, 42, 35, 16, 36, 22, 28, 16],
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
}

const Chart1 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentCharts = echarts.getInstanceByDom(divRef.current!)
    if (currentCharts) return
    var chart = echarts.init(divRef.current!);
    const options = withEchartsOptions(chartOptions)
    chart.setOption(options);
  }, []);

  return (
    <div ref={divRef} className="chart"></div>
  );
};

export default Chart1