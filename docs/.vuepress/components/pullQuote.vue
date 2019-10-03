<template>
    <div class="pull-quote">
        <p class="quotes">{{title}}</p>
    </div>
</template>

<script>
export default {
  props: {
      title: String,
      required: true
  }
}


</script>

<style lang="stylus">
.pull-quote
    display: flex
    flex: 100%;
    flex-wrap: wrap
    padding: 1em 3em
    position: relative
    margin: .75em .5em
    border: 1px solid rgba(0,0,0,.25)
    box-shadow: 3px 3px 5px rgba(0,0,0,.15)
    box-sizing: border-box

    &:before
        content: '\00201C'
        position: absolute
        top: 0
        left: 2%
        color: rgba(5,5,5,.05)
        font-size: 14em
        font-family: Garamond, serif
        font-weight: 900
        line-height 1
@media (min-width: 1000px)
    .pull-quote
        flex: calc( 50% - 1em)
</style>