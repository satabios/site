(self.webpackChunksatabios=self.webpackChunksatabios||[]).push([[527],{226:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(5414),l=a(9),i=a(537),d=a(355),c=a(6826),o=a(9086),s=a(3082),m=l.ZP.div.withConfig({displayName:"archive__StyledTableContainer",componentId:"sc-1wbk4cv-0"})(["margin:100px -20px;@media (max-width:768px){margin:50px -10px;}table{width:100%;border-collapse:collapse;.hide-on-mobile{@media (max-width:768px){display:none;}}tbody tr{&:hover,&:focus{background-color:var(--light-navy);}}th,td{padding:10px;text-align:left;&:first-child{padding-left:20px;@media (max-width:768px){padding-left:10px;}}&:last-child{padding-right:20px;@media (max-width:768px){padding-right:10px;}}svg{width:20px;height:20px;}}tr{cursor:default;td:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius);}td:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);}}td{&.year{padding-right:20px;@media (max-width:768px){padding-right:10px;font-size:var(--fz-sm);}}&.title{padding-top:15px;padding-right:20px;color:var(--lightest-slate);font-size:var(--fz-xl);font-weight:600;line-height:1.25;}&.company{font-size:var(--fz-lg);white-space:nowrap;}&.tech{font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;.separator{margin:0 5px;}span{display:inline-block;}}&.links{min-width:100px;div{display:flex;align-items:center;a{",";flex-shrink:0;}a + a{margin-left:10px;}}}}}"],(function(e){return e.theme.mixins.flexCenter}));t.default=function(e){var t=e.location,a=e.data.allMarkdownRemark.edges,l=(0,r.useRef)(null),h=(0,r.useRef)(null),p=(0,r.useRef)([]),u=(0,s.Tb)();return(0,r.useEffect)((function(){u||(d.Z.reveal(l.current,(0,i.srConfig)()),d.Z.reveal(h.current,(0,i.srConfig)(200,0)),p.current.forEach((function(e,t){return d.Z.reveal(e,(0,i.srConfig)(10*t))})))}),[]),r.createElement(c.Ar,{location:t},r.createElement(n.q,{title:"Archive"}),r.createElement("main",null,r.createElement("header",{ref:l},r.createElement("h1",{className:"big-heading"},"Archive"),r.createElement("p",{className:"subtitle"},"A big list of things I’ve worked on")),r.createElement(m,{ref:h},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Year"),r.createElement("th",null,"Title"),r.createElement("th",{className:"hide-on-mobile"},"Made at"),r.createElement("th",{className:"hide-on-mobile"},"Built with"),r.createElement("th",null,"Link"))),r.createElement("tbody",null,a.length>0&&a.map((function(e,t){var a=e.node.frontmatter,n=a.date,l=a.github,i=a.external,d=a.title,c=a.tech,s=a.company;return r.createElement("tr",{key:t,ref:function(e){return p.current[t]=e}},r.createElement("td",{className:"overline year"},""+new Date(n).getFullYear()),r.createElement("td",{className:"title"},d),r.createElement("td",{className:"company hide-on-mobile"},s?r.createElement("span",null,s):r.createElement("span",null,"—")),r.createElement("td",{className:"tech hide-on-mobile"},c.length>0&&c.map((function(e,t){return r.createElement("span",{key:t},e,"",t!==c.length-1&&r.createElement("span",{className:"separator"},"·"))}))),r.createElement("td",{className:"links"},r.createElement("div",null,i&&r.createElement("a",{href:i,"aria-label":"External Link"},r.createElement(o.JO,{name:"External"})),l&&r.createElement("a",{href:l,"aria-label":"GitHub Link"},r.createElement(o.JO,{name:"GitHub"})))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-778e6be2b8c344688114.js.map