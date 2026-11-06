// The study corner's old address: every page of it sends the browser on to the same page under
// /study-corner. Kept out of search engines like the study corner itself.
export const metadata = {
  title: 'Study corner',
  robots: { index: false, follow: false },
};

export default function OldStudyCornerLayout({ children }) {
  return children;
}
