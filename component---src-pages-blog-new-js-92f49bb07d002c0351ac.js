"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[687],{7254:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(7294),r=n(1883),a=n(754),o=n(3738),c=n(3730),u=n(5814);function s(){const e=l.useRef({}),[t,n]=l.useState([]),[s,p]=l.useState([]),[h,m]=l.useState(!0);l.useState((()=>{}),[]);return l.createElement(a.Z,null,l.createElement("h1",null,"New Blog"),l.createElement(r.Link,{to:"/blog"},"Blog Home"),l.createElement(o.Z,null,l.createElement(c.Z,{ref:e},l.createElement(c.Z.Group,{controlId:"topic"},l.createElement(c.Z.Label,null,"Topic"),l.createElement(c.Z.Control,{type:"text",placeholder:"Enter topic"})),l.createElement(c.Z.Group,{controlId:"content"},l.createElement(c.Z.Label,null,"Content"),l.createElement(c.Z.Control,{as:"textarea",rows:3})),l.createElement(c.Z.Group,{controlId:"author"},l.createElement(c.Z.Label,null,"Author"),l.createElement(c.Z.Control,{type:"text",placeholder:"Enter author"})),l.createElement(u.Z,{variant:"dark",onClick:t=>{t.preventDefault();const n={topic:e.current.topic.value,content:e.current.content.value,author:e.current.author.value};console.log(n),fetch("https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{console.log("Created",e),alert("Created")}))}},"Save"))))}}}]);
//# sourceMappingURL=component---src-pages-blog-new-js-92f49bb07d002c0351ac.js.map