# ℹ️ Colophon

## Tech Stack
The HSS 2019 State of the Meeting Report was produced by [Ryan Feigenbaum](https://ryanfeigenbaum.com), HSS Society Coordinator, with the help of Executive Office staff. The report was built using [VuePress](https://vuepress.vuejs.org/), a static site generator based on the JavaScript framework, [Vue.js](https://vuejs.org/).

Charts were built using [Chart.js](https://www.chartjs.org/) and [Google charts](https://developers.google.com/chart).

View the State of the Meeting [source code](https://github.com/royalfig/State-of-the-Meeting-2019) on GitHub.

## Font Stack
Per the VuePress default, the State of the Meeting website uses a *system font stack*, which means that web pages are rendered using the default typeface already installed on the user&apos;s machine. See the code below.

**CSS for a System Font Stack**
``` css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
"Helvetica Neue", sans-serif;
```

The reason for this approach is performance, since it obviates the need to download external fonts, a costly operation. However, a byproduct is that typefaces on the site may look different depending on your operating system. You might notice, for example, that the font looks different on Windows, which uses Segoe UI, on Android, which uses Roboto, and MacOS, which uses San Francisco (-apple-system). Because system fonts are now of such high quality and the performance benefit is so great, this variation is deemed acceptable.

## Conclusion

