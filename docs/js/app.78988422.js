(function(e){function t(t){for(var r,o,i=t[0],c=t[1],a=t[2],f=0,b=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&b.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(b.length)b.shift()();return l.push.apply(l,a||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==u[c]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},u={app:0},l=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/yiyi-count/docs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var s=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bbc":function(e,t,n){"use strict";n("a028")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function u(e,t,n,u,l,o){const i=Object(r["l"])("Home");return Object(r["g"])(),Object(r["c"])(i)}function l(e,t,n,u,l,o){const i=Object(r["l"])("Jia"),c=Object(r["l"])("Jie");return Object(r["g"])(),Object(r["d"])(r["a"],null,[Object(r["f"])(i),Object(r["f"])(c)],64)}const o=e=>(Object(r["i"])("data-v-399aa932"),e=e(),Object(r["h"])(),e),i=o(()=>Object(r["e"])("h1",null,"个位数相加",-1)),c=["value"],a=o(()=>Object(r["e"])("span",null,"+",-1)),s=["value"],f=o(()=>Object(r["e"])("span",null,"=",-1)),b=["onOninput"],p=["innerHTML"];function O(e,t,n,u,l,o){return Object(r["g"])(),Object(r["d"])(r["a"],null,[i,(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(e.fors,t=>(Object(r["g"])(),Object(r["d"])("div",{key:t},[Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+t,value:e.random(1,10)},null,8,c),a,Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+e.ii,value:e.random(1,10)},null,8,s),f,Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+e.iii,class:"result",onOninput:n=>e.result(t)},null,40,b),Object(r["e"])("span",{innerHTML:e.svgxy,class:"svgs",ref_for:!0,ref:"i"+e.iiii},null,8,p)]))),128))],64)}var d={name:"Jia",data(){return{isdc:!1,ref1:null,ref11:null,ref111:null}},methods:{},mounted(){console.log(this.$refs.i1[0].value),this.ref1=this.$refs.i1,this.ref11=this.$refs.i11,this.ref111=this.$refs.i111},setup(){let e=Object(r["j"])({fors:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});return e.random=(e,t)=>Math.floor(Math.random()*(t-e))+e,{...Object(r["m"])(e)}}},j=(n("6478"),n("6b0d")),h=n.n(j);const v=h()(d,[["render",O],["__scopeId","data-v-399aa932"]]);var m=v;const y=e=>(Object(r["i"])("data-v-565831f6"),e=e(),Object(r["h"])(),e),g=y(()=>Object(r["e"])("h1",null,"减法",-1)),_=["value"],x=y(()=>Object(r["e"])("span",null,"-",-1)),w=["value"],M=y(()=>Object(r["e"])("span",null,"=",-1)),J=["onOninput"],$=y(()=>Object(r["e"])("span",null,null,-1));function k(e,t,n,u,l,o){return Object(r["g"])(),Object(r["d"])(r["a"],null,[g,(Object(r["g"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(e.fors,t=>(Object(r["g"])(),Object(r["d"])("div",{key:t},[Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+t,value:e.random(10,20)},null,8,_),x,Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+e.ii,value:e.random(1,10)},null,8,w),M,Object(r["e"])("input",{type:"text",ref_for:!0,ref:"i"+e.iii,class:"result",onOninput:e=>l.result(t)},null,40,J),$]))),128))],64)}var P={name:"Jie",data(){return{isdc:!1,ref1:null,ref11:null,ref111:null,result:null}},mounted(){console.log(this.$refs.i1[0].value),this.ref1=this.$refs.i1,this.ref11=this.$refs.i11,this.ref111=this.$refs.i111},watch:{result(e){this.ref111[e-1].value===this.ref1[e-1].value-this.ref11[e-1].value&&(this.isdc=!0)}},setup(){let e=Object(r["j"])({fors:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]});return e.random=(e,t)=>Math.floor(Math.random()*(t-e))+e,{...Object(r["m"])(e)}}};n("0bbc");const H=h()(P,[["render",k],["__scopeId","data-v-565831f6"]]);var S=H,T={name:"Home",components:{Jia:m,Jie:S}};const I=h()(T,[["render",l]]);var L=I,A={name:"App",components:{Home:L}};const q=h()(A,[["render",u]]);var z=q;Object(r["b"])(z).mount("#app")},6478:function(e,t,n){"use strict";n("f451")},a028:function(e,t,n){},f451:function(e,t,n){}});
//# sourceMappingURL=app.78988422.js.map