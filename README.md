# 🌹 Wedding Reminder Manager — PWA

A Progressive Web App to send WhatsApp reminders to your wedding guests.
Works on Android, iPhone, and desktop. Installable on your home screen.

---

## 📂 Files in this package

```
wedding-reminder-pwa/
├── index.html       ← Main app
├── manifest.json    ← PWA metadata (name, icons, theme)
├── sw.js            ← Service worker (offline + notifications)
├── icons/           ← App icons (all sizes)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── README.md
```

---

## 🚀 How to host it (3 options)

### Option A — GitHub Pages (Free, Recommended)
1. Create a free account at github.com
2. Create a new repository (e.g. `my-wedding-app`)
3. Upload all these files (drag & drop into GitHub)
4. Go to **Settings → Pages → Source → main branch**
5. Your app is live at `https://yourusername.github.io/my-wedding-app`

### Option B — Netlify Drop (Fastest, no account needed)
1. Go to **netlify.com/drop**
2. Drag the entire `wedding-reminder-pwa` folder onto the page
3. You get an instant URL like `https://random-name.netlify.app`

### Option C — Your own web hosting
Upload all files to any web server that serves over **HTTPS**.
PWAs require HTTPS to install — HTTP will not work.

---

## 📲 Install on your phone

### Android (Chrome)
1. Open the app URL in Chrome
2. A banner appears: **"Add to home screen"**
3. Tap **Install** → done! The app appears on your home screen.

### iPhone (Safari)
1. Open the app URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **Add** → done!

---

## ✨ Features

- **Guest management** — Add, edit, delete guests with tags and RSVP status
- **Import guests** — Upload a CSV or Excel file with Name, Phone, Relation columns
- **Events** — Set up all your wedding events with dates, times, and venues
- **Designer card messages** — Beautiful formatted WhatsApp messages
- **Plain text messages** — Simple personal reminders
- **Reminder scheduler** — Set dates to be reminded to send messages
- **Notifications** — Get push notifications on reminder day
- **Offline support** — Works without internet after first load
- **Data saved locally** — All guest and event data stays on your device

---

## 📋 CSV Import Format

Your CSV file should have these columns (header row included):

```
Name,Phone,Relation
Priya Sharma,+919876543210,family
Rahul Verma,+918765432109,friend
Meena Kapoor,+917654321098,family
```

Relation options: `family`, `friend`, `colleague`, `vip`

---

## 💬 How WhatsApp sending works

The app opens `wa.me` links — WhatsApp's official share system.
When you tap "Send", it opens WhatsApp Web (or the app on mobile)
with your message already typed. You just tap **Send** in WhatsApp.

This works without any API keys or subscriptions.

---

Built with ❤️ — No data leaves your device.
