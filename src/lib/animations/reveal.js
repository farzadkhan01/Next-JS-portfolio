// Scroll-reveal bootstrapping.
//
// Elements marked `data-reveal` start hidden only while
// <html data-reveal-state="pending">. That attribute is set by
// REVEAL_INIT_SCRIPT before first paint — and only when JavaScript runs and
// the visitor has not requested reduced motion. ScrollReveals then hands each
// element to GSAP and switches the state to "ready".
//
// Safety: if GSAP has not taken over within REVEAL_TIMEOUT_MS (script error,
// slow network), the script switches to "ready" itself, so content is never
// hidden indefinitely. Without JavaScript nothing is ever hidden.

export const REVEAL_TIMEOUT_MS = 3000;

export const REVEAL_INIT_SCRIPT = `(function(){try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;var r=document.documentElement;r.dataset.revealState="pending";setTimeout(function(){if(r.dataset.revealState==="pending")r.dataset.revealState="ready";},${REVEAL_TIMEOUT_MS});}catch(e){}})();`;
