<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('total-abstract-submissions', 'bar')

export default {
  components: {
    'bar-chart': barChart
  },
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['2018', '2019'],
      datasets: [
        {
          data: [652, 871],
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
        text: 'Total Abstract Submissions (2018 vs 2019)'
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
