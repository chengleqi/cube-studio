"use strict";(self.webpackChunkkubeflow_frontend=self.webpackChunkkubeflow_frontend||[]).push([[841],{25849:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(93433),s=n(1413),i=n(29439),r=n(4519),c=n(73031),l=n(81190),d=n(10089),o=n(88977),u=n(10007),h=n(72625),f=n(47474),m=n(12513),k=n(2704),x=n(76245),Z=n(20011),p=n(42496),j=n(82574),y=n(37167),g=n(96296),I=n(76722),v=n(92306),w=n(43077),C=n.n(w),b=n(33405),N=n(4316),P=n(17669),S=n(17972),D=n(70332),_=n(43365),T=n(16548),Y=n(5866),H=n(60685),M=n(78306),O=n(2556);c.Z.RangePicker;function U(){var e=H.Z.get("myapp_username")||"",t=(0,D.s0)(),n=(0,r.useState)([]),w=(0,i.Z)(n,2),U=w[0],q=w[1],z=(0,r.useState)([]),E=(0,i.Z)(z,2),F=E[0],W=E[1],B=(0,r.useState)(!1),R=(0,i.Z)(B,2),K=R[0],Q=R[1],V=(0,r.useState)(!1),G=(0,i.Z)(V,2),J=G[0],L=G[1],A=(0,r.useState)((0,T.jS)("inCharge")||e),X=(0,i.Z)(A,2),$=X[0],ee=X[1],te=(0,r.useState)((0,T.jS)("taskId")),ne=(0,i.Z)(te,2),ae=ne[0],se=ne[1],ie=(0,r.useState)((0,T.jS)("viewId")),re=(0,i.Z)(ie,2),ce=re[0],le=re[1],de=(0,r.useState)(""),oe=(0,i.Z)(de,2),ue=oe[0],he=oe[1],fe=(0,r.useState)(!1),me=(0,i.Z)(fe,2),ke=me[0],xe=me[1],Ze=(0,r.useState)(!1),pe=(0,i.Z)(Ze,2),je=pe[0],ye=pe[1],ge=(0,r.useState)(!1),Ie=(0,i.Z)(ge,2),ve=Ie[0],we=Ie[1],Ce=(0,r.useState)(!1),be=(0,i.Z)(Ce,2),Ne=be[0],Pe=be[1],Se=(0,r.useState)(!1),De=(0,i.Z)(Se,2),_e=De[0],Te=(De[1],(0,r.useState)()),Ye=(0,i.Z)(Te,2),He=Ye[0],Me=Ye[1],Oe=(0,r.useState)(),Ue=(0,i.Z)(Oe,2),qe=Ue[0],ze=Ue[1],Ee=(0,r.useState)(),Fe=(0,i.Z)(Ee,2),We=Fe[0],Be=Fe[1],Re=(0,r.useState)([]),Ke=(0,i.Z)(Re,2),Qe=Ke[0],Ve=Ke[1],Ge=(0,r.useState)(),Je=(0,i.Z)(Ge,2),Le=Je[0],Ae=Je[1],Xe=(0,r.useState)({startTime:C()().subtract(1,"d").startOf("day").format("YYYY-MM-DD HH:mm:ss"),endTime:C()().subtract(1,"d").endOf("day").format("YYYY-MM-DD HH:mm:ss")}),$e=(0,i.Z)(Xe,2),et=($e[0],$e[1],{current:1,pageSize:10,total:0,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"\u5171".concat(e,"\u6761")}}),tt=(0,r.useState)(et),nt=(0,i.Z)(tt,2),at=nt[0],st=nt[1],it=(0,r.useState)(""),rt=(0,i.Z)(it,2),ct=rt[0],lt=rt[1];(0,r.useEffect)((function(){lt((0,T.W9)())}),[]),(0,r.useEffect)((function(){dt()}),[]);var dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et;Q(!0),(0,g.UM)({inCharge:$||void 0,taskName:ue||void 0,taskId:ae||void 0,notes:Le||void 0,viewId:ce||void 0,pageIndex:e.current||1,pageSize:e.pageSize||10}).then((function(t){var n=t.data.data.data,a=n.list,i=n.totalSize;q(a),st((0,s.Z)((0,s.Z)((0,s.Z)({},et),e),{},{total:i})),Ve([])})).finally((function(){return Q(!1)}))},ot=function(e,t){for(var n=[],a=e;a<t;a++)n.push(a);return n};return(0,O.jsxs)("div",{className:"fade-in",children:[(0,O.jsx)(Y.Z,{title:"\u4fee\u6539\u8d1f\u8d23\u4eba",loading:_e,visible:Ne,formData:{inCharges:qe},onCancel:function(){Pe(!1)},onCreate:function(e){ye(!0);var t=e.inCharges;(0,g.Sg)({usTaskId:He||"",modifier:H.Z.get("myapp_username")||"",inCharges:t}).then((function(e){d.ZP.success("\u4fee\u6539\u8d1f\u8d23\u4eba\u6210\u529f"),dt()})).catch((function(e){d.ZP.error('\u4fee\u6539\u8d1f\u8d23\u4eba\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528";"\u53f7\u5206\u9694')})).finally((function(){Pe(!1)}))},children:(0,O.jsx)(o.Z.Item,{label:"\u8d1f\u8d23\u4eba",name:"inCharges",help:"\u8bf7\u4f7f\u7528';'\u53f7\u5206\u9694",rules:[{required:!0,message:"\u8bf7\u9009\u8f93\u5165\u8d1f\u8d23\u4eba"}],children:(0,O.jsx)(u.Z,{})})}),(0,O.jsxs)(Y.Z,{title:"\u8865\u5f55",loading:je,visible:ve,onCancel:function(){we(!1)},onCreate:function(t){ye(!0);var n=t.fromDate,a=t.toDate;(0,g.GZ)({taskId:He||"",fromDate:n.format("YYYY-MM-DD HH:mm:ss"),toDate:a.format("YYYY-MM-DD HH:mm:ss"),userName:e}).then((function(e){e.data.success?(d.ZP.success("\u8865\u5f55\u6210\u529f"),dt(),we(!1)):d.ZP.error(e.data.errorMessage)})).catch((function(e){d.ZP.error("\u8865\u5f55\u5931\u8d25")})).finally((function(){ye(!1)}))},children:[(0,O.jsx)(o.Z.Item,{label:"\u5f00\u59cb\u65f6\u95f4",name:"fromDate",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],children:(0,O.jsx)(c.Z,{showTime:{defaultValue:C()("00:00:00","HH:mm:ss")},disabledTime:function(){var e;return"D"===(null===We||void 0===We?void 0:We.cycleUnit)&&(e=function(){return ot(0,24)}),{disabledHours:e,disabledMinutes:function(){return ot(0,60)},disabledSeconds:function(){return ot(0,60)}}},disabledDate:function(e){return e&&e>C()().endOf("day")}})}),(0,O.jsx)(o.Z.Item,{label:"\u7ed3\u675f\u65f6\u95f4",name:"toDate",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ed3\u675f\u65f6\u95f4"}],children:(0,O.jsx)(c.Z,{showTime:{defaultValue:C()("00:00:00","HH:mm:ss")},disabledTime:function(){var e;return"D"===(null===We||void 0===We?void 0:We.cycleUnit)&&(e=function(){return ot(0,24)}),{disabledHours:e,disabledMinutes:function(){return ot(0,60)},disabledSeconds:function(){return ot(0,60)}}},disabledDate:function(e){return e&&e>C()().endOf("day")}})})]}),(0,O.jsx)(l.Z,{title:"\u7236\u5b50\u5173\u8054\u5217\u8868",visible:ke,footer:null,width:1700,onCancel:function(){xe(!1)},children:(0,O.jsx)(v.Z,{titleNode:null,rowKey:function(e){return e.taskId},columns:[{title:"\u4efb\u52a1\u540d\u79f0",dataIndex:"taskName",key:"taskName",width:400,render:function(e,n){return(0,O.jsx)("div",{children:(0,O.jsx)("div",{className:"pb8 link",onClick:function(){t({pathname:"/data_model/data_pipeline/instance_manager",search:"?".concat((0,_.fW)({taskId:n.taskId}))})},children:n.taskName})})}},{title:"\u4efb\u52a1\u540d\u79f0",dataIndex:"taskId",key:"taskId",width:250,render:function(e,t){return(0,O.jsxs)("div",{children:[(0,O.jsx)("span",{className:"pr4",children:t.taskId}),(0,O.jsx)(S.CopyToClipboard,{text:t.taskId,onCopy:function(){d.ZP.success("\u5df2\u6210\u529f\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,O.jsx)(N.Z,{})})]})}},{title:"\u4efb\u52a1\u7c7b\u578b",dataIndex:"taskType",key:"taskType",width:150,render:function(e,t){return(0,O.jsx)(h.Z,{color:"blue",children:M.UQ[t.taskType]})}},{title:"\u8d1f\u8d23\u4eba",dataIndex:"inCharge",key:"inCharge",width:300},{title:"\u6570\u636e\u8d1f\u8d23\u4eba",dataIndex:"dataCharger",key:"dataCharger",width:300},{title:"\u72b6\u6001",dataIndex:"status",key:"status",width:150,render:function(e,t){return(0,O.jsx)(h.Z,{color:"default",children:M.kv[t.status]})}}],loading:J,dataSource:F,scroll:{x:1200,y:void 0}})}),(0,O.jsx)(I.Z,{title:"\u4efb\u52a1\u8fd0\u884c\u7ba1\u7406"}),(0,O.jsxs)(y.VY,{className:"appmgmt-content",children:[(0,O.jsxs)("div",{className:"d-f plr24 fw",children:[(0,O.jsxs)("div",{className:"mr8 d-f ac pt24",children:[(0,O.jsx)("span",{className:"ta-l s0",style:{width:80},children:"\u4e1a\u52a1\u5206\u7ec4\uff1a"}),(0,O.jsx)(f.Z,{placeholder:"\u4e1a\u52a1\u5206\u7ec4",style:{width:200},options:[{label:"\u5168\u90e8",value:""},{label:"\u5168\u6c11k\u6b4c",value:"swallow_ch_tag_qmkg"},{label:"qq\u97f3\u4e50",value:"swallow_ch_tag_qqmusic"},{label:"\u61d2\u4eba\u542c\u4e66",value:"swallow_ch_tag_lrts"},{label:"\u9177\u72d7\u97f3\u4e50",value:"swallow_ch_tag_kugou"}],onChange:function(e){return Ae(e)}})]}),(0,O.jsxs)("div",{className:"mr8 d-f ac pt24",children:[(0,O.jsx)("span",{className:"ta-r s0",style:{width:80},children:"\u4efb\u52a1\u540d\uff1a"}),(0,O.jsx)(u.Z,{onPressEnter:function(){ae||$||ue?dt():d.ZP.warn("\u4efb\u52a1\u540d/Id\u6216\u8005\u8d1f\u8d23\u4eba\u4e0d\u80fd\u90fd\u4e3a\u7a7a")},placeholder:"\u4efb\u52a1\u540d",style:{width:200},value:ue,onChange:function(e){return he(e.target.value)}})]}),(0,O.jsxs)("div",{className:"mr8 d-f ac pt24",children:[(0,O.jsx)("span",{className:"ta-r s0",style:{width:80},children:"\u4efb\u52a1ID\uff1a"}),(0,O.jsx)(u.Z,{onPressEnter:function(){ae||$||ue?dt():d.ZP.warn("\u4efb\u52a1\u540d/Id\u6216\u8005\u8d1f\u8d23\u4eba\u4e0d\u80fd\u90fd\u4e3a\u7a7a")},placeholder:"\u4efb\u52a1Id",style:{width:200},value:ae,onChange:function(e){return se(e.target.value)}})]}),(0,O.jsxs)("div",{className:"mr8 d-f ac pt24",children:[(0,O.jsx)("span",{className:"ta-r s0",style:{width:80},children:"\u89c6\u56feID\uff1a"}),(0,O.jsx)(u.Z,{onPressEnter:function(){ae||$||ue?dt():d.ZP.warn("\u4efb\u52a1\u540d/Id\u6216\u8005\u8d1f\u8d23\u4eba\u4e0d\u80fd\u90fd\u4e3a\u7a7a")},placeholder:"\u89c6\u56feID",style:{width:200},value:ce,onChange:function(e){return le(e.target.value)}})]}),(0,O.jsxs)("div",{className:"mr8 d-f ac pt24",children:[(0,O.jsx)("span",{className:"ta-r s0",style:{width:80},children:"\u8d1f\u8d23\u4eba\uff1a"}),(0,O.jsx)(u.Z,{onPressEnter:function(){ae||$||ue?dt():d.ZP.warn("\u4efb\u52a1\u540d/Id\u6216\u8005\u8d1f\u8d23\u4eba\u4e0d\u80fd\u90fd\u4e3a\u7a7a")},placeholder:"\u8d1f\u8d23\u4eba/\u82f1\u6587\u540d",style:{width:200},value:$,onChange:function(e){return ee(e.target.value)}})]}),(0,O.jsx)(m.Z,{className:"mt24",type:"primary",onClick:function(){ae||$||ue?dt():d.ZP.warn("\u4efb\u52a1\u540d/Id\u6216\u8005\u8d1f\u8d23\u4eba\u4e0d\u80fd\u90fd\u4e3a\u7a7a")},children:"\u641c\u7d22"})]}),(0,O.jsx)("div",{className:"p16",children:(0,O.jsx)(v.Z,{titleNode:(0,O.jsx)(k.Z,{className:"tablebox-title",children:"\u4efb\u52a1\u5217\u8868"}),buttonNode:(0,O.jsx)("div",{children:(0,O.jsx)(m.Z,{type:"primary",onClick:function(){Qe.length?l.Z.confirm({title:"\u6279\u91cf\u5220\u9664",icon:(0,O.jsx)(b.Z,{}),content:"\u786e\u5b9a\u6279\u91cf\u5220\u9664\u4efb\u52a1?",okText:"\u786e\u8ba4\u6279\u91cf\u5220\u9664",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,t){(0,g.Eh)({id:Qe.join(",")}).then((function(t){e("")})).catch((function(e){t()}))})).then((function(e){d.ZP.success("\u6279\u91cf\u5220\u9664\u6210\u529f"),dt()})).catch((function(){d.ZP.error("\u6279\u91cf\u5220\u9664\u5931\u8d25")}))},onCancel:function(){}}):d.ZP.warn("\u8bf7\u5148\u9009\u62e9")},children:"\u6279\u91cf\u5220\u9664"})}),rowKey:function(e){return e.taskId},columns:[{title:"\u4efb\u52a1\u540d\u79f0",dataIndex:"taskName",key:"taskName",width:400,fixed:"left",render:function(e,n){return(0,O.jsx)("div",{children:(0,O.jsx)("div",{className:"link",onClick:function(){t({pathname:"/data_model/data_pipeline/instance_manager",search:"?".concat((0,_.fW)({taskId:n.taskId}))})},children:n.taskName})})}},{title:"\u4efb\u52a1Id",dataIndex:"taskId",key:"taskId",width:220,render:function(e,n){return(0,O.jsxs)("div",{children:[(0,O.jsx)("span",{className:"pr8 link",onClick:function(){t({pathname:"/data_model/data_pipeline/instance_manager",search:"?".concat((0,_.fW)({taskId:n.taskId}))})},children:n.taskId}),(0,O.jsx)(S.CopyToClipboard,{text:n.taskId,onCopy:function(){d.ZP.success("\u5df2\u6210\u529f\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,O.jsx)(N.Z,{})})]})}},{title:"\u6570\u636e\u8d77\u59cb\u65f6\u95f4",dataIndex:"startDate",key:"startDate",width:220,sorter:function(e,t){return new Date(e.startDate).valueOf()-new Date(t.startDate).valueOf()}},{title:"\u5468\u671f",dataIndex:"cycleNumber",key:"cycleNumber",width:100,render:function(e,t){return(0,O.jsxs)("div",{className:"",children:["R"===t.cycleUnit?"":t.cycleNumber,M.np[t.cycleUnit]]})}},{title:"\u4efb\u52a1\u7c7b\u578b",dataIndex:"taskType",key:"taskType",width:200,render:function(e,t){return(0,O.jsx)(h.Z,{color:"blue",children:M.UQ[t.taskType]})}},{title:"\u8d1f\u8d23\u4eba",dataIndex:"inCharge",key:"inCharge",width:300,render:function(e,t){return(0,O.jsx)(x.Z,{title:t.inCharge,placement:"topLeft",children:(0,O.jsx)("div",{className:"ellip1",children:t.inCharge})})}},{title:"\u6570\u636e\u8d1f\u8d23\u4eba",dataIndex:"dataCharger",key:"dataCharger",width:150},{title:"\u72b6\u6001",dataIndex:"status",key:"status",width:150,render:function(e,t){return(0,O.jsx)(h.Z,{color:"blue",children:M.kv[t.status]})}},{title:"\u64cd\u4f5c",width:220,dataIndex:"handle",key:"handle",align:"right",fixed:"right",render:function(e,n){return(0,O.jsxs)(Z.Z,{size:"middle",children:[(0,O.jsx)("span",{className:"link",onClick:function(){t({pathname:"/data_model/data_pipeline/instance_manager",search:"?".concat((0,_.fW)({taskId:n.taskId}))})},children:"\u5b9e\u4f8b"}),(0,O.jsx)("span",{className:"link",onClick:function(){var e;xe(!0),e=n.taskId,L(!0),W([]),(0,g.Rt)({taskId:e}).then((function(e){var t=e.data.data,n=t.parent,s=t.son;W([].concat((0,a.Z)(n),(0,a.Z)(s)))})).finally((function(){L(!1)}))},children:"\u7236\u5b50\u5173\u8054"}),(0,O.jsx)(p.Z,{overlay:(0,O.jsxs)(j.Z,{children:[(0,O.jsx)(j.Z.Item,{onClick:function(){ze(n.inCharge),Me(n.taskId),Pe(!0)},children:(0,O.jsx)("span",{className:"link",children:"\u4fee\u6539\u8d1f\u8d23\u4eba"})},"duty"),(0,O.jsx)(j.Z.Item,{disabled:1===+n.cycleNumber&&"O"===n.cycleUnit||"F"===n.status,onClick:function(){we(!0),Me(n.taskId),Be(n)},children:(0,O.jsx)("span",{className:1===+n.cycleNumber&&"O"===n.cycleUnit||"F"===n.status?"link-disable":"link",children:"\u8865\u5f55"})},"record"),(0,O.jsx)(j.Z.Item,{disabled:"F"===n.status,onClick:function(){l.Z.confirm({title:"\u51bb\u7ed3",icon:(0,O.jsx)(b.Z,{}),content:"\u786e\u5b9a\u51bb\u7ed3\u8be5\u4efb\u52a1?",okText:"\u786e\u8ba4\u51bb\u7ed3",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,t){(0,g.dP)({taskIds:n.taskId,user:H.Z.get("myapp_username")||""}).then((function(t){e("")})).catch((function(e){t()}))})).then((function(e){d.ZP.success("\u51bb\u7ed3\u6210\u529f"),dt()})).catch((function(){d.ZP.error("\u51bb\u7ed3\u5931\u8d25")}))},onCancel:function(){}})},children:(0,O.jsx)("span",{className:"F"===n.status?"link-disable":"link",children:"\u51bb\u7ed3"})},"freeze"),(0,O.jsx)(j.Z.Item,{disabled:"F"!==n.status,onClick:function(){l.Z.confirm({title:"\u89e3\u9664\u51bb\u7ed3",icon:(0,O.jsx)(b.Z,{}),content:"\u786e\u5b9a\u89e3\u9664\u51bb\u7ed3\u8be5\u4efb\u52a1?",okText:"\u786e\u8ba4\u89e3\u9664",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,t){(0,g.bn)({taskIds:n.taskId}).then((function(t){e("")})).catch((function(e){t()}))})).then((function(e){d.ZP.success("\u89e3\u51bb\u6210\u529f"),dt()})).catch((function(){d.ZP.error("\u89e3\u51bb\u5931\u8d25")}))},onCancel:function(){}})},children:(0,O.jsx)("span",{className:"F"!==n.status?"link-disable":"link",children:"\u89e3\u9664\u51bb\u7ed3"})},"unfreeze"),(0,O.jsx)(j.Z.Item,{onClick:function(){l.Z.confirm({title:"\u5220\u9664",icon:(0,O.jsx)(b.Z,{}),content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1?",okText:"\u786e\u8ba4\u5220\u9664",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,t){(0,g.Eh)({id:n.taskId}).then((function(t){e("")})).catch((function(e){t()}))})).then((function(e){d.ZP.success("\u5220\u9664\u6210\u529f"),dt()})).catch((function(){d.ZP.error("\u5220\u9664\u5931\u8d25")}))},onCancel:function(){}})},children:(0,O.jsx)("span",{className:"F"===n.status?"link-disable":"link",children:"\u5220\u9664"})},"itemDelete")]}),children:(0,O.jsxs)("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:["\u66f4\u591a ",(0,O.jsx)(P.Z,{})]})})]})}}],loading:K,pagination:at,dataSource:U,onChange:function(e){dt(e)},rowSelection:{type:"checkbox",columnWidth:80,selectedRowKeys:Qe,onChange:function(e){Ve(e)}},scroll:{x:1200,y:ct}})})]})]})}}}]);
//# sourceMappingURL=841.1449d297.chunk.js.map