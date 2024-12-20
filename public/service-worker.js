// service-worker.js

const CACHE_NAME = "beehealthy-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/icon.png",
  "/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

const notificationButton = document.getElementById("show-notification");

notificationButton?.addEventListener("click", async () => {
  // Request notification permission
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    // Schedule a notification after 10 seconds
    setTimeout(() => {
      new Notification("Hello!", {
        body: "This is your notification after 10 seconds.",
        icon: "icon.png", // Optional: Path to an icon image
      });
    }, 10000); // 10 seconds
  } else {
    alert("Notification permission was denied.");
  }
});
