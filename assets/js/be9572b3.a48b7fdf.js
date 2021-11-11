"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(i),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return i?n.createElement(k,a(a({ref:t},c),{},{components:i})):n.createElement(k,a({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6476:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=i(7462),r=i(3366),l=(i(7294),i(3905)),a=["components"],o={id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/SeriesOptionsCommon",id:"api/interfaces/SeriesOptionsCommon",isDocsHomePage:!1,title:"Interface: SeriesOptionsCommon",description:"Represents options common for all types of series",source:"@site/docs/api/interfaces/SeriesOptionsCommon.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesOptionsCommon",permalink:"/lightweight-charts/api/interfaces/SeriesOptionsCommon",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SeriesOptionsCommon",title:"Interface: SeriesOptionsCommon",sidebar_label:"SeriesOptionsCommon",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SeriesMarker",permalink:"/lightweight-charts/api/interfaces/SeriesMarker"},next:{title:"SeriesOptionsMap",permalink:"/lightweight-charts/api/interfaces/SeriesOptionsMap"}},c=[{value:"Properties",id:"properties",children:[{value:"autoscaleInfoProvider",id:"autoscaleinfoprovider",children:[],level:3},{value:"baseLineColor",id:"baselinecolor",children:[],level:3},{value:"baseLineStyle",id:"baselinestyle",children:[],level:3},{value:"baseLineVisible",id:"baselinevisible",children:[],level:3},{value:"baseLineWidth",id:"baselinewidth",children:[],level:3},{value:"lastValueVisible",id:"lastvaluevisible",children:[],level:3},{value:"priceFormat",id:"priceformat",children:[],level:3},{value:"priceLineColor",id:"pricelinecolor",children:[],level:3},{value:"priceLineSource",id:"pricelinesource",children:[],level:3},{value:"priceLineStyle",id:"pricelinestyle",children:[],level:3},{value:"priceLineVisible",id:"pricelinevisible",children:[],level:3},{value:"priceLineWidth",id:"pricelinewidth",children:[],level:3},{value:"priceScaleId",id:"pricescaleid",children:[],level:3},{value:"scaleMargins",id:"scalemargins",children:[],level:3},{value:"title",id:"title",children:[],level:3},{value:"visible",id:"visible",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents options common for all types of series"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"autoscaleinfoprovider"},"autoscaleInfoProvider"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"autoscaleInfoProvider"),": ",(0,l.kt)("a",{parentName:"p",href:"../#autoscaleinfoprovider"},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaleInfoProvider"))),(0,l.kt)("p",null,"Override the default ",(0,l.kt)("a",{parentName:"p",href:"AutoscaleInfo"},"AutoscaleInfo")," provider."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"baselinecolor"},"baseLineColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"baseLineColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Color of the base line in ",(0,l.kt)("inlineCode",{parentName:"p"},"IndexedTo100")," mode."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"baselinestyle"},"baseLineStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"baseLineStyle"),": ",(0,l.kt)("a",{parentName:"p",href:"../enums/LineStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.kt)("p",null,"Base line style. Suitable for percentage and indexedTo100 scales."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"baselinevisible"},"baseLineVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"baseLineVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Visibility of base line. Suitable for percentage and ",(0,l.kt)("inlineCode",{parentName:"p"},"IndexedTo100")," scales."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"baselinewidth"},"baseLineWidth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"baseLineWidth"),": ",(0,l.kt)("a",{parentName:"p",href:"../#linewidth"},(0,l.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.kt)("p",null,"Base line width. Suitable for percentage and ",(0,l.kt)("inlineCode",{parentName:"p"},"IndexedTo10")," scales."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"lastvaluevisible"},"lastValueVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"lastValueVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Visibility of the label with the latest visible price on the price scale."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"priceformat"},"priceFormat"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceFormat"),": ",(0,l.kt)("a",{parentName:"p",href:"../#priceformat"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceFormat"))),(0,l.kt)("p",null,"Price format."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricelinecolor"},"priceLineColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceLineColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Color of the price line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricelinesource"},"priceLineSource"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceLineSource"),": ",(0,l.kt)("a",{parentName:"p",href:"../enums/PriceLineSource"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceLineSource"))),(0,l.kt)("p",null,"The source to use for the value of the price line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricelinestyle"},"priceLineStyle"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceLineStyle"),": ",(0,l.kt)("a",{parentName:"p",href:"../enums/LineStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,l.kt)("p",null,"Price line style."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricelinevisible"},"priceLineVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceLineVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the price line. Price line is a horizontal line indicating the last price of the series."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricelinewidth"},"priceLineWidth"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"priceLineWidth"),": ",(0,l.kt)("a",{parentName:"p",href:"../#linewidth"},(0,l.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,l.kt)("p",null,"Width of the price line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"pricescaleid"},"priceScaleId"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"priceScaleId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Target price scale to bind new series to"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"scalemargins"},"scaleMargins"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"scaleMargins"),": ",(0,l.kt)("a",{parentName:"p",href:"PriceScaleMargins"},(0,l.kt)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"deprecated"))," Use priceScale method of the series to apply options instead."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},"title"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"title"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Title of the series. This label is placed with price axis label"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"visible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Show the series."))}d.isMDXComponent=!0}}]);