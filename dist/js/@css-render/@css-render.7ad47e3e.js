import{i as e}from"../@vue/@vue.a4e29d0d.js";function t(e){let t,n=".",r="__",o="--";if(e){let t=e.blockPrefix;t&&(n=t),t=e.elementPrefix,t&&(r=t),t=e.modifierPrefix,t&&(o=t)}const s={install(e){t=e.c;const n=e.context;n.bem={},n.bem.b=null,n.bem.els=null}};return Object.assign(s,{cB:(...e)=>t(function(e){let t,r;return{before(e){t=e.bem.b,r=e.bem.els,e.bem.els=null},after(e){e.bem.b=t,e.bem.els=r},$:({context:t,props:r})=>(e="string"==typeof e?e:e({context:t,props:r}),t.bem.b=e,`${(null==r?void 0:r.bPrefix)||n}${t.bem.b}`)}}(e[0]),e[1],e[2]),cE:(...e)=>t(function(e){let t;return{before(e){t=e.bem.els},after(e){e.bem.els=t},$:({context:t,props:o})=>(e="string"==typeof e?e:e({context:t,props:o}),t.bem.els=e.split(",").map((e=>e.trim())),t.bem.els.map((e=>`${(null==o?void 0:o.bPrefix)||n}${t.bem.b}${r}${e}`)).join(", "))}}(e[0]),e[1],e[2]),cM:(...e)=>{return t((s=e[0],{$({context:e,props:t}){const l=(s="string"==typeof s?s:s({context:e,props:t})).split(",").map((e=>e.trim()));function i(s){return l.map((l=>`&${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${void 0!==s?`${r}${s}`:""}${o}${l}`)).join(", ")}const u=e.bem.els;return null!==u?i(u[0]):i()}}),e[1],e[2]);var s},cNotM:(...e)=>{return t((s=e[0],{$({context:e,props:t}){s="string"==typeof s?s:s({context:e,props:t});const l=e.bem.els;return`&:not(${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${null!==l&&l.length>0?`${r}${l[0]}`:""}${o}${s})`}}),e[1],e[2]);var s}}),s}const n=Symbol("@css-render/vue3-ssr");function r(t,r){const o=e(n,null);if(null===o)return;const{styles:s,ids:l}=o;l.has(t)||null!==s&&(l.add(t),s.push(function(e,t){return`<style cssr-id="${e}">\n${t}\n</style>`}(t,r)))}const o="undefined"!=typeof document;function s(){if(o)return;const t=e(n,null);return null!==t?{adapter:r,context:t}:void 0}export{t as p,s as u};
