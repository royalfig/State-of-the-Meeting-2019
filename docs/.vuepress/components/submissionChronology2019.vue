<template>
  <div class="chart">
    <apexcharts height=500 type=bar :options="chartOptions" :series="series"></apexcharts>
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
                text: 'Abstract Submissions by Chronology (2019)',
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
        labels: ['20th century, late', '20th century, early', '19th century', '17th century', '18th century', 'Cultural and cross-cultural contexts...', 'Longue Durée', 'Medieval', '21st century', 'Renaissance', 'Ancient Greek and Roman', 'Chinese Dynasties/Centuries']
      },
      series: [{
          name: '2019',
          data: [191, 164, 142, 73, 66, 49, 32, 29, 26, 23, 3, 2]
        }]
      }
    }
  }
</script>

<style lang="stylus">
.chart
  margin: 2em 0
  padding: 1em
  border: 1px solid rgba(0,0,0,.25)
  box-shadow: 1px 1px 2px rgba(0,0,0,.25), 3px 3px 6px 3px rgba(0,0,0,.15)
</style>