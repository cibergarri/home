(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),i=a.n(r),c=a(49),l=a(48),m=a(7),s=a(6),u=(a(36),a(47));a(38),a(40);function h(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-10 offset-1"},o.a.createElement("h1",null,"Author Quizz. Date: ",e.now),o.a.createElement("p",null,"Select the book written by the author shown")))}function d(e){var t=e.title,a=e.onClick;return o.a.createElement("div",{className:"answer",onClick:function(){a(t)}},o.a.createElement("h4",null,t))}function g(e){var t=e.author,a=e.books,n=e.highlight,r=e.onAnswerSelected;return o.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"green",wrong:"red"}[e]}(n)}},o.a.createElement("div",{className:"col-4 offset-1"},o.a.createElement("img",{src:t.imageUrl,className:"authorimage",alt:"Author"})),o.a.createElement("div",{className:"col-6"},a.map(function(e){return o.a.createElement(d,{title:e,key:e,onClick:r})})))}function b(e){var t=e.show,a=e.onContinue;return o.a.createElement("div",{className:"row continue"},t?o.a.createElement("div",{className:"col-11"},o.a.createElement("button",{className:"btn btn-primary btn-lg float-right",onClick:a},"Continue")):null)}function E(){return o.a.createElement("div",{id:"footer",className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("p",{className:"text-muted credit"},"All images are from ",o.a.createElement("a",{href:"https://commons.wikimedia.org/wiki/Main_Page"},"Wikimedia Commons")," and are in the public domain")))}var p=Object(s.b)(function(e){return{turnData:e.turnData,highlight:e.highlight,now:e.now}},function(e){return{onAnswerSelected:function(t){return e({type:"ANSWER_SELECTED",answer:t})},onContinue:function(){e({type:"CONTINUE"})}}})(function(e){var t=e.turnData,a=e.highlight,n=e.onAnswerSelected,r=e.onContinue,i=e.now;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(h,{now:i}),o.a.createElement(g,Object.assign({},t,{highlight:a,onAnswerSelected:n})),o.a.createElement(b,{show:"correct"===a,onContinue:r}),o.a.createElement("p",null,o.a.createElement(u.a,{to:"".concat("/react_authorquizz","/add")},"Add an author")),o.a.createElement(E,null))}),k=a(19),f=a(20),v=a(21),w=a(25),A=a(22),C=a(26),O=a(5),j=a(50),N=(a(42),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(A.a)(t).call(this,e))).state={name:"",imageUrl:"",books:[],bookTemp:""},a.onFieldChange=a.onFieldChange.bind(Object(O.a)(Object(O.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(Object(O.a)(a))),a.handleAddBook=a.handleAddBook.bind(Object(O.a)(Object(O.a)(a))),a}return Object(C.a)(t,e),Object(v.a)(t,[{key:"onFieldChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddAuthor(this.state)}},{key:"handleAddBook",value:function(e){this.setState({books:this.state.books.concat([this.state.bookTemp]),bookTemp:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"AddAuthorForm__input"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddAuthorForm__input"},o.a.createElement("label",{htmlFor:"imageUrl"},"Image URL"),o.a.createElement("input",{type:"text",name:"imageUrl",value:this.state.imageUrl,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddAuthorForm__input"},this.state.books.map(function(e){return o.a.createElement("p",{key:e},e)}),o.a.createElement("label",{htmlFor:"bookTemp"},"Books"),o.a.createElement("input",{type:"text",name:"bookTemp",value:this.state.bookTemp,onChange:this.onFieldChange}),o.a.createElement("input",{type:"button",value:"+",onClick:this.handleAddBook})),o.a.createElement("input",{type:"submit",value:"Add"}))}}]),t}(o.a.Component));var S=Object(j.a)(Object(s.b)(function(){return{}},function(e,t){return{onAddAuthor:function(a){e({type:"ADD_AUTHOR",author:a}),t.history.push("".concat("/react_authorquizz","/"))}}})(function(e){e.match;var t=e.onAddAuthor;return o.a.createElement("div",{className:"AddAuthorForm"},o.a.createElement("h1",null,"Add Author"),o.a.createElement(N,{onAddAuthor:t}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(13),y=[{name:"Mark Twain",imageUrl:"images/authors/marktwain.jpg",imageSource:"Wikimedia Commons",books:["The adventures of Huckleberry Finn","Life on the Mississippi","Roughing It"]},{name:"Charles Dickens",imageUrl:"images/authors/charlesdickens.jpg",imageSource:"Wikimedia Commons",books:["Oliver Twist","David CopperField","A Tale of Two Cities"]},{name:"J.K. Rowling",imageUrl:"images/authors/jkrowling.jpg",imageSource:"Wikimedia Commons",books:["Harry Potter saga"]},{name:"Joseph Conrad",imageUrl:"images/authors/josephconrad.jpg",imageSource:"Wikimedia Commons",books:["Heart of Darkness"]},{name:"Stephen King",imageUrl:"images/authors/stephenking.jpg",imageSource:"Wikimedia Commons",books:["Carrie","The Shining","IT"]},{name:"William Shakespeare",imageUrl:"images/authors/williamshakespeare.jpg",imageSource:"Wikimedia Commons",books:["Hamlet","Macbeth","Romeo And Juliet"]}];function T(e){var t=e.reduce(function(e,t,a){return e.concat(t.books)},[]),a=Object(_.shuffle)(t).slice(0,4),n=Object(_.sample)(a);return{books:a,author:e.find(function(e){return e.books.some(function(e){return e===n})})}}var D=m.b(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authors:y,turnData:T(y),highlight:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANSWER_SELECTED":var a=e.turnData.author.books.some(function(e){return e===t.answer});return Object.assign({},e,{highlight:a?"correct":"wrong"});case"CONTINUE":return Object.assign({},e,{highlight:"",turnData:T(e.authors)});case"ADD_AUTHOR":return console.log(t.author),Object.assign({},e,{authors:e.authors.concat([t.author])});default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(c.a,{basename:"/"},o.a.createElement(s.a,{store:D},o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{exact:!0,path:"".concat("/react_authorquizz","/"),component:p}),o.a.createElement(l.a,{path:"".concat("/react_authorquizz","/add"),component:S})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.9e9d07d0.chunk.js.map