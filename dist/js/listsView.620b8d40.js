"use strict";(self["webpackChunkfood_mall"]=self["webpackChunkfood_mall"]||[]).push([[650],{3065:function(e,t,o){o.r(t),o.d(t,{default:function(){return B}});var a=o(3396),s=o(7139);const c={key:0},l={class:"category-title"},n={class:"category-content"},u=["src"];function r(e,t,o,r,i,d){const g=(0,a.up)("nut-searchbar"),k=(0,a.up)("Skucom"),p=(0,a.up)("nut-empty"),y=(0,a.up)("nut-tabpane"),h=(0,a.up)("nut-tabs");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(g,{modelValue:e.searchValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchValue=t),clearable:"",onSearch:r.search},{rightout:(0,a.w5)((()=>[(0,a._)("div",{onClick:t[0]||(t[0]=(...e)=>r.search&&r.search(...e))},"搜索")])),_:1},8,["modelValue","onSearch"]),(0,a.Wm)(k,{customBySlot:r.customBySlot,onSkuClose:r.skuClose},null,8,["customBySlot","onSkuClose"]),e.categoryInfo.category?((0,a.wg)(),(0,a.j4)(h,{key:0,class:"pageHeight",modelValue:e.tab5value,"onUpdate:modelValue":t[3]||(t[3]=t=>e.tab5value=t),ellipsis:!0,"title-scroll":!0,direction:"vertical",onClick:r.tabClick},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categoryInfo.category,(o=>((0,a.wg)(),(0,a.j4)(y,{class:"nut-tabpane",title:o.catName},{default:(0,a.w5)((()=>[e.categoryChild.length>0?((0,a.wg)(),(0,a.iD)("div",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categoryChild,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"category",key:e.catId},[(0,a._)("div",l,(0,s.zw)(e.catName),1),(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.childCateList,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"category-content-goods",key:e.catId,onClick:t[2]||(t[2]=e=>r.customBySlot=!0)},[(0,a._)("img",{src:e.backImg,alt:""},null,8,u),(0,a._)("div",null,(0,s.zw)(e.catName),1)])))),128))])])))),128))])):((0,a.wg)(),(0,a.j4)(p,{key:1,description:"无数据"}))])),_:2},1032,["title"])))),256))])),_:1},8,["modelValue","onClick"])):(0,a.kq)("",!0)],64)}var i=o(9768),d=o(4870),g=o(4806);const k=(0,a._)("span",{class:"tag"},null,-1),p={class:"nut-sku-header-right-extra"},y=(0,a._)("div",null,[(0,a._)("div",null,"规格")],-1),h={class:"sku-operate-box"},m=(0,a.Uk)("加入购物车"),b=(0,a.Uk)("立即购买");function v(e,t,o,c,l,n){const u=(0,a.up)("nut-price"),r=(0,a.up)("nut-button"),i=(0,a.up)("nut-sku");return(0,a.wg)(),(0,a.j4)(i,{visible:o.customBySlot,"onUpdate:visible":t[0]||(t[0]=e=>o.customBySlot=e),sku:e.sku,goods:e.goods,btnOptions:["buy","cart"],onSelectSku:c.selectSku,onClickBtnOperate:c.clickBtnOperate,onClose:c.skuClose},{"sku-header-price":(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(u,{price:e.goods.price,needSymbol:!0,thousands:!1},null,8,["price"]),k])])),"sku-header-extra":(0,a.w5)((()=>[(0,a._)("span",p,"重量：0.1kg 编号："+(0,s.zw)(e.goods.skuId),1)])),"sku-select-top":(0,a.w5)((()=>[])),"sku-select":(0,a.w5)((()=>[y])),"sku-operate":(0,a.w5)((()=>[(0,a._)("div",h,[(0,a.Wm)(r,{class:"sku-operate-item",shape:"square",type:"warning"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(r,{class:"sku-operate-item",shape:"square",type:"primary"},{default:(0,a.w5)((()=>[b])),_:1})])])),_:1},8,["visible","sku","goods","onSelectSku","onClickBtnOperate","onClose"])}var f={emits:["skuClose"],props:{customBySlot:{type:Boolean,default:!1}},setup(e,t){const o=(0,d.qj)({sku:[],goods:{}});(0,a.bv)((()=>{fetch("https://storage.360buyimg.com/nutui/3x/data.js").then((e=>e.json())).then((e=>{const{Sku:t,Goods:a,imagePathMap:s}=e;o.sku=t,o.goods=a})).catch((e=>console.log("Oh, error",e)))}));const s=()=>{t.emit("skuClose")},c=e=>{const{sku:t,skuIndex:a,parentSku:s,parentIndex:c}=e;if(t.disable)return!1;o.sku[c].list.forEach((e=>{e.active=e.id==t.id})),o.goods={skuId:t.id,price:"6002.10",imagePath:"//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg"}},l=e=>{console.log("点击了操作按钮",e)};return{selectSku:c,clickBtnOperate:l,skuClose:s,...(0,d.BK)(o)}}},w=o(89);const C=(0,w.Z)(f,[["render",v]]);var S=C,_={name:"ListsPage",components:{Skucom:S},setup(){const e=(0,d.iH)(!1);var t=(0,d.qj)({tab5value:"0",searchValue:"",categoryInfo:{},category:[{}],categoryChild:[{}]});(0,a.bv)((()=>{o()}));const o=()=>{fetch("//storage.360buyimg.com/nutui/3x/categoryData.js").then((e=>e.json())).then((e=>{const{categoryInfo:o,categoryChild:a}=e;t.categoryInfo=o,t.category=o.category,t.categoryChild=a})).catch((e=>console.log("Oh, error",e)))},s=e=>{let{title:o,paneKey:a,disabled:s}=e,c=t.categoryInfo.category[a+1]&&t.categoryInfo.category[a+1].children&&g.isArray(t.categoryInfo.category[a+1].children)?t.categoryInfo.category[a+1].children:[];t.categoryChild=[].concat(c)},c=g.debounce(((e,o)=>{t.tab5value="0",i.ZP.text("搜索触发"+t.searchValue)}),200),l=()=>{e.value=!1};return{...(0,d.BK)(t),tabClick:s,skuClose:l,search:c,customBySlot:e}}};const I=(0,w.Z)(_,[["render",r],["__scopeId","data-v-86c96694"]]);var B=I}}]);
//# sourceMappingURL=listsView.620b8d40.js.map