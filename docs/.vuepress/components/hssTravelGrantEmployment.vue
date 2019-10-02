<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('hss-employment-2019', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Graduate Students', 'Recent PhDs','Independent Scholars'],
      datasets: [
        {
          label: 'Applicants (60)',
          data: [33,21,6],
          backgroundColor: '#38a5b8'
        }, {
          label: 'Grantees (52)',
          data: [29,19,4],
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
        text: 'HSS International Travel Grant Employment Status'
      },
      maintainAspectRatio: false,
    }
  }),
  mounted () {
    this.renderChart(this.chartdata, this.options);
    Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#333';
    Chart.defaults.global.legend.display = false;
  }
}

</script>
