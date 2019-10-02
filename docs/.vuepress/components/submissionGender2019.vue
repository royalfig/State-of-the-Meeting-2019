<script>
import { generateChart } from 'vue-chartjs'

const totalSubs = generateChart('submission-gender-2019', 'horizontalBar')

export default {
  extends: totalSubs,
  data: () => ({

    chartdata: {
      labels: ['Male','Female','No response','Prefer not to answer','Gender non-conforming','Multiple options'],
      datasets: [
        {
          data: [302, 275, 216, 25, 4, 4],
          backgroundColor: ['#38a5b8','#b84b38','#d38a45','#ffd657','#82ba5c','#945cba']
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
