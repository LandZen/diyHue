(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[13],{112:function(e,c,t){"use strict";t.r(c);var n=t(14),s=t(2),o=t(16),a=t.n(o),r=t(27),i=t(12),l=t(101),d=t(95),j=(t(96),t(6)),u=function(e){var c=e.HOST_IP,t=e.api_key,n=e.id,s=e.device,o=e.setType,u=e.setMessage,b=function(){a.a.delete("".concat(c,"/api/").concat(t,"/sensors/").concat(n)).then((function(e){console.log(e.data),u("Device successfully deleted"),o("none"),o("success")})).catch((function(e){console.error(e),u("Error occured, check browser console"),o("none"),o("error")}))};return Object(j.jsxs)("div",{className:"card device",children:[Object(j.jsxs)("div",{className:"row1",children:[Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)(i.j,{})}),Object(j.jsx)("div",{className:"text",children:s.name})]}),Object(j.jsx)("div",{className:"row2",children:Object(j.jsxs)("div",{className:"text",children:["battery"in s.config&&function(){var e=s.config.battery,c=e+"%";return console.log(e),e>90?Object(j.jsx)(l.a,{title:c}):e>70?Object(j.jsx)(l.b,{title:c}):e>40?Object(j.jsx)(l.d,{title:c}):Object(j.jsx)(l.c,{title:c})}()," Protocol: ",s.protocol]})}),Object(j.jsxs)("div",{className:"row3",children:[Object(j.jsx)("div",{className:"dropdown"})," ",Object(j.jsx)("div",{className:"switchContainer",children:Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",defaultChecked:s.config.on,onChange:function(e){return r=e.currentTarget.checked,void a.a.put("".concat(c,"/api/").concat(t,"/sensors/").concat(n,"/config"),{on:r}).then((function(e){console.log(e.data),u(s.name+" successfully "+(r?"enabled":"disabled")),o("none"),o("success")})).catch((function(e){console.error(e),u("Error occured, check browser console"),o("none"),o("error")}));var r}}),Object(j.jsx)("span",{className:"slider"})]})}),Object(j.jsx)("div",{className:"btn red",children:Object(j.jsx)(r.a,{title:"Delete",onClick:function(){Object(d.confirmAlert)({title:"Delete device "+s.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return b()}},{label:"No"}]})}})})]})]})},b=t(90);c.default=function(e){var c=e.HOST_IP,t=e.API_KEY,o=Object(s.useState)({}),r=Object(n.a)(o,2),i=r[0],l=r[1],d=Object(s.useState)("none"),O=Object(n.a)(d,2),h=O[0],f=O[1],v=Object(s.useState)("no message"),x=Object(n.a)(v,2),m=x[0],p=x[1];return Object(s.useEffect)((function(){var e=function(){void 0!==t&&a.a.get("".concat(c,"/sensors")).then((function(e){console.log(e.data),l(e.data)})).catch((function(e){console.error(e)}))};e();var n=setInterval((function(){e()}),2e3);return function(){return clearInterval(n)}}),[c,t]),Object(j.jsxs)("div",{className:"content",children:["none"!==h&&Object(j.jsx)(b.a,{type:h,message:m,duration:"5000",setType:f}),Object(j.jsx)("div",{className:"cardGrid",children:Object.entries(i).map((function(e){var s=Object(n.a)(e,2),o=s[0],a=s[1];return Object(j.jsx)(u,{HOST_IP:c,api_key:t,id:o,device:a,setType:f,setMessage:p},o)}))})]})}},90:function(e,c,t){"use strict";t.d(c,"a",(function(){return r}));var n=t(12),s=t(91),o=t.n(s),a=t(6);function r(e){var c=e.type,t=e.message,s=e.duration,r=e.setType;return Object(a.jsx)(o.a,{duration:s,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(c),children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(n.m,{onClick:function(){return r("none")}})})]})})})}}}]);
//# sourceMappingURL=13.14aa4870.chunk.js.map