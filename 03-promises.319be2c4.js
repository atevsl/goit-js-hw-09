function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("eWCmQ");const u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),d=(document.querySelector('[name="step"]'),document.querySelector('[name="amount"]'));u.addEventListener("submit",(t=>{t.preventDefault();let o=Number(i.value),n=Number(i.value),r=Number(d.value);for(let t=1;t<=r;t+=1)a({position:t,delay:o}).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t))),o+=n}));const a=({position:e,delay:t})=>new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}));
//# sourceMappingURL=03-promises.319be2c4.js.map
