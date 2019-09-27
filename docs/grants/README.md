# ✈️ Grants

The History of Science Society offers several grants to defer the cost of membership or attending the meeting, which are administed by the Executive Office. These grants are vital to encouraging ... This year, the HSS was able to offer grants to 100% of applicants. Grant information and statistics provided below.

## NSF Travel Grant
The National Science Foundation grant [(#1656205)](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1656205&HistoricalAwards=false) is intended to help defray travel and registration costs to attend academic meetings. Expenses covered by the grant include transportation to and from the meeting and registration fees. Eligible grantees include graduate students, recent PhDs (received in the last five years), and independent scholars who are participating in the meeting (e.g., presenting a paper, Society governance, etc.) and who are US citizens or enrolled at US institutions.

<nsfEmployment class="graph" />

### 9-Societies Travel Grant
::: tip
In 2018, HSS distributed over **$80,000** in NSF travel grant funds to attendees of &amp;HPS, AAHM, ASEH, HOPOS, HSS, PSA, SHOT, and SLSA
:::

In addition to administering NSF travel grants for the HSS meeting, the Executive Office also oversee the grant for eight other academic societies as well as for the International Union of History and Philosophy of Technology. The entire list of organizations included in this grant is listed below.

1. [American Association for the History of Medicine (AAHM)](http://www.histmed.org/)
2. [American Society for Environmental History (ASEH)](https://aseh.net/)
3. [History of Science Society (HSS)](https://hssonline.org)
4. [Integrated History and Philosophy of Science (&HPS)](http://integratedhps.org/en/)
5. [International Society for the History of Philosophy of Science (HOPOS)](http://hopos.org/)
6. [International Society for the History, Philosophy, and Social Studies of Biology (ISHPSSB)](https://www.ishpssb.org/)
7. [International Union of History and Philosophy of Technology (IUHPST/DLMPST)](http://dlmps.org/)
8. [Philosophy of Science Association (PSA)](https://www.philsci.org/)
9. [Society for Literature, Science, and the Arts (SLSA)](https://www.litsciarts.org/)
10. [Society for the History of Technology (SHOT)](https://www.historyoftechnology.org/)

## HSS International Travel Grant
For attendees who are not eligible for the NSF grant&mdash;namely, non-US citizens enrolled at non-US institutions&mdash;the HSS offers international travel grants that have the same purpose as the NSF travel grant, that is, to defer the cost of attending the annual meeting. These grants are also available to graduate students, recent PhDs (received in the last five years), and independent scholars who are participating in the meeting (e.g., presenting a paper, Society governance, etc.). This grant is supported by donations from members and attendees. Thank you to these donors!

| Applicants | Grantees | Amount Requested | Amount Granted | Amount Distributed | Average Award |
| --- | --- | --- | --- | --- | --- |
| 61 | 38 | $30,980.72 | $15,246.52 | $9,160.38 | $241.06 |

### Currencies Distributed in 2019
<div class="currency-container">
<template v-for="currency in sortedArray">
<div  class="currency">
    <img class="currency-img" :src="currency.img" alt="" aria-hidden="true" loading="lazy">
    <p class="currency-name">{{ currency.name }}</p>
</div>
</template>
</div>

## Dependent Care Grant
The HSS dependent care grant offers support up to $200 to assist delegates who require additional dependent care during the meeting. Dependent care may include childcare, either on site or at home, or any assistance required to attend the meeting. This grant is supported by donations from members and attendees. Thank you to these donors!

| Applications | Grantees | Total Amount Awarded |
| --- | --- | --- |
| 8 | 5 | $812 |

*Applicants who did not receive a grant either did not accept it or did not meet eligibility criteria.*

## Sponsor-a-Scholar Program


<script>
export default {
    data() {
        return {
            currencies: [{
                name: 'PayPal',
                img: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg'
                }, {
                name: 'USD (United States dollar)',
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png'
                }, {
                name: 'EUR (Euro)',
                img:  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png'
                }, {
                name: 'GBP (Pound sterling)',
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png'
                }, {
                name: 'CAD (Canadian dollar)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/200px-Flag_of_Canada_%28Pantone%29.svg.png'
                }, {
                name: 'INR (Indian rupee)',
                img:  'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/200px-Flag_of_India.svg.png'
                }, {
                name: 'MXN (Mexican peso)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png'
                }, {
                name: 'DKK (Danish krone)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/200px-Flag_of_Denmark.svg.png'
                }, {
                name: 'HKD (Hong Kong dollar)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/200px-Flag_of_Hong_Kong.svg.png'
                }, {
                name: 'HRK (Croatian kuna)',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/200px-Flag_of_Croatia.svg.png'
                }, {
                name: 'JPY (Japanese yen)',
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png'
                }, {
                name: 'BRL (Brazilian real)',
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png'
                }
            ]
    }
},
computed: {
    sortedArray: function() {
        function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      return this.currencies.sort(compare);
    }
}
}

</script>

<style scoped lang="stylus">
.currency-container
    display: flex
    margin: 1em 0
    flex-wrap: wrap
    justify-content: space-around
.currency
    height: 150px
    max-width: 100px
    margin: .75em
.currency-img
    width: 100%

</style>