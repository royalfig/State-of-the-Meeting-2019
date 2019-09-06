
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('weather-data-c', 'line')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {

      datasets: [
        {
          label: 'High',
          data: [31, 36, 37, 32, 29],
          backgroundColor: '#b84b38',
          borderColor: '#b84b38',
          fill: false
        },
        {
          label: 'Low',
          data: [13,17,17,24,19],
          backgroundColor: '#38a5b8',
          borderColor: '#38a5b8',
          fill: false
        },
        {
          label: 'Historical High',
          data: [23,23,23,23,23],
          backgroundColor: 'rgba(184, 75, 56,.5)',
          borderColor: 'rgba(184, 75, 56,.5)',
          fill: false
        },
        {
          label: 'Historical Low',
          data: [14,14,14,14,14],
          backgroundColor: 'rgba(56, 165, 184,.5)',
          borderColor: 'rgba(56, 165, 184,.5)',
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'Temperature during HSS (°C)'
      },
      responsive: true,
      maintainAspectRatio: false,
       scales: {
            xAxes: [{
                type: 'category',
                labels: ['23 July', '24 July', '25 July', '26 July','27 July']
            }],
            yAxes: [{
                ticks: {
                  min: 0,
                  max: 45
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
