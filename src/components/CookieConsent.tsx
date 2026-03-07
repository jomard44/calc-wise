"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("calcwise-cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("calcwise-cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("calcwise-cookie-consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-light)]">
          We use cookies and similar technologies to improve your experience,
          analyze traffic, and serve personalized ads. By clicking
          &quot;Accept&quot;, you consent to our use of cookies. See our{" "}
          <a
            href="/privacy-policy"
            className="underline text-[var(--color-primary)]"
          >
            Privacy Policy
          </a>{" "}
          for more information.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
