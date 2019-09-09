import VueChartJS from 'vue-chartjs'
import VueGoogleCharts from 'vue-google-charts'
import DotEnv from 'dotenv'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata

}) => {
    Vue.use(VueChartJS)
    Vue.use(VueGoogleCharts)
    Vue.use(DotEnv)
}