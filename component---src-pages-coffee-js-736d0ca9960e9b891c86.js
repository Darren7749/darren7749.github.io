/*! For license information please see component---src-pages-coffee-js-736d0ca9960e9b891c86.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[191],{42:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},5814:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(42),a=n.n(r),i=n(7294),o=n(5893);const s=["as","disabled"];function l({tagName:e,disabled:t,href:n,target:r,rel:a,role:i,onClick:o,tabIndex:s=0,type:l}){e||(e=null!=n||null!=r||null!=a?"a":"button");const u={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},u];const c=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==o||o(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}const u=i.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s);const[i,{tagName:u}]=l(Object.assign({tagName:n,disabled:r},a));return(0,o.jsx)(u,Object.assign({},a,i,{ref:t}))}));u.displayName="Button";var c=n(8398);const f=i.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:i,className:s,...u},f)=>{const d=(0,c.vE)(t,"btn"),[m,{tagName:p}]=l({tagName:e,...u}),v=p;return(0,o.jsx)(v,{...m,...u,ref:f,className:a()(s,d,i&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,u.href&&u.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},8398:function(e,t,n){"use strict";n.d(t,{pi:function(){return u},vE:function(){return l},zG:function(){return c}});var r=n(7294);n(5893);const a=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:s}=i;function l(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function u(){const{breakpoints:e}=(0,r.useContext)(i);return e}function c(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}},4904:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7294),a=n(5814);const i={borderRadius:"5%",width:"10rem"},o={width:"40rem",overflow:"hidden",background:"#0f0404",color:"#f0f0f0",marginBottom:"1rem",padding:"0.5rem"},s={marginLeft:"1rem"};function l(){let e=[],[t,n]=r.useState([]);return r.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/coffee/hot"),a=await t.json();for(let n=0;n<a.length;n++)console.log(a[n].title),e.push(r.createElement("div",{style:o},r.createElement("div",{style:{width:"11rem",float:"left"}}," ",r.createElement("img",{style:i,src:a[n].image})," "),r.createElement("div",{style:s},r.createElement("h3",null,a[n].title),a[n].description," ")));n(e)}),[]),r.createElement("div",{style:{margin:"1rem"}},r.createElement("h1",null,"Coffee"),r.createElement(a.Z,null,"CLICK ME"),r.createElement("main",null,t))}}}]);
//# sourceMappingURL=component---src-pages-coffee-js-736d0ca9960e9b891c86.js.map