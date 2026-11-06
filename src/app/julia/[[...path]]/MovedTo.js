'use client';

import { useEffect } from 'react';

// Sends the browser on to the page's new address, keeping what comes after it (?all, say). Without
// JavaScript, the refresh still gets there, and the link is there to tap.
export default function MovedTo({ to }) {
  useEffect(() => {
    window.location.replace(`${to}${window.location.search}${window.location.hash}`);
  }, [to]);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p style={{ padding: 16, fontFamily: 'system-ui, sans-serif' }}>
        The study corner has moved to
        {' '}
        <a href={to}>{to}</a>
        .
      </p>
    </>
  );
}
