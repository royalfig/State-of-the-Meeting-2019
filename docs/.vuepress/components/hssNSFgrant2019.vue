
<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('hss-nsf-grant', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Applicants (64)', 'Grantees (59)'],
      datasets: [
        {
          label: 'Amount Awarded',
          data: [31000, 22058.69],
          backgroundColor: '#38a5b8'
        },
        {
          label: 'Amount Requested',
          data: [66305.97, 40629.54],
          backgroundColor: '#b84b38'
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      title: {
        display: 'true',
        text: 'HSS NSF Travel Grant 2019'
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