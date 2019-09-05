
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('attendee-demographics', 'pie')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['White or Caucasian (59.4%)', 'No response (15.43%)', 'Prefer not to answer (12.71%)', 'Asian or Asian American (5.18%)', 'Multiple responses (2.72%)', 'Hispanic/Latino/Spanish origin (2.59%)', 'A race or ethnicity not listed here (1.42%)', 'Black or African American (0.51%)'],
      datasets: [
        {
          data: [458, 119, 98, 40, 21, 20, 11, 4],
          backgroundColor: ['#ffd657','#82ba5c','#d38a45','#b84b38','#458ed3','#945cba','#ff8257','#b1ba5c'],

        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Attendee Race/Ethnicity'
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