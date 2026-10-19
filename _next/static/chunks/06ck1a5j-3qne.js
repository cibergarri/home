(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return y}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let o=e.r(90809),a=e.r(43476),s=o._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),h=e.r(5550),u=e.r(88540),f=e.r(91949),m=e.r(73668),g=e.r(9396);function x(t){var i;let n,r,o,[x,y]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:v,as:j,children:_,prefetch:k=null,passHref:C,replace:I,shallow:N,scroll:L,onClick:U,onMouseEnter:S,onTouchStart:T,legacyBehavior:R=!1,onNavigate:$,transitionTypes:P,ref:z,unstable_dynamicOnHover:E,...O}=t;n=_,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let A=s.default.useContext(c.AppRouterContext),M=!1!==k,B=!1===k?"none":!0===k?"full":"auto",H="none"!==B?"auto"===B?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,F="string"==typeof(i=j||v)?i:(0,l.formatUrl)(i);if(R){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");r=s.default.Children.only(n)}let q=R?r&&"object"==typeof r&&r.ref:z,D,K=s.default.useCallback(e=>(null!==A&&(w.current=(0,f.mountLinkInstance)(e,F,A,H,M,y,D)),()=>{w.current&&((0,f.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,f.unmountPrefetchableInstance)(e)}),[M,F,A,H,y,D]),W={ref:(0,d.useMergedRef)(K,q),onClick(t){R||"function"!=typeof U||U(t),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!A||t.defaultPrevented||function(t,i,n,r,o,a,s,l="none"){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(i)){r&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{navigate:p}=e.r(32916);p(i,r?"replace":"push",!1===o?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,n.current,s,l)}}(t,F,w,I,L,$,P,B)},onMouseEnter(e){R||"function"!=typeof S||S(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===E)},onTouchStart:function(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&M&&(0,f.onNavigationIntent)(e.currentTarget,!0===E)}};return(0,p.isAbsoluteUrl)(F)?W.href=F:R&&!C&&("a"!==r.type||"href"in r.props)||(W.href=(0,h.addBasePath)(F)),o=R?s.default.cloneElement(r,W):(0,a.jsx)("a",{...O,...W,children:n}),(0,a.jsx)(b.Provider,{value:x,children:o})}let b=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18581,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=e.r(71645);function r(e,t){let i=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(i.current=o(e,n)),t&&(r.current=o(t,n))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},95057,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:i}=e,n=e.protocol||"",r=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${r}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},73668,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(18967),r=e.r(52817);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,r.hasBasePath)(i.pathname)}catch(e){return!1}}},18967,(e,t,i)=>{e.i(47167),Object.defineProperty(i,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var r in n)Object.defineProperty(i,r,{enumerable:!0,get:n[r]});let o=["CLS","FCP","INP","LCP","TTFB"];function a(e){let t,i=!1;return(...n)=>(i||(i=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function c(){let{protocol:e,hostname:t,port:i}=window.location;return`${e}//${t}${i?":"+i:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let i=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(i&&h(i))return n;if(!n)throw Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},3699,e=>{var t=e.i(43476);e.i(85269);var i=e.i(22831),n=e.i(97053);e.i(61178);var r=e.i(28686),r=r,o=e.i(92921),o=o,a=e.i(60023),a=a,s=e.i(85521),s=s;let l=n.U.footer.withConfig({displayName:"style__FooterBar",componentId:"sc-9126e511-0"})`
  background: var(--c-background);
  color: var(--c-muted);
  border-top: 1px solid var(--c-line);
  transition: all 0.5s;
`,c=n.U.div.withConfig({displayName:"style__FooterInner",componentId:"sc-9126e511-1"})`
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
`,d=n.U.span.withConfig({displayName:"style__Copyright",componentId:"sc-9126e511-2"})`
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
`,h=(0,n.U)(o.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledHeartIcon",componentId:"sc-9126e511-4"})`
  fill: #ff0000;
`,u=(0,n.U)(a.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledJSIcon",componentId:"sc-9126e511-5"})`
  border-radius: 2px;
`,f=(0,n.U)(s.f).attrs({height:"14px",width:"14px"}).withConfig({displayName:"style__StyledClaudeIcon",componentId:"sc-9126e511-6"})`
  fill: #d97757;
`,m=n.U.span.withConfig({displayName:"style__Glued",componentId:"sc-9126e511-7"})`
  display: inline-flex;
  align-items: center;
`;e.s(["default",0,function(){let{t:e}=(0,i.f)();return(0,t.jsx)(l,{children:(0,t.jsxs)(c,{children:[(0,t.jsxs)(d,{children:[(0,t.jsx)(p,{"aria-label":"Copyleft"}),new Date().getFullYear()]}),(0,t.jsxs)(d,{children:[e("footerMadeWith"),(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{"aria-label":e("footerLove")}),","]}),(0,t.jsx)(u,{"aria-label":"JavaScript"}),e("footerAnd"),(0,t.jsx)(f,{"aria-label":"Claude"}),e("footerBy")]})]})})}],3699)},85430,e=>{e.i(41518),e.S([72074,"default,f"])},72074,e=>{var t=e.i(43476),i=e.i(71645);e.i(85269);var n=e.i(22831),r=e.i(98593),o=e.i(19988),a=e.i(90817);function s(){let{i18n:e,t:i}=(0,n.f)(),{theme:s,toggleTheme:l}=(0,r.i)(),c=s===r.z.NIGHT,d=(e.resolvedLanguage||e.language||"").slice(0,2),p=o.r[(o.r.indexOf(d)+1)%o.r.length];return(0,t.jsxs)(a.C,{children:[(0,t.jsx)(a.z,{type:"button",onClick:()=>{(0,o.x)(p),e.changeLanguage(p)},"aria-label":i("switchLanguage",{language:i(`language_${p}`)}),children:o.r.map(e=>(0,t.jsx)(a.J,{$selected:d===e,"aria-hidden":"true",children:e.toUpperCase()},e))}),(0,t.jsx)(a._,{type:"button",onClick:l,"aria-label":i("toggleTheme",{theme:i(c?"themeLight":"themeDark")}),children:c?(0,t.jsx)(a.p,{}):(0,t.jsx)(a.e,{})})]})}var l=e.i(41518),c=e.i(97053);let d=c.U.nav.withConfig({displayName:"style__Dock",componentId:"sc-8633abd3-0"})`
  position: fixed;
  right: 0;
  /* Centred on the small viewport height, which stays the same while the browser bars collapse
     and expand during a scroll; with 50% the dock would jump each time the screen resizes. */
  top: 50%;
  top: 50svh;
  transform: translateY(-50%);
  z-index: 1100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 4px 2px;
  border: 1px solid var(--c-line);
  border-right: none;
  border-radius: 12px 0 0 12px;
  background: color-mix(in srgb, var(--c-background) 85%, transparent);
  backdrop-filter: blur(8px);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
  /* Dims quickly while the page scrolls and settles back slowly, like the controls in the bar.
     Focus inside it always brings it back. */
  opacity: ${e=>e.$dimmed?.45:1};
  transition: opacity ${e=>e.$dimmed?"0.2s":"1.5s"} ease;
  &:focus-within {
    opacity: 1;
  }
  @media (min-width: 480px) {
    display: none;
  }
`,p=c.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__DockLink",componentId:"sc-8633abd3-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 36px;
  border-radius: 50%;
  color: var(--c-primary);
  /* Like the controls in the bar: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  &:hover,
  &:active {
    transition: all 0.3s;
    transform: scale(1.2);
    color: var(--c-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`,h=c.U.svg.withConfig({displayName:"style__DockIcon",componentId:"sc-8633abd3-2"})`
  width: 17px;
  height: 17px;
  fill: currentColor;
`;function u(){let{t:e}=(0,n.f)(),[r,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e,t=()=>{o(!0),clearTimeout(e),e=setTimeout(()=>o(!1),600)};return window.addEventListener("scroll",t,{passive:!0}),()=>{window.removeEventListener("scroll",t),clearTimeout(e)}},[]),(0,t.jsx)(d,{"aria-label":e("findMe"),$dimmed:r,children:l.L.map(({key:e,label:i,href:n,path:r})=>(0,t.jsx)(p,{href:n,"aria-label":i,children:(0,t.jsx)(h,{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:r})})},e))})}let f=c.U.header.withConfig({displayName:"style__HeaderBar",componentId:"sc-bb1d7426-0"})`
  /* Frosted, but see-through enough to show what passes behind; the bottom edge fades out
     so the blur has no hard line. */
  background: color-mix(in srgb, var(--c-background) 60%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  mask-image: linear-gradient(black calc(100% - 20px), transparent);
  color: var(--c-primary);
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px 28px;
  @media (min-width: 768px) {
    padding: 14px 40px 32px;
  }
`,m=c.U.div.withConfig({displayName:"style__Toolbar",componentId:"sc-bb1d7426-1"})`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`,g=c.U.a.withConfig({displayName:"style__Title",componentId:"sc-bb1d7426-2"})`
  color: var(--c-primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  display: inline-flex; /* a transform needs a box, inline text has none */
  align-items: center;
  gap: 8px;
  transform-origin: left center;
  /* Like the social icons: quick to colour and grow on hover, slow to settle back. */
  transition: all 2s;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  &:hover {
    transition: all 0.3s;
    transform: scale(1.2);
    color: var(--c-secondary);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 4px;
    border-radius: 2px;
  }
`,x=c.U.img.withConfig({displayName:"style__TitleIcon",componentId:"sc-bb1d7426-3"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  transform: translateY(-19%);
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,b=c.U.div.withConfig({displayName:"style__Blank",componentId:"sc-bb1d7426-4"})`
  flex-grow: 1;
`,y=c.U.nav.withConfig({displayName:"style__LinksContainer",componentId:"sc-bb1d7426-5"})`
  display: flex;
  align-items: center;
  gap: 0;
  @media (min-width: 768px) {
    gap: 10px;
  }
  /* The same links live in the Contact section; the bar has no room for them on narrow phones. */
  @media (max-width: 479px) {
    display: none;
  }
`,w=c.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__SocialLink",componentId:"sc-bb1d7426-6"})`
  display: inline-flex;
  padding: 5px;
  border-radius: 6px;
  &:focus-visible {
    outline: 2px solid var(--c-accent);
  }
`,v=c.U.svg.withConfig({displayName:"style__SVG",componentId:"sc-bb1d7426-7"})`
  transition: all 2s;
  width: 20px;
  height: 20px;
  fill: var(--c-primary);
  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  ${w}:hover & {
    transition: all 0.3s;
    transform: scale(1.2);
    fill: var(--c-secondary);
  }
`,j=c.U.div.withConfig({displayName:"style__Hero",componentId:"sc-bb1d7426-8"})`
  /* Two fades over the image: the bottom edge, then the left and right edges. */
  background:
    linear-gradient(
      color-mix(in srgb, var(--c-background) 53%, transparent) 0%,
      color-mix(in srgb, var(--c-background) 53%, transparent) 55%,
      var(--c-background) 100%
    ),
    linear-gradient(
      to right,
      var(--c-background) 0%,
      transparent 12%,
      transparent 88%,
      var(--c-background) 100%
    ),
    var(--hero-image);
  /* The image is 1920px wide; on wider screens scale it up so it never shows its edges.
     The word in the picture sits in its middle, so centring keeps it in view at every width;
     lifting it clears the bottom-left corner for the title. */
  background-size: auto, auto, max(100%, 1920px) auto;
  background-position: center 80%;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 780px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* Lined up with the content below, whose column is 1040px wide with 40px gutters. */
  --hero-gutter: max(40px, calc((100% - 1040px) / 2 + 40px));
  /* On phones a full-height hero is mostly empty space, and 100vh hides behind the
     browser chrome on iOS, so use the small viewport height and a lower cap. */
  @media (max-width: 767px) {
    height: min(100svh, 600px);
    min-height: 500px;
    /* A fixed 1000px picture, centred, so it looks the same on every phone and only its sides get
       clipped on narrower ones. It is 16:9, so it is 563px tall; the bottom fade ends exactly
       at its bottom edge so the smaller image has no hard border. */
    --hero-image-height: 563px;
    background:
      linear-gradient(
        color-mix(in srgb, var(--c-background) 53%, transparent) 0%,
        color-mix(in srgb, var(--c-background) 53%, transparent) calc(var(--hero-image-height) - 260px),
        var(--c-background) var(--hero-image-height)
      ),
      linear-gradient(
        to right,
        var(--c-background) 0%,
        transparent 6%,
        transparent 94%,
        var(--c-background) 100%
      ),
      var(--hero-image);
    background-size: auto, auto, 1000px auto;
    background-position: center top;
  }
`,_=c.U.div.withConfig({displayName:"style__HeroTitle",componentId:"sc-bb1d7426-9"})`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: clamp(30px, 7vw, 60px);
  line-height: 1.1;
  padding: 0 0 16px var(--hero-gutter);
  margin: 0;
  /* Fixed to the width of the widest final line ("I <heart \>", the gap and the caret),
     so the block does not shift while the typewriter grows and shrinks. */
  box-sizing: content-box;
  width: 5.2em;
  white-space: nowrap; /* the typed word must never drop below the "I" */
  align-self: flex-start;
  text-align: left;
  /* On phones the block sits on the body gutter, lined up with the headings below it. */
  @media (max-width: 767px) {
    font-size: clamp(40px, 11vw, 60px);
    padding: 0 24px 12px;
  }
`,k=c.q`
  from { width: 0 }
  to { width: 4.25em }
`,C=c.q`
  from { width: 0 }
  to { width: 4.7em }
`,I=c.q`
  from, to { background-color: transparent }
  50% { background-color: var(--c-heart); }
`,N=c.q`
  from {
    opacity: 1;
    width: fit-content;
  }
  to {
    opacity: 0;
    width: 0%;
  }
`,L=c.q`
  from { opacity: 1 }
  to { opacity: 0 }
`,U=c.q`
  0%, 40%, 100% { transform: scale(1) }
  10%, 30% { transform: scale(1.12) }
  20% { transform: scale(1) }
`,S=c.U.div.withConfig({displayName:"style__TypeWriterContainer",componentId:"sc-bb1d7426-10"})`
  display: inline-flex;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* Room inside the clipped box for the beating word to grow into: above, below and to the
     left; the gap before the caret covers the right. The margins give the room back. */
  padding: 0.1em 0 0.1em 0.3em;
  margin: -0.1em 0 -0.1em -0.05em;
  position: relative; /* anchors the cursor */
  white-space: nowrap;
  text-shadow: var(--heart-glow);
  animation:
    ${k} 1.5s steps(8, end) 3s both,
    ${k} 1.5s steps(8, end) 6s reverse forwards,
    ${C} 1.5s steps(9, end) 8s forwards;
  /* The typewriter cursor: a bar on the right edge of the revealed box. */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: .15em;
    background-color: var(--c-heart);
    animation:
      ${I} 1.1s step-end infinite,
      ${L} 4.5s ease 10s forwards; /* same timing as the subtitle fading in */
  }
`,T=c.U.div.withConfig({displayName:"style__Hate",componentId:"sc-bb1d7426-11"})`
  display: inline;
  color: var(--c-heart);
  animation: ${N} .5s steps(1, end) 7.5s 1 forwards;
`,R=c.q`
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: fit-content;
  }
