"use strict";(self.webpackChunkkubeflow_frontend=self.webpackChunkkubeflow_frontend||[]).push([[281],{72623:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(29439),r=n(4519),i=n(96039),c=(n(49446),n(12967),n(46346),n(34073),n(8998),n(86757),n(85043),n(75218),n(91798),n(72730),n(18700),n(63012),n(20824),n(93341),n(2556));function o(e){var t=(0,r.useState)(null),n=(0,a.Z)(t,2),o=(n[0],n[1]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.fk,{editorDidMount:function(e){o(e)},value:e.value||"",options:{placeholder:"\u8f93\u5165SQL\u8fdb\u884c\u67e5\u8be2",mode:"sql",theme:"solarized",lineNumbers:!0,smartIndent:!0,lineWrapping:!0,styleActiveLine:!0,foldGutter:!0,matchBrackets:!0,autoCloseBrackets:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1,alignWithWord:!0}},onCursorActivity:function(t){var n=t.getSelection();e.onSelect&&e.onSelect(n)},onBeforeChange:function(t,n,a){e.readonly||("complete"!==n.origin&&t.execCommand("autocomplete"),e.onChange&&e.onChange(a))}})})}},92306:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(93433),r=n(29439),i=n(1413),c=n(44925),o=n(4519),s=n(35492),l=n(20011),u=n(81190),d=n(28532),f=n(12513),h=n(90575),m=n(10089),p=n(2704),g=n(25738),v=n(66724),x=n(602),Z=n(24520),j=n.n(Z),y=n(74308),b=n(2556),_=["onResize","width"],S=n(17972),w=function(){return(0,b.jsxs)(s.Z,{justify:"center",align:"middle",style:{height:360,flexDirection:"column"},children:[(0,b.jsx)("img",{src:x,style:{width:266},alt:""}),(0,b.jsx)("div",{children:"\u6682\u65e0\u6570\u636e"})]})},k=function(e){var t=e.onResize,n=e.width,a=(0,c.Z)(e,_);return n?(0,b.jsx)(y.Resizable,{width:n,height:0,handle:(0,b.jsx)("span",{className:"react-resizable-handle",onClick:function(e){e.stopPropagation()}}),onResize:t,draggableOpts:{enableUserSelectHack:!1},children:(0,b.jsx)("th",(0,i.Z)((0,i.Z)({},a),{},{style:(0,i.Z)((0,i.Z)({},null===a||void 0===a?void 0:a.style),{},{userSelect:"none"})}))}):(0,b.jsx)("th",(0,i.Z)({},a))},C=function(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),c=n[0],x=n[1],Z=(0,o.useState)({header:[],data:[]}),y=(0,r.Z)(Z,2),_=y[0],C=y[1],I=(0,o.useState)([]),N=(0,r.Z)(I,2),z=N[0],E=N[1],O=(0,o.useState)(e.columns),q=(0,r.Z)(O,2),H=q[0],P=q[1],B=function(t){return function(n,r){var c=r.size;if(!(c.width<100)){var o=(0,a.Z)(H);o[t]=(0,i.Z)((0,i.Z)({},o[t]),{},{width:c.width});var s=o.reduce((function(e,t){return e+t.width||100}),0)+200;localStorage.setItem(e.tableKey||"",JSON.stringify(o)),D((0,i.Z)((0,i.Z)({},J),{},{x:s})),P(o)}}},R=H.map((function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{width:e.width||200,onHeaderCell:function(e){return{width:e.width,onResize:B(t)}}})})),G=(0,o.useState)(e.scroll),M=(0,r.Z)(G,2),J=M[0],D=M[1];(0,o.useEffect)((function(){P(e.columns)}),[e.columns]),(0,o.useEffect)((function(){D(e.scroll)}),[e.scroll]),(0,o.useEffect)((function(){if(e.dataSource){var t=e.columns.filter((function(e){return~z.indexOf(e.dataIndex)}));K(t,e.dataSource)}}),[e.dataSource,e.columns]);var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.map((function(e){return e.dataIndex})).filter((function(e){return"handle"!==e})),a=e.map((function(e){return e.title})).filter((function(e){return"\u64cd\u4f5c"!==e})),r=[];t.forEach((function(e){var t={};n.map((function(n){var a=e[n];t[n]=a||""})),r.push(t)})),C({header:a,data:r})},T=function(){var e=_.header,t=_.data,n="";return e.length&&t.length?(n="|"+e.join("|")+"|\n",t.forEach((function(e){var t=Object.values(e).map((function(e){return""===e?" ":e}));n=n+"|"+t.join("|")+"|\n"}))):n="",n},V=function(){var e=_.header,t=_.data,n="";return e.length&&t.length?(n=e.join("\t")+"\n",t.forEach((function(e){var t=Object.values(e).map((function(e){return""===e?" ":e}));n=n+t.join("\t")+"\n"}))):n="",n};return(0,b.jsxs)(l.Z,{className:"tablebox",direction:"vertical",size:"middle",children:[(0,b.jsxs)(u.Z,{width:1e3,maskClosable:!1,centered:!0,bodyStyle:{maxHeight:500,overflow:"auto"},visible:c,title:"\u5bfc\u51fa\u6570\u636e",onCancel:function(){x(!1)},footer:null,children:[(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsxs)("div",{className:"mb16",children:[(0,b.jsx)("span",{className:"pr8",children:"\u9009\u62e9\u9700\u8981\u5bfc\u51fa\u7684\u5217\uff1a"}),(0,b.jsx)(d.Z.Group,{options:e.columns.map((function(e){return{label:e.title,value:e.dataIndex}})).filter((function(e){return"handle"!==e.value})),defaultValue:[],value:z,onChange:function(t){E(t);var n=e.columns.filter((function(e){return~t.indexOf(e.dataIndex)}));K(n,e.dataSource)}})]}),(0,b.jsxs)("div",{style:{position:"absolute",right:0,bottom:0},children:[(0,b.jsx)(f.Z,{size:"small",type:"link",onClick:function(){E(e.columns.map((function(e){return e.dataIndex})).filter((function(e){return"handle"!==e}))),K(e.columns,e.dataSource)},children:"\u5168\u9009"}),(0,b.jsx)(f.Z,{size:"small",type:"link",onClick:function(){E([]),K([],e.dataSource)},children:"\u53cd\u9009"})]})]}),(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(h.Z.TabPane,{tab:"Wiki\u683c\u5f0f",children:(0,b.jsx)(S,{text:T(),onCopy:function(){return m.ZP.success("\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,b.jsx)("pre",{style:{cursor:"pointer",minHeight:100},children:(0,b.jsx)("code",{children:T()})})})},"jira"),(0,b.jsx)(h.Z.TabPane,{tab:"Text\u683c\u5f0f",children:(0,b.jsx)(S,{text:V(),onCopy:function(){return m.ZP.success("\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,b.jsx)("pre",{style:{cursor:"pointer",minHeight:100},children:(0,b.jsx)("code",{children:V()})})})},"test"),(0,b.jsx)(h.Z.TabPane,{tab:"Excel\u683c\u5f0f",children:(0,b.jsx)(s.Z,{justify:"center",align:"middle",style:{minHeight:100},children:(0,b.jsx)(p.Z,{children:(0,b.jsx)(f.Z,{type:"primary",onClick:function(){var e={fileName:"result"};e.datas=[{sheetData:_.data,sheetName:"sheet",sheetHeader:_.header}],new(j())(e).saveExcel()},children:"\u5bfc\u51faExcel"})})})},"excel")]})]}),e.titleNode||e.buttonNode||!e.cancelExportData?(0,b.jsxs)(s.Z,{justify:"space-between",align:"middle",children:[(0,b.jsx)(p.Z,{children:(0,b.jsx)(l.Z,{align:"center",children:e.titleNode})}),(0,b.jsx)(p.Z,{children:(0,b.jsxs)(l.Z,{align:"center",children:[e.buttonNode,e.cancelExportData?null:(0,b.jsx)(f.Z,{style:{marginLeft:6},onClick:function(){return x(!0)},children:"\u5bfc\u51fa\u6570\u636e"})]})})]}):null,(0,b.jsx)(g.ZP,{renderEmpty:w,children:(0,b.jsx)(v.Z,{size:e.size||"middle",rowKey:e.rowKey?e.rowKey:"id",dataSource:e.dataSource,components:{header:{cell:k}},columns:R,pagination:!1!==e.pagination&&(0,i.Z)({},e.pagination),scroll:J,loading:e.loading,onChange:e.onChange,rowSelection:e.rowSelection})})]})}},51998:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(4942),r=n(1413),i=n(93433),c=n(29439),o=n(4519),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},l=n(64158),u=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:s}))};u.displayName="MenuOutlined";var d=o.forwardRef(u),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},h=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:f}))};h.displayName="SaveOutlined";var m=o.forwardRef(h),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},g=function(e,t){return o.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:p}))};g.displayName="StopOutlined";var v=o.forwardRef(g),x=n(10089),Z=n(90575),j=n(76245),y=n(12513),b=n(81190),_=n(61143),S=n(72623),w=n(6857),k=n(92306),C=n(51216),I=n.n(C),N=n(2556);function z(){var e=(0,o.useState)(),t=(0,c.Z)(e,2),n=t[0],s=t[1],l=JSON.parse(localStorage.getItem("dataSearch")||JSON.stringify({1:{tabId:"1",title:"\u65b0\u67e5\u8be2 1",status:"init"}})),u=(0,o.useState)([]),f=(0,c.Z)(u,2),h=f[0],p=f[1],g=(0,o.useState)([]),C=(0,c.Z)(g,2),z=C[0],E=C[1],O=(0,o.useState)(""),q=(0,c.Z)(O,2),H=q[0],P=(q[1],(0,o.useState)()),B=(0,c.Z)(P,2),R=B[0],G=B[1],M=(0,o.useRef)(),J=(0,o.useState)(l),D=(0,c.Z)(J,2),K=D[0],T=D[1],V=(0,o.useRef)(K),L=function(e){V.current=e,T(e)},W=(0,o.useState)("1"),X=(0,c.Z)(W,2),Y=X[0],U=X[1],A=(0,o.useRef)(Y),F=function(e){A.current=e,U(e)},Q=Object.entries(K).reduce((function(e,t){var n=(0,c.Z)(t,2),a=(n[0],n[1]);return[].concat((0,i.Z)(e),[(0,r.Z)({},a)])}),[]),$=(0,o.useState)(Q),ee=(0,c.Z)($,2),te=ee[0],ne=ee[1],ae=(0,o.useRef)(Object.entries(K).length),re=function(e,t){var n=(0,r.Z)({},V.current);void 0!==t?n[t]=(0,r.Z)({tabId:e.tabId||"",title:e.title||"",status:e.status||"init",appGroup:H},e):n[Y]=(0,r.Z)((0,r.Z)({},n[Y]),e),localStorage.setItem("dataSearch",JSON.stringify(n)),V.current=n,L(n)};(0,o.useEffect)((function(){var e,t=document.getElementById("buttonDrag");t&&((e=t).onmousedown=function(t){var n="",a=t.clientX,r=t.clientY,i=e.offsetWidth,c=e.offsetHeight,o=e.offsetLeft,s=e.offsetTop;return a>o+i-30?n="right":a<o+30&&(n="left"),r>s+c-30?n="down":r<s+30&&(n="top"),document.onmousemove=function(t){switch(n){case"right":e.style.width=i+(t.clientX-a)+"px";break;case"left":e.style.width=i-(t.clientX-a)+"px",e.style.left=o+(t.clientX-a)+"px";break;case"top":e.style.height=c-(t.clientY-r)+"px",e.style.top=s+(t.clientY-r)+"px";break;case"down":e.style.height=c+(t.clientY-r)+"px"}},e.onmouseup=function(){document.onmousemove=null},!1})}),[]),(0,o.useEffect)((function(){return function(){Object.entries(K).forEach((function(e){var t=(0,c.Z)(e,1)[0];clearInterval(V.current[t].timer)}))}}),[]),(0,o.useEffect)((function(){console.log("activeKey",Y),K[Y]&&"running"===K[Y].status&&ce(K[Y].reqId||"")}),[Y]);var ie=function(e){(function(e){return _.Z.get("/idex/look/".concat(e))})(e).then((function(e){console.log(e.data);var t=e.data,n=t.state,i=t.result,c=t.err_msg,o=t.result_url,l=t.spark_log_url;"running"===n&&G(l),"success"===n&&(re({status:n,downloadUrl:o}),clearInterval(V.current[Y].timer),function(e){var t=e[0]||[],n=e.slice(1).map((function(e){return e.reduce((function(e,n,i){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t[i],n))}),{})})),i=t.map((function(e){return{title:e,dataIndex:e,key:e,width:100}}));p(i),E(n.slice(0,10))}(i)),"failure"===n&&(re({status:n}),clearInterval(V.current[Y].timer),s(c))})).catch((function(){clearInterval(V.current[Y].timer),x.ZP.error("\u67e5\u8be2\u7ed3\u679c\u5931\u8d25\uff0c\u5c1d\u8bd5\u91cd\u65b0\u8fd0\u884c"),re({status:"failure"})}))},ce=function(e){V.current[Y].timer&&clearInterval(V.current[Y].timer);var t=setInterval((function(){ie(e)}),1e4);re({reqId:e,status:"running",timer:t}),ie(e)};return(0,N.jsx)("div",{className:"datasearch-container p16 fade-in",children:(0,N.jsx)(Z.Z,{type:"editable-card",onChange:function(e){Object.entries(K).forEach((function(t){var n=(0,c.Z)(t,1)[0];n!==e&&clearInterval(K[n].timer)})),s(void 0),G(void 0),p([]),E([]),F(e)},activeKey:Y,onEdit:function(e,t){"add"===t?function(){clearInterval(V.current[Y].timer);var e=Math.random().toString(36).substring(2),t="\u65b0\u67e5\u8be2 ".concat(++ae.current),n=(0,i.Z)(te);n.push({title:t,tabId:e,status:"init",appGroup:H}),ne(n),F(e);var c=(0,r.Z)((0,r.Z)({},K),{},(0,a.Z)({},e,{tabId:e,title:t,status:"init",appGroup:H}));L(c),localStorage.setItem("dataSearch",JSON.stringify(c))}():function(e){var t=Y,n=-1;te.forEach((function(t,a){t.tabId===e&&(n=a-1)}));var a=te.filter((function(t){return t.tabId!==e}));a.length&&t===e&&(t=n>=0?a[n].tabId:a[0].tabId),ne(a),F(t);var i=(0,r.Z)({},K);delete i[e],L(i),localStorage.setItem("dataSearch",JSON.stringify(i))}(e)},children:te.map((function(e,t){var i;return(0,N.jsx)(Z.Z.TabPane,{tab:"\u65b0\u67e5\u8be2 ".concat(t+1),closable:0!==t,children:(0,N.jsxs)("div",{className:"d-f fd-c h100",children:[(0,N.jsx)("div",{className:"flex2 s0 ov-a",children:(0,N.jsx)(S.Z,{value:null===(i=K[Y])||void 0===i?void 0:i.sqlContent,onSelect:function(e){},onChange:function(t){var n,i,c=(0,r.Z)((0,r.Z)({},K),{},(0,a.Z)({},Y,{tabId:Y,sqlContent:""===t?void 0:t,title:e.title,status:null===(n=K[Y])||void 0===n?void 0:n.status,appGroup:null===(i=K[Y])||void 0===i?void 0:i.appGroup}));localStorage.setItem("dataSearch",JSON.stringify(c)),L(c)}})}),(0,N.jsxs)("div",{className:"ov-a",id:"showBox",ref:M,style:{height:500},children:[(0,N.jsx)(I(),{axis:"y",onStart:function(){},onDrag:function(e){var t=document.getElementById("showBox");if(t){var n=document.body.clientHeight-e.y;t.style.height="".concat(n,"px")}},onStop:function(){},children:(0,N.jsx)("div",{className:"ta-c",style:{cursor:"ns-resize"},children:(0,N.jsx)(d,{})})}),(0,N.jsxs)("div",{className:"p8 bor-l bor-r b-side d-f ac jc-r bg-w",children:[(0,N.jsx)(j.Z,{title:"\u4fdd\u5b58",children:(0,N.jsx)(m,{className:"mr16 cp",style:{fontSize:18},onClick:function(){localStorage.setItem("dataSearch",JSON.stringify(K)),x.ZP.success("\u4fdd\u5b58\u6210\u529f")}})}),(0,N.jsx)(w.Z,{value:K[Y].appGroup,isOpenSearchMatch:!0,onChange:function(e){re({appGroup:e})},options:["g_sng_qqmusic_tme_music_dataplatform","g_other_tme_privacy_computing_mdatapricommon","g_other_tme_privacy_computing_mdataprikugou","g_other_tme_privacy_computing_mdataprikuwo","g_other_tme_privacy_computing_mdataprilanren","g_other_tme_privacy_computing_mdatapriqqmusic","g_other_tme_privacy_computing_mdatapriqmkg","g_sng_qqmusic_tme_music_dataprivacy","g_other_tme_infrastructure_tme_central_kuwo","g_sng_qqmusic_g_sng_qqmusic_lrts"],placeholder:"\u5e94\u7528\u7ec4",width:"400px"}),(0,N.jsx)(y.Z,{type:"default",className:"mlr16",disabled:"success"!==K[Y].status,onClick:function(){window.open(K[Y].downloadUrl,"bank")},children:"\u4e0b\u8f7d\u7ed3\u679c"}),(0,N.jsxs)(y.Z,{type:"default",disabled:"running"!==K[Y].status,className:"mr16",onClick:function(){b.Z.confirm({title:"\u7ec8\u6b62",icon:(0,N.jsx)(v,{}),content:"\u786e\u5b9a\u7ec8\u6b62?",okText:"\u786e\u8ba4\u7ec8\u6b62",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,t){re({status:"init",reqId:void 0}),clearInterval(V.current[Y].timer),e("")})).then((function(e){x.ZP.success("\u7ec8\u6b62\u6210\u529f")})).catch((function(){x.ZP.error("\u7ec8\u6b62\u5931\u8d25")}))},onCancel:function(){}})},children:[(0,N.jsx)(v,{})," \u7ec8\u6b62"]}),(0,N.jsx)(y.Z,{type:"primary",loading:"running"===K[Y].status,onClick:function(){var e,t;K[Y].appGroup?(re({status:"running"}),s(void 0),G(void 0),(t={tdw_app_group:K[Y].appGroup,sql:(null===(e=K[Y])||void 0===e?void 0:e.sqlContent)||""},_.Z.post("/idex/submit_task",t)).then((function(e){console.log("task_id",e.data.task_id);var t=e.data,n=t.err_msg,a=t.task_id;n&&(re({status:"failure"}),s(n)),a&&ce(a)})).catch((function(e){re({status:"failure"})}))):x.ZP.warning("\u8bf7\u5148\u9009\u62e9\u5e94\u7528\u7ec4")},children:"\u8fd0\u884c"})]}),(0,N.jsxs)("div",{className:"flex1 bor b-side s0 ov-a bg-w p-r h100",children:[(0,N.jsxs)("div",{className:"pt8",children:[(0,N.jsx)("div",{className:"tag-result bg-theme c-text-w mr16",children:"\u7ed3\u679c"}),R?(0,N.jsx)(y.Z,{type:"link",size:"small",onClick:function(){window.open(R,"bank")},children:"\u67e5\u770b\u65e5\u5fd7"}):null]}),(0,N.jsx)("div",{className:"plr16 pt8",children:n||(0,N.jsx)(k.Z,{loading:"running"===K[Y].status,cancelExportData:!0,rowKey:function(e){return JSON.stringify(e)},columns:h,pagination:!1,dataSource:z,scroll:{x:1200}})})]})]})]})},e.tabId)}))})})}},602:function(e,t,n){e.exports=n.p+"static/media/emptyBg.15fdf5f39309784ac66e.png"}}]);
//# sourceMappingURL=281.41032e00.chunk.js.map