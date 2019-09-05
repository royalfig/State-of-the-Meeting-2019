
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('book-exhibit', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Yes (89%)', 'No (11%)'],
      datasets: [
        {
          data: [272, 33],
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
        text: 'Attended the Book Exhibit'
      },
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