import{c as m}from"./index-0CR0LT7b.js";var g={exports:{}},S;function L(){return S||(S=1,function(s,D){(function(c){c(m)})(function(c){c.multiplexingMode=function(o){var A=Array.prototype.slice.call(arguments,1);function u(i,n,l,e){if(typeof n=="string"){var p=i.indexOf(n,l);return e&&p>-1?p+n.length:p}var v=n.exec(l?i.slice(l):i);return v?v.index+l+(e?v[0].length:0):-1}return{startState:function(){return{outer:c.startState(o),innerActive:null,inner:null,startingInner:!1}},copyState:function(i){return{outer:c.copyState(o,i.outer),innerActive:i.innerActive,inner:i.innerActive&&c.copyState(i.innerActive.mode,i.inner),startingInner:i.startingInner}},token:function(i,n){if(n.innerActive){var r=n.innerActive,e=i.string;if(!r.close&&i.sol())return n.innerActive=n.inner=null,this.token(i,n);var f=r.close&&!n.startingInner?u(e,r.close,i.pos,r.parseDelimiters):-1;if(f==i.pos&&!r.parseDelimiters)return i.match(r.close),n.innerActive=n.inner=null,r.delimStyle&&r.delimStyle+" "+r.delimStyle+"-close";f>-1&&(i.string=e.slice(0,f));var t=r.mode.token(i,n.inner);return f>-1?i.string=e:i.pos>i.start&&(n.startingInner=!1),f==i.pos&&r.parseDelimiters&&(n.innerActive=n.inner=null),r.innerStyle&&(t?t=t+" "+r.innerStyle:t=r.innerStyle),t}else{for(var l=1/0,e=i.string,p=0;p<A.length;++p){var v=A[p],f=u(e,v.open,i.pos);if(f==i.pos){v.parseDelimiters||i.match(v.open),n.startingInner=!!v.parseDelimiters,n.innerActive=v;var y=0;if(o.indent){var d=o.indent(n.outer,"","");d!==c.Pass&&(y=d)}return n.inner=c.startState(v.mode,y),v.delimStyle&&v.delimStyle+" "+v.delimStyle+"-open"}else f!=-1&&f<l&&(l=f)}l!=1/0&&(i.string=e.slice(0,l));var x=o.token(i,n.outer);return l!=1/0&&(i.string=e),x}},indent:function(i,n,l){var e=i.innerActive?i.innerActive.mode:o;return e.indent?e.indent(i.innerActive?i.inner:i.outer,n,l):c.Pass},blankLine:function(i){var n=i.innerActive?i.innerActive.mode:o;if(n.blankLine&&n.blankLine(i.innerActive?i.inner:i.outer),i.innerActive)i.innerActive.close==="\n"&&(i.innerActive=i.inner=null);else for(var l=0;l<A.length;++l){var e=A[l];e.open==="\n"&&(i.innerActive=e,i.inner=c.startState(e.mode,n.indent?n.indent(i.outer,"",""):0))}},electricChars:o.electricChars,innerMode:function(i){return i.inner?{state:i.inner,mode:i.innerActive.mode}:{state:i.outer,mode:o}}}}})}()),g.exports}export{L as r};
