import{g as b,c as p}from"./main-BSh5dXDA.js";function k(t,u){for(var r=0;r<u.length;r++){const o=u[r];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in t)){const c=Object.getOwnPropertyDescriptor(o,l);c&&Object.defineProperty(t,l,c.get?c:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}};(function(t,u){(function(r){r(p)})(function(r){r.defineMode("jinja2",function(){var o=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","do","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","set","raw","endraw","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","call","endcall","macro","endmacro","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","without","context","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","pluralize","autoescape","endautoescape"],l=/^[+\-*&%=<>!?|~^]/,c=/^[:\[\(\{]/,f=["true","false"],a=/^(\d[+\-\*\/])?\d+(\.\d+)?/;o=new RegExp("(("+o.join(")|(")+"))\\b"),f=new RegExp("(("+f.join(")|(")+"))\\b");function d(e,n){var i=e.peek();if(n.incomment)return e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(n.intag){if(n.operator){if(n.operator=!1,e.match(f))return"atom";if(e.match(a))return"number"}if(n.sign){if(n.sign=!1,e.match(f))return"atom";if(e.match(a))return"number"}if(n.instring)return i==n.instring&&(n.instring=!1),e.next(),"string";if(i=="'"||i=='"')return n.instring=i,e.next(),"string";if(n.inbraces>0&&i==")")e.next(),n.inbraces--;else if(i=="(")e.next(),n.inbraces++;else if(n.inbrackets>0&&i=="]")e.next(),n.inbrackets--;else if(i=="[")e.next(),n.inbrackets++;else{if(!n.lineTag&&(e.match(n.intag+"}")||e.eat("-")&&e.match(n.intag+"}")))return n.intag=!1,"tag";if(e.match(l))return n.operator=!0,"operator";if(e.match(c))n.sign=!0;else{if(e.column()==1&&n.lineTag&&e.match(o))return"keyword";if(e.eat(" ")||e.sol()){if(e.match(o))return"keyword";if(e.match(f))return"atom";if(e.match(a))return"number";e.sol()&&e.next()}else e.next()}}return"variable"}else if(e.eat("{")){if(e.eat("#"))return n.incomment=!0,e.skipTo("#}")?(e.eatWhile(/\#|}/),n.incomment=!1):e.skipToEnd(),"comment";if(i=e.eat(/\{|%/))return n.intag=i,n.inbraces=0,n.inbrackets=0,i=="{"&&(n.intag="}"),e.eat("-"),"tag"}else if(e.eat("#")){if(e.peek()=="#")return e.skipToEnd(),"comment";if(!e.eol())return n.intag=!0,n.lineTag=!0,n.inbraces=0,n.inbrackets=0,"tag"}e.next()}return{startState:function(){return{tokenize:d,inbrackets:0,inbraces:0}},token:function(e,n){var i=n.tokenize(e,n);return e.eol()&&n.lineTag&&!n.instring&&n.inbraces==0&&n.inbrackets==0&&(n.intag=!1,n.lineTag=!1),i},blockCommentStart:"{#",blockCommentEnd:"#}",lineComment:"##"}}),r.defineMIME("text/jinja2","jinja2")})})();var g=s.exports;const h=b(g),x=k({__proto__:null,default:h},[g]);export{x as j};
