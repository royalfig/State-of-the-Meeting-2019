import VueChartJS from 'vue-chartjs'
import VueWorldMap from 'vue-world-map'



export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata

}) => {
    Vue.use(VueChartJS)
    Vue.use(VueWorldMap)
}