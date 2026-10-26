export default function PulseMark({ size = 28, animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="emGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="gdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
      {/* Hexagonal Shield of Relief */}
      <path
        d="M 32 3 L 57 17 L 57 47 L 32 61 L 7 47 L 7 17 Z"
        fill="#0A0F1D"
        stroke="url(#emGrad)"
        strokeWidth="2.5"
      />
      {/* Subtle Crescent Overlay */}
      <path
        d="M 40 15 A 17 17 0 1 1 23 50 A 14 14 0 1 0 40 15 Z"
        fill="#10B981"
        opacity="0.25"
      />
      {/* Golden Life Pulse Waveform */}
      <path
        d="M 10 32 L 20 32 L 24 19 L 30 45 L 35 24 L 39 35 L 45 32 L 54 32"
        fill="none"
        stroke="url(#gdGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animate ? 'pulse-trace' : undefined}
      />
    </svg>
  )
}
