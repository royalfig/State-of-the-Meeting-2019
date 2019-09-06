
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('weather-data', 'line')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {

      datasets: [
        {
          label: 'High',
          data: [88, 96, 99, 89, 84],
          backgroundColor: '#b84b38',
          borderColor: '#b84b38',
          fill: false
        },
        {
          label: 'Low',
          data: [56, 62, 62, 75, 66],
          backgroundColor: '#38a5b8',
          borderColor: '#38a5b8',
          fill: false
        },
        {
          label: 'Historical High',
          data: [73,73,73,73,73],
          backgroundColor: 'rgba(184, 75, 56,.5)',
          borderColor: 'rgba(184, 75, 56,.5)',
          fill: false
        },
        {
          label: 'Historical Low',
          data: [57,57,57,56,56],
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
        text: 'Temperature during HSS'
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
                  min: 25,
                  max: 115
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

7/23
88 56
73  57

7/24
96 62
36