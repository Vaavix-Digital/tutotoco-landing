"use client";

import { useEffect, useState } from "react";

export default function DevicePrompt() {
  const [device, setDevice] = useState<"iPhone" | "Android" | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    setDevice(/iPhone|iPad|iPod/i.test(ua) ? "iPhone" : /Android/i.test(ua) ? "Android" : null);
  }, []);

  return (
    <p className="muted mt-3 text-lg">
      {device ? `Looks like you are on ${device}. Tap the matching store button.` : "Choose your store, or scan the code with your phone."}
    </p>
  );
}
