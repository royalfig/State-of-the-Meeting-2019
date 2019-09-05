
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('reasons-to-attend', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Network with colleagues (36%)','Hear history of science scholarship (35%)','Share research in the history of science (31%)','Attend the book exhibit (11%)', 'Other (5%)'],
      datasets: [
        {
          data: [285,276,243,84,36],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Reasons for Attendance'
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