`,$=c.U.div.withConfig({displayName:"style__Heart",componentId:"sc-bb1d7426-12"})`
  display: inline;
  color: var(--c-heart);
  /* Tapped five times it opens a game (see Header): no double-tap zoom, selection or flash. */
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* Hidden outright until "hate" has gone, not through an animation fill: its "<" sits in the
     gap right after "hate", and browsers differ on how they fill a reversed animation. */
  opacity: 0;
  width: 0;
  transform-origin: center;
  animation:
    ${R} .5s steps(1, start) 6.5s forwards,
    ${U} 3s ease-in-out 10.5s infinite; /* a beat after the word is typed */
`,P=c.U.span.withConfig({displayName:"style__HeartSpot",componentId:"sc-bb1d7426-13"})`
  position: relative;
  display: inline-flex;
`,z=c.U.span.withConfig({displayName:"style__HeartHint",componentId:"sc-bb1d7426-14"})`
  position: absolute;
  bottom: 100%;
  left: 0.3em;
  margin-bottom: 4px;
  padding: 4px 8px;
  border: 1px solid var(--c-heart);
  border-radius: 6px;
  background: color-mix(in srgb, var(--c-background) 90%, transparent);
  color: var(--c-heart);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.3;
  /* One line where it fits; on narrow phones it wraps before it reaches the social dock. */
  white-space: normal; /* the title it sits in never wraps */
  width: max-content;
  max-width: calc(100vw - 104px);
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.6s, transform 0.6s;
  @media (hover: hover) {
    ${P}:has(${$}:hover) & {
      transition-duration: 0.25s;
      transition-delay: 3s; /* only for someone who lingers on the heart */
      opacity: 1;
      transform: none;
    }
  }
  ${P}[data-hint] & {
    transition-duration: 0.25s;
    transition-delay: 3s; /* only for someone who lingers on the heart */
    opacity: 1;
    transform: none;
  }
