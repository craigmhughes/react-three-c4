(this["webpackJsonpconnect-test"]=this["webpackJsonpconnect-test"]||[]).push([[0],{28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(22),c=a.n(i),r=(a(33),a(34),a(3)),s=a(23),l=a(5),u=a(0),f=a(12),m=a(18),d=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],i=t[1],c=new u.MeshPhongMaterial({color:28048});return Object(n.useEffect)((function(){a||(new m.a).load("blockfour-2.gltf",(function(e){e.scene.traverse((function(e){e.isMesh&&(e.material=c),e instanceof u.Mesh&&(e.castShadow=!0)})),i(e)}))})),a?o.a.createElement("primitive",{object:a.scene,scale:[.75,.75,.75],"position-y":-.675,"position-z":-.65}):null},v=function(e){var t=e.id,a=e.dimensions,i=e.cols,c=e.owner,r=e.isPlaced,s=Object(n.useRef)(),l=a[0]/i*1.075,u=c>0?"#e8ea5e":"#bb4042",m=Object(f.b)({counterColor:u,y:r?.23*t-.625:a[1]+l+1,transparent:r?1:0});return o.a.createElement(f.a.mesh,{ref:s,"rotation-x":0,"position-y":m.y,castShadow:r},o.a.createElement("boxGeometry",{attach:"geometry",args:[l,l,l]}),o.a.createElement(f.a.meshPhongMaterial,{attach:"material",color:m.counterColor,opacity:m.transparent}))},g=function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),i=a[0],c=a[1],s=new u.MeshPhongMaterial({color:16777215});return Object(n.useEffect)((function(){i||(new m.a).load("clouds.gltf",(function(e){e.scene.traverse((function(e){e.isMesh&&(e.material=s),e instanceof u.Mesh&&(e.castShadow=!0)})),c(e)}))})),i?o.a.createElement("primitive",{object:i.scene,scale:[.75,.5,.75],"position-y":2,"position-z":0,"rotation-y":e?3.5:-3.5}):null},p=function(e){for(var t=e.id,a=e.dimensions,i=e.cols,c=e.activeCol,r=e.setActiveCol,s=e.counters,l=e.setCounter,u=e.player,m=Object(n.useRef)(),d=t,g=[],p=Object(f.b)({color:c===t?"red":"grey"}),h=0;h<Math.floor(a[1]/(a[0]/i));h++)g.push(o.a.createElement(v,{key:h,id:h,dimensions:a,cols:i,owner:s[d][h],isPlaced:void 0!==s[t][h]}));return o.a.createElement(f.a.mesh,{ref:m,"position-x":-a[0]/2+(a[0]/i+.015)*t+.06,"position-z":-.05,"position-y":.075,onClick:function(){r(-1),l([t,u]),r(t)}},g,o.a.createElement("boxGeometry",{attach:"geometry",args:[a[0]/i,a[1],a[2]]}),o.a.createElement(f.a.meshBasicMaterial,{attach:"material",color:p.color,transparent:!0,opacity:.01}))},h=function(e){for(var t=e.active,a=(e.setActive,e.isMoving),i=e.setIsMoving,c=e.counters,r=e.setCounter,s=e.player,u=e.activeCol,m=e.setActiveCol,v=Object(n.useRef)(),h=Object(f.b)({rotationY:t?3.15:0}),b=[1.5,1.425,.2],y=[],E=0;E<7;E++)y.push(o.a.createElement(p,{key:E,id:E,dimensions:b,cols:7,activeCol:u,setActiveCol:m,counters:c,setCounter:r,player:s}));return Object(l.f)((function(){(3.15==h.rotationY.value&&a||0==h.rotationY.value&&a)&&i(!1)})),o.a.createElement(f.a.mesh,{ref:v,"rotation-y":h.rotationY,"position-y":0,"position-x":.025,castShadow:!0,receiveShadow:!0},y,o.a.createElement(d,null),o.a.createElement(g,{active:t}))},b=function(e){var t=e.setActive,a=e.active,n=e.setIsMoving,i=e.isMoving,c=e.placeCounter,r=e.gameState;return o.a.createElement("img",{src:"assets/place-counter.svg",id:"place-button",className:0==r?"hidden":"",onClick:function(e){!function(e){e.preventDefault(),0==i&&(t(!a),n(!0),c())}(e)}})};var y=function(e){var t=e.setActive,a=e.active,n=e.setIsMoving,i=e.isMoving,c=e.placeCounter,r=e.modal,s=e.setModal,l=e.gameState,u=e.setGameState;return o.a.createElement("div",{className:"Interface"},o.a.createElement("img",{src:"assets/logo.svg",id:"game-logo",className:0==l?"menu":""}),o.a.createElement("img",{src:"assets/playerturn-".concat(a?"two":"one",".svg"),id:"turn-card",className:0==l?"hidden":""}),o.a.createElement("img",{src:"assets/single-player.svg",id:"singleplay-btn",onClick:function(){u(1)},className:l>0?"hidden":""}),o.a.createElement("img",{src:"assets/exit.svg",id:"exit-game",className:0==l?"hidden":"",onClick:function(){s(!r),console.log(r)}}),o.a.createElement(b,{gameState:l,setActive:t,active:a,setIsMoving:n,isMoving:i,placeCounter:c}),o.a.createElement("div",{id:"exit-modal-container",className:r&&0!==l?"active":"",onClick:function(e){"exit-modal"!==e.target.id&&"exit-confirm"!==e.target.id&&s(!r)}},o.a.createElement("img",{src:"assets/quit-modal.svg",id:"exit-modal"}),o.a.createElement("img",{src:"assets/tick.svg",id:"exit-confirm",onClick:function(){u(0),s(!1)}}),o.a.createElement("img",{src:"assets/exit-2.svg",id:"exit-cancel"})))},E=function(e){var t=Object(l.h)(),a=t.camera;return a.position.z=2.5,a.position.y=e?0:2.5,t.gl.setSize(window.innerWidth,window.innerHeight),null};Object(l.d)({OrbitControls:s.a});var j=function(){return o.a.createElement("mesh",{"rotation-x":-1.6,"position-z":0,"position-y":-.675,receiveShadow:!0},o.a.createElement("planeBufferGeometry",{attach:"geometry",args:[10,10]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"#4fd654"}))},O=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(!1),s=Object(r.a)(c,2),f=s[0],m=s[1],d=Object(n.useState)(1),v=Object(r.a)(d,2),g=v[0],p=v[1],b=Object(n.useState)([[],[],[],[],[],[],[]]),O=Object(r.a)(b,2),w=O[0],M=O[1],C=Object(n.useState)([0,g]),S=Object(r.a)(C,2),k=S[0],x=S[1],A=Object(n.useState)(0),N=Object(r.a)(A,2),I=N[0],P=N[1],z=Object(n.useState)(!1),G=Object(r.a)(z,2),B=G[0],Y=G[1],L=Object(n.useState)(0),R=Object(r.a)(L,2),W=R[0],J=R[1];function q(e,t){for(var a=1,n=1;n<7&&!(e[0]+n>6);n++)if("undefined"!==typeof w[e[0]+n]){if(w[e[0]+n][e[1]]!=t)break;a+=1}for(var o=1;o<7&&!(e[0]-o<0);o++)if("undefined"!==typeof w[e[0]-o]){if(w[e[0]-o][e[1]]!=t)break;a+=1}return a>=4}function D(e,t){for(var a=1,n=1;n<6&&!(e[1]+n>5);n++)if("undefined"!==typeof w[e[0]][e[1]+n]){if(w[e[0]][e[1]+n]!=t)break;a+=1}for(var o=1;o<7&&!(e[1]-o<0);o++)if("undefined"!==typeof w[e[0]][e[1]-o]){if(w[e[0]][e[1]-o]!=t)break;a+=1}return a>=4}function F(e,t){for(var a=1,n=1;n<6&&!(e[0]+n>5||e[1]+n>5);n++)if("undefined"!==typeof w[e[0]+n][e[1]+n]){if(w[e[0]+n][e[1]+n]!=t)break;a+=1}for(var o=1;o<7&&!(e[0]-o<0||e[1]-o<0);o++)if("undefined"!==typeof w[e[0]-o][e[1]-o]){if(w[e[0]-o][e[1]-o]!=t)break;a+=1}return a>=4}function H(e,t){for(var a=1,n=1;n<6&&!(e[0]+n>5||e[1]-n<0);n++)if("undefined"!==typeof w[e[0]+n][e[1]-n]){if(w[e[0]+n][e[1]-n]!=t)break;a+=1}for(var o=1;o<7&&!(e[0]-o<0||e[1]+o>5);o++)if("undefined"!==typeof w[e[0]-o][e[1]+o]){if(w[e[0]-o][e[1]+o]!=t)break;a+=1}return a>=4}return o.a.createElement("div",{id:"game-root"},o.a.createElement(l.a,{onCreated:function(e){var t=e.gl;return t.shadowMap.enabled=!0,t.shadowMap.type=u.PCFSoftShadowMap},className:B||1!==W?"active":"",id:"canvas-container"},o.a.createElement(E,{isActive:a}),o.a.createElement("ambientLight",{intensity:.5}),o.a.createElement("spotLight",{intensity:1.5,position:[20,5,10],angle:.2,penumbra:1,castShadow:!0}),o.a.createElement(h,{setActive:i,active:a,isMoving:f,setIsMoving:m,counters:w,setCounter:x,player:g,activeCol:I,setActiveCol:P}),o.a.createElement(j,null),o.a.createElement("fog",{attach:"fog",args:["#4cd4ff",0,8]})),o.a.createElement(y,{setActive:i,active:a,isMoving:f,setIsMoving:m,placeCounter:function(){w[k[0]][w[k[0]].length]=k[1],k.push(w[k[0]].length-1),function(e){var t=[e[0],e[2]],a=e[1],n=[q(t,a),D(t,a),H(t,a),F(t,a)];console.log(n)}(k),p(-1*g),x([I,-1*g])},modal:B,setModal:Y,gameState:W,setGameState:function(e){0===e&&M([[],[],[],[],[],[],[]]),J(e)}}))};var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(){c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))};window.cordova?document.addEventListener("deviceready",M,!1):M()}},[[28,1,2]]]);
//# sourceMappingURL=main.1ab18471.chunk.js.map