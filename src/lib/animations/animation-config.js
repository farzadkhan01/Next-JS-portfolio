// Shared animation timing (DESIGN_SYSTEM.md §13). GSAP and Motion read from
// here so both libraries move with the same rhythm.

export const DURATION = {
  ui: 0.22, // small UI transitions (200–300ms)
  reveal: 0.8, // section reveals (500–800ms)
};

export const EASE = {
  gsap: "power3.out",
  motion: [0.22, 1, 0.36, 1], // matches the CSS --ease-out-soft token
};

export const REVEAL = {
  distance: 28, // px of upward travel
  stagger: 0.08,
  start: "top 88%", // reveal when an element's top passes 88% of the viewport
  startRatio: 0.88, // same threshold as a number (used for reachability checks)
};
