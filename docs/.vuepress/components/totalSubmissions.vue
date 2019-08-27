<template>
  <div class="chart">
    <apexcharts height=300 type=bar :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        title: {
                text: 'Total Abstract Submissions (2019 vs 2018)',
                floating: true,
                // offsetY: 320,
                align: 'center',
                style: {
                    color: '#333',
                    fontSize: '16'

                }
            },
        plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          theme: {
            palette: 'palette3' // upto palette10
          },
          dataLabels: {
            enabled: true,
            offsetX: 30,
            style: {
              colors: ['#333']
            }
          },
           stroke: {
            show: true,
            width: .5,
            colors: ['#333']
          },
        chart: {
          id: 'basic-bar'
        },
        labels: ['2019', '2018']
      },
      series: [{
          name: '2019 Total Submissions',
          data: [871]
        },{
          name: '2018 Total Submissions',
          data: [652]
        }
      ],

      }
    }
  }


</script>

<style lang="stylus">
.chart
  margin: 2em 0;
  padding: 1em
  border: 1px solid rgba(0,0,0,.25)
  box-shadow: 1px 1px 2px rgba(0,0,0,.25), 3px 3px 6px 3px rgba(0,0,0,.15)
</style>