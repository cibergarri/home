(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79274,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let o="en-GB";function a(e){let t;if(!("speechSynthesis"in window))return;let{speechSynthesis:i}=window;i.cancel();let a=new window.SpeechSynthesisUtterance(e);a.lang=o,a.rate=.85;let r=(t=i.getVoices?.()??[]).find(e=>e.lang===o&&e.localService)??t.find(e=>e.lang===o)??t.find(e=>e.lang?.startsWith("en"));r&&(a.voice=r),i.speak(a)}var r=e.i(97053);let s=r.q`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`,n=r.q`
  0% { transform: scale(0.6) }
  70% { transform: scale(1.08) }
  100% { transform: scale(1) }
`,l=r.q`
  50% { box-shadow: 0 0 0 5px rgba(31, 158, 143, 0.35) }
`,d=r.U.p.withConfig({displayName:"style__Instructions",componentId:"sc-33ac7500-0"})`
  margin: 0 0 14px;
  color: var(--s-muted);
  font-size: 18px;
`,c=r.U.div.withConfig({displayName:"style__Board",componentId:"sc-33ac7500-1"})`
  display: grid;
  gap: 16px;
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) 230px;
    align-items: start;
  }
`,f=r.U.div.withConfig({displayName:"style__Scene",componentId:"sc-33ac7500-2"})`
  position: relative;
  container-type: inline-size;
  width: 100%;
  margin: 0 auto;
  aspect-ratio: ${({$ratio:e})=>e};
  border-radius: 22px;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 6px 24px rgba(36, 50, 74, 0.18);
  @media (orientation: landscape) and (min-width: 900px) {
    /* Small enough for the whole picture to fit on screen under the title. */
    max-width: calc((100svh - 190px) * ${({$ratio:e})=>e});
  }
  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`,h=r.m`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6cqw;
  padding: 0 0.8cqw;
  border-radius: 1.4cqw;
  font-family: inherit;
  font-size: 2.3cqw;
  font-weight: 600;
  color: var(--s-ink);
`,x=r.U.button.withConfig({displayName:"style__EmptyBox",componentId:"sc-33ac7500-3"})`
  ${h}
  border: 0.35cqw dashed var(--s-ink);
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  color: var(--s-muted);
  transition: background 0.15s, transform 0.15s;
  ${({$over:e})=>e&&r.m`
    background: #fff;
    border-style: solid;
    border-color: var(--s-teal);
    transform: scale(1.06);
  `}
  ${({$ready:e})=>e&&r.m`
    animation: ${l} 1.2s ease-in-out infinite;
  `}
  ${({$wrong:e})=>e&&r.m`
    border-style: solid;
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${s} 0.45s;
  `}
  &:focus-visible {
    outline: 0.4cqw solid var(--s-teal);
    outline-offset: 0.3cqw;
  }
`,p=r.U.div.withConfig({displayName:"style__FilledBox",componentId:"sc-33ac7500-4"})`
  ${h}
  border: 0.35cqw solid var(--s-good);
  background: var(--s-good-bg);
  animation: ${n} 0.35s ease-out;
  white-space: nowrap;
`,g=r.U.button.withConfig({displayName:"style__BoxSpeaker",componentId:"sc-33ac7500-5"})`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4cqw;
  height: 3.4cqw;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--s-good);
  color: #fff;
  cursor: pointer;
  svg {
    position: static;
    width: 62%;
    height: 62%;
  }
`,u=r.U.div.withConfig({displayName:"style__Side",componentId:"sc-33ac7500-6"})`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,y=r.U.ul.withConfig({displayName:"style__Tray",componentId:"sc-33ac7500-7"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (orientation: landscape) and (min-width: 900px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
  }
`,m=r.U.div.withConfig({displayName:"style__Groups",componentId:"sc-33ac7500-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: 1fr;
  }
`,j=r.U.section.withConfig({displayName:"style__Group",componentId:"sc-33ac7500-9"})`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  border-radius: 18px;
  border: 2px dashed var(--s-line);
  @media (orientation: landscape) and (min-width: 900px) {
    gap: 8px;
    padding: 8px;
  }
`,b=r.U.h2.withConfig({displayName:"style__GroupTitle",componentId:"sc-33ac7500-10"})`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,w=r.U.p.withConfig({displayName:"style__GroupDone",componentId:"sc-33ac7500-11"})`
  margin: 0;
  color: var(--s-good);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`,k=r.U.li.withConfig({displayName:"style__Chip",componentId:"sc-33ac7500-12"})`
  display: flex;
  align-items: stretch;
  border-radius: 16px;
  background: var(--s-card);
  border: 2px solid ${({$selected:e})=>e?"var(--s-teal)":"var(--s-line)"};
  box-shadow: 0 4px 0 ${({$selected:e})=>e?"var(--s-teal)":"var(--s-line)"};
  opacity: ${({$dragging:e})=>e?.35:1};
  transition: opacity 0.15s, transform 0.15s;
  transform: ${({$selected:e})=>e?"translateY(-3px)":"none"};
`,L=r.U.button.withConfig({displayName:"style__Word",componentId:"sc-33ac7500-13"})`
  flex: 1;
  min-height: 56px;
  padding: 0 8px 0 18px;
  border: 0;
  background: none;
  color: var(--s-ink);
  font-family: inherit;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  cursor: grab;
  /* A little shorter beside the picture, so the whole column fits on a tablet lying flat. */
  @media (orientation: landscape) and (min-width: 900px) {
    min-height: 46px;
  }
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: -3px;
    border-radius: 14px;
  }
`,v=r.U.button.withConfig({displayName:"style__Speaker",componentId:"sc-33ac7500-14"})`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  margin: 6px 6px 6px 0;
  border: 0;
  border-radius: 12px;
  background: #e6f5f3;
  color: var(--s-teal);
  cursor: pointer;
  svg {
    width: 26px;
    height: 26px;
  }
  &:active {
    background: #cdebe7;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 1px;
  }
`,$=r.U.div.withConfig({displayName:"style__Ghost",componentId:"sc-33ac7500-15"})`
  position: fixed;
  z-index: 50;
  pointer-events: none;
  padding: 14px 20px;
  border-radius: 16px;
  background: var(--s-card);
  border: 2px solid var(--s-teal);
  box-shadow: 0 12px 28px rgba(36, 50, 74, 0.28);
  color: var(--s-ink);
  font-size: 22px;
  font-weight: 600;
  transform: rotate(-3deg) scale(1.05);
`,C=r.U.div.withConfig({displayName:"style__Message",componentId:"sc-33ac7500-16"})`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 56px;
  box-sizing: border-box;
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 18px;
  line-height: 1.35;
  background: ${({$kind:e})=>({right:"var(--s-good-bg)",wrong:"var(--s-bad-bg)"})[e]??"var(--s-card)"};
  border: 2px solid ${({$kind:e})=>({right:"var(--s-good)",wrong:"var(--s-bad)"})[e]??"var(--s-line)"};
  strong {
    font-weight: 600;
  }
`,M=r.U.p.withConfig({displayName:"style__Progress",componentId:"sc-33ac7500-17"})`
  margin: 0;
  color: var(--s-muted);
  font-size: 17px;
  text-align: center;
`,_=r.U.div.withConfig({displayName:"style__Done",componentId:"sc-33ac7500-18"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-good);
  text-align: center;
  animation: ${n} 0.4s ease-out;
  h2 {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 18px;
    color: var(--s-muted);
  }
`,W=r.U.div.withConfig({displayName:"style__Stars",componentId:"sc-33ac7500-19"})`
  font-size: 40px;
  letter-spacing: 6px;
  span[data-off] {
    filter: grayscale(1);
    opacity: 0.3;
  }
`,Z=r.U.button.withConfig({displayName:"style__Again",componentId:"sc-33ac7500-20"})`
  min-height: 52px;
  padding: 0 28px;
  border: 0;
  border-radius: 26px;
  background: var(--s-accent);
  box-shadow: 0 4px 0 #d95c3d;
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #d95c3d;
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 3px;
  }
`,I=(e,t,i)=>Math.min(i,Math.max(t,e));function U(){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M15.5 9a4 4 0 0 1 0 6"}),(0,t.jsx)("path",{d:"M18.5 6.5a7.5 7.5 0 0 1 0 11"})]})}function N({exercise:e}){let{instructions:o,width:r,height:s,Drawing:n,items:l,groups:h,boxWidth:H=180}=e,[A,S]=(0,i.useState)(()=>l.map(e=>e.id).reverse()),[T,z]=(0,i.useState)({}),[P,q]=(0,i.useState)(null),[B,D]=(0,i.useState)(null),[G,V]=(0,i.useState)(null),[Y,X]=(0,i.useState)(null),[R,F]=(0,i.useState)(0),[E,O]=(0,i.useState)(null),K=(0,i.useRef)({}),J=(0,i.useRef)(null),Q=(0,i.useRef)(0),ee=(0,i.useRef)(null),et=Object.fromEntries(l.map(e=>[e.id,e])),ei=Object.keys(T).length,eo=ei===l.length,ea=(e,t)=>Object.keys(K.current).find(i=>{let o,a=K.current[i];return a&&!T[i]&&(o=a.getBoundingClientRect(),e>=o.left-18&&e<=o.right+18&&t>=o.top-18&&t<=o.bottom+18)})??null,er=(e,t)=>{if(q(null),e===t){z(e=>({...e,[t]:!0})),O({kind:"right",id:e});return}F(e=>e+1),X(t),clearTimeout(ee.current),ee.current=setTimeout(()=>X(null),600),O({kind:"wrong",id:e})},es=e=>{let t=J.current;if(!t||t.pointerId!==e.pointerId)return;let i=Math.hypot(e.clientX-t.startX,e.clientY-t.startY);(t.dragging||!(i<8))&&(t.dragging=!0,D({id:t.id,x:e.clientX-t.offsetX,y:e.clientY-t.offsetY}),V(ea(e.clientX,e.clientY)))},en=(e,t)=>{let i=J.current;if(!i||i.pointerId!==e.pointerId||(J.current=null,!i.dragging))return;Q.current=e.timeStamp+400,D(null),V(null);let o=t&&ea(e.clientX,e.clientY);o&&er(i.id,o)},el=(e,t)=>`${e/t*100}%`,ed=0===R?3:R<=2?2:1,ec=E?.id&&et[E.id],ef=ec&&h?.find(e=>e.id===ec.group),eh=h?h.map(e=>({...e,ids:A.filter(t=>et[t].group===e.id)})):[{id:"words",title:"Words",ids:A}],ex=e=>{let{word:i}=et[e];return(0,t.jsxs)(k,{$selected:P===e,$dragging:B?.id===e,children:[(0,t.jsx)(L,{type:"button","aria-pressed":P===e,onPointerDown:t=>((e,t)=>{if(e.button>0||J.current)return;let i=e.currentTarget.getBoundingClientRect();J.current={id:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,offsetX:e.clientX-i.left,offsetY:e.clientY-i.top,dragging:!1},e.currentTarget.setPointerCapture?.(e.pointerId)})(t,e),onPointerMove:es,onPointerUp:e=>en(e,!0),onPointerCancel:e=>en(e,!1),onClick:t=>{!(t.timeStamp<Q.current)&&(q(t=>t===e?null:e),O(null))},onContextMenu:e=>e.preventDefault(),children:i}),(0,t.jsx)(v,{type:"button",onClick:()=>a(i),"aria-label":`Listen to ${i}`,children:(0,t.jsx)(U,{})})]},e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{children:o}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{$ratio:`${r} / ${s}`,children:[(0,t.jsxs)("svg",{viewBox:`0 0 ${r} ${s}`,role:"img","aria-label":e.title,children:[(0,t.jsx)(n,{}),l.map(({id:e,dot:i,box:o})=>{let[a,r]=i,s=[I(a,o[0]-H/2,o[0]+H/2),I(r,o[1]-30,o[1]+30)];return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:a,y1:r,x2:s[0],y2:s[1],stroke:"#24324a",strokeOpacity:.45,strokeWidth:6,strokeLinecap:"round"}),(0,t.jsx)("line",{x1:a,y1:r,x2:s[0],y2:s[1],stroke:"#fff",strokeWidth:2.5,strokeDasharray:"6 5",strokeLinecap:"round"}),(0,t.jsx)("circle",{cx:a,cy:r,r:8,fill:T[e]?"#2f9e5b":"#fff",stroke:"#24324a",strokeWidth:3})]},e)})]}),l.map(({id:e,word:i,box:o},n)=>{let l={left:el(o[0]-H/2,r),top:el(o[1]-30,s),width:el(H,r),height:el(60,s)};return T[e]?(0,t.jsxs)(p,{style:l,"data-testid":`box-${e}`,children:[i,(0,t.jsx)(g,{type:"button",onClick:()=>a(i),"aria-label":`Listen to ${i}`,children:(0,t.jsx)(U,{})})]},e):(0,t.jsx)(x,{type:"button",style:l,ref:t=>{K.current[e]=t},onClick:()=>{P?er(P,e):O({kind:"hint"})},"aria-label":`Box ${n+1}`,"data-testid":`box-${e}`,$over:G===e,$ready:!!P,$wrong:Y===e,children:"?"},e)})]}),(0,t.jsxs)(u,{children:[eo?(0,t.jsxs)(_,{role:"status",children:[(0,t.jsx)("h2",{children:"Well done, Julia!"}),(0,t.jsx)(W,{"aria-label":`${ed} out of 3 stars`,children:[1,2,3].map(e=>(0,t.jsx)("span",{"data-off":e>ed||void 0,children:"⭐"},e))}),(0,t.jsx)("p",{children:0===R?"Every word right first time!":`${R} ${1===R?"mistake":"mistakes"} on the way.`}),(0,t.jsx)(Z,{type:"button",onClick:()=>{S((e=>{let t=[...e];for(let e=t.length-1;e>0;e-=1){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t})(l.map(e=>e.id))),z({}),q(null),F(0),O(null)},children:"Play again"})]}):(0,t.jsxs)(t.Fragment,{children:[h?(0,t.jsx)(m,{children:eh.map(({id:e,title:i,ids:o})=>{let a=o.filter(e=>!T[e]);return(0,t.jsxs)(j,{children:[(0,t.jsx)(b,{children:i}),a.length>0?(0,t.jsx)(y,{"aria-label":i,children:a.map(ex)}):(0,t.jsx)(w,{children:"✓ All in place"})]},e)})}):(0,t.jsx)(y,{"aria-label":"Words",children:A.filter(e=>!T[e]).map(ex)}),(0,t.jsx)(M,{children:`${ei} of ${l.length} done`})]}),(0,t.jsx)("div",{"aria-live":"polite",children:E&&!eo&&(0,t.jsxs)(C,{$kind:E.kind,children:["right"===E.kind&&(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:`✓ ${ec.word}${ef?` (${ef.name})`:""}: `}),ec.definition]}),"wrong"===E.kind&&(0,t.jsx)("span",{children:"Not quite. Try another box!"}),"hint"===E.kind&&(0,t.jsx)("span",{children:"First pick a word, then tap its box."})]})})]})]}),B&&(0,t.jsx)($,{style:{left:B.x,top:B.y},"aria-hidden":"true",children:et[B.id].word})]})}function H({x:e,y:i,wall:o,roof:a}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-10,y:i,width:20,height:14,fill:o,stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:`M${e-13},${i+1} L${e},${i-10} L${e+13},${i+1} Z`,fill:a})]})}function A({x:e,y:i}){return(0,t.jsxs)("g",{fill:"#fff",opacity:.9,children:[(0,t.jsx)("ellipse",{cx:e,cy:i,rx:42,ry:16}),(0,t.jsx)("circle",{cx:e-14,cy:i-12,r:16}),(0,t.jsx)("circle",{cx:e+12,cy:i-16,r:20})]})}let S=["M174,171 L200,140 L226,164 L212,160 L200,172 L188,162 Z","M306,135 L340,88 L374,135 L358,128 L340,142 L322,128 Z","M498,178 L520,152 L544,180 L530,176 L520,184 L510,175 Z"],T="M365,333 C470,380 380,430 470,470 C560,510 520,580 600,640",z=[[742,286,"#fff4e0","#d9634a"],[770,276,"#ffe9c7","#c95440"],[828,272,"#fff4e0","#e07a4a"],[856,284,"#ffe9c7","#d9634a"],[720,298,"#ffe9c7","#e07a4a"],[880,296,"#fff4e0","#c95440"]],P=[[120,70],[690,80]],q=[[60,600],[300,520],[330,610],[640,600],[760,520],[960,620],[40,420]];function B({x:e,y:i,width:o,height:a,wall:r,roof:s}){let n=e-o/2;return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:n,y:i,width:o,height:a,fill:r,stroke:"#8a6a4a",strokeWidth:2}),(0,t.jsx)("path",{d:`M${n-10},${i+2} L${e},${i-.6*a} L${n+o+10},${i+2} Z`,fill:s,stroke:"#9c4632",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("rect",{x:e-8,y:i+a-26,width:16,height:26,fill:"#8a5a3a"}),(0,t.jsx)("rect",{x:n+8,y:i+10,width:14,height:14,fill:"#bfe6ff",stroke:"#8a6a4a",strokeWidth:1.5}),(0,t.jsx)("rect",{x:n+o-22,y:i+10,width:14,height:14,fill:"#bfe6ff",stroke:"#8a6a4a",strokeWidth:1.5})]})}let D="M0,0 H1000 V165 C975,170 950,172 935,172 C925,200 900,240 888,268 C878,240 870,205 860,182 C850,120 800,92 770,110 C745,125 742,160 740,192 C725,198 712,200 700,202 C712,260 760,320 742,382 C722,442 628,452 596,405 C572,365 590,280 588,215 C585,140 540,78 450,72 C360,68 310,130 305,212 C295,280 255,330 245,420 C236,500 215,570 200,640 H0 Z",G="M303,225 C293,285 256,333 247,410",V="M790,505 C790,470 840,460 870,465 C915,472 928,500 915,525 C900,550 830,552 805,535 C793,527 790,515 790,505 Z",Y=[{cx:355,cy:300,rx:26,ry:18,rotate:-12},{cx:420,cy:270,rx:16,ry:11,rotate:20},{cx:458,cy:335,rx:28,ry:19,rotate:8},{cx:385,cy:378,rx:19,ry:13,rotate:-25},{cx:508,cy:292,rx:14,ry:10,rotate:0},{cx:485,cy:402,rx:17,ry:12,rotate:15}],X=[[45,398],[178,404],[40,530],[120,545],[68,600],[150,600],[372,28],[560,28],[612,46],[952,58],[980,112],[690,130],[640,262],[700,318],[628,372],[872,492],[832,512]],R=[[470,30],[505,42],[538,28]],F=[[560,560],[950,430],[300,610],[770,250],[975,600],[360,460],[540,470],[680,600],[820,400],[990,300]],E=[[960,255],[530,228],[610,520]];function O({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-2,y:i+6,width:4,height:9,rx:1,fill:"#7a5532"}),(0,t.jsx)("circle",{cx:e,cy:i,r:11,fill:"#3f8f3a"}),(0,t.jsx)("circle",{cx:e-3,cy:i-3,r:4,fill:"#5fb04f"})]})}function K({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-11,y:i,width:22,height:16,fill:"#fff4e0",stroke:"#8a6a4a",strokeWidth:1.5}),(0,t.jsx)("path",{d:`M${e-14},${i+1} L${e},${i-12} L${e+14},${i+1} Z`,fill:"#e06a4a"}),(0,t.jsx)("rect",{x:e-3,y:i+7,width:6,height:9,fill:"#8a6a4a"})]})}let J=[[210,112],[370,132],[520,92],[690,122],[850,102]],Q="M500,318 C480,380 540,430 502,500 C470,560 522,600 512,640",ee="M445,478 L482,500 L530,500 C590,505 650,520 705,545 L880,505 L742,460 L880,410 L782,360 L860,320",et=[[370,448,"#fff4e0","#d9634a"],[398,438,"#ffe9c7","#c95440"],[426,452,"#fff4e0","#e07a4a"],[384,470,"#ffe9c7","#e07a4a"],[414,476,"#fff4e0","#d9634a"]],ei=[[60,262],[150,284],[250,318],[52,470],[140,590],[62,610],[250,520],[960,240],[980,330],[940,440],[980,520]];function eo({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-3,y:i+8,width:6,height:10,fill:"#6b4a2b"}),(0,t.jsx)("path",{d:`M${e},${i-30} L${e+16},${i+10} H${e-16} Z`,fill:"#2f7a3a"}),(0,t.jsx)("path",{d:`M${e},${i-40} L${e+12},${i-10} H${e-12} Z`,fill:"#3a8f45"})]})}let ea="M500,482 C494,520 508,550 500,585 C494,610 506,628 503,640",er=[[452,450],[548,452],[470,512],[530,514],[880,520],[930,545]],es=[[40,600],[260,610],[700,615],[860,600],[960,620]];function en({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-2,y:i+6,width:4,height:8,fill:"#6b4a2b"}),(0,t.jsx)("path",{d:`M${e},${i-22} L${e+11},${i+7} H${e-11} Z`,fill:"#2f7a3a"})]})}let el=[{d:"M0,440 L260,430 L300,520 L0,540 Z",fill:"#f2d46b",rows:"#e0bb45"},{d:"M260,430 L420,425 L470,510 L300,520 Z",fill:"#c99a62",rows:"#a87a46"},{d:"M0,540 L300,520 L340,640 H0 Z",fill:"#8cc96a",rows:"#6fae50"},{d:"M300,520 L470,510 L520,640 H340 Z",fill:"#d6e97e",rows:"#b5cc5c"}],ed=["M20,455 L270,447 M15,475 L280,467 M10,495 L288,487 M5,515 L295,507","M285,445 L425,440 M292,465 L438,460 M298,485 L452,480","M10,560 L305,540 M10,585 L315,565 M10,610 L325,590","M318,540 L478,532 M325,565 L490,557 M332,590 L500,582 M338,615 L510,607"],ec=[[436,368,"#fff4e0","#d9634a"],[462,372,"#ffe9c7","#c95440"],[530,370,"#fff4e0","#e07a4a"],[556,376,"#ffe9c7","#d9634a"],[448,388,"#ffe9c7","#e07a4a"],[540,392,"#fff4e0","#c95440"]],ef=[[834,232,30,92,"#9fb4c9"],[867,192,34,132,"#7f97b0"],[904,150,32,174,"#a9bdd0"],[939,208,28,116,"#8aa2ba"],[970,176,30,148,"#9cb0c4"]],eh=[[640,362],[700,470],[520,470],[960,420],[940,520]];function ex({x:e,y:i,width:o,height:a,fill:r}){let s=[];for(let t=i+10;t<i+a-10;t+=16)for(let i=e+6;i<e+o-8;i+=10)s.push([i,t]);return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e,y:i,width:o,height:a,fill:r,stroke:"#5f738a",strokeWidth:1.5}),s.map(([e,i])=>(0,t.jsx)("rect",{x:e,y:i,width:5,height:7,fill:"#e8f4ff"},`${e},${i}`))]})}function ep({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e,y:i,width:22,height:30,fill:"#f1e2c8",stroke:"#8a6a4a",strokeWidth:1}),[i+5,i+14,i+23].map(i=>(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e+4,y:i,width:5,height:5,fill:"#bfe6ff"}),(0,t.jsx)("rect",{x:e+13,y:i,width:5,height:5,fill:"#bfe6ff"})]},i))]})}function eg({x:e,y:i}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-2,y:i+4,width:4,height:8,fill:"#7a5532"}),(0,t.jsx)("circle",{cx:e,cy:i,r:9,fill:"#4a9e42"})]})}let eu=[{slug:"social-science",title:"Social Science",icon:"🌍",units:[{slug:"unit-1",title:"Unit 1",icon:"🏖️",exercises:[{slug:"landscape",title:"Landscape",instructions:"Drag each word to its box on the picture. Tap the speaker to hear it.",width:1e3,height:640,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"landscape-sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#9fd8f7"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#e4f5fd"})]})}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#landscape-sky)"}),(0,t.jsx)("circle",{cx:930,cy:70,r:36,fill:"#ffd34d"}),(0,t.jsx)("circle",{cx:930,cy:70,r:48,fill:"#ffd34d",opacity:.25}),P.map(([e,i])=>(0,t.jsx)(A,{x:e,y:i},`${e},${i}`)),(0,t.jsx)("path",{d:"M60,305 L200,140 L262,196 L340,88 L452,212 L520,152 L660,305 Z",fill:"#9a8570",stroke:"#7d6a57",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M340,88 L452,212 L520,152 L660,305 L400,305 Z",fill:"#86725f",opacity:.6}),S.map(e=>(0,t.jsx)("path",{d:e,fill:"#fff"},e)),(0,t.jsx)("path",{d:"M480,330 C600,250 780,238 1000,262 V420 H480 Z",fill:"#8cc96a"}),(0,t.jsx)("path",{d:"M0,300 C200,285 400,300 520,312 C700,330 850,320 1000,334 V640 H0 Z",fill:"#a8d97f"}),(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:792,y:238,width:16,height:46,fill:"#fff4e0",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:"M788,240 L800,220 L812,240 Z",fill:"#c95440"}),(0,t.jsx)("rect",{x:797,y:248,width:6,height:8,fill:"#8a6a4a"}),z.map(([e,i,o,a])=>(0,t.jsx)(H,{x:e,y:i,wall:o,roof:a},`${e},${i}`))]}),(0,t.jsx)("ellipse",{cx:250,cy:330,rx:122,ry:24,fill:"#5bb3e6",stroke:"#3f95c8",strokeWidth:2}),(0,t.jsx)("path",{d:"M170,326 q10,-5 20,0 M260,334 q10,-5 20,0",fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",opacity:.8}),(0,t.jsx)("path",{d:T,fill:"none",stroke:"#3f95c8",strokeWidth:32,strokeLinecap:"round"}),(0,t.jsx)("path",{d:T,fill:"none",stroke:"#5bb3e6",strokeWidth:24,strokeLinecap:"round"}),(0,t.jsx)("path",{d:T,fill:"none",stroke:"#fff",strokeWidth:2,strokeDasharray:"8 26",strokeLinecap:"round",opacity:.8}),(0,t.jsxs)("g",{fill:"none",stroke:"#e4cf9e",strokeWidth:10,strokeLinecap:"round",children:[(0,t.jsx)("path",{d:"M190,505 C250,450 330,402 385,397"}),(0,t.jsx)("path",{d:"M465,397 C560,395 680,330 760,300"})]}),(0,t.jsx)("path",{d:"M383,390 H467 V414 H452 A27,15 0 0 0 398,414 H383 Z",fill:"#c9b79c",stroke:"#8a7458",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M383,390 H467",stroke:"#8a7458",strokeWidth:4}),(0,t.jsx)(B,{x:115,y:470,width:96,height:72,wall:"#fff4e0",roof:"#e06a4a"}),(0,t.jsx)(B,{x:225,y:500,width:80,height:62,wall:"#ffe3b8",roof:"#d9634a"}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M870,600 L874,500 L894,500 L898,600 Z",fill:"#7a5532"}),(0,t.jsx)("circle",{cx:842,cy:505,r:42,fill:"#3f8f3a"}),(0,t.jsx)("circle",{cx:926,cy:508,r:40,fill:"#3f8f3a"}),(0,t.jsx)("circle",{cx:884,cy:474,r:58,fill:"#4a9e42"}),(0,t.jsx)("circle",{cx:866,cy:458,r:18,fill:"#64b555"})]}),q.map(([e,i])=>(0,t.jsxs)("g",{children:[(0,t.jsx)("circle",{cx:e,cy:i,r:5,fill:"#ff8fb1"}),(0,t.jsx)("circle",{cx:e,cy:i,r:2,fill:"#ffd34d"})]},`${e},${i}`))]})},groups:[{id:"physical",title:"Physical features (natural)",name:"physical feature"},{id:"human",title:"Human features",name:"human feature"}],items:[{id:"mountain",group:"physical",word:"Mountain",definition:"A very high piece of land with steep sides.",dot:[340,150],box:[340,42]},{id:"lake",group:"physical",word:"Lake",definition:"A large area of water with land all around it.",dot:[215,332],box:[100,400]},{id:"river",group:"physical",word:"River",definition:"Water that flows across the land to the sea, a lake or another river.",dot:[532,556],box:[390,560]},{id:"tree",group:"physical",word:"Tree",definition:"A tall plant with a wooden trunk, branches and leaves.",dot:[870,480],box:[700,600]},{id:"houses",group:"human",word:"Houses",definition:"Buildings where people live.",dot:[115,505],box:[160,600]},{id:"bridge",group:"human",word:"Bridge",definition:"Something built over a river or a road so that people can cross it.",dot:[440,398],box:[590,455]},{id:"village",group:"human",word:"Village",definition:"A small group of houses and other buildings in the countryside.",dot:[800,270],box:[800,190]}]},{slug:"coastal-landscape",title:"Coastal landscape",instructions:"Drag each word to its box on the picture. Tap the speaker to hear it.",width:1e3,height:640,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"coast-sea",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#8fd6f2"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#3f9bd3"})]}),(0,t.jsxs)("linearGradient",{id:"coast-land",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#a8d97f"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#8cc96a"})]})]}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#coast-sea)"}),(0,t.jsxs)("g",{fill:"none",stroke:"#c8f0fb",strokeWidth:18,strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:D}),(0,t.jsx)("path",{d:V}),Y.map(({cx:e,cy:i,rx:o,ry:a,rotate:r})=>(0,t.jsx)("ellipse",{cx:e,cy:i,rx:o,ry:a,transform:`rotate(${r} ${e} ${i})`},`${e},${i}`))]}),(0,t.jsx)("g",{fill:"none",stroke:"#fff",strokeWidth:3,strokeLinecap:"round",opacity:.7,children:F.map(e=>(0,t.jsx)("path",{d:(([e,t])=>`M${e},${t} q8,-7 16,0 t16,0`)(e)},e.join()))}),(0,t.jsxs)("g",{fill:"url(#coast-land)",stroke:"#5b9a45",strokeWidth:3,strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:D}),(0,t.jsx)("path",{d:V}),Y.map(({cx:e,cy:i,rx:o,ry:a,rotate:r})=>(0,t.jsx)("ellipse",{cx:e,cy:i,rx:o,ry:a,transform:`rotate(${r} ${e} ${i})`},`${e},${i}`))]}),(0,t.jsx)("path",{d:G,fill:"none",stroke:"#f4d98e",strokeWidth:26,strokeLinecap:"round"}),(0,t.jsx)("path",{d:G,fill:"none",stroke:"#e9c46a",strokeWidth:2,strokeDasharray:"2 9",strokeLinecap:"round"}),(0,t.jsx)("rect",{x:256,y:348,width:10,height:16,rx:2,fill:"#4fa3e0",transform:"rotate(-20 261 356)"}),(0,t.jsx)("path",{d:"M268,298 a14,14 0 0 1 28,0 Z",fill:"#ef5b5b"}),(0,t.jsx)("path",{d:"M275,298 a7,14 0 0 1 14,0 Z",fill:"#fff"}),(0,t.jsx)("line",{x1:282,y1:298,x2:282,y2:312,stroke:"#7a5532",strokeWidth:2}),(0,t.jsx)("path",{d:"M236,488 L228,540 L216,592 L202,640 L168,640 L182,590 L195,540 L205,492 Z",fill:"#a7835f",stroke:"#7a5a3e",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsxs)("g",{stroke:"#7a5a3e",strokeWidth:2,strokeLinecap:"round",children:[(0,t.jsx)("line",{x1:206,y1:512,x2:230,y2:514}),(0,t.jsx)("line",{x1:198,y1:546,x2:225,y2:548}),(0,t.jsx)("line",{x1:189,y1:580,x2:217,y2:582}),(0,t.jsx)("line",{x1:180,y1:614,x2:207,y2:616})]}),(0,t.jsxs)("g",{fill:"#9a9a9a",stroke:"#6f6f6f",strokeWidth:1.5,children:[(0,t.jsx)("ellipse",{cx:241,cy:566,rx:7,ry:5}),(0,t.jsx)("ellipse",{cx:233,cy:612,rx:9,ry:6}),(0,t.jsx)("ellipse",{cx:250,cy:598,rx:5,ry:4})]}),(0,t.jsx)("path",{d:"M30,215 L100,92 L170,215 Z",fill:"#a8927a"}),(0,t.jsx)("path",{d:"M120,215 L195,62 L272,215 Z",fill:"#94806a"}),(0,t.jsx)("path",{d:"M82,124 L100,92 L118,124 L108,118 L100,126 L92,118 Z",fill:"#fff"}),(0,t.jsx)("path",{d:"M175,103 L195,62 L215,103 L204,96 L195,106 L186,96 Z",fill:"#fff"}),X.map(([e,i])=>(0,t.jsx)(O,{x:e,y:i},`${e},${i}`)),R.map(([e,i])=>(0,t.jsx)(K,{x:e,y:i},`${e},${i}`)),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M884,232 L898,232 L895,200 L887,200 Z",fill:"#fff",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("rect",{x:886,y:211,width:10,height:6,fill:"#e5484d"}),(0,t.jsx)("rect",{x:885,y:222,width:12,height:6,fill:"#e5484d"}),(0,t.jsx)("rect",{x:886,y:193,width:10,height:7,fill:"#ffd34d",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:"M884,193 L891,186 L898,193 Z",fill:"#e5484d"})]}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M528,600 L572,600 L564,612 L536,612 Z",fill:"#8a5a3a"}),(0,t.jsx)("path",{d:"M549,598 L549,566 L570,596 Z",fill:"#fff",stroke:"#c9d6df",strokeWidth:1}),(0,t.jsx)("path",{d:"M547,598 L547,572 L532,596 Z",fill:"#ffd34d"})]}),(0,t.jsx)("g",{fill:"none",stroke:"#2c3e50",strokeWidth:2,strokeLinecap:"round",opacity:.6,children:E.map(e=>(0,t.jsx)("path",{d:(([e,t])=>`M${e},${t} q6,-7 12,0 q6,-7 12,0`)(e)},e.join()))})]})},items:[{id:"cape",word:"Cape",definition:"A pointed piece of land that sticks out into the sea.",dot:[888,252],box:[890,345]},{id:"beach",word:"Beach",definition:"A flat strip of sand or small stones next to the sea.",dot:[271,322],box:[115,330]},{id:"bay",word:"Bay",definition:"A part of the sea that goes into the land. It is smaller than a gulf.",dot:[795,150],box:[800,50]},{id:"gulf",word:"Gulf",definition:"A big part of the sea that goes into the land. It is bigger than a bay.",dot:[445,112],box:[445,178]},{id:"peninsula",word:"Peninsula",definition:"A large piece of land surrounded by water on three sides.",dot:[665,345],box:[665,505]},{id:"cliff",word:"Cliff",definition:"A high, steep wall of rock next to the sea.",dot:[214,548],box:[115,460]},{id:"island",word:"Island",definition:"A piece of land completely surrounded by water.",dot:[855,540],box:[855,598]},{id:"archipelago",word:"Archipelago",definition:"A group of islands close together.",dot:[422,335],box:[410,490]}]},{slug:"mountain-landscapes",title:"Mountain landscapes",instructions:"Drag each word to its box on the picture. Tap the speaker to hear it.",width:1e3,height:640,boxWidth:220,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"mountain-sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#9fd8f7"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#e4f5fd"})]})}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#mountain-sky)"}),(0,t.jsx)(A,{x:110,y:70}),(0,t.jsx)(A,{x:720,y:50}),(0,t.jsx)("path",{d:"M0,305 L70,172 L130,232 L210,112 L290,212 L370,132 L450,222 L520,92 L610,202 L690,122 L770,212 L850,102 L930,192 L1000,152 V305 Z",fill:"#8f9bb3",stroke:"#76829b",strokeWidth:2,strokeLinejoin:"round"}),J.map(e=>(0,t.jsx)("path",{d:(([e,t])=>`M${e-26},${t+34} L${e},${t} L${e+26},${t+34} L${e+12},${t+28} L${e},${t+38} L${e-12},${t+28} Z`)(e),fill:"#fff"},e.join())),(0,t.jsx)("rect",{y:300,width:1e3,height:340,fill:"#b5e08c"}),(0,t.jsx)("path",{d:Q,fill:"none",stroke:"#3f95c8",strokeWidth:28,strokeLinecap:"round"}),(0,t.jsx)("path",{d:Q,fill:"none",stroke:"#5bb3e6",strokeWidth:20,strokeLinecap:"round"}),(0,t.jsx)("path",{d:Q,fill:"none",stroke:"#fff",strokeWidth:2,strokeDasharray:"8 24",strokeLinecap:"round",opacity:.8}),(0,t.jsx)("path",{d:"M0,180 C120,200 260,280 400,330 C330,420 260,540 230,640 H0 Z",fill:"#7cb661",stroke:"#5f9a48",strokeWidth:3,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M1000,170 C880,190 740,280 600,330 C680,420 760,540 790,640 H1000 Z",fill:"#86bd69",stroke:"#5f9a48",strokeWidth:3,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M796,334 C790,262 930,248 940,334 Z",fill:"#a4a4a4",stroke:"#7d7d7d",strokeWidth:2}),(0,t.jsx)("path",{d:ee,fill:"none",stroke:"#8a7458",strokeWidth:10,strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:ee,fill:"none",stroke:"#e4cf9e",strokeWidth:7,strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M833,334 V312 A27,27 0 0 1 887,312 V334 Z",fill:"#2b2b2b",stroke:"#d4d4d4",strokeWidth:5,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M478,494 H534 V510 H524 A17,10 0 0 0 488,510 H478 Z",fill:"#c9b79c",stroke:"#8a7458",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:346,y:432,width:14,height:36,fill:"#fff4e0",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:"M343,434 L353,416 L363,434 Z",fill:"#c95440"}),et.map(([e,i,o,a])=>(0,t.jsx)(H,{x:e,y:i,wall:o,roof:a},`${e},${i}`))]}),ei.map(([e,i])=>(0,t.jsx)(eo,{x:e,y:i},`${e},${i}`))]})},groups:[{id:"physical",title:"Physical features (natural)",name:"physical feature"},{id:"human",title:"Human features",name:"human feature"}],items:[{id:"mountain-range",group:"physical",word:"Mountain range",definition:"A long line of mountains joined together.",dot:[520,160],box:[520,42]},{id:"valley",group:"physical",word:"Valley",definition:"The low land between mountains or hills, often with a river along it.",dot:[610,455],box:[640,380]},{id:"river",group:"physical",word:"River",definition:"Water that flows across the land to the sea, a lake or another river.",dot:[515,605],box:[640,605]},{id:"small-village",group:"human",word:"Small village",definition:"A few houses and other buildings together in the countryside.",dot:[398,455],box:[165,395]},{id:"narrow-road",group:"human",word:"Narrow road",definition:"A thin road, often with many bends to climb up a mountain.",dot:[792,525],box:[878,595]},{id:"tunnel",group:"human",word:"Tunnel",definition:"A passage dug through a mountain so that a road or a railway can go through it.",dot:[860,318],box:[860,222]},{id:"bridge",group:"human",word:"Bridge",definition:"Something built over a river or a road so that people can cross it.",dot:[506,497],box:[380,585]}],more:[{title:"Parts of a mountain",instructions:"Now put the parts of a mountain in their boxes.",width:1e3,height:640,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"parts-sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#9fd8f7"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#e4f5fd"})]})}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#parts-sky)"}),(0,t.jsx)(A,{x:560,y:80}),(0,t.jsx)(A,{x:900,y:60}),(0,t.jsx)("path",{d:"M500,580 C525,550 545,505 560,470 L720,150 L860,470 C890,535 960,563 1040,565 Z",fill:"#9aa6bd",stroke:"#7d899f",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M690,210 L720,150 L746,210 L733,200 L720,214 L706,200 Z",fill:"#fff"}),(0,t.jsx)("path",{d:"M-40,565 C40,563 110,535 150,465 L300,100 L440,465 C455,505 475,550 500,580 Z",fill:"#a08a72",stroke:"#7d6a57",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M300,100 L440,465 C455,505 475,550 500,580 H300 Z",fill:"#86725f",opacity:.5}),(0,t.jsx)("path",{d:"M271,170 L300,100 L327,170 L313,160 L300,174 L287,160 Z",fill:"#fff"}),(0,t.jsx)("path",{d:"M415,400 L440,465 C455,505 475,550 500,580 C525,550 545,505 560,470 L595,400 C560,420 450,420 415,400 Z",fill:"#8cc96a",stroke:"#6fae50",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M0,556 H468 C482,556 492,578 500,586 C508,578 518,556 532,556 H1000 V640 H0 Z",fill:"#a8d97f"}),(0,t.jsx)("path",{d:ea,fill:"none",stroke:"#3f95c8",strokeWidth:12,strokeLinecap:"round"}),(0,t.jsx)("path",{d:ea,fill:"none",stroke:"#5bb3e6",strokeWidth:7,strokeLinecap:"round"}),er.map(([e,i])=>(0,t.jsx)(en,{x:e,y:i},`${e},${i}`)),es.map(([e,i])=>(0,t.jsx)("circle",{cx:e,cy:i,r:10,fill:"#6fae50"},`${e},${i}`))]})},items:[{id:"peak",word:"Peak",definition:"The highest point at the top of a mountain.",dot:[300,112],box:[130,95]},{id:"slope",word:"Slope",definition:"The side of a mountain, between the peak and the foot.",dot:[242,300],box:[95,320]},{id:"foot",word:"Foot",definition:"The lowest part of a mountain, where it meets the flat land.",dot:[70,560],box:[190,605]},{id:"valley",word:"Valley",definition:"The low land between mountains or hills, often with a river along it.",dot:[500,512],box:[510,280]}]}]},{slug:"flat-landscape",title:"Flat landscape",instructions:"Drag each word to its box on the picture. Tap the speaker to hear it.",width:1e3,height:640,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"flat-sky",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#9fd8f7"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#e4f5fd"})]})}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#flat-sky)"}),(0,t.jsx)(A,{x:470,y:90}),(0,t.jsx)(A,{x:760,y:60}),(0,t.jsx)("path",{d:"M20,315 L72,172 H328 L382,315 Z",fill:"#b8956a",stroke:"#8f6f4a",strokeWidth:2,strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M72,172 H328 L334,188 H66 Z",fill:"#8cc96a"}),(0,t.jsx)("path",{d:"M100,230 L120,300 M180,215 L170,300 M260,225 L280,300",stroke:"#9f7d55",strokeWidth:3,strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M560,318 C620,198 760,198 820,318 Z",fill:"#8cc96a",stroke:"#5f9a48",strokeWidth:2}),(0,t.jsx)(eg,{x:668,y:240}),(0,t.jsx)(eg,{x:720,y:250}),ef.map(([e,i,o,a,r])=>(0,t.jsx)(ex,{x:e,y:i,width:o,height:a,fill:r},e)),(0,t.jsx)("rect",{y:312,width:1e3,height:328,fill:"#b9e08e"}),eh.map(([e,i])=>(0,t.jsx)(eg,{x:e,y:i},`${e},${i}`)),(0,t.jsxs)("g",{children:[(0,t.jsx)(ep,{x:480,y:342}),(0,t.jsx)(ep,{x:504,y:350}),(0,t.jsx)("rect",{x:418,y:336,width:14,height:40,fill:"#fff4e0",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:"M415,338 L425,320 L435,338 Z",fill:"#c95440"}),ec.map(([e,i,o,a])=>(0,t.jsx)(H,{x:e,y:i,wall:o,roof:a},`${e},${i}`))]}),el.map(({d:e,fill:i})=>(0,t.jsx)("path",{d:e,fill:i,stroke:"#fff",strokeWidth:3,strokeLinejoin:"round"},e)),ed.map((e,i)=>(0,t.jsx)("path",{d:e,fill:"none",stroke:el[i].rows,strokeWidth:3,strokeLinecap:"round"},e)),(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:360,y:462,width:30,height:16,rx:3,fill:"#d94a3a"}),(0,t.jsx)("rect",{x:378,y:450,width:14,height:14,fill:"#d94a3a",stroke:"#8a2f25",strokeWidth:1}),(0,t.jsx)("circle",{cx:368,cy:480,r:8,fill:"#333"}),(0,t.jsx)("circle",{cx:388,cy:482,r:5,fill:"#333"})]}),(0,t.jsx)("path",{d:"M560,640 L760,640 L905,322 L875,322 Z",fill:"#7d838c"}),(0,t.jsx)("path",{d:"M560,640 L875,322 M760,640 L905,322",stroke:"#fff",strokeWidth:3}),(0,t.jsx)("path",{d:"M627,640 L885,322 M693,640 L895,322",stroke:"#fff",strokeWidth:3,strokeDasharray:"14 12"}),(0,t.jsx)("rect",{x:676,y:572,width:22,height:14,rx:3,fill:"#2f80ed"}),(0,t.jsx)("rect",{x:760,y:470,width:16,height:10,rx:2,fill:"#f2c94c"}),(0,t.jsx)("rect",{x:828,y:420,width:12,height:8,rx:2,fill:"#eb5757"})]})},groups:[{id:"physical",title:"Physical features (natural)",name:"physical feature"},{id:"human",title:"Human features",name:"human feature"}],items:[{id:"hill",group:"physical",word:"Hill",definition:"A piece of land that is higher than the land around it, but lower than a mountain.",dot:[640,270],box:[690,150]},{id:"plateau",group:"physical",word:"Plateau",definition:"A large area of high, flat land.",dot:[200,180],box:[200,90]},{id:"plain",group:"physical",word:"Plain",definition:"A large area of low, flat land.",dot:[620,495],box:[650,420]},{id:"city",group:"human",word:"City",definition:"A very big place where lots of people live and work, with tall buildings and busy streets.",dot:[920,230],box:[900,88]},{id:"town",group:"human",word:"Town",definition:"A place with many houses, shops and other buildings. It is bigger than a village but smaller than a city.",dot:[490,362],box:[470,255]},{id:"farmland",group:"human",word:"Farmland",definition:"Land used for growing crops or keeping animals.",dot:[170,482],box:[150,600]},{id:"motorway",group:"human",word:"Motorway",definition:"A wide, fast road with several lanes, for cars and lorries going long distances.",dot:[700,560],box:[895,565]}]}]}]},{slug:"english",title:"English",icon:"🇬🇧",units:[]}];var ey=e.i(22016);let em=r.U.div.withConfig({displayName:"style__Page",componentId:"sc-b60a6b4e-0"})`
  --s-bg: #fff7ea;
  --s-card: #fff;
  --s-ink: #24324a;
  --s-muted: #5d6b82;
  --s-line: #eadfc9;
  --s-accent: #ff7a59;
  --s-teal: #1f9e8f;
  --s-good: #2f9e5b;
  --s-good-bg: #e3f6e9;
  --s-bad: #e5484d;
  --s-bad-bg: #fde7e7;
  min-height: 100vh;
  min-height: 100svh;
  box-sizing: border-box;
  padding: 16px max(16px, env(safe-area-inset-right)) calc(24px + env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
  background: var(--s-bg);
  color: var(--s-ink);
  font-family: var(--font-study), var(--font-sans), system-ui, sans-serif;
  -webkit-tap-highlight-color: transparent;
  @media (min-width: 768px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`,ej=r.U.header.withConfig({displayName:"style__Header",componentId:"sc-b60a6b4e-1"})`
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 1240px;
  margin: 0 auto 16px;
`,eb=(0,r.U)(ey.default).withConfig({displayName:"style__Back",componentId:"sc-b60a6b4e-2"})`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  color: var(--s-ink);
  font-size: 24px;
  text-decoration: none;
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`,ew=r.U.div.withConfig({displayName:"style__Titles",componentId:"sc-b60a6b4e-3"})`
  min-width: 0;
`,ek=r.U.p.withConfig({displayName:"style__Kicker",componentId:"sc-b60a6b4e-4"})`
  margin: 0;
  color: var(--s-muted);
  font-size: 15px;
  font-weight: 500;
`,eL=r.U.h1.withConfig({displayName:"style__Title",componentId:"sc-b60a6b4e-5"})`
  margin: 0;
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 600;
  line-height: 1.15;
`,ev=r.U.main.withConfig({displayName:"style__Main",componentId:"sc-b60a6b4e-6"})`
  max-width: 1240px;
  margin: 0 auto;
  text-align: left;
  hyphens: manual;
`,e$=r.U.p.withConfig({displayName:"style__Empty",componentId:"sc-b60a6b4e-7"})`
  margin: 0;
  padding: 28px 20px;
  border-radius: 20px;
  border: 2px dashed var(--s-line);
  color: var(--s-muted);
  font-size: 20px;
  text-align: center;
`,eC=r.U.ul.withConfig({displayName:"style__Cards",componentId:"sc-b60a6b4e-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,eM=(0,r.U)(ey.default).withConfig({displayName:"style__Card",componentId:"sc-b60a6b4e-9"})`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 96px;
  padding: 18px 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-line);
  box-shadow: 0 4px 0 var(--s-line);
  color: var(--s-ink);
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 var(--s-line);
  }
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: 2px;
  }
`,e_=r.U.span.withConfig({displayName:"style__CardIcon",componentId:"sc-b60a6b4e-10"})`
  flex: none;
  font-size: 40px;
  line-height: 1;
`,eW=r.U.span.withConfig({displayName:"style__CardText",componentId:"sc-b60a6b4e-11"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 22px;
  font-weight: 600;
  small {
    color: var(--s-muted);
    font-size: 16px;
    font-weight: 400;
  }
`,eZ=r.U.section.withConfig({displayName:"style__Part",componentId:"sc-b60a6b4e-12"})`
  margin-top: 36px;
  padding-top: 24px;
  border-top: 2px dashed var(--s-line);
`,eI=r.U.h2.withConfig({displayName:"style__PartTitle",componentId:"sc-b60a6b4e-13"})`
  margin: 0 0 6px;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 600;
`;e.s(["CardList",0,function({cards:e,empty:i}){return 0===e.length?(0,t.jsx)(e$,{children:i}):(0,t.jsx)(eC,{children:e.map(({href:e,icon:i,title:o,subtitle:a})=>(0,t.jsx)("li",{children:(0,t.jsxs)(eM,{href:e,children:[(0,t.jsx)(e_,{"aria-hidden":"true",children:i}),(0,t.jsxs)(eW,{children:[o,a&&(0,t.jsx)("small",{children:a})]})]})},e))})},"Exercise",0,function({subject:e,unit:i,exercise:o}){let a,r,s=(a=eu.find(t=>t.slug===e),r=a?.units.find(e=>e.slug===i),r?.exercises.find(e=>e.slug===o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{exercise:s}),s.more?.map(e=>(0,t.jsxs)(eZ,{children:[(0,t.jsx)(eI,{children:e.title}),(0,t.jsx)(N,{exercise:e})]},e.title))]})},"StudyPage",0,function({title:e,kicker:i,back:o,children:a}){return(0,t.jsxs)(em,{children:[(0,t.jsxs)(ej,{children:[o&&(0,t.jsx)(eb,{href:o,"aria-label":"Back",children:"←"}),(0,t.jsxs)(ew,{children:[i&&(0,t.jsx)(ek,{children:i}),(0,t.jsx)(eL,{children:e})]})]}),(0,t.jsx)(ev,{children:a})]})}],79274)}]);