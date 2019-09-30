
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-breakdown', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['HSS Member - Low Income/Retired', 'HSS Member - One Day', 'HSS Member - Regular', 'HSS Member - Student', 'Nonmember -  Low Income/Retired', 'Nonmember - One Day', 'Nonmember - Regular', 'Nonmember - Student', 'Exhibitor Registration', 'Volunteer Registration', 'Staff'],
      datasets: [
        {
          data: [58,13,245,101,35,27,158,36,25,68,5],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8','#b83865','#ff8257','#d3d145','#ba5cb1']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Attendee Type'
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