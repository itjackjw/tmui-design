import{d as e,r as l,K as t,o as a,a as o,w as r,b as u}from"./index-5c06cf16.js";import{t as s}from"./tm-app.20954b06.js";import{t as n}from"./tm-sheet.2873fe67.js";import{t as i}from"./tm-text.fdd4f0a8.js";import{t as f}from"./tm-stepper.ba9614f9.js";import{_ as m}from"./tm-divider.vue_vue_type_script_setup_true_lang.0bd9a5e3.js";import"./tm-icon.5716c798.js";const d=e({__name:"stepper",setup(e){const d=l(0),p=t({a:1});function c(){return new Promise((e=>{setTimeout((function(){e(!0)}),1e3)}))}function _(e){console.log(e)}return setTimeout((()=>{p.a=100}),1e3),(e,l)=>(a(),o(s,null,{default:r((()=>[u(n,null,{default:r((()=>[u(i,{"font-size":24,_class:"font-weight-b",label:"基础示例,更多见文档"}),u(m),u(f,{onChange:_,modelValue:p.a,"onUpdate:modelValue":l[0]||(l[0]=e=>p.a=e),defaultValue:20},null,8,["modelValue"])])),_:1}),u(n,null,{default:r((()=>[u(i,{"font-size":24,_class:"font-weight-b",label:"一些其它常见属性"}),u(m),u(f,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e),color:"primary",bgColor:"primary",circular:"",defaultValue:20},null,8,["modelValue"])])),_:1}),u(n,null,{default:r((()=>[u(i,{"font-size":24,_class:"font-weight-b",label:"步幅3"}),u(m),u(f,{color:"red",bgColor:"red",step:3,circular:"",defaultValue:0}),u(i,{_class:"pt-24 font-weight-b","font-size":24,label:"小数点"}),u(m),u(f,{round:0,bgColor:"green",color:"green",fixed:1,defaultValue:.3},null,8,["defaultValue"]),u(i,{_class:"pt-24 font-weight-b","font-size":24,label:"最大值10，最小值-3"}),u(m),u(f,{max:10,min:-3,defaultValue:1})])),_:1}),u(n,null,{default:r((()=>[u(i,{"font-size":24,_class:"font-weight-b",label:"异步增减,尺寸的改变"}),u(m),u(f,{width:200,height:62,beforeEnter:c,color:"red",linear:"bottom",bgColor:"red",circular:"",defaultValue:20})])),_:1})])),_:1}))}});export{d as default};