`,E=c.q`
  from { opacity: 0 }
  to { opacity: 1 }
`,O=c.U.div.withConfig({displayName:"style__HeroSubtitle",componentId:"sc-bb1d7426-15"})`
  color: var(--c-primary);
  transition: all 2s;
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: clamp(17px, 3.6vw, 32px);
  padding: 0 0 0 var(--hero-gutter);
  height: 140px;
  max-width: 500px;
  align-self: flex-start;
  animation: ${E} 4.5s 10s both;
  @media (max-width: 767px) {
    height: auto;
    padding: 0 24px 40px;
  }
`,A=(0,i.lazy)(()=>e.A(65077));e.s(["f",0,function(){let{theme:e}=(0,r.i)();(0,i.useEffect)(()=>{let t=document.createElement("script");return t.id="bg-animation",t.src="/scripts/bg-animation.js",t.async=!0,t.setAttribute("data-class-suffix",e),document.body.appendChild(t),()=>{document.body.removeChild(t)}},["/scripts/bg-animation.js",e]);let{t:o}=(0,n.f)(),[a,c]=(0,i.useState)(!1),d=(0,i.useCallback)(()=>c(!1),[]),{onTap:p,hinting:h}=function(e){let t=(0,i.useRef)({count:0,last:0}),n=(0,i.useRef)(),[r,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>()=>clearTimeout(n.current),[]),{onTap:()=>{let i=Date.now(),r=t.current;if(r.count=i-r.last<1500?r.count+1:1,r.last=i,clearTimeout(n.current),r.count>=5){r.count=0,o(!1),e();return}o(!0),n.current=setTimeout(()=>o(!1),5e3)},hinting:r}}(()=>c(!0));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f,{children:(0,t.jsxs)(m,{children:[(0,t.jsxs)(g,{href:"/",children:[(0,t.jsx)(x,{src:"/img/jg.png",alt:"",width:64,height:64}),o("title")]}),(0,t.jsx)(b,{}),(0,t.jsx)(y,{"aria-label":o("socialLinks"),children:l.L.map(({key:e,label:i,href:n,path:r})=>(0,t.jsx)(w,{href:n,"aria-label":i,children:(0,t.jsx)(v,{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:r})})},e))}),(0,t.jsx)(b,{}),(0,t.jsx)(s,{})]})}),(0,t.jsx)(u,{}),a&&(0,t.jsx)(i.Suspense,{fallback:null,children:(0,t.jsx)(A,{onClose:d})}),(0,t.jsxs)(j,{id:"background-image",children:[(0,t.jsxs)(_,{children:[o("heroTitlePrefix"),(0,t.jsxs)(P,{"data-hint":h||void 0,children:[(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{children:"<hate \\>"}),(0,t.jsx)($,{onClick:p,children:"<heart \\>"})]}),(0,t.jsx)(z,{"aria-hidden":"true",children:o("heartHint")})]}),(0,t.jsx)("br",{}),o("heroTitleSuffix")]}),(0,t.jsx)(O,{children:o("heroSubtitle")})]})]})}],72074)},2826,e=>{var t=e.i(43476),i=e.i(22016);e.i(85269);var n=e.i(22831),r=e.i(97053);let o=r.q`
  50% { opacity: 0 }
