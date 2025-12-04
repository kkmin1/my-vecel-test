(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("app").innerHTML=`
  <div class="container">
    <h1>안녕하세요! </h1>
    <h2>저는 <strong>김민수</strong>입니다</h2>
    <p>프론트엔드 개발자 지망생이에요!</p>
    <div class="links">
      <a href="https://github.com" target="_blank">깃허브</a>
      <a href="https://instagram.com" target="_blank">인스타</a>
      <a href="mailto:abc@gmail.com">이메일</a>
    </div>
    <p class="small">2025년 Vite로 만든 첫 사이트!</p>
  </div>
`;
