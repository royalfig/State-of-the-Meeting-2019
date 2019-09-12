<template>
    <div class="footer-container">
        <div>
            <p><strong>Join the discussion on Twitter:</strong> <a href="https://twitter.com/search?q=%23hss19">#hss19</a></p>
        </div>
        <div>
            <p><strong>Get in touch</strong></p>
            <a aria-label="Facebook" href="https://www.facebook.com/HistoryOfScienceSociety"><img class="list" src="/fb.svg"></a>
            <a aria-label="Twitter" href="https://twitter.com/hssonline"><img class="list"img src="/tw.svg"></a>
            <a aria-label="Email" href="mailto:info@hssonline.org?subject=State%20of%20the%20Meeting%202019"><img class="list" src="/email.svg" ></a>
        </div>
    </div>
</template>


<style lang="stylus">
.footer-container
    display: flex
    align-items: flex-start
    justify-content: space-between
    border-top: 1px solid #eaecef
    padding-top: .5em
    margin-top: 5em
    div:first-child
        p
            margin: 0
    div:last-child
        display: flex
        flex-flow: row wrap
        >*
            margin: .25em 1em
        p
            width: 100%
            margin: 0;
        a
            height: 2em
.list
    height: 2em
    margin-top: .25em

</style>