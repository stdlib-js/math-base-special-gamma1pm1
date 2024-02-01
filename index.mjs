// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.1.1-esm/index.mjs";function m(e,s,t){var i,m,a,d,l,o,p;if(e<r)return-n(e);if(0===s||0===t)return 0;if(m=0,e>2){if(e>=3){do{t-=1,m+=n(e-=1)}while(e>=3);t=e-2}return m+=.15896368026733398*(a=t*(e+1))+a*(d=0===(l=t)?-.01803556856784494:((l<0?-l:l)<=1?(o=l*(.02512664961998968+l*(.049410315156753225+l*(.0172491608709614+l*(l*(l*(0*l-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,p=1+l*(1.962029871977952+l*(1.4801966942423133+l*(.5413914320717209+l*(.09885042511280101+l*(.008213096746488934+l*(.00022493629192211576+-2.2335276320861708e-7*l))))))):(o=0+(l=1/l)*(l*(l*(l*(.0172491608709614+l*(.049410315156753225+l*(.02512664961998968+-.01803556856784494*l)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),p=l*(.00022493629192211576+l*(.008213096746488934+l*(.09885042511280101+l*(.5413914320717209+l*(1.4801966942423133+l*(1.962029871977952+1*l))))))-2.2335276320861708e-7),o/p))}return e<1&&(m+=-n(e),t=s,s=e,e+=1),e<=1.5?(a=function(e){var s,t;return 0===e?.04906224540690395:((e<0?-e:e)<=1?(s=.04906224540690395+e*(e*(e*(e*(e*(-.0010034668769627955*e-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),t=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+.001957681026011072*e)))))):(s=(e=1/e)*(e*(e*(e*(e*(.04906224540690395*e-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,t=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+1*e)))))),s/t)}(s),m+=.5281534194946289*(i=s*t)+i*a):(a=t*s,d=function(e){var s,t;return 0===e?-.029232972183027003:((e<0?-e:e)<=1?(s=e*(.14421626775719232+e*(e*(.05428096940550536+e*(e*(.0004311713426792973+0*e)-.008505359768683364))-.14244039073863127))-.029232972183027003,t=1+e*(e*(.846973248876495+e*(e*(.02558279715597587+e*(-8.271935218912905e-7*e-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(s=0+(e=1/e)*(.0004311713426792973+e*(e*(.05428096940550536+e*(e*(.14421626775719232+-.029232972183027003*e)-.14244039073863127))-.008505359768683364)),t=e*(e*(.02558279715597587+e*(e*(.846973248876495+e*(1*e-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),s/t)}(-t),m+=.45201730728149414*a+a*d)}function a(n){return i(n)?NaN:n<0?n<-.5?e(1+n)-1:s(-t(n)+m(n+2,n+1,n)):n<2?s(m(n+1,n,n-1)):e(1+n)-1}export{a as default};
//# sourceMappingURL=index.mjs.map