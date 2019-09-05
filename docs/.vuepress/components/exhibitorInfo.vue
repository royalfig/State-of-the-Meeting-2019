<template>
    <article class="exhibitor-card">
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
</template>

<script>
export default {
  props: {
      logo: String,
      link: String,
      exhibitor: String,
      blog: String,
      blogLink: String,
      twitter: String,
      twitterLink: String,
      facebook: String,
      facebookLink: String,
      yt: String,
      ytLink: String,
      titleLinks: Array,
      titleImgs: Array
  }
}

</script>

<style lang="stylus">
.exhibitor-card
    display: block
    // flex-direction: column
    width: 100%

    padding: 3em
    margin: 1em 0
    border: 1px solid rgba(0,0,0,.25)
    box-shadow: 3px 3px 5px rgba(0,0,0,.15)

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