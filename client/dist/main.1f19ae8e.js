// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/navigo/lib/navigo.min.js":[function(require,module,exports) {
var define;
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Navigo",[],n):"object"==typeof exports?exports.Navigo=n():t.Navigo=n()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){var n=location.hash;location.hash="",location.hash=n,t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));

},{}],"node_modules/login/lib/login.js":[function(require,module,exports) {
var __dirname = "C:\\wamp64\\www\\ProjetTuteure\\client\\node_modules\\login\\lib";
module.exports.postgresql = require(__dirname + "/login.postgresql"); // module.exports.redis = require(__dirname+"/login.redis");
// module.exports.couchdb = require(__dirname+"/login.couchdb");
},{}],"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/path-browserify/index.js":[function(require,module,exports) {
var process = require("process");
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/os-browserify/browser.js":[function(require,module,exports) {
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],"node_modules/home/index.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

const {
  resolve: resolve
} = require('path');

const USER_HOME = require('os').homedir();

function home() {
  return USER_HOME;
}

const resolveHome = path => path === '~' ? USER_HOME // I thought, nobody will use `'~\\path\\to'`, but only `'~/path/to'`
: !~path.indexOf('~/') // '~file'
? path // '~/file' -> '/Users/xxx/file'
: USER_HOME + path.slice(1); // The enhanced `path.resolve`


home.resolve = (...args) => resolve.apply(void 0, _toConsumableArray(args.map(resolveHome)));

module.exports = home;
},{"path":"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/path-browserify/index.js","os":"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/os-browserify/browser.js"}],"js/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

var LoginPage = _interopRequireWildcard(require("login"));

var HomePage = _interopRequireWildcard(require("home"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import * as RegisterPage from "\register"
//import * as NotFoundPage from "\notFound"

/**
  * @param {HTMLElement} container
  * @param {Object} router
  */
var init = function init(container, router) {
  var currentPage;

  var init = function init() {
    initRoutes();
  };

  var initRoutes = function initRoutes() {
    router //	 	.on("/", () => {
    //		  currentPage = LoginPage.render(container, router)
    //		}, {
    //		  before: protectAuthenticatedRoute
    //		})
    .on("/login", function () {
      currentPage = LoginPage.render(container, router);
    });
  };
  /* 
  		.on("/register", () => {
  		  currentPage = RegisterPage.render(container, router)
  		})
    
  	  // Utiliser la méthode `notFound` du router pour afficher la page "notFound"
  	  // lorsque l'URL du navigateur ne correspond à aucune route gerée par
  	  // l'application
  		.notFound(() => {
  		  currentPage = NotFoundPage.render(container, router)
  		})
    
  	  router.hooks({
  		leave: handleLeave
  	  })
    
  	  router.resolve()
  	}
  	const protectAuthenticatedRoute = (done) => {
  	  // Si l'utilisateur est connecté (voir module `src/services/auth.js`), on
  	  // poursuit le changement de page, sinon on empêche le changement de page
  	  // et on redirige vers la route `/login`
  	  if (isLoggedIn()) {
  		done()
  	  } else {
  		done(false)
  		router.navigate("/login")
  	  }
  	}
    
  	const handleLeave = (done) => {
  	  if (currentPage && currentPage.destroy) {
  		currentPage.destroy()
  	  }
    
  	  done()
  	}
    */


  var destroy = function destroy() {
    router.destroy();
  };

  init();
  return {
    destroy: destroy
  };
};
/*
const router = new Navigo('/ProjetTuteure/client/');
router.on('/accueil', function () {
  // do something
});




	function reqListener () {
  console.log(this.responseText)
}
	var oReq = new XMLHttpRequest()
	oReq.addEventListener("load", reqListener)
	oReq.open("GET", "http://localhost:80/ProjetTuteure/verify_user")
	oReq.send()
*/


exports.init = init;
},{"login":"node_modules/login/lib/login.js","home":"node_modules/home/index.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _navigo = _interopRequireDefault(require("navigo"));

var App = _interopRequireWildcard(require("/js/App"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appElement = document.getElementById("app");
var router = new _navigo.default("/");
App.init(appElement, router);
},{"navigo":"node_modules/navigo/lib/navigo.min.js","/js/App":"js/App.js"}],"../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62076" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../Users/Utilisateur/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map