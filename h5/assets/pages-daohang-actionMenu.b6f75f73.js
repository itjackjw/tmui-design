import{d as e,r as t,P as l,c as o,p as a,ad as n,R as s,o as u,a as r,w as i,N as d,b as m,V as p,e as c,f,u as v,F as h,n as y,L as b,j as g}from"./index-5c06cf16.js";import{c as _,u as w,t as C}from"./tm-app.20954b06.js";import{t as x}from"./tm-sheet.2873fe67.js";import{t as j}from"./tm-text.fdd4f0a8.js";import{t as k}from"./tm-drawer.5aba0891.js";import{t as V}from"./tm-button.5fc2eaaa.js";import{_ as S}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import"./tm-translate.4fbb7927.js";import"./tm-icon.5716c798.js";import"./tm-overlay.3ea1101a.js";const T=e({__name:"tm-action-menu",props:{list:{type:Array,default:()=>[],required:!0},rangKey:{type:String,default:"text"},modelValue:{type:Boolean,default:!1},color:{type:String,default:"white"},activeFontColor:{type:String,default:"primary"},active:{type:Number,default:NaN},allowClose:{type:Boolean,default:!0},duration:{type:Number,default:250},followTheme:_.followTheme},emits:["update:modelValue","update:active","change","cancel","open-data"],setup(e,{emit:_}){const C=e,S=w(),T=t(null),N=l("tmuiSysInfo",o((()=>({bottom:0,height:750,width:b(750),top:0,isCustomHeader:!1,sysinfo:null})))),z=t((null==C?void 0:C.modelValue)??!1),F=t(C.active),K=o((()=>{let e=[];return e=((null==C?void 0:C.list)??[]).map((e=>{let t={};return"string"==typeof e||"number"==typeof e?(t.text=e,t.disabled=!1):"object"==typeof e&&(t.text=e[C.rangKey],t={...t,...e}),t})),e})),O=o((()=>80*(K.value.length+1)+140+N.value.bottom)),B=o((()=>C.color)),I=o((()=>C.followTheme?S.tmStore.color:C.activeFontColor));function L(){var e;_("cancel"),null==(e=T.value)||e.close()}function P(){_("update:modelValue",!1)}function U(){_("update:modelValue",!0)}function q(e){_("open-data",e)}return a((()=>{n((()=>{z.value=C.modelValue}))})),s((()=>C.active),(()=>{F.value=C.active})),(e,t)=>{const l=g;return u(),r(l,{onClick:t[2]||(t[2]=e=>z.value=!z.value)},{default:i((()=>[d(e.$slots,"default"),m(k,{ref_key:"drawer",ref:T,"disabble-scroll":!0,onClose:P,onOpen:U,duration:C.duration,height:v(O),"onUpdate:show":t[1]||(t[1]=e=>z.value=e),show:z.value,transprent:!0,"hide-header":!0},{default:i((()=>[m(l,{onClick:t[0]||(t[0]=p((()=>{}),["stop"])),class:"flex flex-col"},{default:i((()=>[m(l,{style:{height:"24rpx"}}),m(x,{round:5,margin:[32,0,32,16]},{default:i((()=>[m(l,{class:"flex flex-col round-2 overflow mx-32"},{default:i((()=>[m(j,{_class:"opacity-5 text-align-center","font-size":24,label:"请选择"}),(u(!0),c(h,null,f(v(K),((e,t)=>(u(),r(V,{onContact:q,onLaunchapp:q,onOpensetting:q,onGetphonenumber:q,onChooseavatar:q,"open-type":(null==e?void 0:e.openType)??"",transprent:!0,fontColor:F.value==t?v(I):"",followTheme:!1,disabled:e.disabled,onClick:l=>function(e,t){var l;_("change",e,t),F.value=t,_("update:active",t),C.allowClose&&(null==(l=T.value)||l.close())}(e,t),key:t,label:e.text,"font-size":28,margin:[0,0],color:"white",block:"",shadow:0,round:-1},null,8,["open-type","fontColor","disabled","onClick","label"])))),128))])),_:1})])),_:1}),m(V,{round:5,fontColor:v(I),followTheme:!1,onClick:L,label:"取消","font-size":28,margin:[32,0],color:v(B),block:"",shadow:0},null,8,["fontColor","color"]),m(l,{style:y({height:v(N).bottom+"px"})},null,8,["style"])])),_:1})])),_:1},8,["duration","height","show"])])),_:3})}}}),N=e({__name:"actionMenu",setup(e){const l=t(!1),o=t([{text:"苹果",id:"1"},{text:"菠萝",id:"2"},{text:"香蕉",id:"3"}]);function a(e,t){console.log("当前选中项目:",e,"索引:",t)}return(e,t)=>(u(),r(C,null,{default:i((()=>[m(x,null,{default:i((()=>[m(j,{fontSize:24,_class:"font-weight-b",label:"基础属性,更多玩法请前往文档。"}),m(S),m(V,{onClick:t[0]||(t[0]=e=>l.value=!0),label:"显示操作栏",block:""})])),_:1}),m(T,{onChange:a,modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),list:o.value},null,8,["modelValue","list"])])),_:1}))}});export{N as default};