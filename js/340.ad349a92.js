"use strict";(self["webpackChunkwisdom_park_visitor"]=self["webpackChunkwisdom_park_visitor"]||[]).push([[340],{9340:function(e,i,t){t.r(i),t.d(i,{default:function(){return d}});var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("van-sticky",{attrs:{"offset-top":1e-8}},[t("van-nav-bar",{attrs:{title:"临时访客登记","left-arrow":"","right-text":e.params.disabled?"":"保存"},on:{"click-left":e.onClickLeft,"click-right":function(i){return e.$refs.visitorInfo.submit()}}})],1),t("div",{staticClass:"edit-form"},[t("div",{staticClass:"tag-title"},[e._v("拜访信息")]),t("van-form",{ref:"visitorInfo",attrs:{"show-error":!1,model:e.visitorInfo,readonly:e.params.disabled},on:{submit:e.handleSubmit}},[t("div",{staticClass:"visitor-info"},[t("van-field",{attrs:{name:"visitorReason",required:"",label:"拜访事由",maxlength:"50",placeholder:"请输入拜访事由",rules:[{required:!0,message:"请输入拜访事由"}]},model:{value:e.visitorInfo.visitorReason,callback:function(i){e.$set(e.visitorInfo,"visitorReason",i)},expression:"visitorInfo.visitorReason"}}),t("van-field",{attrs:{required:"",readonly:"",name:"visitStartTime",disabled:!e.params.disabled,label:"拜访开始",placeholder:"请选择开始时间",rules:[{required:!0,message:"请选择开始时间"}]},model:{value:e.visitorInfo.visitStartTime,callback:function(i){e.$set(e.visitorInfo,"visitStartTime",i)},expression:"visitorInfo.visitStartTime"}}),t("van-field",{attrs:{clickable:!e.params.disabled,required:"",readonly:"",name:"visitEndTime",label:"拜访结束",placeholder:"请选择结束时间",rules:[{required:!0,message:"请选择结束时间"}]},on:{click:function(i){e.params.disabled||(e.showPickerEnd=!0)}},model:{value:e.visitorInfo.visitEndTime,callback:function(i){e.$set(e.visitorInfo,"visitEndTime",i)},expression:"visitorInfo.visitEndTime"}}),t("van-popup",{attrs:{position:"bottom"},model:{value:e.showPickerEnd,callback:function(i){e.showPickerEnd=i},expression:"showPickerEnd"}},[t("van-datetime-picker",{attrs:{type:"datetime","min-date":e.disabledTime("endMin"),"max-date":e.disabledTime("endMax")},on:{confirm:e.onConfirmEnd,cancel:function(i){e.showPickerEnd=!1}}})],1),t("van-field",{attrs:{name:"name",required:"",label:"被拜访者",maxlength:"10",placeholder:"请填写被拜访者",rules:[{required:!0,message:"请填写被拜访者"}]},model:{value:e.visitorInfo.name,callback:function(i){e.$set(e.visitorInfo,"name",i)},expression:"visitorInfo.name"}}),t("van-field",{attrs:{name:"phoneNbr",required:"",type:"digit",label:"被访者手机",maxlength:"11",placeholder:"请填写被访者手机",rules:[{required:!0,message:"请填写被访者手机"},{pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"请输入正确格式的手机号码"}]},model:{value:e.visitorInfo.phoneNbr,callback:function(i){e.$set(e.visitorInfo,"phoneNbr",i)},expression:"visitorInfo.phoneNbr"}})],1),t("div",{staticClass:"tag-title"},[e._v("详细信息")]),t("div",{staticClass:"visitor-info"},[t("van-field",{attrs:{name:"fileList",label:"人脸上传"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-uploader",{attrs:{readonly:e.params.disabled,deletable:!e.params.disabled,"before-read":e.beforeRead,accept:"image/jpeg,image/jpg,image/png","max-count":1},on:{delete:function(i){e.userInfo.picData=""}},model:{value:e.userInfo.fileList,callback:function(i){e.$set(e.userInfo,"fileList",i)},expression:"userInfo.fileList"}})]},proxy:!0}])}),t("van-field",{attrs:{placeholder:"请填写访客姓名",name:"visitorName",label:"访客姓名",required:"",maxlength:"8",rules:[{required:!0,message:"请填写访客姓名"}]},model:{value:e.userInfo.visitorName,callback:function(i){e.$set(e.userInfo,"visitorName",i)},expression:"userInfo.visitorName"}}),t("van-field",{attrs:{readonly:"",disabled:!e.params.disabled,name:"visitorPhoneNbr",label:"手机号码",required:"",placeholder:"请填写访客手机号码",type:"tel",maxlength:"11",rules:[{required:!0,message:"请填写访客手机号码"},{pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message:"请输入正确格式的手机号码"}]},model:{value:e.userInfo.visitorPhoneNbr,callback:function(i){e.$set(e.userInfo,"visitorPhoneNbr",i)},expression:"userInfo.visitorPhoneNbr"}}),t("van-field",{attrs:{clickable:!e.params.disabled,readonly:"",name:"voucherTypeName",label:"证件类型",placeholder:"请选择证件类型"},on:{click:function(i){e.params.disabled||(e.showPickerType=!0)}},model:{value:e.userInfo.voucherTypeName,callback:function(i){e.$set(e.userInfo,"voucherTypeName",i)},expression:"userInfo.voucherTypeName"}}),t("van-popup",{attrs:{position:"bottom"},model:{value:e.showPickerType,callback:function(i){e.showPickerType=i},expression:"showPickerType"}},[t("van-picker",{attrs:{title:"证件类型","show-toolbar":"",columns:e.showPickerTypeList.map((function(e){return e.dicDisplay}))},on:{cancel:function(i){e.showPickerType=!1},confirm:e.onConfirmType}})],1),t("van-field",{attrs:{readonly:"身份证"===e.userInfo.voucherTypeName||e.params.disabled,clickable:!e.params.disabled,name:"voucherCode",label:"证件号码",maxlength:"50",placeholder:"请填写访客证件号码"},on:{click:function(i){e.params.disabled||"身份证"!==e.userInfo.voucherTypeName||(e.numberShow=!0)}},model:{value:e.userInfo.voucherCode,callback:function(i){e.$set(e.userInfo,"voucherCode",i)},expression:"userInfo.voucherCode"}}),t("van-number-keyboard",{attrs:{show:e.numberShow,"extra-key":"X","close-button-text":"完成"},on:{blur:function(i){e.numberShow=!1},input:function(i){e.userInfo.voucherCode=e.userInfo.voucherCode+i},delete:function(i){e.userInfo.voucherCode=e.userInfo.voucherCode.substr(0,e.userInfo.voucherCode.length-1)}}}),t("van-field",{attrs:{name:"visitSex",label:"访客性别"},scopedSlots:e._u([{key:"input",fn:function(){return[t("van-radio-group",{attrs:{disabled:e.params.disabled,direction:"horizontal"},model:{value:e.userInfo.visitSex,callback:function(i){e.$set(e.userInfo,"visitSex",i)},expression:"userInfo.visitSex"}},e._l(e.visitSexList,(function(i){return t("van-radio",{key:i.dicValue,attrs:{name:i.dicValue}},[e._v(e._s(i.dicDisplay))])})),1)]},proxy:!0}])}),t("van-field",{attrs:{name:"plate",label:"车牌号码",maxlength:"8",placeholder:"请填写访客车牌号码"},model:{value:e.userInfo.plate,callback:function(i){e.$set(e.userInfo,"plate",i)},expression:"userInfo.plate"}}),t("van-field",{attrs:{name:"carryArticle",label:"携带物品",maxlength:"100",placeholder:"请填写访客携带物品"},model:{value:e.userInfo.carryArticle,callback:function(i){e.$set(e.userInfo,"carryArticle",i)},expression:"userInfo.carryArticle"}}),t("van-field",{attrs:{name:"remark",label:"备注",rows:"2",autosize:"",type:"textarea","show-word-limit":"",maxlength:"100",placeholder:"请填写备注"},model:{value:e.userInfo.remark,callback:function(i){e.$set(e.userInfo,"remark",i)},expression:"userInfo.remark"}})],1)])],1)],1)},r=[],a=t(6778),o=a.Z,n=t(1001),l=(0,n.Z)(o,s,r,!1,null,"0a4b0aa3",null),d=l.exports},6778:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _api_visitor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3581),vuex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(629);__webpack_exports__["Z"]={name:"TemporaryVisitorReg",data(){return{numberShow:!1,showPickerTypeList:[{dicDisplay:"身份证",dicValue:"1"},{dicDisplay:"香港身份证",dicValue:"2"},{dicDisplay:"澳门身份证",dicValue:"3"},{dicDisplay:"港澳通行证",dicValue:"4"},{dicDisplay:"台湾居民定居证",dicValue:"5"},{dicDisplay:"其他",dicValue:"6"}],visitSexList:[{dicDisplay:"男",dicValue:"0"},{dicDisplay:"女",dicValue:"1"}],showPickerType:!1,showPickerEnd:!1,visitorInfo:{},userInfo:{fileList:[],name:"",visitorPhoneNbr:"",voucherTypeName:"身份证",voucherCode:"",visitSex:"",carryArticle:"",remark:""},params:{}}},methods:{async init(){scrollTo(0,0),this.params=this.$util.getRouteParams(this.$route),this.userInfo.visitorPhoneNbr=this.params.visitorPhoneNbr,this.params.temporaryVisitId&&!this.params.phoneNbrError?(0,_api_visitor__WEBPACK_IMPORTED_MODULE_0__.W1)({visitorInfoId:this.params.temporaryVisitId,visitorPhoneNbr:this.params.visitorPhoneNbr,visitorOpenid:this.params.openId}).then((res=>{if(200===res.code){const data=res.data.row[0];this.visitorInfo={...data,visitStartTime:this.$util.format(new Date(data.visitStartTime.replace(/-/g,"/")),"yyyy-MM-dd hh:mm"),visitEndTime:this.$util.format(new Date(data.visitEndTime.replace(/-/g,"/")),"yyyy-MM-dd hh:mm")};const visitorPersonArr=eval("("+data.visitorPersonArr+")")[0];this.userInfo={...visitorPersonArr,fileList:visitorPersonArr.picData?[{content:visitorPersonArr.picData.replace(/ /g,"+")}]:[],voucherTypeName:String(this.showPickerTypeList.find((e=>visitorPersonArr.voucherType==e.dicValue)).dicDisplay)}}else this.$toast.fail({message:res.msg})})):this.setTime()},setTime(){let e=new Date;this.visitorInfo.visitStartTime=this.$util.format(e,"yyyy-MM-dd hh:mm"),this.visitorInfo.visitEndTime=this.$util.format(new Date(e.setHours(e.getHours()+2)),"yyyy-MM-dd hh:mm")},onClickLeft(){this.$router.back(-1)},onConfirmEnd(e){this.visitorInfo.visitEndTime=this.$util.format(e,"yyyy-MM-dd hh:mm"),this.showPickerEnd=!1},disabledTime(e){switch(e){case"endMin":return this.visitorInfo.visitStartTime&&new Date(this.visitorInfo.visitStartTime.replace(/-/g,"/"));case"endMax":return this.visitorInfo.visitStartTime?new Date(Date.parse(this.visitorInfo.visitStartTime.replace(/-/g,"/"))+864e5):void 0}},async beforeRead(e){const i="image/jpeg"===e.type||"image/png"===e.type||"mage/jpg"===e.type;if(!i)return new Promise((e=>(this.$toast({message:"请选择 jpg, png 格式文件!"}),this.userInfo.picData="",e(new Error(!1)))));{const i=await this.$util.iosRotateImg(e);0==this.$util.isImgChekSize?this.userInfo.picData=i:1==this.$util.isImgChekSize?this.$toast.fail("您选择的相片小于25K，请重新选择相片！"):this.$toast.fail("您选择的相片超过了7500K，请重新选择相片！")}},onConfirmType(e){this.userInfo.voucherTypeName=e,this.userInfo.voucherCode="",this.showPickerType=!1},handleSubmit(){this.$toast.loading({duration:0,forbidClick:!0,message:"数据保存中..."});let e=null;e=this.params.temporaryVisitId?_api_visitor__WEBPACK_IMPORTED_MODULE_0__.dW:_api_visitor__WEBPACK_IMPORTED_MODULE_0__.Ab;const i={...this.visitorInfo,visitStartTime:this.visitorInfo.visitStartTime+":00",visitEndTime:this.visitorInfo.visitEndTime+":00",visitorInfoId:this.params.temporaryVisitId,unitId:this.unitId,visitorPhone:this.userInfo.visitorPhoneNbr,visitType:"3",visitorPersonArr:[{...this.userInfo,fileList:null,voucherType:String(this.showPickerTypeList.find((e=>this.userInfo.voucherTypeName===e.dicDisplay)).dicValue)}]};if(this.params.isToOpenId)i.toOpenid=this.myUserInfo.openId;else{const e=this.params.openId;i.visitorOpenid=e,i.visitorPersonArr[0].visitorOpenid=e}e(i).then((e=>{this.$toast.clear(),200===e.code?(this.token=e.data.token,this.params.temporaryVisitId=e.data.id,this.$util.getRouteParams({name:this.$route.name,params:{temporaryVisitId:e.data.id,token:e.data.token}}),this.$toast.success({duration:200,message:e.msg}),this.params.openId||this.myUserInfo.openId||this.$router.push({name:"passCertificateTemporary"})):this.$toast.fail({message:e.msg})})).catch((()=>{this.$toast.clear()}))}},computed:{...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.rn)({myUserInfo:e=>e.user.userInfo,unitId:e=>e.user.unitId})},created(){this.init()},beforeRouteLeave(e,i,t){"passCertificateTemporary"!==e.name&&this.$ls.remove(i.name),t()}}}}]);
//# sourceMappingURL=340.ad349a92.js.map