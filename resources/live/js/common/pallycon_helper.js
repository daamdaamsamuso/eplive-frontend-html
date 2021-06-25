var browser = 'Non-DRM browser';
var drmType = 'No DRM';

// Replace the DASH and HLS URIs when you test your own content. 
// var dashUri = 'https://dfwbvkezlylu6289621.cdn.ntruss.com/dash/ep_480.mp4/manifest.mpd';
// var hlsUri = 'https://dfwbvkezlylu6289621.cdn.ntruss.com/hls/ep_480.mp4/index.m3u8';

var dashUri = 'https://zqqtgkxxieje6289601.cdn.ntruss.com/dash/ep_480.mp4/manifest.mpd';
var hlsUri = 'https://zqqtgkxxieje6289601.cdn.ntruss.com/hls/ep_480.mp4/index.m3u8';

var licenseUri = 'https://license-global.pallycon.com/ri/licenseManager.do';

// Replace the DEMO site ID with yours when you test your own FPS content.
// var fairplayCertUri = 'https://license-global.pallycon.com/ri/fpsKeyManager.do?siteId=DEMO';

// Create and set the license tokens when you test your own content.
var widevineToken = 'eyJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IkZMTlQiLCJ1c2VyX2lkIjoiZXBsaXZlLXVzZXIiLCJjaWQiOiJlcDdsaXZlLWRybS1kYXNoLWtyIiwidG9rZW4iOiIyb1g2M2VGQmREcDE3azl5RVZhWUIxOWZVL0lqMUJ2cC8xbU1KRDlhM0FzWW9vMGFqczllTFFRUytVZWxVM1JPWkswQ2Mvem9IdUFSbUllMXpJV0RhdTdraFc0bnJCa0VGdnhJNS9qd01YST0iLCJ0aW1lc3RhbXAiOiIyMDIxLTAzLTI1VDEzOjU1OjU5WiIsImhhc2giOiJWeWNXclh2cnR3anpId0dteHgvTEFXQ0hrM1RVS25wcVFLdXhDWWk4dGljPSJ9';
var playreadyToken = 'eyJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IkZMTlQiLCJ1c2VyX2lkIjoiZXBsaXZlLXVzZXIiLCJjaWQiOiJlcGxpdmUtdm9kLWRhc2giLCJ0b2tlbiI6IjJvWDYzZUZCZERwMTdrOXlFVmFZQjE5ZlUvSWoxQnZwLzFtTUpEOWEzQXNZb28wYWpzOWVMUVFTK1VlbFUzUk9aSzBDYy96b0h1QVJtSWUxeklXRGF1N2toVzRuckJrRUZ2eEk1L2p3TVhJPSIsInRpbWVzdGFtcCI6IjIwMjEtMDMtMjVUMDg6MDk6MTlaIiwiaGFzaCI6InhQY085U2tsRXZhZ3dPTTdjUUx4N1M3OHVSa2IzeVlIWm1taGNXdEpUNm89In0=';
var fairplayToken = 'eyJkcm1fdHlwZSI6IkZhaXJQbGF5Iiwic2l0ZV9pZCI6IkZMTlQiLCJ1c2VyX2lkIjoiZXBsaXZlLXVzZXIiLCJjaWQiOiJlcDdsaXZlLWRybS1obHMta3IiLCJ0b2tlbiI6IjJvWDYzZUZCZERwMTdrOXlFVmFZQjE5ZlUvSWoxQnZwLzFtTUpEOWEzQXNZb28wYWpzOWVMUVFTK1VlbFUzUk9aSzBDYy96b0h1QVJtSWUxeklXRGF1N2toVzRuckJrRUZ2eEk1L2p3TVhJPSIsInRpbWVzdGFtcCI6IjIwMjEtMDMtMjVUMTM6NTY6NDZaIiwiaGFzaCI6IjFXa0lKRCt5amFHYWZlRHVTaEQ4NThuZ1JlY3dUbXdXTUlBaTF0SUxMeFE9In0=';
// Detect the browser and set proper DRM type
function checkBrowser() {
  var agent = navigator.userAgent.toLowerCase(),
    name = navigator.appName,
    browser;

  if (name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
    browser = 'ie';
    if (name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
      agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
      // browser += parseInt(agent[1]);
    } else if (agent.indexOf('edge/') > -1) { // Edge
      browser = 'Edge';
    }
    drmType = "PlayReady";
  } else if (agent.indexOf('safari') > -1) { // Chrome or Safari
    if (agent.indexOf('opr') > -1) { // Opera
      browser = 'Opera';
      drmType = 'Widevine';
    } else if (agent.indexOf('whale') > -1) { // Chrome
      browser = 'Whale';
      drmType = 'Widevine';
    } else if (agent.indexOf('edg/') > -1 || agent.indexOf('Edge/') > -1) { // Chrome
      browser = 'Edge';
      drmType = "PlayReady";
    } else if (agent.indexOf('chrome') > -1) { // Chrome
      browser = 'Chrome';
      drmType = 'Widevine';
    } else { // Safari
      browser = 'Safari';
      drmType = "FairPlay";
    }
  } else if (agent.indexOf('firefox') > -1) { // Firefox
    browser = 'firefox';
    drmType = 'Widevine';
  }

  // The below three lines are for the sample code only. May need to be removed.
  var result = "Running in " + browser + ". " + drmType + " supported.";
  //document.getElementById("browserCheckResult").innerHTML = result;
  Console_Log(result);

  return browser;
}

