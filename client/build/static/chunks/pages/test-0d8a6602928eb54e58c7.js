_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{FCuQ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("VYKx"),u=r.a.createElement,l=["jane","john","alex"],s=["smith","jones"],i=Array(100).fill().map((function(e){return{firstName:l[Math.floor(Math.random()*l.length)],lastName:s[Math.floor(Math.random()*s.length)],age:Math.ceil(75*Math.random())}})),c=[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"}]},{Header:"Other Info",columns:[{Header:"Age",accessor:"age"}]}],d=function(e){var t=e.columns,n=e.data,a=Object(o.useTable)({columns:t,data:n,initialState:{pageIndex:0}},o.usePagination),l=a.getTableProps,s=a.getTableBodyProps,i=a.headerGroups,c=a.prepareRow,d=a.page,p=a.canPreviousPage,g=a.canNextPage,f=a.pageOptions,m=a.pageCount,b=a.gotoPage,h=a.nextPage,P=a.previousPage,N=a.setPageSize,w=a.state,v=w.pageIndex,_=w.pageSize;return u(r.a.Fragment,null,u("table",l(),u("thead",null,i.map((function(e){return u("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return u("th",e.getHeaderProps(),e.render("Header"))})))}))),u("tbody",s(),d.map((function(e,t){return c(e),u("tr",e.getRowProps(),e.cells.map((function(e){return u("td",e.getCellProps(),e.render("Cell"))})))})))),u("div",null,u("button",{onClick:function(){return b(0)},disabled:!p},"<<")," ",u("button",{onClick:function(){return P()},disabled:!p},"<")," ",u("button",{onClick:function(){return h()},disabled:!g},">")," ",u("button",{onClick:function(){return b(m-1)},disabled:!g},">>")," ",u("span",null,"Page"," ",u("strong",null,v+1," of ",f.length)," "),u("span",null,"| Go to page:"," ",u("input",{type:"number",defaultValue:v+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;b(t)},style:{width:"100px"}}))," ",u("select",{value:_,onChange:function(e){N(Number(e.target.value))}},[10,20,30,40,50].map((function(e){return u("option",{key:e,value:e},"Show ",e)})))))};function p(){return u("div",{className:"App"},u(d,{columns:c,data:i}))}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},"zl3/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n("FCuQ")}])}},[["zl3/",0,1,5]]]);