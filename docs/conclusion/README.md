# 🖋️ Conclusion

Utrecht was an experiment, a test case for whether or not HSS should schedule future conferences outside of North America. The results suggest that yes, HSS should again venture outside the confines of a single continent. Though we learned dozens of lessons, I will try to summarize the ones of highest priority:
1.	It is essential that we have a strong local team in place. Even though the financial support from the Descartes Center and Utrecht University was vital to the success of the meeting, even more important were the human contributions, those few who devoted countless hours to the meeting, as well as the many (such as the student volunteers) who helped during the actual program. We will soon complete a bidding mechanism for potential local hosts and such support will be central components of bids to host the HSS conference.
2.	If we can meet on a campus, we should. Although this will limit us to summer meetings (and remember that an international society can choose from 2 summers each year) it opens up many possibilities that are absent when we meet in a conference hotel, such as the ability to hold group events in various locations because we are not paying for a/v and food and beverage are much more affordable than in hotels.
3.	Sustainability should become our overarching priority. The record heat in Utrecht was but a warning. We must consider the impact of every meeting, but we will need data. For example, I do not know how the carbon footprint for Utrecht compared to our 2018 meeting in Seattle, Washington. More people arrived by train for Utrecht and some who flew did fly considerable distances. But there are some steps we can take without data that will have an impact, such as meeting with other groups (SHOT and/or 4S), which will help with sustainability.

**Jay Malone**<br>
*HSS Executive Director*

## See You in NOLA

HSS 2020 will occur from 7 to 11 October 2020 in New Orleans, Lousiana. Follow the HSS on [Twitter](https://twitter.com/hssonline) and [Facebook](https://facebook.com/historyofsciencesociety) for updates about the meeting and the announcement of the Call for Papers. We'll also post updates to the [HSS website](https://hssonline.org).

<div class="not-enlarged" v-on:click="enlarge" role="button">
<img class="nola"
sizes="(max-width: 1000px) 80vw, 650px"
srcset="
./New_Orleans_2020_1_bfujef_c_scalew_200.jpg 200w,
./New_Orleans_2020_1_bfujef_c_scalew_432.jpg 432w,
./New_Orleans_2020_1_bfujef_c_scalew_602.jpg 602w,
./New_Orleans_2020_1_bfujef_c_scalew_779.jpg 779w,
./New_Orleans_2020_1_bfujef_c_scalew_937.jpg 937w,
./New_Orleans_2020_1_bfujef_c_scalew_1100.jpg 1100w,
./New_Orleans_2020_1_bfujef_c_scalew_1249.jpg 1249w,
./New_Orleans_2020_1_bfujef_c_scalew_1388.jpg 1388w,
./New_Orleans_2020_1_bfujef_c_scalew_1528.jpg 1528w,
./New_Orleans_2020_1_bfujef_c_scalew_1659.jpg 1659w,
./New_Orleans_2020_1_bfujef_c_scalew_1790.jpg 1790w,
./New_Orleans_2020_1_bfujef_c_scalew_1916.jpg 1916w,
./New_Orleans_2020_1_bfujef_c_scalew_2039.jpg 2039w,
./New_Orleans_2020_1_bfujef_c_scalew_2168.jpg 2168w,
./New_Orleans_2020_1_bfujef_c_scalew_2294.jpg 2294w,
./New_Orleans_2020_1_bfujef_c_scalew_2418.jpg 2418w,
./New_Orleans_2020_1_bfujef_c_scalew_2532.jpg 2532w,
./New_Orleans_2020_1_bfujef_c_scalew_2637.jpg 2637w,
./New_Orleans_2020_1_bfujef_c_scalew_2762.jpg 2762w,
./New_Orleans_2020_1_bfujef_c_scalew_2800.jpg 2800w"
src="./New_Orleans_2020_1_bfujef_c_scalew_2800.jpg"
alt="HSS 2020 in New Orleans, LA from 7 to 11 Oct 2020">
</div>

<style scoped lang="stylus">

.not-enlarged
    background: none
    border: none
    display: flex
    margin: 1em auto
    cursor: zoom-in
    height: 500px
    transition: all .2s ease-out

.enlarge
    height: calc(100vh - 3.6rem)
    width: 100%
    position: fixed
    left: 0
    top: 0
    margin-top: 3.6rem
    cursor: zoom-out
    img
        margin: 0 auto

.nola
    display: block
    margin: 0 auto
    height: 100%
    width: auto



</style>

<script>
export default {
    methods: {
        enlarge: function() {
            const base = document.querySelector('.not-enlarged');
            base.classList.toggle('enlarge');
        }
    }
}
</script>