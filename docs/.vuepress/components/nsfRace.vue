
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('nsf-race', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['White (55%)', 'No response (34%)', 'Other (7%)', 'Asian (3%)'],
      datasets: [
        {
          data: [32,20,4,2],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657'],
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'NSF Grantee Race'
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