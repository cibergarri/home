(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},useLinkStatus:function(){return b}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),f=e.r(18967),u=e.r(5550),p=e.r(88540),h=e.r(91949),x=e.r(73668),g=e.r(9396);function m(t){var n;let r,i,o,[m,b]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:j,as:v,children:k,prefetch:C=null,passHref:_,replace:$,shallow:L,scroll:I,onClick:S,onMouseEnter:N,onTouchStart:U,legacyBehavior:M=!1,onNavigate:P,transitionTypes:T,ref:E,unstable_dynamicOnHover:O,...z}=t;r=k,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let B=s.default.useContext(d.AppRouterContext),A=!1!==C,R=!1===C?"none":!0===C?"full":"auto",W="none"!==R?"auto"===R?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,q="string"==typeof(n=v||j)?n:(0,l.formatUrl)(n);if(M){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");i=s.default.Children.only(r)}let Z=M?i&&"object"==typeof i&&i.ref:E,D,F=s.default.useCallback(e=>(null!==B&&(w.current=(0,h.mountLinkInstance)(e,q,B,W,A,b,D)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[A,q,B,W,b,D]),X={ref:(0,c.useMergedRef)(F,Z),onClick(t){M||"function"!=typeof S||S(t),M&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!B||t.defaultPrevented||function(t,n,r,i,o,a,s,l="none"){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{navigate:f}=e.r(32916);f(n,i?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,s,l)}}(t,q,w,$,I,P,T,R)},onMouseEnter(e){M||"function"!=typeof N||N(e),M&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),B&&A&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){M||"function"!=typeof U||U(e),M&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),B&&A&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,f.isAbsoluteUrl)(q)?X.href=q:M&&!_&&("a"!==i.type||"href"in i.props)||(X.href=(0,u.addBasePath)(q)),o=M?s.default.cloneElement(i,X):(0,a.jsx)("a",{...z,...X,children:r}),(0,a.jsx)(y.Provider,{value:m,children:o})}let y=(0,s.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(y);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18581,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(71645);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=o(e,r)),t&&(i.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},95057,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:n&&(d=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${d}${i}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},73668,(e,t,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),i=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},18967,(e,t,n)=>{e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return w},NormalizeError:function(){return y},PageNotFoundError:function(){return b},SP:function(){return x},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return v}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let x="u">typeof performance,g=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class y extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},79274,e=>{var t=e.i(43476),n=e.i(71645);let r="en-GB";function i(e){let t;if(!("speechSynthesis"in window))return;let{speechSynthesis:n}=window;n.cancel();let i=new window.SpeechSynthesisUtterance(e);i.lang=r,i.rate=.85;let o=(t=n.getVoices?.()??[]).find(e=>e.lang===r&&e.localService)??t.find(e=>e.lang===r)??t.find(e=>e.lang?.startsWith("en"));o&&(i.voice=o),n.speak(i)}var o=e.i(97053);let a=o.q`
  20%, 60% { transform: translateX(-6px) }
  40%, 80% { transform: translateX(6px) }
`,s=o.q`
  0% { transform: scale(0.6) }
  70% { transform: scale(1.08) }
  100% { transform: scale(1) }
`,l=o.q`
  50% { box-shadow: 0 0 0 5px rgba(31, 158, 143, 0.35) }
`,d=o.U.p.withConfig({displayName:"style__Instructions",componentId:"sc-33ac7500-0"})`
  margin: 0 0 14px;
  color: var(--s-muted);
  font-size: 18px;
`,c=o.U.div.withConfig({displayName:"style__Board",componentId:"sc-33ac7500-1"})`
  display: grid;
  gap: 16px;
  @media (orientation: landscape) and (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) 230px;
    align-items: start;
  }
