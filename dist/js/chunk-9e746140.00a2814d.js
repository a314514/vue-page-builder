(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e746140"],{"3dfa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("g-page",[a("div",{staticClass:"resource geye-100",attrs:{flex:""}},[a("div",{staticClass:"splitter geye-pr-10",attrs:{"flex-box":"0"}},[a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],attrs:{data:e.treeData,props:e.defaultProps,"default-expand-all":"","render-content":e.renderContent},on:{"node-click":e.handleNodeClick}})],1),a("div",{staticClass:"form",attrs:{"flex-box":"1"}},[e.showForm?e._e():a("div",{staticClass:"action-card",on:{click:e.addResource}},[a("span",[e._v("添加菜单")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"geye-p-10"},[a("g-form",{ref:"form",attrs:{rules:e.rules,row:e.row,model:e.form}}),a("g-button",{attrs:{buttonType:"save"},on:{click:e.save}}),e.form.parentId?e._e():a("g-button",{attrs:{text:"重置"},on:{click:e.reset}}),a("g-button",{attrs:{text:"关闭"},on:{click:function(t){e.showForm=!1}}})],1)])])])},o=[],r=(a("d81d"),a("b0c0"),a("d3b7"),a("25f0"),a("d4ec")),i=a("bee2"),s=a("262e"),l=a("2caf"),d=a("9ab4"),c=a("60a3");a("a9e3");function u(){var e=this;e.date=new Date,"function"!==typeof e.newGuid&&(u.prototype.newGuid=function(){e.date=new Date;for(var t="",a=e.hexadecimal(e.getGuidDate(),16),n=e.hexadecimal(e.getGuidTime(),16),o=0;o<9;o++)t+=Math.floor(16*Math.random()).toString(16);t+=a,t+=n;while(t.length<32)t+=Math.floor(16*Math.random()).toString(16);return e.formatGuid(t)},u.prototype.getGuidDate=function(){return e.date.getFullYear()+e.addZero(e.date.getMonth()+1)+e.addZero(e.date.getDay())},u.prototype.getGuidTime=function(){return e.addZero(e.date.getHours())+e.addZero(e.date.getMinutes())+e.addZero(e.date.getSeconds())+e.addZero(parseInt(String(e.date.getMilliseconds()/10),0))},u.prototype.addZero=function(e){return"NaN"!==Number(e).toString()&&e>=0&&e<10?"0"+Math.floor(e):e.toString()},u.prototype.hexadecimal=function(e,t,a){return void 0!==a?parseInt(e.toString(),a).toString(t):parseInt(e.toString(),0).toString(t)},u.prototype.formatGuid=function(e){return e})}var h=new u,p=a("2ef0"),f=a.n(p),m=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.option=[],e.treeData=[],e.defaultProps={children:"children",label:"name"},e.showForm=!1,e.rules={},e.form={},e.parentName="",e.selectIsDisabled=!1,e.treeLoading=!1,e.type="1",e}return Object(i["a"])(a,[{key:"handleNodeClick",value:function(e){return!0}},{key:"created",value:function(){var e=[];this["$trans"]("resourcesType",!0).map((function(t){e.push({label:t.value,value:t.code})})),this.option=e,this.loadResource()}},{key:"typeChange",value:function(e){this.form.code=h.newGuid(),this.type=e}},{key:"loadResource",value:function(){var e=this;this.treeLoading=!0,this.$api("queryMenu",{where:{}}).then((function(t){e.$api("dataOrder",{data:t.result.list,key:"sequence"}).then((function(t){e.$api("ArrayToHierarchy",t).then((function(t){e.treeData=t,e.treeLoading=!1}))}))}))}},{key:"addResource",value:function(e){this.showForm=!0,e.id?(this.form.parentId=e.id,"category"===e.type?this.form.type="menu":"menu"===e.type&&(this.form.type="element"),this.form.parentName=e.name,this.form.pid=e.id,this.selectIsDisabled=!0):(this.reset(),this.selectIsDisabled=!1)}},{key:"reset",value:function(){this.form={name:"",parentId:0,type:"",path:""}}},{key:"handleEdit",value:function(e,t){this.showForm=!0,this.selectIsDisabled=!0,this.form=f.a.cloneDeep(t),this.type=t.category,e.stopPropagation()}},{key:"handleAdd",value:function(e,t){this.form.parentName=t.name,this.addResource(t),e.stopPropagation()}},{key:"handleRemove",value:function(e,t){var a=this;this.$confirm(this.$t("确定删除此资源吗?").toString(),"提示",{type:"warning"}).then((function(){a.$api("delMenu",{id:[t.id]}).then((function(e){"200"===e.code&&(a.$message.success("刪除成功"),a.reset(),a.loadResource(),a.showForm=!1)}))}))}},{key:"renderContent",value:function(e,t){var a=this,n=t.node,o=t.data;t.store;return e("div",{class:"custom-tree-node geye-100",attrs:{flex:!0}},[e("div",{attrs:{"flex-box":"0",title:n.label},class:"tree-node-label"},[n.label]),e("div",{attrs:{"flex-box":"1",flex:"main:right"}},[e("el-tooltip",{attrs:{content:"添加子节点",placement:"top",effect:"light",openDelay:300}},[e("g-icon",{attrs:{name:"RectangleCopy20",size:"18"},on:{press:function(e){return a.handleAdd(e,o)}}})]),e("el-tooltip",{attrs:{content:"编辑",placement:"top",effect:"light",openDelay:300}},[e("g-icon",{attrs:{name:"md-color-filter",size:"18"},on:{press:function(e){return a.handleEdit(e,o)}}})]),e("el-tooltip",{attrs:{content:"删除",placement:"top",effect:"light",openDelay:300},directives:[{name:"show",value:!o.children||0===o.children.length}]},[e("g-icon",{attrs:{name:"Rectangle",size:"18"},on:{press:function(e){return a.handleRemove(e,o)}}})])])])}},{key:"save",value:function(){var e=this;this.$api("addMenu",this.form).then((function(t){"200"===t.code&&(e.$message.success("保存成功"),e.reset(),e.loadResource(),e.showForm=!1)}))}},{key:"row",get:function(){var e=[];return this.form.pid&&this.form.parentName&&e.push({label:this.$t("父级名称"),prop:"parentName",disabled:"disabled"}),e.push({label:this.$t("类型"),prop:"type",type:"select",options:this.option,disabled:this.selectIsDisabled,events:{change:this.typeChange}}),e.push({label:this.$t("资源名称"),prop:"name",placeholder:this.$t("输入资源名称")}),"menu"===this.form.type&&e.push({label:this.$t("路由"),prop:"routerPath",placeholder:this.$t("路由")}),e.push({label:this.$t("地址"),prop:"path",placeholder:this.$t("地址")}),e.push({label:this.$t("顺序"),prop:"sequence",placeholder:this.$t("顺序")}),e}}]),a}(c["f"]);m=Object(d["a"])([c["a"]],m);var g=m,v=g,y=(a("ca0e"),a("2877")),b=Object(y["a"])(v,n,o,!1,null,"2585328a",null);t["default"]=b.exports},"4f59":function(e,t,a){},ca0e:function(e,t,a){"use strict";var n=a("4f59"),o=a.n(n);o.a}}]);