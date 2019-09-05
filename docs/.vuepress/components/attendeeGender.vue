
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-gender', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Female (42.1%)','Male (38.3%)','No response (14%)','Prefer not to answer (4.1%)','Gender non-conforming (0.3%)','Female, Gender non-conforming (0.2%)','Female, Gender non-conforming, Two Spirit (0.1%)','Male, Prefer not to answer (0.1%)','Male, Non-Binary (0.1%)','Two Spirit, A gender not listed here (0.1%)','Non-Binary (0.1%)','Female, Non-Binary (0.1%)'],
      datasets: [
        {
          data: [325,296,108,32,3,2,1,1,1,1,1,1],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8','#b83865','#ff8257','#d3d145','#ba5cb1','#38a5b8'],

        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Attendee Gender'
      },
      maintainAspectRatio: false
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