"use strict";(self["webpackChunkfood_mall"]=self["webpackChunkfood_mall"]||[]).push([[206],{4219:function(t,e,s){s.d(e,{Z:function(){return f}});var l=s(3396),d=s(7139);const a={class:"navbar"},n={style:{height:"45px"}};function i(t,e,s,i,o,c){const r=(0,l.up)("nut-navbar");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",n,[(0,l.Wm)(r,{"left-show":s.leftShow,fixed:!0,onOnClickBack:i.back},{content:(0,l.w5)((()=>[(0,l._)("h4",null,(0,d.zw)(s.title),1)])),right:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"right",{},void 0,!0)])),_:3},8,["left-show","onOnClickBack"])])])}var o=s(678),c={name:"NavBar",props:{title:String,leftShow:{type:Boolean,default:!1}},setup(){(0,o.yj)();const t=(0,o.tv)(),e=()=>{t.back()};return{back:e}}},r=s(89);const u=(0,r.Z)(c,[["render",i],["__scopeId","data-v-63cfb5c1"]]);var f=u},5365:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var l=s(3396),d=s(7139);const a=(0,l.Uk)("添加"),n={key:1,class:"addBtn"},i=(0,l.Uk)("新增"),o={class:"addresslist"},c={class:"addresslist-item-top"},r={class:"addresslist-item-top-left"},u={class:"name"},f={class:"phone"},k=(0,l.Uk)("默认"),p={class:"addresslist-item-top-right"},v={class:"addresslist-item-bottom"};function m(t,e,s,m,w,h){const g=(0,l.up)("nut-button"),_=(0,l.up)("Navbar"),C=(0,l.up)("nut-tag"),b=(0,l.up)("nut-icon");return(0,l.wg)(),(0,l.iD)(l.HY,null,["pc"!=t.pageEnv?((0,l.wg)(),(0,l.j4)(_,{key:0,title:t.pageTitle,leftShow:!0},{right:(0,l.w5)((()=>[(0,l.Wm)(g,{type:"info",size:"mini",onClick:m.addAddress},{default:(0,l.w5)((()=>[a])),_:1},8,["onClick"])])),_:1},8,["title"])):(0,l.kq)("",!0),"h5"!=t.pageEnv?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(g,{type:"info",size:"small",onClick:m.addAddress},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"])])):(0,l.kq)("",!0),(0,l._)("div",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.data,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"addresslist-item",key:e},[(0,l._)("div",c,[(0,l._)("div",r,[(0,l._)("span",u,(0,d.zw)(t.testaddressName),1),(0,l._)("span",f,(0,d.zw)(t.phone),1),t.defaultAddress?((0,l.wg)(),(0,l.j4)(C,{key:0,type:"danger"},{default:(0,l.w5)((()=>[k])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",p,[(0,l.Wm)(b,{name:"s-follow",color:t.defaultAddress?"#fa2c19":"#ccc",onClick:m.defaultClick},null,8,["color","onClick"]),(0,l.Wm)(b,{name:"del",color:"#fa2c19",onClick:m.delClick},null,8,["onClick"]),(0,l.Wm)(b,{name:"edit",color:"#64b578",onClick:m.editClick},null,8,["onClick"])])]),(0,l._)("div",v,(0,d.zw)(t.fullAddress),1)])))),128))])],64)}var w=s(9768),h=s(4870),g=s(678),_=s(4219),C=s(65),b={name:"AddressList",components:{Navbar:_.Z},setup(){const t=(0,C.oR)(),e=(0,g.tv)(),s=(0,h.iH)([{testid:3,testaddressName:"姓名",phone:"123****4567",defaultAddress:!1,fullAddress:"北京市通州区测试测试测试测试测试测试测试测试测试"},{testid:4,testaddressName:"姓名",phone:"123****4567",defaultAddress:!0,fullAddress:"北京市通州区测试测试测试测试测试测试测试测试测试"}]);(0,l.bv)((()=>{}));const d=(0,h.qj)({pageTitle:"地址簿",pageEnv:t.getters.GET_ENV}),a=()=>{w.ZP.text("点击了默认哦～")},n=()=>{w.ZP.text("点击了删除哦～")},i=()=>{w.ZP.text("点击了编辑哦～")},o=()=>{e.push({path:"/address"})};return{data:s,delClick:n,editClick:i,addAddress:o,defaultClick:a,...(0,h.BK)(d)}}},A=s(89);const y=(0,A.Z)(b,[["render",m],["__scopeId","data-v-50476368"]]);var N=y}}]);
//# sourceMappingURL=AddressList.d5f1fd8d.js.map