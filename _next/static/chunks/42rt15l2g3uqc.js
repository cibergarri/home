(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3699,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(97053);e.i(61178);var r=e.i(28686),r=r,a=e.i(92921),a=a,o=e.i(60023),o=o,s=e.i(85521),s=s;let l=n.U.footer.withConfig({displayName:"style__FooterBar",componentId:"sc-9126e511-0"})`
  background: var(--c-background);
  color: var(--c-muted);
  border-top: 1px solid var(--c-line);
  transition: all 0.5s;
`,d=n.U.div.withConfig({displayName:"style__FooterInner",componentId:"sc-9126e511-1"})`
  max-width: 1040px;
  margin: 0 auto;
  padding: 28px 24px 40px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 24px;
  font-size: 14px;
  line-height: 1.5;
  @media (min-width: 768px) {
    padding: 28px 40px 48px;
  }
`,c=n.U.span.withConfig({displayName:"style__Copyright",componentId:"sc-9126e511-2"})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
`,p=(0,n.U)(r.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledCopyLeftIcon",componentId:"sc-9126e511-3"})`
  fill: var(--c-muted);
  transition: all 0.5s;
  circle {
    stroke: var(--c-muted);
  }
`,h=(0,n.U)(a.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledHeartIcon",componentId:"sc-9126e511-4"})`
  fill: #ff0000;
`,x=(0,n.U)(o.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledJSIcon",componentId:"sc-9126e511-5"})`
  border-radius: 2px;
`,g=(0,n.U)(s.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledClaudeIcon",componentId:"sc-9126e511-6"})`
  fill: #d97757;
`,m=n.U.span.withConfig({displayName:"style__Glued",componentId:"sc-9126e511-7"})`
  display: inline-flex;
  align-items: center;
`;e.s(["default",0,function(){let{t:e}=(0,t.f)();return(0,i.jsx)(l,{children:(0,i.jsxs)(d,{children:[(0,i.jsxs)(c,{children:[(0,i.jsx)(p,{"aria-label":"Copyleft"}),new Date().getFullYear()]}),(0,i.jsxs)(c,{children:[e("footerMadeWith"),(0,i.jsxs)(m,{children:[(0,i.jsx)(h,{"aria-label":"love"}),","]}),(0,i.jsx)(x,{"aria-label":"JavaScript"}),e("footerAnd"),(0,i.jsx)(g,{"aria-label":"Claude"}),e("footerBy")]})]})})}],3699)},85430,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(71645),r=e.i(98593),a=e.i(19988),o=e.i(97053);e.i(61178);var s=e.i(70165),s=s,l=e.i(54048),l=l;let d=o.U.div.withConfig({displayName:"style__ControlsContainer",componentId:"sc-5108faa2-0"})`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (min-width: 768px) {
    gap: 12px;
  }
`,c=o.U.button.withConfig({displayName:"style__IconButton",componentId:"sc-5108faa2-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--c-primary);
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  &:hover {
    border-color: var(--c-line);
    background: var(--c-chip);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`,p=(0,o.U)(s.f).attrs({height:"20px",width:"20px"}).withConfig({displayName:"style__StyledSunIcon",componentId:"sc-5108faa2-2"})`
  fill: var(--c-primary);
  transition: fill 2s;
`,h=(0,o.U)(l.f).attrs({height:"18px",width:"18px"}).withConfig({displayName:"style__StyledMoonIcon",componentId:"sc-5108faa2-3"})`
  fill: var(--c-primary);
  transition: fill 2s;
`,x=o.U.div.withConfig({displayName:"style__LanguageGroup",componentId:"sc-5108faa2-4"})`
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 2px;
`,g=o.U.button.withConfig({displayName:"style__LanguageButton",componentId:"sc-5108faa2-5"})`
  border: none;
  border-radius: 999px;
  padding: 5px 8px;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1;
  cursor: pointer;
  color: ${e=>e.$selected?"var(--c-background)":"var(--c-primary)"};
  background: ${e=>e.$selected?"var(--c-primary)":"transparent"};
  transition: background-color 0.2s, color 0.2s;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;function m(){let{i18n:e,t:n}=(0,t.f)(),{theme:o,toggleTheme:s}=(0,r.i)(),l=o===r.z.NIGHT,m=(e.resolvedLanguage||e.language||"").slice(0,2);return(0,i.jsxs)(d,{children:[(0,i.jsx)(x,{role:"group","aria-label":n("language"),children:a.r.map(t=>(0,i.jsx)(g,{type:"button",$selected:m===t,"aria-pressed":m===t,onClick:()=>{(0,a.x)(t),e.changeLanguage(t)},children:t.toUpperCase()},t))}),(0,i.jsx)(c,{type:"button",onClick:s,"aria-label":n("toggleTheme",{theme:n(l?"themeLight":"themeDark")}),children:l?(0,i.jsx)(p,{}):(0,i.jsx)(h,{})})]})}let f=o.U.header.withConfig({displayName:"style__HeaderBar",componentId:"sc-bb1d7426-0"})`
  background: linear-gradient(color-mix(in srgb, var(--c-background) 87%, transparent) 80%, transparent 100%);
  color: var(--c-primary);
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px 24px;
  @media (min-width: 768px) {
    padding: 16px 40px 32px;
  }
`,u=o.U.div.withConfig({displayName:"style__Toolbar",componentId:"sc-bb1d7426-1"})`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`,w=o.U.a.withConfig({displayName:"style__Title",componentId:"sc-bb1d7426-2"})`
  color: var(--c-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: color 2s;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 4px;
    border-radius: 2px;
  }
`,y=o.U.div.withConfig({displayName:"style__Blank",componentId:"sc-bb1d7426-3"})`
  flex-grow: 1;
`,b=o.U.nav.withConfig({displayName:"style__LinksContainer",componentId:"sc-bb1d7426-4"})`
  display: flex;
  align-items: center;
  gap: 0;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,v=o.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__SocialLink",componentId:"sc-bb1d7426-5"})`
  display: inline-flex;
  padding: 5px;
  border-radius: 6px;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
  }
