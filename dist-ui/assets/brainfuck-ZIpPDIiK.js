import{g as u,c as l}from"./index-CyNWEug3.js";function a(f,i){for(var t=0;t<i.length;t++){const o=i[t];if(typeof o!="string"&&!Array.isArray(o)){for(const e in o)if(e!=="default"&&!(e in f)){const n=Object.getOwnPropertyDescriptor(o,e);n&&Object.defineProperty(f,e,n.get?n:{enumerable:!0,get:()=>o[e]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}};(function(f,i){(function(t){t(l)})(function(t){var o="><+-.,[]".split("");t.defineMode("brainfuck",function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,n){if(e.eatSpace())return null;e.sol()&&(n.commentLine=!1);var r=e.next().toString();if(o.indexOf(r)!==-1){if(n.commentLine===!0)return e.eol()&&(n.commentLine=!1),"comment";if(r==="]"||r==="[")return r==="["?n.left++:n.right++,"bracket";if(r==="+"||r==="-")return"keyword";if(r==="<"||r===">")return"atom";if(r==="."||r===",")return"def"}else return n.commentLine=!0,e.eol()&&(n.commentLine=!1),"comment";e.eol()&&(n.commentLine=!1)}}}),t.defineMIME("text/x-brainfuck","brainfuck")})})();var c=m.exports;const s=u(c),b=a({__proto__:null,default:s},[c]);export{b};
