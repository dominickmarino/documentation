(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{DeBP:function(e,t,r){e.exports=r.p+"static/kerberos-agent-architecture-kubernetes-cloud-0b767893f58e70cfd14d14907e49d961.png"},dnQV:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return o})),r.d(t,"default",(function(){return c}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk"),r("mXGw");var n=r("/FXl"),i=r("TjRS");r("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/enterprise/index.mdx"}});var s={_frontmatter:o},l=i.a;function c(e){var t=e.components,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["components"]);return Object(n.b)(l,a({},s,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"enterprise"},"Enterprise"),Object(n.b)("p",null,"Over the years Kerberos evolved into a mature and stable solution. Lots of people and companies started to adopt the system, and requested enhancements. Despite the fact that Kerberos Open Source is stable and feature rich, every\nsolution has its limitations, especially if you aim to scale it."),Object(n.b)("p",null,"That being said, Kerberos Open Source is perfect when monitoring a limited set of surveillance cameras, but it doesn't scale well if you plan to monitor dozens or hundreds of surveillance cameras. Although Kerberos Open Source ships\nas a docker image, it has no high availability or fail over functionality. Due to these reasons we have developed Kerberos Enterprise, which is suitable for scaling against your ever growing video surveillance landscape, and keeps them up and running in whatever situation."),Object(n.b)("br",null),Object(n.b)("div",{className:"embed-container"},Object(n.b)("iframe",{src:"https://player.vimeo.com/video/405037695",width:"640",height:"400",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(n.b)("p",null,"To provide our customer with the high availability and fail over requirements they have, Kerberos Enterprise was built on top of Kubernetes (k8s). This container orchestrator allows us to scale a video surveillance landscape horizontally, and deliver a never-seen high available video surveillance system."),Object(n.b)("p",null,Object(n.b)("img",{alt:"architecture kubernetes",src:r("mQAr")})),Object(n.b)("p",null,"Kerberos Enterprise is installed inside a Kubernetes cluster. It will create pods/deployments for every surveillance camera you want to monitor. Kubernetes will scale and distrubute these pods across your nodes (VM's/Bare metal machines)."),Object(n.b)("p",null,"Nodes inside your cluster can fail or crash, Kubernetes will make sure the Kerberos pods running on the failed nodes will be deployed to healthy node. This, to make sure the monitoring of your video surveillance cameras continues seamlessly."),Object(n.b)("p",null,"By having the power to add nodes to your cluster, you can anticipate to the ever growing need of your surveillance cameras. With the Kubernetes tools you can monitor your cluster and get into the details."),Object(n.b)("h2",{id:"cloud-or-on-premise"},"Cloud or on premise"),Object(n.b)("p",null,"You install Kerberos Enterprise inside a Kubernetes cluster, but there are no limitations where this cluster will be actually running. This means that whatever security policy you have within your company, you can run it where you want: on-premise, public cloud, private cloud, etc."),Object(n.b)("p",null,Object(n.b)("img",{alt:"architecture kubernetes",src:r("DeBP")})),Object(n.b)("h2",{id:"licensing"},"Licensing"),Object(n.b)("p",null,"Kerberos Enterprise is publicly available but ",Object(n.b)("strong",{parentName:"p"},"requires a license key")," to operate correctly. A license key can be requested by contacting ",Object(n.b)("strong",{parentName:"p"},"cedric@verstraeten.io"),", you can send an email to have more information about the pricing."))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/enterprise/index.mdx"}}),c.isMDXComponent=!0},mQAr:function(e,t,r){e.exports=r.p+"static/kerberos-agent-architecture-kubernetes-2693294b0a8fd42749e95c84cd06eaff.png"}}]);
//# sourceMappingURL=component---src-enterprise-index-mdx-5fdf8ed88dc566bb8516.js.map