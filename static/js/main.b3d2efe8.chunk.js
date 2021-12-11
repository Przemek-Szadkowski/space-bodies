(this["webpackJsonpspace-bodies"]=this["webpackJsonpspace-bodies"]||[]).push([[0],{11:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(5),r=t.n(c),i=(t(11),t(4)),d=t.n(i),o=t(6),b=t(2),l=t(0);function j(e){var a=Object(s.useRef)(null);return Object(l.jsxs)("div",{className:"record",onClick:function(){a.current.classList.toggle("active")},ref:a,children:[Object(l.jsx)("p",{children:e.data.name}),Object(l.jsxs)("p",{className:"bodie-data",children:["Density: ",e.data.density," ",Object(l.jsx)("span",{className:"unit",children:"( g.cm3 )"})]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Gravity: ",e.data.gravity," ",Object(l.jsx)("span",{className:"unit",children:"( m.s-2 )"})]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Mass: ",e.data.mass?e.data.mass.massValue:"NA"," ",Object(l.jsxs)("span",{className:"unit",children:[" ( in 10",Object(l.jsx)("sup",{children:"n"})," kg )"]})]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Mean radius : ",e.data.meanRadius," ",Object(l.jsx)("span",{className:"unit",children:"( km )"})]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Moons : ",e.data.moons?e.data.moons.length:0]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Sideral orbit: ",e.data.sideralOrbit," ",Object(l.jsx)("span",{className:"unit",children:"( in earth day )"})]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Sideral rotation: ",e.data.sideralRotation," ",Object(l.jsx)("span",{className:"unit",children:"( in hour )"})]})]})}function h(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"loader_left"}),Object(l.jsx)("h2",{className:"loading",children:"LOADING..."})]})}function u(e){var a,t,n=Object(s.useRef)(null),c=Object(s.useRef)(null);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"text",onScroll:function(){var e=Math.round(100*n.current.scrollTop/n.current.scrollHeight);c.current.style.height="".concat(e,"vh")},ref:n,children:[Object(l.jsx)("div",{className:"progress_bar",ref:c}),e.loading?Object(l.jsx)(h,{}):Object(l.jsx)("div",{className:"mainList",children:e.searchingBodies?(a=e.searchingBodies,t=e.bodies,t.filter((function(e){var t=new RegExp(a,"gi");return e.name.match(t)}))).map((function(e){return Object(l.jsx)(j,{data:e},e.id)})):e.bodies&&e.bodies.map((function(e){return Object(l.jsx)(j,{data:e},e.id)}))})]})})}function m(){return Object(l.jsx)("div",{className:"bar",children:Object(l.jsx)("p",{children:"Find information about all planets, dwarf planets and the main asteroids. You can search them by name. Click search button and type any searching letter."})})}function O(e){return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsx)("button",{className:e.arePlanets?"dashboard__btn dashboard__btn__main":"dashboard__btn dashboard__btn__main dashboard__btn__main--active",onClick:e.showBodies,children:"All bodies"}),Object(l.jsx)("button",{className:e.arePlanets?"dashboard__btn dashboard__btn__main dashboard__btn__main__planets dashboard__btn__main__planets--active":"dashboard__btn dashboard__btn__main dashboard__btn__main__planets",onClick:e.showPlanets,children:"Planets"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__start",onClick:e.toggleSearchInput,children:"Search"}),Object(l.jsx)(m,{})]})}function _(e){return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search by name:"}),Object(l.jsx)("input",{type:"search",id:"search",name:"search",autoFocus:!0,autoComplete:"off",onChange:function(a){var t=a.target.value;e.setSearchingBodies(t)}})]})}var x=function(){var e=Object(s.useState)([]),a=Object(b.a)(e,2),t=a[0],n=a[1],c=Object(s.useState)(!1),r=Object(b.a)(c,2),i=r[0],j=r[1],h=Object(s.useState)(!1),m=Object(b.a)(h,2),x=m[0],p=m[1],f=Object(s.useState)(""),g=Object(b.a)(f,2),N=g[0],v=g[1],S=Object(s.useState)(!0),y=Object(b.a)(S,2),k=y[0],w=y[1],B=function(){var e=Object(o.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.le-systeme-solaire.net/rest/bodies/");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n(t),w(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){B()}),[]),Object(l.jsxs)("main",{children:[x&&Object(l.jsx)(_,{setSearchingBodies:v}),Object(l.jsx)(O,{arePlanets:i,bodies:i?t.bodies.filter((function(e){return e.isPlanet})):t.bodies,showBodies:function(){j(!1)},showPlanets:function(){j(!0)},toggleSearchInput:function(){p(!x),x&&v("")}}),Object(l.jsx)(u,{loading:k,searchingBodies:N,bodies:i?t.bodies.filter((function(e){return e.isPlanet})):t.bodies})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b3d2efe8.chunk.js.map