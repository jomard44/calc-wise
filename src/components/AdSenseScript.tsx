"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Conditionally loads the Google AdSense script only after the user
 * has accepted cookies. This ensures GDPR/EU User Consent Policy compliance.
 */
export default function AdSenseScript() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      const consent = localStorage.getItem("calcwise-cookie-consent");
      setConsented(consent === "accepted");
    };

    // Check immediately
    check();

    // Listen for cookie consent changes (fired from CookieConsent component)
    window.addEventListener("cookie-consent-change", check);
    // Also check on storage events (in case another tab accepts)
    window.addEventListener("storage", check);

    return () => {
      window.removeEventListener("cookie-consent-change", check);
      window.removeEventListener("storage", check);
    };
  }, []);

  if (!consented) return null;

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9587370950538764"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
