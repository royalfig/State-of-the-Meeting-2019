
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('resource-use-2019', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Meeting Website (20%)', 'Meeting WiFi (13%)', 'Abstracts (online) (11%)', 'A/V Projector (11%)', 'Print Program (PDF) (10%)', 'Meeting App (10%)', 'Print Program (7%)', 'Abstracts (PDF) (7%)', 'Quiet room (6%)', 'Readerboard (6%)', 'Family room (0.3%)'],
      datasets: [
        {
          data: [155,102,88,88,78,77,54,52,46,44,2],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8','#b83865','#ff8257','#d3d145','#ba5cb1'],
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
