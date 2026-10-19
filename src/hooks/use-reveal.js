import { useEffect, useRef } from 'react';

// Fades an element in the first time it scrolls into view, by setting data-reveal on it for the
// styles to pick up. Whatever is already on screen when the page loads is left alone, so nothing
// above the fold flickers, and without JavaScript or with reduced motion everything just shows.
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (element.getBoundingClientRect().top < window.innerHeight) return undefined;

    element.dataset.reveal = 'waiting';
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.dataset.reveal = 'shown';
      observer.disconnect();
    }, { rootMargin: '0px 0px -10% 0px' }); // a little past the bottom edge, so the fade is seen
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return ref;
};

export default useReveal;
