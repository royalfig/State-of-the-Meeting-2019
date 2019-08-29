<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-geography-2019', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['Europe', 'Global or Multilocational', 'North America', 'Africa', 'East Asia', 'Latin America', 'South Asia', 'Near and Middle East', 'Southeast Asia', 'Central Asia', 'Australasia/Oceania'],
      datasets: [
        {
          data: [371, 238, 78, 23, 21, 19, 18, 18, 7, 4, 4],
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
        text: 'Abstract Submissions by Geography (2019)'
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


