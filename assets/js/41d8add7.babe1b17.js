"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8722],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13648:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"2021-08-31 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},l="Present",c={permalink:"/resources/2021/08/31/outreach-meeting",source:"@site/resources/2021-08-31-outreach-meeting.md",title:"2021-08-31 Outreach Meeting",description:"* Nick",date:"2021-08-31T00:00:00.000Z",formattedDate:"August 31, 2021",tags:[{label:"Meeting",permalink:"/resources/tags/meeting"}],truncated:!1,authors:[{name:"Enarx",imageURL:"https://github.com/enarxbot.png",key:"enarx"}],frontMatter:{title:"2021-08-31 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},prevItem:{title:"Understanding TEE Containers, Easy to Use? Hard to Trust",permalink:"/resources/2021-09-03-understanding-tee-containers-easy-to-use-hard-to-trust"},nextItem:{title:"Analyzing Trends of Commoditized Confidential Computing Frameworks for Implementing Trusted Execution Environment Applications",permalink:"/resources/2021-08-30-analyzing-trends-of-commoditized-confidential-computing-frameworks-for-implementing-trusted-execution-environment-applications"}},u={authorsImageUrls:[void 0]},p=[{value:"General discussion",id:"general-discussion",level:2},{value:"Meetings",id:"meetings",level:3},{value:"Blog",id:"blog",level:3},{value:"CCC",id:"ccc",level:2},{value:"Outreachy",id:"outreachy",level:3},{value:"Hacktoberfest",id:"hacktoberfest",level:3},{value:"Events",id:"events",level:2},{value:"Enigma / Usenix",id:"enigma--usenix",level:3},{value:"Cloud Security Alliance",id:"cloud-security-alliance",level:3},{value:"Enarx Sticker Design",id:"enarx-sticker-design",level:3}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nick"),(0,i.kt)("li",{parentName:"ul"},"Shaun")),(0,i.kt)("h1",{id:"agenda"},"Agenda"),(0,i.kt)("h2",{id:"general-discussion"},"General discussion"),(0,i.kt)("h3",{id:"meetings"},"Meetings"),(0,i.kt)("p",null,"Thanks to axel, meetings are now using Jitsi so anyone can participate (no need to request access):\n",(0,i.kt)("a",{parentName:"p",href:"https://meet.jit.si/EnarxOutreach"},"https://meet.jit.si/EnarxOutreach")),(0,i.kt)("h3",{id:"blog"},"Blog"),(0,i.kt)("p",null,"We'll likely be using ",(0,i.kt)("a",{parentName:"p",href:"https://ghost.org/features/"},"Ghost")," as the blogging platform for Enarx. It's open source, based on Node.js, and has managed hosting. We also looked into WordPress - which is the \"standard - but one key advantage of Ghost is that it provides native support for email newsletters. It manages members and subscriptions and allows you to segment the user base. Other advantages of Ghost include: a) native markdown support, b) a more minimalist approach, and c) a more modern architecture. It also provides webhooks and a REST API for integrations. By the next meeting, we should have the Enarx Blog up and running."),(0,i.kt)("h2",{id:"ccc"},"CCC"),(0,i.kt)("p",null,"Ashley and Ben both added the Outreachy proposal to the agenda of the CCC Outreach and TAC meetings. The TAC will make a decision by September 9 (TAC's next meeting). The Outreachy community application deadline is September 10."),(0,i.kt)("h3",{id:"outreachy"},"Outreachy"),(0,i.kt)("p",null,"Nick and Shaun agreed that we should have the Outreachy application ready for both cases, where CCC supports us, or where we apply on our own as Enarx.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/outreach/issues/15"},"https://github.com/enarx/outreach/issues/15")),(0,i.kt)("h3",{id:"hacktoberfest"},"Hacktoberfest"),(0,i.kt)("p",null,"We should start planning for Hacktoberfest, with a focus on building simple demos to demonstrate Enarx. Nick will work with Will next week to get this going:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/outreach/issues/14"},"https://github.com/enarx/outreach/issues/14")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"enigma--usenix"},"Enigma / Usenix"),(0,i.kt)("p",null,"Proposal sent to Enigma successfully:\n",(0,i.kt)("a",{parentName:"p",href:"https://www.usenix.org/conference/enigma2021/call-for-participation"},"https://www.usenix.org/conference/enigma2021/call-for-participation")),(0,i.kt)("h3",{id:"cloud-security-alliance"},"Cloud Security Alliance"),(0,i.kt)("p",null,"Rolling CFP till 2021-December-31. Let's create a proposal in October/November.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b"},"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b")),(0,i.kt)("h3",{id:"enarx-sticker-design"},"Enarx Sticker Design"),(0,i.kt)("p",null,"Added Enarx sticker design to the image assets. Who's traveling to Open Source Summit? Given COVID and the Delta variant, we don't think we'll make it. Should we send stickers to people anyways? To whom? Perhaps a marketing campaign to go along with the CCC Survey Report.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx.github.io/tree/master/assets/images"},"https://github.com/enarx/enarx.github.io/tree/master/assets/images")))}d.isMDXComponent=!0}}]);