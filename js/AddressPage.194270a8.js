"use strict";(self["webpackChunkfood_mall"]=self["webpackChunkfood_mall"]||[]).push([[923],{7313:function(e,l,n){n.d(l,{Z:function(){return p}});var t=n(3396),a=n(7139);const o={class:"navbar"},d={style:{height:"45px"}};function u(e,l,n,u,i,s){const c=(0,t.up)("nut-navbar");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",d,[(0,t.Wm)(c,{"left-show":n.leftShow,fixed:!0,onOnClickBack:u.back},{content:(0,t.w5)((()=>[(0,t._)("h4",null,(0,a.zw)(n.title),1)])),right:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"right",{},void 0,!0)])),_:3},8,["left-show","onOnClickBack"])])])}var i=n(678),s={name:"NavBar",props:{title:String,leftShow:{type:Boolean,default:!1}},setup(){(0,i.yj)();const e=(0,i.tv)(),l=()=>{e.back()};return{back:l}}},c=n(89);const r=(0,c.Z)(s,[["render",u],["__scopeId","data-v-63cfb5c1"]]);var p=r},2141:function(e,l,n){n.r(l),n.d(l,{default:function(){return m}});var t=n(3396);const a={class:"box-shadow"},o={class:"padding-lr-18 margin-t-10"},d=(0,t.Uk)("确定");function u(e,l,n,u,i,s){const c=(0,t.up)("Navbar"),r=(0,t.up)("nut-input"),p=(0,t.up)("nut-cell"),m=(0,t.up)("nut-textarea"),v=(0,t.up)("nut-button"),h=(0,t.up)("nut-address");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(c,{title:e.pageTitle,leftShow:!0},null,8,["title"]),(0,t.Wm)(r,{required:"",label:"姓名",modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.name=l)},null,8,["modelValue"]),(0,t.Wm)(r,{required:"",label:"手机号码",modelValue:e.tel,"onUpdate:modelValue":l[1]||(l[1]=l=>e.tel=l),type:"tel"},null,8,["modelValue"]),(0,t.Wm)(p,{title:"选择省市区",desc:u.text,"is-link":"",onClick:u.showAddress},null,8,["desc","onClick"]),(0,t._)("div",a,[(0,t.Wm)(m,{modelValue:e.fullAddress,"onUpdate:modelValue":l[2]||(l[2]=l=>e.fullAddress=l),autosize:"",placeholder:"请输入详细地址"},null,8,["modelValue"])]),(0,t._)("div",o,[(0,t.Wm)(v,{block:"",type:"info",onClick:u.sureBtn},{default:(0,t.w5)((()=>[d])),_:1},8,["onClick"])]),(0,t.Wm)(h,{modelValue:u.value,"onUpdate:modelValue":l[3]||(l[3]=e=>u.value=e),visible:u.showPopup,"onUpdate:visible":l[4]||(l[4]=e=>u.showPopup=e),province:e.province,city:e.city,country:e.country,town:e.town,onChange:u.onChange,onClose:u.close,"custom-address-title":"请选择所在地区","columns-placeholder":e.placeholder},null,8,["modelValue","visible","province","city","country","town","onChange","onClose","columns-placeholder"])],64)}var i=n(4870),s=n(7313),c={name:"AddressPage",components:{Navbar:s.Z},setup(){const e=(0,i.qj)({pageTitle:"新增地址",name:"",tel:"",fullAddress:""});(0,t.bv)((()=>{}));const l=(0,i.iH)(!1),n=(0,i.qj)({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[],placeholder:"请选择"}),a=(0,i.iH)(""),o=(0,i.iH)([]),d=()=>{l.value=!l.value},u=e=>{const t=n[e.next];t.length<1&&(l.value=!1)},s=e=>{console.log(e),a.value=e.data.addressStr,o.value=[e.data.province.id,e.data.city.id,e.data.country.id]},c=()=>{};return{...(0,i.BK)(e),sureBtn:c,showPopup:l,text:a,showAddress:d,onChange:u,close:s,value:o,...(0,i.BK)(n)}}},r=n(89);const p=(0,r.Z)(c,[["render",u],["__scopeId","data-v-77ebe0bc"]]);var m=p}}]);
//# sourceMappingURL=AddressPage.194270a8.js.map