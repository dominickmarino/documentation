(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1ksG":function(e,r,t){e.exports=t.p+"static/kerberos-agent-038e3be87895baff54b7cefbbcd1810f.png"},exYj:function(e,r,t){e.exports=t.p+"static/kerberos-storage-5c022d304147337bffcb38212c0456d1.png"},gXG8:function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return s})),t.d(r,"default",(function(){return l}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var o=t("/FXl"),n=t("TjRS");t("aD51");function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/how.mdx"}});var i={_frontmatter:s},c=n.a;function l(e){var r=e.components,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(o.b)(c,a({},i,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"When you install Kerberos Open Source or Kerberos Enterprise we will refer to it as the Kerberos Agent. A Kerberos Agent, is a software solution that consist of two pieces: Front-End and Back-End. The Back-End processes the video stream of a single surveillance camera, makes recordings and takes actions (for example sending notifications). The Front-End allows you to review recordings, and configure the Back-End."),Object(o.b)("p",null,Object(o.b)("img",{alt:"architecture kerberos agent",src:t("tqzN")})),Object(o.b)("h3",{id:"front-end"},"Front-End"),Object(o.b)("p",null,"The Kerberos Agent ships with a web interface (Front-End) and a video processing engine (Back-End). The Front-End allows the user to modify specific settings, and if Kerberos Open Source, watch recordings in a easy-to-use interface; The Front-End for ",Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Kerberos Enterprise")," is only for configuration purposes only."),Object(o.b)("h3",{id:"back-end"},"Back-End"),Object(o.b)("p",null,"The Back-End piece of the Kerberos Agent is a service that processes the camera feed with computer vision algorithms to detect motion, and makes recordings and/or execute specific actions. Kerberos Enterprise supports any type of IP-camera (RTSP/ONVIF), and Kerberos Open Source also adds support for USB (V4L2) and the popular Raspberry Pi camera."),Object(o.b)("p",null,"Depending on which Kerberos Agent, Kerberos Open Source or Kerberos Enterprise, you will have different installation methods. If you would like to learn more about the Kerberos Agent, have a look in the related sections: ",Object(o.b)("a",a({parentName:"p"},{href:"/opensource/introduction"}),"Open Source"),", ",Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Enterprise"),"."),Object(o.b)("h2",{id:"open-source-vs-enterprise"},"Open Source vs Enterprise"),Object(o.b)("p",null,"The Kerberos project started as an Open Source project, with a main focus on low-cost devices such as the Raspberry Pi. Later on the Open Source version was bundled inside the Docker technology so that it was easier to distribute. Anyone can use the Open Source version for personal usage."),Object(o.b)("p",null,"Enterprises are more demanding, and have a lot of surveillance cameras, therefore they need a scalable surveillance system. The ",Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Enterprise edition")," of Kerberos allows you to operate a video surveillance cluster (Kubernetes) on-premise or in the cloud (AWS/GCP/Azure)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"kerberos agent oss enterprise",src:t("1ksG")})),Object(o.b)("p",null,"The Open Source and Enterprise edition are significantly different from a source code point of view. The ",Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Enterprise edition")," is a complete rewrite of the Open Source version, and got all the best practices we discovered over the years implemented. Both version are and will remain updated in the future."),Object(o.b)("h2",{id:"storage"},"Storage"),Object(o.b)("p",null,"Users or Enteprises which only have a few surveillance cameras to manage, probably will be fine with Kerberos Open Source. On top of that they might include ",Object(o.b)("a",a({parentName:"p"},{href:"/cloud"}),"Kerberos Cloud")," for remote access and monitoring."),Object(o.b)("p",null,"On the other hand if you plan to manage a larger network of surveillance cameras, you will have to look into ",Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Kerberos Enterprise"),". Backed up with Kubernetes, Kerberos Enterprise, will give you the real super powers to your scale surveillance camera landscape. Kerberos Enterprise comes with a Front-End to manage and scale your deployments inside a Kubernetes Cluster."),Object(o.b)("p",null,Object(o.b)("a",a({parentName:"p"},{href:"/enterprise/introduction"}),"Kerberos Enterprise")," leverages a service called, ",Object(o.b)("a",a({parentName:"p"},{href:"/storage/introduction"}),"Kerberos Storage"),", for central and hybrid storage. Kerberos Storage implements the concept of BYOC (Bring Your Own Cloud). By selecting a cloud provider (AWS, GCP, AZURE) or on-premise (Minio) you can bring your recordings where you them to be."),Object(o.b)("p",null,"In addition to the concept of BYOC, Kerberos Storage enables you to connect to Kerberos Cloud (with your own storage), send events to message brokers (such as Kafka or SQS) and enables you to build custom apps or services (such as a custom machine learning service)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Architecture Storage",src:t("exYj")})),Object(o.b)("h2",{id:"cloud"},"Cloud"),Object(o.b)("p",null,"When installing a Kerberos Agent inside your local network, it's possible to review your activity by using the agent its web interface. By all network principles, having a local setup, you will not be able to access the web interface from the cloud (outside your local network). On top of that, the Kerberos Agent doesn't come with a consolidated overview. This means that you will need to open multiple web interfaces, one for each connected surveillance camera. To simplify and resolve all of these challenges, ",Object(o.b)("a",a({parentName:"p"},{href:"/cloud"}),"Kerberos Cloud")," was developed."),Object(o.b)("p",null,Object(o.b)("img",{alt:"cloud",src:t("l8fz")})))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/how.mdx"}}),l.isMDXComponent=!0},l8fz:function(e,r,t){e.exports=t.p+"static/kerberos-architecture-bdd61b7e193606f8d6e9c657ea119c8e.png"},tqzN:function(e,r,t){e.exports=t.p+"static/kerberos-agent-structure-646b32339b07c9da8e5e28ebd9c3f7a3.png"}}]);
//# sourceMappingURL=component---src-how-mdx-862fec3a25977edfefb0.js.map