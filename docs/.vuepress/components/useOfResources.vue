
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('resource-use-2019', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['A/V Projector', 'Abstracts (online)', 'Abstracts (PDF)', 'Family/nursing mother\'s room', 'Meeting App (Dryfta)', 'Meeting Website', 'Meeting WiFi', 'Print Program', 'Print Program (PDF)', 'Quiet room', 'Readerboard in Exhibit Hall'],
      datasets: [
        {
          data: [88,88,52,2,77,155,102,54,78,46,44],
          backgroundColor: '#B838A5',
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: 'true',
        text: 'Resources Used'
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
