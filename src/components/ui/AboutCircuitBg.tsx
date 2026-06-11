/** Static decorative SVG — node graph traces emerging from a central chip motif. */
export const AboutCircuitBg = () => (
  <svg
    className="about-circuit-bg"
    viewBox="0 0 1200 640"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="about-trace" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="about-chip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.08" />
      </linearGradient>
      <filter id="about-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Circuit grid hints */}
    <g stroke="#2a3344" strokeWidth="1" opacity="0.45">
      <line x1="0" y1="160" x2="1200" y2="160" />
      <line x1="0" y1="320" x2="1200" y2="320" />
      <line x1="0" y1="480" x2="1200" y2="480" />
      <line x1="200" y1="0" x2="200" y2="640" />
      <line x1="600" y1="0" x2="600" y2="640" />
      <line x1="1000" y1="0" x2="1000" y2="640" />
    </g>

    {/* Central microchip */}
    <g transform="translate(720 220)">
      <rect
        x="0"
        y="0"
        width="180"
        height="120"
        rx="8"
        fill="url(#about-chip)"
        stroke="#2dd4bf"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <rect x="24" y="24" width="48" height="32" rx="4" fill="#151a24" stroke="#2a3344" />
      <rect x="108" y="24" width="48" height="32" rx="4" fill="#151a24" stroke="#2a3344" />
      <rect x="66" y="68" width="48" height="24" rx="4" fill="#151a24" stroke="#2a3344" />
      {/* Pin pads */}
      {Array.from({ length: 7 }, (_, i) => (
        <rect
          key={`pin-top-${i}`}
          x={18 + i * 22}
          y="-10"
          width="10"
          height="10"
          rx="2"
          fill="#12161e"
          stroke="#2dd4bf"
          strokeOpacity="0.4"
        />
      ))}
      {Array.from({ length: 7 }, (_, i) => (
        <rect
          key={`pin-bottom-${i}`}
          x={18 + i * 22}
          y="120"
          width="10"
          height="10"
          rx="2"
          fill="#12161e"
          stroke="#2dd4bf"
          strokeOpacity="0.4"
        />
      ))}
      <rect x="-10" y="28" width="10" height="10" rx="2" fill="#12161e" stroke="#a78bfa" strokeOpacity="0.4" />
      <rect x="-10" y="82" width="10" height="10" rx="2" fill="#12161e" stroke="#a78bfa" strokeOpacity="0.4" />
      <rect x="180" y="28" width="10" height="10" rx="2" fill="#12161e" stroke="#a78bfa" strokeOpacity="0.4" />
      <rect x="180" y="82" width="10" height="10" rx="2" fill="#12161e" stroke="#a78bfa" strokeOpacity="0.4" />
    </g>

    {/* Circuit traces from chip */}
    <g fill="none" stroke="url(#about-trace)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M710 248 L560 248 L560 120 L320 120" />
      <path d="M710 312 L520 312 L520 440 L180 440" />
      <path d="M900 248 L1020 248 L1020 80 L1100 80" />
      <path d="M900 312 L1040 312 L1040 520 L1120 520" />
      <path d="M810 220 L810 60 L960 60" />
      <path d="M720 340 L480 340 L480 560 L80 560" />
    </g>

    {/* Node graph — connections between trace endpoints */}
    <g stroke="#2dd4bf" strokeOpacity="0.22" strokeWidth="1">
      <line x1="320" y1="120" x2="180" y2="200" />
      <line x1="320" y1="120" x2="420" y2="80" />
      <line x1="180" y1="200" x2="120" y2="280" />
      <line x1="420" y1="80" x2="520" y2="40" />
      <line x1="180" y1="440" x2="280" y2="380" />
      <line x1="180" y1="440" x2="80" y2="480" />
      <line x1="1100" y1="80" x2="1040" y2="160" />
      <line x1="1120" y1="520" x2="1000" y2="440" />
      <line x1="960" y1="60" x2="1040" y2="160" />
      <line x1="80" y1="560" x2="180" y2="440" />
      <line x1="280" y1="380" x2="420" y2="300" />
    </g>

    {/* Nodes */}
    <g filter="url(#about-glow)">
      {[
        [320, 120],
        [180, 200],
        [420, 80],
        [120, 280],
        [520, 40],
        [180, 440],
        [280, 380],
        [80, 480],
        [1100, 80],
        [1040, 160],
        [1120, 520],
        [1000, 440],
        [960, 60],
        [80, 560],
        [420, 300],
        [560, 248],
        [520, 312],
        [810, 60],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="5"
          fill="#0b0d12"
          stroke="#2dd4bf"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
      ))}
      {/* Hub nodes — slightly larger */}
      {[
        [320, 120],
        [180, 440],
        [1100, 80],
        [810, 220],
      ].map(([cx, cy]) => (
        <circle key={`hub-${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#2dd4bf" fillOpacity="0.15" />
      ))}
    </g>
  </svg>
);
