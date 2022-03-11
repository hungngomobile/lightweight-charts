"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9950],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"api/interfaces/BarStyleOptions",id:"api/interfaces/BarStyleOptions",title:"Interface: BarStyleOptions",description:"Represents style options for a bar series.",source:"@site/docs/api/interfaces/BarStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarStyleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/BarStyleOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BarStyleOptions",title:"Interface: BarStyleOptions",sidebar_label:"BarStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},u={},c=[{value:"Properties",id:"properties",level:2},{value:"upColor",id:"upcolor",level:3},{value:"downColor",id:"downcolor",level:3},{value:"openVisible",id:"openvisible",level:3},{value:"thinBars",id:"thinbars",level:3}],f={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents style options for a bar series."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"upcolor"},"upColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"upColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of rising bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"downcolor"},"downColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"downColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Color of falling bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"openvisible"},"openVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"openVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Show open lines on bars."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"thinbars"},"thinBars"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"thinBars"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Show bars as sticks."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,i.kt)("inlineCode",{parentName:"p"},"true")))}d.isMDXComponent=!0}}]);