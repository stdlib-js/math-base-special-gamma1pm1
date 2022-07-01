// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Math.floor,t=n;var e=function(r){return t(r)===r},u=Number.NEGATIVE_INFINITY,f=u;var i=function(r){return 0===r&&1/r===f};var o=function(r){return Math.abs(r)};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var c=function(){return a&&"symbol"==typeof Symbol.toStringTag},v=Object.prototype.toString,y=v;var l=function(r){return y.call(r)},p=Object.prototype.hasOwnProperty;var w=function(r,n){return null!=r&&p.call(r,n)},A="function"==typeof Symbol?Symbol.toStringTag:"",N=w,b=A,s=v;var h=l,U=function(r){var n,t,e;if(null==r)return s.call(r);t=r[b],n=N(r,b);try{r[b]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[b]=t:delete r[b],e},m=c()?U:h,d=m,I="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null,S=function(r){return I&&r instanceof Uint32Array||"[object Uint32Array]"===d(r)},H=F;var O=function(){var r,n;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,4294967296,4294967297]),r=S(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var g="function"==typeof Uint32Array?Uint32Array:void 0,E=function(){throw new Error("not implemented")},j=O()?g:E,T=m,G="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null,L=function(r){return G&&r instanceof Float64Array||"[object Float64Array]"===T(r)},W=M;var x=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W([1,3.14,-3.14,NaN]),r=L(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var P="function"==typeof Float64Array?Float64Array:void 0,V=function(){throw new Error("not implemented")},Y=x()?P:V,_=m,k="function"==typeof Uint8Array;var q="function"==typeof Uint8Array?Uint8Array:null,z=function(r){return k&&r instanceof Uint8Array||"[object Uint8Array]"===_(r)},B=q;var C=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,256,257]),r=z(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var D="function"==typeof Uint8Array?Uint8Array:void 0,J=function(){throw new Error("not implemented")},K=C()?D:J,Q=m,R="function"==typeof Uint16Array;var X="function"==typeof Uint16Array?Uint16Array:null,Z=function(r){return R&&r instanceof Uint16Array||"[object Uint16Array]"===Q(r)},$=X;var rr=function(){var r,n;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,65536,65537]),r=Z(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var nr,tr="function"==typeof Uint16Array?Uint16Array:void 0,er=function(){throw new Error("not implemented")},ur={uint16:rr()?tr:er,uint8:K};(nr=new ur.uint16(1))[0]=4660;var fr=52===new ur.uint8(nr.buffer)[0],ir=j,or=!0===fr?1:0,ar=new Y(1),cr=new ir(ar.buffer);var vr=function(r){return ar[0]=r,cr[or]};var yr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},lr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var pr=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*yr(f),e+=u*u*lr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},wr=-.16666666666666632;var Ar=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(wr+u*t):r-(u*(.5*n-e*t)-n-e*wr)},Nr=j,br=!0===fr?0:1,sr=new Y(1),hr=new Nr(sr.buffer);var Ur,mr,dr=function(r){return sr[0]=r,hr[br]};!0===fr?(Ur=1,mr=0):(Ur=0,mr=1);var Ir=j,Fr={HIGH:Ur,LOW:mr},Sr=new Y(1),Hr=new Ir(Sr.buffer),Or=Fr.HIGH,gr=Fr.LOW;var Er=function(r,n){return Hr[Or]=r,Hr[gr]=n,Sr[0]},jr=Er,Tr=Number.POSITIVE_INFINITY,Gr=Tr,Mr=u;var Lr,Wr,xr=function(r){return r===Gr||r===Mr};!0===fr?(Lr=1,Wr=0):(Lr=0,Wr=1);var Pr=j,Vr={HIGH:Lr,LOW:Wr},Yr=new Y(1),_r=new Pr(Yr.buffer),kr=Vr.HIGH,qr=Vr.LOW;var zr=function(r,n){return Yr[0]=n,r[0]=_r[kr],r[1]=_r[qr],r};var Br=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Cr=Br,Dr=vr,Jr=jr,Kr=[0,0];var Qr=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])},Rr=xr,Xr=r,Zr=o;var $r=function(r,n){return Xr(n)||Rr(n)?(r[0]=n,r[1]=0,r):0!==n&&Zr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var rn=vr;var nn=function(r){var n=rn(r);return(n=(2146435072&n)>>>20)-1023|0},tn=Tr,en=u,un=r,fn=xr,on=Qr,an=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},cn=nn,vn=Br,yn=jr,ln=[0,0],pn=[0,0];var wn=function(r,n){var t,e;return 0===n||0===r||un(r)||fn(r)?r:(an(ln,r),n+=ln[1],(n+=cn(r=ln[0]))<-1074?on(0,r):n>1023?r<0?en:tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vn(pn,r),t=pn[0],t&=2148532223,e*yn(t|=n+1023<<20,pn[1])))},An=wn;var Nn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var bn=n,sn=An,hn=function(r){return Nn(0,r)},Un=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],dn=5.960464477539063e-8,In=hn(20),Fn=hn(20),Sn=hn(20),Hn=hn(20);function On(r,n,t,e,u,f,i,o,a){var c,v,y,l,p,w,A,N,b;for(l=f,b=e[t],N=t,p=0;N>0;p++)v=dn*b|0,Hn[p]=b-16777216*v|0,b=e[N-1]+v,N-=1;if(b=sn(b,u),b-=8*bn(.125*b),b-=A=0|b,y=0,u>0?(A+=p=Hn[t-1]>>24-u,Hn[t-1]-=p<<24-u,y=Hn[t-1]>>23-u):0===u?y=Hn[t-1]>>23:b>=.5&&(y=2),y>0){for(A+=1,c=0,p=0;p<t;p++)N=Hn[p],0===c?0!==N&&(c=1,Hn[p]=16777216-N):Hn[p]=16777215-N;if(u>0)switch(u){case 1:Hn[t-1]&=8388607;break;case 2:Hn[t-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=sn(1,u)))}if(0===b){for(N=0,p=t-1;p>=f;p--)N|=Hn[p];if(0===N){for(w=1;0===Hn[f-w];w++);for(p=t+1;p<=t+w;p++){for(a[o+p]=Un[i+p],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(p-N)];e[p]=v}return On(r,n,t+=w,e,u,f,i,o,a)}}if(0===b)for(t-=1,u-=24;0===Hn[t];)t-=1,u-=24;else(b=sn(b,-u))>=16777216?(v=dn*b|0,Hn[t]=b-16777216*v|0,u+=24,Hn[t+=1]=v):Hn[t]=0|b;for(v=sn(1,u),p=t;p>=0;p--)e[p]=v*Hn[p],v*=dn;for(p=t;p>=0;p--){for(v=0,w=0;w<=l&&w<=t-p;w++)v+=mn[w]*e[p+w];Sn[t-p]=v}for(v=0,p=t;p>=0;p--)v+=Sn[p];for(n[0]=0===y?v:-v,v=Sn[0]-v,p=1;p<=t;p++)v+=Sn[p];return n[1]=0===y?v:-v,7&A}var gn=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)In[a]=c<0?0:Un[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*In[i+(a-c)];Fn[a]=u}return 4,On(r,n,4,Fn,o,4,f,i,In)},En=Math.round,jn=vr;var Tn=vr,Gn=dr,Mn=jr,Ln=gn,Wn=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=En(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(jn(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(jn(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},xn=1.5707963267341256,Pn=6077100506506192e-26,Vn=2*Pn,Yn=4*Pn,_n=[0,0,0],kn=[0,0];var qn=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&Tn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Wn(r,u,n):u<=1073928572?r>0?(a=r-xn,n[0]=a-Pn,n[1]=a-n[0]-Pn,1):(a=r+xn,n[0]=a+Pn,n[1]=a-n[0]+Pn,-1):r>0?(a=r-2*xn,n[0]=a-Vn,n[1]=a-n[0]-Vn,2):(a=r+2*xn,n[0]=a+Vn,n[1]=a-n[0]+Vn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Wn(r,u,n):r>0?(a=r-3*xn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*xn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Wn(r,u,n):r>0?(a=r-4*xn,n[0]=a-Yn,n[1]=a-n[0]-Yn,4):(a=r+4*xn,n[0]=a+Yn,n[1]=a-n[0]+Yn,-4);if(u<1094263291)return Wn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Gn(r),a=Mn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)_n[i]=0|a,a=16777216*(a-_n[i]);for(_n[2]=a,f=3;0===_n[f-1];)f-=1;return o=Ln(_n,kn,e,f),r<0?(n[0]=-kn[0],n[1]=-kn[1],-o):(n[0]=kn[0],n[1]=kn[1],o)},zn=vr,Bn=pr,Cn=Ar,Dn=qn,Jn=[0,0];var Kn=function(r){var n;if(n=zn(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Cn(r,0);if(n>=2146435072)return NaN;switch(3&Dn(r,Jn)){case 0:return Cn(Jn[0],Jn[1]);case 1:return Bn(Jn[0],Jn[1]);case 2:return-Cn(Jn[0],Jn[1]);default:return-Bn(Jn[0],Jn[1])}},Qn=e;var Rn=function(r){return Qn(r/2)};var Xn=function(r){return Rn(r>0?r-1:r+1)},Zn=Math.sqrt,$n=j,rt=!0===fr?0:1,nt=new Y(1),tt=new $n(nt.buffer);var et=function(r,n){return nt[0]=r,tt[rt]=n>>>0,nt[0]},ut=et;var ft=function(r){return 0|r},it=Xn,ot=Qr,at=u,ct=Tr;var vt=function(r,n){return n===at?ct:n===ct?0:n>0?it(n)?r:0:it(n)?ot(ct,r):ct},yt=vr;var lt=function(r,n){return(2147483647&yt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},pt=o,wt=Tr;var At=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:pt(r)<1==(n===wt)?0:wt},Nt=j,bt=!0===fr?1:0,st=new Y(1),ht=new Nt(st.buffer);var Ut=function(r,n){return st[0]=r,ht[bt]=n>>>0,st[0]},mt=Ut;var dt=vr,It=ut,Ft=mt,St=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ht=[1,1.5],Ot=[0,.5849624872207642],gt=[0,1.350039202129749e-8];var Et=ut,jt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Tt=vr,Gt=mt,Mt=ut,Lt=ft,Wt=An,xt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Pt=r,Vt=Xn,Yt=xr,_t=e,kt=Zn,qt=o,zt=Br,Bt=ut,Ct=ft,Dt=u,Jt=Tr,Kt=vt,Qt=lt,Rt=At,Xt=function(r,n,t){var e,u,f,i,o,a,c,v,y,l,p,w,A,N,b,s,h,U,m,d;return U=0,t<1048576&&(U-=53,t=dt(n*=9007199254740992)),U+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?d=0:m<767610?d=1:(d=0,U+=1,t-=1048576),e=524288+(t>>1|536870912),o=(h=1/((n=Ft(n,t))+(c=Ht[d])))*((s=n-c)-(i=It(u=s*h,0))*(a=Ft(0,e+=d<<18))-i*(n-(a-c))),b=(f=u*u)*f*St(f),a=It(a=3+(f=i*i)+(b+=o*(i+u)),0),A=(p=-7.028461650952758e-9*(y=It(y=(s=i*a)+(h=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(h-(y-s))+gt[d])-((w=It(w=(l=.9617967009544373*y)+p+(v=Ot[d])+(N=U),0))-N-v-l),r[0]=w,r[1]=A,r},Zt=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*jt(u)))-((e=Et(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},$t=function(r,n,t){var e,u,f,i,o,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=f=Gt(0,e)),a=(o=.6931471805599453*(t-((f=Mt(f=t+n,0))-n))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*xt(f),r=Tt(c=1-(c*u/(u-2)-(a+c*a)-c)),r=Lt(r),c=(r+=v<<20>>>0)>>20<=0?Wt(c,v):Gt(c,r)},re=1e300,ne=[0,0],te=[0,0];var ee=function r(n,t){var e,u,f,i,o,a,c,v,y,l,p,w,A,N;if(Pt(n)||Pt(t))return NaN;if(zt(ne,t),o=ne[0],0===ne[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return kt(n);if(-.5===t)return 1/kt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Yt(t))return Rt(n,t)}if(zt(ne,n),i=ne[0],0===ne[1]){if(0===i)return Kt(n,t);if(1===n)return 1;if(-1===n&&Vt(t))return-1;if(Yt(n))return n===Dt?r(-0,-t):t<0?0:Jt}if(n<0&&!1===_t(t))return(n-n)/(n-n);if(f=qt(n),e=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Vt(t)?-1:1,u>1105199104){if(u>1139802112)return Qt(n,t);if(e<1072693247)return 1===c?a*re*re:1e-300*a*1e-300;if(e>1072693248)return 0===c?a*re*re:1e-300*a*1e-300;p=Zt(te,f)}else p=Xt(te,f,e);if(l=(t-(v=Bt(t,0)))*p[0]+t*p[1],y=v*p[0],zt(ne,w=l+y),A=Ct(ne[0]),N=Ct(ne[1]),A>=1083179008){if(0!=(A-1083179008|N))return a*re*re;if(l+8008566259537294e-32>w-y)return a*re*re}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|N))return 1e-300*a*1e-300;if(l<=w-y)return 1e-300*a*1e-300}return a*(w=$t(A,y,l))},ue=ee,fe=Math.ceil,ie=n,oe=fe;var ae=An,ce=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ve=r,ye=function(r){return r<0?oe(r):ie(r)},le=u,pe=Tr,we=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*ce(u),ae(1-(n-e*f/(2-f)-r),t)};var Ae=ue,Ne=function(r){var n;return ve(r)||r===pe?r:r===le?0:r>709.782712893384?pe:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=ye(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),we(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},be=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var se=r,he=e,Ue=i,me=o,de=n,Ie=Kn,Fe=Tr,Se=u,He=3.141592653589793,Oe=function(r){var n,t,e;return n=1+(n=1/r)*be(n),t=Ne(r),2.5066282746310007*(t=r>143.01608?(e=Ae(r,.5*r-.25))*(e/t):Ae(r,r-.5)/t)*n},ge=function(r,n){return n/((1+.5772156649015329*r)*r)},Ee=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var je=function(r){var n,t,e,u;if(he(r)&&r<0||r===Se||se(r))return NaN;if(0===r)return Ue(r)?Se:Fe;if(r>171.61447887182297)return Fe;if(r<-170.5674972726612)return 0;if((t=me(r))>33)return r>=0?Oe(r):(n=0==(1&(e=de(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Ie(He*u),n*He/(me(u)*Oe(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return ge(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return ge(r,u);u/=r,r+=1}return 2===r?u:u*Ee(r-=2)};var Te=r,Ge=vr,Me=mt,Le=Tr,We=u,xe=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},Pe=.6931471803691238,Ve=1.9082149292705877e-10;var Ye=function(r){var n,t,e,u,f,i,o,a,c,v,y,l;if(r===Le||Te(r))return r;if(r===We)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return Le}if(f=0|Ge(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+Pe,u=-Ve,l=-1):(e=r-Pe,u=Ve,l=1):(l=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(v=l|=0)*Pe,u=v*Ve),c=e-(r=e-u)-u;else{if(f<1016070144)return r;l=0}return y=(a=r*(n=.5*r))*(((i=1+a*xe(a))-(v=3-i*n))/(6-r*v)),0===l?r-(r*y-a):(y=r*(y-c)-c,y-=a,-1===l?.5*(r-y)-.5:1===l?r<-.25?-2*(y-(r+.5)):1+2*(r-y):l<=-2||l>56?(e=Ge(o=1-(y-r))+(l<<20)|0,(o=Me(o,e))-1):(v=1,l<20?o=(v=Me(v,e=1072693248-(2097152>>l)|0))-(y-r):(o=r-(y+(v=Me(v,e=1023-l<<20|0))),o+=1),e=Ge(o)+(l<<20)|0,Me(o,e)))};var _e=r,ke=vr,qe=mt,ze=Tr,Be=u,Ce=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},De=.6931471803691238,Je=1.9082149292705877e-10;var Ke=function(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||_e(r))return NaN;if(-1===r)return Be;if(r===ze)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=ke(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=ke(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=qe(c,1072693248|t):(v+=1,c=qe(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*De+(f+=v*Je):v*De-((a=n*(1-.6666666666666666*u))-(v*Je+f)-u):(a=(o=(i=u/(2+u))*i)*Ce(o),0===v?u-(n-i*(n+a)):v*De-(n-(i*(n+a)+(v*Je+f))-u))};var Qe=vr,Re=mt,Xe=r,Ze=u,$e=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ru=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},nu=.6931471803691238,tu=1.9082149292705877e-10;var eu=function(r){var n,t,e,u,f,i,o,a,c,v,y;return 0===r?Ze:Xe(r)||r<0?NaN:(u=0,(t=Qe(r))<1048576&&(u-=54,t=Qe(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=Re(r,t|1072693248^o))-1,(1048575&2+t)<3?0===i?0===u?0:u*nu+u*tu:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*nu-(f-u*tu-i)):(o=t-398458|0,a=440401-t|0,e=(v=(y=(c=i/(2+i))*c)*y)*$e(v),f=y*ru(v)+e,(o|=a)>0?(n=.5*i*i,0===u?i-(n-c*(n+f)):u*nu-(n-(c*(n+f)+u*tu)-i)):0===u?i-c*(i-f):u*nu-(c*(i-f)-u*tu-i))))};function uu(r,n,t){var e,u,f,i,o,a,c;if(r<2220446049250313e-31)return-eu(r);if(0===n||0===t)return 0;if(u=0,r>2){if(r>=3){do{t-=1,u+=eu(r-=1)}while(r>=3);t=r-2}return u+=.15896368026733398*(f=t*(r+1))+f*(i=0===(o=t)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-eu(r),t=n,n=r,r+=1),r<=1.5?(f=function(r){var n,t;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/t)}(n),u+=.5281534194946289*(e=n*t)+e*f):(f=t*n,i=function(r){var n,t;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),t=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/t)}(-t),u+=.45201730728149414*f+f*i)}function fu(n){return r(n)?NaN:n<0?n<-.5?je(1+n)-1:Ye(-Ke(n)+uu(n+2,n+1,n)):n<2?Ye(uu(n+1,n,n-1)):je(1+n)-1}export{fu as default};
//# sourceMappingURL=mod.js.map
