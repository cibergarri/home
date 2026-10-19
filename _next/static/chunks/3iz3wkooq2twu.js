(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60044,e=>{"use strict";var t=e.i(43476),i=e.i(71645);e.i(85269);var o=e.i(22831);let a=()=>({bugs:[],fixed:0,debt:0,elapsed:0,nextSpawn:0,nextId:1,over:!1});var n=e.i(97053),r=e.i(90817);let s=n.q`
  from { opacity: 0 }
  to { opacity: 1 }
`,c=n.U.div.withConfig({displayName:"style__Overlay",componentId:"sc-48ca04c9-0"})`
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: flex;
  flex-direction: column;
  background: color-mix(in srgb, var(--c-background) 82%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: var(--c-primary);
  animation: ${s} 0.3s ease-out both;
  user-select: none;
  -webkit-user-select: none;
`,l=n.U.div.withConfig({displayName:"style__Bar",componentId:"sc-48ca04c9-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
`,d=n.U.div.withConfig({displayName:"style__Score",componentId:"sc-48ca04c9-2"})`
  flex-grow: 1;
`,p=n.U.div.withConfig({displayName:"style__DebtMeter",componentId:"sc-48ca04c9-3"})`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--c-muted);
  font-weight: 400;
  font-size: 13px;
`,m=n.U.span.withConfig({displayName:"style__DebtBlock",componentId:"sc-48ca04c9-4"})`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 1px solid var(--c-heart);
  background: ${e=>e.$full?"var(--c-heart)":"transparent"};
  transition: background-color 0.2s;
`,u=(0,n.U)(r._).withConfig({displayName:"style__CloseButton",componentId:"sc-48ca04c9-5"})`
  flex-shrink: 0;
`,x=n.U.div.withConfig({displayName:"style__Field",componentId:"sc-48ca04c9-6"})`
  position: relative;
  flex-grow: 1;
  margin: 0 16px;
  overflow: hidden;
  touch-action: none; /* taps are for squashing, not for scrolling or zooming the page */
  @media (min-width: 768px) {
    margin: 0 40px;
  }
`,g=n.U.div.withConfig({displayName:"style__Production",componentId:"sc-48ca04c9-7"})`
  flex-shrink: 0;
  margin: 0 16px 24px;
  padding-top: 6px;
  border-top: 2px dashed var(--c-heart);
  color: var(--c-heart);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  text-align: right;
  @media (min-width: 768px) {
    margin: 0 40px 32px;
  }
`,f=n.q`
  from { transform: translate(-50%, -50%) rotate(-12deg) }
  to { transform: translate(-50%, -50%) rotate(12deg) }
`,h=n.U.button.withConfig({displayName:"style__Bug",componentId:"sc-48ca04c9-8"})`
  position: absolute;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 30px;
  line-height: 48px;
  cursor: crosshair;
  transform: translate(-50%, -50%);
  animation: ${f} 0.35s ease-in-out infinite alternate;
  -webkit-tap-highlight-color: transparent;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    border-radius: 50%;
  }
`,y=n.q`
  from { opacity: 1; transform: translate(-50%, -50%) }
  to { opacity: 0; transform: translate(-50%, -150%) }
`,b=n.U.div.withConfig({displayName:"style__Splat",componentId:"sc-48ca04c9-9"})`
  position: absolute;
  pointer-events: none;
  color: var(--c-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  animation: ${y} 0.6s ease-out forwards;
`,v=n.U.div.withConfig({displayName:"style__Card",componentId:"sc-48ca04c9-10"})`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 24px;
  text-align: center;
  animation: ${s} 0.3s ease-out both;
`,w=n.U.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-48ca04c9-11"})`
  margin: 0;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: var(--c-primary);
  @media (min-width: 768px) {
    font-size: 44px;
  }
`,_=n.U.p.withConfig({displayName:"style__CardText",componentId:"sc-48ca04c9-12"})`
  margin: 0;
  max-width: 420px;
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.5;
`,C=n.U.p.withConfig({displayName:"style__CardNote",componentId:"sc-48ca04c9-13"})`
  margin: 0;
  color: var(--c-muted);
  font-size: 14px;
`,j=n.U.div.withConfig({displayName:"style__Actions",componentId:"sc-48ca04c9-14"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
`,k=n.U.button.withConfig({displayName:"style__ActionButton",componentId:"sc-48ca04c9-15"})`
  color: ${e=>e.$primary?"var(--c-background)":"var(--c-primary)"};
  background: ${e=>e.$primary?"var(--c-primary)":"transparent"};
  border: 1px solid var(--c-primary);
  border-radius: 999px;
  padding: 10px 20px;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background: var(--c-primary);
    color: var(--c-background);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`,I="bug-squash-best",N=()=>{try{return Number(localStorage.getItem(I))||0}catch{return 0}};e.s(["default",0,function({onClose:e}){let{t:n}=(0,o.f)(),[r,s]=(0,i.useState)(!1),[f,y]=(0,i.useState)(a),[U,$]=(0,i.useState)(N),[S,z]=(0,i.useState)([]),M=(0,i.useRef)(null),B=r&&f.over,A=B&&f.fixed>U,E=Math.max(U,B?f.fixed:0),T="intro";r&&(T=B?"over":"playing");let q=()=>{$(E),y(a()),z([]),s(!0)};(0,i.useEffect)(()=>{let e;if("playing"!==T)return;let t=performance.now(),i=o=>{let a=Math.min((o-t)/1e3,.05);t=o,y(e=>(function(e,t,i=Math.random){if(e.over)return e;let o=e.elapsed+t,{debt:a,nextSpawn:n,nextId:r}=e,s=[];return e.bugs.forEach(e=>{let i=e.y+e.speed*t;i>=1?a+=1:s.push({...e,y:i})}),o>=n&&(s.push({id:r,x:.08+.84*i(),y:0,speed:(.16+.006*o)*(.8+.4*i())}),r+=1,n=o+Math.max(.35,1.1-.02*o)),{...e,bugs:s,debt:a,elapsed:o,nextSpawn:n,nextId:r,over:a>=5}})(e,a)),e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[T]),(0,i.useEffect)(()=>{A&&(e=>{try{localStorage.setItem(I,String(e))}catch{}})(f.fixed)},[A,f.fixed]),(0,i.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e()};document.addEventListener("keydown",t);let i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",t),document.body.style.overflow=i}},[e]),(0,i.useEffect)(()=>{"playing"!==T&&M.current?.focus()},[T]);let L=(0,i.useCallback)(e=>{y(t=>{var i;return i=e.id,t.over||!t.bugs.some(e=>e.id===i)?t:{...t,bugs:t.bugs.filter(e=>e.id!==i),fixed:t.fixed+1}});let t={id:e.id,x:e.x,y:e.y};z(e=>[...e,t]),setTimeout(()=>z(e=>e.filter(e=>e!==t)),600)},[]);return(0,t.jsxs)(c,{role:"dialog","aria-modal":"true","aria-label":n("game.title"),children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(d,{"aria-live":"polite",children:n("game.fixed",{count:f.fixed})}),(0,t.jsxs)(p,{"aria-label":n("game.debtLabel",{count:f.debt,max:5}),children:[n("game.debt"),Array.from({length:5},(e,i)=>(0,t.jsx)(m,{$full:i<f.debt,"aria-hidden":"true"},i))]}),(0,t.jsx)(u,{type:"button","aria-label":n("game.closeLabel"),onClick:e,children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M5.7 4.3 12 10.6l6.3-6.3 1.4 1.4L13.4 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7z"})})})]}),(0,t.jsxs)(x,{children:["playing"===T&&f.bugs.map(e=>(0,t.jsx)(h,{type:"button","aria-label":n("game.bug"),style:{left:`${100*e.x}%`,top:`${100*e.y}%`},onPointerDown:()=>L(e),children:"🐛"},e.id)),S.map(e=>(0,t.jsx)(b,{style:{left:`${100*e.x}%`,top:`${100*e.y}%`},children:n("game.splat")},e.id)),"intro"===T&&(0,t.jsxs)(v,{children:[(0,t.jsx)(w,{children:n("game.title")}),(0,t.jsx)(_,{children:n("game.intro")}),E>0&&(0,t.jsx)(C,{children:n("game.best",{count:E})}),(0,t.jsx)(j,{children:(0,t.jsx)(k,{ref:M,type:"button",$primary:!0,onClick:q,children:n("game.start")})})]}),"over"===T&&(0,t.jsxs)(v,{children:[(0,t.jsx)(w,{children:n("game.overTitle")}),(0,t.jsx)(_,{children:n("game.overScore",{count:f.fixed})}),(0,t.jsx)(C,{children:A?n("game.newBest"):n("game.best",{count:E})}),(0,t.jsxs)(j,{children:[(0,t.jsx)(k,{ref:M,type:"button",$primary:!0,onClick:q,children:n("game.again")}),(0,t.jsx)(k,{type:"button",onClick:e,children:n("game.close")})]})]})]}),(0,t.jsx)(g,{"aria-hidden":"true",children:n("game.production")})]})}],60044)}]);