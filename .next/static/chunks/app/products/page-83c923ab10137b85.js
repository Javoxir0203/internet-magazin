(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286,931],{2538:function(e,t,r){Promise.resolve().then(r.bind(r,1552))},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return i}});let n=r(1024),a=r(2301),o=r(7873),s=r(3222),l=n._(r(5033)),i=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=s.Image},784:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(6691),o=r.n(a),s=r(2265);t.default=e=>{let{product:t,fill:r}=e,[a,l]=(0,s.useState)(!0);return(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(o(),{src:t.image,alt:t.title,fill:!0,className:"object-contain duration-700 ease-in-out group-hover:opacity-75 ".concat(a?"scale-110 blur-2xl grayscale":"scale-100 blur-0 grayscale-0","}"),onLoadingComplete:()=>l(!1)}):(0,n.jsx)(o(),{src:t.image,alt:t.title,width:400,height:1e3,className:"object-contain duration-700 ease-in-out group-hover:opacity-75 ".concat(a?"scale-110 blur-2xl grayscale":"scale-100 blur-0 grayscale-0","}"),onLoadingComplete:()=>l(!1)})})}},1552:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(1396),o=r.n(a),s=r(784);t.default=e=>{let{product:t}=e;return console.log(t),(0,n.jsxs)(o(),{href:"/product/".concat(t.id),className:"h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border",children:[(0,n.jsx)("div",{className:"relative max-h-80 flex-1",children:(0,n.jsx)(s.default,{product:t,fill:!0})}),(0,n.jsx)("h3",{className:"tracking-widest text-indigo-500 text-xs font-medium title-font",children:t.category}),(0,n.jsxs)("div",{className:"font-semibold flex items-center justify-between mt-4 mb-1",children:[(0,n.jsx)("p",{className:"w-44 truncate",children:t.title}),(0,n.jsxs)("p",{children:["$",t.price]})]}),(0,n.jsx)("p",{className:"leading-relaxed text-base line-clamp-2",children:t.description})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)},1396:function(e,t,r){e.exports=r(6685)}},function(e){e.O(0,[222,685,971,596,744],function(){return e(e.s=2538)}),_N_E=e.O()}]);