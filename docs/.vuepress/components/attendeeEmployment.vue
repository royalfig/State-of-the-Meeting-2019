
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-employment', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Undergraduate student (0.38%)', 'Non-academic employment (2.07%)', 'Retired (3.11%)', 'Gallery, library, archive, or museum (3.11%)', 'Independent scholar (3.5%)', 'Tenure-track faculty (6.74%)', 'Contract faculty (8.56%)', 'Postdoc or Fellow (14.13%)', 'No response (15.56%)', 'Graduate student (21.01%)', 'Tenured faculty (21.78%)'],
      datasets: [
        {
          data: [3, 16, 24, 24, 27, 52, 66, 109, 120, 162, 168],
          backgroundColor: ['#ffd657','#82ba5c','#d38a45','#b84b38','#458ed3','#945cba','#ff8257','#b1ba5c', '#d3d145', '#b83865', '#45d3d1'],
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