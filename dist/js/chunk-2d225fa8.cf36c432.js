(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225fa8"],{e766:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g-page",{staticStyle:{"overflow-y":"auto"},attrs:{flex:"dir:top"}},[r("div",{attrs:{"flex-box":"0"}},[r("g-form",{ref:"form",attrs:{rules:t.rules,row:t.row,model:t.form}}),r("g-upload",{ref:"upload",attrs:{list:t.form.pathId}})],1),r("g-vue-ueditor",{attrs:{"flex-box":"1"},model:{value:t.form.des,callback:function(e){t.$set(t.form,"des",e)},expression:"form.des"}}),r("div",{staticClass:"button_area",attrs:{"flex-box":"0",flex:"main:right"}},[r("g-button",{attrs:{"button-type":"cancel"},on:{click:t.goback}}),r("g-button",{attrs:{"button-type":"ok"},on:{click:t.submit}})],1)],1)},a=[],o=r("d4ec"),i=r("bee2"),u=r("262e"),n=r("2caf"),c=r("9ab4"),f=r("60a3"),l=function(t){Object(u["a"])(r,t);var e=Object(n["a"])(r);function r(){var t;return Object(o["a"])(this,r),t=e.apply(this,arguments),t.msg="",t.form={id:"",des:"",title:""},t.isChange=!1,t}return Object(i["a"])(r,[{key:"created",value:function(){var t=this;this.$route.query&&this.$route.query.id&&this.$api("getDataById",this.$route.query.id).then((function(e){t.form=e}))}},{key:"goback",value:function(){this.$router.back()}},{key:"submit",value:function(){var t=this;this.$api("addData",Object.assign(this.form,{type:"news"})).then((function(e){"200"===e.code?(t.user?t.$message.success("修改成功！"):t.$message.success("添加成功！"),t.$router.go(-1)):t.$message.error(e.msg)}))}},{key:"Init",value:function(){this.user?this.form=this.user:this.form={id:"",des:"",title:""},this.$diff(this.form,"isChange")}},{key:"rules",get:function(){return{}}},{key:"model",get:function(){return{}}},{key:"row",get:function(){return[{label:this.$t("标题"),prop:"name",placeholder:"标题"}]}}]),r}(f["f"]);Object(c["a"])([Object(f["d"])({default:null})],l.prototype,"user",void 0),l=Object(c["a"])([f["a"]],l);var d=l,b=d,h=r("2877"),m=Object(h["a"])(b,s,a,!1,null,"925f0612",null);e["default"]=m.exports}}]);