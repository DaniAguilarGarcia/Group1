(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),c=a(9),l=(a(30),a(11)),i=a.n(l),m=a(14),u=a(3),d=a(4),p=a(6),h=a(5),g=a(7),b=a(12),v=(a(32),a(33),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state=Object.assign({},e),a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"loginItem",value:function(){return this.props.logged_in?r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"./login",className:"nav-link"},this.props.user.name)):r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"./login",className:"nav-link"},"Login"))}},{key:"navRight",value:function(){return r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"./cart",className:"nav-link"},"Cart")),this.loginItem())}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light row"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Book Geeks"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("form",{className:"form-inline my-2 flex-grow-1"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")),this.navRight()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e}}]),t}(n.Component)),f=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Home")))}}]),t}(n.Component),E=a(16),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(e){e.preventDefault(),a.setState({error_msg:null}),fetch("/api/user/login",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,password:a.state.password})}).then(function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=5;break}return e.abrupt("return",a.setState({error_msg:n.message}));case 5:a.setState({logged_in:!0}),a.props.onLogin(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e)}))},a.state={username:"test_user",password:"AbsoluteUnit1134!",error_msg:null,logged_in:e.logged_in||!1},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.logged_in&&this.props.history.push("/")}},{key:"onChange",value:function(e,t){this.setState(Object(E.a)({},e,t.target.value))}},{key:"render",value:function(){var e=this,t=r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username",required:!0,value:this.state.username,onChange:function(t){return e.onChange("username",t)}})),r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,value:this.state.password,onChange:function(t){return e.onChange("password",t)}})),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Login")),r.a.createElement("div",{className:"col-6"},r.a.createElement(c.b,{to:"./register",className:"btn btn-secondary btn-block",tabIndex:"-1"},"Register")))),a=r.a.createElement("span",{style:{color:"red"}},this.state.error_msg),n=r.a.createElement("span",{style:{color:"green"}},"You're logged in");return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card my-5 mx-auto",style:{maxWidth:"500px"}},r.a.createElement("div",{className:"card-body"},this.state.logged_in?null:t,this.state.error_msg?a:null,this.state.logged_in?n:null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(e){if(e.preventDefault(),a.setState({error_msg:null,errors:{}}),a.passwordsMatch())return fetch("/api/user/signup",{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,name:a.state.name,email:a.state.email,password:a.state.password})}).then(function(){var e=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,t.ok){e.next=5;break}return e.abrupt("return",a.setState({error_msg:n._message,errors:n.errors}));case 5:a.setState({logged_in:!0}),a.props.onLogin(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e)}))},a.state={username:"",name:"",email:"",password:"",confirm_password:"",error_msg:null,errors:{},logged_in:e.logged_in||!1},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.logged_in&&this.props.history.push("/")}},{key:"onChange",value:function(e,t){this.setState(Object(E.a)({},e,t.target.value))}},{key:"passwordsMatch",value:function(){return!this.state.confirm_password||this.state.password===this.state.confirm_password}},{key:"render",value:function(){var e=this,t=r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Desired Username",required:!0,value:this.state.username,onChange:function(t){return e.onChange("username",t)}})),r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Your Name",required:!0,value:this.state.name,onChange:function(t){return e.onChange("name",t)}})),r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"email@example.com",required:!0,value:this.state.email,onChange:function(t){return e.onChange("email",t)}})),r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",required:!0,value:this.state.password,onChange:function(t){return e.onChange("password",t)}})),r.a.createElement("div",{className:"col-12 mb-2"},r.a.createElement("input",{type:"password",className:"form-control ".concat(this.passwordsMatch()?"":"is-invalid"),placeholder:"Confirm Password",required:!0,value:this.state.confirm_password,onChange:function(t){return e.onChange("confirm_password",t)}}),r.a.createElement("span",{className:"invalid-feedback"},this.passwordsMatch()?"":"passwords must match")),r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Me Up")))),a=Object.keys(this.state.errors).map((function(t,a){return r.a.createElement("li",{key:"".concat(t,"-").concat(a)},r.a.createElement("strong",null,t,": ")," ",e.state.errors[t].message)})),n=r.a.createElement("div",{className:"text-danger mt-3"},this.state.error_msg,r.a.createElement("ul",{className:"m-0"},a));return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card my-5 mx-auto",style:{maxWidth:"500px"}},r.a.createElement("div",{className:"card-body"},t,this.state.error_msg?n:null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e}}]),t}(n.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"Cart")))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleLogin=function(t){e.setState({logged_in:!0,user:t})},e.state={logged_in:!1,user:{}},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"checkLoginStatus",value:function(){var e=this;fetch("/api/user/me",{credentials:"include"}).then(function(){var t=Object(m.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e,t.t1=a.ok,!a.ok){t.next=8;break}return t.next=5,a.json();case 5:t.t2=t.sent,t.next=9;break;case 8:t.t2={};case 9:t.t3=t.t2,t.t4={logged_in:t.t1,user:t.t3},t.t0.setState.call(t.t0,t.t4);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({logged_in:!1,user:{}})}))}},{key:"componentDidMount",value:function(){this.checkLoginStatus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(v,{logged_in:this.state.logged_in,user:this.state.user}),r.a.createElement("div",{className:"container main-view"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:f}),r.a.createElement(b.a,{path:"/login",render:function(t){return r.a.createElement(y,Object.assign({},t,{logged_in:e.state.logged_in,onLogin:e.handleLogin}))}}),r.a.createElement(b.a,{path:"/register",render:function(t){return r.a.createElement(N,Object.assign({},t,{onLogin:e.handleLogin}))}}),r.a.createElement(b.a,{path:"/cart",component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.897791c5.chunk.js.map