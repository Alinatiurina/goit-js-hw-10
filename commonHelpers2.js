import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const c=document.querySelector("button"),r=document.querySelector('[name="delay"]'),s=document.querySelector('[value="fulfilled"]'),n=document.querySelector('[value="rejected"]');c.addEventListener("click",l);function l(){event.preventDefault();const t=parseInt(r.value.trim());new Promise((e,i)=>{setTimeout(()=>{s.checked?e(`✅ Fulfilled promise in ${t} ms`):n.checked&&i(`❌ Rejected promise in ${t} ms`)},t)}).then(e=>{o.success({title:"",position:"topRight",message:e})}).catch(e=>{o.error({title:"",position:"topRight",message:e})})}
//# sourceMappingURL=commonHelpers2.js.map
