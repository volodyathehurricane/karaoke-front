(this["webpackJsonpkaraoke-front"]=this["webpackJsonpkaraoke-front"]||[]).push([[0],{184:function(e,t,n){},185:function(e,t,n){},202:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),i=n.n(r),s=n(88),o=n(33),u=n(32),l=n(13),d=n(5),j=n(11),b=n.n(j),f=n(25),g=n(79),O=n(34),p=n.n(O),m=new function e(t){var n=this;Object(g.a)(this,e),this.instance=void 0,this.get=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.instance.get(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Promise.reject());case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),console.log("baseURL",t),this.instance=p.a.create({baseURL:t})}("https://karaoke-back.herokuapp.com/"),h=n(6),v=n(27),x=n(49),y=n(80),_=n.n(y),k=n(3),C=function(e){var t=e.imageSrc,n=e.title,c=e.focused,a=e.id,r=e.index,i=Object(d.f)();return Object(k.jsx)(h.Card,{focused:c,className:_.a.song_card,scaleOnFocus:!0,onClick:function(){i.push("/song/".concat(a))},children:Object(k.jsxs)(h.CardBody,{children:[Object(k.jsx)(h.CardMedia,{src:t,alt:n,ratio:"1/1"}),Object(k.jsx)(h.CardContent,{children:Object(k.jsxs)(h.CardHeadline2,{children:[r,".\xa0",n]})})]})})};C.defaultProps={};var S=C,w=n(8),N=(n(58),n(35));function R(e){var t=Object(w.a)({},e);return{actions:Object.keys(t).reduce((function(e,t){return Object(w.a)(Object(w.a)({},e),{},Object(N.a)({},t,(n=t,function(e){return{type:n,payload:e}})));var n}),{}),reducer:function(e,n){return t[n.type](e,n.payload)}}}var B=R({setSongs:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{songs:t})}}),P=B.actions,F=B.reducer,L=Object(c.memo)((function(e){var t=e.dispatch,n=e.appState.songs,a=P.setSongs;Object(c.useEffect)((function(){(function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/songs");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var n=e.data;t(a(n))}))}),[]);var r=Object(x.isSberBox)(),i=r?300:30,s=r?1500:150,o=Object(h.useRemoteHandlers)({initialIndex:0,axis:"x",delay:i,longDelay:s,min:0,max:1}),u=Object(l.a)(o,2),d=u[0],j=u[1];return Object(k.jsx)(h.Container,{children:Object(k.jsx)(h.CarouselGridWrapper,{children:Object(k.jsx)(h.Carousel,{as:v.Row,axis:"x",index:d,animatedScrollByIndex:!0,scrollSnapType:"mandatory",detectActive:!0,detectThreshold:.5,onIndexChange:function(e){j(e)},paddingStart:"50%",paddingEnd:"50%",style:{paddingTop:"5rem",paddingBottom:"1rem"},scrollAlign:"start",children:n.concat(n).map((function(e,t){return Object(k.jsx)(h.CarouselCol,{scrollSnapAlign:"start",size:4,children:Object(k.jsx)(S,{index:t+1,title:e.title,focused:t===d,imageSrc:e.image_link,id:e._id},"item:".concat(t))})}))})})})})),I=(n(184),n(85)),E=(n(185),n.p+"static/media/volume.c9c7706f.svg"),A={song:{audio_link:"",image_link:"",lyrics:"",title:"",_id:""},isLoading:!0,isPlaying:!1,volume:.5},T=R({setSong:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{song:t})},setPlayingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isPlaying:t})},setLoadingFlag:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{isLoading:t})},setVolume:function(e,t){return Object(w.a)(Object(w.a)({},e),{},{volume:t})}}),D=T.actions,H=T.reducer,J=function(e){var t=Object(d.g)().songId,n=Object(c.useRef)(null),a=Object(c.useRef)(null),r=Object(c.useRef)(),i=D.setSong,s=D.setPlayingFlag,o=D.setLoadingFlag,u=D.setVolume,j=Object(c.useReducer)(H,A),g=Object(l.a)(j,2),O=g[0],p=g[1],v=O.song,x=O.isPlaying,y=O.isLoading,_=O.volume;Object(c.useEffect)((function(){p(o(!0)),function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(n=t,m.get("/songs/".concat(n))));case 1:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(e){var t=e.data;p(i(t))})).finally((function(){p(o(!1))}))}),[]);var C=v.audio_link,S=v.image_link,w=v.lyrics;Object(c.useEffect)((function(){n.current&&a.current&&(r.current=new I.a(a.current,n.current),r.current.setLyrics(w.replaceAll("\\n","\n")))}),[v]);var N=x?function(){n.current&&(n.current.pause(),p(s(!1)))}:function(){n.current&&(n.current.play(),p(s(!0)))},R=x?"pause_button":"play_button",B={background:"url(".concat(S,") center / cover no-repeat")};return Object(k.jsxs)("div",{className:"song_page",children:[y?Object(k.jsx)("div",{className:"spinner_wrapper",children:Object(k.jsx)(h.Spinner,{})}):Object(k.jsxs)("div",{className:"controls",children:[Object(k.jsxs)("div",{className:"volume",children:[Object(k.jsx)(h.Stepper,{showRemove:!0,value:10*_,step:1,min:0,max:10,disabled:!1,onChange:function(e){if(n.current){var t=e/10;n.current.volume=t,p(u(t))}},onRemove:function(){},className:"volume_control"}),Object(k.jsx)("img",{className:"volume_icon",src:E,alt:"volume",width:20,height:20})]}),Object(k.jsxs)("div",{className:"image_container",onClick:N,children:[Object(k.jsx)("div",{className:"song_image",style:B}),Object(k.jsx)("div",{className:R})]})]}),Object(k.jsx)(h.Card,{className:"lyrics_card",children:Object(k.jsx)(h.CardBody,{children:Object(k.jsxs)(h.CardContent,{children:[C&&Object(k.jsx)("audio",{id:"audio-1",ref:n,onEnded:function(){p(s(!1))},children:Object(k.jsx)("source",{src:C,type:"audio/mpeg"})}),Object(k.jsx)("div",{id:"lyrics-1",className:"rabbit-lyrics","data-media":"#audio-1",ref:a,"data-view-mode":"mini",children:w})]})})})]})};J.defaultProps={};var G=J,M=n(89);var U,V=function(){var e,t,n=Object(c.useReducer)(F,{songs:[]}),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useRef)(),o=Object(c.useRef)(),u=Object(d.f)();Object(c.useEffect)((function(){var e;o.current=(e=function(){return s.current},Object(M.a)({getState:e})),o.current.on("data",(function(e){var t,n=e.action,c=e.interaction,a=(e.navigation,e.system);if("BACK"===(null===a||void 0===a?void 0:a.command)&&u.goBack(),c&&(null===c||void 0===c?void 0:c.payload))return t=c.payload,void u.push("/song/".concat(t));n&&i(n)}))}),[]),Object(c.useEffect)((function(){s.current={item_selector:{items:r.songs.map((function(e,t){var n=e._id;e.title;return{number:t+1,id:n,title:"".concat(t+1)}}))}}}),[r]);var j=Object(d.h)("/song/:songId"),b=Boolean(j),f=null===j||void 0===j||null===(e=j.params)||void 0===e?void 0:e.songId,g=null===(t=r.songs.find((function(e){return e._id===f})))||void 0===t?void 0:t.title;return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(h.Container,{className:"container",children:[b?Object(k.jsx)(h.Header,{back:!0,title:g||"\u041f\u0435\u0441\u043d\u044f",onBackClick:function(){u.push("/")}}):Object(k.jsx)(h.Header,{back:!1,title:"\u041a\u0430\u0440\u0430\u043e\u043a\u0435"}),Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/song/:songId",component:G,children:Object(k.jsx)(G,{dispatch:i,appState:r})}),Object(k.jsx)(d.a,{path:"/",exact:!0,component:L,children:Object(k.jsx)(L,{dispatch:i,appState:r})})]})]})})},z=n(87),K=n(1),W=n(2),Y=Object(K.createGlobalStyle)(U||(U=Object(z.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),W.text,W.background,W.gradient),q=Object(K.createGlobalStyle)(o.darkSber),Q=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y,{}),Object(k.jsx)(q,{})]})},X=(n(202),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))});i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsxs)(s.DeviceThemeProvider,{theme:o.lightJoy,children:[Object(k.jsx)(Q,{}),Object(k.jsx)(u.a,{basename:"/karaoke-front",children:Object(k.jsx)(V,{})})]})}),document.getElementById("root")),X()},80:function(e,t,n){e.exports={song_card:"styles_song_card__JdSnD",song_card__img:"styles_song_card__img__1-ujY"}}},[[204,1,2]]]);
//# sourceMappingURL=main.36f2a519.chunk.js.map