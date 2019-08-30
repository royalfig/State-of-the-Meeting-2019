
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('reception-attendance-2019', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Attended a Reception', 'Did Not Attend a Reception'],
      datasets: [
        {
          data: [215,118],
          backgroundColor: ['#A4B838','#38A5B8','#b84b38','#d38a45']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Reception Attendance'
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
