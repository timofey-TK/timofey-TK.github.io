(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{222:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("ca9da64e",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";var n=r(222);r.n(n).a},225:function(t,e,r){(e=r(33)(!1)).push([t.i,".placeholder[data-v-ea005b82]{width:150px;height:150px;background:#fff}.placeholder[data-v-ea005b82],img[data-v-ea005b82]{border-radius:0 20px 0 20px}ul[data-v-ea005b82]{margin-top:50px;display:flex;flex-wrap:wrap}li[data-v-ea005b82]{display:block;margin:5px}",""]),t.exports=e},238:function(t,e,r){"use strict";r.r(e);r(30);var n=r(3),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("https://jsonplaceholder.typicode.com/photos?albumId=1");case 3:return n=e.sent,e.abrupt("return",{photos:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{photos:null}}},c=(r(224),r(20)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"photos"},[e("h1",[this._v("Photos page")]),this._v(" "),e("ul",this._l(this.photos,(function(t){return e("li",{key:t.id},[e("div",{staticClass:"placeholder"},[e("nuxt-link",{attrs:{to:"/photos/"+t.id}},[e("img",{attrs:{src:t.thumbnailUrl,alt:""}})])],1)])})),0)])}),[],!1,null,"ea005b82",null);e.default=component.exports}}]);