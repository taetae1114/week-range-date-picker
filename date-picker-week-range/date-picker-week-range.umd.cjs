(function(b,M){typeof exports=="object"&&typeof module<"u"?M(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],M):(b=typeof globalThis<"u"?globalThis:b||self,M(b["date-picker-week-range"]={},b.Vue))})(this,function(b,M){"use strict";var ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q={exports:{}};(function($,O){(function(m,c){$.exports=c()})(ee,function(){var m=1e3,c=6e4,D=36e5,y="millisecond",_="second",f="minute",w="hour",C="day",A="week",S="month",R="quarter",T="year",j="date",U="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},B=function(r,t,e){var a=String(r);return!a||a.length>=t?r:""+Array(t+1-a.length).join(e)+r},X={s:B,z:function(r){var t=-r.utcOffset(),e=Math.abs(t),a=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+B(a,2,"0")+":"+B(n,2,"0")},m:function r(t,e){if(t.date()<e.date())return-r(e,t);var a=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(a,S),o=e-n<0,i=t.clone().add(a+(o?-1:1),S);return+(-(a+(e-n)/(o?n-i:i-n))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:S,y:T,w:A,d:C,D:j,h:w,m:f,s:_,ms:y,Q:R}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},E="en",V={};V[E]=x;var J=function(r){return r instanceof k},s=function r(t,e,a){var n;if(!t)return E;if(typeof t=="string"){var o=t.toLowerCase();V[o]&&(n=o),e&&(V[o]=e,n=o);var i=t.split("-");if(!n&&i.length>1)return r(i[0])}else{var d=t.name;V[d]=t,n=d}return!a&&n&&(E=n),n||!a&&E},l=function(r,t){if(J(r))return r.clone();var e=typeof t=="object"?t:{};return e.date=r,e.args=arguments,new k(e)},u=X;u.l=s,u.i=J,u.w=function(r,t){return l(r,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function r(e){this.$L=s(e.locale,null,!0),this.parse(e)}var t=r.prototype;return t.parse=function(e){this.$d=function(a){var n=a.date,o=a.utc;if(n===null)return new Date(NaN);if(u.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var i=n.match(q);if(i){var d=i[2]-1||0,g=(i[7]||"0").substring(0,3);return o?new Date(Date.UTC(i[1],d,i[3]||1,i[4]||0,i[5]||0,i[6]||0,g)):new Date(i[1],d,i[3]||1,i[4]||0,i[5]||0,i[6]||0,g)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return u},t.isValid=function(){return this.$d.toString()!==U},t.isSame=function(e,a){var n=l(e);return this.startOf(a)<=n&&n<=this.endOf(a)},t.isAfter=function(e,a){return l(e)<this.startOf(a)},t.isBefore=function(e,a){return this.endOf(a)<l(e)},t.$g=function(e,a,n){return u.u(e)?this[a]:this.set(n,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,a){var n=this,o=!!u.u(a)||a,i=u.p(e),d=function(I,p){var W=u.w(n.$u?Date.UTC(n.$y,p,I):new Date(n.$y,p,I),n);return o?W:W.endOf(C)},g=function(I,p){return u.w(n.toDate()[I].apply(n.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(p)),n)},h=this.$W,v=this.$M,P=this.$D,H="set"+(this.$u?"UTC":"");switch(i){case T:return o?d(1,0):d(31,11);case S:return o?d(1,v):d(0,v+1);case A:var N=this.$locale().weekStart||0,F=(h<N?h+7:h)-N;return d(o?P-F:P+(6-F),v);case C:case j:return g(H+"Hours",0);case w:return g(H+"Minutes",1);case f:return g(H+"Seconds",2);case _:return g(H+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,a){var n,o=u.p(e),i="set"+(this.$u?"UTC":""),d=(n={},n[C]=i+"Date",n[j]=i+"Date",n[S]=i+"Month",n[T]=i+"FullYear",n[w]=i+"Hours",n[f]=i+"Minutes",n[_]=i+"Seconds",n[y]=i+"Milliseconds",n)[o],g=o===C?this.$D+(a-this.$W):a;if(o===S||o===T){var h=this.clone().set(j,1);h.$d[d](g),h.init(),this.$d=h.set(j,Math.min(this.$D,h.daysInMonth())).$d}else d&&this.$d[d](g);return this.init(),this},t.set=function(e,a){return this.clone().$set(e,a)},t.get=function(e){return this[u.p(e)]()},t.add=function(e,a){var n,o=this;e=Number(e);var i=u.p(a),d=function(v){var P=l(o);return u.w(P.date(P.date()+Math.round(v*e)),o)};if(i===S)return this.set(S,this.$M+e);if(i===T)return this.set(T,this.$y+e);if(i===C)return d(1);if(i===A)return d(7);var g=(n={},n[f]=c,n[w]=D,n[_]=m,n)[i]||1,h=this.$d.getTime()+e*g;return u.w(h,this)},t.subtract=function(e,a){return this.add(-1*e,a)},t.format=function(e){var a=this,n=this.$locale();if(!this.isValid())return n.invalidDate||U;var o=e||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),d=this.$H,g=this.$m,h=this.$M,v=n.weekdays,P=n.months,H=function(p,W,G,Z){return p&&(p[W]||p(a,o))||G[W].slice(0,Z)},N=function(p){return u.s(d%12||12,p,"0")},F=n.meridiem||function(p,W,G){var Z=p<12?"AM":"PM";return G?Z.toLowerCase():Z},I={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:u.s(h+1,2,"0"),MMM:H(n.monthsShort,h,P,3),MMMM:H(P,h),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:H(n.weekdaysMin,this.$W,v,2),ddd:H(n.weekdaysShort,this.$W,v,3),dddd:v[this.$W],H:String(d),HH:u.s(d,2,"0"),h:N(1),hh:N(2),a:F(d,g,!0),A:F(d,g,!1),m:String(g),mm:u.s(g,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:i};return o.replace(z,function(p,W){return W||I[p]||i.replace(":","")})},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,a,n){var o,i=u.p(a),d=l(e),g=(d.utcOffset()-this.utcOffset())*c,h=this-d,v=u.m(this,d);return v=(o={},o[T]=v/12,o[S]=v,o[R]=v/3,o[A]=(h-g)/6048e5,o[C]=(h-g)/864e5,o[w]=h/D,o[f]=h/c,o[_]=h/m,o)[i]||h,n?v:u.a(v)},t.daysInMonth=function(){return this.endOf(S).$D},t.$locale=function(){return V[this.$L]},t.locale=function(e,a){if(!e)return this.$L;var n=this.clone(),o=s(e,a,!0);return o&&(n.$L=o),n},t.clone=function(){return u.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},r}(),Y=k.prototype;return l.prototype=Y,[["$ms",y],["$s",_],["$m",f],["$H",w],["$W",C],["$M",S],["$y",T],["$D",j]].forEach(function(r){Y[r[1]]=function(t){return this.$g(t,r[0],r[1])}}),l.extend=function(r,t){return r.$i||(r(t,k,l),r.$i=!0),l},l.locale=s,l.isDayjs=J,l.unix=function(r){return l(1e3*r)},l.en=V[E],l.Ls=V,l.p={},l})})(Q);const L=Q.exports,ie="",te=($,O)=>{const m=$.__vccOpts||$;for(const[c,D]of O)m[c]=D;return m},ne={props:{rangeSeparator:{type:String},startPlaceholder:{type:String},endPlaceholder:{type:String},format:{type:String},modelValue:{type:Array},unlinkPanels:{type:Boolean},shortcuts:{type:Array}},setup($,O){let m=M.ref("");const c=L(new Date).format("YYYY/MM/DD");let D,y,_,f,w=!1;const C=$.rangeSeparator||"To",A=$.startPlaceholder||"start week",S=$.endPlaceholder||"end week",R=$.format||"YYYY [Week] ww",T=$.unlinkPanels||!1;m.value=$.modelValue.value;let j=[];if($.shortcuts){let s=$.shortcuts.length;const l=[];for(let u=0;u<s;u++){let k=$.shortcuts[u].text,Y=$.shortcuts[u].value();const r=new Date(Y[1]),t=new Date(Y[0]);l.push({text:k,value:()=>{let e=t.getDay(),a=r.getDay();t.setTime(t.getTime()-e*3600*24*1e3-t.getHours()*3600*1e3-t.getMinutes()*60*1e3-t.getSeconds()*1e3),r.setTime(r.getTime()+(6-a*3600*24*1e3)-r.getHours()*3600*1e3-r.getMinutes()*60*1e3-r.getSeconds()*1e3),m.value=[t,r],D=L(t),y=L(r),O.emit("update:modelValue",m.value)}})}j=l}M.watch(m.value,(s,l)=>{},{deep:!0});const U=s=>{let l="YYYY/MM/DD";return s.dayjs.format(l)===c},q=()=>{let s=_.column;D.$D;let l,u=m.value[0],k=m.value[1];if(s!==0&&(u=L(m.value[0]-s*24*3600*1e3)),f!==null&&y!==null&&(l=f.column,y.$D,l!==6)){let Y=6-l,r=new Date(m.value[1]).getTime();k=L(r+Y*24*3600*1e3)}m.value=[new Date(u),new Date(k)],O.emit("update:modelValue",m.value)},z=s=>{s=new Date(s);let l=new Date(s.getFullYear(),0,1),u=s.getDay()+1,k=l.getDay()+1,Y=Math.round((s.getTime()-l.getTime()+(k-u)*(24*60*60*1e3))/864e5);return Math.ceil(Y/7)+1>52?s.getFullYear()+1+"\u7B2C1\u5468":s.getFullYear()+" \u7B2C"+(Math.ceil(Y/7)+1)+"\u5468"},x=(s,l)=>z(s)===z(l);return{value:m,separator:C,startPlaceHolder:A,endPlaceHolder:S,format:R,unlinkPanels:T,shortcuts:j,handleChange:q,isToday:U,cellClick:(s,l,u)=>{w===!1&&(D=s.dayjs,_=s,y=null,f=null),w&&(y=s.dayjs,f=s),w=!w},isEnded:s=>x(s.dayjs,y)&&s.column===6&&D<y&&y!==null?!0:!!(x(s.dayjs,D)&&s.column===6&&y!==null&&D>=y),isStarted:s=>w&&x(s.dayjs,D)&&s.column===0||x(s.dayjs,D)&&s.column===0&&D<y?!0:!!(x(s.dayjs,y)&&s.column===0&&D>=y),isInRange:s=>!!(x(s.dayjs,y)||x(s.dayjs,D)||s.inRange===!0),calendarChange:()=>{}}}},re=["onClick"];function ae($,O,m,c,D,y){const _=M.resolveComponent("el-date-picker");return M.openBlock(),M.createElementBlock("div",null,[M.createVNode(_,{modelValue:c.value,"onUpdate:modelValue":O[0]||(O[0]=f=>c.value=f),type:"daterange",format:c.format,"range-separator":c.separator,"start-placeholder":c.startPlaceHolder,"end-placeholder":c.endPlaceHolder,"unlink-panels":c.unlinkPanels,onChange:c.handleChange,onCalendarChange:c.calendarChange,shortcuts:c.shortcuts},{default:M.withCtx(f=>[M.createElementVNode("div",{class:M.normalizeClass(["cell",{inrange:c.isInRange(f)&&!c.isEnded(f)&&!c.isStarted(f),ended:c.isEnded(f),started:c.isStarted(f)}]),onClick:w=>c.cellClick(f,f.column,f.row)},[M.createElementVNode("span",{class:M.normalizeClass(["text",{today:c.isToday(f)}])},M.toDisplayString(f.text),3)],10,re)]),_:1},8,["modelValue","format","range-separator","start-placeholder","end-placeholder","unlink-panels","onChange","onCalendarChange","shortcuts"])])}const K=te(ne,[["render",ae]]),se={install:($,O)=>{console.log("date-picker-week-range\u63D2\u4EF6\u5DF2\u5B89\u88C5\u2764 "),$.component("week-range",K)}};b.WeekRange=K,b.default=se,Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});