import{g,c as d}from"./main-BSh5dXDA.js";function k(f,u){for(var t=0;t<u.length;t++){const o=u[t];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in f)){const c=Object.getOwnPropertyDescriptor(o,i);c&&Object.defineProperty(f,i,c.get?c:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var b={exports:{}};(function(f,u){(function(t){t(d)})(function(t){t.defineMode("cmake",function(){var o=/({)?[a-zA-Z0-9_]+(})?/;function i(e,r){for(var n,a,l=!1;!e.eol()&&(n=e.next())!=r.pending;){if(n==="$"&&a!="\\"&&r.pending=='"'){l=!0;break}a=n}return l&&e.backUp(1),n==r.pending?r.continueString=!1:r.continueString=!0,"string"}function c(e,r){var n=e.next();return n==="$"?e.match(o)?"variable-2":"variable":r.continueString?(e.backUp(1),i(e,r)):e.match(/(\s+)?\w+\(/)||e.match(/(\s+)?\w+\ \(/)?(e.backUp(1),"def"):n=="#"?(e.skipToEnd(),"comment"):n=="'"||n=='"'?(r.pending=n,i(e,r)):n=="("||n==")"?"bracket":n.match(/[0-9]/)?"number":(e.eatWhile(/[\w-]/),null)}return{startState:function(){var e={};return e.inDefinition=!1,e.inInclude=!1,e.continueString=!1,e.pending=!1,e},token:function(e,r){return e.eatSpace()?null:c(e,r)}}}),t.defineMIME("text/x-cmake","cmake")})})();var p=b.exports;const s=g(p),x=k({__proto__:null,default:s},[p]);export{x as c};
