# Tib-e-Nijat (طبِ نجات) — Zindigi Prize Official Pitch Script & Judge Q&A

**Team:** Ahmad Ali (Business & Partnerships) · Sachin Kumar (Technology & Demo) · Muhammad Uzair (Research & Validation)  
**Tagline:** *Camera-based vital signs screening for every neighborhood pharmacy — no special hardware, no video stored.*

---

## 1. Opening Skit (~45 Seconds · Slide 1 on Screen)

*[Uzair walks in slowly, holding his chest. Sachin stands behind a table with the tablet, as the pharmacist.]*

- **Uzair (Patient):** "I’ve been feeling dizzy since morning. The hospital is two hours away, and the queue will take hours too."
- **Sachin (Pharmacist):** "Sit here. This takes thirty seconds." *[Holds the tablet in front of Uzair’s face. The result appears.]* "Your heart rate is a bit high. I’d get this checked by a doctor today."

*[Uzair nods and freezes. Ahmad steps forward.]*

---

## 2. The Problem & The Solution — Ahmad (~50 Seconds · Slides 1–3)

> "Good [morning/afternoon], judges. We are **Ahmad, Sachin, and Uzair**, and this is **Tib-e-Nijat (طبِ نجات)**.
>
> What you just saw happens every day in Pakistan. We have **fewer than 280,000 doctors for 240 million people**. A basic vitals check can mean hours of travel and waiting, so many people skip it until they are seriously ill.
>
> Our solution takes **thirty seconds**. You look at a tablet camera, and it measures your **pulse, heart rate variability, and breathing**. You get a clear result: **Normal, Monitor, or See a Doctor**. It’s a screening tool that sends people to a doctor. It doesn’t replace one. Sachin will show you how it works."

---

## 3. How It Works — Sachin (~50 Seconds · Slide 3–4)

> "Every time your heart beats, your skin changes color very slightly, too little for the eye to see. The camera picks up those changes, and that’s called **rPPG**. From the same video we also estimate breathing and stress, and the app turns everything into a simple **traffic-light result**.
>
> Two features matter most for Pakistan:
> 1. **A Confidence Meter:** If the lighting is poor or the person moves, the app asks for a retake instead of showing a bad number.
> 2. **A Fingertip-and-Flash Mode:** Built specifically for low light.
>
> Our accuracy target is **within 2 beats per minute of an ECG**, and we’ll confirm that in a hospital trial.
>
> *[Optional: show the live demo here for 15 seconds, or play the backup video.]*
>
> Uzair will explain who this is for and how we deal with the risks."

---

## 4. Market, Competition, Challenges & Privacy — Uzair (~75 Seconds · Slides 4–5)

> "We’re targeting **Tier 2 and Tier 3 cities and towns**, where doctors are fewest and waiting is longest. Our customers are **pharmacy owners**, who earn extra income and get more walk-ins. We’ll begin in **our own native villages**, where we can test with people we know and learn from honest feedback, then scale up on real data.
>
> Camera vitals exist globally, but they mostly serve hospitals and large companies. ECG carts are costly, and BP machines and oximeters measure only one thing and give no referral. Doctor apps like **Oladoc and Marham are partners, not competitors**, because we give their doctors the vitals before the call.
>
> We know the challenges:
> - **Poor lighting:** We have the fingertip-and-flash mode.
> - **Different skin tones and devices:** Our trial will include diverse participants, and weak scans trigger a retake.
> - **Regulation:** This is **screening, not diagnosis**. We’ll get ethics approval before the trial and confirm the classification with **DRAP**.
>
> On **privacy**, the face video is processed on the device and **never stored**. Only the result is kept, and it’s shared only with the patient’s consent."

---

## 5. Business Model, Rollout, Roadmap & Ask — Ahmad (~80 Seconds · Slides 6–9)

> "The business model is simple. A scan costs **about 50 rupees**, paid in cash or through **Zindigi QR**. Roughly **40% (~20 PKR)** goes to the pharmacy and roughly **60% (~30 PKR)** stays with us for software, tablets, and support. At about **20 scans a day**, that’s **roughly 30,000 rupees a month per store**. These are rough estimates, and we’ll confirm them in our trial.
>
> Our rollout has three steps:
> 1. **First:** Pharmacies.
> 2. **Next:** We approach doctors by connecting with doctor apps so doctors see vitals before the call.
> 3. **Later:** Digital wallets like **Zindigi** could offer health-check micro-insurance, subject to **SECP approval**.
>
> Our roadmap for the first year:
> - **Months 1 to 3:** Ethics approval and a hospital trial against ECG (*100–200 patients*).
> - **Months 4 to 6:** We trial the app with pharmacies in our native villages, with no stations yet, just real-world results.
> - **Months 7 to 12:** We set up a small number of stations in nearby towns, then grow them, and start partnerships with doctor apps and wallets.
>
> We are asking for **2 million rupees**:
> - **45% (900,000 PKR)** for the first stations (tablets, setup, training),
> - **30% (600,000 PKR)** for the clinical trial (ethics approval & ECG reference), and
> - **25% (500,000 PKR)** for regulation and partnerships (DRAP, legal, doctors & wallets).
>
> In twelve months, that gives you a validated product, live pharmacies, and our first doctor partner."

---

## 6. Team & Close — All Three (~35 Seconds · Slides 9–10)

- **Ahmad:** "We’re three students from FAST NUCES, and we’ve built a working prototype."
- **Sachin:** "The camera scan you saw is live, and our next step is validating its accuracy against an ECG."
- **Uzair:** "We chose to begin in our own villages because this problem is personal to us."
- **Ahmad (Closing):** "**Tib-e-Nijat** makes basic health screening instant, affordable, and available at the neighborhood pharmacy, with no special hardware and no video stored. Thank you. We’d be happy to take your questions."

---

## 7. Judge Q&A Cheat Sheet

| Question Topic | Concise Answer |
| :--- | :--- |
| **Is this a medical device under DRAP?** | No — Tib-e-Nijat is positioned strictly as a **wellness & pre-consultation triage screening tool** (`Normal`, `Monitor`, `See a Doctor`), not a diagnostic instrument. Before scaling stations, we will complete our IRB/ethics hospital study and confirm formal wellness/screening classification with DRAP. |
| **How does rPPG handle darker skin tones & poor shop lighting?** | Melanin absorbs more green light, which reduces raw AC/DC modulation amplitude. We address this in two ways: (1) our **Signal Confidence Meter** measures SNR in real time and prompts a retake rather than outputting a noisy number, and (2) our **Fingertip + Flash contact mode** uses transilluminated red/green reflection directly against the rear LED flash, bypassing ambient lighting completely. |
| **Why start in your native villages before big cities?** | In Tier 1 cities, hospitals and labs are minutes away. In our native villages and Tier 2/3 towns, a basic check requires hours of travel. Starting in our own communities lets us validate unit economics and patient trust with pharmacy owners we know personally before spending capex on kiosk hardware. |
| **How is patient privacy protected?** | All MediaPipe facial landmarking and rPPG FFT signal processing run **100% on-device in volatile browser RAM**. Zero video frames are ever saved to disk or sent to a server. Only the numerical readout is stored when the patient consents. |
| **Why would Oladoc or Marham partner with you?** | Telemedicine consultations in Pakistan suffer from "blind calls" — the doctor asks the patient if they checked their pulse or vitals, and the patient has no numbers. Tib-e-Nijat sends a structured pre-call vitals card (plus HL7 FHIR R4 export / WhatsApp QR) so the remote doctor starts with objective baseline vitals. |
