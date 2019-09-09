<!-- <template>
    <article class="exhibitor-card">
        <p class="exhibitor-badge">2019 Exhibitor</p>
        <div class="exhibitor-info">
        <img :src="logo" alt="">
        <a :href="link" class="exhibitor">{{ exhibitor }}</a>
        </div>
        <aside class="social">
            <p>Social Media</p>
                <a v-if=blog :href="blogLink">Blog: {{blog}}</a>
                <a v-if=twitter :href="twitterLink">Twitter: @{{ twitter }}</a>
                <a v-if=facebook :href="facebookLink">Facebook: {{ facebook }}</a>
                <a v-if=yt :href="ytLink">YouTube: {{ yt }}</a>
        </aside>
        <div v-if=titleLinks class="featured">
            <p>Featured Titles</p>
            <a v-for="item in titleLinks" :href="item.title">
                <img :src="item.img">
            </a>
        </div>
    </article>
</template> -->

<template v-for="value in object">
    <article class="exhibitor-card">
        <p class="exhibitor-badge">2019 Exhibitor</p>
        <div class="exhibitor-info">
            <p>{{ value }}</p>
        </div>
    </article>
</template>


<script>
export default {
  data () {
    return {
           object: ['test','test2']
            }
        }
}
</script>

<style lang="stylus">
.exhibitor-card
    display: block
    position relative
    max-width: 100%

    padding: 3em
    margin: 1em 0
    border: 1px solid rgba(0,0,0,.25)
    box-shadow: 3px 3px 5px rgba(0,0,0,.15)

    .exhibitor-badge
        position: absolute
        top: -2px
        right: 15px
        padding .25em .35em
        margin 0
        background sotm-utrecht
        border-bottom-right-radius 5px
        border-bottom-left-radius 5px
        box-shadow: 1px 1px 2px rgba(0,0,0,.25)
        color sotm-black

    .exhibitor-info
        img
            display: block
            max-height: 75px
            margin: .5em 0

    .exhibitor
        font-size: 2em
        margin-top: .5em
        display: block

    .social
        margin-bottom: 1em

        p
            border-bottom: 1px solid currentColor
            font-weight: 600

        a
            display: inline-block
            margin: .25em 0
            padding: .5em

            background sotm-orange
            border-radius: 8px
            color sotm-black
    .featured
        display: flex
        flex-wrap: wrap
        justify-content: space-around

        p
            width: 100%
            border-bottom: 1px solid currentColor
            font-weight: 600
        img
            display: block
            height: 250px
            &:hover
                filter: saturate(150%)


</style>