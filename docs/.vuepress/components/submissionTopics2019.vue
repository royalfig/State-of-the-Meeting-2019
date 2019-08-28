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
      labels: ['Aspects of Scientific Practice/Organization', 'Thematic Approaches to the Study of Science', 'Medicine and Health', 'Biology', 'Physical Sciences', 'Earth and Environmental Sciences', 'Tools for Historians of Science', 'Theoretical Approaches to the Study of Science', 'Technology', 'Social Sciences', 'Mathematics', 'Chemistry'],
      datasets: [
        {
          data: [155, 136, 135, 77, 69, 49, 49, 39, 32, 28, 21, 12],
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
        text: 'Abstract Submissions by Topic (2019)'
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
