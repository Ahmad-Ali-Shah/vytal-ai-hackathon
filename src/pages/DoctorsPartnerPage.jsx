import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoredRecords } from '../lib/storage'

const UPCOMING_DOCTOR_PARTNERS = [
  {
    id: 'doc-1',
    platform: 'Oladoc Partner Network',
    name: 'Dr. Ayesha Siddiqui, MBBS, FCPS',
    specialty: 'Internal Medicine & Preventive Triage',
    city: 'Lahore / Tele-Consult (Tier 2 & 3)',
    fee: '500 PKR (Pre-Call Vitals Attached)',
    wait: '~5 mins',
    status: 'TBC · Phase 2 Pilot',
  },
  {
    id: 'doc-2',
    platform: 'Marham Telehealth Bridge',
    name: 'Dr. Kamran Raza, MBBS, MD',
    specialty: 'Cardiology & Hypertension Screening',
    city: 'Multan / Sahiwal Regional Hub',
    fee: '600 PKR (Pre-Call Vitals Attached)',
    wait: '~8 mins',
    status: 'TBC · Phase 2 Pilot',
  },
  {
    id: 'doc-3',
    platform: 'Rural Maternal & Child Tele-Care',
    name: 'Dr. Sana Tariq, MBBS, MCPS',
    specialty: 'Maternal Health & Anemia Triage',
    city: 'Sukkur / Interior Sindh & South Punjab',
    fee: '400 PKR (Pre-Call Vitals Attached)',
    wait: '~5 mins',
    status: 'TBC · Village Rollout',
  },
]

