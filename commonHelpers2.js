import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-a71e76b7.js";const o={radioBtn:document.querySelectorAll('input[type="radio"]'),form:document.querySelector(".form"),input:document.querySelector('input[type="number"]')},i=e=>{r.show({message:`❌ Rejected promise in ${e}ms`,backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topCenter",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},n=e=>{r.show({message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"green",messageColor:"white",maxWidth:300,position:"topCenter",timeout:2e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},a=e=>{e.preventDefault();const t=o.input.value;o.radioBtn.forEach(s=>{s.checked&&(s.value==="fulfilled"&&Promise.resolve("resolve").then(setTimeout(()=>{n(t)},t)),s.value==="rejected"&&Promise.reject("reject").catch(setTimeout(()=>{i(t)},t)))}),o.form.reset()};o.form.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map