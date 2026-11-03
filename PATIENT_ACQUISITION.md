# Newlife patient-acquisition operating system

This is an implementation guide, not a claim that WhatsApp automation, CRM, or appointment confirmation is live.

## Existing live components
- Google Business Profile: primary category Dentist, PIN 411057, WhatsApp and appointment URLs.
- Website: phone and directions links, appointment enquiry handoff to WhatsApp.
- GitHub issue #1 tracks further implementation.

## Daily lead process (clinic staff only)
1. Respond to new WhatsApp enquiries during clinic hours. Do not assume opening WhatsApp means a message was sent.
2. Ask permission before sending follow-up reminders. Do not collect diagnosis or treatment details in marketing analytics.
3. Record minimal contact details only in a **private, access-controlled** system; never commit patient data to GitHub or place it in a public webpage.
4. Use lead stages: New → Contacted → Booked → Attended or Lost. Record booking confirmation separately from enquiry.
5. Follow up once on an unanswered enquiry only where consent permits; stop on opt-out.
6. Ask all patients for honest Google reviews without incentives or filtering; do not request reviews in exchange for discounts.

## KPI definitions
- GSC organic impressions and clicks: website search visibility; NOT Maps calls or patient count.
- GBP interactions: calls, direction requests and website clicks (may overlap with other sources).
- WhatsApp enquiries: messages actually received, not website button clicks.
- Booked: appointment confirmed by staff.
- Attended: patient visited.
- Revenue: collected gross clinic revenue, measured separately from enquiries.

## Weekly report
Date range | GSC impressions | GSC clicks | GBP calls | GBP directions | New enquiries | Booked | Attended | Gross revenue (INR)

Do not fill missing values with zero. Compare like-for-like dates, accounting for GSC reporting delays.

## WhatsApp automation dependency
An actual AI receptionist and outbound reminders require a connected WhatsApp Business Platform provider, approved templates as applicable, consent, privacy policy and secure server-side storage. Do not use personal WhatsApp browser automation or publish patient messages in analytics. Escalate clinical questions to the dentist and do not give automated diagnosis.

## Google Maps rank measurement
Use consistent geo-grid coordinates, keywords, measurement dates and grid spacing. Keep the baseline and subsequent exports. No ranking claim without comparable data.

## Scope boundaries
Preserve postal code 411057. Do not modify GBP address, map pin, credentials, categories, clinic hours or clinical claims without verified evidence and any required approvals.
