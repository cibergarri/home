(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65077,e=>{e.v(n=>Promise.all(["static/chunks/3iz3wkooq2twu.js","static/chunks/1nq-jnmc4uqd7.js"].map(n=>e.l(n))).then(()=>n(60044)))},41518,e=>{"use strict";let n={linkedin:"https://www.linkedin.com/in/javiergarridoiglesias/",github:"https://www.github.com/cibergarri",x:"https://x.com/cibergarri81"},t=[{key:"linkedin",label:"LinkedIn",href:n.linkedin,path:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},{key:"github",label:"GitHub",href:n.github,path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},{key:"x",label:"X",href:n.x,path:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"}];e.s(["y",0,n,"L",0,t])},78622,e=>{"use strict";var n=e.i(43476),t=e.i(71645),i=e.i(18566);e.i(85269);var r=e.i(22831),a=e.i(19988),o=e.i(41518);let l=[["     ██╗ █████╗ ██╗   ██╗██╗███████╗██████╗","     ██║██╔══██╗██║   ██║██║██╔════╝██╔══██╗","     ██║███████║██║   ██║██║█████╗  ██████╔╝","██   ██║██╔══██║╚██╗ ██╔╝██║██╔══╝  ██╔══██╗","╚█████╔╝██║  ██║ ╚████╔╝ ██║███████╗██║  ██║"," ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝╚═╝  ╚═╝"],[" ██████╗  █████╗ ██████╗ ██████╗ ██╗██████╗  ██████╗","██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗██╔═══██╗","██║  ███╗███████║██████╔╝██████╔╝██║██║  ██║██║   ██║","██║   ██║██╔══██║██╔══██╗██╔══██╗██║██║  ██║██║   ██║","╚██████╔╝██║  ██║██║  ██║██║  ██║██║██████╔╝╚██████╔╝"," ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝  ╚═════╝"]];var s=e.i(97053);let c="#33ff66",d=s.U.div.withConfig({displayName:"style__Window",componentId:"sc-10b80736-0"})`
  --c-primary: ${c};
  --c-text: ${c};
  --c-muted: #1fa347;
  --c-accent: #b6ffcb;
  --c-heart: #ff4060;
  --c-background: #000;
  --c-line: rgba(51, 255, 102, 0.28);
  --c-line-strong: rgba(51, 255, 102, 0.6);
  --c-chip: rgba(51, 255, 102, 0.08);
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: #000;
  color: ${c};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  text-shadow: 0 0 4px rgba(51, 255, 102, 0.55);
  @media (min-width: 768px) {
    font-size: 15px;
  }
  /* Scanlines and a dark edge, over everything but never in the way of a tap. */
  &::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    background:
      repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px),
      radial-gradient(ellipse at center, transparent 60%, rgba(0, 0, 0, 0.55) 100%);
  }
  ::selection {
    background: ${c};
    color: #000;
    text-shadow: none;
  }
`,h=s.U.header.withConfig({displayName:"style__TitleBar",componentId:"sc-10b80736-1"})`
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: #000;
  border-bottom: 1px solid var(--c-line);
  @media (min-width: 768px) {
    padding: 12px 40px;
  }
`,p=s.U.span.withConfig({displayName:"style__TitleText",componentId:"sc-10b80736-2"})`
  flex-grow: 1;
  color: var(--c-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x=s.U.img.withConfig({displayName:"style__Pixels",componentId:"sc-10b80736-3"})`
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  flex-shrink: 0;
`,u=(0,s.U)(x).withConfig({displayName:"style__Logo",componentId:"sc-10b80736-4"})`
  width: 24px;
  height: 24px;
`,m=s.U.a.withConfig({displayName:"style__BarLink",componentId:"sc-10b80736-5"})`
  color: ${c};
  text-decoration: none;
  white-space: nowrap;
  &:hover,
  &:focus-visible {
    background: ${c};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`,g=s.U.main.withConfig({displayName:"style__Screen",componentId:"sc-10b80736-6"})`
  flex-grow: 1;
  padding: 16px 16px 24px;
  overflow-wrap: anywhere;
  /* A terminal never justifies or hyphenates, whatever the site does with <main>. */
  text-align: left;
  hyphens: manual;
  @media (min-width: 768px) {
    padding: 24px 40px 32px;
  }
`,f=s.U.div.withConfig({displayName:"style__Line",componentId:"sc-10b80736-7"})`
  white-space: pre-wrap;
  min-height: 1.5em;
`,w=s.U.span.withConfig({displayName:"style__Muted",componentId:"sc-10b80736-8"})`
  color: var(--c-muted);
`,j=s.U.span.withConfig({displayName:"style__Bright",componentId:"sc-10b80736-9"})`
  color: var(--c-accent);
  font-weight: 700;
`,b=s.U.span.withConfig({displayName:"style__Prompt",componentId:"sc-10b80736-10"})`
  color: var(--c-accent);
  white-space: nowrap;
`,y=s.U.pre.withConfig({displayName:"style__Banner",componentId:"sc-10b80736-11"})`
  margin: 8px 0 16px;
  font-family: inherit;
  font-size: min(13px, calc((100vw - 32px) / 53 / 0.61));
  line-height: 1.05;
  white-space: pre;
  overflow: hidden;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.7);
  @media (min-width: 768px) {
    font-size: 15px;
  }
`,v=s.U.div.withConfig({displayName:"style__Block",componentId:"sc-10b80736-12"})`
  margin: 4px 0 16px;
`,k=s.U.div.withConfig({displayName:"style__Indent",componentId:"sc-10b80736-13"})`
  padding-left: 2ch;
`,_=s.U.div.withConfig({displayName:"style__Columns",componentId:"sc-10b80736-14"})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px 24px;
  margin: 8px 0 16px;
`,C=(0,s.U)(x).withConfig({displayName:"style__Photo",componentId:"sc-10b80736-15"})`
  width: 240px;
  max-width: 60vw;
  height: auto;
`,I=(0,s.U)(x).withConfig({displayName:"style__NeofetchLogo",componentId:"sc-10b80736-16"})`
  width: 128px;
  height: 128px;
`,L=s.U.dl.withConfig({displayName:"style__Grid",componentId:"sc-10b80736-17"})`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0 2ch;
  margin: 0;
  dt {
    color: var(--c-accent);
    font-weight: 700;
  }
  dd {
    margin: 0;
  }
`,U=s.U.ul.withConfig({displayName:"style__List",componentId:"sc-10b80736-18"})`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 3ch;
`,N=s.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__TermLink",componentId:"sc-10b80736-19"})`
  color: var(--c-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover,
  &:focus-visible {
    background: ${c};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`,S=s.q`
  50% { opacity: 0 }
`,z=s.U.span.withConfig({displayName:"style__Cursor",componentId:"sc-10b80736-20"})`
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  margin-left: 1px;
  vertical-align: text-bottom;
  background: ${c};
  box-shadow: 0 0 6px rgba(51, 255, 102, 0.8);
  animation: ${S} 1s step-end infinite;
`,T=s.U.label.withConfig({displayName:"style__InputLine",componentId:"sc-10b80736-21"})`
  position: relative;
  display: block;
  white-space: pre-wrap;
  cursor: text;
`,$=s.U.input.withConfig({displayName:"style__HiddenInput",componentId:"sc-10b80736-22"})`
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  border: none;
  font: inherit;
  font-size: 16px; /* below 16px iOS zooms into the page on focus */
  caret-color: transparent;
`,E=s.U.nav.withConfig({displayName:"style__Shortcuts",componentId:"sc-10b80736-23"})`
  position: sticky;
  bottom: 0;
  z-index: 4;
  display: flex;
  gap: 8px;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  overflow-x: auto;
  background: #000;
  border-top: 1px solid var(--c-line);
  scrollbar-width: none;
  @media (min-width: 768px) {
    padding: 12px 40px;
    flex-wrap: wrap;
  }
`,M=s.U.button.withConfig({displayName:"style__Shortcut",componentId:"sc-10b80736-24"})`
  flex-shrink: 0;
  padding: 4px 10px;
  border: 1px solid var(--c-line-strong);
  border-radius: 0;
  background: transparent;
  color: ${c};
  font: inherit;
  text-shadow: inherit;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    background: ${c};
    color: #000;
    text-shadow: none;
    outline: none;
  }
`,A=["help","whoami","neofetch","experience","skills","projects","background","contact","play","lang","clear","exit"],D=(e,n)=>{let t=e(n,{returnObjects:!0});return Array.isArray(t)?t:[]};function P(){return l.map(e=>(0,n.jsx)(y,{"aria-hidden":"true",children:e.join("\n")},e[0]))}let B={help:function({t:e}){return(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:e("terminal.helpIntro")}),(0,n.jsx)(L,{children:A.map(i=>(0,n.jsxs)(t.Fragment,{children:[(0,n.jsx)("dt",{children:i}),(0,n.jsx)("dd",{children:e(`terminal.help.${i}`)})]},i))})]})},whoami:function({t:e}){return(0,n.jsxs)(_,{children:[(0,n.jsx)(C,{src:"/img/terminal/photo.png",alt:e("terminal.photoAlt"),width:80,height:90}),(0,n.jsxs)("div",{style:{flex:"1 1 30ch"},children:[(0,n.jsx)(f,{children:(0,n.jsx)(j,{children:"Javier Garrido"})}),(0,n.jsx)(f,{children:(0,n.jsx)(w,{children:e("terminal.tagline")})}),(0,n.jsx)(f,{}),(0,n.jsx)(f,{children:e("introParagraph1")}),(0,n.jsx)(f,{}),(0,n.jsx)(f,{children:e("introParagraph2")})]})]})},neofetch:function({t:e}){let i=new Date().getFullYear()-2012,r=[["role",e("terminal.neofetch.roleValue")],["location",e("terminal.neofetch.locationValue")],["uptime",e("terminal.neofetch.uptimeValue",{count:i})],["stack","Node.js, TypeScript, React"],["languages",e("terminal.neofetch.languagesValue")],["shell","zsh @ javiergarrido.dev"]];return(0,n.jsxs)(_,{children:[(0,n.jsx)(I,{src:"/img/terminal/jg.png",alt:"",width:32,height:32}),(0,n.jsxs)("div",{children:[(0,n.jsxs)(f,{children:[(0,n.jsx)(j,{children:"javier"}),"@",(0,n.jsx)(j,{children:"garrido"})]}),(0,n.jsx)(f,{children:(0,n.jsx)(w,{children:"--------------"})}),(0,n.jsx)(L,{children:r.map(([i,r])=>(0,n.jsxs)(t.Fragment,{children:[(0,n.jsx)("dt",{children:e(`terminal.neofetch.${i}`)}),(0,n.jsx)("dd",{children:r})]},i))})]})]})},experience:function({t:e}){return D(e,"experience").map(e=>(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:(0,n.jsxs)(j,{children:["▸ ",e.company]})}),(0,n.jsxs)(k,{children:[(0,n.jsx)(f,{children:(0,n.jsx)(w,{children:[e.period,e.place].filter(Boolean).join(" · ")})}),[].concat(e.summary).map(e=>(0,n.jsx)(f,{children:e},e))]})]},e.company))},skills:function({t:e}){return(0,n.jsx)(v,{children:(0,n.jsx)(U,{children:D(e,"skills").map(e=>(0,n.jsx)("li",{children:e.toLowerCase().replace(/ /g,"-")},e))})})},projects:function({t:e}){return D(e,"projects").map(e=>(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:(0,n.jsxs)(j,{children:["▸ ",e.name]})}),(0,n.jsxs)(k,{children:[(0,n.jsx)(f,{children:e.description}),e.awards.map(e=>(0,n.jsxs)(f,{children:["★ ",e]},e)),e.links.map(e=>(0,n.jsxs)(f,{children:["→ ",(0,n.jsx)(N,{href:e.href,children:e.label})]},e.href))]})]},e.name))},background:function({t:e}){let t=[[e("educationLabel"),D(e,"education")],[e("workshopsLabel"),D(e,"workshops")],[e("languagesLabel"),D(e,"languages")]];return(0,n.jsxs)(n.Fragment,{children:[t.map(([e,t])=>(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:(0,n.jsxs)(j,{children:["▸ ",e]})}),(0,n.jsx)(k,{children:t.map(e=>(0,n.jsxs)(f,{children:[(0,n.jsx)(w,{children:e.name}),"  ",e.detail.replace(/\n/g," ")]},`${e.name} ${e.detail}`))})]},e)),(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:(0,n.jsxs)(j,{children:["▸ ",e("offWorkLabel")]})}),(0,n.jsx)(k,{children:(0,n.jsx)(f,{children:e("offWork")})})]})]})},contact:function({t:e}){let i=[[e("contactLinkedin"),o.y.linkedin],[e("contactX"),o.y.x],[e("contactGithub"),o.y.github],[e("contactPlayground"),"https://cibergarri.github.io/playground"],[e("contactSource"),"https://github.com/cibergarri/home"]];return(0,n.jsxs)(v,{children:[(0,n.jsx)(f,{children:e("contactText")}),(0,n.jsx)(f,{}),(0,n.jsx)(L,{children:i.map(([e,i])=>(0,n.jsxs)(t.Fragment,{children:[(0,n.jsx)("dt",{children:e}),(0,n.jsx)("dd",{children:(0,n.jsx)(N,{href:i,children:i.replace(/^https?:\/\/(www\.)?/,"")})})]},i))})]})}},F=(0,t.lazy)(()=>e.A(65077)),R="javier@garrido:~$",H="whoami",K=A.filter(e=>!["lang","clear"].includes(e)),V=()=>window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;function q({command:e}){return(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{children:R})," ",e]})}e.s(["default",0,function(){let{t:e,i18n:o}=(0,r.f)(),l=(0,i.useRouter)(),[s,c]=(0,t.useState)([]),[x,j]=(0,t.useState)(!1),[y,v]=(0,t.useState)(""),[k,_]=(0,t.useState)(""),[C,I]=(0,t.useState)([]),[L,U]=(0,t.useState)(-1),[N,S]=(0,t.useState)(!1),D=(0,t.useRef)(null),G=(0,t.useRef)(null),O=(0,t.useRef)(0),W=(0,t.useCallback)((e,n)=>{O.current+=1;let t=O.current;c(i=>[...i,{id:t,command:e,output:n}])},[]),X=(0,t.useCallback)(()=>c([]),[]),Z=(0,t.useCallback)(t=>{let{output:i,action:r,lang:s}=function(e,t){let[i="",...r]=e.trim().split(/\s+/),a=i.toLowerCase();if(!a)return{output:null};if(B[a]){let e=B[a];return{output:(0,n.jsx)(e,{t:t})}}switch(a){case"clear":return{action:"clear"};case"exit":return{output:(0,n.jsx)(f,{children:t("terminal.exiting")}),action:"exit"};case"play":return{output:(0,n.jsx)(f,{children:t("terminal.launching")}),action:"play"};case"lang":{let e=(r[0]||"").toLowerCase();if("en"===e||"es"===e)return{action:"lang",lang:e};return{output:(0,n.jsx)(f,{children:t("terminal.langUsage")})}}case"sudo":return{output:(0,n.jsx)(f,{children:t("terminal.sudo")})};default:return{output:(0,n.jsx)(f,{children:t("terminal.notFound",{command:a})})}}}(t,e);if("clear"===r)return void X();if("lang"===r){o.changeLanguage(s),(0,a.x)(s),W(t,(0,n.jsx)(f,{children:o.getFixedT(s)("terminal.langChanged")}));return}W(t,i),"exit"===r&&setTimeout(()=>l.push("/"),600),"play"===r&&S(!0)},[e,o,W,X,l]);return(0,t.useEffect)(()=>{let t=!1,i=[],r=()=>{!t&&(t=!0,i.forEach(clearTimeout),window.removeEventListener("keydown",r),window.removeEventListener("pointerdown",r),v(""),Z(H),W(null,(0,n.jsx)(f,{children:(0,n.jsx)(w,{children:e("terminal.hint")})})),j(!0),V()&&D.current?.focus())};return(W(null,(0,n.jsx)(f,{children:(0,n.jsx)(w,{children:e("terminal.lastLogin",{date:new Date().toDateString()})})})),W(null,(0,n.jsx)(P,{})),window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)?(r(),X):([...H].forEach((e,n)=>{i.push(setTimeout(()=>v(H.slice(0,n+1)),700+90*n))}),i.push(setTimeout(r,700+90*H.length+300)),window.addEventListener("keydown",r),window.addEventListener("pointerdown",r),()=>{t=!0,i.forEach(clearTimeout),window.removeEventListener("keydown",r),window.removeEventListener("pointerdown",r),X()})},[]),(0,t.useEffect)(()=>{let e=document.documentElement;return e.dataset.terminal="",()=>{delete e.dataset.terminal}},[]),(0,t.useEffect)(()=>{G.current?.scrollIntoView({block:"end"})},[s,y]),(0,n.jsxs)(d,{translate:"no",children:[(0,n.jsxs)(h,{children:[(0,n.jsx)(u,{src:"/img/terminal/jg.png",alt:"",width:32,height:32}),(0,n.jsx)(p,{children:e("terminal.title")}),(0,n.jsx)(m,{href:"/",onClick:e=>{e.preventDefault(),Z("exit")},children:"[ exit ]"})]}),(0,n.jsxs)(g,{"aria-live":"polite",onClick:()=>x&&V()&&D.current?.focus(),children:[s.map(e=>(0,n.jsxs)("div",{children:[null!==e.command&&(0,n.jsx)(q,{command:e.command}),e.output]},e.id)),!x&&(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{children:R})," ",y,(0,n.jsx)(z,{})]}),x&&(0,n.jsx)("form",{onSubmit:e=>{e.preventDefault();let n=k.trim();(_(""),U(-1),n)?(I(e=>[n,...e]),Z(n)):W("",null)},children:(0,n.jsxs)(T,{children:[(0,n.jsx)(b,{children:R})," ",k,(0,n.jsx)(z,{}),(0,n.jsx)($,{ref:D,value:k,onChange:e=>_(e.target.value),onKeyDown:e=>{if("ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let n=Math.min(Math.max(L+("ArrowUp"===e.key?1:-1),-1),C.length-1);U(n),_(-1===n?"":C[n])}else if("Tab"===e.key){e.preventDefault();let n=A.find(e=>k&&e.startsWith(k.toLowerCase()));n&&_(n)}else"l"===e.key&&e.ctrlKey&&(e.preventDefault(),X())},"aria-label":e("terminal.inputLabel"),autoComplete:"off",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,enterKeyHint:"go"})]})}),(0,n.jsx)("div",{ref:G})]}),x&&(0,n.jsx)(E,{"aria-label":e("terminal.shortcuts"),children:K.map(e=>(0,n.jsx)(M,{type:"button",onClick:()=>{I(n=>[e,...n]),Z(e)},children:e},e))}),N&&(0,n.jsx)(t.Suspense,{fallback:null,children:(0,n.jsx)(F,{onClose:()=>S(!1)})})]})}],78622)}]);