'use strict';

/* eslint-env browser, serviceworker */

importScripts('./scripts/libs/idb-keyval.js');
importScripts('./scripts/analytics-sw.js');

self.analytics.trackingId = 'UA-77119321-2';

self.addEventListener('push', function(event) {
  console.log('Received push');
  let notificationTitle = 'Hello';
  const notificationOptions = {
    body: 'Thanks for sending this push msg.',
    icon: './images/logo-192x192.png',
    badge: './images/badge-72x72.png',
    tag: 'simple-push-demo-notification',
    data: {
      url: 'https://developers.google.com/web/fundamentals/getting-started/push-notifications/',
    },
  };

  if (event.data) {
    console.log("data received: %o", event.data.json());
    const dataObject = event.data.json();

    notificationTitle = dataObject.subject;
    notificationOptions.body = dataObject.body;
    notificationOptions.data.url = dataObject.url;
  }

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(
        notificationTitle, notificationOptions),
      self.analytics.trackEvent('push-received'),
    ])
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  let clickResponsePromise = Promise.resolve();
  if (event.notification.data && event.notification.data.url) {
    clickResponsePromise = clients.openWindow(event.notification.data.url);
  }

  event.waitUntil(
    Promise.all([
      clickResponsePromise,
      self.analytics.trackEvent('notification-click'),
    ])
  );
});

self.addEventListener('notificationclose', function(event) {
  event.waitUntil(
    Promise.all([
      self.analytics.trackEvent('notification-close'),
    ])
  );
});
