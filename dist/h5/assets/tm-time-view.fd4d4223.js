var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{d as u,r as n,c as o,Q as s,m as d,k as i,az as m,o as f,a as c,w as y,u as h,n as v,e as g,f as p,F as x,j as S,g as w,K as b,i as k,aG as Y,aH as D,N as _,b as O,T as H,a0 as M,W as V,_ as j}from"./index-6b165856.js";import{u as N}from"./tm-app.d6cf2f93.js";import{i as U,d as C}from"./index.1a9a795c.js";import{a as I,i as A}from"./index.bac9302e.js";const B={modelValue:{type:[Number,String,Date],default:""},modelStr:{type:[String],default:""},defaultValue:{type:[Number,String,Date],default:""},disabledDate:{type:Array,default:()=>[]},format:{type:String,default:"YYYY/MM/DD HH:mm:ss"},immediateChange:{type:Boolean,default:!1},showDetail:{type:Object,default:()=>({year:!0,month:!0,day:!0,hour:!1,minute:!1,second:!1})},showSuffix:{type:Object,default:()=>({year:"年",month:"月",day:"日",hour:"时",minute:"分",second:"秒"})},start:{type:[Number,String,Date],default:"2008/01/01 00:00:00"},end:{type:[Number,String,Date],default:""},height:{type:Number,default:300}};var P=(e=>(e.year="year",e.month="month",e.day="date",e.hour="hour",e.minute="minute",e.second="second",e))(P||{});const q=C;function z(e=0,t=0){let a=[];for(let l=e=e>=0?e:1;l<=t;l++)a.push(l);return a}function E(e,t,a,l){let r=q(t),u=q(a),n=q(e),o={year:[],month:[],date:[],hour:[],minute:[],second:[]};function s(e){let t=[];function a(e,a){let l=0,o=0,s=n;n.isSameOrBefore(r,a)?(s=r,l=r.get(e),o=r.endOf(a).get(e),s.isSame(u,a)&&(o=u.get(e))):n.isSameOrAfter(u,a)?(s=u,l=u.startOf(a).get(e),o=u.get(e),s.isSame(r,a)&&(l=r.get(e))):(l=n.startOf(a).get(e),o=n.endOf(a).get(e)),t=z(l,o)}"year"==e?t=z(r.get("year"),u.get("year")):"month"==e?a(P.month,P.year):"date"==e?a(P.day,P.month):"hour"==e?a(P.hour,P.day):"minute"==e?a(P.minute,P.hour):"second"==e&&a(P.second,P.minute),o[e]=t}let d="";for(d in l)"day"==d&&(d="date"),s(d);return o}function F(e,t,a){const l=q(t);return[...[[P.year,a.year],[P.month,a.month],[P.day,a.day],[P.hour,a.hour],[P.minute,a.minute],[P.second,a.second]].filter((e=>e[1])).map((t=>{const a=t[0],r=e[a].findIndex((e=>e===l.get(a)));return-1===r?0:r})),0,0,0,0,0,0].slice(0,6)}function G(e,t,a){const l=[[P.year,a.year],[P.month,a.month],[P.day,a.day],[P.hour,a.hour],[P.minute,a.minute],[P.second,a.second]];function r(a){const r=l.filter((e=>e[1])).findIndex((e=>e[0]===a));return-1!==r?e[a][t[r]]:e[a][e[a].length-1]}let u=r(P.year),n=r(P.month),o=r(P.day),s=r(P.hour),d=r(P.minute),i=r(P.second);return q(u+"/"+(n+1)+"/"+o+" "+s+":"+d+":"+i).format("YYYY/MM/DD HH:mm:ss")}function K(e,t,a){return e=q(e).isValid()?q(e):q(),t=q(t),a=q(a),e.isSameOrBefore(t)?t.format("YYYY/MM/DD HH:mm:ss"):e.isSameOrAfter(a)?a.format("YYYY/MM/DD HH:mm:ss"):e.format("YYYY/MM/DD HH:mm:ss")}q.extend(I),q.extend(U),q.extend(A);const Q=j(u({__name:"tm-time-view",props:((e,u)=>{for(var n in u||(u={}))a.call(u,n)&&r(e,n,u[n]);if(t)for(var n of t(u))l.call(u,n)&&r(e,n,u[n]);return e})({},B),emits:["update:modelValue","update:modelStr","change"],setup(e,{emit:t}){var a;const l=e;null==(a=w())||a.proxy;const r=N(),u=C,j=n(u(K(l.defaultValue,l.start,l.end))),U=o((()=>j.value.format())),I=n(!0),A=o((()=>u(l.start).isValid()?u(l.start).format():u().subtract(3,"year").format())),B=o((()=>u(l.end).isValid()?u(l.end).format():u().add(1,"year").format())),P=o((()=>{var e,t,a,r,u,n,o,s,d,i,m,f;return{year:null==(t=null==(e=l.showDetail)?void 0:e.year)||t,month:null==(r=null==(a=l.showDetail)?void 0:a.month)||r,day:null==(n=null==(u=l.showDetail)?void 0:u.day)||n,hour:null!=(s=null==(o=l.showDetail)?void 0:o.hour)&&s,minute:null!=(i=null==(d=l.showDetail)?void 0:d.minute)&&i,second:null!=(f=null==(m=l.showDetail)?void 0:m.second)&&f}})),q=o((()=>{var e,t,a,r,u,n,o,s,d,i,m,f;return{year:null!=(t=null==(e=l.showSuffix)?void 0:e.year)?t:"年",month:null!=(r=null==(a=l.showSuffix)?void 0:a.month)?r:"月",hour:null!=(n=null==(u=l.showSuffix)?void 0:u.hour)?n:"时",minute:null!=(s=null==(o=l.showSuffix)?void 0:o.minute)?s:"分",second:null!=(i=null==(d=l.showSuffix)?void 0:d.second)?i:"秒",date:null!=(f=null==(m=l.showSuffix)?void 0:m.day)?f:"日"}})),z=o((()=>r.tmStore.dark));let Q=n([0,0,0,0,0,0]);const T=n({year:[],month:[],date:[],hour:[],minute:[],second:[]});n(0),o((()=>(b(l.height)-50)/2));const W=o((()=>z.value?"background-image:linear-gradient(rgba(17, 17, 17, 1.0),rgba(106, 106, 106, 0.2)),linear-gradient(rgba(106, 106, 106, 0.2),rgba(17, 17, 17, 1.0))":"background-image:linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.6)),linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.95))"));function J(e){let a=G(T.value,e.detail.value,P.value);T.value=E(a,A.value,B.value,P.value),j.value=u(a),i((()=>{Q.value=e.detail.value,a=G(T.value,e.detail.value,P.value),j.value=u(a),t("update:modelValue",j.value.format("YYYY/MM/DD HH:mm:ss")),t("update:modelStr",j.value.format(l.format)),t("change",j.value.format(l.format))}))}function L(){i((function(){}))}return T.value=E(U.value,A.value,B.value,P.value),s((()=>l.modelValue),(()=>{if(!u(l.modelValue).isValid())return;let e=u(K(l.modelValue,l.start,l.end));u(e).isSame(j.value)||(j.value=e,t("update:modelStr",j.value.format(l.format)),T.value=E(e,A.value,B.value,P.value),Q.value=F(T.value,j.value,P.value))})),d((()=>{L(),i((()=>{t("update:modelValue",j.value.format("YYYY/MM/DD HH:mm:ss")),t("update:modelStr",j.value.format(l.format)),Q.value=F(T.value,j.value,P.value)}))})),m((()=>L())),(e,t)=>{const a=V,u=k,n=Y,o=D;return f(),c(u,{class:"flex relative flex-col",style:v({height:l.height+"rpx"})},{default:y((()=>[I.value?(f(),c(o,{key:0,value:h(Q),onChange:J,style:v({height:l.height+"rpx"}),"mask-style":h(W),immediateChange:l.immediateChange,"indicator-style":"height:50px"},{default:y((()=>[h(P).year?(f(),c(n,{key:0},{default:y((()=>[(f(!0),g(x,null,p(T.value.year,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[0]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+h(q).year),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0),h(P).month?(f(),c(n,{key:1},{default:y((()=>[(f(!0),g(x,null,p(T.value.month,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[1]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+1+h(q).month),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0),h(P).day?(f(),c(n,{key:2},{default:y((()=>[(f(!0),g(x,null,p(T.value.date,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[2]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+h(q).date),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0),h(P).hour?(f(),c(n,{key:3},{default:y((()=>[(f(!0),g(x,null,p(T.value.hour,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[3]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+h(q).hour),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0),h(P).minute?(f(),c(n,{key:4},{default:y((()=>[(f(!0),g(x,null,p(T.value.minute,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[4]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+h(q).minute),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0),h(P).second?(f(),c(n,{key:5},{default:y((()=>[(f(!0),g(x,null,p(T.value.second,((e,t)=>(f(),c(u,{key:t,class:_(["flex itemcel flex-row flex-row-center-center",[h(Q)[5]==t?"":"UnitemSelected"]])},{default:y((()=>[O(a,{style:v({color:h(r).tmStore.dark?"white":"black"})},{default:y((()=>[H(M(e+h(q).second),1)])),_:2},1032,["style"])])),_:2},1032,["class"])))),128))])),_:1})):S("v-if",!0)])),_:1},8,["value","style","mask-style","immediateChange"])):S("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-698f096a"]]);export{Q as t};