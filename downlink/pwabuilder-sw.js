const CACHE = "downlink-v4.3";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./DLTime.js",
  "./manifest.json",
  "./icon-72.png",
  "./icon-96.png",
  "./icon-128.png",
  "./icon-256.png",
  "./icon-512.png",
  "./offline.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./offline.html");
          }
        })
      );
    })
  );
});
