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
                text: 'Abstract Submissions by Gender (2019 vs 2018)',
                floating: true,
                // offsetY: 320,
                align: 'center',
                style: {
                    color: '#333'

                }
            },
        plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: 'bottom',
              },
            }
          },
          theme: {
            palette: 'palette3' // upto palette10
          },
          dataLabels: {
            enabled: false,
          },
           stroke: {
            show: true,
            width: .5,
            colors: ['#333']
          },
        chart: {
          id: 'basic-bar'
        },
        labels: ['Male','Female','No response','Prefer not to answer','Gender non-conforming','Female, Gender non-conforming, Two Spirit','Female, Gender non-conforming','Gender non-conforming, Non-Binary','A gender not listed here, Prefer not to answer','Other']
      },
      series: [{
          name: "2019",
          data: [302, 275, 216, 25, 4, 1, 1, 1, 1, 0]
        }, {
          name: "2018",
          data: [360, 345, 74, 0, 0, 0, 0, 0, 0, 7]
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