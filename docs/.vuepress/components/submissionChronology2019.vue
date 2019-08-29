<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-chronology-2019', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['20th century, late', '20th century, early', '19th century', '17th century', '18th century', 'Cultural and cross-cultural contexts...', 'Longue Durée', 'Medieval', '21st century', 'Renaissance', 'Ancient Greek and Roman', 'Chinese Dynasties/Centuries'],
      datasets: [
        {
          data: [191, 164, 142, 73, 66, 49, 32, 29, 26, 23, 3, 2],
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
        text: 'Abstract Submissions by Chronology (2019)'
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
    this.cssClasses = 'graph'
  }
}

</script>
