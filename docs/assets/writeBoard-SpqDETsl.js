import"./tailwind-LUp5vfds.js";import{g as r,a as y,C as k}from"./delay-g6vF19wW.js";import{i as s}from"./insert-yGrdL5nD.js";import{g as B}from"./storage-eNv634Ip.js";import{a as A}from"./formattedDate-dxVwGQ40.js";import{g as x}from"./index-35H_NU9g.js";function E(t){const e=new Date,[n,o]=t.split(":");e.setHours(n),e.setMinutes(o);const c={hour:"numeric",minute:"numeric",hour12:!0};return e.toLocaleString("ko-KR",c)}const D=r(".writeBoardSecond-next-button"),I=r(".writeBoard-back-button"),w=r(".writeBoard-input"),T=y(".writeBoardCategory"),f=document.querySelector(".writeBoardSecond-title"),N=y(".writeBoardSecond-people-button"),P=r(".writeBoardSecond-location-button"),V=r(".writeBoard-category"),M=r(".selectGenderMenuContainer"),v=new k("https://popcorns.pockethost.io");async function q(t){const[e,n,o,c,a,i,l,u,d,p,g]=t,m=o.replace(/[^a-zA-Z가-힣0-9\s]/g,"").trim(),b=i?i.replace(/[^a-zA-Z가-힣0-9\s]/g,"").trim():"누구나",L=d.replace(/[^a-zA-Z가-힣0-9\s]/g,"").trim(),S={SR_location:e,activity:n,category:m,date:c,meetingLocation:a,gender:b,approve:l,headcount:u,age:L,title:p,time:g};return(await v.collection("community").create(S)).id}async function G(t){const e=r(".warningText"),n=document.querySelectorAll(".w-screen"),o=w.value,c=document.querySelector(".w-screen:not(.hidden)"),a=Array.from(n).indexOf(c),i="date",l="time";t.preventDefault();const u=await U();console.log("value    :",u);const d=await O(u);if(console.log("nowUserId   :",d),!C(o,e))return;const g=[d,F(),j(),h(i),R(),H(),z(),$(),Z(),K(f,o),h(l)];if(n.length>=2){if(a>=0&&a<n.length-1){const m=n[a+1];c.classList.add("hidden"),m.classList.remove("hidden")}a===2&&W(g)}}async function O(t){const n=await B("phoneNumber");return t.find(c=>(c.phoneNumber,c.id)).id}async function U(){return await v.collection("users").getFullList()}function z(){return document.getElementById("myCheckbox").checked}function Z(){return document.getElementById("ageAll").textContent}function H(){const t=Array.from(y(".selectGenderbuttonMenu"));let e="";return t.forEach(n=>{n.classList.contains("isClicked")&&(e=n.textContent)}),e}function h(t){if(t==="date"){const n=document.getElementById("return-date").value;return A(n)}if(t==="time"){const n=document.getElementById("timeInput").value;return E(n)}}function R(){return r(".locationValue").textContent}function $(){const e=r(".people").textContent;return parseInt(e)}function j(){return r(".selectCategory").textContent}function F(){return document.getElementById("board-content").value}function C(t,e){if(!t&&!e.textContent){x.to(".warningText",{x:-10,duration:.1,repeat:3,yoyo:!0}),s(".warningText","제목을 입력해주세요.");return}if(!t){x.to(".warningText",{x:-10,duration:.1,repeat:3,yoyo:!0});return}return t&&(e.textContent=""),!0}function K(t,e){return t&&(t.textContent="",s(".writeBoardSecond-title",e)),e}async function W(t){const e=await q(t);setTimeout(()=>{window.location.href=`/src/pages/boardContent/index.html#${e}`},"300")}function _(){const t=document.querySelectorAll(".w-screen"),e=document.querySelector(".w-screen:not(.hidden)"),n=Array.from(t).indexOf(e),o=r(".warningText"),c=w.value;if(n<1){window.history.back();return}if(n>0){f&&f.textContent&&C(c,o);const a=t[n-1];e.classList.add("hidden"),a.classList.remove("hidden");return}}function J(){const t=this.classList.toggle("isClicked"),e=this.querySelector(".selectCategoryNav");t?e.classList.remove("group-focus-within:visible","group-focus-within:opacity-100","group-focus-within:translate-y-1"):e.classList.add("group-focus-within:visible","group-focus-within:opacity-100","group-focus-within:translate-y-1")}function Q(){const t=r(".selectCategory");t.textContent&&(t.textContent=""),s(".selectCategory",this.textContent)}function X(){new daum.Postcode({oncomplete:function(t){const e=r(".locationValue");e&&(e.textContent="",s(".locationValue",t.address))}}).open()}function Y(t){const e=t.target.classList.toggle("isClicked"),n=r(".genderValue");Array.from(this.children).forEach(o=>{o!==t.target&&(o.classList.remove("isClicked"),o.classList.remove("bg-primary"),o.classList.remove("text-background"))}),e?(t.target.classList.add("bg-primary"),t.target.classList.add("text-background")):(t.target.classList.remove("bg-primary"),t.target.classList.remove("text-background")),n.textContent="",s(".genderValue",t.target.textContent)}N.forEach(t=>{t.addEventListener("click",handleCategorySecondPagePeople)});T.forEach(t=>{t.addEventListener("click",Q)});D.addEventListener("click",G);I.addEventListener("click",_);P.addEventListener("click",X);M.addEventListener("click",Y);V.addEventListener("click",J);
