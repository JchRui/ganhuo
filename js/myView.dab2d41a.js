"use strict";(self["webpackChunkfood_mall"]=self["webpackChunkfood_mall"]||[]).push([[932],{1654:function(e,n,o){o.d(n,{Z:function(){return p}});var a=o(3396),l=o(7139);const t={class:"navbar"},i={style:{height:"45px"}};function s(e,n,o,s,c,u){const r=(0,a.up)("nut-navbar");return(0,a.wg)(),(0,a.iD)("div",t,[(0,a._)("div",i,[(0,a.Wm)(r,{"left-show":o.leftShow,fixed:!0,onOnClickBack:s.back},{content:(0,a.w5)((()=>[(0,a._)("h4",null,(0,l.zw)(o.title),1)])),_:1},8,["left-show","onOnClickBack"])])])}var c=o(678),u={name:"NavBar",props:{title:String,leftShow:{type:Boolean,default:!1}},setup(){(0,c.yj)();const e=(0,c.tv)(),n=()=>{e.back()};return{back:n}}},r=o(89);const g=(0,r.Z)(u,[["render",s],["__scopeId","data-v-7157fb46"]]);var p=g},1134:function(e,n,o){o.r(n),o.d(n,{default:function(){return f}});var a=o(3396);function l(e,n,o,l,t,i){const s=(0,a.up)("Navbar"),c=(0,a.up)("LoginPage");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s,{title:e.pageTitle},null,8,["title"]),(0,a._)("div",{onClick:n[0]||(n[0]=(...e)=>l.login&&l.login(...e))},"登录/注册"),(0,a.Wm)(c,{showLoginPage:e.showLoginPage,onLoginPageClose:n[1]||(n[1]=n=>e.showLoginPage=!1)},null,8,["showLoginPage"])],64)}var t=o(4870),i=o(678),s=o(1654);const c=e=>((0,a.dD)("data-v-ce70aae4"),e=e(),(0,a.Cn)(),e),u={class:"login"},r=c((()=>(0,a._)("div",{class:"login-title"},"登录",-1))),g=(0,a.Uk)("登录");function p(e,n,o,l,t,i){const s=(0,a.up)("nut-icon"),c=(0,a.up)("nut-input"),p=(0,a.up)("nut-button"),d=(0,a.up)("nut-popup");return(0,a.wg)(),(0,a.j4)(d,{visible:o.showLoginPage,"onUpdate:visible":n[4]||(n[4]=e=>o.showLoginPage=e),position:"bottom",style:{height:"100%"}},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",{class:"back-btn",onClick:n[0]||(n[0]=(...e)=>l.backBtn&&l.backBtn(...e))},[(0,a.Wm)(s,{name:"left"})]),r,(0,a.Wm)(c,{required:"",placeholder:"请输入用户名",modelValue:e.username,"onUpdate:modelValue":n[1]||(n[1]=n=>e.username=n),label:"用户名"},null,8,["modelValue"]),(0,a.Wm)(c,{placeholder:"请输入昵称",modelValue:e.name,"onUpdate:modelValue":n[2]||(n[2]=n=>e.name=n),label:"昵称"},null,8,["modelValue"]),(0,a.Wm)(c,{required:"",label:"密码",modelValue:e.password,"onUpdate:modelValue":n[3]||(n[3]=n=>e.password=n),type:l.pswShow?"text":"password","right-icon":l.pswShow?"eye":"marshalling",onClickRightIcon:l.pswClickRightIcon},null,8,["modelValue","type","right-icon","onClickRightIcon"]),(0,a.Wm)(p,{class:"login-btn",type:"primary",size:"large",onClick:l.clickLoginBtn},{default:(0,a.w5)((()=>[g])),_:1},8,["onClick"])])])),_:1},8,["visible"])}var d=o(4806),m={name:"LoginPage",emits:["loginPageClose"],props:{showLoginPage:{type:Boolean,defaule:!1}},setup(e,n){const o=(0,t.iH)(!1),a=(0,t.iH)(!1),l=(0,t.qj)({username:"",name:"",password:""}),i=()=>{o.value=!o.value},s=()=>{n.emit("loginPageClose")},c=d.debounce((()=>{}),200);return{...(0,t.BK)(l),pswShow:o,pswClickRightIcon:i,clickLoginBtn:c,isVisible:a,backBtn:s}}},w=o(89);const h=(0,w.Z)(m,[["render",p],["__scopeId","data-v-ce70aae4"]]);var v=h,b={name:"MyView",components:{Navbar:s.Z,LoginPage:v},setup(){const e=(0,i.yj)(),n=((0,i.tv)(),(0,t.qj)({pageTitle:"我的",showLoginPage:!1}));(0,a.bv)((()=>{console.log(e.query.id)}));const o=()=>{n.showLoginPage=!0};return{...(0,t.BK)(n),login:o}}};const k=(0,w.Z)(b,[["render",l]]);var f=k}}]);
//# sourceMappingURL=myView.dab2d41a.js.map