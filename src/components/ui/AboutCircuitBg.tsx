/** Static edge motif — simplified chip with a short node trace, anchored top-right. */
export const AboutCircuitBg = () => (
  <svg
    className="about-circuit-bg"
    viewBox="0 0 480 300"
    preserveAspectRatio="xMaxYMin meet"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="about-trace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.18" />
      </linearGradient>
    </defs>

    <g transform="translate(248 28)">
      {/* Chip body */}
      <rect
        x="0"
        y="0"
        width="112"
        height="76"
        rx="6"
        fill="none"
        stroke="#2dd4bf"
        strokeOpacity="0.22"
        strokeWidth="1.25"
      />
      <rect
        x="36"
        y="26"
        width="40"
        height="24"
        rx="3"
        fill="none"
        stroke="#2a3344"
        strokeOpacity="0.9"
        strokeWidth="1"
      />
      {/* Minimal pin hints */}
      <line x1="28" y1="0" x2="28" y2="-8" stroke="#2dd4bf" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="56" y1="0" x2="56" y2="-8" stroke="#2dd4bf" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="84" y1="0" x2="84" y2="-8" stroke="#2dd4bf" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="28" y1="76" x2="28" y2="84" stroke="#a78bfa" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="56" y1="76" x2="56" y2="84" stroke="#a78bfa" strokeOpacity="0.18" strokeWidth="1" />
      <line x1="84" y1="76" x2="84" y2="84" stroke="#a78bfa" strokeOpacity="0.18" strokeWidth="1" />
    </g>

    {/* Two traces, three nodes */}
    <g
      fill="none"
      stroke="url(#about-trace)"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M360 66 L420 118" />
      <path d="M360 90 L400 176 L420 252" />
    </g>

    <g fill="#0b0d12" stroke="#2dd4bf" strokeWidth="1.25">
      <circle cx="420" cy="118" r="4" strokeOpacity="0.35" />
      <circle cx="400" cy="176" r="4" strokeOpacity="0.3" />
      <circle cx="420" cy="252" r="4" strokeOpacity="0.25" />
    </g>
  </svg>
);
