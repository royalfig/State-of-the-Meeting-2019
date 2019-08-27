<template>
  <div class="chart">
    <apexcharts height=600 type=bar :options="chartOptions" :series="series"></apexcharts>
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
                text: 'Abstract Submissions by Employment (2019 vs 2018)',
                floating: true,
                // offsetY: 320,
                align: 'center',
                style: {
                    color: '#333'

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
        labels: ['Contract faculty', 'Gallery, library, archive, or museum', 'Graduate student', 'Independent scholar', 'No response', 'Non-academic employment', 'Postdoc or Fellow', 'Retired', 'Tenure-track faculty', 'Tenured faculty', 'Undergraduate student']
      },
      series: [{
          name: '2019',
          data: [66,13,150,27,233,13,123,10,47,142,2]
        },{
          name: '2018',
          data: [45,5,181,18,159,12,84,18,80,181,3]
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