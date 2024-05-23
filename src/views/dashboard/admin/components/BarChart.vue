<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { getGraphicTransaction } from '@/api/transaction'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      getGraphicTransaction(2024).then((response) => {
        const data = response.data.map(item => item.total)
        this.chart = echarts.init(this.$el, 'macarons')

        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: [{
            name: 'In',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: data,
            animationDuration
          }]
        })
      })
    }
  }
}
</script>

<!-- {
  name: 'pageB',
  type: 'bar',
  stack: 'vistors',
  barWidth: '60%',
  data: [80, 52, 200, 334, 390, 330, 220],
  animationDuration
}, {
  name: 'pageC',
  type: 'bar',
  stack: 'vistors',
  barWidth: '60%',
  data: [30, 52, 200, 334, 390, 330, 220],
  animationDuration
} -->
