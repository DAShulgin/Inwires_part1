(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{228:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var s=n(3),a=n(35),c=n(36),i=n(38),r=n(37),o=n(0),j=n.n(o),u=n(25),d=n(7),l=n(1),b=function(e){return{isAuth:e.auth.isAuth}},O=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(r.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(s.a)({},this.props)):Object(l.jsx)(d.a,{to:"/login"})}}]),o}(j.a.Component);return Object(u.b)(b)(t)}},229:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return l}));var s=n(3),a=n(239),c=(n(0),n(111)),i=n(231),r=n.n(i),o=n(1),j=function(e){var t=e.meta,n=t.touched,s=t.error,a=e.children,c=n&&s;return Object(o.jsxs)("div",{className:r.a.formControl+" "+(c?r.a.error:" "),children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:s})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsxs)(j,Object(s.a)(Object(s.a)({},e),{},{children:[" ",Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),n))," "]}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsxs)(j,Object(s.a)(Object(s.a)({},e),{},{children:[" ",Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),n))," "]}))},l=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},j=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("span",{className:r.a.line,children:[Object(o.jsx)(c.a,Object(s.a)({name:e,component:t,placeholder:n,validate:a},i))," ",Object(o.jsx)("span",{children:j})]})}},230:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var s=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043f\u0443\u0441\u0442\u043e\u0435"},a=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},231:function(e,t,n){e.exports={formControl:"FormControls_formControl__2V11y",error:"FormControls_error__aVxDf",line:"FormControls_line__2q9dL"}},252:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1Bl7N",dialogsItems:"Dialogs_dialogsItems__2BeU3",dialog:"Dialogs_dialog__1gJ95",messagesItems:"Dialogs_messagesItems__3uQ-t",message:"Dialogs_message__FbtPB",active:"Dialogs_active__33Ckb"}},311:function(e,t,n){"use strict";n.r(t);var s=n(78),a=(n(0),n(252)),c=n.n(a),i=n(1),r=function(e){return Object(i.jsx)("div",{children:e.textMessage})},o=n(12),j=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)(o.c,{to:"/dialogs/"+e.id,children:e.Name})})},u=n(111),d=n(112),l=n(230),b=n(229),O=Object(l.a)(10),g=Object(d.a)({form:"AddOneMessage"})((function(e){var t=e.handleSubmit;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("div",{children:Object(i.jsx)(u.a,{name:"NewMessageText",component:b.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",validate:[l.b,O]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})})),m=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(g,{onSubmit:function(t){e.NewMessage(t.NewMessageText)}})})},h=function(e){var t=e.dialogs.map((function(e){return Object(i.jsx)(j,{id:e.id,Name:e.Name},e.id)})),n=e.messages.map((function(e){return Object(i.jsx)(r,{textMessage:e.textMessage},e.id)}));return Object(i.jsxs)("div",{className:c.a.dialogs,children:[Object(i.jsx)("div",{className:c.a.dialogsItems,children:Object(i.jsx)("div",{className:c.a.dialog,children:t})}),Object(i.jsxs)("div",{className:c.a.messagesItems,children:[Object(i.jsx)("div",{className:c.a.message,children:n}),Object(i.jsx)("div",{children:Object(i.jsx)(m,{NewMessageText:e.NewMessageText,NewMessage:e.NewMessage,updateMessage:e.updateMessage})})]})]})},f=n(25),x=n(228),v=n(23);t.default=Object(v.d)(Object(f.b)((function(e){return{dialogs:e.dialogPage.dialogs,messages:e.dialogPage.messages}}),(function(e){return{NewMessage:function(t){e(Object(s.a)(t))}}})),x.a)(h)}}]);
//# sourceMappingURL=5.6038fefd.chunk.js.map