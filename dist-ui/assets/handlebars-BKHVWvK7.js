import{g as m,c as l,b as g}from"./index-BNb4q2fC.js";import{r as p}from"./multiplex-CsXsC23D.js";function d(a,o){for(var e=0;e<o.length;e++){const r=o[e];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in a)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(a,o){(function(e){e(l,g(),p())})(function(e){e.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{\{/,push:"handlebars_raw",token:"tag"},{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars_raw:[{regex:/\}\}\}/,pop:!0,token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],meta:{blockCommentStart:"{{--",blockCommentEnd:"--}}"}}),e.defineMode("handlebars",function(r,t){var n=e.getMode(r,"handlebars-tags");return!t||!t.base?n:e.multiplexingMode(e.getMode(r,t.base),{open:"{{",close:/\}\}\}?/,mode:n,parseDelimiters:!0})}),e.defineMIME("text/x-handlebars-template","handlebars")})})();var s=u.exports;const c=m(s),i=d({__proto__:null,default:c},[s]);export{s as a,i as h};
