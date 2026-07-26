const CACHE_NAME = 'wedding-reminder-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => caches.match('./index.html'))
  );
});

// Push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || '🌹 Wedding Reminder', {
      body: data.body || 'You have a reminder!',
      icon: './icons/icon-192x192.png',
      badge: './icons/icon-72x72.png',
      vibrate: [200, 100, 200],
      tag: 'wedding-reminder',
      data: { url: data.url || './' }
    })
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      if (list.length) return list[0].focus();
      return clients.openWindow('./');
    })
  );
});

// Background reminder check (triggered by app)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CHECK_REMINDERS') {
    checkAndFireReminders(event.data.reminders);
  }
});

function checkAndFireReminders(reminders) {
  const today = new Date().toISOString().split('T')[0];
  reminders.forEach(r => {
    if (r.scheduledFor === today && r.status === 'scheduled') {
      self.registration.showNotification('🌹 Wedding Reminder Due', {
        body: `Send reminder to ${r.guestName} for ${r.eventName}`,
        icon: './icons/icon-192x192.png',
        badge: './icons/icon-72x72.png',
        vibrate: [200, 100, 200],
        tag: `reminder-${r.id}`,
        actions: [
          { action: 'send', title: '📱 Open WhatsApp' },
          { action: 'dismiss', title: 'Later' }
        ]
      });
    }
  });
}
