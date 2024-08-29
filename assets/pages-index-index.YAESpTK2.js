import{o as e,c as i,w as t,a as r,n as s,b as d,r as o,d as h,i as a,e as l,f as n,g as u,h as c,j as g,F as p,k as m,l as f,t as _,m as b}from"./index-C1Z5Lwap.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{r as x,_ as y}from"./uni-section.BBs8Nyu7.js";const C=w({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((e,i)=>{e===this&&this.grid.children.splice(i,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(l,n,u,c,g,p){const m=a;return g.width?(e(),i(m,{key:0,style:d("width:"+g.width+";"+(g.square?"height:"+g.width:"")),class:"uni-grid-item"},{default:t((()=>[r(m,{class:s([{"uni-grid-item--border":g.showBorder,"uni-grid-item--border-top":g.showBorder&&u.index<g.column,"uni-highlight":g.highlight},"uni-grid-item__box"]),style:d({"border-right-color":g.borderColor,"border-bottom-color":g.borderColor,"border-top-color":g.borderColor}),onClick:p._onClick},{default:t((()=>[o(l.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):h("",!0)}],["__scopeId","data-v-0810a0ad"]]);const v=w({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((e=>{this.children.forEach(((i,t)=>{i.width=e}))}))}),50)},change(e){this.$emit("change",e)},_getSize(e){l().in(this).select(`#${this.elId}`).boundingClientRect().exec((i=>{this.width=parseInt((i[0].width-1)/this.column)+"px",e(this.width)}))}}},[["render",function(h,l,n,u,c,g){const p=a;return e(),i(p,{class:"uni-grid-wrap"},{default:t((()=>[r(p,{id:c.elId,ref:"uni-grid",class:s(["uni-grid",{"uni-grid--border":n.showBorder}]),style:d({"border-left-color":n.borderColor})},{default:t((()=>[o(h.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-257e8068"]]),k=w({__name:"index",setup(s){const d=n(["福彩3D","账单",3,4,5,6,7,8,"9"]);function o(e){switch(console.log(e),e.detail.index){case 0:m({url:"/pages/3D/index"});break;case 1:m({url:"/pages/bill/index"});break;case 8:m({url:"/pages/test/index"})}}return(s,h)=>{const l=b,n=a,m=x(u("uni-grid-item"),C),w=x(u("uni-grid"),v),k=x(u("uni-section"),y);return e(),i(k,{title:"项目列表",type:"line",padding:""},{default:t((()=>[r(w,{column:3,"show-border":!1,square:!1,onChange:o},{default:t((()=>[(e(!0),c(p,null,g(d.value,((s,d)=>(e(),i(m,{index:d,key:d},{default:t((()=>[r(n,{class:"grid-item-box"},{default:t((()=>[r(l,{class:"text"},{default:t((()=>[f(_(s),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["index"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-7d998f0a"]]);export{k as default};
