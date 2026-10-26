import { useState } from 'react'
import { Link } from 'react-router-dom'

const ROADMAP_PHASES = [
  {
    months: 'Months 1–3',
    title: 'Ethics Approval & Hospital ECG Clinical Trial',
    badge: 'TBC · Clinical Validation',
    budget: '30% of Ask (600,000 PKR)',
    details:
      'Obtain institutional ethics approval and test Tib-e-Nijat across 100–200 diverse patients (varying skin tones & devices) against a clinical reference ECG. Target accuracy: within ±2 BPM of ECG.',
    deliverable: 'Validated ±2 BPM accuracy & DRAP screening classification confirmed.',
  },
  {
    months: 'Months 4–6',
    title: 'Native Village Pharmacy App Trial (No Stations Yet)',
    badge: 'TBC · Village Pilot',
    budget: 'Grassroots Field Validation',
    details:
      'Trial the app directly with pharmacy owners in our own native villages — testing with people we know to gather honest feedback on lighting, confidence retakes, and 50 PKR willingness-to-pay before deploying kiosk hardware.',
    deliverable: 'Real-world rural pharmacy workflow & unit economics reviewed.',
  },
  {
    months: 'Months 7–12',
    title: 'Nearby Town Pharmacy Stations, Doctor Apps & Zindigi Wallet',
    badge: 'TBC · Commercial Scale',
    budget: '45% Stations (900k PKR) + 25% Reg/Partners (500k PKR)',
    details:
      'Set up our first tablet screening stations in nearby Tier 2 & Tier 3 towns, connect with 1–2 doctor apps (Oladoc / Marham) so doctors see vitals before the call, and explore Zindigi health-check micro-insurance (subject to SECP approval).',
    deliverable: 'First pharmacy stations live + 1–2 doctor app & wallet partnerships.',
  },
]

