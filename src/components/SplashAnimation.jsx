import { useState, useEffect, useRef } from 'react'

export default function SplashAnimation({ onFinish }) {
  const [stage, setStage] = useState('intro') // intro | trace | title | fadeout
  const onFinishRef = useRef(onFinish)

  useEffect(() => {
    onFinishRef.current = onFinish
  }, [onFinish])

  useEffect(() => {
    const t1 = setTimeout(() => setStage('trace'), 200)
    const t2 = setTimeout(() => setStage('title'), 900)
    const t3 = setTimeout(() => setStage('fadeout'), 2600)
    const t4 = setTimeout(() => {
      onFinishRef.current?.()
    }, 3100)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, []) // Empty dependency array guarantees timers run cleanly without reset

  return (
    <div
      className={`splash-overlay ${stage === 'fadeout' ? 'is-fading' : ''}`}
      onClick={() => {
        setStage('fadeout')
        setTimeout(() => onFinishRef.current?.(), 400)
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="splash-card">
        <div className="splash-logo-box">
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            className="splash-svg"
          >
            {/* Hexagonal Shield */}
            <path
              d="M 50 8 L 86 28 L 86 72 L 50 92 L 14 72 L 14 28 Z"
              fill="#0A0F1D"
              stroke="#10B981"
              strokeWidth="3.5"
            />
            {/* Life Pulse */}
            <path
              d="M 20 50 L 35 50 L 42 30 L 52 70 L 60 38 L 66 54 L 74 50 L 80 50"
              stroke="#EAB308"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="splash-pulse-path"
            />
          </svg>
        </div>
        <div className={`splash-text ${stage === 'title' || stage === 'fadeout' ? 'show' : ''}`}>
          <h1 className="splash-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span>TIB-E-NIJAT</span>
            <span style={{ fontSize: '0.6em', color: '#10B981', background: 'rgba(16,185,129,0.15)', padding: '2px 8px', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.35)' }}>طبِ نجات</span>
          </h1>
          <p className="splash-sub">Contactless Vital Signs & AI Triage</p>
          <span className="splash-skip-hint">Click anywhere to skip</span>
        </div>
      </div>
    </div>
  )
}
