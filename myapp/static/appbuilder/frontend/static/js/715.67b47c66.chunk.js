"use strict";(self.webpackChunkkubeflow_frontend=self.webpackChunkkubeflow_frontend||[]).push([[715],{56304:function(e,t,n){n.d(t,{Zy:function(){return i},iu:function(){return l},rA:function(){return s},wN:function(){return o}});var r=n(61143),a="http://fetian.gateway.tme.woa.com",i=function(e){return r.Z.get("/api/v1/getDatabasesOverview",{params:e,baseURL:"http://musichouse.data.tme.woa.com"})},l=function(e){return r.Z.get("/api/swallow/lifecycle/offline/set",{params:e})},s=function(e){return r.Z.get("/getExecutingTasks",{params:{taskStatusKey:e},baseURL:a})},o=function(e){return r.Z.get("/kill",{params:{task_id:e},baseURL:a})}},72623:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(29439),a=n(4519),i=n(96039),l=(n(49446),n(12967),n(46346),n(34073),n(8998),n(86757),n(85043),n(75218),n(91798),n(72730),n(18700),n(63012),n(20824),n(93341),n(2556));function s(e){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),s=(n[0],n[1]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.fk,{editorDidMount:function(e){s(e)},value:e.value||"",options:{placeholder:"\u8f93\u5165SQL\u8fdb\u884c\u67e5\u8be2",mode:"sql",theme:"solarized",lineNumbers:!0,smartIndent:!0,lineWrapping:!0,styleActiveLine:!0,foldGutter:!0,matchBrackets:!0,autoCloseBrackets:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1,alignWithWord:!0}},onCursorActivity:function(t){var n=t.getSelection();e.onSelect&&e.onSelect(n)},onBeforeChange:function(t,n,r){e.readonly||("complete"!==n.origin&&t.execCommand("autocomplete"),e.onChange&&e.onChange(r))}})})}},92306:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(93433),a=n(29439),i=n(1413),l=n(44925),s=n(4519),o=n(35492),c=n(20011),u=n(81190),d=n(28532),f=n(12513),h=n(90575),m=n(10089),p=n(2704),x=n(25738),v=n(66724),g=n(602),j=n(24520),y=n.n(j),Z=n(74308),C=n(2556),N=["onResize","width"],b=n(17972),k=function(){return(0,C.jsxs)(o.Z,{justify:"center",align:"middle",style:{height:360,flexDirection:"column"},children:[(0,C.jsx)("img",{src:g,style:{width:266},alt:""}),(0,C.jsx)("div",{children:"\u6682\u65e0\u6570\u636e"})]})},w=function(e){var t=e.onResize,n=e.width,r=(0,l.Z)(e,N);return n?(0,C.jsx)(Z.Resizable,{width:n,height:0,handle:(0,C.jsx)("span",{className:"react-resizable-handle",onClick:function(e){e.stopPropagation()}}),onResize:t,draggableOpts:{enableUserSelectHack:!1},children:(0,C.jsx)("th",(0,i.Z)((0,i.Z)({},r),{},{style:(0,i.Z)((0,i.Z)({},null===r||void 0===r?void 0:r.style),{},{userSelect:"none"})}))}):(0,C.jsx)("th",(0,i.Z)({},r))},S=function(e){var t=(0,s.useState)(!1),n=(0,a.Z)(t,2),l=n[0],g=n[1],j=(0,s.useState)({header:[],data:[]}),Z=(0,a.Z)(j,2),N=Z[0],S=Z[1],I=(0,s.useState)([]),O=(0,a.Z)(I,2),P=O[0],E=O[1],D=(0,s.useState)(e.columns),T=(0,a.Z)(D,2),_=T[0],M=T[1],z=function(t){return function(n,a){var l=a.size;if(!(l.width<100)){var s=(0,r.Z)(_);s[t]=(0,i.Z)((0,i.Z)({},s[t]),{},{width:l.width});var o=s.reduce((function(e,t){return e+t.width||100}),0)+200;localStorage.setItem(e.tableKey||"",JSON.stringify(s)),B((0,i.Z)((0,i.Z)({},L),{},{x:o})),M(s)}}},H=_.map((function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{width:e.width||200,onHeaderCell:function(e){return{width:e.width,onResize:z(t)}}})})),R=(0,s.useState)(e.scroll),q=(0,a.Z)(R,2),L=q[0],B=q[1];(0,s.useEffect)((function(){M(e.columns)}),[e.columns]),(0,s.useEffect)((function(){B(e.scroll)}),[e.scroll]),(0,s.useEffect)((function(){if(e.dataSource){var t=e.columns.filter((function(e){return~P.indexOf(e.dataIndex)}));W(t,e.dataSource)}}),[e.dataSource,e.columns]);var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.map((function(e){return e.dataIndex})).filter((function(e){return"handle"!==e})),r=e.map((function(e){return e.title})).filter((function(e){return"\u64cd\u4f5c"!==e})),a=[];t.forEach((function(e){var t={};n.map((function(n){var r=e[n];t[n]=r||""})),a.push(t)})),S({header:r,data:a})},F=function(){var e=N.header,t=N.data,n="";return e.length&&t.length?(n="|"+e.join("|")+"|\n",t.forEach((function(e){var t=Object.values(e).map((function(e){return""===e?" ":e}));n=n+"|"+t.join("|")+"|\n"}))):n="",n},K=function(){var e=N.header,t=N.data,n="";return e.length&&t.length?(n=e.join("\t")+"\n",t.forEach((function(e){var t=Object.values(e).map((function(e){return""===e?" ":e}));n=n+t.join("\t")+"\n"}))):n="",n};return(0,C.jsxs)(c.Z,{className:"tablebox",direction:"vertical",size:"middle",children:[(0,C.jsxs)(u.Z,{width:1e3,maskClosable:!1,centered:!0,bodyStyle:{maxHeight:500,overflow:"auto"},visible:l,title:"\u5bfc\u51fa\u6570\u636e",onCancel:function(){g(!1)},footer:null,children:[(0,C.jsxs)("div",{style:{position:"relative"},children:[(0,C.jsxs)("div",{className:"mb16",children:[(0,C.jsx)("span",{className:"pr8",children:"\u9009\u62e9\u9700\u8981\u5bfc\u51fa\u7684\u5217\uff1a"}),(0,C.jsx)(d.Z.Group,{options:e.columns.map((function(e){return{label:e.title,value:e.dataIndex}})).filter((function(e){return"handle"!==e.value})),defaultValue:[],value:P,onChange:function(t){E(t);var n=e.columns.filter((function(e){return~t.indexOf(e.dataIndex)}));W(n,e.dataSource)}})]}),(0,C.jsxs)("div",{style:{position:"absolute",right:0,bottom:0},children:[(0,C.jsx)(f.Z,{size:"small",type:"link",onClick:function(){E(e.columns.map((function(e){return e.dataIndex})).filter((function(e){return"handle"!==e}))),W(e.columns,e.dataSource)},children:"\u5168\u9009"}),(0,C.jsx)(f.Z,{size:"small",type:"link",onClick:function(){E([]),W([],e.dataSource)},children:"\u53cd\u9009"})]})]}),(0,C.jsxs)(h.Z,{children:[(0,C.jsx)(h.Z.TabPane,{tab:"Wiki\u683c\u5f0f",children:(0,C.jsx)(b,{text:F(),onCopy:function(){return m.ZP.success("\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,C.jsx)("pre",{style:{cursor:"pointer",minHeight:100},children:(0,C.jsx)("code",{children:F()})})})},"jira"),(0,C.jsx)(h.Z.TabPane,{tab:"Text\u683c\u5f0f",children:(0,C.jsx)(b,{text:K(),onCopy:function(){return m.ZP.success("\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,C.jsx)("pre",{style:{cursor:"pointer",minHeight:100},children:(0,C.jsx)("code",{children:K()})})})},"test"),(0,C.jsx)(h.Z.TabPane,{tab:"Excel\u683c\u5f0f",children:(0,C.jsx)(o.Z,{justify:"center",align:"middle",style:{minHeight:100},children:(0,C.jsx)(p.Z,{children:(0,C.jsx)(f.Z,{type:"primary",onClick:function(){var e={fileName:"result"};e.datas=[{sheetData:N.data,sheetName:"sheet",sheetHeader:N.header}],new(y())(e).saveExcel()},children:"\u5bfc\u51faExcel"})})})},"excel")]})]}),e.titleNode||e.buttonNode||!e.cancelExportData?(0,C.jsxs)(o.Z,{justify:"space-between",align:"middle",children:[(0,C.jsx)(p.Z,{children:(0,C.jsx)(c.Z,{align:"center",children:e.titleNode})}),(0,C.jsx)(p.Z,{children:(0,C.jsxs)(c.Z,{align:"center",children:[e.buttonNode,e.cancelExportData?null:(0,C.jsx)(f.Z,{style:{marginLeft:6},onClick:function(){return g(!0)},children:"\u5bfc\u51fa\u6570\u636e"})]})})]}):null,(0,C.jsx)(x.ZP,{renderEmpty:k,children:(0,C.jsx)(v.Z,{size:e.size||"middle",rowKey:e.rowKey?e.rowKey:"id",dataSource:e.dataSource,components:{header:{cell:w}},columns:H,pagination:!1!==e.pagination&&(0,i.Z)({},e.pagination),scroll:L,loading:e.loading,onChange:e.onChange,rowSelection:e.rowSelection})})]})}},76722:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=(n(4519),n(64252)),i=n(35492),l=n(2704),s=n(20011),o=n(2556),c=a.Z.Title,u=function(e){var t={position:"sticky",top:0};return(0,o.jsxs)(i.Z,{className:"title-header",justify:"space-between",align:"middle",style:e.noBorderBottom?(0,r.Z)({borderBottom:"none"},t):t,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(c,{className:"d-il mr12",level:5,style:{marginBottom:10},children:e.title}),(0,o.jsx)("div",{className:"d-il",children:e.breadcrumbs})]}),(0,o.jsx)(l.Z,{children:(0,o.jsx)(s.Z,{children:e.children?e.children:null})})]})}},18041:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(1413),a=n(93433),i=n(29439),l=n(4519),s=n(81190),o=n(10089),c=n(12513),u=n(2704),d=n(47474),f=n(72625),h=n(37167),m=n(76722),p=n(92306),x=n(4316),v=n(33405),g=n(17972),j=n(16548),y=n(56304),Z=n(72623),C=n(43077),N=n.n(C),b=n(2556);function k(){var e=(0,l.useState)([]),t=(0,i.Z)(e,2),n=t[0],C=t[1],k=(0,l.useRef)(n),w=function(e){k.current=e,C(e)},S=(0,l.useState)(!1),I=(0,i.Z)(S,2),O=I[0],P=I[1],E=(0,l.useState)(!1),D=(0,i.Z)(E,2),T=D[0],_=D[1],M=(0,l.useState)(""),z=(0,i.Z)(M,2),H=z[0],R=z[1],q=(0,l.useState)(0),L=(0,i.Z)(q,2),B=L[0],W=L[1],F=(0,l.useRef)(B),K=function(e){F.current=e,W(e)},A=(0,l.useState)(),U=(0,i.Z)(A,2),V=U[0],Q=U[1],Y=(0,l.useState)("task_status"),G=(0,i.Z)(Y,2),J=G[0],X=G[1],$=(0,l.useRef)(J);(0,l.useEffect)((function(){R((0,j.W9)())}),[]),(0,l.useEffect)((function(){ee()}),[]),(0,l.useEffect)((function(){var e=setInterval((function(){T||K(F.current+10),F.current>100&&(ee(),K(0))}),1e3);return function(){clearInterval(e)}}),[]);var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$.current;_(!0),(0,y.rA)(e).then((function(e){for(var t=e.data.taskInfoList,n=new Map,i=0;i<t.length;i++){var l=t[i];l.count=1,n.set(l.taskId,l)}for(var s=0;s<k.current.length;s++){var o=k.current[s],c=n.get(o.taskId);c&&(c.count=o.count+1,n.set(c.taskId,c))}var u=(0,a.Z)(n.values()).sort((function(e,t){return t.count-e.count})).map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{sql:e.sql.replaceAll("&apos;","'").replaceAll("&quot;",'"'),duration:(new Date).valueOf()-new Date(e.startTimestamp).valueOf()})}));w(u)})).finally((function(){return _(!1)}))};return(0,b.jsxs)("div",{className:"p-r",children:[T?null:(0,b.jsx)("progress",{max:"100",value:F.current,className:"progress-loading-g",id:"progress_loading"}),(0,b.jsxs)(s.Z,{title:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("span",{className:"pr16",children:["SQL\uff1a",null===V||void 0===V?void 0:V.userName]}),(0,b.jsxs)("span",{className:"pr16",children:["ChartId\uff1a",null===V||void 0===V?void 0:V.referredChartId]}),(0,b.jsxs)("span",{className:"pr16",children:["DashboardId\uff1a",null===V||void 0===V?void 0:V.referredDashboardId]})]}),destroyOnClose:!0,visible:O,footer:null,width:1700,onCancel:function(){P(!1)},children:[(0,b.jsx)(Z.Z,{value:null===V||void 0===V?void 0:V.sql,readonly:!0}),(0,b.jsx)("div",{className:"pt16 ta-r",children:(0,b.jsx)(g.CopyToClipboard,{text:(null===V||void 0===V?void 0:V.sql)||"",onCopy:function(){o.ZP.success("\u5df2\u6210\u529f\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,b.jsx)(c.Z,{type:"primary",children:"\u590d\u5236"})})})]}),(0,b.jsx)(m.Z,{title:"\u4efb\u52a1\u72b6\u6001\u5217\u8868"}),(0,b.jsx)(h.VY,{className:"appmgmt-content p16",children:(0,b.jsx)(p.Z,{titleNode:(0,b.jsx)(u.Z,{className:"tablebox-title",children:"\u4efb\u52a1\u5217\u8868"}),buttonNode:(0,b.jsxs)("div",{className:"d-f ac",children:[(0,b.jsxs)("div",{className:"mr32",children:[(0,b.jsx)("span",{children:"\u5f53\u524d\u96c6\u7fa4\uff1a"}),(0,b.jsx)(d.Z,{style:{width:120},value:J,options:[{label:"\u98de\u5929",value:"task_status"},{label:"\u817e\u98de",value:"task_status_tengfei"},{label:"joox",value:"task_status_joox"}],onChange:function(e){var t;t=e,$.current=t,X(t),ee(e)}})]}),(0,b.jsxs)("div",{className:"mr16",children:["\u603b\u4efb\u52a1\u6570\uff1a",(0,b.jsx)("strong",{children:k.current.length})]})]}),rowKey:function(e){return e.taskId},columns:[{title:"\u6301\u7eed\u65f6\u95f4",dataIndex:"duration",key:"duration",width:100,align:"right",fixed:"left",sorter:function(e,t){return t.duration-e.duration},render:function(e,t){var n=Math.floor(t.duration/1e3),r=N().duration(n,"s").toJSON().replace("PT","").replace("H",'<span style="font-size:12px;">\u5c0f\u65f6</span>').replace("M",'<span style="font-size:12px;">\u5206\u949f</span>').replace("S",'<span style="font-size:12px;">\u79d2</span>');return n>=60&&n<=120?(0,b.jsx)("span",{children:(0,b.jsx)("strong",{className:"c-warn fs18",dangerouslySetInnerHTML:{__html:r}})}):n>120?(0,b.jsx)("span",{children:(0,b.jsx)("strong",{className:"c-fail fs18",dangerouslySetInnerHTML:{__html:r}})}):(0,b.jsx)("span",{children:(0,b.jsx)("strong",{className:"c-success fs18",dangerouslySetInnerHTML:{__html:r}})})}},{title:"\u7528\u6237\u540d",dataIndex:"userName",key:"userName",width:100,render:function(e,t){return(0,b.jsx)("span",{className:"c-theme",children:t.userName||"-"})},filters:[{text:"\u5168\u90e8",value:"all"},{text:"\u975e\u7a7a",value:"string"},{text:"\u7a7a",value:"object"}],filterMultiple:!1,onFilter:function(e,t){return"all"===e||typeof t.userName===e}},{title:"\u4efb\u52a1Id",dataIndex:"taskId",key:"taskId",width:150,align:"right",render:function(e,t){return(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"pr8 c-theme",children:t.taskId}),(0,b.jsx)(g.CopyToClipboard,{text:t.taskId,onCopy:function(){o.ZP.success("\u5df2\u6210\u529f\u590d\u5236\u5230\u7c98\u8d34\u677f")},children:(0,b.jsx)(x.Z,{})})]})},sorter:function(e,t){return e.taskId.localeCompare(t.taskId)}},{title:"\u770b\u677fID",dataIndex:"referredDashboardId",key:"referredDashboardId",width:80,align:"right",render:function(e,t){return t.referredDashboardId||"-"},filters:[{text:"\u5168\u90e8",value:"all"},{text:"\u975e\u7a7a",value:"string"},{text:"\u7a7a",value:"object"}],filterMultiple:!1,onFilter:function(e,t){return"all"===e||typeof t.referredDashboardId===e}},{title:"\u56fe\u8868ID",dataIndex:"referredChartId",key:"referredChartId",width:80,align:"right",render:function(e,t){return t.referredChartId||"-"},filters:[{text:"\u5168\u90e8",value:"all"},{text:"\u975e\u7a7a",value:"string"},{text:"\u7a7a",value:"object"}],filterMultiple:!1,onFilter:function(e,t){return"all"===e||typeof t.referredChartId===e}},{title:"\u56fe\u8868\u540d\u79f0",dataIndex:"referredChartName",key:"referredChartName",width:80,render:function(e,t){return t.referredChartName||"-"},sorter:function(e,t){if(e.referredChartName&&t.referredChartName)return"-"===e.referredChartName?1:e.referredChartName.localeCompare(t.referredChartName)}},{title:"\u4efb\u52a1\u65f6\u95f4",dataIndex:"startTimestamp",key:"startTimestamp",width:150,sorter:function(e,t){return new Date(e.startTimestamp).valueOf()-new Date(t.startTimestamp).valueOf()}},{title:"SQL",dataIndex:"sql",key:"sql",width:200,render:function(e,t){return(0,b.jsx)("div",{className:"ellip1 link",onClick:function(){Q(t),P(!0)},children:t.sql})},sorter:function(e,t){if(e.sql&&t.sql)return e.sql.localeCompare(t.sql)}},{title:"\u72b6\u6001",dataIndex:"taskStatus",key:"taskStatus",width:100,render:function(e,t){return(0,b.jsx)(f.Z,{color:"blue",children:t.taskStatus})},filters:[{text:"executing",value:"executing"},{text:"succeed",value:"succeed"},{text:"failed",value:"failed"},{text:"pending",value:"pending"}],onFilter:function(e,t){return t.taskStatus.includes(e)}},{title:"\u64cd\u4f5c",width:50,dataIndex:"handle",key:"handle",align:"right",fixed:"right",render:function(e,t){return(0,b.jsx)("span",{className:"link",onClick:function(){s.Z.confirm({title:"\u7ec8\u6b62",icon:(0,b.jsx)(v.Z,{}),content:"\u786e\u5b9a\u7ec8\u6b62\u8be5\u4efb\u52a1?",okText:"\u786e\u8ba4\u7ec8\u6b62",cancelText:"\u53d6\u6d88",okButtonProps:{danger:!0},onOk:function(){return new Promise((function(e,n){(0,y.wN)(t.taskId).then((function(t){e("")})).catch((function(e){n()}))})).then((function(e){o.ZP.success("\u7ec8\u6b62\u6210\u529f"),ee()})).catch((function(){o.ZP.error("\u7ec8\u6b62\u5931\u8d25")}))},onCancel:function(){}})},children:"\u7ec8\u6b62"})}}],loading:T,pagination:!1,dataSource:k.current,scroll:{x:1500,y:H}})})]})}},37167:function(e,t,n){var r=n(95318),a=n(50008);t.VY=void 0;var i=r(n(319)),l=r(n(59713)),s=r(n(63038)),o=r(n(67154)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=i?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(4519)),u=r(n(43270)),d=n(87124);function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=c.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function p(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var a=c.forwardRef((function(r,a){var i=c.useContext(d.ConfigContext).getPrefixCls,l=r.prefixCls,s=i(t,l);return c.createElement(e,(0,o.default)({ref:a,prefixCls:s,tagName:n},r))}));return a.displayName=r,a}}var x=c.forwardRef((function(e,t){var n=e.prefixCls,r=e.className,a=e.children,i=e.tagName,l=h(e,["prefixCls","className","children","tagName"]),s=(0,u.default)(n,r);return c.createElement(i,(0,o.default)((0,o.default)({className:s},l),{ref:t}),a)})),v=c.forwardRef((function(e,t){var n,r=c.useContext(d.ConfigContext).direction,a=c.useState([]),f=(0,s.default)(a,2),p=f[0],x=f[1],v=e.prefixCls,g=e.className,j=e.children,y=e.hasSider,Z=e.tagName,C=h(e,["prefixCls","className","children","hasSider","tagName"]),N=(0,u.default)(v,(n={},(0,l.default)(n,"".concat(v,"-has-sider"),"boolean"===typeof y?y:p.length>0),(0,l.default)(n,"".concat(v,"-rtl"),"rtl"===r),n),g),b=c.useMemo((function(){return{siderHook:{addSider:function(e){x((function(t){return[].concat((0,i.default)(t),[e])}))},removeSider:function(e){x((function(t){return t.filter((function(t){return t!==e}))}))}}}}),[]);return c.createElement(m.Provider,{value:b},c.createElement(Z,(0,o.default)({ref:t,className:N},C),j))})),g=p({suffixCls:"layout",tagName:"section",displayName:"Layout"})(v);p({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(x),p({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(x);var j=p({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(x);t.VY=j},602:function(e,t,n){e.exports=n.p+"static/media/emptyBg.15fdf5f39309784ac66e.png"}}]);
//# sourceMappingURL=715.67b47c66.chunk.js.map