`,f=o.U.div.withConfig({displayName:"style__Scene",componentId:"sc-33ac7500-2"})`
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
`,u=o.m`
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
`,p=o.U.button.withConfig({displayName:"style__EmptyBox",componentId:"sc-33ac7500-3"})`
  ${u}
  border: 0.35cqw dashed var(--s-ink);
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
  color: var(--s-muted);
  transition: background 0.15s, transform 0.15s;
  ${({$over:e})=>e&&o.m`
    background: #fff;
    border-style: solid;
    border-color: var(--s-teal);
    transform: scale(1.06);
  `}
  ${({$ready:e})=>e&&o.m`
    animation: ${l} 1.2s ease-in-out infinite;
  `}
  ${({$wrong:e})=>e&&o.m`
    border-style: solid;
    border-color: var(--s-bad);
    background: var(--s-bad-bg);
    animation: ${a} 0.45s;
  `}
  &:focus-visible {
    outline: 0.4cqw solid var(--s-teal);
    outline-offset: 0.3cqw;
  }
`,h=o.U.div.withConfig({displayName:"style__FilledBox",componentId:"sc-33ac7500-4"})`
  ${u}
  border: 0.35cqw solid var(--s-good);
  background: var(--s-good-bg);
  animation: ${s} 0.35s ease-out;
  white-space: nowrap;
