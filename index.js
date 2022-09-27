// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Math.floor;function t(r){return n(r)===r}var e=Number.NEGATIVE_INFINITY;function u(r){return Math.abs(r)}var f,i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol.toStringTag:"",y=i&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return o.call(r);t=r[c],f=c,n=null!=(u=r)&&a.call(u,f);try{r[c]=void 0}catch(n){return o.call(r)}return e=o.call(r),n?r[c]=t:delete r[c],e}:function(r){return o.call(r)},v="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(v&&t instanceof Uint32Array||"[object Uint32Array]"===y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var w,s=f,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var h,d=w,m="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F=h,S="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,O="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var T,j={uint16:g,uint8:F};(T=new j.uint16(1))[0]=4660;var E=52===new j.uint8(T.buffer)[0],G=!0===E?1:0,M=new d(1),L=new s(M.buffer);function W(r){return M[0]=r,L[G]}function x(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var P=-.16666666666666632;function V(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(P+u*t):r-(u*(.5*n-e*t)-n-e*P)}var Y,_,k=!0===E?0:1,q=new d(1),z=new s(q.buffer);!0===E?(Y=1,_=0):(Y=0,_=1);var B={HIGH:Y,LOW:_},C=new d(1),D=new s(C.buffer),J=B.HIGH,K=B.LOW;function Q(r,n){return D[J]=r,D[K]=n,C[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=1023;function rr(r){return r===Z||r===e}!0===E?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new d(1),er=new s(tr.buffer),ur=nr.HIGH,fr=nr.LOW;function ir(r,n){return tr[0]=n,r[0]=er[ur],r[1]=er[fr],r}function or(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var ar=[0,0];function cr(r,n){var t,e;return or(ar,r),t=ar[0],t&=2147483647,e=W(n),Q(t|=e&=2147483648,ar[1])}function yr(n,t){return r(t)||rr(t)?(n[0]=t,n[1]=0,n):0!==t&&u(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var vr=[0,0],lr=[0,0];function pr(n,t){var u,f;return 0===t||0===n||r(n)||rr(n)?n:(function(r,n){1===arguments.length?yr([0,0],r):yr(r,n)}(vr,n),t+=vr[1],t+=function(r){var n=W(r);return(n=(2146435072&n)>>>20)-$|0}(n=vr[0]),t<-1074?cr(0,n):t>1023?n<0?e:Z:(t<=-1023?(t+=52,f=2220446049250313e-31):f=1,or(lr,n),u=lr[0],u&=2148532223,f*Q(u|=t+$<<20,lr[1])))}function wr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var sr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ar=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=16777216,Nr=5.960464477539063e-8,hr=wr(20),dr=wr(20),mr=wr(20),Ur=wr(20);function Ir(r,t,e,u,f,i,o,a,c){var y,v,l,p,w,s,A,b,N;for(p=i,N=u[e],b=e,w=0;b>0;w++)v=Nr*N|0,Ur[w]=N-br*v|0,N=u[b-1]+v,b-=1;if(N=pr(N,f),N-=8*n(.125*N),N-=A=0|N,l=0,f>0?(A+=w=Ur[e-1]>>24-f,Ur[e-1]-=w<<24-f,l=Ur[e-1]>>23-f):0===f?l=Ur[e-1]>>23:N>=.5&&(l=2),l>0){for(A+=1,y=0,w=0;w<e;w++)b=Ur[w],0===y?0!==b&&(y=1,Ur[w]=16777216-b):Ur[w]=16777215-b;if(f>0)switch(f){case 1:Ur[e-1]&=8388607;break;case 2:Ur[e-1]&=4194303}2===l&&(N=1-N,0!==y&&(N-=pr(1,f)))}if(0===N){for(b=0,w=e-1;w>=i;w--)b|=Ur[w];if(0===b){for(s=1;0===Ur[i-s];s++);for(w=e+1;w<=e+s;w++){for(c[a+w]=sr[o+w],v=0,b=0;b<=a;b++)v+=r[b]*c[a+(w-b)];u[w]=v}return Ir(r,t,e+=s,u,f,i,o,a,c)}}if(0===N)for(e-=1,f-=24;0===Ur[e];)e-=1,f-=24;else(N=pr(N,-f))>=br?(v=Nr*N|0,Ur[e]=N-br*v|0,f+=24,Ur[e+=1]=v):Ur[e]=0|N;for(v=pr(1,f),w=e;w>=0;w--)u[w]=v*Ur[w],v*=Nr;for(w=e;w>=0;w--){for(v=0,s=0;s<=p&&s<=e-w;s++)v+=Ar[s]*u[w+s];mr[e-w]=v}for(v=0,w=e;w>=0;w--)v+=mr[w];for(t[0]=0===l?v:-v,v=mr[0]-v,w=1;w<=e;w++)v+=mr[w];return t[1]=0===l?v:-v,7&A}function gr(r,n,t,e){var u,f,i,o,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),y=i+4,a=0;a<=y;a++)hr[a]=c<0?0:sr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*hr[i+(a-c)];dr[a]=u}return Ir(r,n,4,dr,o,4,f,i,hr)}var Fr=Math.round;function Sr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(W(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(W(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Hr=1.5707963267341256,Or=6077100506506192e-26,Tr=2*Or,jr=3*Or,Er=4*Or,Gr=[0,0,0],Mr=[0,0];function Lr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&W(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Sr(r,u,n):u<=1073928572?r>0?(a=r-Hr,n[0]=a-Or,n[1]=a-n[0]-Or,1):(a=r+Hr,n[0]=a+Or,n[1]=a-n[0]+Or,-1):r>0?(a=r-2*Hr,n[0]=a-Tr,n[1]=a-n[0]-Tr,2):(a=r+2*Hr,n[0]=a+Tr,n[1]=a-n[0]+Tr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Sr(r,u,n):r>0?(a=r-3*Hr,n[0]=a-jr,n[1]=a-n[0]-jr,3):(a=r+3*Hr,n[0]=a+jr,n[1]=a-n[0]+jr,-3):1075388923===u?Sr(r,u,n):r>0?(a=r-4*Hr,n[0]=a-Er,n[1]=a-n[0]-Er,4):(a=r+4*Hr,n[0]=a+Er,n[1]=a-n[0]+Er,-4);if(u<1094263291)return Sr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,z[k]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Gr[i]=0|a,a=16777216*(a-Gr[i]);for(Gr[2]=a,f=3;0===Gr[f-1];)f-=1;return o=gr(Gr,Mr,e,f),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-o):(n[0]=Mr[0],n[1]=Mr[1],o)}var Wr=[0,0],xr=3.141592653589793;function Pr(r){return t(r/2)}function Vr(r){return Pr(r>0?r-1:r+1)}var Yr=Math.sqrt,_r=!0===E?0:1,kr=new d(1),qr=new s(kr.buffer);function zr(r,n){return kr[0]=r,qr[_r]=n>>>0,kr[0]}function Br(r){return 0|r}var Cr=!0===E?1:0,Dr=new d(1),Jr=new s(Dr.buffer);function Kr(r,n){return Dr[0]=r,Jr[Cr]=n>>>0,Dr[0]}var Qr=1048576,Rr=[1,1.5],Xr=[0,.5849624872207642],Zr=[0,1.350039202129749e-8],$r=2147483647,rn=1048575,nn=1048576,tn=2147483647,en=1083179008,un=1e300,fn=1e-300,on=[0,0],an=[0,0];function cn(n,f){var i,o,a,c,y,v,l,p,w,s,A,b,N,h;if(r(n)||r(f))return NaN;if(or(on,f),y=on[0],0===on[1]){if(0===f)return 1;if(1===f)return n;if(-1===f)return 1/n;if(.5===f)return Yr(n);if(-.5===f)return 1/Yr(n);if(2===f)return n*n;if(3===f)return n*n*n;if(4===f)return(n*=n)*n;if(rr(f))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:u(r)<1==(n===Z)?0:Z}(n,f)}if(or(on,n),c=on[0],0===on[1]){if(0===c)return function(r,n){return n===e?Z:n===Z?0:n>0?Vr(n)?r:0:Vr(n)?cr(Z,r):Z}(n,f);if(1===n)return 1;if(-1===n&&Vr(f))return-1;if(rr(n))return n===e?cn(-0,-f):f<0?0:Z}if(n<0&&!1===t(f))return(n-n)/(n-n);if(a=u(n),i=c&tn|0,o=y&tn|0,l=y>>>31|0,v=(v=c>>>31|0)&&Vr(f)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(2147483647&W(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,f);if(i<1072693247)return 1===l?v*un*un:v*fn*fn;if(i>1072693248)return 0===l?v*un*un:v*fn*fn;A=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=zr(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(an,a)}else A=function(r,n,t){var e,u,f,i,o,a,c,y,v,l,p,w,s,A,b,N,h,d,m,U,I;return d=0,t<Qr&&(d-=53,t=W(n*=9007199254740992)),d+=(t>>20)-$|0,t=1072693248|(m=1048575&t|0),m<=235662?U=0:m<767610?U=1:(U=0,d+=1,t-=Qr),i=zr(u=(N=(n=Kr(n,t))-(c=Rr[U]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Kr(0,e+=U<<18),b=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=zr(a=3+(f=i*i)+(b+=(o=h*(N-i*a-i*(n-(a-c))))*(i+u)),0),s=(p=-7.028461650952758e-9*(v=zr(v=(N=i*a)+(h=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(h-(v-N))+Zr[U])-((w=zr(w=(l=.9617967009544373*v)+p+(y=Xr[U])+(A=d),0))-A-y-l),r[0]=w,r[1]=s,r}(an,a,i);if(s=(f-(p=zr(f,0)))*A[0]+f*A[1],w=p*A[0],or(on,b=s+w),N=Br(on[0]),h=Br(on[1]),N>=en){if(0!=(N-en|h))return v*un*un;if(s+8008566259537294e-32>b-w)return v*un*un}else if((N&tn)>=1083231232){if(0!=(N-3230714880|h))return v*fn*fn;if(s<=b-w)return v*fn*fn}return b=function(r,n,t){var e,u,f,i,o,a,c,y,v,l;return v=((y=r&$r|0)>>20)-$|0,c=0,y>1071644672&&(u=Kr(0,((c=r+(nn>>v+1)>>>0)&~(rn>>(v=((c&$r)>>20)-$|0)))>>>0),c=(c&rn|nn)>>20-v>>>0,r<0&&(c=-c),n-=u),r=Br(r=W(a=1-((a=(f=.6931471824645996*(u=zr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(l=u)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?pr(a,c):Kr(a,r)}(N,w,s),v*b}var yn=Math.ceil;function vn(r){return r<0?yn(r):n(r)}var ln=1.4426950408889634,pn=1/(1<<28);function wn(n){var t;return r(n)||n===Z?n:n===e?0:n>709.782712893384?Z:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<pn?1+n:function(r,n,t){var e,u,f,i;return pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(n-.6931471803691238*(t=vn(n<0?ln*n-.5:ln*n+.5)),1.9082149292705877e-10*t,t)}function sn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=wn(r),2.5066282746310007*(t=r>143.01608?(e=cn(r,.5*r-.25))*(e/t):cn(r,r-.5)/t)*n}function An(r,n){return n/((1+.5772156649015329*r)*r)}function bn(f){var i,o,a,c;if(t(f)&&f<0||f===e||r(f))return NaN;if(0===f)return function(r){return 0===r&&1/r===e}(f)?e:Z;if(f>171.61447887182297)return Z;if(f<-170.5674972726612)return 0;if((o=u(f))>33)return f>=0?sn(f):(i=0==(1&(a=n(o)))?-1:1,(c=o-a)>.5&&(c=o-(a+=1)),c=o*function(r){var n;if(n=W(r),(n&=2147483647)<=1072243195)return n<1045430272?r:V(r,0);if(n>=2146435072)return NaN;switch(3&Lr(r,Wr)){case 0:return V(Wr[0],Wr[1]);case 1:return x(Wr[0],Wr[1]);case 2:return-V(Wr[0],Wr[1]);default:return-x(Wr[0],Wr[1])}}(xr*c),i*xr/(u(c)*sn(o)));for(c=1;f>=3;)c*=f-=1;for(;f<0;){if(f>-1e-9)return An(f,c);c/=f,f+=1}for(;f<2;){if(f<1e-9)return An(f,c);c/=f,f+=1}return 2===f?c:c*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(f-=2)}var Nn=.6931471803691238,hn=1.9082149292705877e-10,dn=1.4426950408889634;function mn(n){var t,u,f,i,o,a,c,y,v,l,p,w;if(n===Z||r(n))return n;if(n===e)return-1;if(0===n)return n;if(n<0?(u=!0,c=-n):(u=!1,c=n),c>=38.816242111356935){if(u)return-1;if(c>=709.782712893384)return Z}if(o=0|W(c),c>.34657359027997264)c<1.0397207708399179?u?(f=n+Nn,i=-hn,w=-1):(f=n-Nn,i=hn,w=1):(w=u?dn*n-.5:dn*n+.5,f=n-(l=w|=0)*Nn,i=l*hn),v=f-(n=f-i)-i;else{if(o<1016070144)return n;w=0}return a=1+(y=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(y),p=y*((a-(l=3-a*t))/(6-n*l)),0===w?n-(n*p-y):(p=n*(p-v)-v,p-=y,-1===w?.5*(n-p)-.5:1===w?n<-.25?-2*(p-(n+.5)):1+2*(n-p):w<=-2||w>56?(c=Kr(c=1-(p-n),f=W(c)+(w<<20)|0))-1:(l=1,w<20?c=(l=Kr(l,f=1072693248-(2097152>>w)|0))-(p-n):(c=n-(p+(l=Kr(l,f=$-w<<20|0))),c+=1),Kr(c,f=W(c)+(w<<20)|0)))}var Un=.6931471803691238,In=1.9082149292705877e-10,gn=.6931471803691238,Fn=1.9082149292705877e-10,Sn=1048575;function Hn(n){var t,u,f,i,o,a,c,y,v,l,p,w;return 0===n?e:r(n)||n<0?NaN:(o=0,(u=W(n))<1048576&&(o-=54,u=W(n*=0x40000000000000)),u>=2146435072?n+n:(o+=(u>>20)-$|0,o+=(y=614244+(u&=Sn)&1048576|0)>>20|0,c=(n=Kr(n,u|1072693248^y))-1,(Sn&2+u)<3?0===c?0===o?0:o*gn+o*Fn:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*gn-(a-o*Fn-c)):(y=u-398458|0,v=440401-u|0,i=(p=(w=(l=c/(2+c))*l)*w)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),f=w*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=f+i,(y|=v)>0?(t=.5*c*c,0===o?c-(t-l*(t+a)):o*gn-(t-(l*(t+a)+o*Fn)-c)):0===o?c-l*(c-a):o*gn-(l*(c-a)-o*Fn-c))))}function On(r,n,t){var e,u,f,i,o,a,c;if(r<2220446049250313e-31)return-Hn(r);if(0===n||0===t)return 0;if(u=0,r>2){if(r>=3){do{t-=1,u+=Hn(r-=1)}while(r>=3);t=r-2}return u+=.15896368026733398*(f=t*(r+1))+f*(i=0===(o=t)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-Hn(r),t=n,n=r,r+=1),r<=1.5?(f=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),u+=.5281534194946289*(e=n*t)+e*f):(f=t*n,i=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),u+=.45201730728149414*f+f*i)}return function(n){return r(n)?NaN:n<0?n<-.5?bn(1+n)-1:mn(-function(n){var t,u,f,i,o,a,c,y,v,l;if(n<-1||r(n))return NaN;if(-1===n)return e;if(n===Z)return n;if(0===n)return n;if(l=1,(f=n<0?-n:n)<.41421356237309503){if(f<1.862645149230957e-9)return f<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,i=n,u=1)}return 0!==l&&(f<9007199254740992?(o=(l=((u=W(v=1+n))>>20)-$)>0?1-(v-n):n-(v-1),o/=v):(l=((u=W(v=n))>>20)-$,o=0),(u&=1048575)<434334?v=Kr(v,1072693248|u):(l+=1,v=Kr(v,1071644672|u),u=1048576-u>>2),i=v-1),t=.5*i*i,0===u?0===i?l*Un+(o+=l*In):l*Un-((y=t*(1-.6666666666666666*i))-(l*In+o)-i):(y=(c=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===l?i-(t-a*(t+y)):l*Un-(t-(a*(t+y)+(l*In+o))-i))}(n)+On(n+2,n+1,n)):n<2?mn(On(n+1,n,n-1)):bn(1+n)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).gamma1pm1=n();
//# sourceMappingURL=index.js.map
