// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function i(r){return Math.abs(r)}var o,a=2146435072,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,c=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol:void 0,s="function"==typeof l?l.toStringTag:"",p=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,o;if(null==r)return u.call(r);t=r[s],o=s,n=null!=(i=r)&&c.call(i,o);try{r[s]=void 0}catch(n){return u.call(r)}return e=u.call(r),n?r[s]=t:delete r[s],e}:function(r){return u.call(r)},y="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(y&&t instanceof Uint32Array||"[object Uint32Array]"===p(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var w,h=o,g="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,F=w,N="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(N&&t instanceof Uint8Array||"[object Uint8Array]"===p(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var I,j=m,U="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===p(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k,O={uint16:I,uint8:j};(k=new O.uint16(1))[0]=4660;var H=52===new O.uint8(k.buffer)[0],T=!0===H?1:0,G=new F(1),V=new h(G.buffer);function W(r){return G[0]=r,V[T]}function L(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var $=-.16666666666666632;function M(r,n){var t,e,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===n?r+e*($+i*t):r-(i*(.5*n-e*t)-n-e*$)}var C,P=1048575,R="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,X="function"==typeof Float64Array?Float64Array:void 0;C=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),t=n,r=(R&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,q,z,B=!0===H?0:1,D=new C(1),J=new h(D.buffer),K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,rr="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var r,n,t;if("function"!=typeof Q)return!1;try{n=new Q([1,3.14,-3.14,NaN]),t=n,r=(K&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")},!0===H?(q=1,z=0):(q=0,z=1);var nr={HIGH:q,LOW:z},tr=new Y(1),er=new h(tr.buffer),ir=nr.HIGH,or=nr.LOW;function ar(r,n){return er[ir]=r,er[or]=n,tr[0]}var fr=Number.POSITIVE_INFINITY,ur=1023;function cr(r){return r===fr||r===e}var lr="function"==typeof Object.defineProperty?Object.defineProperty:null,sr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function vr(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+yr(i):yr(i)+r,e&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function hr(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!pr(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=vr(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=vr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===wr.call(r.specifier)?wr.call(t):dr.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function gr(r){return"string"==typeof r}var Ar=Math.abs,br=String.prototype.toLowerCase,mr=String.prototype.toUpperCase,Fr=String.prototype.replace,Nr=/e\+(\d)$/,Er=/e-(\d)$/,_r=/^(\d+)$/,Ir=/^(\d+)e/,jr=/\.0$/,Ur=/\.0*e/,Sr=/(\..*[^0])0*e/;function xr(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Ar(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Fr.call(t,Sr,"$1e"),t=Fr.call(t,Ur,"e"),t=Fr.call(t,jr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Fr.call(t,Nr,"e+0$1"),t=Fr.call(t,Er,"e-0$1"),r.alternate&&(t=Fr.call(t,_r,"$1."),t=Fr.call(t,Ir,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===mr.call(r.specifier)?mr.call(t):br.call(t)}function kr(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Or(r,n,t){var e=n-r.length;return e<0?r:r=t?r+kr(e):kr(e)+r}var Hr=String.fromCharCode,Tr=isNaN,Gr=Array.isArray;function Vr(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Wr(r){var n,t,e,i,o,a,f,u,c;if(!Gr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",f=1,u=0;u<r.length;u++)if(gr(e=r[u]))a+=e;else{if(n=void 0!==e.precision,!(e=Vr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,Tr(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,Tr(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=hr(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Tr(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Tr(o)?String(e.arg):Hr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=xr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=vr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Or(e.arg,e.width,e.padRight)),a+=e.arg||"",f+=1}return a}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Mr(r){var n,t,e,i;for(t=[],i=0,e=Lr.exec(r);e;)(n=r.slice(i,Lr.lastIndex-e[0].length)).length&&t.push(n),t.push($r(e)),i=Lr.lastIndex,e=Lr.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function Cr(r){return"string"==typeof r}function Pr(r){var n,t;if(!Cr(r))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[Mr(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return Wr.apply(null,n)}var Rr=Object.prototype,Zr=Rr.toString,Xr=Rr.__defineGetter__,Yr=Rr.__defineSetter__,qr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?sr:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Pr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Zr.call(t))throw new TypeError(Pr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(qr.call(r,n)||zr.call(r,n)?(e=r.__proto__,r.__proto__=Rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Xr&&Xr.call(r,n,t.get),a&&Yr&&Yr.call(r,n,t.set),r};function Dr(r,n,t){Br(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Jr,Kr,Qr,rn="function"==typeof Float64Array,nn="function"==typeof Float64Array?Float64Array:null,tn="function"==typeof Float64Array?Float64Array:void 0;Jr=function(){var r,n,t;if("function"!=typeof nn)return!1;try{n=new nn([1,3.14,-3.14,NaN]),t=n,r=(rn&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?tn:function(){throw new Error("not implemented")},!0===H?(Kr=1,Qr=0):(Kr=0,Qr=1);var en={HIGH:Kr,LOW:Qr},on=new Jr(1),an=new h(on.buffer),fn=en.HIGH,un=en.LOW;function cn(r,n,t,e){return on[0]=r,n[e]=an[fn],n[e+t]=an[un],n}function ln(r){return cn(r,[0,0],1,0)}Dr(ln,"assign",cn);var sn=[0,0];function pn(r,n){var t,e;return ln.assign(r,sn,1,0),t=sn[0],t&=2147483647,e=W(n),ar(t|=e&=2147483648,sn[1])}function yn(n,t,e,i){return r(n)||cr(n)?(t[i]=n,t[i+e]=0,t):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+e]=-52,t):(t[i]=n,t[i+e]=0,t)}Dr((function(r){return yn(r,[0,0],1,0)}),"assign",yn);var vn,dn,wn,hn="function"==typeof Float64Array,gn="function"==typeof Float64Array?Float64Array:null,An="function"==typeof Float64Array?Float64Array:void 0;vn=function(){var r,n,t;if("function"!=typeof gn)return!1;try{n=new gn([1,3.14,-3.14,NaN]),t=n,r=(hn&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?An:function(){throw new Error("not implemented")},!0===H?(dn=1,wn=0):(dn=0,wn=1);var bn={HIGH:dn,LOW:wn},mn=new vn(1),Fn=new h(mn.buffer),Nn=bn.HIGH,En=bn.LOW;function _n(r,n,t,e){return mn[0]=r,n[e]=Fn[Nn],n[e+t]=Fn[En],n}function In(r){return _n(r,[0,0],1,0)}Dr(In,"assign",_n);var jn=[0,0],Un=[0,0];function Sn(n,t){var i,o;return 0===t||0===n||r(n)||cr(n)?n:(yn(n,jn,1,0),t+=jn[1],t+=function(r){var n=W(r);return(n=(n&a)>>>20)-ur|0}(n=jn[0]),t<-1074?pn(0,n):t>1023?n<0?e:fr:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,In.assign(n,Un,1,0),i=Un[0],i&=2148532223,o*ar(i|=t+ur<<20,Un[1])))}function xn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],On=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hn=16777216,Tn=5.960464477539063e-8,Gn=xn(20),Vn=xn(20),Wn=xn(20),Ln=xn(20);function $n(r,t,e,i,o,a,f,u,c){var l,s,p,y,v,d,w,h,g;for(y=a,g=i[e],h=e,v=0;h>0;v++)s=Tn*g|0,Ln[v]=g-Hn*s|0,g=i[h-1]+s,h-=1;if(g=Sn(g,o),g-=8*n(.125*g),g-=w=0|g,p=0,o>0?(w+=v=Ln[e-1]>>24-o,Ln[e-1]-=v<<24-o,p=Ln[e-1]>>23-o):0===o?p=Ln[e-1]>>23:g>=.5&&(p=2),p>0){for(w+=1,l=0,v=0;v<e;v++)h=Ln[v],0===l?0!==h&&(l=1,Ln[v]=16777216-h):Ln[v]=16777215-h;if(o>0)switch(o){case 1:Ln[e-1]&=8388607;break;case 2:Ln[e-1]&=4194303}2===p&&(g=1-g,0!==l&&(g-=Sn(1,o)))}if(0===g){for(h=0,v=e-1;v>=a;v--)h|=Ln[v];if(0===h){for(d=1;0===Ln[a-d];d++);for(v=e+1;v<=e+d;v++){for(c[u+v]=kn[f+v],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(v-h)];i[v]=s}return $n(r,t,e+=d,i,o,a,f,u,c)}}if(0===g)for(e-=1,o-=24;0===Ln[e];)e-=1,o-=24;else(g=Sn(g,-o))>=Hn?(s=Tn*g|0,Ln[e]=g-Hn*s|0,o+=24,Ln[e+=1]=s):Ln[e]=0|g;for(s=Sn(1,o),v=e;v>=0;v--)i[v]=s*Ln[v],s*=Tn;for(v=e;v>=0;v--){for(s=0,d=0;d<=y&&d<=e-v;d++)s+=On[d]*i[v+d];Wn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Wn[v];for(t[0]=0===p?s:-s,s=Wn[0]-s,v=1;v<=e;v++)s+=Wn[v];return t[1]=0===p?s:-s,7&w}function Mn(r,n,t,e){var i,o,a,f,u,c,l;for((o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(a=e-1),l=a+4,u=0;u<=l;u++)Gn[u]=c<0?0:kn[c],c+=1;for(u=0;u<=4;u++){for(i=0,c=0;c<=a;c++)i+=r[c]*Gn[a+(u-c)];Vn[u]=i}return $n(r,n,4,Vn,f,4,o,a,Gn)}var Cn=Math.round;function Pn(r,n,t){var e,i,o,a,f;return o=r-1.5707963267341256*(e=Cn(.6366197723675814*r)),a=6077100506506192e-26*e,f=n>>20|0,t[0]=o-a,f-(W(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((i=o)-(o=i-(a=6077100506303966e-26*e))-a),t[0]=o-a,f-(W(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((i=o)-(o=i-(a=20222662487111665e-37*e))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var Rn=1.5707963267341256,Zn=6077100506506192e-26,Xn=2*Zn,Yn=3*Zn,qn=4*Zn,zn=[0,0,0],Bn=[0,0];function Dn(r,n){var t,e,i,o,f,u,c;if((i=2147483647&W(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(i&P)?Pn(r,i,n):i<=1073928572?r>0?(c=r-Rn,n[0]=c-Zn,n[1]=c-n[0]-Zn,1):(c=r+Rn,n[0]=c+Zn,n[1]=c-n[0]+Zn,-1):r>0?(c=r-2*Rn,n[0]=c-Xn,n[1]=c-n[0]-Xn,2):(c=r+2*Rn,n[0]=c+Xn,n[1]=c-n[0]+Xn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Pn(r,i,n):r>0?(c=r-3*Rn,n[0]=c-Yn,n[1]=c-n[0]-Yn,3):(c=r+3*Rn,n[0]=c+Yn,n[1]=c-n[0]+Yn,-3):1075388923===i?Pn(r,i,n):r>0?(c=r-4*Rn,n[0]=c-qn,n[1]=c-n[0]-qn,4):(c=r+4*Rn,n[0]=c+qn,n[1]=c-n[0]+qn,-4);if(i<1094263291)return Pn(r,i,n);if(i>=a)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return D[0]=r,J[B]}(r),c=ar(i-((e=(i>>20)-1046)<<20|0),t),f=0;f<2;f++)zn[f]=0|c,c=16777216*(c-zn[f]);for(zn[2]=c,o=3;0===zn[o-1];)o-=1;return u=Mn(zn,Bn,e,o),r<0?(n[0]=-Bn[0],n[1]=-Bn[1],-u):(n[0]=Bn[0],n[1]=Bn[1],u)}var Jn=[0,0],Kn=3.141592653589793;function Qn(r){return t(r/2)}function rt(r){return Qn(r>0?r-1:r+1)}var nt=Math.sqrt;function tt(r){return Math.abs(r)}var et,it,ot,at="function"==typeof Float64Array,ft="function"==typeof Float64Array?Float64Array:null,ut="function"==typeof Float64Array?Float64Array:void 0;et=function(){var r,n,t;if("function"!=typeof ft)return!1;try{n=new ft([1,3.14,-3.14,NaN]),t=n,r=(at&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ut:function(){throw new Error("not implemented")},!0===H?(it=1,ot=0):(it=0,ot=1);var ct={HIGH:it,LOW:ot},lt=new et(1),st=new h(lt.buffer),pt=ct.HIGH,yt=ct.LOW;function vt(r,n,t,e){return lt[0]=r,n[e]=st[pt],n[e+t]=st[yt],n}function dt(r){return vt(r,[0,0],1,0)}Dr(dt,"assign",vt);var wt,ht="function"==typeof Float64Array,gt="function"==typeof Float64Array?Float64Array:null,At="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var r,n,t;if("function"!=typeof gt)return!1;try{n=new gt([1,3.14,-3.14,NaN]),t=n,r=(ht&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?At:function(){throw new Error("not implemented")};var bt=!0===H?0:1,mt=new wt(1),Ft=new h(mt.buffer);function Nt(r,n){return mt[0]=r,Ft[bt]=n>>>0,mt[0]}function Et(r){return 0|r}var _t,It=2147483647,jt="function"==typeof Float64Array,Ut="function"==typeof Float64Array?Float64Array:null,St="function"==typeof Float64Array?Float64Array:void 0;_t=function(){var r,n,t;if("function"!=typeof Ut)return!1;try{n=new Ut([1,3.14,-3.14,NaN]),t=n,r=(jt&&t instanceof Float64Array||"[object Float64Array]"===p(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?St:function(){throw new Error("not implemented")};var xt=!0===H?1:0,kt=new _t(1),Ot=new h(kt.buffer);function Ht(r,n){return kt[0]=r,Ot[xt]=n>>>0,kt[0]}var Tt=1048576,Gt=[1,1.5],Vt=[0,.5849624872207642],Wt=[0,1.350039202129749e-8],Lt=1048576,$t=1083179008,Mt=1e300,Ct=1e-300,Pt=[0,0],Rt=[0,0];function Zt(n,i){var o,a,f,u,c,l,s,p,y,v,d,w,h,g;if(r(n)||r(i))return NaN;if(dt.assign(i,Pt,1,0),c=Pt[0],0===Pt[1]){if(0===i)return 1;if(1===i)return n;if(-1===i)return 1/n;if(.5===i)return nt(n);if(-.5===i)return 1/nt(n);if(2===i)return n*n;if(3===i)return n*n*n;if(4===i)return(n*=n)*n;if(cr(i))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tt(r)<1==(n===fr)?0:fr}(n,i)}if(dt.assign(n,Pt,1,0),u=Pt[0],0===Pt[1]){if(0===u)return function(r,n){return n===e?fr:n===fr?0:n>0?rt(n)?r:0:rt(n)?pn(fr,r):fr}(n,i);if(1===n)return 1;if(-1===n&&rt(i))return-1;if(cr(n))return n===e?Zt(-0,-i):i<0?0:fr}if(n<0&&!1===t(i))return(n-n)/(n-n);if(f=tt(n),o=u&It|0,a=c&It|0,s=c>>>31|0,l=(l=u>>>31|0)&&rt(i)?-1:1,a>1105199104){if(a>1139802112)return function(r,n){return(W(r)&It)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,i);if(o<1072693247)return 1===s?l*Mt*Mt:l*Ct*Ct;if(o>1072693248)return 0===s?l*Mt*Mt:l*Ct*Ct;d=function(r,n){var t,e,i,o,a,f;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Nt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Rt,f)}else d=function(r,n,t){var e,i,o,a,f,u,c,l,s,p,y,v,d,w,h,g,A,b,m,F,N;return b=0,t<Tt&&(b-=53,t=W(n*=9007199254740992)),b+=(t>>20)-ur|0,t=1072693248|(m=1048575&t|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,t-=Tt),a=Nt(i=(g=(n=Ht(n,t))-(c=Gt[F]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),u=Ht(0,e+=F<<18),h=(o=i*i)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=Nt(u=3+(o=a*a)+(h+=(f=A*(g-a*u-a*(n-(u-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Nt(s=(g=a*u)+(A=f*u+(h-(u-3-o))*i),0))+.9617966939259756*(A-(s-g))+Wt[F])-((v=Nt(v=(p=.9617967009544373*s)+y+(l=Vt[F])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(Rt,f,o);if(w=(v=(i-(p=Nt(i,0)))*d[0]+i*d[1])+(y=p*d[0]),dt.assign(w,Pt,1,0),h=Et(Pt[0]),g=Et(Pt[1]),h>=$t){if(0!=(h-$t|g))return l*Mt*Mt;if(v+8008566259537294e-32>w-y)return l*Mt*Mt}else if((h&It)>=1083231232){if(0!=(h-3230714880|g))return l*Ct*Ct;if(v<=w-y)return l*Ct*Ct}return w=function(r,n,t){var e,i,o,a,f,u,c,l,s,p;return s=((l=r&It|0)>>20)-ur|0,c=0,l>1071644672&&(i=Ht(0,((c=r+(Lt>>s+1)>>>0)&~(P>>(s=((c&It)>>20)-ur|0)))>>>0),c=(c&P|Lt)>>20-s>>>0,r<0&&(c=-c),n-=i),r=Et(r=W(u=1-((u=(o=.6931471824645996*(i=Nt(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=u-(i=u*u)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-o))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?Sn(u,c):Ht(u,r)}(h,y,v),l*w}var Xt=Math.ceil;function Yt(r){return r<0?Xt(r):n(r)}var qt=1.4426950408889634,zt=1/(1<<28);function Bt(n){var t;return r(n)||n===fr?n:n===e?0:n>709.782712893384?fr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<zt?1+n:function(r,n,t){var e,i,o,a;return Sn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=Yt(n<0?qt*n-.5:qt*n+.5)),1.9082149292705877e-10*t,t)}function Dt(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Bt(r),2.5066282746310007*(t=r>143.01608?(e=Zt(r,.5*r-.25))*(e/t):Zt(r,r-.5)/t)*n}function Jt(r,n){return n/((1+.5772156649015329*r)*r)}function Kt(o){var f,u,c,l;if(t(o)&&o<0||o===e||r(o))return NaN;if(0===o)return function(r){return 0===r&&1/r===e}(o)?e:fr;if(o>171.61447887182297)return fr;if(o<-170.5674972726612)return 0;if((u=i(o))>33)return o>=0?Dt(o):(f=0==(1&(c=n(u)))?-1:1,(l=u-c)>.5&&(l=u-(c+=1)),l=u*function(r){var n;if(n=W(r),(n&=2147483647)<=1072243195)return n<1045430272?r:M(r,0);if(n>=a)return NaN;switch(3&Dn(r,Jn)){case 0:return M(Jn[0],Jn[1]);case 1:return L(Jn[0],Jn[1]);case 2:return-M(Jn[0],Jn[1]);default:return-L(Jn[0],Jn[1])}}(Kn*l),f*Kn/(i(l)*Dt(u)));for(l=1;o>=3;)l*=o-=1;for(;o<0;){if(o>-1e-9)return Jt(o,l);l/=o,o+=1}for(;o<2;){if(o<1e-9)return Jt(o,l);l/=o,o+=1}return 2===o?l:l*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(o-=2)}var Qt=.6931471803691238,re=1.9082149292705877e-10,ne=1.4426950408889634;function te(n){var t,i,o,a,f,u,c,l,s,p,y,v,d;if(n===fr||r(n))return n;if(n===e)return-1;if(0===n)return n;if(n<0?(o=!0,l=-n):(o=!1,l=n),l>=38.816242111356935){if(o)return-1;if(l>=709.782712893384)return fr}if(u=0|W(l),l>.34657359027997264)l<1.0397207708399179?o?(a=n+Qt,f=-re,d=-1):(a=n-Qt,f=re,d=1):(d=o?ne*n-.5:ne*n+.5,a=n-(y=d|=0)*Qt,f=y*re),p=a-(n=a-f)-f;else{if(u<1016070144)return n;d=0}return c=1+(s=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(s),v=s*((c-(y=3-c*t))/(6-n*y)),0===d?n-(n*v-s):(i=ar(ur+d<<20,0),v=n*(v-p)-p,v-=s,-1===d?.5*(n-v)-.5:1===d?n<-.25?-2*(v-(n+.5)):1+2*(n-v):d<=-2||d>56?(l=1-(v-n),1024===d?l=Ht(l,a=W(l)+(d<<20)|0):l*=i,l-1):(y=1,d<20?l=(y=Ht(y,a=1072693248-(2097152>>d)|0))-(v-n):(l=n-(v+(y=Ht(y,a=ur-d<<20|0))),l+=1),l*=i))}var ee=.6931471803691238,ie=1.9082149292705877e-10,oe=.6931471803691238,ae=1.9082149292705877e-10,fe=1048575;function ue(n){var t,i,o,a,f,u,c,l,s,p,y,v;return 0===n?e:r(n)||n<0?NaN:(f=0,(i=W(n))<1048576&&(f-=54,i=W(n*=0x40000000000000)),i>=2146435072?n+n:(f+=(i>>20)-ur|0,f+=(l=614244+(i&=fe)&1048576|0)>>20|0,c=(n=Ht(n,i|1072693248^l))-1,(fe&2+i)<3?0===c?0===f?0:f*oe+f*ae:(u=c*c*(.5-.3333333333333333*c),0===f?c-u:f*oe-(u-f*ae-c)):(l=i-398458|0,s=440401-i|0,a=(y=(v=(p=c/(2+c))*p)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),o=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),u=o+a,(l|=s)>0?(t=.5*c*c,0===f?c-(t-p*(t+u)):f*oe-(t-(p*(t+u)+f*ae)-c)):0===f?c-p*(c-u):f*oe-(p*(c-u)-f*ae-c))))}function ce(r,n,t){var e,i,o,a,f,u,c;if(r<2220446049250313e-31)return-ue(r);if(0===n||0===t)return 0;if(i=0,r>2){if(r>=3){do{t-=1,i+=ue(r-=1)}while(r>=3);t=r-2}return i+=.15896368026733398*(o=t*(r+1))+o*(a=0===(f=t)?-.01803556856784494:((f<0?-f:f)<=1?(u=f*(.02512664961998968+f*(.049410315156753225+f*(.0172491608709614+f*(f*(f*(0*f-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+f*(1.962029871977952+f*(1.4801966942423133+f*(.5413914320717209+f*(.09885042511280101+f*(.008213096746488934+f*(.00022493629192211576+-2.2335276320861708e-7*f))))))):(u=0+(f=1/f)*(f*(f*(f*(.0172491608709614+f*(.049410315156753225+f*(.02512664961998968+-.01803556856784494*f)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=f*(.00022493629192211576+f*(.008213096746488934+f*(.09885042511280101+f*(.5413914320717209+f*(1.4801966942423133+f*(1.962029871977952+1*f))))))-2.2335276320861708e-7),u/c))}return r<1&&(i+=-ue(r),t=n,n=r,r+=1),r<=1.5?(o=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),i+=.5281534194946289*(e=n*t)+e*o):(o=t*n,a=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),i+=.45201730728149414*o+o*a)}return function(n){return r(n)?NaN:n<0?n<-.5?Kt(1+n)-1:te(-function(n){var t,i,o,a,f,u,c,l,s,p;if(n<-1||r(n))return NaN;if(-1===n)return e;if(n===fr)return n;if(0===n)return n;if(p=1,(o=n<0?-n:n)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(p=0,a=n,i=1)}return 0!==p&&(o<9007199254740992?(f=(p=((i=W(s=1+n))>>20)-ur)>0?1-(s-n):n-(s-1),f/=s):(p=((i=W(s=n))>>20)-ur,f=0),(i&=1048575)<434334?s=Ht(s,1072693248|i):(p+=1,s=Ht(s,1071644672|i),i=1048576-i>>2),a=s-1),t=.5*a*a,0===i?0===a?p*ee+(f+=p*ie):p*ee-((l=t*(1-.6666666666666666*a))-(p*ie+f)-a):(l=(c=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===p?a-(t-u*(t+l)):p*ee-(t-(u*(t+l)+(p*ie+f))-a))}(n)+ce(n+2,n+1,n)):n<2?te(ce(n+1,n,n-1)):Kt(1+n)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).gamma1pm1=n();
//# sourceMappingURL=index.js.map
