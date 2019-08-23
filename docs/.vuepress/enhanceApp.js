import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Chartkick.use(Chart))
}