export default function DoctorsPartnerPage() {
  const records = getStoredRecords()
  const latestRecord = records[0] || {
    id: 'P-0231',
    name: 'Uzair (Sample Walk-in Patient)',
    hr: 108,
    br: 20,
    stress: 68,
    spo2: 97,
    alertTier: 'ORANGE',
  }

  const [consentChecked, setConsentChecked] = useState(true)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  return (
    <main className="page doctors-page">
      <div className="dashboard-header" style={{ marginBottom: '20px' }}>
        <div>
          <p className="eyebrow">★ Rollout Step 2 · Upcoming Doctor App Integration (TBC)</p>
          <h1 className="page-title">Doctor Apps: Vitals Before the Call</h1>
          <p className="page-subtitle">
            Doctor apps like <strong>Oladoc</strong> and <strong>Marham</strong> are our <strong>partners, not competitors</strong>. Tib-e-Nijat screens patients at the neighborhood pharmacy and sends objective vitals to the doctor before the tele-consultation begins.
          </p>
        </div>

        <div className="dashboard-actions-top">
          <span className="pill pill--pending" style={{ fontSize: '13px', padding: '8px 14px' }}>
            <span className="pill-dot" /> Status: TBC (Months 7–12 Rollout)
          </span>
          <Link to="/" className="btn btn--primary">
            ← Back to 30s Scanner
          </Link>
        </div>
      </div>

      {/* 3-Step Pre-Call Handoff Flow */}
      <div className="canva-feature-strip" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '22px' }}>
        <div className="canva-feature-chip">
          <div className="canva-feature-chip__icon" style={{ background: '#fff3ed', color: '#e05219' }}>1</div>
          <div>
            <div className="canva-feature-chip__title">30s Pharmacy Scan (~50 PKR)</div>
            <div className="canva-feature-chip__sub">Pharmacist scans Pulse, HRV &amp; Breathing on tablet</div>
          </div>
        </div>
        <div className="canva-feature-chip">
          <div className="canva-feature-chip__icon" style={{ background: '#fef3c7', color: '#d97706' }}>2</div>
          <div>
            <div className="canva-feature-chip__title">Traffic-Light Triggers Referral</div>
            <div className="canva-feature-chip__sub">Monitor / See a Doctor flags abnormal readings early</div>
          </div>
        </div>
        <div className="canva-feature-chip">
          <div className="canva-feature-chip__icon" style={{ background: '#d1fae5', color: '#059669' }}>3</div>
          <div>
            <div className="canva-feature-chip__title">Doctor Sees Vitals Pre-Call (TBC)</div>
            <div className="canva-feature-chip__sub">Shared only with patient consent — zero video stored</div>
          </div>
        </div>
      </div>

      <div className="scan-layout">
        {/* Left Column: Upcoming Partner Doctors Directory */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 800 }}>Upcoming Telehealth Partner Channels</h2>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '2px' }}>
                  Planned API &amp; QR referral bridge for Months 7–12 (Target: 1–2 partner doctor apps in Year 1).
                </p>
              </div>
              <span className="pill pill--pending">
                <span className="pill-dot" /> Partner API · TBC
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {UPCOMING_DOCTOR_PARTNERS.map((doc) => (
                <div
                  key={doc.id}
                  style={{
                    background: 'var(--card-bg-raised)',
                    border: '2px solid var(--card-border)',
                    boxShadow: '4px 4px 0px var(--card-border)',
                    borderRadius: '14px',
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span className="pill pill--ok" style={{ fontSize: '10px', padding: '2px 8px' }}>
                        {doc.platform}
                      </span>
                      <span className="pill pill--pending" style={{ fontSize: '10px', padding: '2px 8px' }}>
                        {doc.status}
                      </span>
                    </div>
                    <p style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-white)' }}>{doc.name}</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-gray)', fontWeight: 600 }}>{doc.specialty}</p>
                    <p style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px' }}>
                      📍 {doc.city} &nbsp;·&nbsp; ⏱️ Est. Queue: {doc.wait} &nbsp;·&nbsp; 💳 {doc.fee}
                    </p>
                  </div>

                  <button
                    className="btn btn--primary"
                    style={{ fontSize: '12px', padding: '10px 16px' }}
                    onClick={() => setSelectedDoctor(doc)}
                  >
                    Attach Vitals &amp; Preview Call (TBC) →
                  </button>
                </div>
              ))}
            </div>

            {selectedDoctor && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '14px 16px',
                  background: '#fff3ed',
                  border: '2px solid #141413',
                  boxShadow: '4px 4px 0px #141413',
                  borderRadius: '12px',
                }}
              >
                <p style={{ fontWeight: 800, fontSize: '13px', color: '#e05219' }}>
                  🚧 UPCOMING FEATURE PREVIEW (TBC — MONTHS 7–12):
                </p>
                <p style={{ fontSize: '13px', color: '#141413', marginTop: '4px', lineHeight: 1.5 }}>
                  Pre-call vitals packet for <strong>{latestRecord.name}</strong> queued for{' '}
                  <strong>{selectedDoctor.name}</strong> ({selectedDoctor.platform}). Once partner API integration is finalized following our hospital ECG trial, pharmacists will be able to launch a 1-click video/audio consult directly from the pharmacy tablet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Right Column: Live Pre-Call Vitals Packet Preview */}
        <section className="scan-side">
          <div className="card readout-card">
            <p className="readout-card__title">
              <span>Pre-Call Doctor Packet</span>
              <span className="pill pill--pending" style={{ fontSize: '10px', padding: '2px 8px' }}>
                TBC · FHIR R4 / QR
              </span>
            </p>

            <div style={{ background: '#f6efe6', border: '2px solid #141413', borderRadius: '12px', padding: '12px', marginBottom: '12px' }}>
              <p style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                What the Partner Doctor Sees Before Answering:
              </p>
              <p style={{ fontSize: '14px', fontWeight: 800, marginTop: '4px' }}>
                Patient: {latestRecord.name} ({latestRecord.id})
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-gray)' }}>
                Source: Neighborhood Pharmacy Station · 30s Camera rPPG
              </p>
            </div>

            <div className="readout-grid">
              <div className="readout-stat">
                <p className="readout-stat__label">Heart Rate</p>
                <p className="readout-stat__value mono">
                  {latestRecord.hr}
                  <span className="readout-stat__unit">bpm</span>
                </p>
              </div>
              <div className="readout-stat">
                <p className="readout-stat__label">Breathing</p>
                <p className="readout-stat__value mono">
                  {latestRecord.br || 18}
                  <span className="readout-stat__unit">br/min</span>
                </p>
              </div>
              <div className="readout-stat">
                <p className="readout-stat__label">HRV / Stress</p>
                <p className="readout-stat__value mono">{latestRecord.stress || 55}/100</p>
              </div>
            </div>

            <label
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginTop: '14px',
                padding: '10px 12px',
                background: '#d1fae5',
                border: '2px solid #141413',
                borderRadius: '10px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#065f46',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                style={{ marginTop: '2px' }}
              />
              <span>
                Patient consents to share numerical vitals readout with partner doctor. (Face video was processed on-device and never stored.)
              </span>
            </label>

            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to={`/report?id=${latestRecord.id}`} className="btn btn--primary" style={{ width: '100%' }}>
                View Printable Referral Slip &amp; QR →
              </Link>
              <Link to="/rollout" className="btn btn--ghost" style={{ width: '100%' }}>
                View Full Rollout, Zindigi Wallet &amp; Trial (TBC) →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
