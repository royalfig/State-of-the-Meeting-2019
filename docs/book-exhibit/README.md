# 📚 Book Exhibit

### 2019 Exhibitors

We hosted our 2019 book exhibit in style! Publishers displayed their latest titles in the luxurious atrium of Drift 21, the meeting's epicenter. Throughout the week, attendees stopped by for fruit water, coffee, tea, and cookies, as they looked at books, chatted with publishers, and met up with colleagues.

<div class="exhibitor-container">



<template v-for="value in object">
    <article class="exhibitor-card">
        <p class="exhibitor-badge">2019 Exhibitor</p>
        <div class="exhibitor-info">
        <img :src="value.img" alt="">
        <a :href="value.web" class="exhibitor">{{ value.pub }}</a>
        </div>
        <aside v-if="value.moreSites | value.tw | value.fb != ''" class="social">
            <p>Social Media and Resources</p>
            <div class="social-container">
                    <a v-if=value.moreSites :href="value.moreSites"><img src="/blog.svg">Resource 1</a>
                    <a v-if=value.moreSites2 :href="value.moreSites2"><img src="/blog.svg">Resource 2</a>
                    <a v-if=value.tw :href="value.twLink" aria-label="Twitter"><img src="/tw.svg">{{ value.tw }}</a>
                    <a v-if=value.fb :href="value.fbLink" aria-label="Facebook"><img src="/fb.svg">{{ value.fb }}</a>
                    <a v-if=value.yt :href="ytLink" aria-label="YouTube"><img src="/yt.svg">{{ value.yt }}</a>
                    <a v-if=value.insta :href="value.instaLink" aria-label="Instagram"><img src="/insta.svg">{{ value.insta }}</a>
            </div>
        </aside>
        <div v-if="value.featured != ''" class="featured">
            <p >Featured Titles</p>
            <a v-if=value.featured :href="value.featured">
                <img v-if=value.featuredimg :src="value.featuredimg">
            </a>
            <a v-if=value.featured2 :href="value.featured2">
                <img v-if=value.featured2img :src="value.featured2img">
            </a>
            <a v-if=value.featured3 :href="value.featured3">
                <img v-if=value.featured3img :src="value.featured3img">
            </a>
            <a v-if=value.featured4 :href="value.featured4">
                <img v-if=value.featured4img :src="value.featured4img">
            </a>
        </div>
    </article>
</template>