`,j=o.U.svg.withConfig({displayName:"style__SVG",componentId:"sc-bb1d7426-6"})`
  transition: all 2s;
  width: 20px;
  height: 20px;
  fill: var(--c-primary);
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  ${v}:hover & {
    transition: all 0.3s;
    transform: scale(1.2);
    fill: var(--c-secondary);
  }
`,_=o.U.div.withConfig({displayName:"style__Hero",componentId:"sc-bb1d7426-7"})`
  background:
    linear-gradient(
      var(--c-background) 10%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 15%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 85%,
      var(--c-background) 90%
    ),
    var(--hero-image);
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`,C=o.U.div.withConfig({displayName:"style__HeroTitle",componentId:"sc-bb1d7426-8"})`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(30px, 7vw, 60px);
  line-height: 1.1;
  padding: 0 clamp(56px, 12vw, 200px) 16px 0;
  margin: 0;
  /* Fixed to the width of the widest final line ("I <heart \>" plus the caret),
     so the block does not shift while the typewriter grows and shrinks. */
  box-sizing: content-box;
  width: 4.9em;
  align-self: flex-end;
  text-align: left;
`,k=o.q`
  from { width: 0 }
  to { width: 3.75em }
`,I=o.q`
  from { width: 0 }
  to { width: 4.2em }
