import{R as g,V as p,_ as d,a as m,b as y,c as s,d as V}from"./RegisterDetails-65d02acf.js";import{A as h,y as C,r as T,P as S,a7 as x,K as v,M as a,J as n,N as l,a0 as e,X as o,z as c,a8 as i,a1 as f,a9 as N,aa as R}from"./index-2a6724f9.js";import{u as b}from"./index-95f8aba3.js";import{V as k,T as w}from"./VAvatar-17b64771.js";const q=h({__name:"Trade",setup(A){let u=b().params.address.toString();const _=C(()=>t.value?t.value.register:void 0),t=T(void 0);return S(()=>{x(u).then(r=>t.value=r)}),(r,B)=>(n(),v(k,null,{default:a(()=>[l(g,{address:_.value},null,8,["address"]),l(V,{class:"mt-8"},{default:a(()=>[l(p,null,{default:a(()=>[e("Trade address: "+o(c(u)),1),l(d,{type:"account",id:c(u)},null,8,["id"])]),_:1}),t.value?(n(),v(m,{key:0},{default:a(()=>[l(y,null,{default:a(()=>[l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Seller:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(c(i)(t.value.seller)),1),l(d,{type:"account",id:t.value.seller},null,8,["id"])]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Buyer:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(c(i)(t.value.buyer)),1),l(d,{type:"account",id:t.value.buyer},null,8,["id"])]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Status:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(c(w)[t.value.status]),1)]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Quantity:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(c(f)(t.value.quantity)),1)]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Payment Id:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(t.value.paymentId),1)]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Price:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(c(f)(t.value.price,4))+"%",1)]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("CodeHash:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(t.value.codehash?c(N)(t.value.codehash):"not found"),1)]),_:1}),l(s,{class:"v-col-4 v-col-lg-2"},{default:a(()=>[e("Allowed:")]),_:1}),l(s,{class:"v-col-8 v-col-lg-4"},{default:a(()=>[e(o(t.value.approvedInRegister?"Yes":"No"),1)]),_:1})]),_:1})]),_:1})):R("",!0)]),_:1})]),_:1}))}});export{q as default};
