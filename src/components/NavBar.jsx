import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PulseMark from './PulseMark.jsx'
import AiConfigModal from './AiConfigModal.jsx'

const links = [
  { to: '/', label: 'Scan', end: true },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/report', label: 'Report' },
  { to: '/doctors', label: 'Doctor Apps (TBC)' },
  { to: '/rollout', label: 'Rollout & Zindigi (TBC)' },
]

export default function NavBar({ onReplayIntro }) {
  const [showAiModal, setShowAiModal] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <NavLink to="/" className="navbar__brand" end style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <PulseMark size={28} animate />
            <span style={{ fontWeight: 900, letterSpacing: '0.06em', color: '#141413' }}>TIB-E-NIJAT</span>
            <span style={{
              background: '#10b981',
              color: '#052e16',
              border: '2px solid #141413',
              boxShadow: '2px 2px 0px #141413',
              borderRadius: '8px',
              padding: '2px 8px',
              fontSize: '12px',
              fontWeight: 800,
              marginLeft: '2px',
              fontFamily: "'Noto Nastaliq Urdu', serif"
            }}>طبِ نجات</span>
            <span style={{
              background: '#fef3c7',
              color: '#92400e',
              border: '1.5px solid #141413',
              borderRadius: '999px',
              padding: '2px 8px',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>Zindigi Prize</span>
          </NavLink>
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay intro splash animation"
              style={{
                background: '#fffdf9',
                border: '1.5px solid #141413',
                boxShadow: '2px 2px 0px #141413',
                color: '#141413',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              ▶ Intro
            </button>
          )}
        </div>

        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__status" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={() => setShowAiModal(true)}
            style={{
              background: '#fef3c7',
              border: '2px solid #141413',
              boxShadow: '2px 2px 0px #141413',
              color: '#92400e',
              borderRadius: '999px',
              padding: '4px 12px',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '800',
            }}
          >
            🤖 AI Engine
          </button>

          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#d1fae5',
            color: '#065f46',
            border: '2px solid #141413',
            boxShadow: '2px 2px 0px #141413',
            padding: '4px 10px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 800
          }}>
            <span className="pill-dot" />
            On-Device Ready
          </span>
        </div>
      </div>

      <AiConfigModal isOpen={showAiModal} onClose={() => setShowAiModal(false)} />
    </header>
  )
}