<script>
export default {
  data () {
    return {
           object: [
{
    pub: 'Amsterdam University Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1563401622UCPressLogo.jpg',
    web: 'https://www.aup.nl/en/',
    tw: 'amsterdamupress',
    twLink: 'https://twitter.com/amsterdamupress',
    fb: 'aupacademic',
    fbLink: 'https://www.facebook.com/aupacademic/',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Showcasing-Science-Nineteenth-Scholarship-Netherlands/dp/9462982244?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=9462982244',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/51uPDW9%2BtoL.jpg',
    featured2: 'https://www.amazon.com/Enlightenments-Animals-Changing-Conceptions-Eighteenth/dp/9462987629?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=9462987629',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/41dBmxjlmML.jpg',
    featured3: 'https://www.amazon.com/Wise-Merchant-Caspar-Barlaeus/dp/9462988005?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=9462988005',
    featured3img: 'https://images-na.ssl-images-amazon.com/images/I/51p22CGrWRL.jpg',
    featured4: '',
    featured4img: ''
}, {
    pub: 'University of Chicago Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1563401622UCPressLogo.jpg',
    web: 'https://www.press.uchicago.edu/index.html',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Fictions-Cosmos-Science-Literature-Seventeenth/dp/0226011224?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0226011224',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/410GpTcPZyL.jpg',
    featured2: 'https://www.amazon.com/Possessed-Hypnotic-Corporate-Invention-Modernity/dp/0226020541?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0226020541',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/41twbJTp9WL.jpg',
    featured3: 'https://www.amazon.com/Hysteria-Invention-Medical-Category-between/dp/022627554X?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=022627554X',
    featured3img: 'https://images-na.ssl-images-amazon.com/images/I/51DzPbzPM6L.jpg',
    featured4: '',
    featured4img: ''
}, {
    pub: 'MIT Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1563401549MITPressLogo.png',
    web: 'https://mitpress.mit.edu/',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Energy-End-World-Islands-Infrastructures/dp/0262038897?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0262038897',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/51FVO1SRckL.jpg',
    featured2: 'https://www.amazon.com/Technology-America-History-Individuals-Ideas/dp/0262535777?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0262535777',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/51q8JFshLdL.jpg',
    featured3: 'https://www.amazon.com/Spaceflight-Concise-History-Essential-Knowledge/dp/0262536331?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0262536331',
    featured3img: 'https://images-na.ssl-images-amazon.com/images/I/31LN1jkIsbL.jpg',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Huygens ING',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1563401823HuygensINGlogo.jpg',
    web: 'https://www.huygens.knaw.nl/',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: '',
    featuredimg: '',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Brepols',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/156115013673850832_logo_bpu_bootje_en_brepols1.jpg',
    web: 'http://www.brepols.net/',
    tw: 'Brepols',
    twLink: 'https://twitter.com/Brepols',
    fb: 'Brepols',
    fbLink: 'https://twitter.com/Brepols',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Alchemy-Antiquity-Modernity-Diversis-Artibus/dp/2503581919/ref=as_li_ss_tl?keywords=Greek+Alchemy+from+Late+Antiquity+to+Early+Modernity&qid=1561150391&s=gateway&sr=8-1&linkCode=sl1&tag=historyofscie-20&linkId=9d47792a5f7641dc19171e0e3943c9de&language=en_US',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/41VSanp7LvL._SX385_BO1,204,203,200_.jpg',
    featured2: 'https://www.amazon.com/First-Latin-Treatise-Ptolemys-Astronomy/dp/2503581374/ref=as_li_ss_tl?keywords=The+First+Latin+Treatise+on+Ptolemy%E2%80%99s+Astronomy:+The+Almagesti+minor+(c.+1200)&qid=1561150918&s=gateway&sr=8-1&linkCode=sl1&tag=historyofscie-20&linkId=7f319d2f8e8570e2c7c334c42eb83090&language=en_US',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/41L1KzsGhnL._SX348_BO1,204,203,200_.jpg',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Brill',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/155327759473850832_logo_brill_blauw_groot.jpg',
    web: 'http://brill.com/',
    tw: 'brill_history',
    twLink: 'https://twitter.com/brill_history',
    fb: 'BrillHistory',
    fbLink: 'https://www.facebook.com/BrillHistory/',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://brill.com/view/journals/esm/esm-overview.xml',
    featuredimg: 'https://brill.com/cover/covers/15733823.jpg?width=300',
    featured2: 'https://brill.com/view/journals/nun/nun-overview.xml?lang=en',
    featured2img: 'https://brill.com/cover/covers/18253911.jpg?width=300',
    featured3: 'https://brill.com/view/serial/ENH',
    featured3img: 'https://brill.com/cover/covers/24523283.jpg?width=300',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Cambridge University Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/155674351273850832_cup_colour_logo_high_resolution1.jpg',
    web: 'http://http/www.cambridge.org/academic',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: '',
    featuredimg: '',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Cold Spring Harbor Laboratory',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/156218828773850832_cshl_logo_alternate_rgb1.png',
    web: 'http://library.cshl.edu/archives',
    tw: 'cshllibrary',
    twLink: 'https://twitter.com/cshllibrary',
    fb: 'CSHL.Library',
    fbLink: 'https://www.facebook.com/CSHL.Library/',
    insta: 'cshlarchives',
    instaLink: 'https://www.instagram.com/cshlarchives/',
    moreSites: 'http://library.cshl.edu/archives',
    moreSites2: 'http://library.cshl.edu/center-for-humanities',
    featured: 'https://www.amazon.com/Faces-Genome-Ludmila-Pollock/dp/1621822931?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1621822931',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/51jpr4LYrlL._SX258_BO1,204,203,200_.jpg',
    featured2: 'https://www.amazon.com/Road-Discovery-History-Spring-Laboratory/dp/1621821080?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1621821080',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/6134MKsvQnL._SX496_BO1,204,203,200_.jpg',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Combined Academic Publishers',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/156219003073850832_cap_new_logo_master1.jpg',
    web: 'http://www.combinedacademic.co.uk/',
    tw: 'CAP_Ltd',
    twLink: 'https://twitter.com/CAP_Ltd',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Subtle-Knot-English-Literature-Neuroscience/dp/0773553185?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0773553185',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/41Vb8VkNbIL._SX331_BO1,204,203,200_.jpg',
    featured2: 'https://www.amazon.com/Experimental-Imagination-Literary-Knowledge-Enlightenment/dp/1503605442?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1503605442',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/512Jf2tMnmL._SX331_BO1,204,203,200_.jpg',
    featured3: 'https://www.amazon.com/Divine-Variations-Christian-Thought-Science/dp/1503610098?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1503610098',
    featured3img: 'https://images-na.ssl-images-amazon.com/images/I/414O-oDGX%2BL._SX329_BO1,204,203,200_.jpg',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Harvard University Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/156115131673850832_hup_vertical_threeline_cmyk1.jpg',
    web: 'http://www.hup.harvard.edu/',
    tw: 'HarvardUPLondon',
    twLink: 'https://twitter.com/HarvardUPLondon',
    fb: '',
    fbLink: '',
    insta: 'harvardpress',
    instaLink: 'https://www.instagram.com/harvardpress/',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.amazon.com/Assembling-Dinosaur-Hunters-Tycoons-Spectacle/dp/067473758X?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=067473758X',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/518Gv63AanL._SX327_BO1,204,203,200_.jpg',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Palgrave Macmillan',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1556640845PalgraveMacmillan-Logo-2019-04-30.jpg',
    web: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1556640845PalgraveMacmillan-Logo-2019-04-30.jpg',
    tw: 'PalgraveHistory',
    twLink: 'https://twitter.com/PalgraveHistory',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: '',
    featuredimg: '',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Princeton University Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/156218692373850832_logo61.jpg',
    web: '',
    tw: 'PrincetonUPress',
    twLink: 'https://twitter.com/PrincetonUPress',
    fb: 'PrincetonUniversityPress',
    fbLink: 'https://www.facebook.com/PrincetonUniversityPress/',
    insta: 'princetonupress',
    instaLink: 'https://www.instagram.com/princetonupress/',
    moreSites: 'http://blog.press.princeton.edu/',
    moreSites2: 'https://vimeo.com/princetonuniversitypress',
    featured: 'https://www.amazon.com/Creatures-Cain-Human-Nature-America/dp/0691181888?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0691181888',
    featuredimg: 'https://images-na.ssl-images-amazon.com/images/I/51ot3S2ndgL._SX329_BO1,204,203,200_.jpg',
    featured2: 'https://www.amazon.com/Shadow-Doubt-Confirmed-Einsteins-Relativity/dp/0691183864?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0691183864',
    featured2img: 'https://images-na.ssl-images-amazon.com/images/I/4199K7v7%2B-L._SX329_BO1,204,203,200_.jpg',
    featured3: 'amazon.com/Newton-Alchemist-Science-Enigma-Natures/dp/0691174873?SubscriptionId=AKIAJRJRCKLWZ3QWH7SQ&tag=historyofscie-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0691174873',
    featured3img: 'https://images-na.ssl-images-amazon.com/images/I/514FCymQaIL._SX344_BO1,204,203,200_.jpg',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Royal Society Publishing',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1554141654RoyalSociety-Logo-2019.jpg',
    web: 'http://royalsociety.org/journals/',
    tw: 'RSocPublishing',
    twLink: 'https://twitter.com/RSocPublishing',
    fb: 'RoyalSocietyPublishing.FanPage',
    fbLink: 'https://www.facebook.com/RoyalSocietyPublishing.FanPage',
    insta: '',
    instaLink: '',
    moreSites: 'https://blogs.royalsociety.org/publishing/',
    moreSites2: 'https://blogs.royalsociety.org/history-of-science/',
    featured: 'https://royalsocietypublishing.org/journal/rsnr',
    featuredimg: 'https://royalsocietypublishing.org/cms/attachment/730ebc0c-fd67-4a51-9c07-59fa73aec7ad/rsnr.2019.73.issue-3.cover.gif',
    featured2: 'https://royalsocietypublishing.org/journal/rsbm',
    featured2img: 'https://royalsocietypublishing.org/cms/attachment/844ced59-7a93-4230-b5d6-e7ec91faba6b/rsbm.issue-66.cover.gif',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Taylor & Francis',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/155872814473850832_taylor_and_francis_logo_originalversion1.jpg',
    web: 'http://www.tandfonline.com/',
    tw: 'RouteledgeHist',
    twLink: 'https://twitter.com/RoutledgeHist',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.tandfonline.com/toc/yamb20/current',
    featuredimg: 'https://www.tandfonline.com/na101/home/literatum/publisher/tandf/journals/content/yamb20/2019/yamb20.v066.i01/yamb20.v066.i01/20190228/yamb20.v066.i01.cover.jpg',
    featured2: 'https://www.tandfonline.com/toc/tasc20/current',
    featured2img: 'https://www.tandfonline.com/na101/home/literatum/publisher/tandf/journals/content/tasc20/2019/tasc20.v076.i01/tasc20.v076.i01/20190320-01/tasc20.v076.i01.cover.jpg',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'University of California Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/155845346773850832_uc_press_center_stacked1.jpg',
    web: 'http://www.ucpress.edu/',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://hsns.ucpress.edu/',
    featuredimg: 'https://hsns.ucpress.edu/sites/default/files/styles/large/public/highwire/ucphsns/49/2.cover-source.jpg',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'The University of Chicago Press, Journals Division',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1555944637UniversityofChicagoPressJournalsDivision-Logo-2019-04.jpg',
    web: 'http://www.journals.uchicago.edu/',
    tw: 'ChicagoJournals',
    twLink: 'https://twitter.com/ChicagoJournals/',
    fb: 'UChicagoJournals',
    fbLink: 'https://www.facebook.com/UChicagoJournals',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: 'https://www.journals.uchicago.edu/toc/isis/current',
    featuredimg: 'https://www.journals.uchicago.edu/na101/home/literatum/publisher/uchicago/journals/content/isis/2019/isis.2019.110.issue-1/isis.2019.110.issue-1/20190321/isis.2019.110.issue-1.cover.gif',
    featured2: 'https://www.journals.uchicago.edu/toc/osiris/current',
    featured2img: 'https://www.journals.uchicago.edu/na101/home/literatum/publisher/uchicago/journals/content/osiris/2018/osiris.2018.33.issue-1/osiris.2018.33.issue-1/20181025/osiris.2018.33.issue-1.cover.gif',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}, {
    pub: 'Wiley',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1560355988WileyDigitalArchives-Logo-2019-06.png',
    web: 'http://www.wileydigitalarchives.com/',
    tw: 'wileylibraries',
    twLink: 'https://twitter.com/wileylibraries',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: 'https://www.wiley.com/network/',
    moreSites2: '',
    featured: 'https://www.wileydigitalarchives.com/nyas',
    featuredimg: '',
    featured2: 'https://www.wileydigitalarchives.com/rai',
    featured2img: '',
    featured3: 'https://www.wileydigitalarchives.com/rcp',
    featured3img: '',
    featured4: 'https://www.wileydigitalarchives.com/rgs',
    featured4img: ''
}, {
    pub: 'Yale University Press',
    img: 'https://dryfta-assets.s3-accelerate.amazonaws.com/assets/hss2019/organizations/1557254748Yale-Logo-2019-05.jpg',
    web: 'http://www.yalebooks.com/',
    tw: '',
    twLink: '',
    fb: '',
    fbLink: '',
    insta: '',
    instaLink: '',
    moreSites: '',
    moreSites2: '',
    featured: '',
    featuredimg: '',
    featured2: '',
    featured2img: '',
    featured3: '',
    featured3img: '',
    featured4: '',
    featured4img: ''
}]
            }
        }
}
</script>



</div>
<bookExhibitAttendance class="graph" />
<publisherMeeting class="graph" />
<buyABook class="graph" />