function arrayToString(array) {
  var uint16array = new Uint16Array(array.buffer);
  return String.fromCharCode.apply(null, uint16array);
}

function arrayBufferToString(buffer) {
  var arr = new Uint8Array(buffer);
  var str = String.fromCharCode.apply(String, arr);
  // if(/[\u0080-\uffff]/.test(str)){
  //     throw new Error("this string seems to contain (still encoded) multibytes");
  // }
  return str;
}

function base64DecodeUint8Array(input) {
  var raw = window.atob(input);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (i = 0; i < rawLength; i++)
    array[i] = raw.charCodeAt(i);

  return array;
}

function base64EncodeUint8Array(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  while (i < input.length) {
    chr1 = input[i++];
    chr2 = i < input.length ? input[i++] : Number.NaN;
    chr3 = i < input.length ? input[i++] : Number.NaN;

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
      keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

function getFairplayCert() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", fairplayCertUri, false);
  xmlhttp.send();
  Console_Log('fpsCert : ', xmlhttp.responseText);
  var fpsCert = shaka.util.Uint8ArrayUtils.fromBase64(xmlhttp.responseText);
  Console_Log('fpsCert decrypt : ', fpsCert);
  return fpsCert;
}

// global variant to store the name of detected DRM
let supportedDRM = "no support";

// checks which DRM is supported by the browser
function checkSupportedDRM() {
  Console_Log("checkSupportedDRM start");

  var configCENC = [{
    "initDataTypes": ["cenc"],
    "audioCapabilities": [{
      "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
    }],
    "videoCapabilities": [{
      "contentType": "video/mp4;codecs=\"avc1.42E01E\""
    }]
  }];

  var configFPS = [{
    "audioCapabilities": [{
      "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
    }],
    "videoCapabilities": [{
      "contentType": "video/mp4;codecs=\"avc1.42E01E\""
    }]
  }];

  // Checks if the browser support PlayReady DRM
  try {
    navigator.
    requestMediaKeySystemAccess("com.microsoft.playready", configCENC).
    then(function (mediaKeySystemAccess) {
      Console_Log('playready support ok');
      supportedDRM = "PlayReady";
      return; // Stops the checking here because we found PlayReady DRM 
    }).catch(function (e) {
      Console_Log('no playready support');
      Console_Log(e);
    });
  } catch (e) {
    Console_Log('no playready support');
    Console_Log(e);
  }

  // If no PlayReady, checks if there's Widevine DRM
  try {
    navigator.
    requestMediaKeySystemAccess("com.widevine.alpha", configCENC).
    then(function (mediaKeySystemAccess) {
      Console_Log('widevine support ok');
      supportedDRM = "Widevine";
      return; // Stops when Widevine DRM is found
    }).catch(function (e) {
      Console_Log('no widevine support');
      Console_Log(e);
    });
  } catch (e) {
    Console_Log('no widevine support');
    Console_Log(e);
  }

  /* Below code doesn't work on Safari browser. Commenting out for later use.
  try {
    navigator.
    requestMediaKeySystemAccess("com.apple.fps.1_0", configFPS).
    then(function (mediaKeySystemAccess) {
      Console_Log('fairplay support ok');
      supportedDRM = "FairPlay";
      return;
    }).catch(function (e) {
      Console_Log('no fairplay support');
      Console_Log(e);
    });
  } catch (e) {
    Console_Log('no fairplay support');
    Console_Log(e);
  }
  */

  // Couldn't find either PlaReady nor Widevine.
  // Let's just consider the browser supports FairPlay for now..
  Console_Log('seems the browser is safari (fairplay supported)');
  supportedDRM = "FairPlay";
}

/* Commenting out the below code since it doesn't work well on Safari

// EME Check
var keySystems = {
  widevine: ['com.widevine.alpha'],
  playready: ['com.microsoft.playready'],
  fairplay: ['com.apple.fairplay', 'com.apple.fps.1_0', 'com.apple.fps.2_0']
};

var keySystemsCount = (function () {
  var count = 0;
  for (keysys in keySystems) {
    if (keySystems.hasOwnProperty(keysys)) {
      count += keySystems[keysys].length;
    }
  }
  return count;
})();

var testVideoElement = document.createElement('video');
var supportedSystems = [];
var unsupportedSystems = [];

var supportsEncryptedMediaExtension = function () {
  if (!testVideoElement.mediaKeys) {
    if (window.navigator.requestMediaKeySystemAccess) {
      if (typeof window.navigator.requestMediaKeySystemAccess === 'function') {
        Console_Log('found default EME');
        hasEME = true;

        var isKeySystemSupported = function (keySystem) {
          var config = [{
            "initDataTypes": ["cenc"],
            "audioCapabilities": [{
              "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
            }],
            "videoCapabilities": [{
              "contentType": "video/mp4;codecs=\"avc1.42E01E\""
            }]
          }];

          if (window.navigator.requestMediaKeySystemAccess) {
            window.navigator.requestMediaKeySystemAccess(keySystem, config).then(function (keySystemAccess) {
              supportedSystems.push(keySystem);
              supportedDRM = keySystem;
              Console_Log(`supported drm: ${keySystem}`);
            }).catch(function () {
              unsupportedSystems.push(keySystem);
            });
          }
        };

        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              isKeySystemSupported(keySystems[keysys][dummy]);
            }
          }
        }
      }
    } else if (window.MSMediaKeys) {
      if (typeof window.MSMediaKeys === 'function') {
        Console_Log('found MS-EME');
        hasEME = true;
        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              if (MSMediaKeys.isTypeSupported(keySystems[keysys][dummy])) {
                supportedSystems.push(keySystems[keysys][dummy]);
                Console_Log('playready support ok');
                supportedDRM = "PlayReady";
              } else {
                unsupportedSystems.push(keySystems[keysys][dummy]);
              }
            }
          }
        }
      }
    } else if (testVideoElement.webkitGenerateKeyRequest) {
      if (typeof testVideoElement.webkitGenerateKeyRequest === 'function') {
        Console_Log('found WebKit EME');
        hasEME = true;
        var keysys, dummy, i;
        for (keysys in keySystems) {
          if (keySystems.hasOwnProperty(keysys)) {
            for (dummy in keySystems[keysys]) {
              if (testVideoElement.canPlayType('video/mp4', keySystems[keysys][dummy])) {
                supportedSystems.push(keySystems[keysys][dummy]);
                Console_Log('fairplay support ok');
                supportedDRM = "FairPlay";
              } else {
                unsupportedSystems.push(keySystems[keysys][dummy]);
              }
            }
          }
        }
      }
    } else {
      Console_Log('no supported EME implementation found');
      hasEME = false;
    }
  }
}
*/