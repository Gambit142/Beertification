(function(){"use strict";var e={4875:function(e,t,n){var a=n(9242),o=n(3396),l=n(7718),i=n(588),s=n(9156),r=n(7423),d=n(4075),c=n(9234),u=n(8694),f=n(6674),m=n(2329),h=n(9271),w=n(7033),p=n(5030);const g=(0,o.Uk)("Punk Beers"),b=(0,o.Uk)("Punk Beers"),v=(0,o.Uk)("Home"),x=(0,o.Uk)("About");function _(e,t,n,_,y,W){const k=(0,o.up)("router-link"),j=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(l.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i.L,{image:"https://picsum.photos/1920/1080?random"},{image:(0,o.w5)((()=>[(0,o.Wm)(u.f,{gradient:"to top right, rgba(255,183,77,.8), rgba(255,209,128,.8)"})])),default:(0,o.w5)((()=>[(0,o.Wm)(s.g,{class:"text-h6",variant:"text",onClick:t[0]||(t[0]=(0,a.iM)((t=>e.drawer=!e.drawer),["stop"]))}),(0,o.Wm)(p.q,{class:"open-sans text-h6 text-sm-h5 font-weight-bold ml-3 ml-sm-7"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(c.C),(0,o.Wm)(r.T,{variant:"text",class:"text-h5",icon:"mdi-magnify",onClick:t[1]||(t[1]=(0,a.iM)((t=>e.showTextField=!e.showTextField),["stop"]))})])),_:1}),(0,o.Wm)(w.V,{theme:"dark",modelValue:e.drawer,"onUpdate:modelValue":t[2]||(t[2]=t=>e.drawer=t),temporary:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f.l,{class:"text-h4 italianno",color:"#ffd180","prepend-avatar":"https://cdn5.vectorstock.com/i/1000x1000/97/69/realistic-beer-splashes-in-transparent-vector-22899769.jpg"},{default:(0,o.w5)((()=>[b])),_:1}),(0,o.Wm)(d.J),(0,o.Wm)(m.i,{density:"compact",nav:""},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{to:"/",class:"text-decoration-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(f.l,{class:"text-h6 open-sans","prepend-icon":"mdi-view-dashboard",color:"#ffd180"},{default:(0,o.w5)((()=>[v])),_:1})])),_:1}),(0,o.Wm)(f.l,{class:"text-h6 open-sans","prepend-icon":"mdi-forum",color:"#ffd180"},{default:(0,o.w5)((()=>[x])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(h.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(j,{showTextField:e.showTextField},null,8,["showTextField"])])),_:1})])),_:1})}var y={name:"App",data:()=>({drawer:null,showTextField:!1})},W=n(89);const k=(0,W.Z)(y,[["render",_],["__scopeId","data-v-445f390f"]]);var j=k,P=n(678);function B(e,t,n,a,l,i){const s=(0,o.up)("IndexPage");return(0,o.wg)(),(0,o.j4)(s,{showTextField:e.showTextField},null,8,["showTextField"])}var D=n(7139),U=n(3369),O=n(6824),T=n(8521),F=n(6556),V=n(9699);const C={class:"mt-5"};function z(e,t,n,a,l,i){const s=(0,o.up)("IndividualBeer");return(0,o.wg)(),(0,o.j4)(U.K,null,{default:(0,o.w5)((()=>[n.showTextField?((0,o.wg)(),(0,o.j4)(V.h,{key:0,modelValue:e.searchedName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchedName=t),label:"Search For Your Favourite Beer",variant:"outlined",clearable:"",loading:"",placeholder:"Start Searching....",color:"#e65100"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(O.o,{justify:"center"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.filteredBeers,(e=>((0,o.wg)(),(0,o.j4)(T.D,{key:e.id,cols:"12",sm:"4"},{default:(0,o.w5)((()=>[(0,o._)("section",null,[(0,o.Wm)(s,(0,D.vs)((0,o.F4)(e)),null,16)])])),_:2},1024)))),128))])),_:1}),(0,o._)("div",C,[(0,o.Wm)(F.k,{modelValue:e.page,"onUpdate:modelValue":[t[1]||(t[1]=t=>e.page=t),i.handlePaginationChange],length:e.length,"total-visible":e.visibleNumber,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right",color:"#000",rounded:"0",elevation:"6",class:"pagination"},null,8,["modelValue","length","total-visible","onUpdate:modelValue"])])])),_:1})}var Z=n(4883),E=n(6572),I=n(1332),H=n(6620),Q=n(3173);const S={class:"my-6"},K={class:"d-flex justify-center align-start mb-3 name-height"},M={class:"d-flex justify-center align-start tagline-height"},A={class:"d-flex justify-center mt-5 mt-sm-0"},N=(0,o.Uk)("See Details ");function Y(e,t,n,a,l,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(H.V,null,{default:(0,o.w5)((({isHovering:e,props:t})=>[(0,o.Wm)(Z._,(0,o.dG)({elevation:e?14:2},t,{class:"rounded-shaped"}),{default:(0,o.w5)((()=>[(0,o._)("div",S,[(0,o.Wm)(u.f,{src:n.image,alt:`${n.name} image`,class:"bg-white",height:"400"},{placeholder:(0,o.w5)((()=>[(0,o.Wm)(O.o,{class:"fill-height ma-0",align:"center",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q.L,{indeterminate:"",color:"orange-darken-3"})])),_:1})])),_:1},8,["src","alt"])]),(0,o._)("div",K,[(0,o.Wm)(E.E,{class:"text-center text-h6 font-weight-black"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.name),1)])),_:1})]),(0,o._)("div",M,[(0,o.Wm)(I.Q,{class:"text-medium-emphasis text-h6 text-center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.tagline),1)])),_:1})]),(0,o.Wm)(s,{to:`/beer/${n.id}`,class:"text-decoration-none"},{default:(0,o.w5)((()=>[(0,o._)("div",A,[(0,o.Wm)(r.T,{variant:"outlined",rounded:"lg",class:"bg-orange-accent-1 font-weight-black btn",block:""},{default:(0,o.w5)((()=>[N])),_:1})])])),_:1},8,["to"])])),_:2},1040,["elevation"])])),_:1})}var G={name:"IndividualBeer",props:["id","name","image","tagline"]};const $=(0,W.Z)(G,[["render",Y],["__scopeId","data-v-ce2029c6"]]);var L=$,J={name:"IndexPage",data:()=>({beerArray:[],page:1,searchedName:"",perPage:window.outerWidth<600?10:24,visibleNumber:window.outerWidth<600?4:7,length:Math.round(305/(window.outerWidth<600?10:24))}),props:["showTextField"],components:{IndividualBeer:L},async created(){this.beerArray=await this.fetchBeers()},computed:{filteredBeers(){return this.beerArray.filter((e=>e.name.toLowerCase().includes(this.searchedName.toLowerCase())))}},methods:{async handlePaginationChange(){this.beerArray=await this.fetchBeers(),this.searchedName=""},async fetchBeers(){try{const e=`https://api.punkapi.com/v2/beers?page=${this.page}&per_page=${this.perPage}`,t=await fetch(e),n=await t.json();return n.map((e=>({id:e.id,name:e.name,image:e.image_url,tagline:e.tagline})))}catch(e){return console.log(e),[]}}}};const R=(0,W.Z)(J,[["render",z],["__scopeId","data-v-c7682ce8"]]);var q=R,X=(0,o.aZ)({name:"HomeView",components:{IndexPage:q},props:["showTextField"]});const ee=(0,W.Z)(X,[["render",B]]);var te=ee;function ne(e,t,n,a,l,i){const s=(0,o.up)("BeerDetailsPage");return(0,o.wg)(),(0,o.j4)(s)}function ae(e,t,n,a,l,i){const s=(0,o.up)("DesktopView"),r=(0,o.up)("MobileView");return(0,o.wg)(),(0,o.j4)(h.O,{class:"d-flex align-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{image:l.image,name:l.name,tagline:l.tagline,description:l.description,firstBrewed:l.firstBrewed,abv:l.abv,volume:l.volume,malt:l.malt,hops:l.hops,yeast:l.yeast,foodPairing:l.foodPairing},null,8,["image","name","tagline","description","firstBrewed","abv","volume","malt","hops","yeast","foodPairing"]),(0,o.Wm)(r,{image:l.image,name:l.name,tagline:l.tagline,description:l.description,firstBrewed:l.firstBrewed,abv:l.abv,volume:l.volume,malt:l.malt,hops:l.hops,yeast:l.yeast,foodPairing:l.foodPairing,class:"d-block d-sm-none"},null,8,["image","name","tagline","description","firstBrewed","abv","volume","malt","hops","yeast","foodPairing"])])),_:1})}var oe=n(6562),le=n(1334),ie=n(1888),se=n(8952);const re=e=>((0,o.dD)("data-v-d7e6b208"),e=e(),(0,o.Cn)(),e),de={class:"placeholder d-flex justify-center align-center"},ce=["src","alt"],ue={class:"italianno font-weight-bold"},fe={class:"text-orange-lighten-2 font-weight-medium"},me={class:"font-weight-bold text-medium-emphasis mt-3"},he={class:"d-flex justify-space-between px-2 pt-2"},we=(0,o.Uk)("Brewed"),pe={class:"d-flex justify-space-between px-3 pt-2"},ge=(0,o.Uk)("Alc Vol"),be={class:"d-flex justify-space-between px-3 pt-2"},ve=(0,o.Uk)("Quantity"),xe=(0,o.Uk)("Ingredients"),_e=re((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis pb-3"},"Malt",-1))),ye={class:"d-flex justify-space-around flex-wrap"},We=re((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3"},"Hops",-1))),ke={class:"d-flex justify-space-around flex-wrap"},je=re((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3"},"Yeast",-1))),Pe={class:"d-flex justify-center"},Be=(0,o.Uk)(" Drink With ");function De(e,t,n,l,i,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(U.K,{"fill-height":"",fluid:"",class:"d-none d-sm-flex"},{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"6"},{default:(0,o.w5)((()=>[(0,o._)("div",de,[(0,o._)("img",{src:n.image,alt:`${n.name} image`,class:"bg-white"},null,8,ce)])])),_:1}),(0,o.Wm)(T.D,{cols:"6",class:"mt-12"},{default:(0,o.w5)((()=>[(0,o.Wm)(U.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o._)("h1",ue,(0,D.zw)(n.name),1),(0,o._)("h2",fe,(0,D.zw)(n.tagline),1),(0,o._)("p",me,(0,D.zw)(n.description),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(U.K,{class:"d-none d-sm-flex"},{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"8"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z._,{elevation:"20",class:"mt-4"},{default:(0,o.w5)((()=>[(0,o._)("div",he,[(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[we])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.firstBrewed),1)])),_:1})]),(0,o._)("div",pe,[(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[ge])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.abv)+"%",1)])),_:1})]),(0,o._)("div",be,[(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[ve])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.volume.value)+" "+(0,D.zw)(n.volume.unit),1)])),_:1})]),(0,o.Wm)(d.J,{class:"mt-5 border"}),(0,o.Wm)(E.E,{class:"text-orange-lighten-2 text-h5 font-weight-bold open-sans mx-5"},{default:(0,o.w5)((()=>[xe])),_:1}),_e,(0,o._)("div",ye,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.malt,((e,t)=>((0,o.wg)(),(0,o.j4)(oe.G,{key:t,content:e,inline:"",color:"#ffb74d","text-color":"black",class:"pb-2"},null,8,["content"])))),128))]),We,(0,o._)("div",ke,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.hops,((e,t)=>((0,o.wg)(),(0,o.j4)(oe.G,{key:t,content:e,inline:"",color:"#ffb74d","text-color":"black",class:"pb-2"},null,8,["content"])))),128))]),je,(0,o._)("div",Pe,[(0,o.Wm)(oe.G,{content:n.yeast,inline:"",color:"#ffb74d","text-color":"black"},null,8,["content"])]),(0,o.Wm)(le.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{color:"orange-lighten-2",variant:"text",class:"font-weight-bold open-sans text-h6"},{default:(0,o.w5)((()=>[Be])),_:1}),(0,o.Wm)(c.C),(0,o.Wm)(r.T,{icon:e.show?"mdi-chevron-up":"mdi-chevron-down",onClick:t[0]||(t[0]=t=>e.show=!e.show)},null,8,["icon"])])),_:1}),(0,o.Wm)(se.Fx,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(d.J),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.foodPairing,((e,t)=>((0,o.wg)(),(0,o.j4)(ie.Z,{class:"font-weight-bold",variant:"text",key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(e),1)])),_:2},1024)))),128))],512),[[a.F8,e.show]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}var Ue={name:"DesktopView",data:()=>({show:!1}),props:["image","name","tagline","description","firstBrewed","abv","volume","malt","hops","yeast","foodPairing"]};const Oe=(0,W.Z)(Ue,[["render",De],["__scopeId","data-v-d7e6b208"]]);var Te=Oe;const Fe=e=>((0,o.dD)("data-v-b8d65fea"),e=e(),(0,o.Cn)(),e),Ve={class:"placeholder d-flex justify-center align-center"},Ce=["src","alt"],ze={class:"font-weight-bold text-h6 text-black header-1 pl-4"},Ze={class:"d-flex flex-column justify-start pl-4 pt-2"},Ee=(0,o.Uk)("Brewed"),Ie={class:"d-flex flex-column justify-start pl-4 pt-2"},He=(0,o.Uk)("Alc Vol"),Qe={class:"d-flex flex-column justify-start pl-4 pt-2"},Se=(0,o.Uk)("Quantity"),Ke={class:"italianno font-weight-bold text-center"},Me={class:"text-orange-lighten-2 text-center mb-4 font-weight-medium"},Ae={class:"font-weight-bold text-medium-emphasis mt-3"},Ne=(0,o.Uk)(" Explore More "),Ye=(0,o.Uk)("Drink With"),Ge=(0,o.Uk)("Ingredients"),$e=Fe((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis pb-3"},"Malt",-1))),Le={class:"d-flex justify-space-around flex-wrap"},Je=Fe((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3"},"Hops",-1))),Re={class:"d-flex justify-space-around flex-wrap"},qe=Fe((()=>(0,o._)("div",{class:"font-weight-bold open-sans text-center text-subtitle-1 text-medium-emphasis py-3"},"Yeast",-1))),Xe={class:"d-flex justify-center"};function et(e,t,n,l,i,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(U.K,{class:"container d-block d-sm-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"6"},{default:(0,o.w5)((()=>[(0,o._)("div",Ve,[(0,o._)("img",{src:n.image,alt:`${n.name} image`,class:"bg-white"},null,8,Ce)])])),_:1}),(0,o.Wm)(c.C),(0,o.Wm)(T.D,{cols:"6",class:"mt-8 d-flex flex-column"},{default:(0,o.w5)((()=>[(0,o._)("h3",ze,(0,D.zw)(n.name),1),(0,o._)("div",Ze,[(0,o.Wm)(I.Q,{class:"ml-0 px-0 text-orange-lighten-2 header-2 font-weight-bold"},{default:(0,o.w5)((()=>[Ee])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 mx-0 px-0 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.firstBrewed),1)])),_:1})]),(0,o._)("div",Ie,[(0,o.Wm)(I.Q,{class:"mx-0 px-0 text-orange-lighten-2 header-2 font-weight-bold"},{default:(0,o.w5)((()=>[He])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 mx-0 px-0 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.abv)+"%",1)])),_:1})]),(0,o._)("div",Qe,[(0,o.Wm)(I.Q,{class:"mx-0 px-0 text-orange-lighten-2 header-2 font-weight-bold"},{default:(0,o.w5)((()=>[Se])),_:1}),(0,o.Wm)(I.Q,{class:"text-subtitle-1 mx-0 px-0 font-weight-bold"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(n.volume.value)+" "+(0,D.zw)(n.volume.unit),1)])),_:1})])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(U.K,{class:"container d-block d-sm-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o._)("h1",Ke,(0,D.zw)(n.name),1),(0,o._)("h2",Me,(0,D.zw)(n.tagline),1),(0,o._)("p",Ae,(0,D.zw)(n.description),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(Z._,{elevation:"20",class:"container d-block d-sm-none"},{default:(0,o.w5)((()=>[(0,o.Wm)(le.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.T,{color:"black",variant:"text",class:"font-weight-bold text-h6 open-sans"},{default:(0,o.w5)((()=>[Ne])),_:1}),(0,o.Wm)(c.C),(0,o.Wm)(r.T,{icon:e.show?"mdi-chevron-up":"mdi-chevron-down",onClick:t[0]||(t[0]=t=>e.show=!e.show)},null,8,["icon"])])),_:1}),(0,o.Wm)(se.Fx,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",null,[(0,o.Wm)(d.J),(0,o.Wm)(ie.Z,{class:"text-orange-lighten-2 text-h6 font-weight-bold"},{default:(0,o.w5)((()=>[Ye])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.foodPairing,((e,t)=>((0,o.wg)(),(0,o.j4)(ie.Z,{class:"font-weight-bold",variant:"text",key:t},{default:(0,o.w5)((()=>[(0,o.Uk)((0,D.zw)(e),1)])),_:2},1024)))),128)),(0,o.Wm)(d.J,{class:"mt-5 border"}),(0,o.Wm)(ie.Z,{class:"text-orange-lighten-2 text-h6 font-weight-bold"},{default:(0,o.w5)((()=>[Ge])),_:1}),$e,(0,o._)("div",Le,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.malt,((e,t)=>((0,o.wg)(),(0,o.j4)(oe.G,{key:t,content:e,inline:"",color:"#ffb74d","text-color":"black",class:"pb-2"},null,8,["content"])))),128))]),Je,(0,o._)("div",Re,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.hops,((e,t)=>((0,o.wg)(),(0,o.j4)(oe.G,{key:t,content:e,inline:"",color:"#ffb74d","text-color":"black",class:"pb-2"},null,8,["content"])))),128))]),qe,(0,o._)("div",Xe,[(0,o.Wm)(oe.G,{content:n.yeast,inline:"",color:"#ffb74d","text-color":"black"},null,8,["content"])])],512),[[a.F8,e.show]])])),_:1})])),_:1})],64)}var tt={name:"MobileView",data:()=>({show:!1}),props:["image","name","tagline","description","firstBrewed","abv","volume","malt","hops","yeast","foodPairing"]};const nt=(0,W.Z)(tt,[["render",et],["__scopeId","data-v-b8d65fea"]]);var at=nt,ot={name:"BeerDetailsPage",components:{DesktopView:Te,MobileView:at},data(){return{pageId:this.$route.params.id,name:"",tagline:"",firstBrewed:"",description:"",image:"",abv:null,volume:{},malt:[],hops:[],yeast:"",foodPairing:[]}},methods:{async fetchSingleBeer(){const e=`https://api.punkapi.com/v2/beers/${this.pageId}`,t=await fetch(e),n=await t.json();return n},removeDuplicate(e){const t=new Set(e),n=[];return t.forEach((e=>n.push(e.name))),n}},async created(){const e=await this.fetchSingleBeer();this.name=e[0].name,this.tagline=e[0].tagline,this.firstBrewed=e[0].first_brewed,this.description=e[0].description,this.image=e[0].image_url,this.abv=e[0].abv.toString(10),this.volume=e[0].volume,this.malt=this.removeDuplicate(e[0].ingredients.malt),this.hops=this.removeDuplicate(e[0].ingredients.hops),this.yeast=e[0].ingredients.yeast,this.foodPairing=e[0].food_pairing}};const lt=(0,W.Z)(ot,[["render",ae]]);var it=lt,st=(0,o.aZ)({name:"ShowView",components:{BeerDetailsPage:it}});const rt=(0,W.Z)(st,[["render",ne]]);var dt=rt;function ct(e,t,n,a,l,i){const s=(0,o.up)("ErrorPage");return(0,o.wg)(),(0,o.j4)(s)}const ut=e=>((0,o.dD)("data-v-4dc465bc"),e=e(),(0,o.Cn)(),e),ft=ut((()=>(0,o._)("h1",{class:"text-center font-weight-bold text-h1"},"404",-1))),mt=ut((()=>(0,o._)("h2",{class:"text-center font-weight-bold mb-7"},"ERROR PAGE",-1))),ht=ut((()=>(0,o._)("p",{class:"text-center text-h6 mb-5 font-weight-bold"},"OOOPS!!! Page was not found!",-1))),wt={class:"d-flex justify-center"},pt=(0,o.Uk)("Home Page");function gt(e,t,n,a,l,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(U.K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O.o,{align:"center",justify:"center",class:"container"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.D,{cols:"9"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z._,{elevation:"20",theme:"dark",class:"py-14"},{default:(0,o.w5)((()=>[ft,mt,ht,(0,o.Wm)(s,{to:"/",class:"text-decoration-none"},{default:(0,o.w5)((()=>[(0,o._)("div",wt,[(0,o.Wm)(r.T,{class:"bg-orange-lighten-2"},{default:(0,o.w5)((()=>[pt])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var bt={name:"ErrorPage"};const vt=(0,W.Z)(bt,[["render",gt],["__scopeId","data-v-4dc465bc"]]);var xt=vt,_t=(0,o.aZ)({name:"NotFoundPage",components:{ErrorPage:xt}});const yt=(0,W.Z)(_t,[["render",ct]]);var Wt=yt;const kt=[{path:"/",name:"home",component:te},{path:"/beer/:id",name:"show",component:dt},{path:"/:pathMatch(.*)*",name:"NotFound",component:Wt}],jt=(0,P.p7)({history:(0,P.PO)("/Beertification/"),routes:kt});var Pt=jt,Bt=(n(9773),n(9811)),Dt=(0,Bt.Rd)();async function Ut(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ut(),(0,a.ri)(j).use(Pt).use(Dt).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,r=0;r<a.length;r++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var l=Object.create(null);n.r(l);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(l,i),l}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.b896d42a.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="beertification:";n.l=function(a,o,l,i){if(e[a])e[a].push(o);else{var s,r;if(void 0!==l)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+l){s=u;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+l),s.src=a),e[a]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),r&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Beertification/"}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var l=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=l);var i=n.p+n.u(t),s=new Error,r=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",s.name="ChunkLoadError",s.type=l,s.request=i,o[1](s)}};n.l(i,r,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,i=a[0],s=a[1],r=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(r)var c=r(n)}for(t&&t(a);d<i.length;d++)l=i[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkbeertification"]=self["webpackChunkbeertification"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4875)}));a=n.O(a)})();
//# sourceMappingURL=app.f84793f1.js.map