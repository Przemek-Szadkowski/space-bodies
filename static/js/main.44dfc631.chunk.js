(this["webpackJsonpspace-bodies"]=this["webpackJsonpspace-bodies"]||[]).push([[0],{11:function(a,e,t){},14:function(a,e,t){"use strict";t.r(e);var s=t(1),n=t.n(s),c=t(5),r=t.n(c),d=(t(11),t(4)),i=t.n(d),b=t(6),o=t(2),l=t(0);function _(a){return Object(l.jsxs)("div",{className:"record",children:[Object(l.jsx)("p",{children:a.data.name}),Object(l.jsxs)("p",{className:"bodie-data",children:["Gravity: ",a.data.gravity]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Density: ",a.data.density]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Mass: ",a.data.mass?a.data.mass.massValue:"NA"]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Average temp. : ",a.data.avgTemp]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Moons : ",a.data.moons?a.data.moons.length:0]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Sideral orbit: ",a.data.sideralOrbit]}),Object(l.jsxs)("p",{className:"bodie-data",children:["Sideral rotation: ",a.data.sideralRotation]})]})}function h(a){var e,t;return Object(l.jsx)("div",{className:"text",children:Object(l.jsx)("div",{className:"mainList",children:a.searchingBodies?(e=a.searchingBodies,t=a.bodies,t.filter((function(a){var t=new RegExp(e,"gi");return a.name.match(t)}))).map((function(a){return Object(l.jsx)(_,{data:a},a.id)})):a.bodies&&a.bodies.map((function(a){return Object(l.jsx)(_,{data:a},a.id)}))})})}function j(a){return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsx)("button",{className:a.arePlanets?"dashboard__btn dashboard__btn__main":"dashboard__btn dashboard__btn__main dashboard__btn__main--active",onClick:a.arePlanets?a.showPlanets:null,children:"All bodies"}),Object(l.jsx)("button",{className:a.arePlanets?"dashboard__btn dashboard__btn__main dashboard__btn__main__planets dashboard__btn__main__planets--active":"dashboard__btn dashboard__btn__main dashboard__btn__main__planets",onClick:a.arePlanets?null:a.showPlanets,children:"Planets"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__start",onClick:a.toggleSearchInput,children:"Search"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__options",children:"1"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__options",children:"2"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__options",children:"3"}),Object(l.jsx)("button",{className:"dashboard__btn dashboard__btn__options",children:"4"})]})}function u(a){return Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search by name:"}),Object(l.jsx)("input",{type:"search",id:"search",name:"search",autocomplete:"off",onChange:function(e){var t=e.target.value;a.setSearchingBodies(t)}})]})}var m=function(){var a=Object(s.useState)([]),e=Object(o.a)(a,2),t=e[0],n=e[1],c=Object(s.useState)(!1),r=Object(o.a)(c,2),d=r[0],_=r[1],m=Object(s.useState)(!1),O=Object(o.a)(m,2),p=O[0],x=O[1],f=Object(s.useState)(""),v=Object(o.a)(f,2),N=v[0],g=v[1],S=function(){var a=Object(b.a)(i.a.mark((function a(){var e,t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.le-systeme-solaire.net/rest/bodies/");case 2:return e=a.sent,a.next=5,e.json();case 5:t=a.sent,n(t);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(s.useEffect)((function(){S()}),[]),Object(l.jsxs)("main",{children:[p&&Object(l.jsx)(u,{setSearchingBodies:g}),Object(l.jsx)(j,{arePlanets:d,showPlanets:function(){_(!d)},toggleSearchInput:function(){x(!p),p&&g("")}}),Object(l.jsx)(h,{searchingBodies:N,bodies:d?t.bodies.filter((function(a){return a.isPlanet})):t.bodies})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.44dfc631.chunk.js.map