`,a=r.U.a.withConfig({displayName:"style__Button",componentId:"sc-825839b7-0"})`
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #33ff66;
  border-radius: 12px;
  background: #000;
  color: #33ff66;
  text-decoration: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.35), 0 0 14px rgba(51, 255, 102, 0.25);
  -webkit-tap-highlight-color: transparent;
  /* Like the other controls: quick to grow, slow to settle back. */
  transition: transform 1.2s, box-shadow 1.2s;
  &:hover {
    transition-duration: 0.25s;
    transform: scale(1.1);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 6px 18px rgba(0, 0, 0, 0.35), 0 0 22px rgba(51, 255, 102, 0.55);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 3px;
  }
`,s=r.U.span.withConfig({displayName:"style__Glyph",componentId:"sc-825839b7-1"})`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-shadow: 0 0 6px rgba(51, 255, 102, 0.8);
`,l=r.U.span.withConfig({displayName:"style__Caret",componentId:"sc-825839b7-2"})`
  animation: ${o} 1s step-end infinite;
`;e.s(["default",0,function(){let{t:e}=(0,n.f)();return(0,t.jsx)(a,{as:i.default,href:"/terminal","aria-label":e("terminal.open"),title:e("terminal.open"),children:(0,t.jsxs)(s,{"aria-hidden":"true",children:[">",(0,t.jsx)(l,{children:"_"})]})})}],2826)},94685,e=>{var t=e.i(43476),i=e.i(71645);e.i(85269);var n=e.i(22831),r=e.i(34469),o=e.i(43804);function a({items:e}){return(0,t.jsx)(o.X,{$flush:!0,$labelWidth:"12em",children:e.map(e=>(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(o.h,{children:e.name}),(0,t.jsx)(o.q,{children:e.detail})]},`${e.name} ${e.detail}`))})}e.s(["default",0,function(){let{t:e}=(0,n.f)(),i=e("education",{returnObjects:!0}),o=e("workshops",{returnObjects:!0}),s=e("languages",{returnObjects:!0});return(0,t.jsxs)(r.Section,{id:"background",children:[(0,t.jsx)(r.SectionTitle,{children:e("backgroundHeading")}),(0,t.jsxs)(r.Rows,{children:[(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.RowHead,{children:e("educationLabel")}),(0,t.jsx)(r.RowBody,{children:Array.isArray(i)&&(0,t.jsx)(a,{items:i})})]}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.RowHead,{children:e("workshopsLabel")}),(0,t.jsx)(r.RowBody,{children:Array.isArray(o)&&(0,t.jsx)(a,{items:o})})]}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.RowHead,{children:e("languagesLabel")}),(0,t.jsx)(r.RowBody,{children:Array.isArray(s)&&(0,t.jsx)(a,{items:s})})]}),(0,t.jsxs)(r.Row,{children:[(0,t.jsx)(r.RowHead,{children:e("offWorkLabel")}),(0,t.jsx)(r.RowBody,{children:e("offWork")})]})]})]})}])},78277,e=>{var t=e.i(43476);e.i(85269);var i=e.i(22831),n=e.i(34469);e.i(72074);var r=e.i(41518),o=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,i.f)();return(0,t.jsxs)(n.Section,{id:"contact",children:[(0,t.jsx)(n.SectionTitle,{children:e("contactHeading")}),(0,t.jsxs)(n.Prose,{children:[e("contactText"),(0,t.jsx)("br",{}),e("contactTextMore")]}),(0,t.jsxs)(o.Q,{children:[(0,t.jsx)(o.L,{href:r.y.linkedin,children:e("contactLinkedin")}),(0,t.jsx)(o.L,{href:r.y.x,children:e("contactX")}),(0,t.jsx)(o.L,{href:r.y.github,children:e("contactGithub")}),(0,t.jsx)(o.L,{href:"https://cibergarri.github.io/playground",children:e("contactPlayground")}),(0,t.jsx)(o.L,{href:"https://github.com/cibergarri/home",children:e("contactSource")})]})]})}])},45828,e=>{var t=e.i(43476);e.i(85269);var i=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,i.f)(),o=e("experience",{returnObjects:!0});return(0,t.jsxs)(r.T,{id:"experience",children:[(0,t.jsx)(n.SectionTitle,{children:e("experienceHeading")}),(0,t.jsx)(n.Lede,{children:e("experienceNote")}),(0,t.jsx)(n.Rows,{children:Array.isArray(o)&&o.map(e=>(0,t.jsxs)(n.Row,{children:[(0,t.jsxs)(n.RowHead,{children:[e.company,e.period&&(0,t.jsx)(n.RowMeta,{children:e.period}),e.place&&(0,t.jsx)(n.RowMeta,{$tight:!0,children:e.place})]}),(0,t.jsx)(n.RowBody,{children:[].concat(e.summary).map(e=>(0,t.jsx)("p",{children:e},e))})]},e.company))})]})}])},68623,e=>{var t=e.i(43476);e.i(85269);var i=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,i.f)();return(0,t.jsxs)(n.Section,{id:"about",children:[(0,t.jsxs)(r.R,{children:[e("introGreeting")," ",(0,t.jsx)(r.I,{children:e("introName")})]}),(0,t.jsx)(n.Prose,{children:e("introParagraph1")}),(0,t.jsx)(n.Prose,{children:e("introParagraph2")})]})}])},6300,e=>{var t=e.i(43476);e.i(85269);var i=e.i(22831),n=e.i(34469),r=e.i(43804);e.s(["default",0,function(){let{t:e}=(0,i.f)(),o=e("projects",{returnObjects:!0});return(0,t.jsxs)(r.T,{id:"projects",children:[(0,t.jsx)(n.SectionTitle,{children:e("projectsHeading")}),(0,t.jsx)(n.Lede,{children:e("projectsNote")}),(0,t.jsx)(n.Rows,{children:Array.isArray(o)&&o.map(i=>(0,t.jsxs)(n.Row,{children:[(0,t.jsx)(n.RowHead,{children:i.name}),(0,t.jsxs)(n.RowBody,{children:[i.description,(0,t.jsxs)(r.X,{children:[i.awards.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h,{children:e("awardsLabel")}),(0,t.jsx)(r.q,{children:(0,t.jsx)(r.U,{children:i.awards.map(e=>(0,t.jsx)("li",{children:e},e))})})]}),(0,t.jsx)(r.h,{children:e("linksLabel")}),(0,t.jsx)(r.q,{children:(0,t.jsx)(r.V,{children:i.links.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(n.Link,{href:e.href,children:e.label})},e.href))})})]})]})]},i.name))})]})}])},97066,e=>{var t=e.i(43476),i=e.i(71645);e.i(85269);var n=e.i(22831),r=e.i(34469),o=e.i(43804);e.s(["default",0,function(){let e,{t:a}=(0,n.f)(),s=a("skills",{returnObjects:!0}),l=(e=(0,i.useRef)(null),(0,i.useEffect)(()=>{let t,i=e.current;if(!i)return;let n=null,r=e=>{e!==n&&(n?.removeAttribute("data-touched"),n=e,n?.setAttribute("data-touched",""))},o=e=>{clearTimeout(t);let{clientX:n,clientY:o}=e.touches[0],a=document.elementFromPoint?.(n,o)?.closest("li");r(a&&i.contains(a)?a:null)},a=()=>{clearTimeout(t),t=setTimeout(()=>r(null),400)};return i.addEventListener("touchstart",o,{passive:!0}),i.addEventListener("touchmove",o,{passive:!0}),i.addEventListener("touchend",a,{passive:!0}),i.addEventListener("touchcancel",a,{passive:!0}),()=>{clearTimeout(t),i.removeEventListener("touchstart",o),i.removeEventListener("touchmove",o),i.removeEventListener("touchend",a),i.removeEventListener("touchcancel",a)}},[]),e);return(0,t.jsxs)(r.Section,{id:"skills",children:[(0,t.jsx)(r.SectionTitle,{children:a("skillsHeading")}),(0,t.jsx)(o.S,{ref:l,children:Array.isArray(s)&&s.map(e=>(0,t.jsx)(o.r,{children:e},e))})]})}])},43804,e=>{var t=e.i(97053),i=e.i(34469);let n=t.U.h1.withConfig({displayName:"style__IntroHeading",componentId:"sc-2488d406-0"})`
  color: var(--c-primary);
  font-size: 36px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 700;
  margin: 0 0 28px;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`,r=t.U.span.withConfig({displayName:"style__Name",componentId:"sc-2488d406-1"})`
  color: var(--c-accent);
  transition: color 2s;
