(this["webpackJsonpdroidknights-2020"]=this["webpackJsonpdroidknights-2020"]||[]).push([[0],{142:function(e,t,n){e.exports=n(269)},147:function(e,t,n){},268:function(e,t,n){e.exports=n.p+"static/media/BIG_JOHN.aa3a0087.otf"},269:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(58),l=n.n(r),i=n(126),c=n(127),s=n(138),m=n(128),g=n(141),u=(n(147),n(84)),d=n(31),p=n(40),b=n.n(p),h=n(7),E=n(129),v=n(137),f=n(130),x=n.n(f);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),o=Object(v.a)(n,2),r=o[0],l=o[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){l(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),r}function O(){var e=Object(d.h)(),t=Object(d.g)(),n=Object(d.f)(),o=Object(d.i)();return Object(a.useMemo)((function(){return{push:n.push,replace:n.replace,pathname:t.pathname,query:w({},x.a.parse(t.search),{},e),match:o,location:t,history:n}}),[e,o,t,n])}var S=n(39),k=function(e){var t=O();return o.a.createElement("div",{className:b.a.root,style:{top:e.isShow?0:"-100px"}},o.a.createElement("div",{className:b.a.title},o.a.createElement("span",null,o.a.createElement(h.Link,{to:"idx",smooth:!0,offset:-160,duration:500},"Droid knights"))),o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement("span",null,o.a.createElement(h.Link,{to:"about",smooth:!0,offset:-50,duration:500},"about")),o.a.createElement("span",null,o.a.createElement(h.Link,{to:"schedule",smooth:!0,offset:-50,duration:500},"schedule")),o.a.createElement("span",null,o.a.createElement(h.Link,{to:"location",smooth:!0,offset:-50,duration:500},"location")),o.a.createElement("span",null,o.a.createElement(h.Link,{to:"sponsor",smooth:!0,offset:-50,duration:500},"sponsor"))),o.a.createElement("div",{className:b.a.tool},o.a.createElement("span",{className:"ko"===t.query.lng||void 0===t.query.lng?b.a.focus:"",onClick:function(){t.replace("/2020?lng=ko"),S.a.changeLanguage("ko")}},"KO"),o.a.createElement("span",null,"/"),o.a.createElement("span",{className:"en"===t.query.lng?b.a.focus:"",onClick:function(){t.replace("/2020?lng=en"),S.a.changeLanguage("en")}},"EN"))))},j=n(49),N=n.n(j),A=n(23),L=function(e){var t=Object(A.b)(),n=t.t;t.i18n;return o.a.createElement(h.Element,{name:"idx",className:N.a.root,style:{backgroundImage:"url(".concat("/2020/build","/img/bg_star.svg)")}},o.a.createElement("img",{className:N.a.title,src:"/2020/build/img/img_title.svg",alt:"",srcSet:""}),o.a.createElement("div",{className:N.a.desc},o.a.createElement("div",null,n("Date")),o.a.createElement("div",null,n("Place"))),o.a.createElement("div",{className:N.a.img},o.a.createElement("img",{src:"/2020/build/img/img_droid_space.svg",alt:"",srcSet:""}),o.a.createElement("img",{src:"/2020/build/img/img_shooter.svg",alt:"",srcSet:""})))},H=n(87),D=n.n(H),P=function(e){var t=y(),n=Object(A.b)().t;O();return o.a.createElement(h.Element,{name:"about",className:D.a.root},o.a.createElement("div",null,o.a.createElement("span",{className:D.a.high},n("Droid")),n("About01"),o.a.createElement("br",null),n("About02")," ",t.width<=425&&o.a.createElement("br",null),n("About03"),t.width<=425&&o.a.createElement("br",null),n("About04")))},C=n(59),I=n.n(C),M=function(e){var t=Object(A.b)().t;return o.a.createElement(h.Element,{name:"schedule",className:I.a.root},o.a.createElement("div",{className:I.a.desc},t("Comming Soon Session")),o.a.createElement("div",{className:I.a.coming},"COMING SOON"),o.a.createElement("img",{src:"/2020/build/img/img-planet.svg",alt:"",srcSet:""}))},T=n(139),q=n(61),z=n.n(q),J=function(e){var t=Object(A.b)().t,n=y();return o.a.useEffect((function(){var e=null;Object(T.a)({ncpClientId:"0x78ib6nmi"}).then((function(t){e=new t.Map("map",{useStyleMap:!0,center:new t.LatLng(37.51319,127.05845),zoom:16}),new t.Marker({position:new t.LatLng(37.51319,127.05845),map:e})}))}),[]),o.a.createElement(h.Element,{name:"location",className:z.a.root},o.a.createElement("div",{className:z.a.title},"location"),o.a.createElement("div",{className:z.a.desc},o.a.createElement("span",null,t("Place"))," ",o.a.createElement("br",null),t("Place Detail")),o.a.createElement("div",{id:"map",style:{margin:"34px 0",width:n.width<=425?"100%":"50%",height:n.width<=425?"300px":"400px",transform:"translateX(-50%)",left:"50%"}}))},B=n(62),K=n.n(B),R=function(e){return o.a.createElement(h.Element,{name:"sponsor",className:K.a.root},o.a.createElement("div",{className:K.a.title},"sponsor"),o.a.createElement("div",{className:K.a.list},o.a.createElement("div",null,o.a.createElement("img",{src:"/2020/build/img/btn-diamond/btn-diamond.png",alt:"",srcSet:"".concat("/2020/build","/img/btn-diamond/btn-diamond@2x.png 2x,\n            ").concat("/2020/build","/img/btn-diamond/btn-diamond@3x.png 3x")}),o.a.createElement("img",{src:"/2020/build/img/sponsors/toss/logo-toss.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/toss/logo-toss@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/toss/logo-toss@3x.png 3x"),style:{width:"80%",marginTop:"15px",marginBottom:"150px"}})),o.a.createElement("div",null,o.a.createElement("img",{src:"/2020/build/img/btn-platinum/btn-platinum.png",alt:"",srcSet:"".concat("/2020/build","/img/btn-platinum/btn-platinum@2x.png 2x,\n            ").concat("/2020/build","/img/btn-platinum/btn-platinum@3x.png 3x")}),o.a.createElement("img",{src:"/2020/build/img/sponsors/heydealer/logo-heydealer.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/heydealer/logo-heydealer@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/heydealer/logo-heydealer@3x.png 3x"),style:{width:"60%",marginTop:"15px"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/line/logo-line.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/line/logo-line@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/line/logo-line@3x.png 3x"),style:{width:"40%"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/remember/logo-remember.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/remember/logo-remember@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/remember/logo-remember@3x.png 3x"),style:{width:"90%",marginTop:"10px",marginBottom:"150px"}})),o.a.createElement("div",null,o.a.createElement("img",{src:"/2020/build/img/btn-gold/btn-gold.png",alt:"",srcSet:"".concat("/2020/build","/img/btn-gold/btn-gold@2x.png 2x,\n            ").concat("/2020/build","/img/btn-gold/btn-gold@3x.png 3x")}),o.a.createElement("img",{src:"/2020/build/img/sponsors/gangnam/logo-gangnam.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/gangnam/logo-gangnam@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/gangnam/logo-gangnam@3x.png 3x"),style:{width:"50%",marginTop:"25px"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/naver/logo-naver.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/naver/logo-naver@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/naver/logo-naver@3x.png 3x"),style:{width:"50%",marginTop:"15px"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/myrealtrip/logo-myrealtrip.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/myrealtrip/logo-myrealtrip@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/myrealtrip/logo-myrealtrip@3x.png 3x"),style:{width:"55%",marginTop:"7px",marginBottom:"34px"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/kakaopay/logo-kakaopay.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/kakaopay/logo-kakaopay@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/kakaopay/logo-kakaopay@3x.png 3x"),style:{width:"35%"}}),o.a.createElement("img",{src:"/2020/build/img/sponsors/vcnc/logo-vcnc.png",alt:"",srcSet:"".concat("/2020/build","/img/sponsors/vcnc/logo-vcnc@2x.png 2x,\n            ").concat("/2020/build","/img/sponsors/vcnc/logo-vcnc@3x.png 3x"),style:{width:"35%"}}))))},X=function(e){return o.a.createElement("div",null,"Organizer")},F=n(140);S.a.use(F.a).use(A.a).init({resources:{en:{translation:{Droid:"DroidKnights",Date:"Apr 6, 2020",Place:"Conference Room(North) 2F COEX","Comming Soon Session":"Session schedule will be announced in Feb.",About01:" is",About02:"an Android conference to share",About03:"advanced knowledge and experiences ",About04:"via tech session","Place Detail":"513, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea",Ticket:"Regular ticket open!"}},ko:{translation:{Droid:"\ub4dc\ub85c\uc774\ub4dc\ub098\uc774\uce20",Date:"2020.04.06",Place:"\ucf54\uc5d1\uc2a4 \uc544\uc148\ubcfc\ub8f8 2\uce35","Comming Soon Session":"2\uc6d4\uc911\uc5d0 \uc138\uc158\uc774 \uacf5\uac1c\ub429\ub2c8\ub2e4.",About01:"\ub294",About02:"\uae30\uc220 \uc138\uc158\uc73c\ub85c \uac1c\ubc1c\uc790\ub4e4\uc758 \uacbd\ud5d8\uc744 \uacf5\uc720\ud558\ub294",About03:"\uc548\ub4dc\ub85c\uc774\ub4dc \ucee8\ud37c\ub7f0\uc2a4 \uc785\ub2c8\ub2e4.",About04:"","Place Detail":"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c \uc601\ub3d9\ub300\ub85c 513 (\uc0bc\uc131\ub3d9, \ucf54\uc5d1\uc2a4)",Ticket:"\uc77c\ubc18\ud2f0\ucf13 \uc624\ud508!"}}},fallbackLng:"ko",debug:!0,interpolation:{escapeValue:!1}});S.a;var Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showHeader:!0},n.handleNavigation=function(e){var t=e.currentTarget;n.prev<t.pageYOffset?n.setState({showHeader:!1}):n.prev>=t.pageYOffset&&n.setState({showHeader:!0}),n.prev=t.pageYOffset},n.showHeader=function(){n.setState({showHeader:!0})},n.hideHeader=function(){n.setState({showHeader:!1})},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.prev=10,window.addEventListener("scroll",this.handleNavigation),h.Events.scrollEvent.register("begin",this.hideHeader),h.Events.scrollEvent.register("end",this.showHeader)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleNavigation)}},{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("div",{style:{height:"100vh"}},o.a.createElement(k,{isShow:this.state.showHeader}),o.a.createElement(d.c,null,o.a.createElement(d.a,{path:"/2020/",exact:!0},o.a.createElement(L,null),o.a.createElement(P,null),o.a.createElement(M,null),o.a.createElement(J,null),o.a.createElement(R,null)),o.a.createElement(d.a,{path:"/2020/organizer",exact:!0},o.a.createElement(X,null)))))}}]),t}(o.a.Component);n(177),n(121),n(268);l.a.render(o.a.createElement(Y,null),document.getElementById("root"))},40:function(e,t,n){e.exports={root:"Header_root__2aqMt",title:"Header_title__3KwFS",tool:"Header_tool__25WaL",focus:"Header_focus__2Z4gs"}},49:function(e,t,n){e.exports={root:"Index_root__3jrAb",title:"Index_title__25xJm",img:"Index_img__1JxyA",desc:"Index_desc__CxzSq"}},59:function(e,t,n){e.exports={root:"Schedule_root__28-xa",desc:"Schedule_desc__1M2-S",coming:"Schedule_coming__Z2M2A"}},61:function(e,t,n){e.exports={root:"Location_root__3XPJR",title:"Location_title__3npX9",desc:"Location_desc__IpRIp"}},62:function(e,t,n){e.exports={root:"Sponsor_root__2ZXtZ",title:"Sponsor_title__3Hhwa",list:"Sponsor_list__h7VtK"}},87:function(e,t,n){e.exports={root:"About_root__1nNco",high:"About_high__5UFue"}}},[[142,1,2]]]);
//# sourceMappingURL=main.9114b3bc.chunk.js.map