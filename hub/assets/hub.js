// Radio Hub: registers the site-wide offline cache. No analytics, no network calls of its own.
(function(){
  'use strict';
  if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')){
    window.addEventListener('load',function(){navigator.serviceWorker.register('../sw.js').catch(function(){});});
  }
})();