`,o=(0,t.U)(i.Section).withConfig({displayName:"style__UnhyphenatedSection",componentId:"sc-2488d406-2"})`
  hyphens: manual;
`,a=t.U.ul.withConfig({displayName:"style__SkillList",componentId:"sc-2488d406-3"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,s=t.m`
  transition-duration: 0.25s;
  color: var(--c-accent);
  border-color: var(--c-accent);
  background-color: color-mix(in srgb, var(--c-accent) 10%, transparent);
  box-shadow: 0 6px 18px color-mix(in srgb, var(--c-accent) 25%, transparent);
  transform: translateY(-2px);
  &::before,
  &::after {
    transition-duration: 0.25s;
    opacity: 1;
    transform: translate(0, -50%);
  }
`,l=t.U.li.withConfig({displayName:"style__Skill",componentId:"sc-2488d406-4"})`
  position: relative;
  color: var(--c-primary);
  background: var(--c-chip);
  border: 1px solid var(--c-line);
  border-radius: 999px;
  padding: 8px 20px;
  font-size: 15px;
  line-height: 1.2;
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  transition: color 1.2s, border-color 1.2s, background-color 1.2s, box-shadow 1.2s, transform 1.2s;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    font-size: 13px;
    font-weight: 700;
    color: var(--c-accent);
    opacity: 0;
    transition: opacity 1.2s, transform 1.2s;
  }
  &::before {
    content: '<';
    left: 7px;
    transform: translate(6px, -50%);
  }
  &::after {
    content: '/>';
    right: 5px;
    transform: translate(-6px, -50%);
  }
  @media (hover: hover) {
    &:hover {
      ${s}
    }
  }
  &[data-touched] {
    ${s}
  }
