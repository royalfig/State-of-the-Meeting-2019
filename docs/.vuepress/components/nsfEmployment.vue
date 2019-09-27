<script>
import { generateChart } from 'vue-chartjs'

const customChart = generateChart('nsf-employment-2019', 'horizontalBar')

export default {
  extends: customChart,
  data: () => ({
    chartdata: {
      labels: ['Graduate Students', 'Recent PhDs','Independent Scholars'],
      datasets: [
        {
          label: 'Applicants (64)',
          data: [43,20,1],
          backgroundColor: '#38a5b8'
        }, {
          label: 'Grantees (57)',
          data: [40,16,2],
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
        text: 'HSS NSF Travel Grant Employment Status'
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
