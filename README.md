# RF Bench Lab

An interactive, browser-based lab for the FCC Technician exam (2026-2030 pool) and land mobile radio (LMR) job prep. One self-contained HTML file. No build step, no tracking, no backend.

Live: https://tanks3c.github.io/rf-bench-lab/

## Modules

1. RF math: wavelength, decibels, dBm, Ohm's law
2. Wave scope: animated space, time, and phasor views, with a second signal for multipath and beating
3. Feedline and SWR: reflection coefficient, return loss, coax loss, animated standing wave
4. Antennas: simulated SWR sweep and trim to resonance, ERP and EIRP
5. Repeaters: offsets, CTCSS/DCS, CHIRP-style CSV row
6. Link budget: free-space path loss, fade margin, radio horizon, Fresnel zone, LoRa (Meshtastic)
7. LMR systems: analog FM, DMR, P25 Phase 1 and 2, PoC, and where LMR meets cybersecurity
8. Modulation: FM and AM spectrum, Carson's rule, Bessel nulls

Each module asks for a prediction before its bench unlocks, then checks understanding with exam-style questions. Dotted terms show plain-English explanations on hover or tap. Progress saves in the browser's local storage.

## Limits

The models are teaching approximations. Coax loss scales by the square root of frequency from typical datasheet values. Antennas use a single-resonance model. Link budgets assume free space plus a user-set clutter allowance. Repeater offsets follow common US band plans, which vary by region. Study the official NCVEC question pool for the exam.
