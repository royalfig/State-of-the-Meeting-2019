
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('nsf-essence', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Essential (63%)','Very Important (26%)','Important (7%)','Not Very Important (4%)'],
      datasets: [
        {
          data: [36,15,4,2],
          backgroundColor: ['#82ba5c','#ffd657','#38a5b8','#d38a45']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Importance of NSF Grant'
      },
      maintainAspectRatio: false
  }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options)
    Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#333';
    Chart.defaults.global.legend.display = false;
  }
}

</script>