(function(){"use strict";var t={9680:function(t,e,a){var n=a(7764),o=a(4108);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container"},s=(0,o.QD)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.QD)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},c={class:"navbar-nav mr-auto"},u={class:"nav-item"},d={class:"nav-item"},p={class:"nav-item dropdown"},m=(0,o.QD)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-toggle":"dropdown","aria-expanded":"false"}," Profil ",-1),h={class:"dropdown-menu"},b=(0,o.QD)("div",{class:"dropdown-divider"},null,-1),f=(0,o.QD)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search",-1);function g(t,e,a,g,v,y){const w=(0,o.E1)("router-link"),k=(0,o.E1)("router-view");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("nav",r,[(0,o.QD)("div",i,[(0,o.K2)(w,{class:"navbar-brand",to:"/"},{default:(0,o.Ql)((()=>[(0,o.mY)("Vue App")])),_:1}),s,(0,o.QD)("div",l,[(0,o.QD)("ul",c,[(0,o.QD)("li",u,[(0,o.K2)(w,{class:"nav-link",to:"/"},{default:(0,o.Ql)((()=>[(0,o.mY)("Home")])),_:1})]),(0,o.QD)("li",d,[(0,o.K2)(w,{class:"nav-link",to:"/about"},{default:(0,o.Ql)((()=>[(0,o.mY)("About")])),_:1})]),(0,o.QD)("li",p,[m,(0,o.QD)("div",h,[(0,o.K2)(w,{class:"dropdown-item",to:"/profil"},{default:(0,o.Ql)((()=>[(0,o.mY)("Sejarah")])),_:1}),(0,o.K2)(w,{class:"dropdown-item",to:"/visi-misi"},{default:(0,o.Ql)((()=>[(0,o.mY)("Visi Misi")])),_:1}),b,(0,o.K2)(w,{class:"dropdown-item",to:"/struktur-organisasi"},{default:(0,o.Ql)((()=>[(0,o.mY)("Struktur Organisasi")])),_:1})])])]),(0,o.QD)("form",{class:"form-inline my-2 my-lg-0",onSubmit:e[1]||(e[1]=(0,n.Y7)(((...t)=>y.search&&y.search(...t)),["prevent"]))},[(0,o.wt)((0,o.QD)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":e[0]||(e[0]=t=>v.searchQuery=t)},null,512),[[n.Og,v.searchQuery]]),f],32)])])]),(0,o.K2)(n.Ox,{name:"fade"},{default:(0,o.Ql)((()=>[(0,o.K2)(k)])),_:1}),v.showButtonToTop?((0,o.Wz)(),(0,o.An)("button",{key:0,class:"btn btn-primary",id:"buttonTo",onClick:e[2]||(e[2]=(...t)=>y.scrollToTop&&y.scrollToTop(...t))},"Scroll to top")):(0,o.g1)("",!0)],64)}a(3248);var v={name:"App",data(){return{searchQuery:"",showButtonToTop:!1}},watch:{$route(t,e){document.title=t.meta.title||"Vue App"}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{search(){this.$router.push({name:"SearchView",query:{txt:this.searchQuery}})},handleScroll(){console.log(window.scrollY,this.showButtonToTop),window.scrollY>100?(this.showButtonToTop=!0,console.log("muncul button ")):(this.showButtonToTop=!1,console.log("button hilang"))},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},y=a(4100);const w=(0,y.c)(v,[["render",g]]);var k=w,Q=a(7464);function D(t,e,a,n,r,i){const s=(0,o.E1)("JumbotronVue");return(0,o.Wz)(),(0,o.Az)(s)}const A={class:"jumbotron"},V=(0,o.QD)("h1",{class:"display-4"},"Hello, world!",-1),S=(0,o.QD)("p",{class:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",-1),W=(0,o.QD)("hr",{class:"my-4"},null,-1),z=(0,o.QD)("p",null,"It uses utility classes for typography and spacing to space content out within the larger container.",-1);function T(t,e,a,n,r,i){const s=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",A,[V,S,W,z,(0,o.K2)(s,{to:"/about",class:"btn btn-primary btn-lg",href:"#",role:"button"},{default:(0,o.Ql)((()=>[(0,o.mY)("Learn more")])),_:1})])}var K={name:"JumbotronVue"};const x=(0,y.c)(K,[["render",T]]);var O=x,j={name:"HomeView",components:{JumbotronVue:O}};const C=(0,y.c)(j,[["render",D]]);var L=C;const _=(0,o.QD)("h1",null,"About",-1);function E(t,e,a,n,r,i){const s=(0,o.E1)("CarouselVue");return(0,o.Wz)(),(0,o.An)(o.ae,null,[_,(0,o.K2)(s)],64)}const P=(0,o.QD)("img",{src:"banner.jpg",alt:"banner",width:"100%",style:{"object-fit":"cover",height:"250px","border-radius":"8px"}},null,-1);function B(t,e,a,n,r,i){const s=(0,o.E1)("slide"),l=(0,o.E1)("navigation"),c=(0,o.E1)("pagination"),u=(0,o.E1)("carousel",!0);return(0,o.Wz)(),(0,o.Az)(u,null,{addons:(0,o.Ql)((()=>[(0,o.K2)(l),(0,o.K2)(c)])),default:(0,o.Ql)((()=>[((0,o.Wz)(),(0,o.An)(o.ae,null,(0,o.mi)(10,(t=>(0,o.K2)(s,{key:t},{default:(0,o.Ql)((()=>[P])),_:2},1024))),64))])),_:1})}var $=a(536),Y={name:"CarouselVue",components:{Carousel:$.ER,Slide:$.Ws,Pagination:$.eM,Navigation:$._2}};const H=(0,y.c)(Y,[["render",B]]);var M=H,N={name:"AboutView",components:{CarouselVue:M}};const U=(0,y.c)(N,[["render",E]]);var q=U;function I(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("h1",null,"Profil")}var J={name:"ProfilView"};const R=(0,y.c)(J,[["render",I]]);var F=R;function G(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("h1",null,"Visi Misi")}var X={name:"VisimisiView"};const Z=(0,y.c)(X,[["render",G]]);var tt=Z;function et(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("h1",null,"Struktur Organisasi")}var at={name:"StrukturView"};const nt=(0,y.c)(at,[["render",et]]);var ot=nt;function rt(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("h1",null,"Not Found")}var it={name:"NotfoundView"};const st=(0,y.c)(it,[["render",rt]]);var lt=st;function ct(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("h1",null,"Login")}var ut={name:"LoginView"};const dt=(0,y.c)(ut,[["render",ct]]);var pt=dt,mt=a(9096);const ht={class:"container"},bt={class:"mb-3"},ft={class:"form-row"},gt={class:"col-3"},vt=(0,o.QD)("option",{value:""},"Pilih Channel",-1),yt={class:"col-3"},wt=["disabled"],kt=(0,o.QD)("option",{value:""},"Pilih Kategori",-1),Qt={key:0},Dt={key:1},At={class:"row"},Vt={key:0,class:"col"},St={class:"row"};function Wt(t,e,a,r,i,s){const l=(0,o.E1)("CardVue");return(0,o.Wz)(),(0,o.An)("div",ht,[(0,o.QD)("p",null,[(0,o.mY)("Hasil pencarian Anda : "),(0,o.QD)("strong",null,(0,mt.WA)(t.$route.query.txt),1)]),(0,o.QD)("form",bt,[(0,o.QD)("div",ft,[(0,o.QD)("div",gt,[(0,o.wt)((0,o.QD)("select",{class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>i.channel=t),onChange:e[1]||(e[1]=t=>s.getKategori(t.target.value))},[vt,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.listChannel,((t,e)=>((0,o.Wz)(),(0,o.An)("option",{key:e},(0,mt.WA)(t),1)))),128))],544),[[n.Ip,i.channel]])]),(0,o.QD)("div",yt,[(0,o.wt)((0,o.QD)("select",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>i.kategori=t),onChange:e[3]||(e[3]=t=>s.berita()),disabled:""==i.channel},[kt,((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.listKategori,((t,e)=>((0,o.Wz)(),(0,o.An)("option",{key:e},(0,mt.WA)(t),1)))),128))],40,wt),[[n.Ip,i.kategori]])])])]),i.isLoading?((0,o.Wz)(),(0,o.An)("div",Qt,"Loading...")):((0,o.Wz)(),(0,o.An)("div",Dt,[(0,o.QD)("div",At,[0==i.listBerita.length?((0,o.Wz)(),(0,o.An)("div",Vt,"Tidak ada data")):(0,o.g1)("",!0)]),(0,o.QD)("div",St,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(i.listBerita,((t,e)=>((0,o.Wz)(),(0,o.An)("div",{class:"col-md-3 mb-3",key:e},[(0,o.K2)(l,{berita:t},null,8,["berita"])])))),128))])]))])}const zt={class:"card"},Tt=["src"],Kt={class:"card-body"},xt={class:"card-title"},Ot=(0,o.QD)("p",{class:"card-text"},null,-1),jt=["href"];function Ct(t,e,a,n,r,i){return(0,o.Wz)(),(0,o.An)("div",zt,[(0,o.QD)("img",{src:a.berita.thumbnail,class:"card-img-top",alt:"..."},null,8,Tt),(0,o.QD)("div",Kt,[(0,o.QD)("h5",xt,(0,mt.WA)(a.berita.title),1),Ot,(0,o.QD)("a",{href:a.berita.link,target:"_blank",class:"btn btn-primary"},"Go somewhere",8,jt)])])}var Lt={name:"BeritaVue",props:["berita"]};const _t=(0,y.c)(Lt,[["render",Ct]]);var Et=_t,Pt={name:"SearchView",components:{CardVue:Et},data(){return{listBerita:[],listChannel:["antara","cnbc","cnn","jpnn","kumparan","merdeka","okezone","republika","sindonews","suara","tempo","tribun"],listKategori:[],channel:"cnn",kategori:"terbaru",isLoading:!1}},created(){console.log("created at "),this.berita()},mounted(){const t=this.$route?.query?.txt;t&&(console.log("Search term from URL on mounted:",this.$route.query.txt),this.berita())},watch:{$route(){const t=this.$route?.query?.txt;t&&(console.log("Search term from URL on watch:",this.$route.query.txt),this.berita())}},methods:{async berita(){this.isLoading=!0;const t=JSON.parse(localStorage.getItem("cachedData"));if(t)this.isLoading=!1,this.listBerita=t;else{localStorage.removeItem("cachedData");try{const t=await this.$axios.get(`/${this.channel}/${this.kategori}`);console.log(t.data.data.posts),t.data.success?(this.listBerita=t.data.data.posts,localStorage.setItem("cachedData",JSON.stringify(t.data.data.posts))):this.listBerita=[]}catch(e){console.log(e)}finally{this.isLoading=!1}}},async getKategori(t){this.listKategori=[],this.kategori="";let e=[{primary:"antara",paths:["terbaru","politik","hukum","ekonomi","bola","olahraga","humaniora","lifestyle","hiburan","dunia","tekno","otomotif"]},{primary:"cnbc",paths:["terbaru","investment","news","market","entrepreneur","syariah","tech","lifestyle","opini","profil"]},{primary:"cnn",paths:["terbaru","nasional","internasional","ekonomi","olahraga","teknologi","hiburan","gayaHidup"]},{primary:"jpnn",paths:["terbaru"]},{primary:"kumparan",paths:["terbaru"]},{primary:"merdeka",paths:["terbaru","jakarta","dunia","gaya","olahraga","teknologi","otomotif","khas","sehat","jateng"]},{primary:"okezone",paths:["terbaru","celebrity","sports","otomotif","economy","techno","lifestyle","bola"]},{primary:"republika",paths:["terbaru","news","daerah","khazanah","islam","internasional","bola","leisure"]},{primary:"sindonews",paths:["terbaru","nasional","metro","ekbis","international","daerah","sports","otomotif","tekno","sains","edukasi","lifestyle","kalam"]},{primary:"suara",paths:["terbaru","bisnis","bola","lifestyle","entertainment","otomotif","tekno","health"]},{primary:"tempo",paths:["nasional","bisnis","metro","dunia","bola","cantik","tekno","otomotif","seleb","gaya","travel","difabel","creativelab","inforial","event"]},{primary:"tribun",paths:["terbaru","bisnis","superskor","sport","seleb","lifestyle","travel","parapuan","otomotif","techno","kesehatan"]}];if(""!=t){let a=e.filter((e=>e.primary==t)),n=[];a[0].paths.map((t=>{n.push(t)})),this.listKategori=n}else this.listKategori=[]}}};const Bt=(0,y.c)(Pt,[["render",Wt]]);var $t=Bt;const Yt=[{path:"/",name:"HomeView",component:L,meta:{title:"Home"}},{path:"/about",name:"AboutView",component:q,meta:{title:"About"}},{path:"/profil",name:"ProfilView",component:F,meta:{title:"Profil"}},{path:"/visi-misi",name:"VisimisiView",component:tt,meta:{title:"Visi Misi"}},{path:"/struktur-organisasi",name:"StrukturView",component:ot,meta:{title:"Struktur Organisasi"}},{path:"/search",name:"SearchView",component:$t,meta:{title:"Search"}},{path:"/login",name:"Login",component:pt,meta:{title:"Login"}},{path:"/:catchALl(.*)",name:"NotfoundView",component:lt,meta:{title:"Not Found"}}],Ht=(0,Q.gv)({history:(0,Q.Ow)("/vue5/"),routes:Yt});var Mt=Ht,Nt=a(2964);a(7320);Nt.c.defaults.baseURL="https://api-berita-indonesia.vercel.app";const Ut=(0,n.W0)(k);Ut.config.globalProperties.$axios=Nt.c,Ut.use(Mt).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],r=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(e&&e(n);c<i.length;c++)r=i[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},n=self["webpackChunkprojek1"]=self["webpackChunkprojek1"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[999],(function(){return a(9680)}));n=a.O(n)})();
//# sourceMappingURL=app.230f4b88.js.map