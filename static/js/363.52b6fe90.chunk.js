"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[363],{363:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,c=e(885),i=e(791),o=e(731),u=e(689),a=e(168),d=e(444).ZP.div(r||(r=(0,a.Z)(["\npadding: 20px 40px;\n\n"]))),s="07365d3730901c9189566ffe38d9d5bb",f=e(184),l=function(){var t=(0,i.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,u.TH)();return(0,i.useEffect)((function(){(function(){var t="".concat("https://api.themoviedb.org/3/","trending/movie/day?api_key=").concat(s);return fetch(t).then((function(t){return t.json()}))})().then((function(t){r(t.results.map((function(t){return{id:t.id,title:t.title}})))})).catch((function(t){return console.log(t)}))}),[]),(0,f.jsxs)(d,{children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:a},children:e})},n)}))})]})}}}]);
//# sourceMappingURL=363.52b6fe90.chunk.js.map