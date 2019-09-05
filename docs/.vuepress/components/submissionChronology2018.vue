<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-chronology-2018', 'horizontalBar')

export default {

  extends: totalSubs,

  data: () => ({



    chartdata: {
      labels: ['Modern', 'Contemporary', 'Early Modern', 'Longue Durée', 'Colonial', 'Ancient', 'Medieval and Renaissance'],
      datasets: [
        {
          data: [396, 108, 95, 39, 14, 13, 10],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba','#3865b8']
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: 'true',
        text: 'Abstract Submissions by Chronology (2018)'
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
