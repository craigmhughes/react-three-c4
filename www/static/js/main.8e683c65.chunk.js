(this["webpackJsonpconnect-test"]=this["webpackJsonpconnect-test"]||[]).push([[0],{27:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(21),c=n.n(i),r=(n(32),n(33),n(34),n(4)),s=n(22),l=n(6),u=n(14),v=function(){var e=Object(l.h)();return e.camera.position.z=2.5,e.gl.setSize(window.innerWidth,window.innerHeight),null};Object(l.d)({OrbitControls:s.a});var m=function(e){for(var t=e.active,n=(e.setActive,e.isMoving),i=e.setIsMoving,c=Object(o.useRef)(),s=Object(u.b)({rotationY:t?3.15:0}),v=[1.5,1.5,.2],m=[],f=Object(o.useState)(-1),h=Object(r.a)(f,2),b=h[0],g=h[1],p=0;p<7;p++)m.push(a.a.createElement(d,{key:p,id:p,dimensions:v,cols:7,activeCol:b,setActiveCol:g}));return Object(l.f)((function(){(3.15==s.rotationY.value&&n||0==s.rotationY.value&&n)&&i(!1)})),a.a.createElement(u.a.mesh,{ref:c,"rotation-y":s.rotationY,"position-x":.05},m)},d=function(e){var t=e.id,n=e.dimensions,i=e.cols,c=e.activeCol,r=e.setActiveCol,s=Object(o.useRef)(),l=Object(u.b)({color:c===t?"red":"grey"});return a.a.createElement(u.a.mesh,{ref:s,"position-x":-n[0]/2+(n[0]/i+.02)*t,"position-z":.1,onClick:function(){r(t)}},a.a.createElement("boxGeometry",{attach:"geometry",args:[n[0]/i,n[1],n[2]]}),a.a.createElement(u.a.meshPhysicalMaterial,{attach:"material",color:l.color}))},f=function(e){var t=e.setActive,n=e.active,o=e.setIsMoving,i=e.isMoving;return a.a.createElement("button",{id:"place-button",style:{height:"100px",width:"100px"},onClick:function(e){!function(e){e.preventDefault(),0==i&&(t(!n),o(!0))}(e)}},"Click")},h=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(!1),s=Object(r.a)(c,2),u=s[0],d=s[1];return a.a.createElement("div",{id:"game-root"},a.a.createElement(l.a,{shadowMap:!0},a.a.createElement(v,null),a.a.createElement("ambientLight",null),a.a.createElement("spotLight",{position:[0,5,10]}),a.a.createElement(m,{setActive:i,active:n,isMoving:u,setIsMoving:d})),a.a.createElement(f,{setActive:i,active:n,isMoving:u,setIsMoving:d}))};var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(){c.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))};window.cordova?document.addEventListener("deviceready",g,!1):g()}},[[27,1,2]]]);
//# sourceMappingURL=main.8e683c65.chunk.js.map