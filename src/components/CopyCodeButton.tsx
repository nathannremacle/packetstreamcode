"use client";

import { useState, useCallback } from "react";

function fallbackCopyText(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function CopyCodeButton({
  text,
  label = "COPY REFERRAL CODE",
  "data-referral-code": dataAttr,
  className = "",
}: {
  text: string;
  label?: string;
  "data-referral-code"?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        if (!fallbackCopyText(text)) {
          setCopied(false);
          return;
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ok = fallbackCopyText(text);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        setCopied(false);
      }
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`cursor-pointer inline-flex items-center justify-center rounded-lg bg-ps-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ps-primary focus:ring-offset-2 focus:ring-offset-ps-bg ${className}`.trim()}
      aria-label={copied ? "Copied" : "Copy referral code"}
      data-referral-code={dataAttr ?? text}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
