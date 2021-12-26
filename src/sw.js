// ESLint global registration
/* global serviceWorkerOption: false */

const cacheName = "kanban-cache";
// regex for excluding webpack hot module replacement local dev (https://webpack.js.org/concepts/hot-module-replacement/)
const isExcluded = (f) => /hot-update|sockjs-node/.test(f);

const filesToCache = [
	...serviceWorkerOption.assets.filter((file) => !isExcluded(file)),
	"/",
	"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/superhero/bootstrap.min.css",
	"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
];

// Store a response inside the cache
const updateCache = (request, response) =>
	caches.open(cacheName).then((cache) => cache.put(request, response));

// fetch the request from the network, placing non-exluded items into the cache
//	or throw a reject error if network is inaccessible
const fetchFromNetwork = (request) => {
	return new Promise((resolve, reject) => {
		fetch(request).then((response) => {
			if (!isExcluded(request.url) && response) {
				updateCache(request, response.clone()).then(() => resolve(response));
			} else {
				resolve(response);
			}
		}, reject);
	});
};

// Try fetching existing responses from the cache
const fetchFromCache = (request) => {
	return caches
		.match(request)
		.then((response) => response || Promise.reject("cache says nope!"));
};

// Cache known assets up-front
const preCache = () =>
	caches.open(cacheName).then((cache) => {
		cache.addAll(filesToCache);
	});

//Handle the 'install' event
self.addEventListener("install", (event) => {
	event.waitUntil(preCache());
});

// Try fetching from the network first, or try fetching from the cache if offline
self.addEventListener("fetch", (event) => {
	event.respondWith(
		fetchFromNetwork(event.request).catch(() => fetchFromCache(event.request))
	);
});
