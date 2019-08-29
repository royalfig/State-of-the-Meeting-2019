<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-employment', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['Contract faculty', 'Gallery, library, archive, or museum', 'Graduate student', 'Independent scholar', 'No response', 'Non-academic employment', 'Postdoc or Fellow', 'Retired', 'Tenure-track faculty', 'Tenured faculty', 'Undergraduate student'],
      datasets: [
        {
          label: '2019',
          data: [66,13,150,27,233,13,123,10,47,142,2],
          backgroundColor: '#d38a45'
        }, {
          label: '2018',
          data: [45,5,181,18,159,12,84,18,80,181,3],
          backgroundColor: '#ffd657'
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Abstract Submissions by Employment (2019 vs 2018)'
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
