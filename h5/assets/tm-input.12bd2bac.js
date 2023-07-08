import{d as e,r as l,I as o,c as t,R as a,o as r,a as n,w as i,b as s,O as d,u,n as f,k as c,N as p,V as y,g as h,L as m,j as g,a9 as x,av as b,_ as v}from"./index-5c06cf16.js";import{t as S}from"./tm-sheet.2873fe67.js";import{t as w}from"./tm-icon.5716c798.js";import{t as k}from"./tm-text.fdd4f0a8.js";import{c as C,u as _,f as z,g as B,d as $,h as N}from"./tm-app.20954b06.js";import{t as H}from"./tm-button.5fc2eaaa.js";const j=v(e({__name:"tm-input",props:{...C,followTheme:{type:[Boolean,String],default:!0},color:{type:String,default:"grey-4"},searchFontColor:{type:String,default:""},prefixColor:{type:String,default:""},suffixColor:{type:String,default:""},focusColor:{type:String,default:"primary"},fontColor:{type:String,default:""},text:{type:Boolean,default:!0},outlined:{type:Boolean,default:!1},border:{type:Number,default:0},transprent:{type:Boolean,default:!1},round:{type:Number,default:3},shadow:{type:Number,default:0},margin:{type:Array,default:()=>[0,0]},padding:{type:Array,default:()=>[0,0]},height:{type:Number,default:64},prefix:{type:String,default:""},prefixLabel:{type:String,default:""},suffix:{type:String,default:""},suffixLabel:{type:String,default:""},fontSize:{type:Number,default:30},search:{type:String,default:""},searchLabel:{type:String,default:""},showClear:{type:Boolean,default:!1},password:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"请输入内容"},errorLabel:{type:String,default:"请输入内容"},align:{type:String,default:"left"},modelValue:{type:[String,Number],default:""},inputPadding:{type:Array,default:()=>[24,0]},showCharNumber:{type:Boolean,default:!1},maxlength:{type:Number,default:-1},type:{type:String,default:"text"},cursorSpacing:{type:Number,default:24},confirmType:{type:String,default:"done"},confirmHold:{type:Boolean,default:!1},autoBlur:{type:Boolean,default:!0},holdKeyboard:{type:Boolean,default:!1},adjustPosition:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},cursor:{type:Number,default:0},showConfirmBar:{type:Boolean,default:!0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},disableDefaultPadding:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},placeholderStyle:{type:String,default:""},autoHeight:{type:Boolean,default:!1},readyOnly:{type:Boolean,default:!1},layoutAlign:{type:String,default:"flex-row-top-start"}},emits:["focus","blur","confirm","input","update:modelValue","clear","search","keyboardheightchange","click"],setup(e,{emit:v}){var C;const j=e,P=_(),K=(null==(C=h())?void 0:C.proxy)??null;let I=null==K?void 0:K.$parent;for(;I&&"tmFormComnameFormItem"!=(null==I?void 0:I.tmFormComnameFormItem)&&I;)I=(null==I?void 0:I.$parent)??void 0;const T=l(!1);T.value="android"==o().osName;const E=t((()=>j.height)),L=t((()=>""!==j.search||""!==j.searchLabel?[4,0]:j.inputPadding));let F=NaN;function V(e,l=500,o=!1){if(isNaN(F)||clearTimeout(F),o){var t=!F;F=setTimeout((()=>{F=NaN}),l),t&&"function"==typeof e&&e()}else F=setTimeout((()=>{"function"==typeof e&&e(),F=NaN}),l)}const O=t((()=>({...j,fontSize_px:m(j.fontSize)})));j.modelValue;const D=t((()=>P.tmStore));t((()=>z(j))),t((()=>B(j)));const A=t((()=>$(j,D.value))),J=l(!1),R=l(j.focus||!1);a((()=>j.focus),(()=>{R.value=j.focus}));const q=t((()=>{let e=j.color;return R.value&&(e=j.followTheme&&P.tmStore.color?P.tmStore.color:j.focusColor),J.value&&(e="red"),e})),G=t((()=>{const e={...j,color:q.value};return N(e,A.value,D.value)})),M=l(O.value.password),Q=t((()=>j.password));l(j.errorLabel);const U=l(j.modelValue),W=t((()=>String(U.value).split("").length));function X(){v("search",U.value)}function Y(){U.value="",v("update:modelValue",""),v("clear")}function Z(){M.value=!M.value}function ee(){R.value=!0,v("focus")}function le(e){R.value=!1,v("blur",e)}function oe(){v("confirm",U.value)}function te(e){return U.value=e.detail.value,v("input",e.detail.value),v("update:modelValue",e.detail.value),e.detail.value}function ae(e,l){V("ali"!=l?()=>v("click",e):()=>{v("click",e)},200,!0)}return a((()=>j.modelValue),(()=>U.value=j.modelValue)),(e,l)=>{const o=g,t=x,a=b;return r(),n(S,{eventPenetrationEnabled:!0,transprent:!0,margin:j.margin,padding:j.padding},{default:i((()=>[s(S,{transprent:j.transprent,round:j.round,"no-level":"",margin:[0,0],padding:u(L),border:j.border,text:j.text,color:u(q),outlined:j.outlined,shadow:j.shadow,linear:j.linear,linearDeep:j.linearDeep,_style:"transition:border 0.24s"},{default:i((()=>[s(o,{class:d(["flex flex-row relative",["textarea"==u(O).type?u(O).layoutAlign:"flex-row-center-start"]]),onClick:l[7]||(l[7]=e=>ae(e,"")),style:f([u(O).autoHeight&&"textarea"==u(O).type?{}:{height:`${u(E)}rpx`}])},{default:i((()=>[u(O).search||u(O).searchLabel?(r(),n(o,{key:0,class:"px-9"})):c("v-if",!0),p(e.$slots,"left",{},void 0,!0),u(O).prefix?(r(),n(o,{key:1,class:"pr-16"},{default:i((()=>[s(w,{_style:"transition:color 0.24s","font-size":u(O).fontSize,color:j.prefixColor,name:u(O).prefix},null,8,["font-size","color","name"])])),_:1})):c("v-if",!0),u(O).prefixLabel?(r(),n(o,{key:2,class:"pr-24"},{default:i((()=>[s(k,{_style:"transition:color 0.24s","font-size":u(O).fontSize,color:j.prefixColor,label:u(O).prefixLabel},null,8,["font-size","color","label"])])),_:1})):c("v-if",!0),T.value?c("v-if",!0):(r(),n(o,{key:3,onClick:l[2]||(l[2]=e=>ae(e,"ali")),class:"flex-1 relative flex-row flex",style:f([{width:"0px"}])},{default:i((()=>[c(' <view @click.stop="emits(\'click\',$event)" class=" l-0 t-0 flex-1 " :style="{height: `${_height}rpx`,background:\'red\'}"></view> '),"textarea"!=u(O).type?(r(),n(t,{key:0,class:"flex-1",userInteractionEnabled:!1,value:U.value,focus:u(O).focus,onFocus:ee,onBlur:le,onConfirm:oe,onInput:te,onKeyboardheightchange:l[0]||(l[0]=e=>v("keyboardheightchange",e)),password:M.value,maxlength:u(O).maxlength,disabled:u(O).disabled,cursorSpacing:u(O).cursorSpacing,confirmType:u(O).confirmType,confirmHold:u(O).confirmHold,autoBlur:u(O).autoBlur,holdKeyboard:u(O).holdKeyboard,adjustPosition:u(O).adjustPosition,readonly:u(O).readyOnly,type:u(O).type,placeholder:u(O).placeholder,style:f([{height:`${u(E)}rpx`,color:u(O).fontColor?u(O).fontColor:u(G).textColor,"text-align":j.align,fontSize:`${u(O).fontSize_px}px`,transition:"color 0.24s"}]),"placeholder-style":`fontSize:${u(O).fontSize_px}px;${j.placeholderStyle}`,"ready-only":u(O).readyOnly},null,8,["value","focus","password","maxlength","disabled","cursorSpacing","confirmType","confirmHold","autoBlur","holdKeyboard","adjustPosition","readonly","type","placeholder","style","placeholder-style","ready-only"])):c("v-if",!0),"textarea"==u(O).type?(r(),n(a,{key:1,userInteractionEnabled:!1,value:U.value,focus:u(O).focus,onFocus:ee,onBlur:le,onConfirm:oe,onInput:te,onKeyboardheightchange:l[1]||(l[1]=e=>v("keyboardheightchange",e)),maxlength:u(O).maxlength,disabled:u(O).disabled,placeholder:u(O).placeholder,cursorSpacing:u(O).cursorSpacing,confirmHold:u(O).confirmHold,autoBlur:u(O).autoBlur,holdKeyboard:u(O).holdKeyboard,cursor:u(O).cursor,"show-confirm-bar":u(O).showConfirmBar,selectionStart:u(O).selectionStart,selectionEnd:u(O).selectionEnd,"disable-default-padding":u(O).disableDefaultPadding,fixed:u(O).fixed,autoHeight:u(O).autoHeight,readonly:u(O).readyOnly,adjustPosition:u(O).adjustPosition,type:u(O).type,style:f([u(O).autoHeight?{}:{height:`${u(E)}rpx`},{width:"auto","word-break":"break-word",color:u(O).fontColor?u(O).fontColor:u(G).textColor,"text-align":j.align,fontSize:`${u(O).fontSize_px}px`,transition:"color 0.24s"}]),class:"wrap flex-1","placeholder-style":`fontSize:${u(O).fontSize_px}px;${j.placeholderStyle}`,"ready-only":u(O).readyOnly},null,8,["value","focus","maxlength","disabled","placeholder","cursorSpacing","confirmHold","autoBlur","holdKeyboard","cursor","show-confirm-bar","selectionStart","selectionEnd","disable-default-padding","fixed","autoHeight","readonly","adjustPosition","type","style","placeholder-style","ready-only"])):c("v-if",!0)])),_:1})),T.value?(r(),n(o,{key:4,class:"flex-1 relative flex-row flex",style:f([{width:"0px"}])},{default:i((()=>[c(' <view @click.stop="emits(\'click\',$event)" class=" l-0 t-0 flex-1 " :style="{height: `${_height}rpx`,background:\'red\'}"></view> '),"textarea"!=u(O).type?(r(),n(t,{key:0,class:"flex-1",onClick:l[3]||(l[3]=y((e=>v("click",e)),["stop"])),userInteractionEnabled:!1,value:U.value,focus:u(O).focus,onFocus:ee,onBlur:le,onConfirm:oe,onInput:te,onKeyboardheightchange:l[4]||(l[4]=e=>v("keyboardheightchange",e)),password:M.value,disabled:u(O).disabled,cursorSpacing:u(O).cursorSpacing,confirmType:u(O).confirmType,confirmHold:u(O).confirmHold,autoBlur:u(O).autoBlur,holdKeyboard:u(O).holdKeyboard,adjustPosition:u(O).adjustPosition,maxlength:u(O).maxlength,type:u(O).type,readonly:u(O).readyOnly,placeholder:u(O).placeholder,style:f([{height:`${u(E)}rpx`,color:u(O).fontColor?u(O).fontColor:u(G).textColor,"text-align":j.align,fontSize:`${u(O).fontSize_px}px`}]),"placeholder-style":`fontSize:${u(O).fontSize_px}px;${j.placeholderStyle}`},null,8,["value","focus","password","disabled","cursorSpacing","confirmType","confirmHold","autoBlur","holdKeyboard","adjustPosition","maxlength","type","readonly","placeholder","style","placeholder-style"])):c("v-if",!0),"textarea"==u(O).type?(r(),n(a,{key:1,onClick:l[5]||(l[5]=y((e=>v("click",e)),["stop"])),userInteractionEnabled:!1,value:U.value,focus:u(O).focus,onFocus:ee,onBlur:le,onConfirm:oe,onInput:te,onKeyboardheightchange:l[6]||(l[6]=e=>v("keyboardheightchange",e)),disabled:u(O).disabled,placeholder:u(O).placeholder,cursorSpacing:u(O).cursorSpacing,confirmHold:u(O).confirmHold,autoBlur:u(O).autoBlur,holdKeyboard:u(O).holdKeyboard,adjustPosition:u(O).adjustPosition,maxlength:u(O).maxlength,autoHeight:u(O).autoHeight,cursor:u(O).cursor,"show-confirm-bar":u(O).showConfirmBar,selectionStart:u(O).selectionStart,selectionEnd:u(O).selectionEnd,"disable-default-padding":u(O).disableDefaultPadding,readonly:u(O).readyOnly,fixed:u(O).fixed,type:u(O).type,style:f([u(O).autoHeight?{}:{height:`${u(E)}rpx`},{width:"auto","word-break":"break-word",color:u(O).fontColor?u(O).fontColor:u(G).textColor,"text-align":j.align,fontSize:`${u(O).fontSize_px}px`}]),class:"wrap flex-1","placeholder-style":`fontSize:${u(O).fontSize_px}px;${j.placeholderStyle}`},null,8,["value","focus","disabled","placeholder","cursorSpacing","confirmHold","autoBlur","holdKeyboard","adjustPosition","maxlength","autoHeight","cursor","show-confirm-bar","selectionStart","selectionEnd","disable-default-padding","readonly","fixed","type","style","placeholder-style"])):c("v-if",!0)])),_:1})):c("v-if",!0),u(O).showClear&&u(W)>0?(r(),n(o,{key:5,onClick:Y,class:"pl-16"},{default:i((()=>[s(w,{_style:"transition:color 0.24s",userInteractionEnabled:!1,"font-size":u(O).fontSize,name:"tmicon-times-circle-fill"},null,8,["font-size"])])),_:1})):c("v-if",!0),J.value?(r(),n(o,{key:6,class:"pl-16"},{default:i((()=>[s(w,{_style:"transition:color 0.24s","font-size":u(O).fontSize,name:"tmicon-exclamation-circle"},null,8,["font-size"])])),_:1})):c("v-if",!0),u(O).suffix?(r(),n(o,{key:7,class:"pl-16"},{default:i((()=>[s(w,{_style:"transition:color 0.24s","font-size":u(O).fontSize,color:j.suffixColor,name:u(O).suffix},null,8,["font-size","color","name"])])),_:1})):c("v-if",!0),u(O).suffixLabel?(r(),n(o,{key:8,class:"pl-16"},{default:i((()=>[s(k,{_style:"transition:color 0.24s","font-size":u(O).fontSize,color:j.suffixColor,label:u(O).suffixLabel},null,8,["font-size","color","label"])])),_:1})):c("v-if",!0),u(Q)?(r(),n(o,{key:9,onClick:Z,class:"pl-16"},{default:i((()=>[c(" tmicon-eyeslash-fill "),s(w,{_style:"transition:color 0.24s",userInteractionEnabled:!1,"font-size":u(O).fontSize,name:M.value?"tmicon-eyeslash-fill":"tmicon-eye-fill"},null,8,["font-size","name"])])),_:1})):c("v-if",!0),u(O).showCharNumber&&u(W)>0&&"textarea"!=u(O).type?(r(),n(o,{key:10,class:"pl-16 flex-row flex"},{default:i((()=>[s(k,{_style:"transition:color 0.24s",label:u(W)},null,8,["label"]),u(O).maxlength>0?(r(),n(k,{key:0,_style:"transition:color 0.24s",label:"/"+u(O).maxlength},null,8,["label"])):c("v-if",!0)])),_:1})):c("v-if",!0),c(" 原因是支付宝小程序自带了计数器。会导致重叠。 "),u(O).showCharNumber&&u(W)>0&&"textarea"==u(O).type?(r(),n(o,{key:11,class:d(["pl-16 flex-row flex absolute r-0",["b-12"]])},{default:i((()=>[s(k,{_style:"transition:color 0.24s",label:u(W)},null,8,["label"]),u(O).maxlength>0?(r(),n(k,{key:0,_style:"transition:color 0.24s",label:"/"+u(O).maxlength},null,8,["label"])):c("v-if",!0)])),_:1})):c("v-if",!0),p(e.$slots,"right",{},(()=>[u(O).search||u(O).searchLabel?(r(),n(o,{key:0,class:"pl-16"},{default:i((()=>[s(H,{followTheme:j.followTheme,onClick:X,color:j.focusColor,"font-size":24,height:u(E)-11,padding:[16,0],block:"",margin:[0,0],fontColor:j.searchFontColor,icon:u(O).search,label:u(O).searchLabel},null,8,["followTheme","color","height","fontColor","icon","label"])])),_:1})):c("v-if",!0)]),!0)])),_:3},8,["class","style"])])),_:3},8,["transprent","round","padding","border","text","color","outlined","shadow","linear","linearDeep"])])),_:3},8,["margin","padding"])}}}),[["__scopeId","data-v-0d07ec49"]]);export{j as t};