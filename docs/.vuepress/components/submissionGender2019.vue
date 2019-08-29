<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-gender-2019', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['Male','Female','No response','Prefer not to answer','Gender non-conforming','Female, Gender non-conforming, Two Spirit','Female, Gender non-conforming','Gender non-conforming, Non-Binary','A gender not listed here, Prefer not to answer'],
      datasets: [
        {
          data: [302, 275, 216, 25, 4, 1, 1, 1, 1],
          backgroundColor: '#b84b38'
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: 'true',
        text: 'Abstract Submissions by Gender (2019)'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
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
