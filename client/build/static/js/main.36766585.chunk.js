(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(t,e){},154:function(t,e){},168:function(t,e){},170:function(t,e){},198:function(t,e){},200:function(t,e){},201:function(t,e){},206:function(t,e){},208:function(t,e){},214:function(t,e){},216:function(t,e){},235:function(t,e){},247:function(t,e){},250:function(t,e){},268:function(t,e,n){},291:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),c=n(43),o=n.n(c),a=n(143),i=n(22),l=n.n(i),u=n(7),d=n.n(u),b=n(12),j=n(144),f=(n(268),n(8)),p=n(9),O=n.n(p),h=n(0),v=Object(f.b)(null,(function(t){return{setauthstate:function(e){return t({type:"SET_AUTH",authstate:e})}}}))((function(t){var e=t.setauthstate,n=Object(r.useState)(!1),s=Object(j.a)(n,2),c=s[0],o=s[1],a=Object(r.useRef)(null),i=Object(r.useRef)(null),u=Object(r.useRef)(null),f=function(){var t=Object(b.a)(d.a.mark((function t(n){var r,s,o,b,j,f,p;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=a.current.value,s=i.current.value,!c){t.next=21;break}if(o=u.current.value,!(r&&""!==r&&s&&""!==s&&o&&""!==o)){t.next=18;break}return t.prev=6,t.next=9,O.a.post("http://localhost:5000/api/userauth/signup",{email:r,password:s,name:o});case 9:null===(b=t.sent).data.error?(j=b.data.token,l.a.set("token",j,{expires:7}),e(!0)):console.log(b.data.error),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0);case 16:t.next=19;break;case 18:console.log("Fill all details");case 19:t.next=35;break;case 21:if(!r||""===r||!s||""===s){t.next=34;break}return t.prev=22,t.next=25,O.a.post("http://localhost:5000/api/userauth/login",{email:r,password:s});case 25:null===(f=t.sent).data.error?(p=f.data.token,l.a.set("token",p,{expires:7}),e(!0)):console.log(f.data.error),t.next=32;break;case 29:t.prev=29,t.t1=t.catch(22),console.log(t.t1);case 32:t.next=35;break;case 34:console.log("Fill all details");case 35:case"end":return t.stop()}}),t,null,[[6,13],[22,29]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"loginback",children:[c?"SignUp":"Login",Object(h.jsxs)("label",{htmlFor:"state",children:["New User",Object(h.jsx)("input",{id:"state",type:"checkbox",onChange:function(){o((function(t){return!t}))}})]}),Object(h.jsx)("div",{className:"loginmodal",children:Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("label",{htmlFor:"email",children:" Email"}),Object(h.jsx)("input",{ref:a,id:"email",type:"email"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:" Password:"}),Object(h.jsx)("input",{ref:i,id:"password",type:"password"}),Object(h.jsx)("br",{}),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:"name",children:" Name:"}),Object(h.jsx)("input",{ref:u,id:"name",type:"text"}),Object(h.jsx)("br",{})]}),Object(h.jsx)("input",{type:"submit"})]})})]})})),x=Object(f.b)(null,(function(t){return{complete:function(e,n){return t({type:"COMPLETE_TODO",todoid:e,curstatus:n})},del:function(e){return t({type:"DELETE_TODO",todoid:e})}}}))((function(t){var e=t.id,n=t.text,r=t.completed,s=t.complete,c=t.del,o=function(){var t=Object(b.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("http://localhost:5000/api/usertodo/complete",{todoid:e,curstatus:r});case 3:n=t.sent,null===(c=n.data.error)?s(e,!r):console.log(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(b.a)(d.a.mark((function t(){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are You sure you want to delete")){t.next=13;break}return t.prev=2,t.next=5,O.a.post("http://localhost:5000/api/usertodo/delete",{todoid:e});case 5:n=t.sent,null===(r=n.data.error)?c(e):console.log(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"todoelement ".concat(r?"complete":""),children:[Object(h.jsx)("button",{className:"C",onClick:o,children:"Complete"}),Object(h.jsx)("div",{className:"text",children:n}),Object(h.jsx)("button",{className:"D",onClick:a,children:"Delete"})]})})),m=Object(f.b)((function(t){var e;return{userId:null===(e=t.loggedInUser)||void 0===e?void 0:e._id,listId:t.selectedListid}}),(function(t){return{addtotodo:function(e){return t({type:"ADD_TODO",todo:e})},addtolist:function(e){return t({type:"ADD_LIST",list:e})}}}))((function(t){var e=t.Label,n=t.addto,s=t.userId,c=t.listId,o=t.addtotodo,a=t.addtolist,i=Object(r.useRef)(null),l=function(){var t=Object(b.a)(d.a.mark((function t(){var e,r,l,u,b,j,f,p,h,v;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("todo"!==n||""===i.current.value){t.next=15;break}return e=i.current.value,t.prev=2,t.next=5,O.a.post("http://localhost:5000/api/usertodo/add",{todotext:e,userId:s,listId:c});case 5:r=t.sent,l=r.data,u=l.error,b=l.todo,null===u?(o(b),i.current.value=""):console.log(u),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:t.next=28;break;case 15:if(""===i.current.value){t.next=28;break}return j=i.current.value,t.prev=17,t.next=20,O.a.post("http://localhost:5000/api/userlist/add",{name:j,userId:s});case 20:f=t.sent,p=f.data,h=p.error,v=p.list,null===h?(a(v),i.current.value=""):console.log(h),t.next=28;break;case 25:t.prev=25,t.t1=t.catch(17),console.log(t.t1);case 28:case"end":return t.stop()}}),t,null,[[2,10],[17,25]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"add",children:[Object(h.jsxs)("div",{className:"label",children:["New ",e,":",Object(h.jsx)("input",{ref:i,className:"addtodoinput",type:"text"})]}),Object(h.jsx)("button",{onClick:l,children:"Add"})]})})),g=Object(f.b)((function(t){return{todos:t.todos,selectedListid:t.selectedListid}}),(function(t){return{settodos:function(e){return t({type:"SET_TODOS",todos:e})}}}))((function(t){var e=t.todos,n=t.selectedListid,s=t.settodos;return Object(r.useEffect)((function(){(function(){var t=Object(b.a)(d.a.mark((function t(){var e,r,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return t.prev=1,t.next=4,O.a.post("http://localhost:5000/api/usertodo/gettodos",{listid:n});case 4:e=t.sent,r=e.data,c=r.error,o=r.todos,null===c?s(o):console.log(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}})()()}),[n,s]),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(m,{Label:"To Do",addto:"todo"}),Object(h.jsx)("div",{id:"todolist",children:null===e||void 0===e?void 0:e.map((function(t){return Object(h.jsx)(x,{id:t._id,text:t.todotext,completed:t.completed},t._id)}))})]})})),k=Object(f.b)((function(t){return{selectedListid:t.selectedListid}}),(function(t){return{dellist:function(e){return t({type:"DELETE_LIST",listid:e})},selectlist:function(e){return t({type:"SELECT_LIST",listid:e})}}}))((function(t){var e=t.id,n=t.name,r=t.selectedListid,s=t.dellist,c=t.selectlist,o=t.deleteable,a=function(){var t=Object(b.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.stopPropagation(),!window.confirm("Are You sure you want to delete")){t.next=15;break}return t.prev=3,t.next=6,O.a.post("http://localhost:5000/api/userlist/delete",{listid:e});case 6:r=t.sent,null===(c=r.data.error)&&s(e),console.log(c),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"listname ".concat(e===r&&"selected"),onClick:function(){c(e)},children:[n.toUpperCase(),Object(h.jsx)("br",{}),o&&Object(h.jsx)("button",{onClick:a,children:"Delete"}),Object(h.jsx)("hr",{})]})})),L=Object(f.b)((function(t){return{loggedInUser:null===t||void 0===t?void 0:t.loggedInUser,lists:t.lists}}),(function(t){return{logout:function(){return t({type:"LOGOUT"})},setlists:function(e){return t({type:"SET_LISTS",lists:e})}}}))((function(t){var e=t.auth,n=t.logout,s=t.lists,c=t.loggedInUser,o=t.setlists;Object(r.useEffect)((function(){(function(){var t=Object(b.a)(d.a.mark((function t(){var e,n,r,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=12;break}return t.prev=1,t.next=4,O.a.post("http://localhost:5000/api/userlist/getlists",{userId:null===c||void 0===c?void 0:c._id});case 4:e=t.sent,n=e.data,r=n.error,s=n.lists,null===r?o(s):console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}})()()}),[c,o,e]);return Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("button",{onClick:function(){l.a.remove("token"),n()},children:"Logout"}),Object(h.jsx)(m,{Label:"List",addto:"list"}),Object(h.jsx)("div",{className:"listnames",children:null===s||void 0===s?void 0:s.map((function(t){return Object(h.jsx)(k,{id:t._id,name:t.name,deleteable:t._id!==c.defaultListid},t._id)}))})]})})),T=function(){return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(g,{}),Object(h.jsx)(L,{})]})};var E=Object(f.b)((function(t){return{auth:t.isAuth}}),(function(t){return{setauthstate:function(e){return t({type:"SET_AUTH",authstate:e})},setuser:function(e){return t({type:"SET_USER",user:e})}}}))((function(t){var e=t.auth,n=t.setauthstate,s=t.setuser;return Object(r.useEffect)((function(){var t=l.a.get("token");if(t){var e=a.verify(t,"shhhhh")._doc;s(e),n(!0)}}),[n,s,e]),e?Object(h.jsx)(T,{}):Object(h.jsx)(v,{})})),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),s(t),c(t),o(t)}))},w=n(45),S=n(73),y=n(4),D={isAuth:!1,loggedInUser:null,selectedListid:null,todos:[],lists:[]},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_AUTH":return Object(y.a)(Object(y.a)({},t),{},{isAuth:e.authstate});case"SET_USER":return Object(y.a)(Object(y.a)({},t),{},{loggedInUser:Object(y.a)({},e.user),selectedListid:e.user.defaultListid});case"LOGOUT":return{isAuth:!1,loggedInUser:null,selectedListid:null,todos:[],lists:[]};case"SET_TODOS":return Object(y.a)(Object(y.a)({},t),{},{todos:Object(S.a)(e.todos)});case"SET_LISTS":return Object(y.a)(Object(y.a)({},t),{},{lists:Object(S.a)(e.lists)});case"ADD_TODO":var n=e.todo;return Object(y.a)(Object(y.a)({},t),{},{todos:t.todos.concat(n)});case"ADD_LIST":var r=e.list;return Object(y.a)(Object(y.a)({},t),{},{lists:t.lists.concat(r),selectedListid:r._id});case"COMPLETE_TODO":var s=e.todoid,c=e.curstatus;return Object(y.a)(Object(y.a)({},t),{},{todos:t.todos.map((function(t){return t._id===s?Object(y.a)(Object(y.a)({},t),{},{completed:c}):Object(y.a)({},t)}))});case"DELETE_TODO":var o=e.todoid;return Object(y.a)(Object(y.a)({},t),{},{todos:t.todos.filter((function(t){return t._id!==o}))});case"SELECT_LIST":var a=e.listid;return Object(y.a)(Object(y.a)({},t),{},{selectedListid:a});case"DELETE_LIST":var i=e.listid;return Object(y.a)(Object(y.a)({},t),{},{selectedListid:t.loggedInUser.defaultListid,lists:t.lists.filter((function(t){return t._id!==i}))});default:return t}},N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.b,U=Object(w.c)(I,N(Object(w.a)((function(){return function(t){return function(e){return t(e)}}}))));o.a.render(Object(h.jsx)(f.a,{store:U,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(E,{})})}),document.getElementById("root")),_(console.log)}},[[291,1,2]]]);
//# sourceMappingURL=main.36766585.chunk.js.map