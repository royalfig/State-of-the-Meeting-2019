
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('overall-satisfcation-2019', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Poor', 'Fair', 'Good', 'Very Good'],
      datasets: [
        {
          data: [3,15,100,213],
          backgroundColor: ['#b84b38','#d38a45','#ffd657','#82ba5c']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Overall Satisfaction'
      },
      responsive: true,
      maintainAspectRatio: false,

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
