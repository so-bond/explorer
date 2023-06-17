import{a9 as P,aa as A,ab as R,y as k,B as U,A as M,H as _,P as I,ac as pe,J as G,K as s,a4 as c,ad as _e,f as ke,ae as be,af as L,M as l,ag as N,ah as h,ai as K,aj as x,ak as Ce,al as Se,am as he,an as Ae,ao as Ve,ap as Ie,aq as xe,ar as Pe,as as Re,at as Le,au as Ne,av as we,aw as $e,ax as De,ay as Ee,az as je,aA as Te,aB as Be,aC as Oe,aD as Ue,aE as Me,aF as Ge,aG as Ke,aH as Fe,aI as ze,aJ as He,aK as Je,r as j,l as We,O as Xe,W as d,z as f,$ as S,aL as p,aM as qe,aN as Ye,X as Qe,a2 as Ze}from"./index-2e40c82e.js";import{a as T,R as ea}from"./VAvatar-bfbdc13b.js";import{b as V}from"./index-ce508271.js";const F=(()=>V.reduce((e,i)=>(e[i]={type:[Boolean,String,Number],default:!1},e),{}))(),z=(()=>V.reduce((e,i)=>{const a="offset"+P(i);return e[a]={type:[String,Number],default:null},e},{}))(),H=(()=>V.reduce((e,i)=>{const a="order"+P(i);return e[a]={type:[String,Number],default:null},e},{}))(),B={col:Object.keys(F),offset:Object.keys(z),order:Object.keys(H)};function aa(e,i,a){let t=e;if(!(a==null||a===!1)){if(i){const o=i.replace(e,"");t+=`-${o}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const ta=["auto","start","end","center","baseline","stretch"],u=A()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...F,offset:{type:[String,Number],default:null},...z,order:{type:[String,Number],default:null},...H,alignSelf:{type:String,default:null,validator:e=>ta.includes(e)},...R()},setup(e,i){let{slots:a}=i;const t=k(()=>{const o=[];let n;for(n in B)B[n].forEach(v=>{const g=e[v],m=aa(n,v,g);m&&o.push(m)});const r=o.some(v=>v.startsWith("v-col-"));return o.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return U(e.tag,{class:t.value},(o=a.default)==null?void 0:o.call(a))}}}),w=["start","end","center"],J=["space-between","space-around","space-evenly"];function $(e,i){return V.reduce((a,t)=>{const o=e+P(t);return a[o]=i(),a},{})}const la=[...w,"baseline","stretch"],W=e=>la.includes(e),X=$("align",()=>({type:String,default:null,validator:W})),na=[...w,...J],q=e=>na.includes(e),Y=$("justify",()=>({type:String,default:null,validator:q})),sa=[...w,...J,"stretch"],Q=e=>sa.includes(e),Z=$("alignContent",()=>({type:String,default:null,validator:Q})),O={align:Object.keys(X),justify:Object.keys(Y),alignContent:Object.keys(Z)},ca={align:"align",justify:"justify",alignContent:"align-content"};function ia(e,i,a){let t=ca[e];if(a!=null){if(i){const o=i.replace(e,"");t+=`-${o}`}return t+=`-${a}`,t.toLowerCase()}}const oa=A()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:W},...X,justify:{type:String,default:null,validator:q},...Y,alignContent:{type:String,default:null,validator:Q},...Z,...R()},setup(e,i){let{slots:a}=i;const t=k(()=>{const o=[];let n;for(n in O)O[n].forEach(r=>{const v=e[r],g=ia(n,r,v);g&&o.push(g)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return U(e.tag,{class:["v-row",t.value]},(o=a.default)==null?void 0:o.call(a))}}}),ua=["href"],da=M({__name:"ExplorerRedirect",props:{id:{type:[String,Number]},type:{type:String,required:!0,validator(e){return["block","tx","token","account"].includes(e)}}},setup(e){const i=e;function a(){const n=window;if(n.AppConfig&&n.AppConfig.explorerUrl)return n.AppConfig.explorerUrl}const t=k(()=>{let n=a();if(!n)return"./";for(;n.endsWith("/");)n=n.slice(0,n.length-1);return new URL(`${i.type}/${i.id}`,`${n}/`).href});function o(n){window.open(n,"POCR-EXPLORER")}return(n,r)=>(_(),I("span",null,[n.$slots.default?(_(),I("a",{key:0,href:t.value,target:"POCR-EXPLORER"},[pe(n.$slots,"default")],8,ua)):(_(),G(_e,{key:1,small:"",color:"blue",onClick:r[0]||(r[0]=v=>o(t.value))},{default:s(()=>[c("mdi-open-in-new")]),_:1}))]))}});const ra=ke({name:"VCardActions",setup(e,i){let{slots:a}=i;return be({VBtn:{variant:"text"}}),L(()=>{var t;return l("div",{class:"v-card-actions"},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),ee=N("v-card-subtitle"),va=N("v-card-title"),fa=A()({name:"VCardItem",props:{appendAvatar:String,appendIcon:h,prependAvatar:String,prependIcon:h,subtitle:String,title:String,...K()},setup(e,i){let{slots:a}=i;return L(()=>{var m;const t=!!(e.prependAvatar||e.prependIcon),o=!!(t||a.prepend),n=!!(e.appendAvatar||e.appendIcon),r=!!(n||a.append),v=!!(e.title||a.title),g=!!(e.subtitle||a.subtitle);return l("div",{class:"v-card-item"},[o&&l("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?l(x,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&l(T,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[v&&l(va,{key:"title"},{default:()=>{var y;return[((y=a.title)==null?void 0:y.call(a))??e.title]}}),g&&l(ee,{key:"subtitle"},{default:()=>{var y;return[((y=a.subtitle)==null?void 0:y.call(a))??e.subtitle]}}),(m=a.default)==null?void 0:m.call(a)]),r&&l("div",{key:"append",class:"v-card-item__append"},[a.append?l(x,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):n&&l(T,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),ae=N("v-card-text"),ga=A()({name:"VCard",directives:{Ripple:Ce},props:{appendAvatar:String,appendIcon:h,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:h,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Se(),...he(),...K(),...Ae(),...Ve(),...Ie(),...xe(),...Pe(),...Re(),...Le(),...R(),...Ne({variant:"elevated"})},setup(e,i){let{attrs:a,slots:t}=i;const{themeClasses:o}=we(e),{borderClasses:n}=$e(e),{colorClasses:r,colorStyles:v,variantClasses:g}=De(e),{densityClasses:m}=Ee(e),{dimensionStyles:y}=je(e),{elevationClasses:te}=Te(e),{loaderClasses:le}=Be(e),{locationStyles:ne}=Oe(e),{positionClasses:se}=Ue(e),{roundedClasses:ce}=Me(e),b=Ge(e,a),ie=k(()=>e.link!==!1&&b.isLink.value),C=k(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return L(()=>{const oe=ie.value?"a":e.tag,ue=!!(t.title||e.title),de=!!(t.subtitle||e.subtitle),re=ue||de,ve=!!(t.append||e.appendAvatar||e.appendIcon),fe=!!(t.prepend||e.prependAvatar||e.prependIcon),ge=!!(t.image||e.image),me=re||fe||ve,ye=!!(t.text||e.text);return Ke(l(oe,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},o.value,n.value,r.value,m.value,te.value,le.value,se.value,ce.value,g.value],style:[v.value,y.value,ne.value],href:b.href.value,onClick:C.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var D;return[ge&&l("div",{key:"image",class:"v-card__image"},[t.image?l(x,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(ze,{key:"image-img",cover:!0,src:e.image},null)]),l(He,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),me&&l(fa,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),ye&&l(ae,{key:"text"},{default:()=>{var E;return[((E=t.text)==null?void 0:E.call(t))??e.text]}}),(D=t.default)==null?void 0:D.call(t),t.actions&&l(ra,null,{default:t.actions}),Je(C.value,"v-card")]}}),[[Fe("ripple"),C.value&&e.ripple]])}),{}}}),ma={key:1},ya=M({__name:"RegisterDetails",props:{address:String},setup(e){const i=e,a=j(void 0),t=j(""),o=async n=>{t.value="";try{n?a.value=await Qe(n):(a.value=void 0,t.value="No register selected")}catch(r){console.log("Exception when loading the register",r),a.value=void 0,t.value=r.message}};return We(()=>i.address,async n=>{await o(n)}),Xe(()=>{o(i.address)}),(n,r)=>a.value?(_(),G(ga,{key:0},{default:s(()=>[l(ee,null,{default:s(()=>[c("Register address: "+d(e.address),1),l(da,{type:"token",id:e.address},null,8,["id"])]),_:1}),l(ae,null,{default:s(()=>[l(oa,null,{default:s(()=>[l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Name:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(a.value.name),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("ISIN:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(a.value.isin),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Units:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(S)(a.value.expectedSupply))+" x "+d(f(S)(a.value.unitValue))+" "+d(a.value.currency),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Supply expected:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(S)(a.value.expectedSupply*a.value.unitValue))+" "+d(a.value.currency),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Coupon rate:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(a.value.couponRate)+" % p.a.",1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Current supply:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(S)(a.value.currentSupply*a.value.unitValue))+" "+d(a.value.currency),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Status:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(ea)[a.value.status]),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Creation:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(p)(a.value.creationDate)),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Issuance:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(p)(a.value.issuanceDate)),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Maturity:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(p)(a.value.maturityDate)),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Coupons:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(a.value.couponDates.map(v=>f(p)(v)).join(" | ")),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Record time:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(qe)(a.value.cutOffTime)),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Next coupon date:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(p)(a.value.currentCouponDate)),1)]),_:1}),l(u,{class:"v-col-4 v-col-lg-2"},{default:s(()=>[c("Next snapshot at:")]),_:1}),l(u,{class:"v-col-8 v-col-lg-4"},{default:s(()=>[c(d(f(Ye)(a.value.currentSnapshotTimestamp)),1)]),_:1})]),_:1})]),_:1})]),_:1})):(_(),I("div",ma,d(t.value),1))}});const ba=Ze(ya,[["__scopeId","data-v-73d35054"]]);export{ba as R,ee as V,da as _,ae as a,oa as b,u as c,ga as d};
