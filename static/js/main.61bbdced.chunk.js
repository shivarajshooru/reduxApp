(this["webpackJsonpredux-app"]=this["webpackJsonpredux-app"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),u=n.n(a),s=(n(48),n(7)),i=(n(49),n(101)),l=n(15),o=n(8),h=n(16),d=n.n(h),p=n(23),b=n(11),j=n(24),f=n.n(j),m=Object(b.b)("album/craeteAlbum",function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,c,a,u,s,i,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){return(l=Object(p.a)(d.a.mark((function e(){var t,n,i,l,o,h,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://jsonplaceholder.typicode.com/albums").then((function(e){return e.data}));case 2:return r=e.sent,e.next=5,f.a.get("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.data}));case 5:for(c=e.sent,r.forEach((function(e,t){t<5&&a.push(e)})),t=0,n=0;n<c.length;n++)c[n].albumId<6&&(i=Math.floor(201*Math.random())+50,c[n].number=i,u.push(c[n]),(t+=1)>=10&&(n+=40,t=0));for(l=0;l<a.length;l++)for(o=[],h=0,p=0;p<u.length;p++)o.push(u[p]),(h+=1)>=10&&(s.push([a[l],o]),h=0,o=[],l+=1);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(){return l.apply(this,arguments)},a=[],u=[],s=[],e.abrupt("return",i());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(b.c)({name:"album",initialState:{entities:[]},reducers:{},extraReducers:function(e){e.addCase(m.fulfilled,(function(e,t){var n;(n=e.entities).push.apply(n,Object(o.a)(t.payload))}))}}),g=(O.actions.storeByPayload,O.reducer),x=n(2);var v=function(){var e=Object(l.b)(),t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],u=Object(l.c)((function(e){return e.album.entities}));return Object(r.useEffect)((function(){e(m()).then(b.d).then((function(e){return a(e)}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(i.a,{placeholder:"enter some data shivaraj",fullWidth:!0,onChange:function(e){var t=[],n=e.target.value;console.log(n.length,"value"),u.forEach((function(e,r){var c=e[1].filter((function(e){return e.title.includes(n)}));c.length&&(console.log(c),t.push([e[0],c]))})),n.length?a(t):a(u)}}),c.length?c.map((function(e,t){return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("h2",{children:e[0].title}),e[1].map((function(e,t){var n=e.number>75?"green":"red";return Object(x.jsxs)("div",{className:"elem",children:[" ",Object(x.jsx)("img",{className:"thum",src:e.thumbnailUrl},t),Object(x.jsxs)("div",{className:"mid",children:[Object(x.jsx)("h4",{children:e.title}),Object(x.jsx)("a",{href:e.url,target:"_blank",children:e.url})]}),Object(x.jsxs)("div",{className:"ptime",children:[Object(x.jsxs)("p",{style:{color:n},children:["$    ",e.number]}),Object(x.jsx)("p",{children:"10:00 AM"})]})]},t)}))]},t)})):null]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))},w=Object(b.a)({reducer:{album:g}});u.a.render(Object(x.jsxs)(c.a.StrictMode,{children:[Object(x.jsx)(l.a,{store:w,children:Object(x.jsx)(v,{})}),","]}),document.getElementById("root")),y()}},[[75,1,2]]]);
//# sourceMappingURL=main.61bbdced.chunk.js.map