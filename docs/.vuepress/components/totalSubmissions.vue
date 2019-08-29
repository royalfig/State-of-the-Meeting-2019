
<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('total-abstract-submissions', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({
    chartdata: {
      labels: ['2018', '2019'],
      datasets: [
        {
          data: [652, 871],
          backgroundColor: '#d38a45'
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
            maxBarThickness: 80
        }],

        xAxes: [{
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
    Chart.defaults.global.defaultFontColor = '#ffffff';
    Chart.defaults.global.legend.display = false;
  }
}

</script>
