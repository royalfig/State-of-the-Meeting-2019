
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('nsf-gender', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Female (45%)','No response (31%)','Male (24%)'],
      datasets: [
        {
          data: [26,18,14],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45'],

        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'NSF Grantee Gender'
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