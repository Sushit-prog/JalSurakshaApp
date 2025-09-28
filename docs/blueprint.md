# **App Name**: JalSuraksha PWA

## Core Features:

- User Authentication: Secure user authentication with Firebase Auth, supporting email/password and phone OTP (for ASHA/clinic roles).
- Symptom and Water Quality Reporting: Mobile-first form for community members, ASHAs, and clinics to report symptoms, water quality data (pH, turbidity), and other relevant information (temperature, photos, GPS location, village/region).
- Anomaly Detection: Cloud Function that analyzes report data in real-time to detect anomalies (e.g., spikes in water-borne disease reports) within specific regions and time windows. Configuration is done by setting a reportsThresholdPerWindow and a windowMinutes duration.
- Real-time Notifications: FCM (push) notifications to health officials in affected regions, and SMS alerts via Twilio (or pluggable SMS gateway) with multilingual support. These alerts are triggered when the system identifies anomalies in incoming data, prompting rapid response.
- Offline Data Sync: Enable offline-first functionality by persisting data locally and syncing when the device is online, using Firestore persistence and IndexedDB.
- Admin Dashboard: Web-based dashboard for officials/admins to visualize alerts and reports on a map, view trend charts, and configure system parameters.
- SMS Reporting: A tool that uses SMS endpoint for users without smartphones to submit reports via SMS commands, with parsing and data insertion into Firestore.

## Style Guidelines:

- Primary color: HSL(195, 70%, 45%) which converts to RGB hex value #24A7BA – a saturated, vibrant cyan blue to evoke feelings of cleanliness, health, and trustworthiness, reminiscent of clear water and advanced technology.
- Background color: HSL(195, 20%, 95%) which converts to RGB hex value #F0F8FA – a very light tint of cyan blue, creating a calm and unobtrusive backdrop.
- Accent color: HSL(165, 50%, 50%) which converts to RGB hex value #59BF8F – a contrasting but harmonious vibrant green to signal actions, confirmations, and successful operations.
- Font pairing: 'Space Grotesk' (sans-serif) for headlines, 'Inter' (sans-serif) for body text.
- Code font: 'Source Code Pro' for displaying code snippets.
- Use clean and simple vector icons to represent different symptoms, water quality parameters, and alert types.
- Subtle animations to transition between views, highlight new alerts, and indicate data synchronization.