`,x=o.U.button.withConfig({displayName:"style__BoxSpeaker",componentId:"sc-33ac7500-5"})`
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
`,g=o.U.div.withConfig({displayName:"style__Side",componentId:"sc-33ac7500-6"})`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,m=o.U.ul.withConfig({displayName:"style__Tray",componentId:"sc-33ac7500-7"})`
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
  }
`,y=o.U.li.withConfig({displayName:"style__Chip",componentId:"sc-33ac7500-8"})`
  display: flex;
  align-items: stretch;
  border-radius: 16px;
  background: var(--s-card);
  border: 2px solid ${({$selected:e})=>e?"var(--s-teal)":"var(--s-line)"};
  box-shadow: 0 4px 0 ${({$selected:e})=>e?"var(--s-teal)":"var(--s-line)"};
  opacity: ${({$dragging:e})=>e?.35:1};
  transition: opacity 0.15s, transform 0.15s;
  transform: ${({$selected:e})=>e?"translateY(-3px)":"none"};
`,b=o.U.button.withConfig({displayName:"style__Word",componentId:"sc-33ac7500-9"})`
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
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  &:focus-visible {
    outline: 3px solid var(--s-teal);
    outline-offset: -3px;
    border-radius: 14px;
  }
`,w=o.U.button.withConfig({displayName:"style__Speaker",componentId:"sc-33ac7500-10"})`
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
`,j=o.U.div.withConfig({displayName:"style__Ghost",componentId:"sc-33ac7500-11"})`
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
`,v=o.U.div.withConfig({displayName:"style__Message",componentId:"sc-33ac7500-12"})`
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
`,k=o.U.p.withConfig({displayName:"style__Progress",componentId:"sc-33ac7500-13"})`
  margin: 0;
  color: var(--s-muted);
  font-size: 17px;
  text-align: center;
`,C=o.U.div.withConfig({displayName:"style__Done",componentId:"sc-33ac7500-14"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  background: var(--s-card);
  border: 2px solid var(--s-good);
  text-align: center;
  animation: ${s} 0.4s ease-out;
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
`,_=o.U.div.withConfig({displayName:"style__Stars",componentId:"sc-33ac7500-15"})`
  font-size: 40px;
  letter-spacing: 6px;
  span[data-off] {
    filter: grayscale(1);
    opacity: 0.3;
  }
`,$=o.U.button.withConfig({displayName:"style__Again",componentId:"sc-33ac7500-16"})`
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
`,L=(e,t,n)=>Math.min(n,Math.max(t,e));function I(){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4 9.5h3.5L12 5.5v13l-4.5-4H4z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M15.5 9a4 4 0 0 1 0 6"}),(0,t.jsx)("path",{d:"M18.5 6.5a7.5 7.5 0 0 1 0 11"})]})}function S({exercise:e}){let{instructions:r,width:o,height:a,Drawing:s,items:l}=e,[u,N]=(0,n.useState)(()=>l.map(e=>e.id).reverse()),[U,M]=(0,n.useState)({}),[P,T]=(0,n.useState)(null),[E,O]=(0,n.useState)(null),[z,B]=(0,n.useState)(null),[A,R]=(0,n.useState)(null),[W,q]=(0,n.useState)(0),[Z,D]=(0,n.useState)(null),F=(0,n.useRef)({}),X=(0,n.useRef)(null),Y=(0,n.useRef)(0),K=(0,n.useRef)(null),G=Object.fromEntries(l.map(e=>[e.id,e])),H=Object.keys(U).length,V=H===l.length,J=(e,t)=>Object.keys(F.current).find(n=>{let r,i=F.current[n];return i&&!U[n]&&(r=i.getBoundingClientRect(),e>=r.left-18&&e<=r.right+18&&t>=r.top-18&&t<=r.bottom+18)})??null,Q=(e,t)=>{if(T(null),e===t){M(e=>({...e,[t]:!0})),D({kind:"right",id:e});return}q(e=>e+1),R(t),clearTimeout(K.current),K.current=setTimeout(()=>R(null),600),D({kind:"wrong",id:e})},ee=e=>{let t=X.current;if(!t||t.pointerId!==e.pointerId)return;let n=Math.hypot(e.clientX-t.startX,e.clientY-t.startY);(t.dragging||!(n<8))&&(t.dragging=!0,O({id:t.id,x:e.clientX-t.offsetX,y:e.clientY-t.offsetY}),B(J(e.clientX,e.clientY)))},et=(e,t)=>{let n=X.current;if(!n||n.pointerId!==e.pointerId||(X.current=null,!n.dragging))return;Y.current=e.timeStamp+400,O(null),B(null);let r=t&&J(e.clientX,e.clientY);r&&Q(n.id,r)},en=(e,t)=>`${e/t*100}%`,er=0===W?3:W<=2?2:1,ei=Z?.id&&G[Z.id];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{children:r}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(f,{$ratio:`${o} / ${a}`,children:[(0,t.jsxs)("svg",{viewBox:`0 0 ${o} ${a}`,role:"img","aria-label":e.title,children:[(0,t.jsx)(s,{}),l.map(({id:e,dot:n,box:r})=>{let[i,o]=n,a=[L(i,r[0]-90,r[0]+90),L(o,r[1]-30,r[1]+30)];return(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:i,y1:o,x2:a[0],y2:a[1],stroke:"#24324a",strokeOpacity:.45,strokeWidth:6,strokeLinecap:"round"}),(0,t.jsx)("line",{x1:i,y1:o,x2:a[0],y2:a[1],stroke:"#fff",strokeWidth:2.5,strokeDasharray:"6 5",strokeLinecap:"round"}),(0,t.jsx)("circle",{cx:i,cy:o,r:8,fill:U[e]?"#2f9e5b":"#fff",stroke:"#24324a",strokeWidth:3})]},e)})]}),l.map(({id:e,word:n,box:r},s)=>{let l={left:en(r[0]-90,o),top:en(r[1]-30,a),width:en(180,o),height:en(60,a)};return U[e]?(0,t.jsxs)(h,{style:l,"data-testid":`box-${e}`,children:[n,(0,t.jsx)(x,{type:"button",onClick:()=>i(n),"aria-label":`Listen to ${n}`,children:(0,t.jsx)(I,{})})]},e):(0,t.jsx)(p,{type:"button",style:l,ref:t=>{F.current[e]=t},onClick:()=>{P?Q(P,e):D({kind:"hint"})},"aria-label":`Box ${s+1}`,"data-testid":`box-${e}`,$over:z===e,$ready:!!P,$wrong:A===e,children:"?"},e)})]}),(0,t.jsxs)(g,{children:[V?(0,t.jsxs)(C,{role:"status",children:[(0,t.jsx)("h2",{children:"Well done, Julia!"}),(0,t.jsx)(_,{"aria-label":`${er} out of 3 stars`,children:[1,2,3].map(e=>(0,t.jsx)("span",{"data-off":e>er||void 0,children:"⭐"},e))}),(0,t.jsx)("p",{children:0===W?"Every word right first time!":`${W} ${1===W?"mistake":"mistakes"} on the way.`}),(0,t.jsx)($,{type:"button",onClick:()=>{N((e=>{let t=[...e];for(let e=t.length-1;e>0;e-=1){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t})(l.map(e=>e.id))),M({}),T(null),q(0),D(null)},children:"Play again"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{"aria-label":"Words",children:u.filter(e=>!U[e]).map(e=>{let{word:n}=G[e];return(0,t.jsxs)(y,{$selected:P===e,$dragging:E?.id===e,children:[(0,t.jsx)(b,{type:"button","aria-pressed":P===e,onPointerDown:t=>((e,t)=>{if(e.button>0||X.current)return;let n=e.currentTarget.getBoundingClientRect();X.current={id:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,offsetX:e.clientX-n.left,offsetY:e.clientY-n.top,dragging:!1},e.currentTarget.setPointerCapture?.(e.pointerId)})(t,e),onPointerMove:ee,onPointerUp:e=>et(e,!0),onPointerCancel:e=>et(e,!1),onClick:t=>{!(t.timeStamp<Y.current)&&(T(t=>t===e?null:e),D(null))},onContextMenu:e=>e.preventDefault(),children:n}),(0,t.jsx)(w,{type:"button",onClick:()=>i(n),"aria-label":`Listen to ${n}`,children:(0,t.jsx)(I,{})})]},e)})}),(0,t.jsx)(k,{children:`${H} of ${l.length} done`})]}),(0,t.jsx)("div",{"aria-live":"polite",children:Z&&!V&&(0,t.jsxs)(v,{$kind:Z.kind,children:["right"===Z.kind&&(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:`✓ ${ei.word}: `}),ei.definition]}),"wrong"===Z.kind&&(0,t.jsx)("span",{children:"Not quite. Try another box!"}),"hint"===Z.kind&&(0,t.jsx)("span",{children:"First pick a word, then tap its box."})]})})]})]}),E&&(0,t.jsx)(j,{style:{left:E.x,top:E.y},"aria-hidden":"true",children:G[E.id].word})]})}let N="M0,0 H1000 V165 C975,170 950,172 935,172 C925,200 900,240 888,268 C878,240 870,205 860,182 C850,120 800,92 770,110 C745,125 742,160 740,192 C725,198 712,200 700,202 C712,260 760,320 742,382 C722,442 628,452 596,405 C572,365 590,280 588,215 C585,140 540,78 450,72 C360,68 310,130 305,212 C295,280 255,330 245,420 C236,500 215,570 200,640 H0 Z",U="M303,225 C293,285 256,333 247,410",M="M790,505 C790,470 840,460 870,465 C915,472 928,500 915,525 C900,550 830,552 805,535 C793,527 790,515 790,505 Z",P=[{cx:355,cy:300,rx:26,ry:18,rotate:-12},{cx:420,cy:270,rx:16,ry:11,rotate:20},{cx:458,cy:335,rx:28,ry:19,rotate:8},{cx:385,cy:378,rx:19,ry:13,rotate:-25},{cx:508,cy:292,rx:14,ry:10,rotate:0},{cx:485,cy:402,rx:17,ry:12,rotate:15}],T=[[60,420],[112,468],[68,538],[150,585],[40,605],[190,520],[372,28],[560,28],[612,46],[952,58],[980,112],[690,130],[640,262],[700,318],[628,372],[872,492],[832,512]],E=[[470,30],[505,42],[538,28]],O=[[560,560],[950,430],[300,610],[770,250],[975,600],[360,460],[540,470],[680,600],[820,400],[990,300]],z=[[960,255],[530,228],[610,520]];function B({x:e,y:n}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-2,y:n+6,width:4,height:9,rx:1,fill:"#7a5532"}),(0,t.jsx)("circle",{cx:e,cy:n,r:11,fill:"#3f8f3a"}),(0,t.jsx)("circle",{cx:e-3,cy:n-3,r:4,fill:"#5fb04f"})]})}function A({x:e,y:n}){return(0,t.jsxs)("g",{children:[(0,t.jsx)("rect",{x:e-11,y:n,width:22,height:16,fill:"#fff4e0",stroke:"#8a6a4a",strokeWidth:1.5}),(0,t.jsx)("path",{d:`M${e-14},${n+1} L${e},${n-12} L${e+14},${n+1} Z`,fill:"#e06a4a"}),(0,t.jsx)("rect",{x:e-3,y:n+7,width:6,height:9,fill:"#8a6a4a"})]})}let R=[{slug:"social-science",title:"Social Science",icon:"🌍",units:[{slug:"unit-1",title:"Unit 1",icon:"🏖️",exercises:[{slug:"coastal-landscape",title:"Coastal landscape",instructions:"Drag each word to its box on the picture. Tap the speaker to hear it.",width:1e3,height:640,Drawing:function(){return(0,t.jsxs)("g",{children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"coast-sea",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#8fd6f2"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#3f9bd3"})]}),(0,t.jsxs)("linearGradient",{id:"coast-land",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#a8d97f"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#8cc96a"})]})]}),(0,t.jsx)("rect",{width:"1000",height:"640",fill:"url(#coast-sea)"}),(0,t.jsxs)("g",{fill:"none",stroke:"#c8f0fb",strokeWidth:18,strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:N}),(0,t.jsx)("path",{d:M}),P.map(({cx:e,cy:n,rx:r,ry:i,rotate:o})=>(0,t.jsx)("ellipse",{cx:e,cy:n,rx:r,ry:i,transform:`rotate(${o} ${e} ${n})`},`${e},${n}`))]}),(0,t.jsx)("g",{fill:"none",stroke:"#fff",strokeWidth:3,strokeLinecap:"round",opacity:.7,children:O.map(e=>(0,t.jsx)("path",{d:(([e,t])=>`M${e},${t} q8,-7 16,0 t16,0`)(e)},e.join()))}),(0,t.jsxs)("g",{fill:"url(#coast-land)",stroke:"#5b9a45",strokeWidth:3,strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:N}),(0,t.jsx)("path",{d:M}),P.map(({cx:e,cy:n,rx:r,ry:i,rotate:o})=>(0,t.jsx)("ellipse",{cx:e,cy:n,rx:r,ry:i,transform:`rotate(${o} ${e} ${n})`},`${e},${n}`))]}),(0,t.jsx)("path",{d:U,fill:"none",stroke:"#f4d98e",strokeWidth:26,strokeLinecap:"round"}),(0,t.jsx)("path",{d:U,fill:"none",stroke:"#e9c46a",strokeWidth:2,strokeDasharray:"2 9",strokeLinecap:"round"}),(0,t.jsx)("rect",{x:256,y:348,width:10,height:16,rx:2,fill:"#4fa3e0",transform:"rotate(-20 261 356)"}),(0,t.jsx)("path",{d:"M268,298 a14,14 0 0 1 28,0 Z",fill:"#ef5b5b"}),(0,t.jsx)("path",{d:"M275,298 a7,14 0 0 1 14,0 Z",fill:"#fff"}),(0,t.jsx)("line",{x1:282,y1:298,x2:282,y2:312,stroke:"#7a5532",strokeWidth:2}),(0,t.jsx)("path",{d:"M30,215 L100,92 L170,215 Z",fill:"#a8927a"}),(0,t.jsx)("path",{d:"M120,215 L195,62 L272,215 Z",fill:"#94806a"}),(0,t.jsx)("path",{d:"M82,124 L100,92 L118,124 L108,118 L100,126 L92,118 Z",fill:"#fff"}),(0,t.jsx)("path",{d:"M175,103 L195,62 L215,103 L204,96 L195,106 L186,96 Z",fill:"#fff"}),T.map(([e,n])=>(0,t.jsx)(B,{x:e,y:n},`${e},${n}`)),E.map(([e,n])=>(0,t.jsx)(A,{x:e,y:n},`${e},${n}`)),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M884,232 L898,232 L895,200 L887,200 Z",fill:"#fff",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("rect",{x:886,y:211,width:10,height:6,fill:"#e5484d"}),(0,t.jsx)("rect",{x:885,y:222,width:12,height:6,fill:"#e5484d"}),(0,t.jsx)("rect",{x:886,y:193,width:10,height:7,fill:"#ffd34d",stroke:"#8a6a4a",strokeWidth:1}),(0,t.jsx)("path",{d:"M884,193 L891,186 L898,193 Z",fill:"#e5484d"})]}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{d:"M528,600 L572,600 L564,612 L536,612 Z",fill:"#8a5a3a"}),(0,t.jsx)("path",{d:"M549,598 L549,566 L570,596 Z",fill:"#fff",stroke:"#c9d6df",strokeWidth:1}),(0,t.jsx)("path",{d:"M547,598 L547,572 L532,596 Z",fill:"#ffd34d"})]}),(0,t.jsx)("g",{fill:"none",stroke:"#2c3e50",strokeWidth:2,strokeLinecap:"round",opacity:.6,children:z.map(e=>(0,t.jsx)("path",{d:(([e,t])=>`M${e},${t} q6,-7 12,0 q6,-7 12,0`)(e)},e.join()))})]})},items:[{id:"cape",word:"Cape",definition:"A pointed piece of land that sticks out into the sea.",dot:[888,252],box:[890,345]},{id:"beach",word:"Beach",definition:"A flat strip of sand or small stones next to the sea.",dot:[271,322],box:[115,330]},{id:"bay",word:"Bay",definition:"A part of the sea that goes into the land. It is smaller than a gulf.",dot:[795,150],box:[800,50]},{id:"gulf",word:"Gulf",definition:"A big part of the sea that goes into the land. It is bigger than a bay.",dot:[445,112],box:[445,178]},{id:"peninsula",word:"Peninsula",definition:"A large piece of land surrounded by water on three sides.",dot:[665,345],box:[665,505]},{id:"island",word:"Island",definition:"A piece of land completely surrounded by water.",dot:[855,540],box:[855,598]},{id:"archipelago",word:"Archipelago",definition:"A group of islands close together.",dot:[422,335],box:[410,490]}]}]}]}];var W=e.i(22016);let q=o.U.div.withConfig({displayName:"style__Page",componentId:"sc-b60a6b4e-0"})`
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
`,Z=o.U.header.withConfig({displayName:"style__Header",componentId:"sc-b60a6b4e-1"})`
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 1240px;
  margin: 0 auto 16px;
`,D=(0,o.U)(W.default).withConfig({displayName:"style__Back",componentId:"sc-b60a6b4e-2"})`
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
`,F=o.U.div.withConfig({displayName:"style__Titles",componentId:"sc-b60a6b4e-3"})`
  min-width: 0;
`,X=o.U.p.withConfig({displayName:"style__Kicker",componentId:"sc-b60a6b4e-4"})`
  margin: 0;
  color: var(--s-muted);
  font-size: 15px;
  font-weight: 500;
`,Y=o.U.h1.withConfig({displayName:"style__Title",componentId:"sc-b60a6b4e-5"})`
  margin: 0;
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 600;
  line-height: 1.15;
`,K=o.U.main.withConfig({displayName:"style__Main",componentId:"sc-b60a6b4e-6"})`
  max-width: 1240px;
  margin: 0 auto;
  text-align: left;
  hyphens: manual;
`,G=o.U.ul.withConfig({displayName:"style__Cards",componentId:"sc-b60a6b4e-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,H=(0,o.U)(W.default).withConfig({displayName:"style__Card",componentId:"sc-b60a6b4e-8"})`
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
`,V=o.U.span.withConfig({displayName:"style__CardIcon",componentId:"sc-b60a6b4e-9"})`
  flex: none;
  font-size: 40px;
  line-height: 1;
`,J=o.U.span.withConfig({displayName:"style__CardText",componentId:"sc-b60a6b4e-10"})`
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
`;e.s(["CardList",0,function({cards:e}){return(0,t.jsx)(G,{children:e.map(({href:e,icon:n,title:r,subtitle:i})=>(0,t.jsx)("li",{children:(0,t.jsxs)(H,{href:e,children:[(0,t.jsx)(V,{"aria-hidden":"true",children:n}),(0,t.jsxs)(J,{children:[r,i&&(0,t.jsx)("small",{children:i})]})]})},e))})},"Exercise",0,function({subject:e,unit:n,exercise:r}){let i,o;return(0,t.jsx)(S,{exercise:(i=R.find(t=>t.slug===e),o=i?.units.find(e=>e.slug===n),o?.exercises.find(e=>e.slug===r))})},"StudyPage",0,function({title:e,kicker:n,back:r,children:i}){return(0,t.jsxs)(q,{children:[(0,t.jsxs)(Z,{children:[r&&(0,t.jsx)(D,{href:r,"aria-label":"Back",children:"←"}),(0,t.jsxs)(F,{children:[n&&(0,t.jsx)(X,{children:n}),(0,t.jsx)(Y,{children:e})]})]}),(0,t.jsx)(K,{children:i})]})}],79274)}])})();