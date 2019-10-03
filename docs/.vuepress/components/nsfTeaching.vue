
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('nsf-teach', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Yes (67%)','No (33%)'],
      datasets: [
        {
          data: [38,19],
          backgroundColor: ['#82ba5c','#b84b38']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'NSF Grantees Who Teach'
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