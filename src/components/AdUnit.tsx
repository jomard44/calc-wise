"use client";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

/**
 * Google AdSense ad unit placeholder.
 * Replace data-ad-slot values with your actual AdSense ad unit IDs.
 * The ad-unit class provides a visual placeholder during development.
 */
export default function AdUnit({
  slot,
  format = "auto",
  className = "",
}: AdUnitProps) {
  return (
    <div className={`my-4 ${className}`}>
      <div
        className="ad-unit"
        style={{ minHeight: format === "rectangle" ? 250 : 90 }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        <span className="text-xs text-gray-400">Advertisement</span>
      </div>
    </div>
  );
}