export default function RolloutRoadmapPage() {
  const [scansPerDay, setScansPerDay] = useState(20)
  const pricePerScan = 50
  const monthlyGross = scansPerDay * pricePerScan * 30
  const pharmacyShare = Math.round(monthlyGross * 0.4)
  const tibenijatShare = Math.round(monthlyGross * 0.6)

  return (
    <main className="page rollout-page">
      <div className="dashboard-header" style={{ marginBottom: '20px' }}>
        <div>
          <p className="eyebrow">★ Rollout, Unit Economics &amp; 12-Month Roadmap (TBC)</p>
          <h1 className="page-title">Pharmacies, Zindigi Wallet &amp; Clinical Trial</h1>
          <p className="page-subtitle">
            Our step-by-step rollout from our own native villages to Tier 2 &amp; Tier 3 pharmacies, doctor app partnerships, and Zindigi QR / micro-insurance (rough estimates, <strong>TBC in our trial</strong>).
          </p>
        </div>

        <div className="dashboard-actions-top">
          <Link to="/doctors" className="btn btn--ghost">
            🩺 Doctor Partners (TBC)
          </Link>
          <Link to="/" className="btn btn--primary">
            ← Back to 30s Scanner
          </Link>
        </div>
      </div>

      {/* 3-Step Rollout Cards */}
      <div className="stat-row" style={{ marginTop: '12px' }}>
        <div className="card stat-card" style={{ borderLeftColor: '#059669' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="pill pill--ok">Step 1 · Now</span>
            <span className="pill pill--pending" style={{ fontSize: '10px' }}>TBC in Village Trial</span>
          </div>
          <p className="stat-card__value" style={{ fontSize: '20px' }}>1. Neighborhood Pharmacies</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '6px', lineHeight: 1.5 }}>
            Start in our own native villages to learn from honest feedback, then deploy tablet stations at chemist counters in Tier 2 &amp; Tier 3 towns.
          </p>
        </div>

        <div className="card stat-card stat-card--flag">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="pill pill--flag">Step 2 · Next</span>
            <span className="pill pill--pending" style={{ fontSize: '10px' }}>TBC · Months 7–12</span>
          </div>
          <p className="stat-card__value" style={{ fontSize: '20px' }}>2. Approach Doctor Apps</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '6px', lineHeight: 1.5 }}>
            Partner with Oladoc &amp; Marham so doctors receive the patient&apos;s 30-second vitals readout before the consultation call begins.
          </p>
        </div>

        <div className="card stat-card stat-card--pending">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="pill pill--pending">Step 3 · Later</span>
            <span className="pill pill--pending" style={{ fontSize: '10px' }}>TBC · SECP Approval</span>
          </div>
          <p className="stat-card__value" style={{ fontSize: '20px' }}>3. Zindigi QR &amp; Wallets</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '6px', lineHeight: 1.5 }}>
            Instant 50 PKR scan payments via Zindigi QR and bundled health-check micro-insurance policies, subject to SECP regulatory approval.
          </p>
        </div>
      </div>

      <div className="scan-layout" style={{ marginTop: '20px' }}>
        {/* Left Column: 12-Month Roadmap & DRAP/Ethics */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800 }}>First-Year Roadmap (Months 1–12 · TBC)</h2>
              <span className="pill pill--ok">Target: ±2 BPM vs. ECG</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {ROADMAP_PHASES.map((phase) => (
                <div
                  key={phase.months}
                  style={{
                    background: 'var(--card-bg-raised)',
                    border: '2px solid var(--card-border)',
                    boxShadow: '4px 4px 0px var(--card-border)',
                    borderRadius: '14px',
                    padding: '16px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <span className="pill pill--flag" style={{ fontSize: '11px' }}>{phase.months}</span>
                    <span className="pill pill--pending" style={{ fontSize: '11px' }}>{phase.badge}</span>
                  </div>
                  <p style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-white)' }}>{phase.title}</p>
                  <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '4px', lineHeight: 1.55 }}>{phase.details}</p>
                  <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 700, color: '#065f46', background: '#d1fae5', padding: '6px 10px', borderRadius: '8px', border: '1.5px solid #141413' }}>
                    ✓ Milestone Outcome: {phase.deliverable} ({phase.budget})
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Interactive Pharmacy Revenue Estimator (TBC) & 2M PKR Ask */}
        <section className="scan-side">
          <div className="card readout-card">
            <p className="readout-card__title">
              <span>Pharmacy Store Economics</span>
              <span className="pill pill--pending" style={{ fontSize: '10px', padding: '2px 8px' }}>
                Rough Estimate · TBC
              </span>
            </p>

            <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginBottom: '12px' }}>
              Adjust daily scans per pharmacy store (~50 PKR per scan by cash or Zindigi QR):
            </p>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 800, marginBottom: '6px' }}>
                <span>Daily Scans per Store:</span>
                <span className="mono">{scansPerDay} scans/day</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={scansPerDay}
                onChange={(e) => setScansPerDay(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#e05219', cursor: 'pointer' }}
              />
            </div>

            <div className="readout-grid">
              <div className="readout-stat">
                <p className="readout-stat__label">Monthly Gross</p>
                <p className="readout-stat__value mono" style={{ fontSize: '15px' }}>
                  {monthlyGross.toLocaleString()} <span className="readout-stat__unit">PKR</span>
                </p>
              </div>
              <div className="readout-stat">
                <p className="readout-stat__label">40% Pharmacy</p>
                <p className="readout-stat__value mono" style={{ fontSize: '15px' }}>
                  {pharmacyShare.toLocaleString()} <span className="readout-stat__unit">PKR</span>
                </p>
              </div>
              <div className="readout-stat">
                <p className="readout-stat__label">60% Tib-e-Nijat</p>
                <p className="readout-stat__value mono" style={{ fontSize: '15px' }}>
                  {tibenijatShare.toLocaleString()} <span className="readout-stat__unit">PKR</span>
                </p>
              </div>
            </div>

            <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '10px', fontStyle: 'italic' }}>
              * Rough estimates (~20 PKR pharmacy / ~30 PKR software, tablets &amp; support per scan). To be confirmed in our village pharmacy trial.
            </p>
          </div>

          <div className="card" style={{ background: '#fff3ed' }}>
            <p className="readout-card__title">
              <span>Our Seed Ask: 2,000,000 PKR</span>
              <span className="pill pill--ok" style={{ fontSize: '10px', padding: '2px 8px' }}>
                Zindigi Prize
              </span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: 700 }}>
              <div style={{ padding: '8px 10px', background: '#fffdf9', border: '2px solid #141413', borderRadius: '8px' }}>
                🏪 <strong>45% (900,000 PKR):</strong> First pharmacy stations (tablets, setup, training)
              </div>
              <div style={{ padding: '8px 10px', background: '#fffdf9', border: '2px solid #141413', borderRadius: '8px' }}>
                🏥 <strong>30% (600,000 PKR):</strong> Clinical trial (ethics approval &amp; ECG reference)
              </div>
              <div style={{ padding: '8px 10px', background: '#fffdf9', border: '2px solid #141413', borderRadius: '8px' }}>
                ⚖️ <strong>25% (500,000 PKR):</strong> DRAP regulation, legal &amp; doctor/wallet partnerships
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
