(self.webpackChunksatabios=self.webpackChunksatabios||[]).push([[527],{226:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(5414),n=a(9),i=a(537),d=a(355),c=a(6826),o=a(9086),m=a(3082),s=n.ZP.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-1wbk4cv-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges,n=(0,r.useRef)(null),h=(0,r.useRef)(null),u=(0,r.useRef)([]),p=(0,m.Tb)();return(0,r.useEffect)((function(){p||(d.Z.reveal(n.current,(0,i.srConfig)()),d.Z.reveal(h.current,(0,i.srConfig)(200,0)),u.current.forEach((function(e,t){return d.Z.reveal(e,(0,i.srConfig)(10*t))})))}),[]),r.createElement(c.Ar,{location:t},r.createElement(l.q,{title:"Archive"}),r.createElement("main",null,r.createElement("header",{ref:n},r.createElement("h1",{className:"big-heading"},"Archive"),r.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),r.createElement(s,{ref:h},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Year"),r.createElement("th",null,"Title"),r.createElement("th",{className:"hide-on-mobile"},"Made at"),r.createElement("th",{className:"hide-on-mobile"},"Built with"),r.createElement("th",null,"Link"))),r.createElement("tbody",null,a.length>0&&a.map((function(e,t){var a=e.node.frontmatter,l=a.date,n=a.github,i=a.external,d=a.title,c=a.company;return r.createElement("tr",{key:t,ref:function(e){return u.current[t]=e}},r.createElement("td",{className:"overline year"},""+new Date(l).getFullYear()),r.createElement("td",{className:"title"},d),r.createElement("td",{className:"company hide-on-mobile"},c?r.createElement("span",null,c):r.createElement("span",null,"—")),r.createElement("td",{className:"links"},r.createElement("div",null,i&&r.createElement("a",{href:i,"aria-label":"External Link"},r.createElement(o.JO,{name:"External"})),n&&r.createElement("a",{href:n,"aria-label":"GitHub Link"},r.createElement(o.JO,{name:"GitHub"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-81d3dc686eac295a03af.js.map