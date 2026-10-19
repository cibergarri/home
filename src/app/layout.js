import Script from 'next/script';
import { Instrument_Sans } from 'next/font/google';

import Providers from './providers';
import './global.css';

const SITE_URL = 'https://javiergarrido.dev';
const DESCRIPTION = 'Javier Garrido, web developer based in Burgos, Spain. Backend with Node.js, frontend with React, and a soft spot for domain-driven design.';
const GA_ID = 'UA-166069840-1';
const HOTJAR_ID = 1804773;

const font = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Javier Garrido',
  description: DESCRIPTION,
  manifest: '/manifest.json',
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' },
  openGraph: {
    title: 'Javier Garrido',
    description: 'Web developer based in Burgos, Spain. Backend with Node.js, frontend with React.',
    url: SITE_URL,
    type: 'website',
    images: [`${SITE_URL}/javiergarrido.png`],
  },
  // The site has its own English and Spanish versions, so browsers should not offer to translate
  // it; that also keeps the code-like bits (<heart \>, // comments) from being "translated".
  other: { google: 'notranslate' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d0469' },
    { media: '(prefers-color-scheme: dark)', color: '#010012' },
  ],
};

// Runs before paint so a returning visitor never sees the wrong theme flash. It is a plain script
// in <head>: an inline next/script with beforeInteractive is queued until Next's runtime loads,
// which is after the first paint.
// Visitors of the previous version kept their choice in a my_theme cookie, so it is honoured once.
// Without a saved choice the site is dark; the system preference is deliberately not consulted.
// It then lifts the page veil (see global.css) once the hero picture of that theme has loaded,
// or after 1.5 seconds on a slow connection, so the page never fades in without its hero.
const themeInit = `(function(){var t='night';try{t=localStorage.getItem('theme');if(!t){var m=document.cookie.match(/(?:^|; )my_theme=%22(normal|night)%22/);t=m&&m[1]}if(t!=='normal'&&t!=='night'){t='night'}}catch(e){t='night'}var r=document.documentElement;r.dataset.theme=t;var done=false;function ready(){if(done)return;done=true;r.classList.add('page-ready')}var i=new Image();i.onload=i.onerror=ready;i.src='/img/bg-'+t+'.png';setTimeout(ready,1500)})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" translate="no" className={font.variable} suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
        <Script src="/scripts/greeting.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
