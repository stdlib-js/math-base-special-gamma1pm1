// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var i,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",l=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return o.call(r);t=r[c],i=c,n=null!=(u=r)&&a.call(u,i);try{r[c]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[c]=t:delete r[c],e}:function(r){return o.call(r)},y="function"==typeof Uint32Array,v="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(y&&t instanceof Uint32Array||"[object Uint32Array]"===l(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var s,b=i,w="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,m="function"==typeof Float64Array?Float64Array:void 0;s=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,NaN]),t=n,r=(w&&t instanceof Float64Array||"[object Float64Array]"===l(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=s,h="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,g="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===l(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var U,j=A,I="function"==typeof Uint16Array,O="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===l(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F={uint16:U,uint8:j};(E=new F.uint16(1))[0]=4660;var T=52===new F.uint8(E.buffer)[0],H=!0===T?1:0,G=new _(1),P=new b(G.buffer);function M(r){return G[0]=r,P[H]}function x(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var L=-.16666666666666632;function V(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(L+u*t):r-(u*(.5*n-e*t)-n-e*L)}var W,k,Y=!0===T?0:1,q=new _(1),C=new b(q.buffer);!0===T?(W=1,k=0):(W=0,k=1);var z={HIGH:W,LOW:k},B=new _(1),D=new b(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R=Number.POSITIVE_INFINITY,X=1023;function Z(r){return r===R||r===e}var $,rr,nr=2147483647,tr="function"==typeof Object.defineProperty?Object.defineProperty:null,er=Object.defineProperty,ur=Object.prototype,ir=ur.toString,fr=ur.__defineGetter__,or=ur.__defineSetter__,ar=ur.__lookupGetter__,cr=ur.__lookupSetter__,lr=function(){try{return tr({},"x",{}),!0}catch(r){return!1}}()?er:function(r,n,t){var e,u,i,f;if("object"!=typeof r||null===r||"[object Array]"===ir.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===ir.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(ar.call(r,n)||cr.call(r,n)?(e=r.__proto__,r.__proto__=ur,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,f="set"in t,u&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&fr&&fr.call(r,n,t.get),f&&or&&or.call(r,n,t.set),r};function yr(r,n,t){lr(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===T?($=1,rr=0):($=0,rr=1);var vr={HIGH:$,LOW:rr},pr=new _(1),sr=new b(pr.buffer),br=vr.HIGH,wr=vr.LOW;function dr(r,n,t,e){return pr[0]=r,n[e]=sr[br],n[e+t]=sr[wr],n}function mr(r){return dr(r,[0,0],1,0)}yr(mr,"assign",dr);var Ar=[0,0];function _r(r,n){var t,e;return mr.assign(r,Ar,1,0),t=Ar[0],t&=nr,e=M(n),Q(t|=e&=2147483648,Ar[1])}function hr(n,t,e,i){return r(n)||Z(n)?(t[i]=n,t[i+e]=0,t):0!==n&&u(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+e]=-52,t):(t[i]=n,t[i+e]=0,t)}yr((function(r){return hr(r,[0,0],1,0)}),"assign",hr);var Nr=[0,0],gr=[0,0];function Ur(n,t){var u,i;return 0===t||0===n||r(n)||Z(n)?n:(hr(n,Nr,1,0),t+=Nr[1],t+=function(r){var n=M(r);return(n=(2146435072&n)>>>20)-X|0}(n=Nr[0]),t<-1074?_r(0,n):t>1023?n<0?e:R:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,mr.assign(n,gr,1,0),u=gr[0],u&=2148532223,i*Q(u|=t+X<<20,gr[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,t,e,u,i,f,o,a,c){var l,y,v,p,s,b,w,d,m;for(p=f,m=u[e],d=e,s=0;d>0;s++)y=Er*m|0,Gr[s]=m-Sr*y|0,m=u[d-1]+y,d-=1;if(m=Ur(m,i),m-=8*n(.125*m),m-=w=0|m,v=0,i>0?(w+=s=Gr[e-1]>>24-i,Gr[e-1]-=s<<24-i,v=Gr[e-1]>>23-i):0===i?v=Gr[e-1]>>23:m>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<e;s++)d=Gr[s],0===l?0!==d&&(l=1,Gr[s]=16777216-d):Gr[s]=16777215-d;if(i>0)switch(i){case 1:Gr[e-1]&=8388607;break;case 2:Gr[e-1]&=4194303}2===v&&(m=1-m,0!==l&&(m-=Ur(1,i)))}if(0===m){for(d=0,s=e-1;s>=f;s--)d|=Gr[s];if(0===d){for(b=1;0===Gr[f-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Ir[o+s],y=0,d=0;d<=a;d++)y+=r[d]*c[a+(s-d)];u[s]=y}return Pr(r,t,e+=b,u,i,f,o,a,c)}}if(0===m)for(e-=1,i-=24;0===Gr[e];)e-=1,i-=24;else(m=Ur(m,-i))>=Sr?(y=Er*m|0,Gr[e]=m-Sr*y|0,i+=24,Gr[e+=1]=y):Gr[e]=0|m;for(y=Ur(1,i),s=e;s>=0;s--)u[s]=y*Gr[s],y*=Er;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=Or[b]*u[s+b];Hr[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Hr[s];for(t[0]=0===v?y:-y,y=Hr[0]-y,s=1;s<=e;s++)y+=Hr[s];return t[1]=0===v?y:-y,7&w}function Mr(r,n,t,e){var u,i,f,o,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),o=t-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Fr[f+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,o,4,i,f,Fr)}var xr=Math.round;function Lr(r,n,t){var e,u,i,f,o;return i=r-1.5707963267341256*(e=xr(.6366197723675814*r)),f=6077100506506192e-26*e,o=n>>20|0,t[0]=i-f,o-(M(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=i)-(i=u-(f=6077100506303966e-26*e))-f),t[0]=i-f,o-(M(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=i)-(i=u-(f=20222662487111665e-37*e))-f),t[0]=i-f)),t[1]=i-t[0]-f,e}var Vr=1.5707963267341256,Wr=6077100506506192e-26,kr=2*Wr,Yr=3*Wr,qr=4*Wr,Cr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,u,i,f,o,a;if((u=2147483647&M(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Lr(r,u,n):u<=1073928572?r>0?(a=r-Vr,n[0]=a-Wr,n[1]=a-n[0]-Wr,1):(a=r+Vr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-1):r>0?(a=r-2*Vr,n[0]=a-kr,n[1]=a-n[0]-kr,2):(a=r+2*Vr,n[0]=a+kr,n[1]=a-n[0]+kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Lr(r,u,n):r>0?(a=r-3*Vr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Vr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Lr(r,u,n):r>0?(a=r-4*Vr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Vr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Lr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)Cr[f]=0|a,a=16777216*(a-Cr[f]);for(Cr[2]=a,i=3;0===Cr[i-1];)i-=1;return o=Mr(Cr,zr,e,i),r<0?(n[0]=-zr[0],n[1]=-zr[1],-o):(n[0]=zr[0],n[1]=zr[1],o)}var Dr=[0,0],Jr=3.141592653589793;function Kr(r){return t(r/2)}function Qr(r){return Kr(r>0?r-1:r+1)}var Rr=Math.sqrt,Xr=!0===T?0:1,Zr=new _(1),$r=new b(Zr.buffer);function rn(r,n){return Zr[0]=r,$r[Xr]=n>>>0,Zr[0]}function nn(r){return 0|r}var tn=!0===T?1:0,en=new _(1),un=new b(en.buffer);function fn(r,n){return en[0]=r,un[tn]=n>>>0,en[0]}var on=1048576,an=[1,1.5],cn=[0,.5849624872207642],ln=[0,1.350039202129749e-8],yn=1048575,vn=1048576,pn=1083179008,sn=1e300,bn=1e-300,wn=[0,0],dn=[0,0];function mn(n,i){var f,o,a,c,l,y,v,p,s,b,w,d,m,A;if(r(n)||r(i))return NaN;if(mr.assign(i,wn,1,0),l=wn[0],0===wn[1]){if(0===i)return 1;if(1===i)return n;if(-1===i)return 1/n;if(.5===i)return Rr(n);if(-.5===i)return 1/Rr(n);if(2===i)return n*n;if(3===i)return n*n*n;if(4===i)return(n*=n)*n;if(Z(i))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===R)?0:R}(n,i)}if(mr.assign(n,wn,1,0),c=wn[0],0===wn[1]){if(0===c)return function(r,n){return n===e?R:n===R?0:n>0?Qr(n)?r:0:Qr(n)?_r(R,r):R}(n,i);if(1===n)return 1;if(-1===n&&Qr(i))return-1;if(Z(n))return n===e?mn(-0,-i):i<0?0:R}if(n<0&&!1===t(i))return(n-n)/(n-n);if(a=u(n),f=c&nr|0,o=l&nr|0,v=l>>>31|0,y=(y=c>>>31|0)&&Qr(i)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(M(r)&nr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,i);if(f<1072693247)return 1===v?y*sn*sn:y*bn*bn;if(f>1072693248)return 0===v?y*sn*sn:y*bn*bn;w=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=rn(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(dn,a)}else w=function(r,n,t){var e,u,i,f,o,a,c,l,y,v,p,s,b,w,d,m,A,_,h,N,g;return _=0,t<on&&(_-=53,t=M(n*=9007199254740992)),_+=(t>>20)-X|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,_+=1,t-=on),f=rn(u=(m=(n=fn(n,t))-(c=an[N]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=fn(0,e+=N<<18),d=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=rn(a=3+(i=f*f)+(d+=(o=A*(m-f*a-f*(n-(a-c))))*(f+u)),0),b=(p=-7.028461650952758e-9*(y=rn(y=(m=f*a)+(A=o*a+(d-(a-3-i))*u),0))+.9617966939259756*(A-(y-m))+ln[N])-((s=rn(s=(v=.9617967009544373*y)+p+(l=cn[N])+(w=_),0))-w-l-v),r[0]=s,r[1]=b,r}(dn,a,f);if(d=(b=(i-(p=rn(i,0)))*w[0]+i*w[1])+(s=p*w[0]),mr.assign(d,wn,1,0),m=nn(wn[0]),A=nn(wn[1]),m>=pn){if(0!=(m-pn|A))return y*sn*sn;if(b+8008566259537294e-32>d-s)return y*sn*sn}else if((m&nr)>=1083231232){if(0!=(m-3230714880|A))return y*bn*bn;if(b<=d-s)return y*bn*bn}return d=function(r,n,t){var e,u,i,f,o,a,c,l,y,v;return y=((l=r&nr|0)>>20)-X|0,c=0,l>1071644672&&(u=fn(0,((c=r+(vn>>y+1)>>>0)&~(yn>>(y=((c&nr)>>20)-X|0)))>>>0),c=(c&yn|vn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=nn(r=M(a=1-((a=(i=.6931471824645996*(u=rn(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Ur(a,c):fn(a,r)}(m,s,b),y*d}var An=Math.ceil;function _n(r){return r<0?An(r):n(r)}var hn=1.4426950408889634,Nn=1/(1<<28);function gn(n){var t;return r(n)||n===R?n:n===e?0:n>709.782712893384?R:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Nn?1+n:function(r,n,t){var e,u,i,f;return Ur(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(n-.6931471803691238*(t=_n(n<0?hn*n-.5:hn*n+.5)),1.9082149292705877e-10*t,t)}function Un(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=gn(r),2.5066282746310007*(t=r>143.01608?(e=mn(r,.5*r-.25))*(e/t):mn(r,r-.5)/t)*n}function jn(r,n){return n/((1+.5772156649015329*r)*r)}function In(i){var f,o,a,c;if(t(i)&&i<0||i===e||r(i))return NaN;if(0===i)return function(r){return 0===r&&1/r===e}(i)?e:R;if(i>171.61447887182297)return R;if(i<-170.5674972726612)return 0;if((o=u(i))>33)return i>=0?Un(i):(f=0==(1&(a=n(o)))?-1:1,(c=o-a)>.5&&(c=o-(a+=1)),c=o*function(r){var n;if(n=M(r),(n&=2147483647)<=1072243195)return n<1045430272?r:V(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,Dr)){case 0:return V(Dr[0],Dr[1]);case 1:return x(Dr[0],Dr[1]);case 2:return-V(Dr[0],Dr[1]);default:return-x(Dr[0],Dr[1])}}(Jr*c),f*Jr/(u(c)*Un(o)));for(c=1;i>=3;)c*=i-=1;for(;i<0;){if(i>-1e-9)return jn(i,c);c/=i,i+=1}for(;i<2;){if(i<1e-9)return jn(i,c);c/=i,i+=1}return 2===i?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(i-=2)}var On=.6931471803691238,Sn=1.9082149292705877e-10,En=1.4426950408889634;function Fn(n){var t,u,i,f,o,a,c,l,y,v,p,s;if(n===R||r(n))return n;if(n===e)return-1;if(0===n)return n;if(n<0?(u=!0,c=-n):(u=!1,c=n),c>=38.816242111356935){if(u)return-1;if(c>=709.782712893384)return R}if(o=0|M(c),c>.34657359027997264)c<1.0397207708399179?u?(i=n+On,f=-Sn,s=-1):(i=n-On,f=Sn,s=1):(s=u?En*n-.5:En*n+.5,i=n-(v=s|=0)*On,f=v*Sn),y=i-(n=i-f)-f;else{if(o<1016070144)return n;s=0}return a=1+(l=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(l),p=l*((a-(v=3-a*t))/(6-n*v)),0===s?n-(n*p-l):(p=n*(p-y)-y,p-=l,-1===s?.5*(n-p)-.5:1===s?n<-.25?-2*(p-(n+.5)):1+2*(n-p):s<=-2||s>56?(c=fn(c=1-(p-n),i=M(c)+(s<<20)|0))-1:(v=1,s<20?c=(v=fn(v,i=1072693248-(2097152>>s)|0))-(p-n):(c=n-(p+(v=fn(v,i=X-s<<20|0))),c+=1),fn(c,i=M(c)+(s<<20)|0)))}var Tn=.6931471803691238,Hn=1.9082149292705877e-10,Gn=.6931471803691238,Pn=1.9082149292705877e-10,Mn=1048575;function xn(n){var t,u,i,f,o,a,c,l,y,v,p,s;return 0===n?e:r(n)||n<0?NaN:(o=0,(u=M(n))<1048576&&(o-=54,u=M(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-X|0,o+=(l=614244+(u&=Mn)&1048576|0)>>20|0,c=(n=fn(n,u|1072693248^l))-1,(Mn&2+u)<3?0===c?0===o?0:o*Gn+o*Pn:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Gn-(a-o*Pn-c)):(l=u-398458|0,y=440401-u|0,f=(p=(s=(v=c/(2+c))*v)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=i+f,(l|=y)>0?(t=.5*c*c,0===o?c-(t-v*(t+a)):o*Gn-(t-(v*(t+a)+o*Pn)-c)):0===o?c-v*(c-a):o*Gn-(v*(c-a)-o*Pn-c))))}function Ln(r,n,t){var e,u,i,f,o,a,c;if(r<2220446049250313e-31)return-xn(r);if(0===n||0===t)return 0;if(u=0,r>2){if(r>=3){do{t-=1,u+=xn(r-=1)}while(r>=3);t=r-2}return u+=.15896368026733398*(i=t*(r+1))+i*(f=0===(o=t)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-xn(r),t=n,n=r,r+=1),r<=1.5?(i=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),u+=.5281534194946289*(e=n*t)+e*i):(i=t*n,f=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),u+=.45201730728149414*i+i*f)}return function(n){return r(n)?NaN:n<0?n<-.5?In(1+n)-1:Fn(-function(n){var t,u,i,f,o,a,c,l,y,v;if(n<-1||r(n))return NaN;if(-1===n)return e;if(n===R)return n;if(0===n)return n;if(v=1,(i=n<0?-n:n)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(v=0,f=n,u=1)}return 0!==v&&(i<9007199254740992?(o=(v=((u=M(y=1+n))>>20)-X)>0?1-(y-n):n-(y-1),o/=y):(v=((u=M(y=n))>>20)-X,o=0),(u&=1048575)<434334?y=fn(y,1072693248|u):(v+=1,y=fn(y,1071644672|u),u=1048576-u>>2),f=y-1),t=.5*f*f,0===u?0===f?v*Tn+(o+=v*Hn):v*Tn-((l=t*(1-.6666666666666666*f))-(v*Hn+o)-f):(l=(c=(a=f/(2+f))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===v?f-(t-a*(t+l)):v*Tn-(t-(a*(t+l)+(v*Hn+o))-f))}(n)+Ln(n+2,n+1,n)):n<2?Fn(Ln(n+1,n,n-1)):In(1+n)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).gamma1pm1=n();
//# sourceMappingURL=index.js.map
