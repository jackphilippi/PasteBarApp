import{g as s,c as G}from"./main-BSh5dXDA.js";function M(S,u){for(var n=0;n<u.length;n++){const T=u[n];if(typeof T!="string"&&!Array.isArray(T)){for(const r in T)if(r!=="default"&&!(r in S)){const E=Object.getOwnPropertyDescriptor(T,r);E&&Object.defineProperty(S,r,E.get?E:{enumerable:!0,get:()=>T[r]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var C={exports:{}};(function(S,u){(function(n){n(G)})(function(n){n.defineMode("pig",function(T,r){var E=r.keywords,i=r.builtins,R=r.types,o=r.multiLineStrings,N=/[*+\-%<>=&?:\/!|]/;function A(e,O,t){return O.tokenize=t,t(e,O)}function f(e,O){for(var t=!1,I;I=e.next();){if(I=="/"&&t){O.tokenize=L;break}t=I=="*"}return"comment"}function a(e){return function(O,t){for(var I=!1,l,p=!1;(l=O.next())!=null;){if(l==e&&!I){p=!0;break}I=!I&&l=="\\"}return(p||!(I||o))&&(t.tokenize=L),"error"}}function L(e,O){var t=e.next();return t=='"'||t=="'"?A(e,O,a(t)):/[\[\]{}\(\),;\.]/.test(t)?null:/\d/.test(t)?(e.eatWhile(/[\w\.]/),"number"):t=="/"?e.eat("*")?A(e,O,f):(e.eatWhile(N),"operator"):t=="-"?e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(N),"operator"):N.test(t)?(e.eatWhile(N),"operator"):(e.eatWhile(/[\w\$_]/),E&&E.propertyIsEnumerable(e.current().toUpperCase())&&!e.eat(")")&&!e.eat(".")?"keyword":i&&i.propertyIsEnumerable(e.current().toUpperCase())?"variable-2":R&&R.propertyIsEnumerable(e.current().toUpperCase())?"variable-3":"variable")}return{startState:function(){return{tokenize:L,startOfLine:!0}},token:function(e,O){if(e.eatSpace())return null;var t=O.tokenize(e,O);return t}}}),function(){function T(R){for(var o={},N=R.split(" "),A=0;A<N.length;++A)o[N[A]]=!0;return o}var r="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",E="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",i="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";n.defineMIME("text/x-pig",{name:"pig",builtins:T(r),keywords:T(E),types:T(i)}),n.registerHelper("hintWords","pig",(r+i+E).split(" "))}()})})();var U=C.exports;const D=s(U),B=M({__proto__:null,default:D},[U]);export{B as p};
