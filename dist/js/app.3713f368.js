(function(t){function e(e){for(var r,c,i=e[0],o=e[1],l=e[2],d=0,h=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(r=!1)}r&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},s={app:0},n=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=(a("d3b7"),a("bc3a")),n=a.n(s),c={},i=n.a.create(c);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["a"].use(Plugin);Plugin;var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"container "},[a("router-view")],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"text-center text-gray-800 text-white p-4 mb-10 "},[a("div",{staticClass:"flex flex-row justify-center align-center m-auto   font-extrabold mb-3"},[a("img",{staticClass:"w-20",attrs:{src:t.logo}}),a("h1",{staticClass:"mt-auto mb-auto ml-10 md:text-5xl text-2xl"},[t._v(" Covid-19 Tracker ")])])])},d=[],h={name:"Header",data:function(){return{logo:a("65fb")}}},m=h,f=a("2877"),b=Object(f["a"])(m,u,d,!1,null,null,null),p=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:" text-center mt-6  p-5 bg-gray-700"},[a("p",{staticClass:"font-bold font-mono text-gray-400"},[t._v(" Made with ❤️ by Ali © "+t._s(t.getYear)+" ")])])},v=[],y={name:"Footer",computed:{getYear:function(){var t=new Date;return t.getFullYear()}}},C=y,j=Object(f["a"])(C,g,v,!1,null,null,null),x=j.exports,D={components:{Header:p,Footer:x}},w=D,_=Object(f["a"])(w,o,l,!1,null,null,null),k=_.exports,O=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loading?a("main",{staticClass:"flex flex-col align-center justify-center text-center"},[a("div",{staticClass:"text-gray-500 text-3xl mt-10 mb-6"},[t._v(" Fetching Data... ")]),a("img",{staticClass:" w-50 m-auto",attrs:{src:t.loadingImage,alt:"loadingImage"}})]):a("main",{staticClass:"m-auto mb-10  md:w-9/12 sm:w-full"},[a("div",{staticClass:"container  w-full bg-white pt-4 mb-10 pb-5 shadow-md rounded-lg "},[a("DataTitle",{attrs:{text:t.currentCountry,dataDate:t.dateData,countries:t.countriesNames,currentCountry:t.currentCountry}}),a("div",{staticClass:"flex flex-row "},[a("CountrySelect",{attrs:{countries:t.countriesNames},on:{"get-country":t.setCurrentCountry}}),"Glal"==t.currentCountry?a("button",{staticClass:" text-sm rounded-full m-auto ml-3 bg-green-700 text-white rounded p-4  focus:outline-none hover:bg-green-600"},[t._v(" Clear ")]):t._e()],1)],1),t._m(0),a("DataBoxes",{attrs:{stats:t.stats}}),a("div",{staticClass:"grid  md:grid-cols-2 sm:grid-cols-1 gap-4"},[a("ChartBoxes",{attrs:{chartData:t.chartData,currentCountry:t.currentCountry,chartType:"Cases"}}),a("ChartBoxes",{attrs:{chartData:t.chartData,currentCountry:t.currentCountry,chartType:"Deaths"}})],1),t._m(1),a("VaccineDataBox",{attrs:{stats:t.stats}}),a("div",{staticClass:"grid md:grid-cols-2 gap-4"},[a("VaccineChartBox",{attrs:{chartData:t.chartData,currentCountry:t.currentCountry,chartType:"Doses"}}),a("VaccineChartBox",{attrs:{chartData:t.chartData,currentCountry:t.currentCountry,chartType:"DailyPerMillion"}})],1)],1)])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center m-6 text-gray-800 "},[a("h1",{staticClass:"text-2xl font-bold"},[a("i",{staticClass:"fas fa-hospital text-purple-500"}),t._v(" Cases/Deaths Data ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center m-6 text-gray-800 "},[a("h1",{staticClass:"text-2xl font-bold"},[a("i",{staticClass:"fas fa-plus-square text-blue-500"}),t._v(" Vaccination Data ")])])}],M=a("1da1"),E=(a("07ac"),a("b64b"),a("159b"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h2",{staticClass:"text-2xl font-bold  flex justify-center align-center"},[a("p",{staticClass:"mr-2 text-gray-800"},[t._v(t._s(t.text))]),a("div",{staticClass:"mt-auto mb-auto"},[a("img",{staticClass:"w-7 rounded-sm shadow-md",attrs:{src:t.currentFlag}})])]),a("div",{staticClass:"text-1xl mt-4 mb-10"},[a("p",{staticClass:"text-gray-700"},[t._v(t._s(t.timestamp))])])])}),R=[],V=(a("7db0"),a("b0c0"),a("1315")),N={name:"DataTitle",props:["text","dataDate","countries","currentCountry"],data:function(){return{currentFlagLink:""}},computed:{currentFlag:function(){var t=this,e=this.countries.find((function(e){return e.name===t.currentCountry}));return e.flag},timestamp:function(){var t=V["DateTime"].fromMillis(parseInt(this.dataDate)),e=t.toISO(),a=V["DateTime"].fromISO(e).toFormat("dd MMM yyyy,h:mm:ss a");return a}}},z=N,B=Object(f["a"])(z,E,R,!1,null,null,null),I=B.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid md:grid-cols-2 gap-4"},[a("div",{staticClass:"w-full m-auto shadow-md bg-white p-10 text-center rounded-lg"},[t._m(0),a("div",{staticClass:"text-2xl mb-4 text-blue-800 "},[a("span",{staticClass:"font-bold"},[t._v("New: +"+t._s(t.numberWithCommas(t.stats.newCases)))])]),a("div",{staticClass:"text-1xl mb-4"},[a("span",{staticClass:"font-bold text-gray-700"},[t._v("Total: "+t._s(t.numberWithCommas(t.stats.totalCases))+" ")])])]),a("div",{staticClass:"w-full m-auto shadow-md bg-white p-10 text-center rounded-lg"},[t._m(1),a("div",{staticClass:"text-2xl text-red-600 mb-4"},[a("span",{staticClass:"font-bold"},[t._v("New: +"+t._s(t.numberWithCommas(t.stats.newDeaths)))])]),a("div",{staticClass:"text-1xl mb-4"},[a("span",{staticClass:"font-bold text-gray-700"},[t._v("Total: "+t._s(t.numberWithCommas(t.stats.totalDeaths)))])])])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-2xl text-gray-600  mb-4"},[a("i",{staticClass:"fas fa-hospital-user text-blue-800"}),t._v(" Cases ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-2xl text-gray-600  mb-4"},[a("i",{staticClass:"fas fa-skull-crossbones text-red-600"}),t._v(" Deaths ")])}],S=(a("ac1f"),a("5319"),a("25f0"),{name:"DataBoxes",props:["stats"],methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}),A=S,G=Object(f["a"])(A,$,H,!1,null,null,null),W=G.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"text-sm form-select w-3/4 m-auto block  border p-3 rounded shadow-md text-gray-700",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]},t.onChange]}},[a("option",{attrs:{disabled:"",value:"0"}},[t._v("Please select Country")]),t._l(t.countries,(function(e){return a("option",{domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)},L=[],q={name:"CountrySelect",props:["countries"],data:function(){return{selected:0}},methods:{onChange:function(){var t=this,e=this.countries.find((function(e){return e.id===t.selected}));this.$emit("get-country",e.name)}}},Y=q,J=Object(f["a"])(Y,F,L,!1,null,null,null),U=J.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white shadow-md rounded-lg w-full m-auto mt-10  p-3",attrs:{id:t.chartType+"chart-container"}},[a("canvas",{attrs:{id:t.chartType}})])},Q=[],X=(a("99af"),a("30ef")),Z=a.n(X),tt={name:"ChartBoxes",props:["chartData","currentCountry","chartType"],watch:{chartData:function(){this.chartIt()}},methods:{chartIt:function(){var t=this.chartData.casesNum,e=this.chartData.casesDates,a=this.chartData.deathsNum,r=document.getElementById(this.chartType+"chart-container"),s=document.getElementById(this.chartType);s.remove();var n=document.createElement("canvas");n.setAttribute("id",this.chartType),r.appendChild(n);var c=document.getElementById(this.chartType),i={type:"line",data:{labels:e,datasets:[{label:this.chartType,fill:!1,data:"Cases"==this.chartType?t:a,backgroundColor:"Cases"==this.chartType?"#1e40af":"#dc2626",borderColor:"Cases"==this.chartType?"#1e40af":"#dc2626",borderWidth:5}]},options:{responsive:!0,lineTension:1,maintainAspectRatio:!1,aspectRatio:1,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom"},title:{display:!0,text:"Total ".concat("Cases"==this.chartType?"Cases":"Deaths"," in ").concat(this.currentCountry)},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{maxTicksLimit:5,padding:15}}],xAxes:[{gridLines:{display:!1}}]}}};new Z.a(c,i)}},mounted:function(){this.chartIt()}},et=tt,at=Object(f["a"])(et,K,Q,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid md:grid-cols-2 gap-4 mt-8"},[a("div",{staticClass:"w-full m-auto shadow-md bg-white p-10 text-center rounded-lg"},[t._m(0),a("div",{staticClass:"text-2xl mb-4 text-blue-500 "},[a("span",{staticClass:"font-bold"},[t._v("New: +"+t._s(t.numberWithCommas(t.stats.lastDayVaccine)))])]),a("div",{staticClass:"text-1xl mb-4"},[a("span",{staticClass:"font-bold text-gray-700"},[t._v("Total: "+t._s(t.numberWithCommas(t.stats.totalVaccine))+" ")])])]),a("div",{staticClass:"w-full m-auto shadow-md bg-white p-10 text-center rounded-lg"},[t._m(1),a("div",{staticClass:"text-2xl mb-4 text-blue-500 "},[a("span",{staticClass:"font-bold"},[t._v("Daily Per Million: "+t._s(t.numberWithCommas(t.stats.dailyPerMillion)))])]),a("div",{staticClass:"text-1xl mb-4"},[a("span",{staticClass:"font-bold text-gray-700"},[t._v("Total Per Hundred: "+t._s(t.numberWithCommas(t.stats.totalPerHundred))+" ")])])])])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-2xl text-gray-600  mb-4"},[a("i",{staticClass:"fas fa-syringe text-blue-500"}),t._v(" Doses Administered ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-2xl text-gray-600  mb-4"},[a("i",{staticClass:"far fa-chart-bar text-blue-500"}),t._v(" Other Statistics ")])}],ct={name:"VaccineDataBox",props:["stats"],methods:{numberWithCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},it=ct,ot=Object(f["a"])(it,st,nt,!1,null,null,null),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white shadow-md rounded-lg w-full m-auto mt-10 sm:h-56  md:h-h-72 lg:h-96 p-3",attrs:{id:t.chartType+"chart-container"}},[a("canvas",{attrs:{id:t.chartType}})])},dt=[],ht={name:"VaccineChartBox",props:["chartData","currentCountry","chartType"],watch:{chartData:function(){fil,this.chartIt()}},created:function(){this.chartData.dailyPerMillion.pop(),this.chartData.dailyPerMillion.pop(),this.chartData.dailyPerMillion.pop()},methods:{chartIt:function(){var t=this.chartData.vaccineNum,e=this.chartData.vaccineDates,a=this.chartData.dailyPerMillion,r=document.getElementById(this.chartType+"chart-container"),s=document.getElementById(this.chartType);s.remove();var n=document.createElement("canvas");n.setAttribute("id",this.chartType),r.appendChild(n);var c=document.getElementById(this.chartType),i={type:"line",data:{labels:e,datasets:[{label:this.chartType,fill:!1,data:"Doses"==this.chartType?t:a,backgroundColor:"#3B82F6",borderColor:"#3B82F6",borderWidth:5}]},options:{responsive:!0,lineTension:1,maintainAspectRatio:!1,aspectRatio:1,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom"},title:{display:!0,text:" ".concat("Doses"==this.chartType?"Total Doses Administered":"Daily Doses Per Million"," in ").concat(this.currentCountry)},elements:{point:{radius:0}},scales:{yAxes:[{ticks:{maxTicksLimit:5,padding:15}}],xAxes:[{gridLines:{display:!1}}]}}};new Z.a(c,i)}},mounted:function(){this.chartIt()}},mt=ht,ft=Object(f["a"])(mt,ut,dt,!1,null,null,null),bt=ft.exports,pt={name:"Home",components:{DataTitle:I,DataBoxes:W,CountrySelect:U,ChartBoxes:rt,VaccineDataBox:lt,VaccineChartBox:bt},data:function(){return{loading:!0,currentCountry:"Global",dateData:"",countriesNames:[{id:1,name:"Global",flag:"https://image.emojisky.com/740/42740-middle.png"}],stats:{},chartData:{},globalCardData:{newCases:"",totalCases:"",newDeaths:"",totalDeaths:"",newVaccine:"",totalVaccine:"",lastDayVaccine:"",dailyPerMillion:"",totalPerHundred:""},globalChartData:{casesNum:[],deathsNum:[],casesDates:[],deathsDates:[],vaccineNum:[],vaccineDates:[],dailyPerMillion:[]},countryCardData:{newCases:"",totalCases:"",newDeaths:"",totalDeaths:"",newVaccine:"",totalVaccine:"",lastDayVaccine:"",totalPerHundred:"",dailyPerMillion:""},countryChartData:{casesNum:[],deathsNum:[],casesDates:[],deathsDates:[],vaccineNum:[],vaccineDates:[],dailyPerMillion:[]},loadingImage:a("83ab5")}},methods:{getGlobalCardData:function(){return Object(M["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://www.disease.sh/v3/covid-19/all");case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getHistoricalGlobalData:function(){return Object(M["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getVaccineGlobalData:function(){return Object(M["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true");case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getCountriesData:function(){return Object(M["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://www.disease.sh/v3/covid-19/countries");case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getGlobalData:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGlobalCardData();case 2:return a=e.sent,e.next=5,t.getHistoricalGlobalData();case 5:return r=e.sent,e.next=8,t.getCountriesData();case 8:return s=e.sent,e.next=11,t.getVaccineGlobalData();case 11:n=e.sent,t.globalCardData.newCases=a.todayCases,t.globalCardData.totalCases=a.cases,t.globalCardData.newDeaths=a.todayDeaths,t.globalCardData.totalDeaths=a.deaths,t.globalCardData.totalVaccine=n[n.length-1].total,t.globalCardData.newVaccine=n[n.length-1].daily,t.globalCardData.lastDayVaccine=n[n.length-2].daily,t.globalCardData.dailyPerMillion=n[n.length-2].dailyPerMillion,t.globalCardData.totalPerHundred=n[n.length-2].totalPerHundred,t.globalChartData.casesNum=Object.values(r.cases),t.globalChartData.deathsNum=Object.values(r.deaths),t.globalChartData.casesDates=Object.keys(r.cases),t.globalChartData.deathsDates=Object.keys(r.deaths),n.forEach((function(e){t.globalChartData.vaccineNum.push(e.total),t.globalChartData.vaccineDates.push(e.date),t.globalChartData.dailyPerMillion.push(e.dailyPerMillion)})),t.dateData=a.updated,s.forEach((function(e){var a={name:e.country,id:e.countryInfo._id,flag:e.countryInfo.flag};t.countriesNames.push(a)})),t.stats=t.globalCardData,t.chartData=t.globalChartData;case 30:case"end":return e.stop()}}),e)})))()},getCountryCardData:function(t){return Object(M["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("https://www.disease.sh/v3/covid-19/countries/".concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getCountryHistoricalData:function(t){return Object(M["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=all"));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getVaccineCountryData:function(t){return Object(M["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("https://disease.sh/v3/covid-19/vaccine/coverage/countries/".concat(t,"?lastdays=all&fullData=true\n"));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getCountryData:function(t){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function a(){var r,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getCountryCardData(t);case 2:return r=a.sent,a.next=5,e.getCountryHistoricalData(t);case 5:return s=a.sent,a.next=8,e.getVaccineCountryData(t);case 8:n=a.sent,e.countryCardData.newCases=r.todayCases,e.countryCardData.totalCases=r.cases,e.countryCardData.newDeaths=r.todayDeaths,e.countryCardData.totalDeaths=r.deaths,e.countryCardData.totalVaccine=n.timeline[n.timeline.length-1].total,e.countryCardData.newVaccine=n.timeline[n.timeline.length-1].daily,e.countryCardData.lastDayVaccine=n.timeline[n.timeline.length-3].daily,e.countryCardData.dailyPerMillion=n.timeline[n.timeline.length-3].dailyPerMillion,e.countryCardData.totalPerHundred=n.timeline[n.timeline.length-3].totalPerHundred,e.countryChartData.casesNum=Object.values(s.timeline.cases),e.countryChartData.deathsNum=Object.values(s.timeline.deaths),e.countryChartData.casesDates=Object.keys(s.timeline.cases),e.countryChartData.deathsDates=Object.keys(s.timeline.deaths),n.timeline.forEach((function(t){e.countryChartData.vaccineNum.push(t.total),e.countryChartData.vaccineDates.push(t.date),e.countryChartData.dailyPerMillion.push(t.dailyPerMillion)})),e.stats=e.countryCardData,e.chartData=e.countryChartData;case 25:case"end":return a.stop()}}),a)})))()},loadData:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,"Global"!=t.currentCountry){e.next=6;break}return e.next=4,t.getGlobalData();case 4:e.next=8;break;case 6:return e.next=8,t.getCountryData(t.currentCountry);case 8:t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},setCurrentCountry:function(t){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.currentCountry=t,e.loadData();case 2:case"end":return a.stop()}}),a)})))()}},mounted:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadData();case 1:case"end":return e.stop()}}),e)})))()}},gt=pt,vt=(a("cccb"),Object(f["a"])(gt,T,P,!1,null,null,null)),yt=vt.exports;r["a"].use(O["a"]);var Ct=[{path:"/",name:"Home",component:yt}],jt=new O["a"]({mode:"history",base:"/",routes:Ct}),xt=jt;a("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:xt,render:function(t){return t(k)}}).$mount("#app")},"5ced":function(t,e,a){},"65fb":function(t,e,a){t.exports=a.p+"img/covid-19.6958a9d9.png"},"83ab5":function(t,e,a){t.exports=a.p+"img/globe.c6781b85.svg"},ba8c:function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.3713f368.js.map