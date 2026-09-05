"use client";

import { useEffect } from "react";

const INTERAKT_SDK_BASE_URL = "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=";
const INTERAKT_WIDGET_KEY = "xpl1CzyllJ4uSeFEONwyyhUbfPRcRXwS";
const DESKTOP_QUERY = "(min-width: 768px)";

type KiwiFunction = {
  (...args: unknown[]): void;
  init?: (orgId: string, widgetKey: string, options: Record<string, unknown>) => void;
  l?: number;
  q?: unknown[];
};

declare global {
  interface Window {
    KiwiObject?: string;
    __nstrideInteraktInitialized?: boolean;
    __nstrideInteraktLoading?: boolean;
    kiwi?: KiwiFunction;
  }
}

function initKiwi() {
  if (window.__nstrideInteraktInitialized || typeof window.kiwi?.init !== "function") return;

  window.kiwi.init("", INTERAKT_WIDGET_KEY, {});
  window.__nstrideInteraktInitialized = true;
}

function loadInteraktWidget() {
  if (window.__nstrideInteraktInitialized || window.__nstrideInteraktLoading) return;

  window.__nstrideInteraktLoading = true;

  (function injectKiwiSdk(
    w: Window & { kiwi?: KiwiFunction },
    d: Document,
    s: "script",
    c: string,
    r: "kiwi",
    a?: HTMLScriptElement,
    m?: HTMLScriptElement,
  ) {
    w.KiwiObject = r;
    w[r] =
      w[r] ||
      function kiwiQueue(...args: unknown[]) {
        (w[r]!.q = w[r]!.q || []).push(args);
      };
    w[r]!.l = Date.now();
    a = d.createElement(s) as HTMLScriptElement;
    m = d.getElementsByTagName(s)[0];
    a.async = true;
    a.src = c;
    a.onload = initKiwi;

    if (m?.parentNode) {
      m.parentNode.insertBefore(a, m);
    } else {
      d.head.appendChild(a);
    }
  })(window, document, "script", `${INTERAKT_SDK_BASE_URL}${Date.now()}`, "kiwi");

  window.addEventListener("load", initKiwi, { once: true });
}

export function InteraktDesktopWidget() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);

    if (mediaQuery.matches) {
      loadInteraktWidget();
    }

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        loadInteraktWidget();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return null;
}
