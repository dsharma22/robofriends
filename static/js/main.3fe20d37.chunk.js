(this.webpackJsonprobofriends2=this.webpackJsonprobofriends2||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),b=n(0),u=function(t){var e=t.robot,n=e.name,r=e.email,c=e.id,s="https://robohash.org/".concat(c,"?200x200");return Object(b.jsxs)("div",{className:"tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:s,alt:"robot"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{className:"f4 b",children:r})]})]})},d=function(t){return Object(b.jsx)("div",{className:"flex justify-center flex-wrap",children:t.robots.map((function(t){return Object(b.jsx)(u,{robot:t},t.id)}))})},j=function(t){return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{type:"text",className:"pa3 ba bg-lightest-blue tc br2 b--pink",placeholder:"Search Robots...",htmlFor:"robots",onChange:t.onChange})})},f=function(t){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"2px solid deeppink",height:"500px",width:"80%",margin:"0 auto"},children:t.children})},p=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).state={hasError:!1},t}return Object(i.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oops...That is not good"}):this.props.children}}]),n}(c.a.Component),O=(n(14),function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).handleChange=function(e){t.setState({searchField:e.target.value})},t.state={robots:[],searchField:""},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){t.setState({robots:e})}))}},{key:"render",value:function(){var t=this.state,e=t.robots,n=t.searchField,r=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return e.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"tc f2 ttu",children:"Robofriends"}),Object(b.jsx)(j,{onChange:this.handleChange}),Object(b.jsx)(f,{children:Object(b.jsx)(p,{children:Object(b.jsx)(d,{robots:r})})})]}):Object(b.jsx)("h1",{className:"tc",children:"Loading..."})}}]),n}(c.a.Component)),g=(n(15),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),s(t),o(t)}))});o.a.render(Object(b.jsx)(O,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.3fe20d37.chunk.js.map