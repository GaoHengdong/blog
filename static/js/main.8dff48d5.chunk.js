(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){var n={"./SVG\u7684\u603b\u7ed3.md":165,"./js\u4e2drem\u548cpx\u8f6c\u6362\u7684\u65b9\u6cd5.md":166,"./mutates vs no mutation.md":167,"./ruby\u6dfb\u52a0\u5230gitbash.md":168,"./z-index\u7684\u5404\u79cd\u95ee\u9898.md":169,"./\u5404\u79cd\u904d\u5386\u7684\u533a\u522b.md":170,"./\u6b63\u5219\u8868\u8fbe\u5f0f.md":171,"./\u7279\u522b\u9e23\u8c22.md":172,"./\u8bba\u6210\u529f\u548c\u5931\u8d25\u7684\u5173\u7cfb.md":173};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=164},165:function(e,t,a){e.exports=a.p+"static/media/SVG\u7684\u603b\u7ed3.383bb897.md"},166:function(e,t,a){e.exports=a.p+"static/media/js\u4e2drem\u548cpx\u8f6c\u6362\u7684\u65b9\u6cd5.2704acfa.md"},167:function(e,t,a){e.exports=a.p+"static/media/mutates vs no mutation.9e5b075b.md"},168:function(e,t,a){e.exports=a.p+"static/media/ruby\u6dfb\u52a0\u5230gitbash.1f16c3fd.md"},169:function(e,t,a){e.exports=a.p+"static/media/z-index\u7684\u5404\u79cd\u95ee\u9898.a864ec11.md"},170:function(e,t,a){e.exports=a.p+"static/media/\u5404\u79cd\u904d\u5386\u7684\u533a\u522b.933c35d4.md"},171:function(e,t,a){e.exports=a.p+"static/media/\u6b63\u5219\u8868\u8fbe\u5f0f.d00ac814.md"},172:function(e,t,a){e.exports=a.p+"static/media/\u7279\u522b\u9e23\u8c22.28ca3634.md"},173:function(e,t,a){e.exports=a.p+"static/media/\u8bba\u6210\u529f\u548c\u5931\u8d25\u7684\u5173\u7cfb.728c4c8c.md"},176:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(20),i=a.n(o),r=a(13),l=a(15),s=a(48),u=a(2),m=a(3),d=a(6),p=a(4),h=a(5),b=a(16),g=a(18),f=(a(64),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderMask",value:function(){return{backgroundColor:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(128, 128, 128, 0.219)"}}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.onMaskClick,n=e.color;return t?c.a.createElement("div",{className:"mask",style:this.renderMask(n),onClick:a}):c.a.createElement(c.a.Fragment,null)}}]),t}(c.a.Component)),E=[{id:1,title:"\u7279\u522b\u9e23\u8c22",tags:["daily"],description:"special acknowledgement",classification:"daily"},{id:2,title:"\u8bba\u6210\u529f\u548c\u5931\u8d25\u7684\u5173\u7cfb",tags:["daily","game","life"],description:"the relationship between success ...",classification:"life"},{id:3,title:"\u6b63\u5219\u8868\u8fbe\u5f0f",tags:["regexs"],description:"regular expression",classification:"study"},{id:4,title:"\u5404\u79cd\u904d\u5386\u7684\u533a\u522b",tags:["js"],description:"difference bettwen foreach for-in...",classification:"technology"},{id:5,title:"z-index\u7684\u5404\u79cd\u95ee\u9898",tags:["css"],description:"problems encountered with z-index",classification:"technology"},{id:6,title:"SVG\u7684\u603b\u7ed3",tags:["svg"],description:"summary of svg",classification:"study"},{id:7,title:"ruby\u6dfb\u52a0\u5230gitbash",tags:["scss","css","compass","ruby"],description:"add ruby to gitbash",classification:"technology"},{id:8,title:"mutates vs no mutation",tags:["react","js"],description:"mutates vs no mutation",classification:"technology"},{id:9,title:"js\u4e2drem\u548cpx\u8f6c\u6362\u7684\u65b9\u6cd5",tags:["js"],description:"rem to px",classification:"technology"}],y=function(){return{type:"FETCH_BLOGLIST",payload:{tagName:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",blogList:E}}},v=(a(65),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={showBackBtn:!1},a.onLinkClick=function(){a.props.clickMenu()},a.onInputChange=function(e){a.props.clickToggleBtn(e.target.checked)},a.onEmptyClick=function(e){a.props.clickEmpty()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderBackBtn",value:function(){return!0===this.state.showBackBtn?{display:"block"}:{display:"none"}}},{key:"onRouteChanged",value:function(){"/"!==this.props.location.pathname?this.setState({showBackBtn:!0}):this.setState({showBackBtn:!1})}},{key:"componentDidMount",value:function(){this.onRouteChanged()}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged()}},{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"flex flex-8 flex-maxwidth-500-8"},c.a.createElement("div",{style:{width:"1rem"}},c.a.createElement(b.b,{to:"/"},c.a.createElement("span",{className:"header__backbtn icon-277",style:this.renderBackBtn()})))),c.a.createElement("input",{type:"checkbox",className:"header__checkbox",id:"header__checkbox",checked:this.props.isChecked,onChange:this.onInputChange}),c.a.createElement("label",{htmlFor:"header__checkbox",className:"header__label"},c.a.createElement("span",{className:"header__togglebtn icon-247"})),c.a.createElement(f,{show:this.props.isChecked,onMaskClick:this.onEmptyClick,color:"transparent"}),c.a.createElement("ul",{className:"header__ul flex-2"},c.a.createElement("li",null,c.a.createElement(b.b,{to:"/",onClick:this.onLinkClick},c.a.createElement("span",{className:"icon-001"}),c.a.createElement("span",null,"home"))),c.a.createElement("li",null,c.a.createElement(b.b,{to:"/aboutme",onClick:this.onLinkClick},c.a.createElement("span",{className:"icon-336"}),c.a.createElement("span",null,"me")))))}}]),t}(c.a.Component)),k=Object(g.d)(Object(r.b)(function(e){return{isChecked:e.headerMenu.isChecked}},{clickMenu:function(){return{type:"CLICK_MENU"}},clickToggleBtn:function(e){return{type:"CLICK_TOGGLEBTN",payload:e}},clickEmpty:function(){return{type:"CLICK_EMPTY"}}})(v)),_=(a(71),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"Copyright \xa9 Henry's Blog 2019"),c.a.createElement("p",{className:"footer__author"},"Made with ",c.a.createElement("i",{className:"icon-008",style:{color:"#FF8789"}})," by Henry Gao"))}}]),t}(n.Component)),O=(a(72),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"aboutme"},c.a.createElement("div",{className:"aboutme__container"},c.a.createElement("h1",{className:"aboutme__card"},"Henry"),c.a.createElement("p",null,"\u559c\u6b22\u6709\u8da3\u7684\u4e8b\u7269"),c.a.createElement("p",null,"\u8ba8\u538c\u4e0d\u6709\u8da3\u7684\u4e8b\u7269"),c.a.createElement("p",null,"\u7cbe\u901aJavaScript,Python,Java\u5199helloworld"),c.a.createElement("p",null,"\u8ba8\u538c\u5fd9\u788c\u7684\u751f\u6d3b\u53c8\u4e0d\u60f3\u95f2\u4e0b\u6765"),c.a.createElement("p",null,"\u559c\u6b22\u6ca1\u4e8b\u7684\u65f6\u5019\u559d\u559d\u9178\u5976",c.a.createElement("i",{className:"icon-336"}))))}}]),t}(c.a.Component)),C=(a(73),a(74),function(){return c.a.createElement("div",{className:"blogheader__container"},c.a.createElement("div",{className:"blogheader__body flex"},c.a.createElement("div",{className:"blogheader__avatar flex-2"},c.a.createElement("div",{className:"blogheader__image-box"},c.a.createElement("span",{className:"blogheader__icon icon-336"}))),c.a.createElement("div",{className:"blogheader__container-right flex-3"},c.a.createElement("h1",{className:"blogheader__h1"},"Henry 's blog"),c.a.createElement("h2",{className:"blogheader__h2"},"\u4eba\u6ca1\u6709\u68a6\u60f3\uff0c\u548c\u54b8\u9c7c\u6709\u4ec0\u4e48\u533a\u522b"),c.a.createElement("div",{className:"blogheader__icons"},c.a.createElement("a",{href:"https://github.com/GaoHengdong",className:"blogheader__iconbox"},c.a.createElement("span",{className:"icon-150"})),c.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100008566682910",className:"blogheader__iconbox"},c.a.createElement("span",{className:"icon-092"}))))))}),j=a(27),N=(a(75),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"blogitemcontainer"},this.props.children)}}]),t}(n.Component)),x=["","#65A186","#00A99B","#009FE0","#384B42","#9BB0A5","#629BC2","#7293E2","#DEB887","#85BB88","#B1D386","#E6E885","#65A186","#9BB0A5","#9CADBC","#008D93","#FFC7A1","#939366","#BAC5A5","#95B1B0","#00C2AE"],B={PS:{icon:"icon-270",color:1},music:{icon:"icon-084",color:2},daily:{icon:"icon-033",color:3},travel:{icon:"icon-034",color:4},guichu:{icon:"icon-360",color:5},sport:{icon:"icon-100",color:6},technology:{icon:"icon-062",color:7},life:{icon:"icon-063",color:8},game:{icon:"icon-076",color:9},study:{icon:"icon-079",color:10},science:{icon:"icon-035",color:11}},L={daily:11,game:12,life:13,regexs:15,js:16,css:17,svg:18,scss:19,compass:20,ruby:1,react:2},w=5,T=(a(76),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderIcon",value:function(){var e=B[this.props.classification];return{color:x[e.color],icon:e.icon}}},{key:"renderTags",value:function(){var e=this.props,t=e.tags,a=e.id;return t.map(function(e){return c.a.createElement("li",{key:"item-".concat(a,"-tag-").concat(e),style:{backgroundColor:x[L[e]]}},e)})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.description;return c.a.createElement(b.b,{className:"blog-item__link",to:"/blog/".concat(t)},c.a.createElement("div",{className:"blog-item",style:{animationDelay:"".concat(this.props.animationdelay,"ms")}},c.a.createElement("div",{className:"blog-item__imagebox"},c.a.createElement("i",{className:this.renderIcon().icon,style:{color:this.renderIcon().color}})),c.a.createElement("div",{className:"blog-item__rightcontainer"},c.a.createElement("div",{className:"blog-item__title"},t),c.a.createElement("div",{className:"blog-item__description"},a),c.a.createElement("div",{className:"blog-item__tags"},c.a.createElement("ul",null,this.renderTags())))))}}]),t}(n.Component)),M=(a(77),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1},a.onMaskClick=function(){a.setState({checked:!1})},a.onInputChange=function(e){a.setState({checked:e.target.checked})},a.onEmptyCLick=function(){a.setState({checked:!1})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.renderList;return c.a.createElement("div",{className:"menu"},c.a.createElement("input",{type:"checkbox",className:"menu__checkbox",id:"menu__checkbox",checked:this.state.checked,onChange:this.onInputChange}),c.a.createElement(f,{show:this.state.checked,onMaskClick:this.onMaskClick,color:"transparent"}),c.a.createElement("label",{htmlFor:"menu__checkbox",className:"menu__label"},c.a.createElement("i",{className:"icon-247"})),c.a.createElement("div",{className:"menu__list",style:{width:t}},c.a.createElement("ul",{className:"menu__ul"},a)))}}]),t}(n.Component)),P=(a(78),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderPreviousBtn",value:function(){var e=this;return 1!==this.props.page?c.a.createElement("div",{className:"pagination__btn pagination__btn--previous",onClick:function(){return e.props.previousPage()}},c.a.createElement("i",{className:"icon-277"})):null}},{key:"renderNextBtn",value:function(){var e=this;return this.props.page!==this.props.pageNum?c.a.createElement("div",{className:"pagination__btn pagination__btn--next",onClick:function(){return e.props.nextPage()}},c.a.createElement("i",{className:"icon-276"})):null}},{key:"render",value:function(){return c.a.createElement("div",{className:"pagination"},this.renderPreviousBtn(),c.a.createElement("div",{className:"pagination flex-1"}),this.renderNextBtn())}}]),t}(n.Component)),I=Object(r.b)(function(e){return{pageNum:e.blog.pageNum,page:e.blog.page}},{nextPage:function(){return{type:"NEXT_PAGE"}},previousPage:function(){return{type:"PREVIOUS_PAGE"}}})(P),S=(a(79),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onTagClick=function(e){a.menuRef.current.onEmptyCLick(),a.props.fetchBlogList(e.target.innerHTML)},a.menuRef=c.a.createRef(),a.state={tagList:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"createTagList",value:function(){return Object.keys(L).reduce(function(e,t){return e.push({name:t,color:x[L[t]]}),e},[])}},{key:"renderTagList",value:function(e){var t=this,a=c.a.createElement("li",{id:"tag-all",key:"tag-all",style:{backgroundColor:"#9CADBC"},onClick:this.onTagClick},"all"),n=e.map(function(e){var a=e.name,n=e.color;return c.a.createElement("li",{id:"tag-".concat(a),key:"tag-".concat(a),style:{backgroundColor:n},onClick:t.onTagClick},a)});return[a].concat(Object(j.a)(n))}},{key:"renderBlogItems",value:function(){var e=this.props,t=e.page,a=e.blogList,n=w;return a.slice((t-1)*n,t*n).map(function(e,t){return c.a.createElement(T,Object.assign({key:"blogitem-".concat(e.id)},e,{animationdelay:100*t}))})}},{key:"componentDidMount",value:function(){this.props.fetchBlogList(this.props.tag),this.setState({tagList:this.createTagList()})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"blog-body"},c.a.createElement("div",{className:"blog-body__container"},c.a.createElement("div",{className:"blog-body__top"},c.a.createElement("div",{className:"blog-body__title"},"my posts"),c.a.createElement("div",{className:"blog-body__tags"},c.a.createElement(M,{renderList:this.renderTagList(this.state.tagList),ref:this.menuRef}))),c.a.createElement(N,null,this.renderBlogItems(),c.a.createElement(I,null)))))}}]),t}(n.Component)),A=Object(r.b)(function(e){return{blogList:e.blog.blogList,page:e.blog.page,tag:e.blog.tag}},{fetchBlogList:y})(S),D=(a(80),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"blog",style:{backgroundColor:"#f5f7f9",minHeight:"70vh"}},c.a.createElement(C,null),c.a.createElement(A,null))}}]),t}(c.a.Component)),G=a(36),F=a.n(G),H=a(50),R=a(51),U=a.n(R),K=a(179),V=(a(161),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))}}]),t}(n.Component)),z=(a(162),a(163),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={content:"",inProp:!0},a.renderContent=function(){if(a.props.thisBlog&&""!==a.state.content){var e=a.props.thisBlog,t=e.title,n=e.description,o=e.tags;return c.a.createElement("div",{className:"blogContent"},c.a.createElement("div",{className:"blogContent__contentHeader"},c.a.createElement("div",{className:"blogContent__headerInside"},c.a.createElement("h1",{className:"blogContent__title"},t),c.a.createElement("h2",{className:"blogContent__subtitle"},n),c.a.createElement("ul",{className:"blogContent__tags"},a.renderTags(o)))),c.a.createElement(U.a,{className:"blogContent__markdown-body markdown-body",source:a.state.content}))}return null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"fetchContent",value:function(){var e=Object(H.a)(F.a.mark(function e(t){var a,n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,Promise.all([new Promise(function(e){return setTimeout(function(){e()},300)}),a.text()]);case 5:n=e.sent,this.setState({content:n[1],inProp:!1});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"renderTags",value:function(e){return e.map(function(e){return c.a.createElement("li",{key:e,style:{backgroundColor:"".concat(x[L[e]],"55")}},e)})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0);var e=this.props.match.params.title,t=a(164)("./".concat(e,".md"));this.fetchContent(t),this.props.fetchBlogList()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.renderContent(),c.a.createElement(K.a,{in:this.state.inProp,timeout:300,classNames:"loadernode",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(V,null))))}}]),t}(c.a.Component)),J=Object(r.b)(function(e,t){return{thisBlog:e.blog.blogList.filter(function(e){return e.title===t.match.params.title})[0]}},{fetchBlogList:y})(z),X=(a(176),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){console.log(111)}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(b.a,null,c.a.createElement(k,null),c.a.createElement(g.a,{path:"/",exact:!0,component:D}),c.a.createElement(g.a,{path:"/aboutme",exat:!0,component:O}),c.a.createElement(g.a,{path:"/blog/:title",exat:!0,component:J}),c.a.createElement(_,null)))}}]),t}(c.a.Component)),Y=a(17),q={isChecked:!1},Q={blogList:[],page:1,pageNum:1,tag:"all"},W=Object(l.c)({headerMenu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_EMPTY":case"CLICK_MENU":return Object(Y.a)({},e,{isChecked:!1});case"CLICK_TOGGLEBTN":return Object(Y.a)({},e,{isChecked:t.payload});default:return e}},blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BLOGLIST":var a,n=null;return"all"===t.payload.tagName?a=t.payload.blogList:(n={page:1},a=t.payload.blogList.filter(function(e){return e.tags.includes(t.payload.tagName)})),Object(Y.a)({},e,{blogList:Object(j.a)(a).reverse(),pageNum:Math.ceil(a.length/w),tag:t.payload.tagName},n);case"NEXT_PAGE":return Object(Y.a)({},e,{page:e.page+1});case"PREVIOUS_PAGE":return Object(Y.a)({},e,{page:e.page-1});default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,$=Object(l.e)(W,Z(Object(l.a)(s.a)));i.a.render(c.a.createElement(r.a,{store:$},c.a.createElement(X,null)),document.querySelector("#root"))},55:function(e,t,a){e.exports=a(177)},64:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.8dff48d5.chunk.js.map