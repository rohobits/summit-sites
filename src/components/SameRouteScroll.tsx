// src/components/SameRouteScroll.tsx
import { useEffect } from "react";

/**
 * Globally intercept clicks on internal <a> links that point to the
 * *same* location the app is currently on (same origin, pathname, hash).
 * When that happens, prevent the no-op navigation and scroll to the top.
 *
 * Works with HashRouter (compares .hash) and BrowserRouter.
 */
const SameRouteScroll = ({ behavior = "smooth" as ScrollBehavior }) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Only left-clicks without modifier keys
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as Element | null;
      if (!target) return;

      // Find nearest anchor
      const anchor = target.closest("a");
      if (!anchor) return;

      // Ignore if link has target that opens a new tab/window
      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;

      // Make sure it's an absolute URL we can compare
      let linkUrl: URL;
      try {
        linkUrl = new URL(anchor.getAttribute("href") || "", window.location.href);
      } catch {
        return; // not a valid URL (could be javascript:, mailto:, etc.)
      }

      const currentUrl = new URL(window.location.href);

      // Only handle same-origin links
      if (linkUrl.origin !== currentUrl.origin) return;

      // React Router (HashRouter): pathname will often be the same, hash carries the route.
      const samePathname = linkUrl.pathname === currentUrl.pathname;
      const sameHash = linkUrl.hash === currentUrl.hash;

      if (samePathname && sameHash) {
        // We are already "on" this route. Cancel navigation and scroll to top.
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior });
      }
    };

    // Use capture so we run before React Router's handler
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [behavior]);

  return null;
};

export default SameRouteScroll;
