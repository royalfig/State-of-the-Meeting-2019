
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('resource-evaluation', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Meeting Website', 'Meeting WiFi', 'Abstracts (online)', 'A/V Projector', 'Print Program (PDF)', 'Meeting App', 'Print Program', 'Abstracts (PDF)', 'Readerboard', 'Family room'],
      datasets: [
        {
          label: 'Very Poor',
          data: [0,0,1,0,0,3,1,0,0,0],
          backgroundColor: '#b84b38'
        }, {
          label: 'Poor',
          data: [4,3,0,2,3,11,0,1,0,0],
          backgroundColor: '#d38a45'
        }, {
          label: 'Fair',
          data: [45,6,12,8,16,29,9,10,6,1],
          backgroundColor: '#38a5b8'
        }, {
          label: 'Good',
          data: [154,80,97,50,64,62,25,32,42,1],
          backgroundColor: '#ffd657'
        }, {
          label: 'Very Good',
          data: [106,114,71,103,35,56,43,21,24,0],
          backgroundColor: '#82ba5c'
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Meeting Resource Satisfaction'
      },
      maintainAspectRatio: false,
      scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
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