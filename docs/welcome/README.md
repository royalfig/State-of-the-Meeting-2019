# 👋 Welcome
<div id="weather-f">
<weatherData  class="graph" />
</div>
<div id="weather-c" class="hidden">
<weatherDataC class="graph" />
</div>
<button id="tempToggle"><span class="f">°F</span> / <span class="c">°C</span></button>

The History of the Science Society's 2019 annual meeting was the hottest yet, in all senses of the word. Attendees ~~witnessed~~, ~~experienced~~, suffered through the highest temperatures ever recorded in Utrecht, the Netherlands.

Despite the heat, and thanks to the efforts of the local organizing committe, Utrecht University volunteers, and our resilient attendees, the meeting carried on, with anecdotal evidence and survey results showing this to be one of our most enjoyable meetings.

The following State of the Meeting report is an attempt to provide an overview of HSS 2019. In addition to serving as a record of the meeting's many events, the report will offer an analysis of the meeting and programs of the HSS. show, according to attendees, what we did right and where we could improve, and

## Report of the Program Chairs

The History of Science Society held its annual meeting in Utrecht, the Netherlands, 23–27 July 2019. HSS’s first meeting outside of North America took place in the beautiful setting of Utrecht University, situated in the heart of the city, an advantage that no doubt encouraged the large number of attendees, some 771 persons. The opening Plenary Session, organized by Lissa Roberts, set the tone for the meeting, exploring the diverse ways historians of science are engaging with current challenges in society, politics, and the environment around the globe. An opening reception followed in the spectacular setting of the Janskerk.

Over the next four days some 555 speakers and commentators involved in 121 sessions delivered their papers, with an extra day added compared to past meetings, reflecting the tremendous strength and numbers of submitted proposals this year. The programme then took in a diverse range of themes and topics ranging from the history of European entomology to Victorian biometry, Soviet studies of climate change, agricultural sciences, and Africa’s scientific cultures. Flashtalks and Caucus meetings enhanced the simultaneous sessions (twelve this year). The program was truly global in scope, with sessions on the sciences and medicine in Africa, Asia, the Middle East, Latin America and the Pacific. There was an interest in the future, not just through real engagements, but also in scientific speculations and science fiction. There was much concern with material culture and practice, or, as Norton Wise put it during his speech accepting the Sarton medal, the history of science has come to be defined by a focus on materiality. Early modern science was well represented in the Utrecht meeting, reflecting a large number of submissions in this area. Sessions explored cultures of early modern experience and experiment, scholarly translations and publishing, and connections between early modern science and artisanry, empire, and medicine in addition to disciplinary developments in astronomy, alchemy, natural history and practical mathematics.

Interest in nineteenth-century physics seemed down from past years, but there was great interest in forms of mediation and representation in the sciences, in film, literature, visual culture and sounds. Inside the Domkerk, Utrecht’s magnificent cathedral, Anke te Heesen presented an extraordinary Distinguished Lecture highlighting the richness of such an approach, exploring Thomas Kuhn’s project to interview the early protagonists of Quantum Physics in the early 1960s. Taking advantage of a new technology, the portable tape recorder, Kuhn imagined capturing the intellectual and social minutiae of the process of discovery. Interviews failed to yield such details but shaped an approach to history that has remained critical in the field. Kuhn was also a touchstone for the Elizabeth Paris Public Engagement Lecture, delivered by Jeroen van Dongen in yet another spectacular setting, Utrecht’s Railway Museum.

Besides the remarkable program, everyone will remember this meeting for the exceptionally hot weather. Thursday, July 25 witnessed the highest temperature ever recorded in the Netherlands, of 40.7° C (105° F). Glorious sunshine and tremendous heat abounded, yet the staff and students of Utrecht University (with the help of some impressive air-conditioning) created cool and pleasant conditions inside the meeting rooms, ushering participants to cooler rooms whenever possible and offering a constant supply of fruit-tinged water for refreshment. This was just one example of the constant and kind attention and care given to all of us by the hosts, David Baneke, Bert Theunissen, Ariane den Daas, Odette Jansen and Annemarijn Douwes of the Descartes Centre, for which we are tremendously grateful. We also thank the publishers who revealed the state of the field in book exhibits across a dozen tables in Drift 21. We are especially grateful to Jay Malone and the HSS office for their patient guidance in the process of creating the programme and for Jay’s fundamental contributions to making this meeting such a terrific success.

**Christine von Oertzen**<br>
**Simon Werrett**<br>
*2019 Programme Co-Chairs*

## Report of the HSS Executive Director

<script>

export default {
  mounted () {
    const tempToggle = document.getElementById('tempToggle');
const fGraph = document.getElementById('weather-f');
const cGraph = document.getElementById('weather-c');
const fSpan = document.querySelector('.f');
const cSpan = document.querySelector('.c');

tempToggle.addEventListener('click', function() {
    if (cGraph.classList.contains('hidden')) {
        console.log(cGraph)
        fGraph.classList.add('hidden');
        fSpan.style.opacity = '.5';
        cGraph.classList.remove('hidden');
        cSpan.style.opacity = '1';
    } else {
        fGraph.classList.remove('hidden');
        fSpan.style.opacity = '1';
        cGraph.classList.add('hidden');
        cSpan.style.opacity = '.5';
    }
    } )
  }
}
</script>

<style scoped lang="stylus">
.hidden
    display: none;
.graph
    height: 500px
    margin-bottom: 15px

button
    background: sotm-orange
    border: none
    padding: 0.5em 1em
    font-size: 16px
    font-weight: 600
    cursor: pointer

    margin-bottom: 1em
    clear: both
    display: block
    margin-left: auto
.c
    opacity: 0.5
</style> -->