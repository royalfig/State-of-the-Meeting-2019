(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(t,e,n){var r=n(163)("wks"),o=n(164),a=n(148).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},148:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},149:function(t,e,n){var r=n(148),o=n(160),a=n(150),i=n(158),s=n(173),c=function(t,e,n){var u,l,p,d,f=t&c.F,h=t&c.G,v=t&c.S,g=t&c.P,_=t&c.B,m=h?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,S=h?o:o[e]||(o[e]={}),y=S.prototype||(S.prototype={});for(u in h&&(n=e),n)p=((l=!f&&m&&void 0!==m[u])?m:n)[u],d=_&&l?s(p,r):g&&"function"==typeof p?s(Function.call,p):p,m&&i(m,u,p,t&c.U),S[u]!=p&&a(S,u,d),g&&y[u]!=p&&(y[u]=p)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},150:function(t,e,n){var r=n(155),o=n(172);t.exports=n(151)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},151:function(t,e,n){t.exports=!n(152)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},152:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},153:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},154:function(t,e,n){var r=n(153);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},155:function(t,e,n){var r=n(154),o=n(187),a=n(188),i=Object.defineProperty;e.f=n(151)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},156:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},157:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},158:function(t,e,n){var r=n(148),o=n(150),a=n(156),i=n(164)("src"),s=n(201),c=(""+s).split("toString");n(160).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var u="function"==typeof n;u&&(a(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(a(n,i)||o(n,i,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||s.call(this)})},160:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},161:function(t,e,n){var r=n(182),o=n(157);t.exports=function(t){return r(o(t))}},162:function(t,e,n){var r=n(157);t.exports=function(t){return Object(r(t))}},163:function(t,e,n){var r=n(160),o=n(148),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(180)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},164:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},165:function(t,e){t.exports={}},166:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},167:function(t,e,n){var r=n(168),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},168:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},169:function(t,e,n){var r=n(163)("keys"),o=n(164);t.exports=function(t){return r[t]||(r[t]=o(t))}},170:function(t,e,n){"use strict";var r=n(152);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},172:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},173:function(t,e,n){var r=n(189);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},174:function(t,e,n){var r=n(190),o=n(175);t.exports=Object.keys||function(t){return r(t,o)}},175:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},176:function(t,e,n){var r=n(173),o=n(182),a=n(162),i=n(167),s=n(208);t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,p=6==t,d=5==t||p,f=e||s;return function(e,s,h){for(var v,g,_=a(e),m=o(_),S=r(s,h,3),y=i(m.length),b=0,w=n?f(e,y):c?f(e,0):void 0;y>b;b++)if((d||b in m)&&(g=S(v=m[b],b,_),t))if(n)w[b]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:w.push(v)}else if(l)return!1;return p?-1:u||l?l:w}}},180:function(t,e){t.exports=!1},181:function(t,e,n){var r=n(153),o=n(148).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},182:function(t,e,n){var r=n(166);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},183:function(t,e,n){var r=n(155).f,o=n(156),a=n(147)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},185:function(t,e,n){for(var r=n(198),o=n(174),a=n(158),i=n(148),s=n(150),c=n(165),u=n(147),l=u("iterator"),p=u("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(f),v=0;v<h.length;v++){var g,_=h[v],m=f[_],S=i[_],y=S&&S.prototype;if(y&&(y[l]||s(y,l,d),y[p]||s(y,p,_),c[_]=d,m))for(g in r)y[g]||a(y,g,r[g],!0)}},186:function(t,e,n){var r=n(147)("unscopables"),o=Array.prototype;null==o[r]&&n(150)(o,r,{}),t.exports=function(t){o[r][t]=!0}},187:function(t,e,n){t.exports=!n(151)&&!n(152)(function(){return 7!=Object.defineProperty(n(181)("div"),"a",{get:function(){return 7}}).a})},188:function(t,e,n){var r=n(153);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},189:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},190:function(t,e,n){var r=n(156),o=n(161),a=n(191)(!1),i=n(169)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)n!=i&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~a(u,n)||u.push(n));return u}},191:function(t,e,n){var r=n(161),o=n(167),a=n(205);t.exports=function(t){return function(e,n,i){var s,c=r(e),u=o(c.length),l=a(i,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},193:function(t,e,n){var r=n(166);t.exports=Array.isArray||function(t){return"Array"==r(t)}},198:function(t,e,n){"use strict";var r=n(186),o=n(199),a=n(165),i=n(161);t.exports=n(200)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},199:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},200:function(t,e,n){"use strict";var r=n(180),o=n(149),a=n(158),i=n(150),s=n(165),c=n(202),u=n(183),l=n(207),p=n(147)("iterator"),d=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,n,h,v,g,_){c(n,e,h);var m,S,y,b=function(t){if(!d&&t in H)return H[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==v,x=!1,H=t.prototype,O=H[p]||H["@@iterator"]||v&&H[v],C=O||b(v),A=v?k?b("entries"):C:void 0,P="Array"==e&&H.entries||O;if(P&&(y=l(P.call(new t)))!==Object.prototype&&y.next&&(u(y,w,!0),r||"function"==typeof y[p]||i(y,p,f)),k&&O&&"values"!==O.name&&(x=!0,C=function(){return O.call(this)}),r&&!_||!d&&!x&&H[p]||i(H,p,C),s[e]=C,s[w]=f,v)if(m={values:k?C:b("values"),keys:g?C:b("keys"),entries:A},_)for(S in m)S in H||a(H,S,m[S]);else o(o.P+o.F*(d||x),e,m);return m}},201:function(t,e,n){t.exports=n(163)("native-function-to-string",Function.toString)},202:function(t,e,n){"use strict";var r=n(203),o=n(172),a=n(183),i={};n(150)(i,n(147)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),a(t,e+" Iterator")}},203:function(t,e,n){var r=n(154),o=n(204),a=n(175),i=n(169)("IE_PROTO"),s=function(){},c=function(){var t,e=n(181)("iframe"),r=a.length;for(e.style.display="none",n(206).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[a[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[i]=t):n=c(),void 0===e?n:o(n,e)}},204:function(t,e,n){var r=n(155),o=n(154),a=n(174);t.exports=n(151)?Object.defineProperties:function(t,e){o(t);for(var n,i=a(e),s=i.length,c=0;s>c;)r.f(t,n=i[c++],e[n]);return t}},205:function(t,e,n){var r=n(168),o=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):a(t,e)}},206:function(t,e,n){var r=n(148).document;t.exports=r&&r.documentElement},207:function(t,e,n){var r=n(156),o=n(162),a=n(169)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},208:function(t,e,n){var r=n(209);t.exports=function(t,e){return new(r(t))(e)}},209:function(t,e,n){var r=n(153),o=n(193),a=n(147)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},232:function(t,e,n){},375:function(t,e,n){"use strict";var r=n(149),o=n(176)(0),a=n(170)([].forEach,!0);r(r.P+r.F*!a,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},376:function(t,e,n){"use strict";var r=n(149),o=n(189),a=n(162),i=n(152),s=[].sort,c=[1,2,3];r(r.P+r.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(170)(s)),"Array",{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),o(t))}})},377:function(t,e,n){var r=n(155).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(151)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},378:function(t,e,n){"use strict";var r=n(232);n.n(r).a},489:function(t,e,n){"use strict";n.r(e);n(185),n(375),n(376),n(377);var r={data:function(){return{currencies:[{name:"PayPal",img:"https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"},{name:"USD (United States dollar)",img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png"},{name:"EUR (Euro)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/200px-Flag_of_Europe.svg.png"},{name:"GBP (Pound sterling)",img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png"},{name:"CAD (Canadian dollar)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/200px-Flag_of_Canada_%28Pantone%29.svg.png"},{name:"INR (Indian rupee)",img:"https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/200px-Flag_of_India.svg.png"},{name:"MXN (Mexican peso)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png"},{name:"DKK (Danish krone)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/200px-Flag_of_Denmark.svg.png"},{name:"HKD (Hong Kong dollar)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/200px-Flag_of_Hong_Kong.svg.png"},{name:"HRK (Croatian kuna)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/200px-Flag_of_Croatia.svg.png"},{name:"JPY (Japanese yen)",img:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png"},{name:"BRL (Brazilian real)",img:"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png"},{name:"CHF (Swiss franc)",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/170px-Flag_of_Switzerland.svg.png"}],countries:["Australia","Austria","Belgium","Canada","Chile","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Israel","Italy","Japan","South Korea","Latvia","Luxembourg","Mexico","Netherlands","New Zealand","Norway","Poland","Portugal","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","United Kingdom","United States"]}},computed:{sortedArray:function(){return this.currencies.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})}},methods:{toggle:function(t){var e=document.querySelectorAll(".lang"),n=t.target.dataset.lang;e.forEach(function(t){var e=document.getElementById(n);t.id===n?(console.log(t.id===n),e.classList.add("show"),e.classList.remove("hide")):(t.classList.add("hide"),t.classList.remove("show"))})}}},o=(n(378),n(1)),a=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"✈️-grants"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#✈️-grants","aria-hidden":"true"}},[t._v("#")]),t._v(" ✈️ Grants")]),t._v(" "),n("p",[t._v("The History of Science Society offers several grants to defer the cost of membership or attending the meeting, which are administed by the Executive Office. These grants are vital to encouraging ... This year, the HSS was able to offer grants to 100% of applicants. Grant information and statistics provided below.")]),t._v(" "),n("h2",{attrs:{id:"nsf-travel-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nsf-travel-grant","aria-hidden":"true"}},[t._v("#")]),t._v(" NSF Travel Grant")]),t._v(" "),n("p",[t._v("The National Science Foundation grant "),n("a",{attrs:{href:"https://www.nsf.gov/awardsearch/showAward?AWD_ID=1656205&HistoricalAwards=false",target:"_blank",rel:"noopener noreferrer"}},[t._v("(#1656205)"),n("OutboundLink")],1),t._v(" is intended to help defray travel and registration costs to attend academic meetings. Expenses covered by the grant include transportation to and from the meeting and registration fees. Eligible grantees include graduate students, recent PhDs (received in the last five years), and independent scholars who are participating in the meeting (e.g., presenting a paper, Society governance, etc.) and who are US citizens or enrolled at US institutions.")]),t._v(" "),n("nsfEmployment",{staticClass:"graph"}),t._v(" "),n("h3",{attrs:{id:"_9-societies-travel-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-societies-travel-grant","aria-hidden":"true"}},[t._v("#")]),t._v(" 9-Societies Travel Grant")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("In 2018, HSS distributed over "),n("strong",[t._v("$80,000")]),t._v(" in NSF travel grant funds to attendees of &HPS, AAHM, ASEH, HOPOS, HSS, PSA, SHOT, and SLSA")])]),t._v(" "),n("p",[t._v("In addition to administering NSF travel grants for the HSS meeting, the Executive Office also oversee the grant for eight other academic societies as well as for the International Union of History and Philosophy of Technology. The entire list of organizations included in this grant is listed below.")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"http://www.histmed.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("American Association for the History of Medicine (AAHM)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://aseh.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("American Society for Environmental History (ASEH)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://hssonline.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("History of Science Society (HSS)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://integratedhps.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Integrated History and Philosophy of Science (&HPS)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://hopos.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("International Society for the History of Philosophy of Science (HOPOS)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.ishpssb.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("International Society for the History, Philosophy, and Social Studies of Biology (ISHPSSB)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://dlmps.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("International Union of History and Philosophy of Technology (IUHPST/DLMPST)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.philsci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Philosophy of Science Association (PSA)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.litsciarts.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Society for Literature, Science, and the Arts (SLSA)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.historyoftechnology.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Society for the History of Technology (SHOT)"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"hss-international-travel-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hss-international-travel-grant","aria-hidden":"true"}},[t._v("#")]),t._v(" HSS International Travel Grant")]),t._v(" "),n("p",[t._v("For attendees who are not eligible for the NSF grant—namely, non-US citizens enrolled at non-US institutions—the HSS offers international travel grants that have the same purpose as the NSF travel grant, that is, to defer the cost of attending the annual meeting. These grants are also available to graduate students, recent PhDs (received in the last five years), and independent scholars who are participating in the meeting (e.g., presenting a paper, Society governance, etc.). This grant is supported by donations from members and attendees. Thank you to these donors!")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Applicants")]),t._v(" "),n("th",[t._v("Grantees")]),t._v(" "),n("th",[t._v("Amount Requested")]),t._v(" "),n("th",[t._v("Amount Granted")]),t._v(" "),n("th",[t._v("Amount Distributed")]),t._v(" "),n("th",[t._v("Average Award")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("60")]),t._v(" "),n("td",[t._v("52")]),t._v(" "),n("td",[t._v("$34,692.28")]),t._v(" "),n("td",[t._v("$15,246.52")]),t._v(" "),n("td",[t._v("$12,262.46")]),t._v(" "),n("td",[t._v("$235.82")])])])]),t._v(" "),n("hssTravelGrantEmployment",{staticClass:"graph"}),t._v(" "),n("h3",{attrs:{id:"currencies-distributed-in-2019"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#currencies-distributed-in-2019","aria-hidden":"true"}},[t._v("#")]),t._v(" Currencies Distributed in 2019")]),t._v(" "),n("div",{staticClass:"currency-container"},[t._l(t.sortedArray,function(e){return[n("div",{staticClass:"currency"},[n("img",{staticClass:"currency-img",attrs:{src:e.img,alt:"","aria-hidden":"true",loading:"lazy"}}),t._v(" "),n("p",{staticClass:"currency-name"},[t._v(t._s(e.name))])])]})],2),t._v(" "),n("h2",{attrs:{id:"dependent-care-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependent-care-grant","aria-hidden":"true"}},[t._v("#")]),t._v(" Dependent Care Grant")]),t._v(" "),n("p",[t._v("The HSS dependent care grant offers support up to $200 to assist delegates who require additional dependent care during the meeting. Dependent care may include childcare, either on site or at home, or any assistance required to attend the meeting. This grant is supported by donations from members and attendees. Thank you to these donors!")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Applications")]),t._v(" "),n("th",[t._v("Grantees")]),t._v(" "),n("th",[t._v("Total Amount Awarded")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("8")]),t._v(" "),n("td",[t._v("5")]),t._v(" "),n("td",[t._v("$812")])])])]),t._v(" "),n("p",[n("em",[t._v("Applicants who did not receive a grant either did not accept it or did not meet eligibility criteria.")])]),t._v(" "),n("h2",{attrs:{id:"sponsor-a-scholar-program"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sponsor-a-scholar-program","aria-hidden":"true"}},[t._v("#")]),t._v(" Sponsor-a-Scholar Program")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[n("strong",[t._v("Currently, the HSS is sponsoring 11 scholars")])])]),t._v(" "),n("h3",{attrs:{id:"what-is-the-sponsor-a-scholar-program"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-sponsor-a-scholar-program","aria-hidden":"true"}},[t._v("#")]),t._v(" What Is the Sponsor-a-Scholar Program?")]),t._v(" "),n("div",{staticClass:"button-group"},[n("p",[t._v("Language 👉")]),t._v(" "),n("button",{attrs:{"data-lang":"eng"},on:{click:t.toggle}},[t._v("English")]),t._v(" "),n("button",{attrs:{"data-lang":"ara"},on:{click:t.toggle}},[t._v("Arabic")]),t._v(" "),n("button",{attrs:{"data-lang":"chi"},on:{click:t.toggle}},[t._v("Chinese")]),t._v(" "),n("button",{attrs:{"data-lang":"por"},on:{click:t.toggle}},[t._v("Portuguese")])]),t._v(" "),n("div",{staticClass:"lang show",attrs:{id:"eng"}},[n("p",[t._v("The "),n("a",{attrs:{href:"https://hssonline.org/membership/sponsor-a-scholar-program/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sponsor-a-Scholar Program"),n("OutboundLink")],1),t._v(" aims to help scholars who live in countries that are not party to the Convention on the Organization for the Economic Co-operation and Development (OECD) become active members of the HSS.")]),t._v(" "),n("p",[t._v("Selected by a subcommittee of the HSS Committee on Membership, sponsored scholars receive a free electronic membership in HSS (renewable up to three years), which includes subscriptions to Isis, Osiris, and the HSTM Database, along with other benefits. In return, sponsored members are expected to help further the HSS's international outreach efforts.")]),t._v(" "),n("p",[t._v("The HSS is continuing to welcome scholars into this program. Interested applicants should send a 2-page application letter stating experience in the history of science and their proposal to publicize HSS in their region as well as a 2-page CV to "),n("a",{attrs:{href:"mailto:zuoyuewang@gmail.com?subject=Sponsor-a-Scholar"}},[t._v("Zuoyue Wang")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"lang hide",attrs:{id:"ara"}},[n("p",[t._v("جمعية تاريخ العلوم تعلن فتح باب التقدم لبرنامج “دعم الباحثين.” https://hssonline.org/membership/sponsor-a-scholar-program/ يهدف البرنامج لدعم عضوية الباحثين من خارج دول منظمة التعاون الاقتصادي والتنمية في الجمعية. تقوم لجنة فرعية مشكلة من أعضاء لجنة العضوية بالاختيار من ضمن المتقدمين ، ويحصل الباحثون المدعومون على عضوية مجانية (قابلة للتجديد لمدة ثلاث سنوات) تتضمن اشتراكا في المجلات العلمية للجمعية —Isis  و  Osiris— وقاعدة بيانات تاريخ العلوم والتكنولوجيا والطب، بالإضافة لمميزات أخرى. في المقابل، يقوم الباحثون المدعومون بدعم الجهود الدولية للجمعية. على الراغبين في التقدم إرسال ما يلي:")]),t._v(" "),n("p",[t._v("خطاب تقديم من صفحتين يتضمن عرضا لخبرات المتقدم واهتماماته في حقل تاريخ العلوم ورؤيته لكيفية الترويج للجمعية في منطقتهم الجغرافية، بالإضافة لسيرة ذاتية من صفحتين. برجاء ارسال ما سبق على البريد الالكتروني التالي:")]),t._v(" "),n("p",[t._v("Zuoyue Wang > zywang@cpp.edu")])]),t._v(" "),n("div",{staticClass:"lang hide",attrs:{id:"por"}},[n("p",[t._v("A History of Science Society (HSS) está anunciando um chamado para inscrições para seu programa Sponsor-a-Scholar. Este programa visa ajudar os acadêmicos que vivem em países que não fazem parte da Organização para a Cooperação e Desenvolvimento Econômico (OCDE) a se tornarem membros ativos da HSS.")]),t._v(" "),n("p",[t._v("Selecionados pelo subcomitê de filiação da HSS, os acadêmicos patrocinados receberão uma filiação eletrônica gratuita da HSS (renovável em até três anos), que inclui assinaturas para Isis, Osiris e o Banco de Dados HSTM, juntamente com outros benefícios. Em troca, espera-se que os membros patrocinados cooperem ainda mais com os esforços de divulgação internacional da HSS.")]),t._v(" "),n("p",[t._v("Os candidatos interessados devem enviar:")]),t._v(" "),n("p",[t._v("– Carta de candidatura de 2 páginas declarando suas experiências, interesses em história da ciência e  proposta de divulgação da HSS em sua região.")]),t._v(" "),n("p",[t._v("– CV de 2 páginas.")]),t._v(" "),n("p",[t._v("Favor enviar os documentos acima para:")]),t._v(" "),n("p",[t._v("Zuoyue Wang ou zuoyuewang em gmail.com.")])]),t._v(" "),n("div",{staticClass:"lang hide",attrs:{id:"chi"}},[n("p",[t._v("美国科学史学会的“赞助学者”计划（https://hssonline.org/membership/sponsor-a-scholar-program/）： （美国）科学史学会(History of Science Society HSS)邀请大家申请它的“赞助学者”计划。这个计划的目的是让那些生活在非欧洲经合组织(OECD)国家的学者成为HSS的活跃成员（亚洲国家里只有日本和南韩是OECD成员）。HSS 会员委员会的一个分委员会将负责挑选工作。被选中的“赞助学者”将获得HSS免费会员资格（可延续至三年），包括电子订阅 Isis、Osiris，科学技术医学史数据库以及其它福利。而反过来HSS希望“赞助学者”能够协助它的国际化努力。有兴趣的申请者请递交两个文件：一个两页申请信，说明你在科学史方面的经历和兴趣，以及你将如何在你的地区传播HSS的信息，和一个两页简历。请用电子邮件将上述资料寄达王作跃（zywang@cpp.edu). 直接加入HSS的网址是http://press.uchicago.edu/ucp/journals/subscribe/isis.html。")])]),t._v(" "),n("div",{staticClass:"lang hide",attrs:{id:"rus"}},[n("p",[t._v("Программа Общества по Истории Науки по поддержке членства в Обществе (The History of Science Society’s Sponsored A Scholar (SAS) Program)")]),t._v(" "),n("p",[t._v("Общество по истории науки (The History of Science Society, HSS) объявляет конкурс заявок на участие в программе Sponsor-a-Scholar (https://hssonline.org/membership/sponsor-a-scholar-program/). Эта программа имеет целью покрытие расходов на членство в Обществе по истории науки (HSS) для ученых проживающих в странах, которые не являются членами OECD, и не имеющих финансовой возможности присоединиться к обществу и стать его активными членами. Поданные заявки на участие в программе будут рассмотрены комиссией по членству в Обществе. Победители получат бесплатное членство в Обществе сроком до трех лет, что включает в себя  подписку на журналы Isis, Osiris, доступ в базам данных, а также другие привилегии. В свою очередь, от финалистов ожидается активное участие в деятельности Общества по истории науки и в продвижении его международных мероприятий в регионе проживания финалиста.")]),t._v(" "),n("p",[t._v("Для участия в конкурсе необходимо прислать следующие материалы: письмо-заявка с объяснением опыта работы в истории науки, исследовательских интересов, и Ваших предложений по распространению информации об Обществе по истории науки в Вашем регионе (не более 2 страниц); резюме (не более 2 страниц). Заявки могут быть посланы в электронном виде по ссылке: Zuoyue Wang (или на электронную почту zywang@cpp.edu). Информация о членстве в Обществе доступна по ссылке: http://press.uchicago.edu/ucp/journals/subscribe/isis.html.")])]),t._v(" "),n("h4",{attrs:{id:"oecd-countries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oecd-countries","aria-hidden":"true"}},[t._v("#")]),t._v(" OECD Countries")]),t._v(" "),n("p",[t._v("Eligible scholars include anyone "),n("strong",[t._v("not")]),t._v(" based in one of the following countries")]),t._v(" "),n("div",{staticClass:"countries"},t._l(t.countries,function(e){return n("p",[t._v(t._s(e))])}),0)],1)},[],!1,null,"0ecf0800",null);e.default=a.exports}}]);