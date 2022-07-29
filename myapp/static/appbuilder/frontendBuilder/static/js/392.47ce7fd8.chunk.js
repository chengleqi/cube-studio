"use strict";(self.webpackChunkkubeflow_frontend=self.webpackChunkkubeflow_frontend||[]).push([[392],{96296:function(n,t,a){a.d(t,{P6:function(){return s},UM:function(){return i},Rt:function(){return o},GZ:function(){return u},Kz:function(){return l},rJ:function(){return c},dP:function(){return d},bn:function(){return p},Sg:function(){return f},t_:function(){return m},Eh:function(){return h},zR:function(){return v},SX:function(){return j}});var e=a(61143),r="http://swallow.tmeoa.com",s=function(n){return e.Z.get("/java/api/swallow/task/instances/get",{params:n,baseURL:r})},i=function(n){return e.Z.get("/java/api/swallow/task/tasks/get",{params:n,baseURL:r})},o=function(n){return e.Z.get("/java/api/swallow/task/us/task/dependency",{params:n,baseURL:r})},u=function(n){return e.Z.get("/java/api/swallow/task/us/task/recording",{params:n,baseURL:r})},l=function(n){return e.Z.post("/java/api/swallow/task/us/task/redo",n,{baseURL:r})},c=function(n){return e.Z.get("/java/api/swallow/task/us/task/kill",{params:n,baseURL:r})},d=function(n){return e.Z.get("/java/api/swallow/task/us/tasks/freeze",{params:n,baseURL:r})},p=function(n){return e.Z.get("/java/api/swallow/task/us/tasks/unfreeze",{params:n,baseURL:r})},f=function(n){return e.Z.get("/java/api/swallow/task/us/replace/incharge",{params:n,baseURL:r})},m=function(n){return e.Z.get("/java/api/swallow/task/us/instance/log",{params:n,baseURL:r})},h=function(n){return e.Z.get("/java/api/swallow/task/us/tasks/delete",{params:n,baseURL:r})},v=function(n){return e.Z.get("/java/api/swallow/check/get/info",{params:n,baseURL:r})},j=function(n){return e.Z.get("/java/api/privacy/task/detail",{params:n,baseURL:r})}},76722:function(n,t,a){a.d(t,{Z:function(){return c}});var e=a(1413),r=(a(4519),a(64252)),s=a(35492),i=a(2704),o=a(20011),u=a(2556),l=r.Z.Title,c=function(n){var t={position:"sticky",top:0};return(0,u.jsxs)(s.Z,{className:"title-header",justify:"space-between",align:"middle",style:n.noBorderBottom?(0,e.Z)({borderBottom:"none"},t):t,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{className:"d-il mr12",level:5,style:{marginBottom:10},children:n.title}),(0,u.jsx)("div",{className:"d-il",children:n.breadcrumbs})]}),(0,u.jsx)(i.Z,{children:(0,u.jsx)(o.Z,{children:n.children?n.children:null})})]})}},2392:function(n,t,a){a.r(t),a.d(t,{default:function(){return x}});var e,r,s,i=a(30168),o=a(29439),u=a(4519),l=a(76722),c=a(2e4),d=a(10007),p=a(12513),f=a(93849),m=a(20112),h=a(32064),v=a(96296),j=a(5748),w=a(2556),k=(0,w.jsx)(h.Z,{style:{fontSize:24},spin:!0}),Z=c.Z.Step,g=function(n){return(0,w.jsx)("div",{className:"d-f fd-c",children:n.map((function(n){var t=n.step_user,a=n.step_user_name,e=n.step_action_name,r=n.step_approval_time,s=n.submit_source;return(0,w.jsxs)(_,{children:[(0,w.jsx)("span",{children:"".concat(t,"(").concat(a,")")}),(0,w.jsx)("strong",{children:e}),(0,w.jsx)("span",{children:r}),(0,w.jsx)("span",{children:s})]},t)}))})};function x(){var n=(0,u.useState)(""),t=(0,o.Z)(n,2),a=t[0],e=t[1],r=(0,u.useState)(!1),s=(0,o.Z)(r,2),i=s[0],c=s[1],h=(0,u.useState)(!1),j=(0,o.Z)(h,2),x=j[0],_=j[1],R=(0,u.useState)(null),U=(0,o.Z)(R,2),L=U[0],S=U[1],N=(0,u.useState)(null),z=(0,o.Z)(N,2),B=z[0],C=z[1],E=function(){c(!0);var n=a;(0,v.SX)({instanceId:n}).then((function(n){if(n.data.data&&n.data.data.instance_detail){_(!0);var t=n.data.data.instance_detail,a=t.history_data,e=t.pending_data;S(function(n){var t=Array.from(new Set(n.map((function(n){return n.task_name})))).map((function(n){return{task_name:n,approvals:[]}}));return n.forEach((function(n){var a=t.find((function(t){return t.task_name===n.task_name}));null===a||void 0===a||a.approvals.push(n)})),t}(a)),C(function(n){var t=Array.from(new Set(n.map((function(n){return n.task_name})))).map((function(n){return{task_name:n,handlers:[]}}));return n.forEach((function(n){var a=t.find((function(t){return t.task_name===n.task_name}));null===a||void 0===a||a.handlers.push(n)})),t}(e))}else _(!1)})).finally((function(){c(!1)}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l.Z,{title:"\u5de5\u5355\u72b6\u6001\u67e5\u770b"}),(0,w.jsxs)("div",{className:"d-f mt16 mb26",children:[(0,w.jsxs)("div",{className:"mr16 d-f ac",children:[(0,w.jsx)("span",{className:"ta-r s0 mr10",style:{width:80},children:"\u9879\u76eeID"}),(0,w.jsx)(d.Z,{onPressEnter:E,placeholder:"\u9879\u76eeID",style:{width:256},value:a,onChange:function(n){return e(n.target.value)}})]}),(0,w.jsx)(p.Z,{type:"primary",onClick:E,children:"\u641c\u7d22"})]}),(0,w.jsx)(f.Z,{indicator:k,spinning:i,children:(0,w.jsx)("div",{className:"d-f ml40 ptb20",style:{width:"500px"},children:x?(0,w.jsxs)(b,{direction:"vertical",current:L?L.length-1:0,progressDot:!0,children:[null===L||void 0===L?void 0:L.map((function(n){var t=n.task_name,a=n.approvals;return(0,w.jsx)(Z,{title:t,description:g(a)},t)})),null===B||void 0===B?void 0:B.map((function(n){var t,a=n.task_name,e=n.handlers;return(0,w.jsx)(Z,{title:a,description:(t=e,(0,w.jsx)("div",{className:"w80",children:t.map((function(n){var t=n.handler,a=n.handler_name;return(0,w.jsxs)(y,{children:[(0,w.jsx)("span",{children:"".concat(t,"(").concat(a,")")}),(0,w.jsx)("strong",{children:"\u5f85\u5ba1\u6279"})]},t)}))}))},a)}))]}):(0,w.jsx)(m.Z,{})})})]})}var b=(0,j.Z)(c.Z)(e||(e=(0,i.Z)(["\n  width: 100%;\n  & .ant-steps-item-tail::after {\n    width: 2px !important;\n    margin-left: 12px !important;\n  }\n  & .ant-steps-item-wait {\n    opacity: .7;\n  }\n  & .ant-steps-item-title {\n    font-weight: bold;\n  }\n"]))),_=j.Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  color: #000000;\n  &>strong {\n    color: #1672fa;\n  }\n  &>* {\n    margin-right: 10px;\n  }\n"]))),y=j.Z.div(s||(s=(0,i.Z)(["\n  &>span {\n    margin-right: 10px;\n  }\n  &>strong {\n    color: #1672fa;\n  }\n"])))}}]);
//# sourceMappingURL=392.47ce7fd8.chunk.js.map