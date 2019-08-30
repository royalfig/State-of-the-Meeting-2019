
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('reasons-to-attend', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Attend the book exhibit', 'Hear history of science scholarship','Network with colleagues','Share research in the history of science','Other'],
      datasets: [
        {
          data: [84,276,285,243,23],
          backgroundColor: ['#38A5B8','#b84b38','#d38a45','#ffd657','#82ba5c']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Reasons for Attendance (2019)'
      },
      responsive: true,
      maintainAspectRatio: false,

    }
  }),
  props: ['css-classes'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
    Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#333';
    Chart.defaults.global.legend.display = false;
  }
}

</script>
