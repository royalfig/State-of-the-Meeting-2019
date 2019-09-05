
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('events-2019', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Plenary Session (25%)','Distinguished Lecture (24%)','Prize Ceremony (20%)','Paris Lecture (11%)','None (7%)','GECC Mentorship Meet and Greet (6%)','Women\'s Caucus Breakfast (5%)','THAT Camp (1%)'],
      datasets: [
        {
          data: [190,182,152,86,53,44,37,10],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8','#b83865']
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Events Attended'
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
