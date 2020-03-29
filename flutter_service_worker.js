'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "ecb5459faed0cd83f1261209c8c56cd9",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "f51aa86083a089a9c12ea9b2672ef6ce",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/face.jpg": "ebcceda43f5c2d3e2207c49159f3118b",
"/assets/assets/dm.png": "6fc0007e90678d6e4fef4f819f7aefb5",
"/assets/assets/face1.jpg": "8b0adab2b998ce2fa98d6e8238a48788",
"/assets/assets/httpsunsplash.com@jakobowens1.txt": "d41d8cd98f00b204e9800998ecf8427e",
"/assets/assets/face2.jpg": "6c0e4b1e0bb57a286d6d3dd3e14f68ba",
"/assets/assets/face3.jpg": "253050a6bf72fe3c2c76f8984037785c",
"/assets/assets/sixth.jpg": "9782a81b442d6e27861691b633c92c07",
"/assets/assets/logo.png": "b159b81dd03e723cd2222dc8498c95b0",
"/assets/assets/face6.jpg": "79d42947f41d153c0cbadfc751b0dedc",
"/assets/assets/second.jpg": "7e97bd2adf704cad9557b145b83eebb6",
"/assets/assets/face4.jpg": "682a8e1c16927878380669b9aaa37134",
"/assets/assets/face5.jpg": "7a077f24ba78e45540862c9166f45d4b",
"/assets/assets/fourth.jpg": "92fdb8f27d3a906b1bc7884636a36019",
"/assets/assets/camera.png": "f416d78a96207ba19c27a98b009abc64",
"/assets/assets/third.jpg": "c79f58c32aea3e8c0cecf805a0e8ce2a",
"/assets/assets/fifth.jpg": "44d0f2a665fd64e0bddfa45c45dad5b6",
"/assets/assets/first.jpg": "dafcfa0d48d675e604c2d66b82df1c99",
"/assets/assets/live.png": "cee921a5584a6c83d19273c2dc6d9bd5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
