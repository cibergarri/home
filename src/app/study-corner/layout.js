import { Caveat, Fredoka, Patrick_Hand } from 'next/font/google';

const font = Fredoka({
  subsets: ['latin'],
  variable: '--font-study',
  display: 'swap',
});

// The hand-drawn fonts of the sketchnotes (the mind maps in Diagrams).
const sketchTitle = Caveat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sketch-title',
  display: 'swap',
});

const sketch = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sketch',
  display: 'swap',
});

// The study corner: not linked from the site and kept out of search engines.
export const metadata = {
  title: 'Study corner',
  robots: { index: false, follow: false },
};

export default function StudyCornerLayout({ children }) {
  return <div className={`${font.variable} ${sketchTitle.variable} ${sketch.variable}`}>{children}</div>;
}