`,c=t.U.dl.withConfig({displayName:"style__DetailList",componentId:"sc-2488d406-5"})`
  margin: ${e=>e.$flush?"0":"16px 0 0"};
  display: grid;
  /* Lists stacked one under another share a label width so their values line up. */
  grid-template-columns: ${e=>e.$labelWidth||"auto"} 1fr;
  gap: 6px 12px;
  font-size: 15px;
  line-height: 1.5;
  text-align: left; /* short items, justifying them only stretches the spaces */
  /* Two columns squeeze the values into four-line stacks on phones: put each label above. */
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,d=t.U.dt.withConfig({displayName:"style__DetailLabel",componentId:"sc-2488d406-6"})`
  color: var(--c-muted);
  margin: 0;
  @media (max-width: 767px) {
    font-size: 13px;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`,p=t.U.dd.withConfig({displayName:"style__DetailValue",componentId:"sc-2488d406-7"})`
  margin: 0;
  color: var(--c-text);
  white-space: pre-line; /* line breaks written in the copy, like the one before an author */
`,h=t.U.ul.withConfig({displayName:"style__LinkList",componentId:"sc-2488d406-8"})`
  list-style: none;
  padding: 0;
  margin: 0;
  li + li {
    margin-top: 4px;
  }
`,u=t.U.ul.withConfig({displayName:"style__AwardList",componentId:"sc-2488d406-9"})`
  margin: 0;
  padding: 0;
  list-style: none;
  li + li {
    margin-top: 4px;
  }
`,f=t.U.div.withConfig({displayName:"style__ContactLinks",componentId:"sc-2488d406-10"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`,m=t.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"style__ContactLink",componentId:"sc-2488d406-11"})`
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
`;e.s(["U",0,u,"L",0,m,"Q",0,f,"h",0,d,"X",0,c,"q",0,p,"R",0,n,"V",0,h,"I",0,r,"r",0,l,"S",0,a,"T",0,o])},34469,e=>{var t=e.i(43476),i=e.i(97053),n=e.i(71645);let r=i.U.main.withConfig({displayName:"styles__Page",componentId:"sc-8ed1957a-0"})`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px 96px;
  box-sizing: border-box;
  /* Narrow phones keep the social dock on the right edge: leave it a lane of its own. */
  @media (max-width: 479px) {
    padding-right: 52px;
  }
  @media (min-width: 768px) {
    padding: 0 40px 128px;
  }
`,o=i.U.section.withConfig({displayName:"styles__SectionBox",componentId:"sc-8ed1957a-1"})`
  /* Sections below the fold fade and rise into place as they scroll in, see useReveal. */
  transition: opacity 0.8s ease, transform 0.8s ease;
  &[data-reveal='waiting'] {
    opacity: 0;
    transform: translateY(24px);
  }
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
`,a=i.U.h2.withConfig({displayName:"styles__SectionTitle",componentId:"sc-8ed1957a-2"})`
  color: var(--c-primary);
  font-size: 28px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0 0 12px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`,s=i.U.p.withConfig({displayName:"styles__Lede",componentId:"sc-8ed1957a-3"})`
  color: var(--c-muted);
  font-size: 18px;
  line-height: 1.5;
  max-width: 640px;
  margin: 0 0 40px;
`,l=i.U.p.withConfig({displayName:"styles__Prose",componentId:"sc-8ed1957a-4"})`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.65;
  max-width: 680px;
  margin: 0 0 20px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`,c=i.U.a.attrs({target:"_blank",rel:"noopener noreferrer"}).withConfig({displayName:"styles__Link",componentId:"sc-8ed1957a-5"})`
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
`,d=i.U.div.withConfig({displayName:"styles__Rows",componentId:"sc-8ed1957a-6"})`
  border-top: 1px solid var(--c-line);
`,p=i.U.div.withConfig({displayName:"styles__Row",componentId:"sc-8ed1957a-7"})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px 32px;
  padding: 24px 0;
  border-bottom: 1px solid var(--c-line);
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    padding: 28px 0;
  }
`,h=i.U.div.withConfig({displayName:"styles__RowHead",componentId:"sc-8ed1957a-8"})`
  color: var(--c-primary);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
`,u=i.U.div.withConfig({displayName:"styles__RowMeta",componentId:"sc-8ed1957a-9"})`
  color: var(--c-muted);
  font-size: 15px;
  line-height: 1.4;
  margin-top: ${e=>e.$tight?"0":"4px"}; /* a second line sits right under the first */
  font-weight: 400;
  text-align: left; /* too short to justify */
`,f=i.U.div.withConfig({displayName:"styles__RowBody",componentId:"sc-8ed1957a-10"})`
  color: var(--c-text);
  font-size: 17px;
  line-height: 1.6;
  max-width: 640px;
  p {
    margin: 0 0 12px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;e.s(["Lede",0,s,"Link",0,c,"Page",0,r,"Prose",0,l,"Row",0,p,"RowBody",0,f,"RowHead",0,h,"RowMeta",0,u,"Rows",0,d,"Section",0,function(e){let i,r=(i=(0,n.useRef)(null),(0,n.useEffect)(()=>{let e=i.current;if(!e||"u"<typeof IntersectionObserver||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||e.getBoundingClientRect().top<window.innerHeight)return;e.dataset.reveal="waiting";let t=new IntersectionObserver(([i])=>{i.isIntersecting&&(e.dataset.reveal="shown",t.disconnect())},{rootMargin:"0px 0px -10% 0px"});return t.observe(e),()=>t.disconnect()},[]),i);return(0,t.jsx)(o,{ref:r,...e})},"SectionTitle",0,a],34469)}])})();