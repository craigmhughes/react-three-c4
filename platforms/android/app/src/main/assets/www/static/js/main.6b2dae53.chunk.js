(this["webpackJsonpconnect-test"]=this["webpackJsonpconnect-test"]||[]).push([[0],{28:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(21),i=n.n(r),c=(n(33),n(34),n(3)),s=n(22),l=n(5),u=n(0),f=n(12),v=n(23),d=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],i=new u.MeshPhongMaterial({color:28048});return Object(a.useEffect)((function(){n||(new v.a).load("blockfour-2.gltf",(function(e){e.scene.traverse((function(e){e.isMesh&&(e.material=i),e instanceof u.Mesh&&(e.castShadow=!0)})),r(e)}))})),n?o.a.createElement("primitive",{object:n.scene,scale:[.75,.75,.75],"position-y":-.675,"position-z":-.65}):null},m=function(e){var t=e.id,n=e.dimensions,r=e.cols,i=e.owner,c=e.isPlaced,s=Object(a.useRef)(),l=n[0]/r*.75,u=i>0?"#e8ea5e":"#bb4042",v=Object(f.b)({counterColor:u,y:c?.23*t-.625:n[1]+l,transparent:c?1:0});return o.a.createElement(f.a.mesh,{ref:s,"rotation-x":0,"position-y":v.y,castShadow:c,receiveShadow:!0},o.a.createElement("boxGeometry",{attach:"geometry",args:[l,l,l]}),o.a.createElement(f.a.meshPhongMaterial,{attach:"material",color:v.counterColor,opacity:v.transparent}))},p=function(e){for(var t=e.id,n=e.dimensions,r=e.cols,i=e.activeCol,c=e.setActiveCol,s=e.counters,l=e.setCounter,u=e.player,v=Object(a.useRef)(),d=t,p=[],h=Object(f.b)({color:i===t?"red":"grey"}),b=0;b<Math.floor(n[1]/(n[0]/r));b++)p.push(o.a.createElement(m,{key:b,id:b,dimensions:n,cols:r,owner:s[d][b],isPlaced:void 0!==s[t][b]}));return o.a.createElement(f.a.mesh,{ref:v,"position-x":-n[0]/2+(n[0]/r+.015)*t+.06,"position-z":-.05,"position-y":.075,onClick:function(){c(-1),l([t,u]),c(t)}},p,o.a.createElement("boxGeometry",{attach:"geometry",args:[n[0]/r,n[1],n[2]]}),o.a.createElement(f.a.meshBasicMaterial,{attach:"material",color:h.color,transparent:!0,opacity:.01}))},h=function(e){for(var t=e.active,n=(e.setActive,e.isMoving),r=e.setIsMoving,i=e.counters,c=e.setCounter,s=e.player,u=e.activeCol,v=e.setActiveCol,m=Object(a.useRef)(),h=Object(f.b)({rotationY:t?3.15:0}),b=[1.5,1.425,.2],y=[],g=0;g<7;g++)y.push(o.a.createElement(p,{key:g,id:g,dimensions:b,cols:7,activeCol:u,setActiveCol:v,counters:i,setCounter:c,player:s}));return Object(l.f)((function(){(3.15==h.rotationY.value&&n||0==h.rotationY.value&&n)&&r(!1)})),o.a.createElement(f.a.mesh,{ref:m,"rotation-y":h.rotationY,"position-y":0,"position-x":.025,castShadow:!0,receiveShadow:!0},y,o.a.createElement(d,null))},b=function(e){var t=Object(l.h)(),n=t.camera;return n.position.z=2.5,n.position.y=e?0:2.5,t.gl.setSize(window.innerWidth,window.innerHeight),null};Object(l.d)({OrbitControls:s.a});var y=function(e){var t=e.setActive,n=e.active,a=e.setIsMoving,r=e.isMoving,i=e.placeCounter;return o.a.createElement("button",{id:"place-button",onClick:function(e){!function(e){e.preventDefault(),0==r&&(t(!n),a(!0),i())}(e)}},"Place Counter")},g=function(){return o.a.createElement("mesh",{"rotation-x":-1.6,"position-z":0,"position-y":-.675,receiveShadow:!0},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1e3,1e3]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"#4fd654"}))},E=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),s=Object(c.a)(i,2),f=s[0],v=s[1],d=Object(a.useState)(1),m=Object(c.a)(d,2),p=m[0],E=m[1],w=Object(a.useState)([[],[],[],[],[],[],[]]),j=Object(c.a)(w,2),C=j[0],O=(j[1],Object(a.useState)([0,p])),M=Object(c.a)(O,2),S=M[0],k=M[1],A=Object(a.useState)(0),P=Object(c.a)(A,2),x=P[0],z=P[1];function I(e,t){for(var n=1,a=1;a<7&&!(e[0]+a>6);a++)if("undefined"!==typeof C[e[0]+a]){if(C[e[0]+a][e[1]]!=t)break;n+=1}for(var o=1;o<7&&!(e[0]-o<0);o++)if("undefined"!==typeof C[e[0]-o]){if(C[e[0]-o][e[1]]!=t)break;n+=1}return n>=4}function B(e,t){for(var n=1,a=1;a<6&&!(e[1]+a>5);a++)if("undefined"!==typeof C[e[0]][e[1]+a]){if(C[e[0]][e[1]+a]!=t)break;n+=1}for(var o=1;o<7&&!(e[1]-o<0);o++)if("undefined"!==typeof C[e[0]][e[1]-o]){if(C[e[0]][e[1]-o]!=t)break;n+=1}return n>=4}function L(e,t){for(var n=1,a=1;a<6&&!(e[0]+a>5||e[1]+a>5);a++)if("undefined"!==typeof C[e[0]+a][e[1]+a]){if(C[e[0]+a][e[1]+a]!=t)break;n+=1}for(var o=1;o<7&&!(e[0]-o<0||e[1]-o<0);o++)if("undefined"!==typeof C[e[0]-o][e[1]-o]){if(C[e[0]-o][e[1]-o]!=t)break;n+=1}return n>=4}function Y(e,t){for(var n=1,a=1;a<6&&!(e[0]+a>5||e[1]-a<0);a++)if("undefined"!==typeof C[e[0]+a][e[1]-a]){if(C[e[0]+a][e[1]-a]!=t)break;n+=1}for(var o=1;o<7&&!(e[0]-o<0||e[1]+o>5);o++)if("undefined"!==typeof C[e[0]-o][e[1]+o]){if(C[e[0]-o][e[1]+o]!=t)break;n+=1}return n>=4}return o.a.createElement("div",{id:"game-root"},o.a.createElement(l.a,{onCreated:function(e){var t=e.gl;return t.shadowMap.enabled=!0,t.shadowMap.type=u.PCFSoftShadowMap}},o.a.createElement(b,{isActive:n}),o.a.createElement("ambientLight",{intensity:.5}),o.a.createElement("spotLight",{intensity:.6,position:[30,30,20],angle:.2,penumbra:1,castShadow:!0}),o.a.createElement("spotLight",{intensity:.6,position:[30,30,100],angle:.2,penumbra:1,castShadow:!0}),o.a.createElement(h,{setActive:r,active:n,isMoving:f,setIsMoving:v,counters:C,setCounter:k,player:p,activeCol:x,setActiveCol:z}),o.a.createElement(g,null),o.a.createElement("fog",{attach:"fog",args:["#4cd4ff",0,80]})),o.a.createElement(y,{setActive:r,active:n,isMoving:f,setIsMoving:v,setActiveCol:z,placeCounter:function(){C[S[0]][C[S[0]].length]=S[1],S.push(C[S[0]].length-1),function(e){var t=[e[0],e[2]],n=e[1],a=[I(t,n),B(t,n),Y(t,n),L(t,n)];console.log(a)}(S),E(-1*p),k([x,-1*p])},setPlayer:E,player:p,activeCol:x,setActiveCounter:k}))};var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=function(){i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))};window.cordova?document.addEventListener("deviceready",j,!1):j()}},[[28,1,2]]]);
//# sourceMappingURL=main.6b2dae53.chunk.js.map