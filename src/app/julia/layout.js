import { Fredoka } from 'next/font/google';

const font = Fredoka({
  subsets: ['latin'],
  variable: '--font-study',
  display: 'swap',
});

// Julia's study corner: not linked from the site and kept out of search engines.
export const metadata = {
  title: 'Julia · study',
  robots: { index: false, follow: false },
};

export default function JuliaLayout({ children }) {
  return <div className={font.variable}>{children}</div>;
}
