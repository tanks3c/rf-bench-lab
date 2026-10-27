// Radio Hub offline cache. Same-origin files only; map tiles and live data stay online-only.
const CACHE='radio-hub-05e00808df';
const PRECACHE=[
"./",
"hub/",
"index.html",
"hub/assets/hub-base.css",
"hub/assets/hub.css",
"hub/assets/hub.js",
"hub/data/Manatee_Amateur_Repeaters_Area_Only_OsmAnd.gpx",
"hub/data/Parrish_Radio_Towers_OSM_uMap.geojson",
"hub/icons/icon-180.png",
"hub/icons/icon-192.png",
"hub/icons/icon-512.png",
"hub/index.html",
"hub/inventory.html",
"hub/lmr-toolkit.html",
"hub/manifest.webmanifest",
"hub/maps.html",
"hub/meshtastic.html",
"hub/vendor/leaflet/images/layers-2x.png",
"hub/vendor/leaflet/images/layers.png",
"hub/vendor/leaflet/images/marker-icon-2x.png",
"hub/vendor/leaflet/images/marker-icon.png",
"hub/vendor/leaflet/images/marker-shadow.png",
"hub/vendor/leaflet/leaflet.css",
"hub/vendor/leaflet/leaflet.js"
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('radio-hub-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(async cache=>{
    const hit=await cache.match(req,{ignoreSearch:true});
    const net=fetch(req).then(res=>{if(res&&res.ok)cache.put(req,res.clone());return res;}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit;}
    const res=await net;
    if(res)return res;
    if(req.mode==='navigate'){const fb=await cache.match('hub/index.html');if(fb)return fb;}
    return new Response('Offline and not cached.',{status:503,headers:{'Content-Type':'text/plain'}});
  }));
});
