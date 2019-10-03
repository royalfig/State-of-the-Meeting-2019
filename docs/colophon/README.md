# ℹ️ Colophon

## How This Site Was Built
The HSS 2019 State of the Meeting Report was produced by [Ryan Feigenbaum](https://ryanfeigenbaum.com), HSS Society Coordinator, with the help of Executive Office staff. The report was built using [VuePress](https://vuepress.vuejs.org/), a static site generator based on the JavaScript framework, [Vue.js](https://vuejs.org/).

Charts were built using [Chart.js](https://www.chartjs.org/) and [Google charts](https://developers.google.com/chart).

View the State of the Meeting [source code](https://github.com/royalfig/State-of-the-Meeting-2019) on GitHub.

## Typography
A colophon often presents information about the typefaces used in the production of the publication. The State of the Meeting 2019 report, following the VuePress default and current web design best practices, uses a *system font stack*. This means that fonts are rendered using the default typefaces already installed on the user&apos;s machine. See the CSS code below for an example of how this approach is implemented.

``` css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
"Helvetica Neue", sans-serif;
```

The reason for using a system font stack is performance, since it obviates the need to download external fonts, a costly operation. However, a byproduct of the approach is that typefaces on the site may look different depending on your operating system. You might notice, for example, that text looks different on Windows, which uses the Segoe UI typeface, on Android, which uses Roboto, and MacOS, which uses San Francisco (-apple-system). System fonts are now of such high quality, free to use, and the performance benefit is so great, developers and designers consider the variation introduced by them to be acceptable if absolute consistency is not a priority.

## HSS Digital Projects & Research

<div class="float">
<a href="https://digital.hssonline.org/twitterdex" title="Check out the Twitterdex">
<img src="./twitterdex.jpg" alt="HSS Twitterdex, a crowd-sourced directory of 191+ history of science Twitterstorians">
</a>
</div>

The History of Science Society recently launched [digital.hss](https://digital.hssonline.org). It showcases digital resources and projects that may be useful for historians of science. If you have a resource or project to contribute, contact [Kate Sheppard](mailto:sheppardka@mst.edu?topic=digital.hss) or [Ryan Feigenbaum](mailto:ryan@hssonline.org?topic=digital.hss).

A recent initative of [digital.hss](https://digital.hssonline.org) is the [HSS Twitterdex](https://digital.hssonline.org/twitterdex), a crowd-sourced directory of 191+ history of science Twitterstorians. The site is a great resource if you're looking for historians of science to follow on Twitter. You can search through the list by typing your query into the search box. For example, searching &ldquo;biology&rdquo; will show anyone who has listed &ldquo;biology&rdquo; in their bio.

Not yet on the Twitterdex? It's also a great place to share your research. Anyone can join by completing the [online form](https://hssonline.formstack.com/forms/twitterdex).

<joinTheConvo />

<style scoped lang="stylus">
.float
    max-width: 400px
    margin: 0 auto

@media (min-width: 1000px)
    .float
        max-width: 300px
        float: right
        margin: 1em 0 1em 2em

</style>