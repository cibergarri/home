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
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0d0469' },
    { media: '(prefers-color-scheme: dark)', color: '#010012' },
  ],
};

// Runs before paint so a returning visitor never sees the wrong theme flash.
// Visitors of the previous version kept their choice in a my_theme cookie, so it is honoured once.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(!t){var m=document.cookie.match(/(?:^|; )my_theme=%22(normal|night)%22/);t=m&&m[1]}if(t!=='normal'&&t!=='night'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'night':'normal'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{themeInit}</Script>
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
