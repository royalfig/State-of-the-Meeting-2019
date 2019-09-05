
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('food-quality-2019', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Enough (65%)', 'Not Enough (35%)'],
      datasets: [
        {
          data: [215,118],
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
        text: 'Food Quantity'
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
