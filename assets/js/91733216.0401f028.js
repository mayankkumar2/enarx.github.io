"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5218],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={slug:"2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust",title:"Understanding TEE Containers, Easy to Use? Hard to Trust",author:"Weijie Liu, Hongbo Chen, XiaoFeng Wang, Zhi Li, Danfeng Zhang, Wenhao Wang, Haixu Tang",tags:["Paper"]},u=void 0,c={permalink:"/resources/2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust",source:"@site/resources/2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust.md",title:"Understanding TEE Containers, Easy to Use? Hard to Trust",description:"As an emerging technique for confidential computing, trusted execution environment (TEE) receives a lot of attention. To better develop, deploy, and run secure applications on a TEE platform such as Intel's SGX, both academic and industrial teams have devoted much effort to developing reliable and convenient TEE containers. In this paper, we studied the isolation strategies of 15 existing TEE containers to protect secure applications from potentially malicious operating systems (OS) or untrusted applications, using a semi-automatic approach combining a feedback-guided analyzer with manual code review. Our analysis reveals the isolation protection each of these TEE containers enforces, and their security weaknesses. We observe that none of the existing TEE containers can fulfill the goal they set, due to various pitfalls in their design and implementation. We report the lessons learnt from our study for guiding the development of more secure containers, and further discuss thetrend of TEE container designs. We also release our analyzer that helps evaluate the container middleware both from the enclave and from the kernel.",date:"2021-09-03T00:00:00.000Z",formattedDate:"September 3, 2021",tags:[{label:"Paper",permalink:"/resources/tags/paper"}],truncated:!1,authors:[{name:"Weijie Liu, Hongbo Chen, XiaoFeng Wang, Zhi Li, Danfeng Zhang, Wenhao Wang, Haixu Tang"}],frontMatter:{slug:"2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust",title:"Understanding TEE Containers, Easy to Use? Hard to Trust",author:"Weijie Liu, Hongbo Chen, XiaoFeng Wang, Zhi Li, Danfeng Zhang, Wenhao Wang, Haixu Tang",tags:["Paper"]},prevItem:{title:"2021-09-14 Outreach Meeting",permalink:"/resources/2021/09/14/outreach-meeting"},nextItem:{title:"2021-08-31 Outreach Meeting",permalink:"/resources/2021/08/31/outreach-meeting"}},l={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As an emerging technique for confidential computing, trusted execution environment (TEE) receives a lot of attention. To better develop, deploy, and run secure applications on a TEE platform such as Intel's SGX, both academic and industrial teams have devoted much effort to developing reliable and convenient TEE containers. In this paper, we studied the isolation strategies of 15 existing TEE containers to protect secure applications from potentially malicious operating systems (OS) or untrusted applications, using a semi-automatic approach combining a feedback-guided analyzer with manual code review. Our analysis reveals the isolation protection each of these TEE containers enforces, and their security weaknesses. We observe that none of the existing TEE containers can fulfill the goal they set, due to various pitfalls in their design and implementation. We report the lessons learnt from our study for guiding the development of more secure containers, and further discuss thetrend of TEE container designs. We also release our analyzer that helps evaluate the container middleware both from the enclave and from the kernel."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Source"),": arXiv.org"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link"),": ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2109.01923"},"https://arxiv.org/abs/2109.01923")))}f.isMDXComponent=!0}}]);