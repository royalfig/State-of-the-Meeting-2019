
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-age', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['31-40 (33%)','41-50 (20%)','18-30 (19%)','51-60 (13%)','60+ (11%)','Prefer not to answer (3%)'],
      datasets: [
        {
          data: [112,68,65,43,38,10],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba'],
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Attendee Age'
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