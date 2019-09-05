
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-employment', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Tenured faculty (21.78%)', 'Graduate student (21.01%)', 'No response (15.56%)', 'Postdoc or Fellow (14.13%)', 'Contract faculty (8.56%)', 'Tenure-track faculty (6.74%)', 'Independent scholar (3.5%)', 'Retired (3.11%)', 'Gallery, library, archive, or museum (3.11%)', 'Non-academic employment (2.07%)', 'Undergraduate student (0.38%)'],
      datasets: [
        {
          data: [168, 162, 120, 109, 66, 52, 27, 24, 24, 16, 3],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8','#b83865','#ff8257','#d3d145','#ba5cb1'],
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Attendee Employment'
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