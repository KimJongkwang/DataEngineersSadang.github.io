(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[159],{8678:function(e,t,n){"use strict";var a=n(7294),r=n(1883);t.Z=e=>{let{location:t,title:n,children:u}=e;const l="/"===t.pathname;let o;return o=l?a.createElement("h1",{className:"main-heading"},a.createElement(r.rU,{to:"/"},n)):a.createElement(r.rU,{className:"header-link-home",to:"/"},n),a.createElement("div",{className:"global-wrapper","data-is-root-path":l},a.createElement("header",{className:"global-header"},o),a.createElement("main",null,u),a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){"use strict";var a=n(7294),r=n(1883);t.Z=e=>{var t,n,u;let{description:l,title:o,children:c}=e;const{site:i}=(0,r.K2)("2841359383"),f=l||i.siteMetadata.description,d=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,d?o+" | "+d:o),a.createElement("meta",{name:"description",content:f}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:f}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n||null===(u=n.social)||void 0===u?void 0:u.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:f}),c)}},1325:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(8678),u=n(1883),l=n(9357),o=n(5683);t.default=e=>{let{data:{allMarkdownRemark:{group:t},site:{siteMetadata:{title:n}}},location:c}=e;return a.createElement(r.Z,{location:c,title:n},a.createElement(l.Z,{title:"all tags",keywords:["blog","gatsby","javascript","react"]}),a.createElement("div",null,a.createElement("h1",null,"Tags"),a.createElement("ul",null,t.map((e=>a.createElement("li",{key:e.fieldValue},a.createElement(u.rU,{to:"/tags/"+o(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")")))))))}},5683:function(e,t,n){var a="[object Symbol]",r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="['’]",d="["+i+"]",s="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",m="\\d+",x="[\\u2700-\\u27bf]",g="["+o+"]",p="[^\\ud800-\\udfff"+i+m+l+o+c+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+c+"]",y="(?:"+g+"|"+p+")",v="(?:"+h+"|"+p+")",j="(?:['’](?:d|ll|m|re|s|t|ve))?",w="(?:['’](?:D|LL|M|RE|S|T|VE))?",A="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",O="[\\ufe0e\\ufe0f]?",U=O+A+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",E,b].join("|")+")"+O+A+")*"),Z="(?:"+[x,E,b].join("|")+")"+U,k=RegExp(f,"g"),I=RegExp(s,"g"),z=RegExp([h+"?"+g+"+"+j+"(?="+[d,h,"$"].join("|")+")",v+"+"+w+"(?="+[d,h+y,"$"].join("|")+")",h+"?"+y+"+"+j,h+"+"+w,m,Z].join("|"),"g"),C=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,N="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,S="object"==typeof self&&self&&self.Object===Object&&self,L=N||S||Function("return this")();var R,M=(R={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==R?void 0:R[e]});var T=Object.prototype.toString,D=L.Symbol,G=D?D.prototype:void 0,V=G?G.toString:void 0;function Y(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==a}(e))return V?V.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function _(e){return null==e?"":Y(e)}var F,H=(F=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,u=e?e.length:0;for(a&&u&&(n=e[++r]);++r<u;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=_(e),void 0===(t=n?void 0:t)?function(e){return C.test(e)}(e)?function(e){return e.match(z)||[]}(e):function(e){return e.match(r)||[]}(e):e.match(t)||[]}(function(e){return(e=_(e))&&e.replace(u,M).replace(I,"")}(e).replace(k,"")),F,"")});e.exports=H}}]);
//# sourceMappingURL=component---src-pages-tags-js-90d9d87a7d73f766f0d9.js.map