`,N=o.q`
  from, to { border-color: transparent }
  50% { border-color: #ff0000; }
`,U=o.q`
  from {
    opacity: 1;
    width: fit-content;
  }
  to {
    opacity: 0;
    width: 0%;
  }
`,L=o.U.div.withConfig({displayName:"style__TypeWriterContainer",componentId:"sc-bb1d7426-9"})`
  display: inline-flex;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #ff0000; /* The typewriter cursor */
  white-space: nowrap;
  margin-left: 0.25em;
  animation:
    ${k} 1.5s steps(8, end) 3s both,
    ${k} 1.5s steps(8, end) 6s reverse forwards,
    ${I} 1.5s steps(9, end) 8s forwards,
    ${N} .75s step-end infinite;
`,z=o.U.div.withConfig({displayName:"style__Hate",componentId:"sc-bb1d7426-10"})`
  display: inline;
  color: #ff0000;
  animation: ${U} .5s steps(1, end) 7.5s 1 forwards;
`,S=o.U.div.withConfig({displayName:"style__Heart",componentId:"sc-bb1d7426-11"})`
  display: inline;
  color: #ff0000;
  animation: ${U} .5s steps(1, end) 6.5s 1 reverse both;
`,R=o.q`
  from { opacity: 0 }
  to { opacity: 1 }
`,H=o.U.div.withConfig({displayName:"style__HeroSubtitle",componentId:"sc-bb1d7426-12"})`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: clamp(17px, 3.6vw, 32px);
  padding: 0 clamp(56px, 12vw, 200px) 0 0;
  height: 140px;
  max-width: 500px;
  align-self: flex-end;
  animation: ${R} 3s 10s both;
`,B={linkedin:"https://www.linkedin.com/in/javiergarridoiglesias/",github:"https://www.github.com/cibergarri",twitter:"https://twitter.com/cibergarri81"};e.s(["SOCIAL_LINKS",0,B,"default",0,function(){let{theme:e}=(0,r.i)();(0,n.useEffect)(()=>{let i=document.createElement("script");return i.id="bg-animation",i.src="/scripts/bg-animation.js",i.async=!0,i.setAttribute("data-class-suffix",e),document.body.appendChild(i),()=>{document.body.removeChild(i)}},["/scripts/bg-animation.js",e]);let{t:a}=(0,t.f)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{children:(0,i.jsxs)(u,{children:[(0,i.jsx)(w,{href:"/",children:a("title")}),(0,i.jsx)(y,{}),(0,i.jsxs)(b,{"aria-label":"Social links",children:[(0,i.jsx)(v,{href:B.linkedin,"aria-label":"LinkedIn",children:(0,i.jsx)(j,{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),(0,i.jsx)(v,{href:B.github,"aria-label":"GitHub",children:(0,i.jsx)(j,{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})}),(0,i.jsx)(v,{href:B.twitter,"aria-label":"Twitter",children:(0,i.jsx)(j,{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})})]}),(0,i.jsx)(y,{}),(0,i.jsx)(m,{})]})}),(0,i.jsxs)(_,{id:"background-image",children:[(0,i.jsxs)(C,{children:[a("heroTitlePrefix"),(0,i.jsxs)(L,{children:[(0,i.jsx)(z,{children:"<hate \\>"}),(0,i.jsx)(S,{children:"<heart \\>"})]}),(0,i.jsx)("br",{}),a("heroTitleSuffix")]}),(0,i.jsx)(H,{children:a("heroSubtitle")})]})]})}],85430)},61178,28686,92921,60023,54048,70165,85521,e=>{var i=e.i(43476);e.i(71645),e.s(["f",0,function(e){return(0,i.jsxs)("svg",{viewBox:"0 0 980 980",...e,children:[(0,i.jsx)("circle",{cx:490,cy:490,r:440,fill:"none",stroke:"#000",strokeWidth:100}),(0,i.jsx)("path",{d:"M219 428h131a150 150 0 110 125H219a275 275 0 100-125z"})]})}],28686),e.s(["f",0,function(e){return(0,i.jsx)("svg",{viewBox:"0 0 534 526",...e,children:(0,i.jsx)("path",{d:"M417.221 3.47c-56.509.053-105.7 35.891-139.78 77.469l-39.574 48.283c-.22-6.97-.657-14.571-2-19.363-13.99-49.92-67-86.04-118.69-82.8-38.484 2.4-79.87 19.95-101.08 53.2-23.894 37.46-10.563 85.62 7.609 123.02 34.091 70.179 96.408 119.46 142.6 180.72 28.401 37.662 37.761 84.718 52.678 128.44-.824 12.896 10.965 13.298 6.5 2.07-1.532-21.48 6.07-42.802 12.807-63.047 15.416-46.332 44.051-87.495 81.812-118.5 53.661-44.058 121.05-69.379 168.51-121.26 36.683-40.108 57.984-103.94 27.879-152.12-22.572-36.125-63.911-56.144-99.268-56.11z"})})}],92921),e.s(["f",0,function(e){return(0,i.jsxs)("svg",{viewBox:"0 0 630 630",...e,children:[(0,i.jsx)("path",{fill:"#f7df1e",d:"M0 0h630v630H0z"}),(0,i.jsx)("path",{d:"M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"})]})}],60023),e.s(["f",0,function(e){return(0,i.jsx)("svg",{width:20,height:20,...e,children:(0,i.jsx)("path",{d:"M17.39 15.14A7.33 7.33 0 0111.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 00-5.41.45 9 9 0 107 16.58 8.42 8.42 0 004.29-3.84 5.3 5.3 0 01-1.03.69z"})})}],54048),e.s(["f",0,function(e){return(0,i.jsx)("svg",{viewBox:"0 0 512 512",...e,children:(0,i.jsx)("path",{d:"M377.139 259.492c0 66.637-54.02 120.658-120.658 120.658-66.637 0-120.658-54.021-120.658-120.658s54.02-120.658 120.658-120.658c66.637 0 120.658 54.02 120.658 120.658zM228.352 100.669l30.27-77.906 25.979 77.906zM228.352 411.341l30.27 77.895 25.979-77.895zM100.659 287.601l-77.895-30.29 77.895-25.959zM411.361 287.601l77.875-30.29-77.875-25.959zM126.597 165.703L92.938 89.231l73.442 36.7zM346.276 385.423l76.524 33.639-36.741-73.442zM168.499 388.199l-76.493 33.639 36.72-73.442zM388.199 168.499l33.618-76.513-73.4 36.751z"})})}],70165),e.s(["f",0,e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"m4.714 15.956 4.718-2.648.079-.23-.08-.128h-.23l-.79-.048-2.695-.073-2.337-.097-2.265-.122-.57-.121-.535-.704.055-.353.48-.321.685.06 1.518.104 2.277.157 1.651.098 2.447.255h.389l.054-.158-.133-.097-.103-.098-2.356-1.596-2.55-1.688-1.336-.972-.722-.491L2 6.223l-.158-1.008.656-.722.88.06.224.061.893.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.644-1.032-.17-.619a3 3 0 0 1-.103-.729L6.287.133 6.7 0l.995.134.42.364.619 1.415L9.735 4.14l1.555 3.03.455.898.243.832.09.255h.159V9.01l.127-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.583.28.48.685-.067.444-.286 1.851-.558 2.903-.365 1.942h.213l.243-.242.983-1.306 1.652-2.064.728-.82.85-.904.547-.431h1.032l.759 1.129-.34 1.166-1.063 1.347-.88 1.142-1.263 1.7-.79 1.36.074.11.188-.02 2.853-.606 1.542-.28 1.84-.315.832.388.09.395-.327.807-1.967.486-2.307.462-3.436.813-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.08.485-1.213.62-1.64-.389-3.825-.91-1.31-.329h-.183v.11l1.093 1.068 2.003 1.81 2.508 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.343 3.521.122 1.08-.17.353-.607.213-.668-.122-1.372-1.924-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589 2.386-3.036 1.439-1.882.929-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312Z"})})],85521),e.s([],61178)},94685,e=>{var i=e.i(43476),t=e.i(71645);e.i(85269);var n=e.i(22831),r=e.i(34469),a=e.i(43804);function o({items:e}){return(0,i.jsx)(a.X,{$flush:!0,children:e.map(e=>(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)(a.h,{children:e.name}),(0,i.jsx)(a.q,{children:e.detail})]},`${e.name} ${e.detail}`))})}e.s(["default",0,function(){let{t:e}=(0,n.f)(),t=e("education",{returnObjects:!0}),a=e("workshops",{returnObjects:!0}),s=e("languages",{returnObjects:!0});return(0,i.jsxs)(r.Section,{id:"background",children:[(0,i.jsx)(r.SectionTitle,{children:e("backgroundHeading")}),(0,i.jsxs)(r.Rows,{children:[(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.RowHead,{children:e("educationLabel")}),(0,i.jsx)(r.RowBody,{children:Array.isArray(t)&&(0,i.jsx)(o,{items:t})})]}),(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.RowHead,{children:e("workshopsLabel")}),(0,i.jsx)(r.RowBody,{children:Array.isArray(a)&&(0,i.jsx)(o,{items:a})})]}),(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.RowHead,{children:e("languagesLabel")}),(0,i.jsx)(r.RowBody,{children:Array.isArray(s)&&(0,i.jsx)(o,{items:s})})]}),(0,i.jsxs)(r.Row,{children:[(0,i.jsx)(r.RowHead,{children:e("offWorkLabel")}),(0,i.jsx)(r.RowBody,{children:e("offWork")})]})]})]})}])},78277,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(34469),r=e.i(85430),a=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,t.f)();return(0,i.jsxs)(n.Section,{id:"contact",children:[(0,i.jsx)(n.SectionTitle,{children:e("contactHeading")}),(0,i.jsx)(n.Prose,{children:e("contactText")}),(0,i.jsxs)(a.Q,{children:[(0,i.jsx)(a.L,{href:r.SOCIAL_LINKS.linkedin,children:e("contactLinkedin")}),(0,i.jsx)(a.L,{href:r.SOCIAL_LINKS.github,children:e("contactGithub")}),(0,i.jsx)(a.L,{href:r.SOCIAL_LINKS.twitter,children:e("contactTwitter")}),(0,i.jsx)(a.L,{href:"https://cibergarri.github.io/playground",children:e("contactPlayground")}),(0,i.jsx)(a.L,{href:"https://github.com/cibergarri/home",children:e("contactSource")})]})]})}])},45828,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(34469);e.s(["default",0,function(){let{t:e}=(0,t.f)(),r=e("experience",{returnObjects:!0});return(0,i.jsxs)(n.Section,{id:"experience",children:[(0,i.jsx)(n.SectionTitle,{children:e("experienceHeading")}),(0,i.jsx)(n.Lede,{children:e("experienceNote")}),(0,i.jsx)(n.Rows,{children:Array.isArray(r)&&r.map(e=>(0,i.jsxs)(n.Row,{children:[(0,i.jsxs)(n.RowHead,{children:[e.company,(0,i.jsx)(n.RowMeta,{children:[e.period,e.place].filter(Boolean).join(", ")})]}),(0,i.jsx)(n.RowBody,{children:e.summary})]},e.company))})]})}])},68623,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,t.f)();return(0,i.jsxs)(n.Section,{id:"about",children:[(0,i.jsx)(r.R,{children:e("introHeading")}),(0,i.jsx)(n.Prose,{children:e("introParagraph1")}),(0,i.jsx)(n.Prose,{children:e("introParagraph2")})]})}])},6300,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,t.f)(),a=e("projects",{returnObjects:!0});return(0,i.jsxs)(n.Section,{id:"projects",children:[(0,i.jsx)(n.SectionTitle,{children:e("projectsHeading")}),(0,i.jsx)(n.Lede,{children:e("projectsNote")}),(0,i.jsx)(n.Rows,{children:Array.isArray(a)&&a.map(t=>(0,i.jsxs)(n.Row,{children:[(0,i.jsx)(n.RowHead,{children:t.name}),(0,i.jsxs)(n.RowBody,{children:[t.description,(0,i.jsxs)(r.X,{children:[t.awards.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h,{children:e("awardsLabel")}),(0,i.jsx)(r.q,{children:(0,i.jsx)(r.U,{children:t.awards.map(e=>(0,i.jsx)("li",{children:e},e))})})]}),(0,i.jsx)(r.h,{children:e("linksLabel")}),(0,i.jsx)(r.q,{children:(0,i.jsx)(r.V,{children:t.links.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(n.Link,{href:e.href,children:e.label})},e.href))})})]})]})]},t.name))})]})}])},97066,e=>{var i=e.i(43476);e.i(85269);var t=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,t.f)(),a=e("skills",{returnObjects:!0});return(0,i.jsxs)(n.Section,{id:"skills",children:[(0,i.jsx)(n.SectionTitle,{children:e("skillsHeading")}),(0,i.jsx)(r.S,{children:Array.isArray(a)&&a.map(e=>(0,i.jsx)(r.r,{children:e},e))})]})}])},43804,e=>{var i=e.i(97053);let t=i.U.h1.withConfig({displayName:"style__IntroHeading",componentId:"sc-2488d406-0"})`
  color: var(--c-primary);
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 28px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`,n=i.U.ul.withConfig({displayName:"style__SkillList",componentId:"sc-2488d406-1"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,r=i.U.li.withConfig({displayName:"style__Skill",componentId:"sc-2488d406-2"})`
  color: var(--c-primary);
  background: var(--c-chip);
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 15px;
  line-height: 1.2;
`,a=i.U.dl.withConfig({displayName:"style__DetailList",componentId:"sc-2488d406-3"})`
  margin: ${e=>e.$flush?"0":"16px 0 0"};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 6px 12px;
  font-size: 15px;
  line-height: 1.5;
`,o=i.U.dt.withConfig({displayName:"style__DetailLabel",componentId:"sc-2488d406-4"})`
  color: var(--c-muted);
  margin: 0;
`,s=i.U.dd.withConfig({displayName:"style__DetailValue",componentId:"sc-2488d406-5"})`
  margin: 0;
  color: var(--c-text);
`,l=i.U.ul.withConfig({displayName:"style__LinkList",componentId:"sc-2488d406-6"})`
  list-style: none;
  padding: 0;
  margin: 0;
  li + li {
    margin-top: 4px;
  }
`,d=i.U.ul.withConfig({displayName:"style__AwardList",componentId:"sc-2488d406-7"})`
  margin: 0;
  padding: 0;
  list-style: none;
  li + li {
    margin-top: 4px;
  }
`,c=i.U.div.withConfig({displayName:"style__ContactLinks",componentId:"sc-2488d406-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`,p=i.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__ContactLink",componentId:"sc-2488d406-9"})`
  color: var(--c-primary);
  border: 1px solid var(--c-line-strong);
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  &:hover {
    background: var(--c-primary);
    color: var(--c-background);
    border-color: var(--c-primary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`;e.s(["U",0,d,"L",0,p,"Q",0,c,"h",0,o,"X",0,a,"q",0,s,"R",0,t,"V",0,l,"r",0,r,"S",0,n])},34469,e=>{var i=e.i(97053);let t=i.U.main.withConfig({displayName:"styles__Page",componentId:"sc-8ed1957a-0"})`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px 96px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 40px 128px;
  }
`,n=i.U.section.withConfig({displayName:"styles__Section",componentId:"sc-8ed1957a-1"})`
  padding-top: 72px;
  &:first-child {
    padding-top: 16px;
  }
  @media (min-width: 768px) {
    padding-top: 112px;
    &:first-child {
      padding-top: 32px;
    }
  }
`,r=i.U.h2.withConfig({displayName:"styles__SectionTitle",componentId:"sc-8ed1957a-2"})`
  color: var(--c-primary);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0 0 12px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`,a=i.U.p.withConfig({displayName:"styles__Lede",componentId:"sc-8ed1957a-3"})`
  color: var(--c-muted);
  font-size: 18px;
  line-height: 1.5;
  max-width: 640px;
  margin: 0 0 40px;
`,o=i.U.p.withConfig({displayName:"styles__Prose",componentId:"sc-8ed1957a-4"})`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.65;
  max-width: 680px;
  margin: 0 0 20px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`,s=i.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"styles__Link",componentId:"sc-8ed1957a-5"})`
  color: var(--c-accent);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease, color 0.2s ease;
  &:hover,
  &:focus-visible {
    background-size: 100% 2px;
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
    border-radius: 2px;
  }
`,l=i.U.div.withConfig({displayName:"styles__Rows",componentId:"sc-8ed1957a-6"})`
  border-top: 1px solid var(--c-line);
`,d=i.U.div.withConfig({displayName:"styles__Row",componentId:"sc-8ed1957a-7"})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 32px;
  padding: 24px 0;
  border-bottom: 1px solid var(--c-line);
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    padding: 28px 0;
  }
`,c=i.U.div.withConfig({displayName:"styles__RowHead",componentId:"sc-8ed1957a-8"})`
  color: var(--c-primary);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
`,p=i.U.div.withConfig({displayName:"styles__RowMeta",componentId:"sc-8ed1957a-9"})`
  color: var(--c-muted);
  font-size: 15px;
  line-height: 1.4;
  margin-top: 4px;
  font-weight: 400;
`,h=i.U.div.withConfig({displayName:"styles__RowBody",componentId:"sc-8ed1957a-10"})`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.6;
  max-width: 640px;
`;e.s(["Lede",0,a,"Link",0,s,"Page",0,t,"Prose",0,o,"Row",0,d,"RowBody",0,h,"RowHead",0,c,"RowMeta",0,p,"Rows",0,l,"Section",0,n,"SectionTitle",0,r])}])})();