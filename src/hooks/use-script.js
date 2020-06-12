import { useEffect } from 'react';

const useScript = (url, theme) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'bg-animation';
    script.src = url;
    script.async = true;
    script.setAttribute('data-class-suffix', theme);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url, theme]);
};

export default useScript;
