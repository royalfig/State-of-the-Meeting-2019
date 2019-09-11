
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('food-quality-2019', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Very Poor (0%)','Poor (3%)','Fair (19%)','Good (47%)','Very Good (31%)'],
      datasets: [
        {
          data: [0,7,41,99,65],
          backgroundColor: ['#b84b38','#d38a45','#38a5b8','#ffd657','#82ba5c']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Food Quality'
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
