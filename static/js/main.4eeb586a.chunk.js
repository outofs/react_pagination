(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),r=c(4),i=c(1);c(10);var l=c(2),s=c.n(l),o=c(0),j=function(e){for(var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,r=Math.ceil(a/c),i=[],l=1;l<=r;l+=1){var j={id:"page-".concat(l),value:l};i.push(j)}return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1!==t?"false":"true",onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e.value===t}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e.value),onClick:function(){return n(e.value)},children:e.value})})})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===r}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t!==r?"false":"true",onClick:function(){t!==r&&n(t+1)},children:"\xbb"})})]})},u=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=u.length,a=Object(i.useState)(5),c=Object(r.a)(a,2),t=c[0],n=c[1],l=Object(i.useState)(1),s=Object(r.a)(l,2),d=s[0],h=s[1];function p(){return(d-1)*t+t}var b=(d-1)*t,m=p()<=e?p():e;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(d," (items ").concat(b+1," - ").concat(m," of ").concat(e,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){return a=Number(e.target.value),n(a),void h(1);var a},value:t.toString(),children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:e,perPage:t,currentPage:d,onPageChange:h}),Object(o.jsx)("ul",{children:u.slice(b,m).map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4eeb586a.chunk.js.map