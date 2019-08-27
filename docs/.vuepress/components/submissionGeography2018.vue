<template>
  <div class="chart">
    <apexcharts height=500 type=bar stacked=true :options="chartOptions" :series="series"></apexcharts>
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
                text: 'Abstract Submissions by Geography (2018)',
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
        labels: ['Transnational', 'Europe', 'North America', 'East Asia', 'Latin America', 'Africa', 'Near and Middle East', 'South Asia', 'Southeast Asia', 'Australasia/Oceania']
      },
      series: [{
          name: "2018",
          data: [297,174,126,26,24,7,6,6,6,2]
        }]
    }
  },
}
</script>

<style lang="stylus">
.chart
  margin: 2em 0;
  padding: 1em
  border: 1px solid rgba(0,0,0,.25)
  box-shadow: 1px 1px 2px rgba(0,0,0,.25), 3px 3px 6px 3px rgba(0,0,0,.15)
</style>