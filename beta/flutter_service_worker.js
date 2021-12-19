'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d34160e0b71d7bbe4a0628bfd5d1296b",
"assets/assets/changelog/changelog.md": "4556ae2f9f09f030b6f93ff53557ffe2",
"assets/assets/icon/discord.svg": "d06dfc96703b12a1aa53977b752b2241",
"assets/assets/icon/icon.ico": "1e0a17be1279136651beb81f803f88ee",
"assets/assets/icon/icon.png": "9d43fb9ac447147d5c4740d85bfffd91",
"assets/assets/icon/moon.svg": "7fe50f25c11d11f5833b33d03a17fa04",
"assets/assets/images/person.png": "581e3911cd91da768886b85a510fbc5b",
"assets/assets/images/person64.png": "e7d54aae7ff4bef166218893e777bfa8",
"assets/assets/images/transparent.png": "48a6640ee19bd6effa57a8111bdbba6c",
"assets/assets/reactions/dislike-black.svg": "d674fddce5420322065f8c352ff497d3",
"assets/assets/reactions/dislike-white.svg": "1f2b6b4e58a485bc404ea1f0a3be2b7e",
"assets/assets/reactions/emphasize-black.svg": "3d628e4053b7fb9891e2d3ac0d0f7b9b",
"assets/assets/reactions/emphasize-white.svg": "5c74aeb9f8c88f7547dac0fc35ad5c08",
"assets/assets/reactions/laugh-black.svg": "5f9e39b90761e4ebde7f62576975fc2d",
"assets/assets/reactions/like-black.svg": "80377f30564d6000993c926ba10c29d5",
"assets/assets/reactions/like-white.svg": "b05494b45079b9d8f17943412919c531",
"assets/assets/reactions/love-black.svg": "0f0a056e8d5201f34189fc50f0566f97",
"assets/assets/reactions/love-white.svg": "77e83451d8e76f0edb6b6c4fafe26f53",
"assets/assets/reactions/question-black.svg": "824fa3e5b54e6dbf2afc0881b0f1337a",
"assets/assets/reactions/question-white.svg": "8a5c916e432097e30c964a5f5ffad8ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e5e5bf83873d6e57f14020991a7455c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "293130157c75eed869a41f5e53c1b313",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/libphonenumber_plugin/assets/js/libphonenumber.js": "8578efe7b5232496cd05944ae9ae8ce8",
"assets/packages/libphonenumber_plugin/assets/js/stringbuffer.js": "5d8ac81dc841740b2a94e8daa7be8027",
"assets/packages/libphonenumber_plugin/js/libphonenumber.js": "8578efe7b5232496cd05944ae9ae8ce8",
"assets/packages/libphonenumber_plugin/js/stringbuffer.js": "5d8ac81dc841740b2a94e8daa7be8027",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"icons/favicon.ico": "2b083199e38815813e7f02e1dab074cd",
"icons/Icon-128.png": "4df524384acfdb7a560efda41f1b2e83",
"icons/Icon-256.png": "878c05a2060031d95a8a2c15cea73148",
"icons/Icon-maskable-128.png": "4df524384acfdb7a560efda41f1b2e83",
"icons/Icon-maskable-256.png": "878c05a2060031d95a8a2c15cea73148",
"index.html": "ff17103325ef50fb1af834ab52da04ca",
"/": "ff17103325ef50fb1af834ab52da04ca",
"main.dart.js": "f1f260ea6a63cc779c0fdc24c450966d",
"manifest.json": "3e7aeae6a24110980254435ed972d02a",
"splash/img/dark-1x.png": "6b3a33cdd699ae9708f4d12304b4b8f7",
"splash/img/dark-2x.png": "caa9eb94f806e94eb98525acb1f1dcdb",
"splash/img/dark-3x.png": "ab508326b99d7ac0d3718c030205606f",
"splash/img/dark-4x.png": "2e45f11012b1509b005668cf70895453",
"splash/img/light-1x.png": "6b3a33cdd699ae9708f4d12304b4b8f7",
"splash/img/light-2x.png": "caa9eb94f806e94eb98525acb1f1dcdb",
"splash/img/light-3x.png": "ab508326b99d7ac0d3718c030205606f",
"splash/img/light-4x.png": "2e45f11012b1509b005668cf70895453",
"splash/style.css": "6cf9de7eb84c8b3dcf5d0d99d3c2df73",
"version.json": "7e257aa5ec51952fef30d218612d9d32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  //"/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
