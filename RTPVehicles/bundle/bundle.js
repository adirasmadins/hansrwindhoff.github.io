!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in g||(g[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==m.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=g[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(m.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=g[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return D[e]||(D[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=g[s],f=D[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=v(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=g[e];if(t)t.declarative?p(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=v(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=g[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(e){var r={};if("object"==typeof e||"function"==typeof e){var t=e&&e.hasOwnProperty;if(h)for(var n in e)f(r,e,n)||c(r,e,n,t);else for(var n in e)c(r,e,n,t)}return r["default"]=e,y(r,"__useDefault",{value:!0}),r}function c(e,r,t,n){(!n||r.hasOwnProperty(t))&&(e[t]=r[t])}function f(e,r,t){try{var n;return(n=Object.getOwnPropertyDescriptor(r,t))&&y(e,t,n),!0}catch(o){return!1}}function p(r,t){var n=g[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==m.call(t,u)&&(g[u]?p(u,t):v(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function v(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return _(e.substr(6));var r=g[e];if(!r)throw"Module "+e+" not present.";return a(e),p(e,[]),g[e]=void 0,r.declarative&&y(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var g={},m=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},h=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(x){h=!1}var y;!function(){try{Object.defineProperty({},"a",{})&&(y=Object.defineProperty)}catch(e){y=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var D={},_="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:_,register:r,registerDynamic:t,get:v,set:function(e,r){I[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[d],arguments[d]);o(u);var i=v(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)v(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  if (typeof window !== "undefined") {
    module.exports = window;
  } else if (typeof global !== "undefined") {
    module.exports = global;
  } else if (typeof self !== "undefined") {
    module.exports = self;
  } else {
    module.exports = {};
  }
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = trim;
  function trim(str) {
    return str.replace(/^\s*|\s*$/g, '');
  }
  exports.left = function(str) {
    return str.replace(/^\s*/, '');
  };
  exports.right = function(str) {
    return str.replace(/\s*$/, '');
  };
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3');
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = isFunction;
  var toString = Object.prototype.toString;
  function isFunction(fn) {
    var string = toString.call(fn);
    return string === '[object Function]' || (typeof fn === 'function' && string !== '[object RegExp]') || (typeof window !== 'undefined' && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt));
  }
  ;
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5');
  return module.exports;
});

$__System.registerDynamic("7", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isFunction = $__require('6');
  module.exports = forEach;
  var toString = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
      throw new TypeError('iterator must be a function');
    }
    if (arguments.length < 3) {
      context = this;
    }
    if (toString.call(list) === '[object Array]')
      forEachArray(list, iterator, context);
    else if (typeof list === 'string')
      forEachString(list, iterator, context);
    else
      forEachObject(list, iterator, context);
  }
  function forEachArray(array, iterator, context) {
    for (var i = 0,
        len = array.length; i < len; i++) {
      if (hasOwnProperty.call(array, i)) {
        iterator.call(context, array[i], i, array);
      }
    }
  }
  function forEachString(string, iterator, context) {
    for (var i = 0,
        len = string.length; i < len; i++) {
      iterator.call(context, string.charAt(i), i, string);
    }
  }
  function forEachObject(object, iterator, context) {
    for (var k in object) {
      if (hasOwnProperty.call(object, k)) {
        iterator.call(context, object[k], k, object);
      }
    }
  }
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.registerDynamic("9", ["4", "8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var trim = $__require('4'),
      forEach = $__require('8'),
      isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
  module.exports = function(headers) {
    if (!headers)
      return {};
    var result = {};
    forEach(trim(headers).split('\n'), function(row) {
      var index = row.indexOf(':'),
          key = trim(row.slice(0, index)).toLowerCase(),
          value = trim(row.slice(index + 1));
      if (typeof(result[key]) === 'undefined') {
        result[key] = value;
      } else if (isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    });
    return result;
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('9');
  return module.exports;
});

$__System.registerDynamic("b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = extend;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend() {
    var target = {};
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return module.exports;
});

$__System.registerDynamic("c", ["b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b');
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  (function() {
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
  }());
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
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
  process.nextTick = function(fun) {
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
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('d');
  return module.exports;
});

$__System.registerDynamic("f", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('e');
  return module.exports;
});

$__System.registerDynamic("10", ["f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('f');
  return module.exports;
});

$__System.registerDynamic("11", ["2", "6", "a", "c", "10"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var window = $__require('2');
    var isFunction = $__require('6');
    var parseHeaders = $__require('a');
    var xtend = $__require('c');
    module.exports = createXHR;
    createXHR.XMLHttpRequest = window.XMLHttpRequest || noop;
    createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest;
    forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
      createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback);
        options.method = method.toUpperCase();
        return _createXHR(options);
      };
    });
    function forEachArray(array, iterator) {
      for (var i = 0; i < array.length; i++) {
        iterator(array[i]);
      }
    }
    function isEmpty(obj) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i))
          return false;
      }
      return true;
    }
    function initParams(uri, options, callback) {
      var params = uri;
      if (isFunction(options)) {
        callback = options;
        if (typeof uri === "string") {
          params = {uri: uri};
        }
      } else {
        params = xtend(options, {uri: uri});
      }
      params.callback = callback;
      return params;
    }
    function createXHR(uri, options, callback) {
      options = initParams(uri, options, callback);
      return _createXHR(options);
    }
    function _createXHR(options) {
      if (typeof options.callback === "undefined") {
        throw new Error("callback argument missing");
      }
      var called = false;
      var callback = function cbOnce(err, response, body) {
        if (!called) {
          called = true;
          options.callback(err, response, body);
        }
      };
      function readystatechange() {
        if (xhr.readyState === 4) {
          loadFunc();
        }
      }
      function getBody() {
        var body = undefined;
        if (xhr.response) {
          body = xhr.response;
        } else {
          body = xhr.responseText || getXml(xhr);
        }
        if (isJson) {
          try {
            body = JSON.parse(body);
          } catch (e) {}
        }
        return body;
      }
      var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
      };
      function errorFunc(evt) {
        clearTimeout(timeoutTimer);
        if (!(evt instanceof Error)) {
          evt = new Error("" + (evt || "Unknown XMLHttpRequest Error"));
        }
        evt.statusCode = 0;
        return callback(evt, failureResponse);
      }
      function loadFunc() {
        if (aborted)
          return;
        var status;
        clearTimeout(timeoutTimer);
        if (options.useXDR && xhr.status === undefined) {
          status = 200;
        } else {
          status = (xhr.status === 1223 ? 204 : xhr.status);
        }
        var response = failureResponse;
        var err = null;
        if (status !== 0) {
          response = {
            body: getBody(),
            statusCode: status,
            method: method,
            headers: {},
            url: uri,
            rawRequest: xhr
          };
          if (xhr.getAllResponseHeaders) {
            response.headers = parseHeaders(xhr.getAllResponseHeaders());
          }
        } else {
          err = new Error("Internal XMLHttpRequest Error");
        }
        return callback(err, response, response.body);
      }
      var xhr = options.xhr || null;
      if (!xhr) {
        if (options.cors || options.useXDR) {
          xhr = new createXHR.XDomainRequest();
        } else {
          xhr = new createXHR.XMLHttpRequest();
        }
      }
      var key;
      var aborted;
      var uri = xhr.url = options.uri || options.url;
      var method = xhr.method = options.method || "GET";
      var body = options.body || options.data || null;
      var headers = xhr.headers = options.headers || {};
      var sync = !!options.sync;
      var isJson = false;
      var timeoutTimer;
      if ("json" in options) {
        isJson = true;
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json");
        if (method !== "GET" && method !== "HEAD") {
          headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json");
          body = JSON.stringify(options.json);
        }
      }
      xhr.onreadystatechange = readystatechange;
      xhr.onload = loadFunc;
      xhr.onerror = errorFunc;
      xhr.onprogress = function() {};
      xhr.ontimeout = errorFunc;
      xhr.open(method, uri, !sync, options.username, options.password);
      if (!sync) {
        xhr.withCredentials = !!options.withCredentials;
      }
      if (!sync && options.timeout > 0) {
        timeoutTimer = setTimeout(function() {
          aborted = true;
          xhr.abort("timeout");
          var e = new Error("XMLHttpRequest timeout");
          e.code = "ETIMEDOUT";
          errorFunc(e);
        }, options.timeout);
      }
      if (xhr.setRequestHeader) {
        for (key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object");
      }
      if ("responseType" in options) {
        xhr.responseType = options.responseType;
      }
      if ("beforeSend" in options && typeof options.beforeSend === "function") {
        options.beforeSend(xhr);
      }
      xhr.send(body);
      return xhr;
    }
    function getXml(xhr) {
      if (xhr.responseType === "document") {
        return xhr.responseXML;
      }
      var firefoxBugTakenEffect = xhr.status === 204 && xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror";
      if (xhr.responseType === "" && !firefoxBugTakenEffect) {
        return xhr.responseXML;
      }
      return null;
    }
    function noop() {}
  })($__require('10'));
  return module.exports;
});

$__System.registerDynamic("12", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('11');
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
(function(window, document, undefined) {
  var L = {version: "1.0.1"};
  function expose() {
    var oldL = window.L;
    L.noConflict = function() {
      window.L = oldL;
      return this;
    };
    window.L = L;
  }
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = L;
  } else if (typeof define === 'function' && define.amd) {
    define("13", [], L);
  }
  if (typeof window !== 'undefined') {
    expose();
  }
  L.Util = {
    extend: function(dest) {
      var i,
          j,
          len,
          src;
      for (j = 1, len = arguments.length; j < len; j++) {
        src = arguments[j];
        for (i in src) {
          dest[i] = src[i];
        }
      }
      return dest;
    },
    create: Object.create || (function() {
      function F() {}
      return function(proto) {
        F.prototype = proto;
        return new F();
      };
    })(),
    bind: function(fn, obj) {
      var slice = Array.prototype.slice;
      if (fn.bind) {
        return fn.bind.apply(fn, slice.call(arguments, 1));
      }
      var args = slice.call(arguments, 2);
      return function() {
        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
      };
    },
    stamp: function(obj) {
      obj._leaflet_id = obj._leaflet_id || ++L.Util.lastId;
      return obj._leaflet_id;
    },
    lastId: 0,
    throttle: function(fn, time, context) {
      var lock,
          args,
          wrapperFn,
          later;
      later = function() {
        lock = false;
        if (args) {
          wrapperFn.apply(context, args);
          args = false;
        }
      };
      wrapperFn = function() {
        if (lock) {
          args = arguments;
        } else {
          fn.apply(context, arguments);
          setTimeout(later, time);
          lock = true;
        }
      };
      return wrapperFn;
    },
    wrapNum: function(x, range, includeMax) {
      var max = range[1],
          min = range[0],
          d = max - min;
      return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
    },
    falseFn: function() {
      return false;
    },
    formatNum: function(num, digits) {
      var pow = Math.pow(10, digits || 5);
      return Math.round(num * pow) / pow;
    },
    trim: function(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    },
    splitWords: function(str) {
      return L.Util.trim(str).split(/\s+/);
    },
    setOptions: function(obj, options) {
      if (!obj.hasOwnProperty('options')) {
        obj.options = obj.options ? L.Util.create(obj.options) : {};
      }
      for (var i in options) {
        obj.options[i] = options[i];
      }
      return obj.options;
    },
    getParamString: function(obj, existingUrl, uppercase) {
      var params = [];
      for (var i in obj) {
        params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
      }
      return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
    },
    template: function(str, data) {
      return str.replace(L.Util.templateRe, function(str, key) {
        var value = data[key];
        if (value === undefined) {
          throw new Error('No value provided for variable ' + str);
        } else if (typeof value === 'function') {
          value = value(data);
        }
        return value;
      });
    },
    templateRe: /\{ *([\w_\-]+) *\}/g,
    isArray: Array.isArray || function(obj) {
      return (Object.prototype.toString.call(obj) === '[object Array]');
    },
    indexOf: function(array, el) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === el) {
          return i;
        }
      }
      return -1;
    },
    emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
  };
  (function() {
    function getPrefixed(name) {
      return window['webkit' + name] || window['moz' + name] || window['ms' + name];
    }
    var lastTime = 0;
    function timeoutDefer(fn) {
      var time = +new Date(),
          timeToCall = Math.max(0, 16 - (time - lastTime));
      lastTime = time + timeToCall;
      return window.setTimeout(fn, timeToCall);
    }
    var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer,
        cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function(id) {
          window.clearTimeout(id);
        };
    L.Util.requestAnimFrame = function(fn, context, immediate) {
      if (immediate && requestFn === timeoutDefer) {
        fn.call(context);
      } else {
        return requestFn.call(window, L.bind(fn, context));
      }
    };
    L.Util.cancelAnimFrame = function(id) {
      if (id) {
        cancelFn.call(window, id);
      }
    };
  })();
  L.extend = L.Util.extend;
  L.bind = L.Util.bind;
  L.stamp = L.Util.stamp;
  L.setOptions = L.Util.setOptions;
  L.Class = function() {};
  L.Class.extend = function(props) {
    var NewClass = function() {
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      }
      this.callInitHooks();
    };
    var parentProto = NewClass.__super__ = this.prototype;
    var proto = L.Util.create(parentProto);
    proto.constructor = NewClass;
    NewClass.prototype = proto;
    for (var i in this) {
      if (this.hasOwnProperty(i) && i !== 'prototype') {
        NewClass[i] = this[i];
      }
    }
    if (props.statics) {
      L.extend(NewClass, props.statics);
      delete props.statics;
    }
    if (props.includes) {
      L.Util.extend.apply(null, [proto].concat(props.includes));
      delete props.includes;
    }
    if (proto.options) {
      props.options = L.Util.extend(L.Util.create(proto.options), props.options);
    }
    L.extend(proto, props);
    proto._initHooks = [];
    proto.callInitHooks = function() {
      if (this._initHooksCalled) {
        return;
      }
      if (parentProto.callInitHooks) {
        parentProto.callInitHooks.call(this);
      }
      this._initHooksCalled = true;
      for (var i = 0,
          len = proto._initHooks.length; i < len; i++) {
        proto._initHooks[i].call(this);
      }
    };
    return NewClass;
  };
  L.Class.include = function(props) {
    L.extend(this.prototype, props);
    return this;
  };
  L.Class.mergeOptions = function(options) {
    L.extend(this.prototype.options, options);
    return this;
  };
  L.Class.addInitHook = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === 'function' ? fn : function() {
      this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];
    this.prototype._initHooks.push(init);
    return this;
  };
  L.Evented = L.Class.extend({
    on: function(types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this._on(type, types[type], fn);
        }
      } else {
        types = L.Util.splitWords(types);
        for (var i = 0,
            len = types.length; i < len; i++) {
          this._on(types[i], fn, context);
        }
      }
      return this;
    },
    off: function(types, fn, context) {
      if (!types) {
        delete this._events;
      } else if (typeof types === 'object') {
        for (var type in types) {
          this._off(type, types[type], fn);
        }
      } else {
        types = L.Util.splitWords(types);
        for (var i = 0,
            len = types.length; i < len; i++) {
          this._off(types[i], fn, context);
        }
      }
      return this;
    },
    _on: function(type, fn, context) {
      this._events = this._events || {};
      var typeListeners = this._events[type];
      if (!typeListeners) {
        typeListeners = [];
        this._events[type] = typeListeners;
      }
      if (context === this) {
        context = undefined;
      }
      var newListener = {
        fn: fn,
        ctx: context
      },
          listeners = typeListeners;
      for (var i = 0,
          len = listeners.length; i < len; i++) {
        if (listeners[i].fn === fn && listeners[i].ctx === context) {
          return;
        }
      }
      listeners.push(newListener);
      typeListeners.count++;
    },
    _off: function(type, fn, context) {
      var listeners,
          i,
          len;
      if (!this._events) {
        return;
      }
      listeners = this._events[type];
      if (!listeners) {
        return;
      }
      if (!fn) {
        for (i = 0, len = listeners.length; i < len; i++) {
          listeners[i].fn = L.Util.falseFn;
        }
        delete this._events[type];
        return;
      }
      if (context === this) {
        context = undefined;
      }
      if (listeners) {
        for (i = 0, len = listeners.length; i < len; i++) {
          var l = listeners[i];
          if (l.ctx !== context) {
            continue;
          }
          if (l.fn === fn) {
            l.fn = L.Util.falseFn;
            if (this._firingCount) {
              this._events[type] = listeners = listeners.slice();
            }
            listeners.splice(i, 1);
            return;
          }
        }
      }
    },
    fire: function(type, data, propagate) {
      if (!this.listens(type, propagate)) {
        return this;
      }
      var event = L.Util.extend({}, data, {
        type: type,
        target: this
      });
      if (this._events) {
        var listeners = this._events[type];
        if (listeners) {
          this._firingCount = (this._firingCount + 1) || 1;
          for (var i = 0,
              len = listeners.length; i < len; i++) {
            var l = listeners[i];
            l.fn.call(l.ctx || this, event);
          }
          this._firingCount--;
        }
      }
      if (propagate) {
        this._propagateEvent(event);
      }
      return this;
    },
    listens: function(type, propagate) {
      var listeners = this._events && this._events[type];
      if (listeners && listeners.length) {
        return true;
      }
      if (propagate) {
        for (var id in this._eventParents) {
          if (this._eventParents[id].listens(type, propagate)) {
            return true;
          }
        }
      }
      return false;
    },
    once: function(types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this.once(type, types[type], fn);
        }
        return this;
      }
      var handler = L.bind(function() {
        this.off(types, fn, context).off(types, handler, context);
      }, this);
      return this.on(types, fn, context).on(types, handler, context);
    },
    addEventParent: function(obj) {
      this._eventParents = this._eventParents || {};
      this._eventParents[L.stamp(obj)] = obj;
      return this;
    },
    removeEventParent: function(obj) {
      if (this._eventParents) {
        delete this._eventParents[L.stamp(obj)];
      }
      return this;
    },
    _propagateEvent: function(e) {
      for (var id in this._eventParents) {
        this._eventParents[id].fire(e.type, L.extend({layer: e.target}, e), true);
      }
    }
  });
  var proto = L.Evented.prototype;
  proto.addEventListener = proto.on;
  proto.removeEventListener = proto.clearAllEventListeners = proto.off;
  proto.addOneTimeEventListener = proto.once;
  proto.fireEvent = proto.fire;
  proto.hasEventListeners = proto.listens;
  L.Mixin = {Events: proto};
  (function() {
    var ua = navigator.userAgent.toLowerCase(),
        doc = document.documentElement,
        ie = 'ActiveXObject' in window,
        webkit = ua.indexOf('webkit') !== -1,
        phantomjs = ua.indexOf('phantom') !== -1,
        android23 = ua.search('android [23]') !== -1,
        chrome = ua.indexOf('chrome') !== -1,
        gecko = ua.indexOf('gecko') !== -1 && !webkit && !window.opera && !ie,
        win = navigator.platform.indexOf('Win') === 0,
        mobile = typeof orientation !== 'undefined' || ua.indexOf('mobile') !== -1,
        msPointer = !window.PointerEvent && window.MSPointerEvent,
        pointer = window.PointerEvent || msPointer,
        ie3d = ie && ('transition' in doc.style),
        webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
        gecko3d = 'MozPerspective' in doc.style,
        opera12 = 'OTransition' in doc.style;
    var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
    L.Browser = {
      ie: ie,
      ielt9: ie && !document.addEventListener,
      edge: 'msLaunchUri' in navigator && !('documentMode' in document),
      webkit: webkit,
      gecko: gecko,
      android: ua.indexOf('android') !== -1,
      android23: android23,
      chrome: chrome,
      safari: !chrome && ua.indexOf('safari') !== -1,
      win: win,
      ie3d: ie3d,
      webkit3d: webkit3d,
      gecko3d: gecko3d,
      opera12: opera12,
      any3d: !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantomjs,
      mobile: mobile,
      mobileWebkit: mobile && webkit,
      mobileWebkit3d: mobile && webkit3d,
      mobileOpera: mobile && window.opera,
      mobileGecko: mobile && gecko,
      touch: !!touch,
      msPointer: !!msPointer,
      pointer: !!pointer,
      retina: (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1
    };
  }());
  L.Point = function(x, y, round) {
    this.x = (round ? Math.round(x) : x);
    this.y = (round ? Math.round(y) : y);
  };
  L.Point.prototype = {
    clone: function() {
      return new L.Point(this.x, this.y);
    },
    add: function(point) {
      return this.clone()._add(L.point(point));
    },
    _add: function(point) {
      this.x += point.x;
      this.y += point.y;
      return this;
    },
    subtract: function(point) {
      return this.clone()._subtract(L.point(point));
    },
    _subtract: function(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    },
    divideBy: function(num) {
      return this.clone()._divideBy(num);
    },
    _divideBy: function(num) {
      this.x /= num;
      this.y /= num;
      return this;
    },
    multiplyBy: function(num) {
      return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function(num) {
      this.x *= num;
      this.y *= num;
      return this;
    },
    scaleBy: function(point) {
      return new L.Point(this.x * point.x, this.y * point.y);
    },
    unscaleBy: function(point) {
      return new L.Point(this.x / point.x, this.y / point.y);
    },
    round: function() {
      return this.clone()._round();
    },
    _round: function() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    floor: function() {
      return this.clone()._floor();
    },
    _floor: function() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    ceil: function() {
      return this.clone()._ceil();
    },
    _ceil: function() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    distanceTo: function(point) {
      point = L.point(point);
      var x = point.x - this.x,
          y = point.y - this.y;
      return Math.sqrt(x * x + y * y);
    },
    equals: function(point) {
      point = L.point(point);
      return point.x === this.x && point.y === this.y;
    },
    contains: function(point) {
      point = L.point(point);
      return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    toString: function() {
      return 'Point(' + L.Util.formatNum(this.x) + ', ' + L.Util.formatNum(this.y) + ')';
    }
  };
  L.point = function(x, y, round) {
    if (x instanceof L.Point) {
      return x;
    }
    if (L.Util.isArray(x)) {
      return new L.Point(x[0], x[1]);
    }
    if (x === undefined || x === null) {
      return x;
    }
    if (typeof x === 'object' && 'x' in x && 'y' in x) {
      return new L.Point(x.x, x.y);
    }
    return new L.Point(x, y, round);
  };
  L.Bounds = function(a, b) {
    if (!a) {
      return;
    }
    var points = b ? [a, b] : a;
    for (var i = 0,
        len = points.length; i < len; i++) {
      this.extend(points[i]);
    }
  };
  L.Bounds.prototype = {
    extend: function(point) {
      point = L.point(point);
      if (!this.min && !this.max) {
        this.min = point.clone();
        this.max = point.clone();
      } else {
        this.min.x = Math.min(point.x, this.min.x);
        this.max.x = Math.max(point.x, this.max.x);
        this.min.y = Math.min(point.y, this.min.y);
        this.max.y = Math.max(point.y, this.max.y);
      }
      return this;
    },
    getCenter: function(round) {
      return new L.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    getBottomLeft: function() {
      return new L.Point(this.min.x, this.max.y);
    },
    getTopRight: function() {
      return new L.Point(this.max.x, this.min.y);
    },
    getSize: function() {
      return this.max.subtract(this.min);
    },
    contains: function(obj) {
      var min,
          max;
      if (typeof obj[0] === 'number' || obj instanceof L.Point) {
        obj = L.point(obj);
      } else {
        obj = L.bounds(obj);
      }
      if (obj instanceof L.Bounds) {
        min = obj.min;
        max = obj.max;
      } else {
        min = max = obj;
      }
      return (min.x >= this.min.x) && (max.x <= this.max.x) && (min.y >= this.min.y) && (max.y <= this.max.y);
    },
    intersects: function(bounds) {
      bounds = L.bounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
          yIntersects = (max2.y >= min.y) && (min2.y <= max.y);
      return xIntersects && yIntersects;
    },
    overlaps: function(bounds) {
      bounds = L.bounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xOverlaps = (max2.x > min.x) && (min2.x < max.x),
          yOverlaps = (max2.y > min.y) && (min2.y < max.y);
      return xOverlaps && yOverlaps;
    },
    isValid: function() {
      return !!(this.min && this.max);
    }
  };
  L.bounds = function(a, b) {
    if (!a || a instanceof L.Bounds) {
      return a;
    }
    return new L.Bounds(a, b);
  };
  L.Transformation = function(a, b, c, d) {
    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
  };
  L.Transformation.prototype = {
    transform: function(point, scale) {
      return this._transform(point.clone(), scale);
    },
    _transform: function(point, scale) {
      scale = scale || 1;
      point.x = scale * (this._a * point.x + this._b);
      point.y = scale * (this._c * point.y + this._d);
      return point;
    },
    untransform: function(point, scale) {
      scale = scale || 1;
      return new L.Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
  };
  L.DomUtil = {
    get: function(id) {
      return typeof id === 'string' ? document.getElementById(id) : id;
    },
    getStyle: function(el, style) {
      var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);
      if ((!value || value === 'auto') && document.defaultView) {
        var css = document.defaultView.getComputedStyle(el, null);
        value = css ? css[style] : null;
      }
      return value === 'auto' ? null : value;
    },
    create: function(tagName, className, container) {
      var el = document.createElement(tagName);
      el.className = className || '';
      if (container) {
        container.appendChild(el);
      }
      return el;
    },
    remove: function(el) {
      var parent = el.parentNode;
      if (parent) {
        parent.removeChild(el);
      }
    },
    empty: function(el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    },
    toFront: function(el) {
      el.parentNode.appendChild(el);
    },
    toBack: function(el) {
      var parent = el.parentNode;
      parent.insertBefore(el, parent.firstChild);
    },
    hasClass: function(el, name) {
      if (el.classList !== undefined) {
        return el.classList.contains(name);
      }
      var className = L.DomUtil.getClass(el);
      return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
    },
    addClass: function(el, name) {
      if (el.classList !== undefined) {
        var classes = L.Util.splitWords(name);
        for (var i = 0,
            len = classes.length; i < len; i++) {
          el.classList.add(classes[i]);
        }
      } else if (!L.DomUtil.hasClass(el, name)) {
        var className = L.DomUtil.getClass(el);
        L.DomUtil.setClass(el, (className ? className + ' ' : '') + name);
      }
    },
    removeClass: function(el, name) {
      if (el.classList !== undefined) {
        el.classList.remove(name);
      } else {
        L.DomUtil.setClass(el, L.Util.trim((' ' + L.DomUtil.getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
      }
    },
    setClass: function(el, name) {
      if (el.className.baseVal === undefined) {
        el.className = name;
      } else {
        el.className.baseVal = name;
      }
    },
    getClass: function(el) {
      return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    },
    setOpacity: function(el, value) {
      if ('opacity' in el.style) {
        el.style.opacity = value;
      } else if ('filter' in el.style) {
        L.DomUtil._setOpacityIE(el, value);
      }
    },
    _setOpacityIE: function(el, value) {
      var filter = false,
          filterName = 'DXImageTransform.Microsoft.Alpha';
      try {
        filter = el.filters.item(filterName);
      } catch (e) {
        if (value === 1) {
          return;
        }
      }
      value = Math.round(value * 100);
      if (filter) {
        filter.Enabled = (value !== 100);
        filter.Opacity = value;
      } else {
        el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
      }
    },
    testProp: function(props) {
      var style = document.documentElement.style;
      for (var i = 0; i < props.length; i++) {
        if (props[i] in style) {
          return props[i];
        }
      }
      return false;
    },
    setTransform: function(el, offset, scale) {
      var pos = offset || new L.Point(0, 0);
      el.style[L.DomUtil.TRANSFORM] = (L.Browser.ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
    },
    setPosition: function(el, point) {
      el._leaflet_pos = point;
      if (L.Browser.any3d) {
        L.DomUtil.setTransform(el, point);
      } else {
        el.style.left = point.x + 'px';
        el.style.top = point.y + 'px';
      }
    },
    getPosition: function(el) {
      return el._leaflet_pos || new L.Point(0, 0);
    }
  };
  (function() {
    L.DomUtil.TRANSFORM = L.DomUtil.testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);
    var transition = L.DomUtil.TRANSITION = L.DomUtil.testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
    L.DomUtil.TRANSITION_END = transition === 'webkitTransition' || transition === 'OTransition' ? transition + 'End' : 'transitionend';
    if ('onselectstart' in document) {
      L.DomUtil.disableTextSelection = function() {
        L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
      };
      L.DomUtil.enableTextSelection = function() {
        L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
      };
    } else {
      var userSelectProperty = L.DomUtil.testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
      L.DomUtil.disableTextSelection = function() {
        if (userSelectProperty) {
          var style = document.documentElement.style;
          this._userSelect = style[userSelectProperty];
          style[userSelectProperty] = 'none';
        }
      };
      L.DomUtil.enableTextSelection = function() {
        if (userSelectProperty) {
          document.documentElement.style[userSelectProperty] = this._userSelect;
          delete this._userSelect;
        }
      };
    }
    L.DomUtil.disableImageDrag = function() {
      L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
    };
    L.DomUtil.enableImageDrag = function() {
      L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
    };
    L.DomUtil.preventOutline = function(element) {
      while (element.tabIndex === -1) {
        element = element.parentNode;
      }
      if (!element || !element.style) {
        return;
      }
      L.DomUtil.restoreOutline();
      this._outlineElement = element;
      this._outlineStyle = element.style.outline;
      element.style.outline = 'none';
      L.DomEvent.on(window, 'keydown', L.DomUtil.restoreOutline, this);
    };
    L.DomUtil.restoreOutline = function() {
      if (!this._outlineElement) {
        return;
      }
      this._outlineElement.style.outline = this._outlineStyle;
      delete this._outlineElement;
      delete this._outlineStyle;
      L.DomEvent.off(window, 'keydown', L.DomUtil.restoreOutline, this);
    };
  })();
  L.LatLng = function(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    }
    this.lat = +lat;
    this.lng = +lng;
    if (alt !== undefined) {
      this.alt = +alt;
    }
  };
  L.LatLng.prototype = {
    equals: function(obj, maxMargin) {
      if (!obj) {
        return false;
      }
      obj = L.latLng(obj);
      var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
      return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
    },
    toString: function(precision) {
      return 'LatLng(' + L.Util.formatNum(this.lat, precision) + ', ' + L.Util.formatNum(this.lng, precision) + ')';
    },
    distanceTo: function(other) {
      return L.CRS.Earth.distance(this, L.latLng(other));
    },
    wrap: function() {
      return L.CRS.Earth.wrapLatLng(this);
    },
    toBounds: function(sizeInMeters) {
      var latAccuracy = 180 * sizeInMeters / 40075017,
          lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);
      return L.latLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
    },
    clone: function() {
      return new L.LatLng(this.lat, this.lng, this.alt);
    }
  };
  L.latLng = function(a, b, c) {
    if (a instanceof L.LatLng) {
      return a;
    }
    if (L.Util.isArray(a) && typeof a[0] !== 'object') {
      if (a.length === 3) {
        return new L.LatLng(a[0], a[1], a[2]);
      }
      if (a.length === 2) {
        return new L.LatLng(a[0], a[1]);
      }
      return null;
    }
    if (a === undefined || a === null) {
      return a;
    }
    if (typeof a === 'object' && 'lat' in a) {
      return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
    }
    if (b === undefined) {
      return null;
    }
    return new L.LatLng(a, b, c);
  };
  L.LatLngBounds = function(southWest, northEast) {
    if (!southWest) {
      return;
    }
    var latlngs = northEast ? [southWest, northEast] : southWest;
    for (var i = 0,
        len = latlngs.length; i < len; i++) {
      this.extend(latlngs[i]);
    }
  };
  L.LatLngBounds.prototype = {
    extend: function(obj) {
      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;
      if (obj instanceof L.LatLng) {
        sw2 = obj;
        ne2 = obj;
      } else if (obj instanceof L.LatLngBounds) {
        sw2 = obj._southWest;
        ne2 = obj._northEast;
        if (!sw2 || !ne2) {
          return this;
        }
      } else {
        return obj ? this.extend(L.latLng(obj) || L.latLngBounds(obj)) : this;
      }
      if (!sw && !ne) {
        this._southWest = new L.LatLng(sw2.lat, sw2.lng);
        this._northEast = new L.LatLng(ne2.lat, ne2.lng);
      } else {
        sw.lat = Math.min(sw2.lat, sw.lat);
        sw.lng = Math.min(sw2.lng, sw.lng);
        ne.lat = Math.max(ne2.lat, ne.lat);
        ne.lng = Math.max(ne2.lng, ne.lng);
      }
      return this;
    },
    pad: function(bufferRatio) {
      var sw = this._southWest,
          ne = this._northEast,
          heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
          widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
      return new L.LatLngBounds(new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    getCenter: function() {
      return new L.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function() {
      return this._southWest;
    },
    getNorthEast: function() {
      return this._northEast;
    },
    getNorthWest: function() {
      return new L.LatLng(this.getNorth(), this.getWest());
    },
    getSouthEast: function() {
      return new L.LatLng(this.getSouth(), this.getEast());
    },
    getWest: function() {
      return this._southWest.lng;
    },
    getSouth: function() {
      return this._southWest.lat;
    },
    getEast: function() {
      return this._northEast.lng;
    },
    getNorth: function() {
      return this._northEast.lat;
    },
    contains: function(obj) {
      if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
        obj = L.latLng(obj);
      } else {
        obj = L.latLngBounds(obj);
      }
      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;
      if (obj instanceof L.LatLngBounds) {
        sw2 = obj.getSouthWest();
        ne2 = obj.getNorthEast();
      } else {
        sw2 = ne2 = obj;
      }
      return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) && (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
    },
    intersects: function(bounds) {
      bounds = L.latLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
          lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);
      return latIntersects && lngIntersects;
    },
    overlaps: function(bounds) {
      bounds = L.latLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
          lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);
      return latOverlaps && lngOverlaps;
    },
    toBBoxString: function() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
    },
    equals: function(bounds) {
      if (!bounds) {
        return false;
      }
      bounds = L.latLngBounds(bounds);
      return this._southWest.equals(bounds.getSouthWest()) && this._northEast.equals(bounds.getNorthEast());
    },
    isValid: function() {
      return !!(this._southWest && this._northEast);
    }
  };
  L.latLngBounds = function(a, b) {
    if (a instanceof L.LatLngBounds) {
      return a;
    }
    return new L.LatLngBounds(a, b);
  };
  L.Projection = {};
  L.Projection.LonLat = {
    project: function(latlng) {
      return new L.Point(latlng.lng, latlng.lat);
    },
    unproject: function(point) {
      return new L.LatLng(point.y, point.x);
    },
    bounds: L.bounds([-180, -90], [180, 90])
  };
  L.Projection.SphericalMercator = {
    R: 6378137,
    MAX_LATITUDE: 85.0511287798,
    project: function(latlng) {
      var d = Math.PI / 180,
          max = this.MAX_LATITUDE,
          lat = Math.max(Math.min(max, latlng.lat), -max),
          sin = Math.sin(lat * d);
      return new L.Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
    },
    unproject: function(point) {
      var d = 180 / Math.PI;
      return new L.LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d, point.x * d / this.R);
    },
    bounds: (function() {
      var d = 6378137 * Math.PI;
      return L.bounds([-d, -d], [d, d]);
    })()
  };
  L.CRS = {
    latLngToPoint: function(latlng, zoom) {
      var projectedPoint = this.projection.project(latlng),
          scale = this.scale(zoom);
      return this.transformation._transform(projectedPoint, scale);
    },
    pointToLatLng: function(point, zoom) {
      var scale = this.scale(zoom),
          untransformedPoint = this.transformation.untransform(point, scale);
      return this.projection.unproject(untransformedPoint);
    },
    project: function(latlng) {
      return this.projection.project(latlng);
    },
    unproject: function(point) {
      return this.projection.unproject(point);
    },
    scale: function(zoom) {
      return 256 * Math.pow(2, zoom);
    },
    zoom: function(scale) {
      return Math.log(scale / 256) / Math.LN2;
    },
    getProjectedBounds: function(zoom) {
      if (this.infinite) {
        return null;
      }
      var b = this.projection.bounds,
          s = this.scale(zoom),
          min = this.transformation.transform(b.min, s),
          max = this.transformation.transform(b.max, s);
      return L.bounds(min, max);
    },
    infinite: false,
    wrapLatLng: function(latlng) {
      var lng = this.wrapLng ? L.Util.wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
          lat = this.wrapLat ? L.Util.wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
          alt = latlng.alt;
      return L.latLng(lat, lng, alt);
    }
  };
  L.CRS.Simple = L.extend({}, L.CRS, {
    projection: L.Projection.LonLat,
    transformation: new L.Transformation(1, 0, -1, 0),
    scale: function(zoom) {
      return Math.pow(2, zoom);
    },
    zoom: function(scale) {
      return Math.log(scale) / Math.LN2;
    },
    distance: function(latlng1, latlng2) {
      var dx = latlng2.lng - latlng1.lng,
          dy = latlng2.lat - latlng1.lat;
      return Math.sqrt(dx * dx + dy * dy);
    },
    infinite: true
  });
  L.CRS.Earth = L.extend({}, L.CRS, {
    wrapLng: [-180, 180],
    R: 6371000,
    distance: function(latlng1, latlng2) {
      var rad = Math.PI / 180,
          lat1 = latlng1.lat * rad,
          lat2 = latlng2.lat * rad,
          a = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);
      return this.R * Math.acos(Math.min(a, 1));
    }
  });
  L.CRS.EPSG3857 = L.extend({}, L.CRS.Earth, {
    code: 'EPSG:3857',
    projection: L.Projection.SphericalMercator,
    transformation: (function() {
      var scale = 0.5 / (Math.PI * L.Projection.SphericalMercator.R);
      return new L.Transformation(scale, 0.5, -scale, 0.5);
    }())
  });
  L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {code: 'EPSG:900913'});
  L.CRS.EPSG4326 = L.extend({}, L.CRS.Earth, {
    code: 'EPSG:4326',
    projection: L.Projection.LonLat,
    transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5)
  });
  L.Map = L.Evented.extend({
    options: {
      crs: L.CRS.EPSG3857,
      center: undefined,
      zoom: undefined,
      minZoom: undefined,
      maxZoom: undefined,
      layers: [],
      maxBounds: undefined,
      renderer: undefined,
      fadeAnimation: true,
      markerZoomAnimation: true,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: true
    },
    initialize: function(id, options) {
      options = L.setOptions(this, options);
      this._initContainer(id);
      this._initLayout();
      this._onResize = L.bind(this._onResize, this);
      this._initEvents();
      if (options.maxBounds) {
        this.setMaxBounds(options.maxBounds);
      }
      if (options.zoom !== undefined) {
        this._zoom = this._limitZoom(options.zoom);
      }
      if (options.center && options.zoom !== undefined) {
        this.setView(L.latLng(options.center), options.zoom, {reset: true});
      }
      this._handlers = [];
      this._layers = {};
      this._zoomBoundLayers = {};
      this._sizeChanged = true;
      this.callInitHooks();
      this._addLayers(this.options.layers);
    },
    setView: function(center, zoom) {
      zoom = zoom === undefined ? this.getZoom() : zoom;
      this._resetView(L.latLng(center), zoom);
      return this;
    },
    setZoom: function(zoom, options) {
      if (!this._loaded) {
        this._zoom = zoom;
        return this;
      }
      return this.setView(this.getCenter(), zoom, {zoom: options});
    },
    zoomIn: function(delta, options) {
      delta = delta || (L.Browser.any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom + delta, options);
    },
    zoomOut: function(delta, options) {
      delta = delta || (L.Browser.any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom - delta, options);
    },
    setZoomAround: function(latlng, zoom, options) {
      var scale = this.getZoomScale(zoom),
          viewHalf = this.getSize().divideBy(2),
          containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),
          centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
          newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
      return this.setView(newCenter, zoom, {zoom: options});
    },
    _getBoundsCenterZoom: function(bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);
      var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
          paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),
          zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
      zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;
      var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
          swPoint = this.project(bounds.getSouthWest(), zoom),
          nePoint = this.project(bounds.getNorthEast(), zoom),
          center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      return {
        center: center,
        zoom: zoom
      };
    },
    fitBounds: function(bounds, options) {
      bounds = L.latLngBounds(bounds);
      if (!bounds.isValid()) {
        throw new Error('Bounds are not valid.');
      }
      var target = this._getBoundsCenterZoom(bounds, options);
      return this.setView(target.center, target.zoom, options);
    },
    fitWorld: function(options) {
      return this.fitBounds([[-90, -180], [90, 180]], options);
    },
    panTo: function(center, options) {
      return this.setView(center, this._zoom, {pan: options});
    },
    panBy: function(offset) {
      this.fire('movestart');
      this._rawPanBy(L.point(offset));
      this.fire('move');
      return this.fire('moveend');
    },
    setMaxBounds: function(bounds) {
      bounds = L.latLngBounds(bounds);
      if (!bounds.isValid()) {
        this.options.maxBounds = null;
        return this.off('moveend', this._panInsideMaxBounds);
      } else if (this.options.maxBounds) {
        this.off('moveend', this._panInsideMaxBounds);
      }
      this.options.maxBounds = bounds;
      if (this._loaded) {
        this._panInsideMaxBounds();
      }
      return this.on('moveend', this._panInsideMaxBounds);
    },
    setMinZoom: function(zoom) {
      this.options.minZoom = zoom;
      if (this._loaded && this.getZoom() < this.options.minZoom) {
        return this.setZoom(zoom);
      }
      return this;
    },
    setMaxZoom: function(zoom) {
      this.options.maxZoom = zoom;
      if (this._loaded && (this.getZoom() > this.options.maxZoom)) {
        return this.setZoom(zoom);
      }
      return this;
    },
    panInsideBounds: function(bounds, options) {
      this._enforcingBounds = true;
      var center = this.getCenter(),
          newCenter = this._limitCenter(center, this._zoom, L.latLngBounds(bounds));
      if (!center.equals(newCenter)) {
        this.panTo(newCenter, options);
      }
      this._enforcingBounds = false;
      return this;
    },
    invalidateSize: function(options) {
      if (!this._loaded) {
        return this;
      }
      options = L.extend({
        animate: false,
        pan: true
      }, options === true ? {animate: true} : options);
      var oldSize = this.getSize();
      this._sizeChanged = true;
      this._lastCenter = null;
      var newSize = this.getSize(),
          oldCenter = oldSize.divideBy(2).round(),
          newCenter = newSize.divideBy(2).round(),
          offset = oldCenter.subtract(newCenter);
      if (!offset.x && !offset.y) {
        return this;
      }
      if (options.animate && options.pan) {
        this.panBy(offset);
      } else {
        if (options.pan) {
          this._rawPanBy(offset);
        }
        this.fire('move');
        if (options.debounceMoveend) {
          clearTimeout(this._sizeTimer);
          this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
        } else {
          this.fire('moveend');
        }
      }
      return this.fire('resize', {
        oldSize: oldSize,
        newSize: newSize
      });
    },
    stop: function() {
      this.setZoom(this._limitZoom(this._zoom));
      if (!this.options.zoomSnap) {
        this.fire('viewreset');
      }
      return this._stop();
    },
    addHandler: function(name, HandlerClass) {
      if (!HandlerClass) {
        return this;
      }
      var handler = this[name] = new HandlerClass(this);
      this._handlers.push(handler);
      if (this.options[name]) {
        handler.enable();
      }
      return this;
    },
    remove: function() {
      this._initEvents(true);
      if (this._containerId !== this._container._leaflet_id) {
        throw new Error('Map container is being reused by another instance');
      }
      try {
        delete this._container._leaflet_id;
        delete this._containerId;
      } catch (e) {
        this._container._leaflet_id = undefined;
        this._containerId = undefined;
      }
      L.DomUtil.remove(this._mapPane);
      if (this._clearControlPos) {
        this._clearControlPos();
      }
      this._clearHandlers();
      if (this._loaded) {
        this.fire('unload');
      }
      for (var i in this._layers) {
        this._layers[i].remove();
      }
      return this;
    },
    createPane: function(name, container) {
      var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
          pane = L.DomUtil.create('div', className, container || this._mapPane);
      if (name) {
        this._panes[name] = pane;
      }
      return pane;
    },
    getCenter: function() {
      this._checkIfLoaded();
      if (this._lastCenter && !this._moved()) {
        return this._lastCenter;
      }
      return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function() {
      return this._zoom;
    },
    getBounds: function() {
      var bounds = this.getPixelBounds(),
          sw = this.unproject(bounds.getBottomLeft()),
          ne = this.unproject(bounds.getTopRight());
      return new L.LatLngBounds(sw, ne);
    },
    getMinZoom: function() {
      return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function() {
      return this.options.maxZoom === undefined ? (this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) : this.options.maxZoom;
    },
    getBoundsZoom: function(bounds, inside, padding) {
      bounds = L.latLngBounds(bounds);
      padding = L.point(padding || [0, 0]);
      var zoom = this.getZoom() || 0,
          min = this.getMinZoom(),
          max = this.getMaxZoom(),
          nw = bounds.getNorthWest(),
          se = bounds.getSouthEast(),
          size = this.getSize().subtract(padding),
          boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)),
          snap = L.Browser.any3d ? this.options.zoomSnap : 1;
      var scale = Math.min(size.x / boundsSize.x, size.y / boundsSize.y);
      zoom = this.getScaleZoom(scale, zoom);
      if (snap) {
        zoom = Math.round(zoom / (snap / 100)) * (snap / 100);
        zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
      }
      return Math.max(min, Math.min(max, zoom));
    },
    getSize: function() {
      if (!this._size || this._sizeChanged) {
        this._size = new L.Point(this._container.clientWidth, this._container.clientHeight);
        this._sizeChanged = false;
      }
      return this._size.clone();
    },
    getPixelBounds: function(center, zoom) {
      var topLeftPoint = this._getTopLeftPoint(center, zoom);
      return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    getPixelOrigin: function() {
      this._checkIfLoaded();
      return this._pixelOrigin;
    },
    getPixelWorldBounds: function(zoom) {
      return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
    },
    getPane: function(pane) {
      return typeof pane === 'string' ? this._panes[pane] : pane;
    },
    getPanes: function() {
      return this._panes;
    },
    getContainer: function() {
      return this._container;
    },
    getZoomScale: function(toZoom, fromZoom) {
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      return crs.scale(toZoom) / crs.scale(fromZoom);
    },
    getScaleZoom: function(scale, fromZoom) {
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      var zoom = crs.zoom(scale * crs.scale(fromZoom));
      return isNaN(zoom) ? Infinity : zoom;
    },
    project: function(latlng, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
    },
    unproject: function(point, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.pointToLatLng(L.point(point), zoom);
    },
    layerPointToLatLng: function(point) {
      var projectedPoint = L.point(point).add(this.getPixelOrigin());
      return this.unproject(projectedPoint);
    },
    latLngToLayerPoint: function(latlng) {
      var projectedPoint = this.project(L.latLng(latlng))._round();
      return projectedPoint._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function(latlng) {
      return this.options.crs.wrapLatLng(L.latLng(latlng));
    },
    distance: function(latlng1, latlng2) {
      return this.options.crs.distance(L.latLng(latlng1), L.latLng(latlng2));
    },
    containerPointToLayerPoint: function(point) {
      return L.point(point).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function(point) {
      return L.point(point).add(this._getMapPanePos());
    },
    containerPointToLatLng: function(point) {
      var layerPoint = this.containerPointToLayerPoint(L.point(point));
      return this.layerPointToLatLng(layerPoint);
    },
    latLngToContainerPoint: function(latlng) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
    },
    mouseEventToContainerPoint: function(e) {
      return L.DomEvent.getMousePosition(e, this._container);
    },
    mouseEventToLayerPoint: function(e) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    mouseEventToLatLng: function(e) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    _initContainer: function(id) {
      var container = this._container = L.DomUtil.get(id);
      if (!container) {
        throw new Error('Map container not found.');
      } else if (container._leaflet_id) {
        throw new Error('Map container is already initialized.');
      }
      L.DomEvent.addListener(container, 'scroll', this._onScroll, this);
      this._containerId = L.Util.stamp(container);
    },
    _initLayout: function() {
      var container = this._container;
      this._fadeAnimated = this.options.fadeAnimation && L.Browser.any3d;
      L.DomUtil.addClass(container, 'leaflet-container' + (L.Browser.touch ? ' leaflet-touch' : '') + (L.Browser.retina ? ' leaflet-retina' : '') + (L.Browser.ielt9 ? ' leaflet-oldie' : '') + (L.Browser.safari ? ' leaflet-safari' : '') + (this._fadeAnimated ? ' leaflet-fade-anim' : ''));
      var position = L.DomUtil.getStyle(container, 'position');
      if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        container.style.position = 'relative';
      }
      this._initPanes();
      if (this._initControlPos) {
        this._initControlPos();
      }
    },
    _initPanes: function() {
      var panes = this._panes = {};
      this._paneRenderers = {};
      this._mapPane = this.createPane('mapPane', this._container);
      L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
      this.createPane('tilePane');
      this.createPane('shadowPane');
      this.createPane('overlayPane');
      this.createPane('markerPane');
      this.createPane('tooltipPane');
      this.createPane('popupPane');
      if (!this.options.markerZoomAnimation) {
        L.DomUtil.addClass(panes.markerPane, 'leaflet-zoom-hide');
        L.DomUtil.addClass(panes.shadowPane, 'leaflet-zoom-hide');
      }
    },
    _resetView: function(center, zoom) {
      L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
      var loading = !this._loaded;
      this._loaded = true;
      zoom = this._limitZoom(zoom);
      this.fire('viewprereset');
      var zoomChanged = this._zoom !== zoom;
      this._moveStart(zoomChanged)._move(center, zoom)._moveEnd(zoomChanged);
      this.fire('viewreset');
      if (loading) {
        this.fire('load');
      }
    },
    _moveStart: function(zoomChanged) {
      if (zoomChanged) {
        this.fire('zoomstart');
      }
      return this.fire('movestart');
    },
    _move: function(center, zoom, data) {
      if (zoom === undefined) {
        zoom = this._zoom;
      }
      var zoomChanged = this._zoom !== zoom;
      this._zoom = zoom;
      this._lastCenter = center;
      this._pixelOrigin = this._getNewPixelOrigin(center);
      if (zoomChanged || (data && data.pinch)) {
        this.fire('zoom', data);
      }
      return this.fire('move', data);
    },
    _moveEnd: function(zoomChanged) {
      if (zoomChanged) {
        this.fire('zoomend');
      }
      return this.fire('moveend');
    },
    _stop: function() {
      L.Util.cancelAnimFrame(this._flyToFrame);
      if (this._panAnim) {
        this._panAnim.stop();
      }
      return this;
    },
    _rawPanBy: function(offset) {
      L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function() {
      if (!this._enforcingBounds) {
        this.panInsideBounds(this.options.maxBounds);
      }
    },
    _checkIfLoaded: function() {
      if (!this._loaded) {
        throw new Error('Set map center and zoom first.');
      }
    },
    _initEvents: function(remove) {
      if (!L.DomEvent) {
        return;
      }
      this._targets = {};
      this._targets[L.stamp(this._container)] = this;
      var onOff = remove ? 'off' : 'on';
      L.DomEvent[onOff](this._container, 'click dblclick mousedown mouseup ' + 'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);
      if (this.options.trackResize) {
        L.DomEvent[onOff](window, 'resize', this._onResize, this);
      }
      if (L.Browser.any3d && this.options.transform3DLimit) {
        this[onOff]('moveend', this._onMoveEnd);
      }
    },
    _onResize: function() {
      L.Util.cancelAnimFrame(this._resizeRequest);
      this._resizeRequest = L.Util.requestAnimFrame(function() {
        this.invalidateSize({debounceMoveend: true});
      }, this);
    },
    _onScroll: function() {
      this._container.scrollTop = 0;
      this._container.scrollLeft = 0;
    },
    _onMoveEnd: function() {
      var pos = this._getMapPanePos();
      if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
        this._resetView(this.getCenter(), this.getZoom());
      }
    },
    _findEventTargets: function(e, type) {
      var targets = [],
          target,
          isHover = type === 'mouseout' || type === 'mouseover',
          src = e.target || e.srcElement,
          dragging = false;
      while (src) {
        target = this._targets[L.stamp(src)];
        if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
          dragging = true;
          break;
        }
        if (target && target.listens(type, true)) {
          if (isHover && !L.DomEvent._isExternalTarget(src, e)) {
            break;
          }
          targets.push(target);
          if (isHover) {
            break;
          }
        }
        if (src === this._container) {
          break;
        }
        src = src.parentNode;
      }
      if (!targets.length && !dragging && !isHover && L.DomEvent._isExternalTarget(src, e)) {
        targets = [this];
      }
      return targets;
    },
    _handleDOMEvent: function(e) {
      if (!this._loaded || L.DomEvent._skipped(e)) {
        return;
      }
      var type = e.type === 'keypress' && e.keyCode === 13 ? 'click' : e.type;
      if (type === 'mousedown') {
        L.DomUtil.preventOutline(e.target || e.srcElement);
      }
      this._fireDOMEvent(e, type);
    },
    _fireDOMEvent: function(e, type, targets) {
      if (e.type === 'click') {
        var synth = L.Util.extend({}, e);
        synth.type = 'preclick';
        this._fireDOMEvent(synth, synth.type, targets);
      }
      if (e._stopped) {
        return;
      }
      targets = (targets || []).concat(this._findEventTargets(e, type));
      if (!targets.length) {
        return;
      }
      var target = targets[0];
      if (type === 'contextmenu' && target.listens(type, true)) {
        L.DomEvent.preventDefault(e);
      }
      var data = {originalEvent: e};
      if (e.type !== 'keypress') {
        var isMarker = target instanceof L.Marker;
        data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
        data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
        data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
      }
      for (var i = 0; i < targets.length; i++) {
        targets[i].fire(type, data, true);
        if (data.originalEvent._stopped || (targets[i].options.nonBubblingEvents && L.Util.indexOf(targets[i].options.nonBubblingEvents, type) !== -1)) {
          return;
        }
      }
    },
    _draggableMoved: function(obj) {
      obj = obj.dragging && obj.dragging.enabled() ? obj : this;
      return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
    },
    _clearHandlers: function() {
      for (var i = 0,
          len = this._handlers.length; i < len; i++) {
        this._handlers[i].disable();
      }
    },
    whenReady: function(callback, context) {
      if (this._loaded) {
        callback.call(context || this, {target: this});
      } else {
        this.on('load', callback, context);
      }
      return this;
    },
    _getMapPanePos: function() {
      return L.DomUtil.getPosition(this._mapPane) || new L.Point(0, 0);
    },
    _moved: function() {
      var pos = this._getMapPanePos();
      return pos && !pos.equals([0, 0]);
    },
    _getTopLeftPoint: function(center, zoom) {
      var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
      return pixelOrigin.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function(center, zoom) {
      var viewHalf = this.getSize()._divideBy(2);
      return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function(latlng, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);
      return this.project(latlng, zoom)._subtract(topLeft);
    },
    _getCenterLayerPoint: function() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function(latlng) {
      return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function(center, zoom, bounds) {
      if (!bounds) {
        return center;
      }
      var centerPoint = this.project(center, zoom),
          viewHalf = this.getSize().divideBy(2),
          viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
          offset = this._getBoundsOffset(viewBounds, bounds, zoom);
      if (offset.round().equals([0, 0])) {
        return center;
      }
      return this.unproject(centerPoint.add(offset), zoom);
    },
    _limitOffset: function(offset, bounds) {
      if (!bounds) {
        return offset;
      }
      var viewBounds = this.getPixelBounds(),
          newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
      return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    _getBoundsOffset: function(pxBounds, maxBounds, zoom) {
      var projectedMaxBounds = L.bounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)),
          minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
          maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),
          dx = this._rebound(minOffset.x, -maxOffset.x),
          dy = this._rebound(minOffset.y, -maxOffset.y);
      return new L.Point(dx, dy);
    },
    _rebound: function(left, right) {
      return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function(zoom) {
      var min = this.getMinZoom(),
          max = this.getMaxZoom(),
          snap = L.Browser.any3d ? this.options.zoomSnap : 1;
      if (snap) {
        zoom = Math.round(zoom / snap) * snap;
      }
      return Math.max(min, Math.min(max, zoom));
    }
  });
  L.map = function(id, options) {
    return new L.Map(id, options);
  };
  L.Layer = L.Evented.extend({
    options: {
      pane: 'overlayPane',
      nonBubblingEvents: []
    },
    addTo: function(map) {
      map.addLayer(this);
      return this;
    },
    remove: function() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function(obj) {
      if (obj) {
        obj.removeLayer(this);
      }
      return this;
    },
    getPane: function(name) {
      return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
    },
    addInteractiveTarget: function(targetEl) {
      this._map._targets[L.stamp(targetEl)] = this;
      return this;
    },
    removeInteractiveTarget: function(targetEl) {
      delete this._map._targets[L.stamp(targetEl)];
      return this;
    },
    _layerAdd: function(e) {
      var map = e.target;
      if (!map.hasLayer(this)) {
        return;
      }
      this._map = map;
      this._zoomAnimated = map._zoomAnimated;
      if (this.getEvents) {
        var events = this.getEvents();
        map.on(events, this);
        this.once('remove', function() {
          map.off(events, this);
        }, this);
      }
      this.onAdd(map);
      if (this.getAttribution && this._map.attributionControl) {
        this._map.attributionControl.addAttribution(this.getAttribution());
      }
      this.fire('add');
      map.fire('layeradd', {layer: this});
    }
  });
  L.Map.include({
    addLayer: function(layer) {
      var id = L.stamp(layer);
      if (this._layers[id]) {
        return this;
      }
      this._layers[id] = layer;
      layer._mapToAdd = this;
      if (layer.beforeAdd) {
        layer.beforeAdd(this);
      }
      this.whenReady(layer._layerAdd, layer);
      return this;
    },
    removeLayer: function(layer) {
      var id = L.stamp(layer);
      if (!this._layers[id]) {
        return this;
      }
      if (this._loaded) {
        layer.onRemove(this);
      }
      if (layer.getAttribution && this.attributionControl) {
        this.attributionControl.removeAttribution(layer.getAttribution());
      }
      delete this._layers[id];
      if (this._loaded) {
        this.fire('layerremove', {layer: layer});
        layer.fire('remove');
      }
      layer._map = layer._mapToAdd = null;
      return this;
    },
    hasLayer: function(layer) {
      return !!layer && (L.stamp(layer) in this._layers);
    },
    eachLayer: function(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    _addLayers: function(layers) {
      layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];
      for (var i = 0,
          len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    },
    _addZoomLimit: function(layer) {
      if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
        this._zoomBoundLayers[L.stamp(layer)] = layer;
        this._updateZoomLevels();
      }
    },
    _removeZoomLimit: function(layer) {
      var id = L.stamp(layer);
      if (this._zoomBoundLayers[id]) {
        delete this._zoomBoundLayers[id];
        this._updateZoomLevels();
      }
    },
    _updateZoomLevels: function() {
      var minZoom = Infinity,
          maxZoom = -Infinity,
          oldZoomSpan = this._getZoomSpan();
      for (var i in this._zoomBoundLayers) {
        var options = this._zoomBoundLayers[i].options;
        minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
        maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
      }
      this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
      this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;
      if (oldZoomSpan !== this._getZoomSpan()) {
        this.fire('zoomlevelschange');
      }
    }
  });
  L.Projection.Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: L.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function(latlng) {
      var d = Math.PI / 180,
          r = this.R,
          y = latlng.lat * d,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          con = e * Math.sin(y);
      var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
      y = -r * Math.log(Math.max(ts, 1E-10));
      return new L.Point(latlng.lng * d * r, y);
    },
    unproject: function(point) {
      var d = 180 / Math.PI,
          r = this.R,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          ts = Math.exp(-point.y / r),
          phi = Math.PI / 2 - 2 * Math.atan(ts);
      for (var i = 0,
          dphi = 0.1,
          con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
        con = e * Math.sin(phi);
        con = Math.pow((1 - con) / (1 + con), e / 2);
        dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
        phi += dphi;
      }
      return new L.LatLng(phi * d, point.x * d / r);
    }
  };
  L.CRS.EPSG3395 = L.extend({}, L.CRS.Earth, {
    code: 'EPSG:3395',
    projection: L.Projection.Mercator,
    transformation: (function() {
      var scale = 0.5 / (Math.PI * L.Projection.Mercator.R);
      return new L.Transformation(scale, 0.5, -scale, 0.5);
    }())
  });
  L.GridLayer = L.Layer.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: L.Browser.mobile,
      updateWhenZooming: true,
      updateInterval: 200,
      attribution: null,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: undefined,
      noWrap: false,
      pane: 'tilePane',
      className: '',
      keepBuffer: 2
    },
    initialize: function(options) {
      L.setOptions(this, options);
    },
    onAdd: function() {
      this._initContainer();
      this._levels = {};
      this._tiles = {};
      this._resetView();
      this._update();
    },
    beforeAdd: function(map) {
      map._addZoomLimit(this);
    },
    onRemove: function(map) {
      this._removeAllTiles();
      L.DomUtil.remove(this._container);
      map._removeZoomLimit(this);
      this._container = null;
      this._tileZoom = null;
    },
    bringToFront: function() {
      if (this._map) {
        L.DomUtil.toFront(this._container);
        this._setAutoZIndex(Math.max);
      }
      return this;
    },
    bringToBack: function() {
      if (this._map) {
        L.DomUtil.toBack(this._container);
        this._setAutoZIndex(Math.min);
      }
      return this;
    },
    getAttribution: function() {
      return this.options.attribution;
    },
    getContainer: function() {
      return this._container;
    },
    setOpacity: function(opacity) {
      this.options.opacity = opacity;
      this._updateOpacity();
      return this;
    },
    setZIndex: function(zIndex) {
      this.options.zIndex = zIndex;
      this._updateZIndex();
      return this;
    },
    isLoading: function() {
      return this._loading;
    },
    redraw: function() {
      if (this._map) {
        this._removeAllTiles();
        this._update();
      }
      return this;
    },
    getEvents: function() {
      var events = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      if (!this.options.updateWhenIdle) {
        if (!this._onMove) {
          this._onMove = L.Util.throttle(this._onMoveEnd, this.options.updateInterval, this);
        }
        events.move = this._onMove;
      }
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    createTile: function() {
      return document.createElement('div');
    },
    getTileSize: function() {
      var s = this.options.tileSize;
      return s instanceof L.Point ? s : new L.Point(s, s);
    },
    _updateZIndex: function() {
      if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._container.style.zIndex = this.options.zIndex;
      }
    },
    _setAutoZIndex: function(compare) {
      var layers = this.getPane().children,
          edgeZIndex = -compare(-Infinity, Infinity);
      for (var i = 0,
          len = layers.length,
          zIndex; i < len; i++) {
        zIndex = layers[i].style.zIndex;
        if (layers[i] !== this._container && zIndex) {
          edgeZIndex = compare(edgeZIndex, +zIndex);
        }
      }
      if (isFinite(edgeZIndex)) {
        this.options.zIndex = edgeZIndex + compare(-1, 1);
        this._updateZIndex();
      }
    },
    _updateOpacity: function() {
      if (!this._map) {
        return;
      }
      if (L.Browser.ielt9) {
        return;
      }
      L.DomUtil.setOpacity(this._container, this.options.opacity);
      var now = +new Date(),
          nextFrame = false,
          willPrune = false;
      for (var key in this._tiles) {
        var tile = this._tiles[key];
        if (!tile.current || !tile.loaded) {
          continue;
        }
        var fade = Math.min(1, (now - tile.loaded) / 200);
        L.DomUtil.setOpacity(tile.el, fade);
        if (fade < 1) {
          nextFrame = true;
        } else {
          if (tile.active) {
            willPrune = true;
          }
          tile.active = true;
        }
      }
      if (willPrune && !this._noPrune) {
        this._pruneTiles();
      }
      if (nextFrame) {
        L.Util.cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
      }
    },
    _initContainer: function() {
      if (this._container) {
        return;
      }
      this._container = L.DomUtil.create('div', 'leaflet-layer ' + (this.options.className || ''));
      this._updateZIndex();
      if (this.options.opacity < 1) {
        this._updateOpacity();
      }
      this.getPane().appendChild(this._container);
    },
    _updateLevels: function() {
      var zoom = this._tileZoom,
          maxZoom = this.options.maxZoom;
      if (zoom === undefined) {
        return undefined;
      }
      for (var z in this._levels) {
        if (this._levels[z].el.children.length || z === zoom) {
          this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
        } else {
          L.DomUtil.remove(this._levels[z].el);
          this._removeTilesAtZoom(z);
          delete this._levels[z];
        }
      }
      var level = this._levels[zoom],
          map = this._map;
      if (!level) {
        level = this._levels[zoom] = {};
        level.el = L.DomUtil.create('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
        level.el.style.zIndex = maxZoom;
        level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
        level.zoom = zoom;
        this._setZoomTransform(level, map.getCenter(), map.getZoom());
        L.Util.falseFn(level.el.offsetWidth);
      }
      this._level = level;
      return level;
    },
    _pruneTiles: function() {
      if (!this._map) {
        return;
      }
      var key,
          tile;
      var zoom = this._map.getZoom();
      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        this._removeAllTiles();
        return;
      }
      for (key in this._tiles) {
        tile = this._tiles[key];
        tile.retain = tile.current;
      }
      for (key in this._tiles) {
        tile = this._tiles[key];
        if (tile.current && !tile.active) {
          var coords = tile.coords;
          if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
            this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
          }
        }
      }
      for (key in this._tiles) {
        if (!this._tiles[key].retain) {
          this._removeTile(key);
        }
      }
    },
    _removeTilesAtZoom: function(zoom) {
      for (var key in this._tiles) {
        if (this._tiles[key].coords.z !== zoom) {
          continue;
        }
        this._removeTile(key);
      }
    },
    _removeAllTiles: function() {
      for (var key in this._tiles) {
        this._removeTile(key);
      }
    },
    _invalidateAll: function() {
      for (var z in this._levels) {
        L.DomUtil.remove(this._levels[z].el);
        delete this._levels[z];
      }
      this._removeAllTiles();
      this._tileZoom = null;
    },
    _retainParent: function(x, y, z, minZoom) {
      var x2 = Math.floor(x / 2),
          y2 = Math.floor(y / 2),
          z2 = z - 1,
          coords2 = new L.Point(+x2, +y2);
      coords2.z = +z2;
      var key = this._tileCoordsToKey(coords2),
          tile = this._tiles[key];
      if (tile && tile.active) {
        tile.retain = true;
        return true;
      } else if (tile && tile.loaded) {
        tile.retain = true;
      }
      if (z2 > minZoom) {
        return this._retainParent(x2, y2, z2, minZoom);
      }
      return false;
    },
    _retainChildren: function(x, y, z, maxZoom) {
      for (var i = 2 * x; i < 2 * x + 2; i++) {
        for (var j = 2 * y; j < 2 * y + 2; j++) {
          var coords = new L.Point(i, j);
          coords.z = z + 1;
          var key = this._tileCoordsToKey(coords),
              tile = this._tiles[key];
          if (tile && tile.active) {
            tile.retain = true;
            continue;
          } else if (tile && tile.loaded) {
            tile.retain = true;
          }
          if (z + 1 < maxZoom) {
            this._retainChildren(i, j, z + 1, maxZoom);
          }
        }
      }
    },
    _resetView: function(e) {
      var animating = e && (e.pinch || e.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
    },
    _animateZoom: function(e) {
      this._setView(e.center, e.zoom, true, e.noUpdate);
    },
    _setView: function(center, zoom, noPrune, noUpdate) {
      var tileZoom = Math.round(zoom);
      if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) || (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
        tileZoom = undefined;
      }
      var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);
      if (!noUpdate || tileZoomChanged) {
        this._tileZoom = tileZoom;
        if (this._abortLoading) {
          this._abortLoading();
        }
        this._updateLevels();
        this._resetGrid();
        if (tileZoom !== undefined) {
          this._update(center);
        }
        if (!noPrune) {
          this._pruneTiles();
        }
        this._noPrune = !!noPrune;
      }
      this._setZoomTransforms(center, zoom);
    },
    _setZoomTransforms: function(center, zoom) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], center, zoom);
      }
    },
    _setZoomTransform: function(level, center, zoom) {
      var scale = this._map.getZoomScale(zoom, level.zoom),
          translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();
      if (L.Browser.any3d) {
        L.DomUtil.setTransform(level.el, translate, scale);
      } else {
        L.DomUtil.setPosition(level.el, translate);
      }
    },
    _resetGrid: function() {
      var map = this._map,
          crs = map.options.crs,
          tileSize = this._tileSize = this.getTileSize(),
          tileZoom = this._tileZoom;
      var bounds = this._map.getPixelWorldBounds(this._tileZoom);
      if (bounds) {
        this._globalTileRange = this._pxBoundsToTileRange(bounds);
      }
      this._wrapX = crs.wrapLng && !this.options.noWrap && [Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x), Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)];
      this._wrapY = crs.wrapLat && !this.options.noWrap && [Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x), Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)];
    },
    _onMoveEnd: function() {
      if (!this._map || this._map._animatingZoom) {
        return;
      }
      this._update();
    },
    _getTiledPixelBounds: function(center) {
      var map = this._map,
          mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
          scale = map.getZoomScale(mapZoom, this._tileZoom),
          pixelCenter = map.project(center, this._tileZoom).floor(),
          halfSize = map.getSize().divideBy(scale * 2);
      return new L.Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
    },
    _update: function(center) {
      var map = this._map;
      if (!map) {
        return;
      }
      var zoom = map.getZoom();
      if (center === undefined) {
        center = map.getCenter();
      }
      if (this._tileZoom === undefined) {
        return;
      }
      var pixelBounds = this._getTiledPixelBounds(center),
          tileRange = this._pxBoundsToTileRange(pixelBounds),
          tileCenter = tileRange.getCenter(),
          queue = [],
          margin = this.options.keepBuffer,
          noPruneRange = new L.Bounds(tileRange.getBottomLeft().subtract([margin, -margin]), tileRange.getTopRight().add([margin, -margin]));
      for (var key in this._tiles) {
        var c = this._tiles[key].coords;
        if (c.z !== this._tileZoom || !noPruneRange.contains(L.point(c.x, c.y))) {
          this._tiles[key].current = false;
        }
      }
      if (Math.abs(zoom - this._tileZoom) > 1) {
        this._setView(center, zoom);
        return;
      }
      for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
        for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
          var coords = new L.Point(i, j);
          coords.z = this._tileZoom;
          if (!this._isValidTile(coords)) {
            continue;
          }
          var tile = this._tiles[this._tileCoordsToKey(coords)];
          if (tile) {
            tile.current = true;
          } else {
            queue.push(coords);
          }
        }
      }
      queue.sort(function(a, b) {
        return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
      });
      if (queue.length !== 0) {
        if (!this._loading) {
          this._loading = true;
          this.fire('loading');
        }
        var fragment = document.createDocumentFragment();
        for (i = 0; i < queue.length; i++) {
          this._addTile(queue[i], fragment);
        }
        this._level.el.appendChild(fragment);
      }
    },
    _isValidTile: function(coords) {
      var crs = this._map.options.crs;
      if (!crs.infinite) {
        var bounds = this._globalTileRange;
        if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) || (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) {
          return false;
        }
      }
      if (!this.options.bounds) {
        return true;
      }
      var tileBounds = this._tileCoordsToBounds(coords);
      return L.latLngBounds(this.options.bounds).overlaps(tileBounds);
    },
    _keyToBounds: function(key) {
      return this._tileCoordsToBounds(this._keyToTileCoords(key));
    },
    _tileCoordsToBounds: function(coords) {
      var map = this._map,
          tileSize = this.getTileSize(),
          nwPoint = coords.scaleBy(tileSize),
          sePoint = nwPoint.add(tileSize),
          nw = map.unproject(nwPoint, coords.z),
          se = map.unproject(sePoint, coords.z);
      if (!this.options.noWrap) {
        nw = map.wrapLatLng(nw);
        se = map.wrapLatLng(se);
      }
      return new L.LatLngBounds(nw, se);
    },
    _tileCoordsToKey: function(coords) {
      return coords.x + ':' + coords.y + ':' + coords.z;
    },
    _keyToTileCoords: function(key) {
      var k = key.split(':'),
          coords = new L.Point(+k[0], +k[1]);
      coords.z = +k[2];
      return coords;
    },
    _removeTile: function(key) {
      var tile = this._tiles[key];
      if (!tile) {
        return;
      }
      L.DomUtil.remove(tile.el);
      delete this._tiles[key];
      this.fire('tileunload', {
        tile: tile.el,
        coords: this._keyToTileCoords(key)
      });
    },
    _initTile: function(tile) {
      L.DomUtil.addClass(tile, 'leaflet-tile');
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 'px';
      tile.style.height = tileSize.y + 'px';
      tile.onselectstart = L.Util.falseFn;
      tile.onmousemove = L.Util.falseFn;
      if (L.Browser.ielt9 && this.options.opacity < 1) {
        L.DomUtil.setOpacity(tile, this.options.opacity);
      }
      if (L.Browser.android && !L.Browser.android23) {
        tile.style.WebkitBackfaceVisibility = 'hidden';
      }
    },
    _addTile: function(coords, container) {
      var tilePos = this._getTilePos(coords),
          key = this._tileCoordsToKey(coords);
      var tile = this.createTile(this._wrapCoords(coords), L.bind(this._tileReady, this, coords));
      this._initTile(tile);
      if (this.createTile.length < 2) {
        L.Util.requestAnimFrame(L.bind(this._tileReady, this, coords, null, tile));
      }
      L.DomUtil.setPosition(tile, tilePos);
      this._tiles[key] = {
        el: tile,
        coords: coords,
        current: true
      };
      container.appendChild(tile);
      this.fire('tileloadstart', {
        tile: tile,
        coords: coords
      });
    },
    _tileReady: function(coords, err, tile) {
      if (!this._map) {
        return;
      }
      if (err) {
        this.fire('tileerror', {
          error: err,
          tile: tile,
          coords: coords
        });
      }
      var key = this._tileCoordsToKey(coords);
      tile = this._tiles[key];
      if (!tile) {
        return;
      }
      tile.loaded = +new Date();
      if (this._map._fadeAnimated) {
        L.DomUtil.setOpacity(tile.el, 0);
        L.Util.cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this);
      } else {
        tile.active = true;
        this._pruneTiles();
      }
      if (!err) {
        L.DomUtil.addClass(tile.el, 'leaflet-tile-loaded');
        this.fire('tileload', {
          tile: tile.el,
          coords: coords
        });
      }
      if (this._noTilesToLoad()) {
        this._loading = false;
        this.fire('load');
        if (L.Browser.ielt9 || !this._map._fadeAnimated) {
          L.Util.requestAnimFrame(this._pruneTiles, this);
        } else {
          setTimeout(L.bind(this._pruneTiles, this), 250);
        }
      }
    },
    _getTilePos: function(coords) {
      return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function(coords) {
      var newCoords = new L.Point(this._wrapX ? L.Util.wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? L.Util.wrapNum(coords.y, this._wrapY) : coords.y);
      newCoords.z = coords.z;
      return newCoords;
    },
    _pxBoundsToTileRange: function(bounds) {
      var tileSize = this.getTileSize();
      return new L.Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function() {
      for (var key in this._tiles) {
        if (!this._tiles[key].loaded) {
          return false;
        }
      }
      return true;
    }
  });
  L.gridLayer = function(options) {
    return new L.GridLayer(options);
  };
  L.TileLayer = L.GridLayer.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      maxNativeZoom: null,
      subdomains: 'abc',
      errorTileUrl: '',
      zoomOffset: 0,
      tms: false,
      zoomReverse: false,
      detectRetina: false,
      crossOrigin: false
    },
    initialize: function(url, options) {
      this._url = url;
      options = L.setOptions(this, options);
      if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {
        options.tileSize = Math.floor(options.tileSize / 2);
        if (!options.zoomReverse) {
          options.zoomOffset++;
          options.maxZoom--;
        } else {
          options.zoomOffset--;
          options.minZoom++;
        }
        options.minZoom = Math.max(0, options.minZoom);
      }
      if (typeof options.subdomains === 'string') {
        options.subdomains = options.subdomains.split('');
      }
      if (!L.Browser.android) {
        this.on('tileunload', this._onTileRemove);
      }
    },
    setUrl: function(url, noRedraw) {
      this._url = url;
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    },
    createTile: function(coords, done) {
      var tile = document.createElement('img');
      L.DomEvent.on(tile, 'load', L.bind(this._tileOnLoad, this, done, tile));
      L.DomEvent.on(tile, 'error', L.bind(this._tileOnError, this, done, tile));
      if (this.options.crossOrigin) {
        tile.crossOrigin = '';
      }
      tile.alt = '';
      tile.src = this.getTileUrl(coords);
      return tile;
    },
    getTileUrl: function(coords) {
      var data = {
        r: L.Browser.retina ? '@2x' : '',
        s: this._getSubdomain(coords),
        x: coords.x,
        y: coords.y,
        z: this._getZoomForUrl()
      };
      if (this._map && !this._map.options.crs.infinite) {
        var invertedY = this._globalTileRange.max.y - coords.y;
        if (this.options.tms) {
          data['y'] = invertedY;
        }
        data['-y'] = invertedY;
      }
      return L.Util.template(this._url, L.extend(data, this.options));
    },
    _tileOnLoad: function(done, tile) {
      if (L.Browser.ielt9) {
        setTimeout(L.bind(done, this, null, tile), 0);
      } else {
        done(null, tile);
      }
    },
    _tileOnError: function(done, tile, e) {
      var errorUrl = this.options.errorTileUrl;
      if (errorUrl) {
        tile.src = errorUrl;
      }
      done(e, tile);
    },
    getTileSize: function() {
      var map = this._map,
          tileSize = L.GridLayer.prototype.getTileSize.call(this),
          zoom = this._tileZoom + this.options.zoomOffset,
          zoomN = this.options.maxNativeZoom;
      return zoomN !== null && zoom > zoomN ? tileSize.divideBy(map.getZoomScale(zoomN, zoom)).round() : tileSize;
    },
    _onTileRemove: function(e) {
      e.tile.onload = null;
    },
    _getZoomForUrl: function() {
      var options = this.options,
          zoom = this._tileZoom;
      if (options.zoomReverse) {
        zoom = options.maxZoom - zoom;
      }
      zoom += options.zoomOffset;
      return options.maxNativeZoom !== null ? Math.min(zoom, options.maxNativeZoom) : zoom;
    },
    _getSubdomain: function(tilePoint) {
      var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
      return this.options.subdomains[index];
    },
    _abortLoading: function() {
      var i,
          tile;
      for (i in this._tiles) {
        if (this._tiles[i].coords.z !== this._tileZoom) {
          tile = this._tiles[i].el;
          tile.onload = L.Util.falseFn;
          tile.onerror = L.Util.falseFn;
          if (!tile.complete) {
            tile.src = L.Util.emptyImageUrl;
            L.DomUtil.remove(tile);
          }
        }
      }
    }
  });
  L.tileLayer = function(url, options) {
    return new L.TileLayer(url, options);
  };
  L.TileLayer.WMS = L.TileLayer.extend({
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      layers: '',
      styles: '',
      format: 'image/jpeg',
      transparent: false,
      version: '1.1.1'
    },
    options: {
      crs: null,
      uppercase: false
    },
    initialize: function(url, options) {
      this._url = url;
      var wmsParams = L.extend({}, this.defaultWmsParams);
      for (var i in options) {
        if (!(i in this.options)) {
          wmsParams[i] = options[i];
        }
      }
      options = L.setOptions(this, options);
      wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && L.Browser.retina ? 2 : 1);
      this.wmsParams = wmsParams;
    },
    onAdd: function(map) {
      this._crs = this.options.crs || map.options.crs;
      this._wmsVersion = parseFloat(this.wmsParams.version);
      var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      this.wmsParams[projectionKey] = this._crs.code;
      L.TileLayer.prototype.onAdd.call(this, map);
    },
    getTileUrl: function(coords) {
      var tileBounds = this._tileCoordsToBounds(coords),
          nw = this._crs.project(tileBounds.getNorthWest()),
          se = this._crs.project(tileBounds.getSouthEast()),
          bbox = (this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ? [se.y, nw.x, nw.y, se.x] : [nw.x, se.y, se.x, nw.y]).join(','),
          url = L.TileLayer.prototype.getTileUrl.call(this, coords);
      return url + L.Util.getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
    },
    setParams: function(params, noRedraw) {
      L.extend(this.wmsParams, params);
      if (!noRedraw) {
        this.redraw();
      }
      return this;
    }
  });
  L.tileLayer.wms = function(url, options) {
    return new L.TileLayer.WMS(url, options);
  };
  L.ImageOverlay = L.Layer.extend({
    options: {
      opacity: 1,
      alt: '',
      interactive: false,
      attribution: null,
      crossOrigin: false
    },
    initialize: function(url, bounds, options) {
      this._url = url;
      this._bounds = L.latLngBounds(bounds);
      L.setOptions(this, options);
    },
    onAdd: function() {
      if (!this._image) {
        this._initImage();
        if (this.options.opacity < 1) {
          this._updateOpacity();
        }
      }
      if (this.options.interactive) {
        L.DomUtil.addClass(this._image, 'leaflet-interactive');
        this.addInteractiveTarget(this._image);
      }
      this.getPane().appendChild(this._image);
      this._reset();
    },
    onRemove: function() {
      L.DomUtil.remove(this._image);
      if (this.options.interactive) {
        this.removeInteractiveTarget(this._image);
      }
    },
    setOpacity: function(opacity) {
      this.options.opacity = opacity;
      if (this._image) {
        this._updateOpacity();
      }
      return this;
    },
    setStyle: function(styleOpts) {
      if (styleOpts.opacity) {
        this.setOpacity(styleOpts.opacity);
      }
      return this;
    },
    bringToFront: function() {
      if (this._map) {
        L.DomUtil.toFront(this._image);
      }
      return this;
    },
    bringToBack: function() {
      if (this._map) {
        L.DomUtil.toBack(this._image);
      }
      return this;
    },
    setUrl: function(url) {
      this._url = url;
      if (this._image) {
        this._image.src = url;
      }
      return this;
    },
    setBounds: function(bounds) {
      this._bounds = bounds;
      if (this._map) {
        this._reset();
      }
      return this;
    },
    getAttribution: function() {
      return this.options.attribution;
    },
    getEvents: function() {
      var events = {
        zoom: this._reset,
        viewreset: this._reset
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    getBounds: function() {
      return this._bounds;
    },
    getElement: function() {
      return this._image;
    },
    _initImage: function() {
      var img = this._image = L.DomUtil.create('img', 'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : ''));
      img.onselectstart = L.Util.falseFn;
      img.onmousemove = L.Util.falseFn;
      img.onload = L.bind(this.fire, this, 'load');
      if (this.options.crossOrigin) {
        img.crossOrigin = '';
      }
      img.src = this._url;
      img.alt = this.options.alt;
    },
    _animateZoom: function(e) {
      var scale = this._map.getZoomScale(e.zoom),
          offset = this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), e.zoom, e.center);
      L.DomUtil.setTransform(this._image, offset, scale);
    },
    _reset: function() {
      var image = this._image,
          bounds = new L.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          size = bounds.getSize();
      L.DomUtil.setPosition(image, bounds.min);
      image.style.width = size.x + 'px';
      image.style.height = size.y + 'px';
    },
    _updateOpacity: function() {
      L.DomUtil.setOpacity(this._image, this.options.opacity);
    }
  });
  L.imageOverlay = function(url, bounds, options) {
    return new L.ImageOverlay(url, bounds, options);
  };
  L.Icon = L.Class.extend({
    initialize: function(options) {
      L.setOptions(this, options);
    },
    createIcon: function(oldIcon) {
      return this._createIcon('icon', oldIcon);
    },
    createShadow: function(oldIcon) {
      return this._createIcon('shadow', oldIcon);
    },
    _createIcon: function(name, oldIcon) {
      var src = this._getIconUrl(name);
      if (!src) {
        if (name === 'icon') {
          throw new Error('iconUrl not set in Icon options (see the docs).');
        }
        return null;
      }
      var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
      this._setIconStyles(img, name);
      return img;
    },
    _setIconStyles: function(img, name) {
      var options = this.options;
      var sizeOption = options[name + 'Size'];
      if (typeof sizeOption === 'number') {
        sizeOption = [sizeOption, sizeOption];
      }
      var size = L.point(sizeOption),
          anchor = L.point(name === 'shadow' && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
      img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');
      if (anchor) {
        img.style.marginLeft = (-anchor.x) + 'px';
        img.style.marginTop = (-anchor.y) + 'px';
      }
      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    _createImg: function(src, el) {
      el = el || document.createElement('img');
      el.src = src;
      return el;
    },
    _getIconUrl: function(name) {
      return L.Browser.retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
    }
  });
  L.icon = function(options) {
    return new L.Icon(options);
  };
  L.Icon.Default = L.Icon.extend({
    options: {
      iconUrl: 'marker-icon.png',
      iconRetinaUrl: 'marker-icon-2x.png',
      shadowUrl: 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function(name) {
      if (!L.Icon.Default.imagePath) {
        L.Icon.Default.imagePath = this._detectIconPath();
      }
      return (this.options.imagePath || L.Icon.Default.imagePath) + L.Icon.prototype._getIconUrl.call(this, name);
    },
    _detectIconPath: function() {
      var el = L.DomUtil.create('div', 'leaflet-default-icon-path', document.body);
      var path = L.DomUtil.getStyle(el, 'background-image') || L.DomUtil.getStyle(el, 'backgroundImage');
      document.body.removeChild(el);
      return path.indexOf('url') === 0 ? path.replace(/^url\([\"\']?/, '').replace(/marker-icon\.png[\"\']?\)$/, '') : '';
    }
  });
  L.Marker = L.Layer.extend({
    options: {
      icon: new L.Icon.Default(),
      interactive: true,
      draggable: false,
      keyboard: true,
      title: '',
      alt: '',
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: false,
      riseOffset: 250,
      pane: 'markerPane',
      nonBubblingEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu']
    },
    initialize: function(latlng, options) {
      L.setOptions(this, options);
      this._latlng = L.latLng(latlng);
    },
    onAdd: function(map) {
      this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
      if (this._zoomAnimated) {
        map.on('zoomanim', this._animateZoom, this);
      }
      this._initIcon();
      this.update();
    },
    onRemove: function(map) {
      if (this.dragging && this.dragging.enabled()) {
        this.options.draggable = true;
        this.dragging.removeHooks();
      }
      if (this._zoomAnimated) {
        map.off('zoomanim', this._animateZoom, this);
      }
      this._removeIcon();
      this._removeShadow();
    },
    getEvents: function() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function() {
      return this._latlng;
    },
    setLatLng: function(latlng) {
      var oldLatLng = this._latlng;
      this._latlng = L.latLng(latlng);
      this.update();
      return this.fire('move', {
        oldLatLng: oldLatLng,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function(offset) {
      this.options.zIndexOffset = offset;
      return this.update();
    },
    setIcon: function(icon) {
      this.options.icon = icon;
      if (this._map) {
        this._initIcon();
        this.update();
      }
      if (this._popup) {
        this.bindPopup(this._popup, this._popup.options);
      }
      return this;
    },
    getElement: function() {
      return this._icon;
    },
    update: function() {
      if (this._icon) {
        var pos = this._map.latLngToLayerPoint(this._latlng).round();
        this._setPos(pos);
      }
      return this;
    },
    _initIcon: function() {
      var options = this.options,
          classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      var icon = options.icon.createIcon(this._icon),
          addIcon = false;
      if (icon !== this._icon) {
        if (this._icon) {
          this._removeIcon();
        }
        addIcon = true;
        if (options.title) {
          icon.title = options.title;
        }
        if (options.alt) {
          icon.alt = options.alt;
        }
      }
      L.DomUtil.addClass(icon, classToAdd);
      if (options.keyboard) {
        icon.tabIndex = '0';
      }
      this._icon = icon;
      if (options.riseOnHover) {
        this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }
      var newShadow = options.icon.createShadow(this._shadow),
          addShadow = false;
      if (newShadow !== this._shadow) {
        this._removeShadow();
        addShadow = true;
      }
      if (newShadow) {
        L.DomUtil.addClass(newShadow, classToAdd);
      }
      this._shadow = newShadow;
      if (options.opacity < 1) {
        this._updateOpacity();
      }
      if (addIcon) {
        this.getPane().appendChild(this._icon);
      }
      this._initInteraction();
      if (newShadow && addShadow) {
        this.getPane('shadowPane').appendChild(this._shadow);
      }
    },
    _removeIcon: function() {
      if (this.options.riseOnHover) {
        this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }
      L.DomUtil.remove(this._icon);
      this.removeInteractiveTarget(this._icon);
      this._icon = null;
    },
    _removeShadow: function() {
      if (this._shadow) {
        L.DomUtil.remove(this._shadow);
      }
      this._shadow = null;
    },
    _setPos: function(pos) {
      L.DomUtil.setPosition(this._icon, pos);
      if (this._shadow) {
        L.DomUtil.setPosition(this._shadow, pos);
      }
      this._zIndex = pos.y + this.options.zIndexOffset;
      this._resetZIndex();
    },
    _updateZIndex: function(offset) {
      this._icon.style.zIndex = this._zIndex + offset;
    },
    _animateZoom: function(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
      this._setPos(pos);
    },
    _initInteraction: function() {
      if (!this.options.interactive) {
        return;
      }
      L.DomUtil.addClass(this._icon, 'leaflet-interactive');
      this.addInteractiveTarget(this._icon);
      if (L.Handler.MarkerDrag) {
        var draggable = this.options.draggable;
        if (this.dragging) {
          draggable = this.dragging.enabled();
          this.dragging.disable();
        }
        this.dragging = new L.Handler.MarkerDrag(this);
        if (draggable) {
          this.dragging.enable();
        }
      }
    },
    setOpacity: function(opacity) {
      this.options.opacity = opacity;
      if (this._map) {
        this._updateOpacity();
      }
      return this;
    },
    _updateOpacity: function() {
      var opacity = this.options.opacity;
      L.DomUtil.setOpacity(this._icon, opacity);
      if (this._shadow) {
        L.DomUtil.setOpacity(this._shadow, opacity);
      }
    },
    _bringToFront: function() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function() {
      this._updateZIndex(0);
    }
  });
  L.marker = function(latlng, options) {
    return new L.Marker(latlng, options);
  };
  L.DivIcon = L.Icon.extend({
    options: {
      iconSize: [12, 12],
      html: false,
      bgPos: null,
      className: 'leaflet-div-icon'
    },
    createIcon: function(oldIcon) {
      var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
          options = this.options;
      div.innerHTML = options.html !== false ? options.html : '';
      if (options.bgPos) {
        var bgPos = L.point(options.bgPos);
        div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
      }
      this._setIconStyles(div, 'icon');
      return div;
    },
    createShadow: function() {
      return null;
    }
  });
  L.divIcon = function(options) {
    return new L.DivIcon(options);
  };
  L.DivOverlay = L.Layer.extend({
    options: {
      offset: [0, 7],
      className: '',
      pane: 'popupPane'
    },
    initialize: function(options, source) {
      L.setOptions(this, options);
      this._source = source;
    },
    onAdd: function(map) {
      this._zoomAnimated = map._zoomAnimated;
      if (!this._container) {
        this._initLayout();
      }
      if (map._fadeAnimated) {
        L.DomUtil.setOpacity(this._container, 0);
      }
      clearTimeout(this._removeTimeout);
      this.getPane().appendChild(this._container);
      this.update();
      if (map._fadeAnimated) {
        L.DomUtil.setOpacity(this._container, 1);
      }
      this.bringToFront();
    },
    onRemove: function(map) {
      if (map._fadeAnimated) {
        L.DomUtil.setOpacity(this._container, 0);
        this._removeTimeout = setTimeout(L.bind(L.DomUtil.remove, L.DomUtil, this._container), 200);
      } else {
        L.DomUtil.remove(this._container);
      }
    },
    getLatLng: function() {
      return this._latlng;
    },
    setLatLng: function(latlng) {
      this._latlng = L.latLng(latlng);
      if (this._map) {
        this._updatePosition();
        this._adjustPan();
      }
      return this;
    },
    getContent: function() {
      return this._content;
    },
    setContent: function(content) {
      this._content = content;
      this.update();
      return this;
    },
    getElement: function() {
      return this._container;
    },
    update: function() {
      if (!this._map) {
        return;
      }
      this._container.style.visibility = 'hidden';
      this._updateContent();
      this._updateLayout();
      this._updatePosition();
      this._container.style.visibility = '';
      this._adjustPan();
    },
    getEvents: function() {
      var events = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }
      return events;
    },
    isOpen: function() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function() {
      if (this._map) {
        L.DomUtil.toFront(this._container);
      }
      return this;
    },
    bringToBack: function() {
      if (this._map) {
        L.DomUtil.toBack(this._container);
      }
      return this;
    },
    _updateContent: function() {
      if (!this._content) {
        return;
      }
      var node = this._contentNode;
      var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;
      if (typeof content === 'string') {
        node.innerHTML = content;
      } else {
        while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
        }
        node.appendChild(content);
      }
      this.fire('contentupdate');
    },
    _updatePosition: function() {
      if (!this._map) {
        return;
      }
      var pos = this._map.latLngToLayerPoint(this._latlng),
          offset = L.point(this.options.offset),
          anchor = this._getAnchor();
      if (this._zoomAnimated) {
        L.DomUtil.setPosition(this._container, pos.add(anchor));
      } else {
        offset = offset.add(pos).add(anchor);
      }
      var bottom = this._containerBottom = -offset.y,
          left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
      this._container.style.bottom = bottom + 'px';
      this._container.style.left = left + 'px';
    },
    _getAnchor: function() {
      return [0, 0];
    }
  });
  L.Popup = L.DivOverlay.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: true,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: false,
      closeButton: true,
      autoClose: true,
      className: ''
    },
    openOn: function(map) {
      map.openPopup(this);
      return this;
    },
    onAdd: function(map) {
      L.DivOverlay.prototype.onAdd.call(this, map);
      map.fire('popupopen', {popup: this});
      if (this._source) {
        this._source.fire('popupopen', {popup: this}, true);
        if (!(this._source instanceof L.Path)) {
          this._source.on('preclick', L.DomEvent.stopPropagation);
        }
      }
    },
    onRemove: function(map) {
      L.DivOverlay.prototype.onRemove.call(this, map);
      map.fire('popupclose', {popup: this});
      if (this._source) {
        this._source.fire('popupclose', {popup: this}, true);
        if (!(this._source instanceof L.Path)) {
          this._source.off('preclick', L.DomEvent.stopPropagation);
        }
      }
    },
    getEvents: function() {
      var events = L.DivOverlay.prototype.getEvents.call(this);
      if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
        events.preclick = this._close;
      }
      if (this.options.keepInView) {
        events.moveend = this._adjustPan;
      }
      return events;
    },
    _close: function() {
      if (this._map) {
        this._map.closePopup(this);
      }
    },
    _initLayout: function() {
      var prefix = 'leaflet-popup',
          container = this._container = L.DomUtil.create('div', prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-animated');
      if (this.options.closeButton) {
        var closeButton = this._closeButton = L.DomUtil.create('a', prefix + '-close-button', container);
        closeButton.href = '#close';
        closeButton.innerHTML = '&#215;';
        L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
      }
      var wrapper = this._wrapper = L.DomUtil.create('div', prefix + '-content-wrapper', container);
      this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);
      L.DomEvent.disableClickPropagation(wrapper).disableScrollPropagation(this._contentNode).on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);
      this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
      this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
    },
    _updateLayout: function() {
      var container = this._contentNode,
          style = container.style;
      style.width = '';
      style.whiteSpace = 'nowrap';
      var width = container.offsetWidth;
      width = Math.min(width, this.options.maxWidth);
      width = Math.max(width, this.options.minWidth);
      style.width = (width + 1) + 'px';
      style.whiteSpace = '';
      style.height = '';
      var height = container.offsetHeight,
          maxHeight = this.options.maxHeight,
          scrolledClass = 'leaflet-popup-scrolled';
      if (maxHeight && height > maxHeight) {
        style.height = maxHeight + 'px';
        L.DomUtil.addClass(container, scrolledClass);
      } else {
        L.DomUtil.removeClass(container, scrolledClass);
      }
      this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
          anchor = this._getAnchor();
      L.DomUtil.setPosition(this._container, pos.add(anchor));
    },
    _adjustPan: function() {
      if (!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress)) {
        return;
      }
      var map = this._map,
          marginBottom = parseInt(L.DomUtil.getStyle(this._container, 'marginBottom'), 10) || 0,
          containerHeight = this._container.offsetHeight + marginBottom,
          containerWidth = this._containerWidth,
          layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);
      layerPos._add(L.DomUtil.getPosition(this._container));
      var containerPos = map.layerPointToContainerPoint(layerPos),
          padding = L.point(this.options.autoPanPadding),
          paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
          paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
          size = map.getSize(),
          dx = 0,
          dy = 0;
      if (containerPos.x + containerWidth + paddingBR.x > size.x) {
        dx = containerPos.x + containerWidth - size.x + paddingBR.x;
      }
      if (containerPos.x - dx - paddingTL.x < 0) {
        dx = containerPos.x - paddingTL.x;
      }
      if (containerPos.y + containerHeight + paddingBR.y > size.y) {
        dy = containerPos.y + containerHeight - size.y + paddingBR.y;
      }
      if (containerPos.y - dy - paddingTL.y < 0) {
        dy = containerPos.y - paddingTL.y;
      }
      if (dx || dy) {
        map.fire('autopanstart').panBy([dx, dy]);
      }
    },
    _onCloseButtonClick: function(e) {
      this._close();
      L.DomEvent.stop(e);
    },
    _getAnchor: function() {
      return L.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  });
  L.popup = function(options, source) {
    return new L.Popup(options, source);
  };
  L.Map.mergeOptions({closePopupOnClick: true});
  L.Map.include({
    openPopup: function(popup, latlng, options) {
      if (!(popup instanceof L.Popup)) {
        popup = new L.Popup(options).setContent(popup);
      }
      if (latlng) {
        popup.setLatLng(latlng);
      }
      if (this.hasLayer(popup)) {
        return this;
      }
      if (this._popup && this._popup.options.autoClose) {
        this.closePopup();
      }
      this._popup = popup;
      return this.addLayer(popup);
    },
    closePopup: function(popup) {
      if (!popup || popup === this._popup) {
        popup = this._popup;
        this._popup = null;
      }
      if (popup) {
        this.removeLayer(popup);
      }
      return this;
    }
  });
  L.Layer.include({
    bindPopup: function(content, options) {
      if (content instanceof L.Popup) {
        L.setOptions(content, options);
        this._popup = content;
        content._source = this;
      } else {
        if (!this._popup || options) {
          this._popup = new L.Popup(options, this);
        }
        this._popup.setContent(content);
      }
      if (!this._popupHandlersAdded) {
        this.on({
          click: this._openPopup,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = true;
      }
      return this;
    },
    unbindPopup: function() {
      if (this._popup) {
        this.off({
          click: this._openPopup,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = false;
        this._popup = null;
      }
      return this;
    },
    openPopup: function(layer, latlng) {
      if (!(layer instanceof L.Layer)) {
        latlng = layer;
        layer = this;
      }
      if (layer instanceof L.FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }
      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }
      if (this._popup && this._map) {
        this._popup._source = layer;
        this._popup.update();
        this._map.openPopup(this._popup, latlng);
      }
      return this;
    },
    closePopup: function() {
      if (this._popup) {
        this._popup._close();
      }
      return this;
    },
    togglePopup: function(target) {
      if (this._popup) {
        if (this._popup._map) {
          this.closePopup();
        } else {
          this.openPopup(target);
        }
      }
      return this;
    },
    isPopupOpen: function() {
      return this._popup.isOpen();
    },
    setPopupContent: function(content) {
      if (this._popup) {
        this._popup.setContent(content);
      }
      return this;
    },
    getPopup: function() {
      return this._popup;
    },
    _openPopup: function(e) {
      var layer = e.layer || e.target;
      if (!this._popup) {
        return;
      }
      if (!this._map) {
        return;
      }
      L.DomEvent.stop(e);
      if (layer instanceof L.Path) {
        this.openPopup(e.layer || e.target, e.latlng);
        return;
      }
      if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
        this.closePopup();
      } else {
        this.openPopup(layer, e.latlng);
      }
    },
    _movePopup: function(e) {
      this._popup.setLatLng(e.latlng);
    }
  });
  L.Marker.include({_getPopupAnchor: function() {
      return this.options.icon.options.popupAnchor || [0, 0];
    }});
  L.Tooltip = L.DivOverlay.extend({
    options: {
      pane: 'tooltipPane',
      offset: [0, 0],
      direction: 'auto',
      permanent: false,
      sticky: false,
      interactive: false,
      opacity: 0.9
    },
    onAdd: function(map) {
      L.DivOverlay.prototype.onAdd.call(this, map);
      this.setOpacity(this.options.opacity);
      map.fire('tooltipopen', {tooltip: this});
      if (this._source) {
        this._source.fire('tooltipopen', {tooltip: this}, true);
      }
    },
    onRemove: function(map) {
      L.DivOverlay.prototype.onRemove.call(this, map);
      map.fire('tooltipclose', {tooltip: this});
      if (this._source) {
        this._source.fire('tooltipclose', {tooltip: this}, true);
      }
    },
    getEvents: function() {
      var events = L.DivOverlay.prototype.getEvents.call(this);
      if (L.Browser.touch && !this.options.permanent) {
        events.preclick = this._close;
      }
      return events;
    },
    _close: function() {
      if (this._map) {
        this._map.closeTooltip(this);
      }
    },
    _initLayout: function() {
      var prefix = 'leaflet-tooltip',
          className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = L.DomUtil.create('div', className);
    },
    _updateLayout: function() {},
    _adjustPan: function() {},
    _setPosition: function(pos) {
      var map = this._map,
          container = this._container,
          centerPoint = map.latLngToContainerPoint(map.getCenter()),
          tooltipPoint = map.layerPointToContainerPoint(pos),
          direction = this.options.direction,
          tooltipWidth = container.offsetWidth,
          tooltipHeight = container.offsetHeight,
          offset = L.point(this.options.offset),
          anchor = this._getAnchor();
      if (direction === 'top') {
        pos = pos.add(L.point(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y));
      } else if (direction === 'bottom') {
        pos = pos.subtract(L.point(tooltipWidth / 2 - offset.x, -offset.y));
      } else if (direction === 'center') {
        pos = pos.subtract(L.point(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y));
      } else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
        direction = 'right';
        pos = pos.add([offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y]);
      } else {
        direction = 'left';
        pos = pos.subtract(L.point(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y));
      }
      L.DomUtil.removeClass(container, 'leaflet-tooltip-right');
      L.DomUtil.removeClass(container, 'leaflet-tooltip-left');
      L.DomUtil.removeClass(container, 'leaflet-tooltip-top');
      L.DomUtil.removeClass(container, 'leaflet-tooltip-bottom');
      L.DomUtil.addClass(container, 'leaflet-tooltip-' + direction);
      L.DomUtil.setPosition(container, pos);
    },
    _updatePosition: function() {
      var pos = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(pos);
    },
    setOpacity: function(opacity) {
      this.options.opacity = opacity;
      if (this._container) {
        L.DomUtil.setOpacity(this._container, opacity);
      }
    },
    _animateZoom: function(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
      this._setPosition(pos);
    },
    _getAnchor: function() {
      return L.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  });
  L.tooltip = function(options, source) {
    return new L.Tooltip(options, source);
  };
  L.Map.include({
    openTooltip: function(tooltip, latlng, options) {
      if (!(tooltip instanceof L.Tooltip)) {
        tooltip = new L.Tooltip(options).setContent(tooltip);
      }
      if (latlng) {
        tooltip.setLatLng(latlng);
      }
      if (this.hasLayer(tooltip)) {
        return this;
      }
      return this.addLayer(tooltip);
    },
    closeTooltip: function(tooltip) {
      if (tooltip) {
        this.removeLayer(tooltip);
      }
      return this;
    }
  });
  L.Layer.include({
    bindTooltip: function(content, options) {
      if (content instanceof L.Tooltip) {
        L.setOptions(content, options);
        this._tooltip = content;
        content._source = this;
      } else {
        if (!this._tooltip || options) {
          this._tooltip = L.tooltip(options, this);
        }
        this._tooltip.setContent(content);
      }
      this._initTooltipInteractions();
      if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
        this.openTooltip();
      }
      return this;
    },
    unbindTooltip: function() {
      if (this._tooltip) {
        this._initTooltipInteractions(true);
        this.closeTooltip();
        this._tooltip = null;
      }
      return this;
    },
    _initTooltipInteractions: function(remove) {
      if (!remove && this._tooltipHandlersAdded) {
        return;
      }
      var onOff = remove ? 'off' : 'on',
          events = {
            remove: this.closeTooltip,
            move: this._moveTooltip
          };
      if (!this._tooltip.options.permanent) {
        events.mouseover = this._openTooltip;
        events.mouseout = this.closeTooltip;
        if (this._tooltip.options.sticky) {
          events.mousemove = this._moveTooltip;
        }
        if (L.Browser.touch) {
          events.click = this._openTooltip;
        }
      } else {
        events.add = this._openTooltip;
      }
      this[onOff](events);
      this._tooltipHandlersAdded = !remove;
    },
    openTooltip: function(layer, latlng) {
      if (!(layer instanceof L.Layer)) {
        latlng = layer;
        layer = this;
      }
      if (layer instanceof L.FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }
      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }
      if (this._tooltip && this._map) {
        this._tooltip._source = layer;
        this._tooltip.update();
        this._map.openTooltip(this._tooltip, latlng);
        if (this._tooltip.options.interactive && this._tooltip._container) {
          L.DomUtil.addClass(this._tooltip._container, 'leaflet-clickable');
          this.addInteractiveTarget(this._tooltip._container);
        }
      }
      return this;
    },
    closeTooltip: function() {
      if (this._tooltip) {
        this._tooltip._close();
        if (this._tooltip.options.interactive && this._tooltip._container) {
          L.DomUtil.removeClass(this._tooltip._container, 'leaflet-clickable');
          this.removeInteractiveTarget(this._tooltip._container);
        }
      }
      return this;
    },
    toggleTooltip: function(target) {
      if (this._tooltip) {
        if (this._tooltip._map) {
          this.closeTooltip();
        } else {
          this.openTooltip(target);
        }
      }
      return this;
    },
    isTooltipOpen: function() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function(content) {
      if (this._tooltip) {
        this._tooltip.setContent(content);
      }
      return this;
    },
    getTooltip: function() {
      return this._tooltip;
    },
    _openTooltip: function(e) {
      var layer = e.layer || e.target;
      if (!this._tooltip || !this._map) {
        return;
      }
      this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
    },
    _moveTooltip: function(e) {
      var latlng = e.latlng,
          containerPoint,
          layerPoint;
      if (this._tooltip.options.sticky && e.originalEvent) {
        containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
        layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        latlng = this._map.layerPointToLatLng(layerPoint);
      }
      this._tooltip.setLatLng(latlng);
    }
  });
  L.Marker.include({_getTooltipAnchor: function() {
      return this.options.icon.options.tooltipAnchor || [0, 0];
    }});
  L.LayerGroup = L.Layer.extend({
    initialize: function(layers) {
      this._layers = {};
      var i,
          len;
      if (layers) {
        for (i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      }
    },
    addLayer: function(layer) {
      var id = this.getLayerId(layer);
      this._layers[id] = layer;
      if (this._map) {
        this._map.addLayer(layer);
      }
      return this;
    },
    removeLayer: function(layer) {
      var id = layer in this._layers ? layer : this.getLayerId(layer);
      if (this._map && this._layers[id]) {
        this._map.removeLayer(this._layers[id]);
      }
      delete this._layers[id];
      return this;
    },
    hasLayer: function(layer) {
      return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
    },
    clearLayers: function() {
      for (var i in this._layers) {
        this.removeLayer(this._layers[i]);
      }
      return this;
    },
    invoke: function(methodName) {
      var args = Array.prototype.slice.call(arguments, 1),
          i,
          layer;
      for (i in this._layers) {
        layer = this._layers[i];
        if (layer[methodName]) {
          layer[methodName].apply(layer, args);
        }
      }
      return this;
    },
    onAdd: function(map) {
      for (var i in this._layers) {
        map.addLayer(this._layers[i]);
      }
    },
    onRemove: function(map) {
      for (var i in this._layers) {
        map.removeLayer(this._layers[i]);
      }
    },
    eachLayer: function(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }
      return this;
    },
    getLayer: function(id) {
      return this._layers[id];
    },
    getLayers: function() {
      var layers = [];
      for (var i in this._layers) {
        layers.push(this._layers[i]);
      }
      return layers;
    },
    setZIndex: function(zIndex) {
      return this.invoke('setZIndex', zIndex);
    },
    getLayerId: function(layer) {
      return L.stamp(layer);
    }
  });
  L.layerGroup = function(layers) {
    return new L.LayerGroup(layers);
  };
  L.FeatureGroup = L.LayerGroup.extend({
    addLayer: function(layer) {
      if (this.hasLayer(layer)) {
        return this;
      }
      layer.addEventParent(this);
      L.LayerGroup.prototype.addLayer.call(this, layer);
      return this.fire('layeradd', {layer: layer});
    },
    removeLayer: function(layer) {
      if (!this.hasLayer(layer)) {
        return this;
      }
      if (layer in this._layers) {
        layer = this._layers[layer];
      }
      layer.removeEventParent(this);
      L.LayerGroup.prototype.removeLayer.call(this, layer);
      return this.fire('layerremove', {layer: layer});
    },
    setStyle: function(style) {
      return this.invoke('setStyle', style);
    },
    bringToFront: function() {
      return this.invoke('bringToFront');
    },
    bringToBack: function() {
      return this.invoke('bringToBack');
    },
    getBounds: function() {
      var bounds = new L.LatLngBounds();
      for (var id in this._layers) {
        var layer = this._layers[id];
        bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
      }
      return bounds;
    }
  });
  L.featureGroup = function(layers) {
    return new L.FeatureGroup(layers);
  };
  L.Renderer = L.Layer.extend({
    options: {padding: 0.1},
    initialize: function(options) {
      L.setOptions(this, options);
      L.stamp(this);
    },
    onAdd: function() {
      if (!this._container) {
        this._initContainer();
        if (this._zoomAnimated) {
          L.DomUtil.addClass(this._container, 'leaflet-zoom-animated');
        }
      }
      this.getPane().appendChild(this._container);
      this._update();
    },
    onRemove: function() {
      L.DomUtil.remove(this._container);
    },
    getEvents: function() {
      var events = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update
      };
      if (this._zoomAnimated) {
        events.zoomanim = this._onAnimZoom;
      }
      return events;
    },
    _onAnimZoom: function(ev) {
      this._updateTransform(ev.center, ev.zoom);
    },
    _onZoom: function() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function(center, zoom) {
      var scale = this._map.getZoomScale(zoom, this._zoom),
          position = L.DomUtil.getPosition(this._container),
          viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          currentCenterPoint = this._map.project(this._center, zoom),
          destCenterPoint = this._map.project(center, zoom),
          centerOffset = destCenterPoint.subtract(currentCenterPoint),
          topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);
      if (L.Browser.any3d) {
        L.DomUtil.setTransform(this._container, topLeftOffset, scale);
      } else {
        L.DomUtil.setPosition(this._container, topLeftOffset);
      }
    },
    _reset: function() {
      this._update();
      this._updateTransform(this._center, this._zoom);
    },
    _update: function() {
      var p = this.options.padding,
          size = this._map.getSize(),
          min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
      this._bounds = new L.Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
      this._center = this._map.getCenter();
      this._zoom = this._map.getZoom();
    }
  });
  L.Map.include({
    getRenderer: function(layer) {
      var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
      if (!renderer) {
        renderer = this._renderer = (this.options.preferCanvas && L.canvas()) || L.svg();
      }
      if (!this.hasLayer(renderer)) {
        this.addLayer(renderer);
      }
      return renderer;
    },
    _getPaneRenderer: function(name) {
      if (name === 'overlayPane' || name === undefined) {
        return false;
      }
      var renderer = this._paneRenderers[name];
      if (renderer === undefined) {
        renderer = (L.SVG && L.svg({pane: name})) || (L.Canvas && L.canvas({pane: name}));
        this._paneRenderers[name] = renderer;
      }
      return renderer;
    }
  });
  L.Path = L.Layer.extend({
    options: {
      stroke: true,
      color: '#3388ff',
      weight: 3,
      opacity: 1,
      lineCap: 'round',
      lineJoin: 'round',
      dashArray: null,
      dashOffset: null,
      fill: false,
      fillColor: null,
      fillOpacity: 0.2,
      fillRule: 'evenodd',
      interactive: true
    },
    beforeAdd: function(map) {
      this._renderer = map.getRenderer(this);
    },
    onAdd: function() {
      this._renderer._initPath(this);
      this._reset();
      this._renderer._addPath(this);
      this._renderer.on('update', this._update, this);
    },
    onRemove: function() {
      this._renderer._removePath(this);
      this._renderer.off('update', this._update, this);
    },
    getEvents: function() {
      return {
        zoomend: this._project,
        viewreset: this._reset
      };
    },
    redraw: function() {
      if (this._map) {
        this._renderer._updatePath(this);
      }
      return this;
    },
    setStyle: function(style) {
      L.setOptions(this, style);
      if (this._renderer) {
        this._renderer._updateStyle(this);
      }
      return this;
    },
    bringToFront: function() {
      if (this._renderer) {
        this._renderer._bringToFront(this);
      }
      return this;
    },
    bringToBack: function() {
      if (this._renderer) {
        this._renderer._bringToBack(this);
      }
      return this;
    },
    getElement: function() {
      return this._path;
    },
    _reset: function() {
      this._project();
      this._update();
    },
    _clickTolerance: function() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0);
    }
  });
  L.LineUtil = {
    simplify: function(points, tolerance) {
      if (!tolerance || !points.length) {
        return points.slice();
      }
      var sqTolerance = tolerance * tolerance;
      points = this._reducePoints(points, sqTolerance);
      points = this._simplifyDP(points, sqTolerance);
      return points;
    },
    pointToSegmentDistance: function(p, p1, p2) {
      return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
    },
    closestPointOnSegment: function(p, p1, p2) {
      return this._sqClosestPointOnSegment(p, p1, p2);
    },
    _simplifyDP: function(points, sqTolerance) {
      var len = points.length,
          ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
          markers = new ArrayConstructor(len);
      markers[0] = markers[len - 1] = 1;
      this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
      var i,
          newPoints = [];
      for (i = 0; i < len; i++) {
        if (markers[i]) {
          newPoints.push(points[i]);
        }
      }
      return newPoints;
    },
    _simplifyDPStep: function(points, markers, sqTolerance, first, last) {
      var maxSqDist = 0,
          index,
          i,
          sqDist;
      for (i = first + 1; i <= last - 1; i++) {
        sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);
        if (sqDist > maxSqDist) {
          index = i;
          maxSqDist = sqDist;
        }
      }
      if (maxSqDist > sqTolerance) {
        markers[index] = 1;
        this._simplifyDPStep(points, markers, sqTolerance, first, index);
        this._simplifyDPStep(points, markers, sqTolerance, index, last);
      }
    },
    _reducePoints: function(points, sqTolerance) {
      var reducedPoints = [points[0]];
      for (var i = 1,
          prev = 0,
          len = points.length; i < len; i++) {
        if (this._sqDist(points[i], points[prev]) > sqTolerance) {
          reducedPoints.push(points[i]);
          prev = i;
        }
      }
      if (prev < len - 1) {
        reducedPoints.push(points[len - 1]);
      }
      return reducedPoints;
    },
    clipSegment: function(a, b, bounds, useLastCode, round) {
      var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
          codeB = this._getBitCode(b, bounds),
          codeOut,
          p,
          newCode;
      this._lastCode = codeB;
      while (true) {
        if (!(codeA | codeB)) {
          return [a, b];
        }
        if (codeA & codeB) {
          return false;
        }
        codeOut = codeA || codeB;
        p = this._getEdgeIntersection(a, b, codeOut, bounds, round);
        newCode = this._getBitCode(p, bounds);
        if (codeOut === codeA) {
          a = p;
          codeA = newCode;
        } else {
          b = p;
          codeB = newCode;
        }
      }
    },
    _getEdgeIntersection: function(a, b, code, bounds, round) {
      var dx = b.x - a.x,
          dy = b.y - a.y,
          min = bounds.min,
          max = bounds.max,
          x,
          y;
      if (code & 8) {
        x = a.x + dx * (max.y - a.y) / dy;
        y = max.y;
      } else if (code & 4) {
        x = a.x + dx * (min.y - a.y) / dy;
        y = min.y;
      } else if (code & 2) {
        x = max.x;
        y = a.y + dy * (max.x - a.x) / dx;
      } else if (code & 1) {
        x = min.x;
        y = a.y + dy * (min.x - a.x) / dx;
      }
      return new L.Point(x, y, round);
    },
    _getBitCode: function(p, bounds) {
      var code = 0;
      if (p.x < bounds.min.x) {
        code |= 1;
      } else if (p.x > bounds.max.x) {
        code |= 2;
      }
      if (p.y < bounds.min.y) {
        code |= 4;
      } else if (p.y > bounds.max.y) {
        code |= 8;
      }
      return code;
    },
    _sqDist: function(p1, p2) {
      var dx = p2.x - p1.x,
          dy = p2.y - p1.y;
      return dx * dx + dy * dy;
    },
    _sqClosestPointOnSegment: function(p, p1, p2, sqDist) {
      var x = p1.x,
          y = p1.y,
          dx = p2.x - x,
          dy = p2.y - y,
          dot = dx * dx + dy * dy,
          t;
      if (dot > 0) {
        t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
        if (t > 1) {
          x = p2.x;
          y = p2.y;
        } else if (t > 0) {
          x += dx * t;
          y += dy * t;
        }
      }
      dx = p.x - x;
      dy = p.y - y;
      return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
    }
  };
  L.Polyline = L.Path.extend({
    options: {
      smoothFactor: 1.0,
      noClip: false
    },
    initialize: function(latlngs, options) {
      L.setOptions(this, options);
      this._setLatLngs(latlngs);
    },
    getLatLngs: function() {
      return this._latlngs;
    },
    setLatLngs: function(latlngs) {
      this._setLatLngs(latlngs);
      return this.redraw();
    },
    isEmpty: function() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function(p) {
      var minDistance = Infinity,
          minPoint = null,
          closest = L.LineUtil._sqClosestPointOnSegment,
          p1,
          p2;
      for (var j = 0,
          jLen = this._parts.length; j < jLen; j++) {
        var points = this._parts[j];
        for (var i = 1,
            len = points.length; i < len; i++) {
          p1 = points[i - 1];
          p2 = points[i];
          var sqDist = closest(p, p1, p2, true);
          if (sqDist < minDistance) {
            minDistance = sqDist;
            minPoint = closest(p, p1, p2);
          }
        }
      }
      if (minPoint) {
        minPoint.distance = Math.sqrt(minDistance);
      }
      return minPoint;
    },
    getCenter: function() {
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }
      var i,
          halfDist,
          segDist,
          dist,
          p1,
          p2,
          ratio,
          points = this._rings[0],
          len = points.length;
      if (!len) {
        return null;
      }
      for (i = 0, halfDist = 0; i < len - 1; i++) {
        halfDist += points[i].distanceTo(points[i + 1]) / 2;
      }
      if (halfDist === 0) {
        return this._map.layerPointToLatLng(points[0]);
      }
      for (i = 0, dist = 0; i < len - 1; i++) {
        p1 = points[i];
        p2 = points[i + 1];
        segDist = p1.distanceTo(p2);
        dist += segDist;
        if (dist > halfDist) {
          ratio = (dist - halfDist) / segDist;
          return this._map.layerPointToLatLng([p2.x - ratio * (p2.x - p1.x), p2.y - ratio * (p2.y - p1.y)]);
        }
      }
    },
    getBounds: function() {
      return this._bounds;
    },
    addLatLng: function(latlng, latlngs) {
      latlngs = latlngs || this._defaultShape();
      latlng = L.latLng(latlng);
      latlngs.push(latlng);
      this._bounds.extend(latlng);
      return this.redraw();
    },
    _setLatLngs: function(latlngs) {
      this._bounds = new L.LatLngBounds();
      this._latlngs = this._convertLatLngs(latlngs);
    },
    _defaultShape: function() {
      return L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function(latlngs) {
      var result = [],
          flat = L.Polyline._flat(latlngs);
      for (var i = 0,
          len = latlngs.length; i < len; i++) {
        if (flat) {
          result[i] = L.latLng(latlngs[i]);
          this._bounds.extend(result[i]);
        } else {
          result[i] = this._convertLatLngs(latlngs[i]);
        }
      }
      return result;
    },
    _project: function() {
      var pxBounds = new L.Bounds();
      this._rings = [];
      this._projectLatlngs(this._latlngs, this._rings, pxBounds);
      var w = this._clickTolerance(),
          p = new L.Point(w, w);
      if (this._bounds.isValid() && pxBounds.isValid()) {
        pxBounds.min._subtract(p);
        pxBounds.max._add(p);
        this._pxBounds = pxBounds;
      }
    },
    _projectLatlngs: function(latlngs, result, projectedBounds) {
      var flat = latlngs[0] instanceof L.LatLng,
          len = latlngs.length,
          i,
          ring;
      if (flat) {
        ring = [];
        for (i = 0; i < len; i++) {
          ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
          projectedBounds.extend(ring[i]);
        }
        result.push(ring);
      } else {
        for (i = 0; i < len; i++) {
          this._projectLatlngs(latlngs[i], result, projectedBounds);
        }
      }
    },
    _clipPoints: function() {
      var bounds = this._renderer._bounds;
      this._parts = [];
      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      var parts = this._parts,
          i,
          j,
          k,
          len,
          len2,
          segment,
          points;
      for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
        points = this._rings[i];
        for (j = 0, len2 = points.length; j < len2 - 1; j++) {
          segment = L.LineUtil.clipSegment(points[j], points[j + 1], bounds, j, true);
          if (!segment) {
            continue;
          }
          parts[k] = parts[k] || [];
          parts[k].push(segment[0]);
          if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
            parts[k].push(segment[1]);
            k++;
          }
        }
      }
    },
    _simplifyPoints: function() {
      var parts = this._parts,
          tolerance = this.options.smoothFactor;
      for (var i = 0,
          len = parts.length; i < len; i++) {
        parts[i] = L.LineUtil.simplify(parts[i], tolerance);
      }
    },
    _update: function() {
      if (!this._map) {
        return;
      }
      this._clipPoints();
      this._simplifyPoints();
      this._updatePath();
    },
    _updatePath: function() {
      this._renderer._updatePoly(this);
    }
  });
  L.polyline = function(latlngs, options) {
    return new L.Polyline(latlngs, options);
  };
  L.Polyline._flat = function(latlngs) {
    return !L.Util.isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
  };
  L.PolyUtil = {};
  L.PolyUtil.clipPolygon = function(points, bounds, round) {
    var clippedPoints,
        edges = [1, 4, 2, 8],
        i,
        j,
        k,
        a,
        b,
        len,
        edge,
        p,
        lu = L.LineUtil;
    for (i = 0, len = points.length; i < len; i++) {
      points[i]._code = lu._getBitCode(points[i], bounds);
    }
    for (k = 0; k < 4; k++) {
      edge = edges[k];
      clippedPoints = [];
      for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        a = points[i];
        b = points[j];
        if (!(a._code & edge)) {
          if (b._code & edge) {
            p = lu._getEdgeIntersection(b, a, edge, bounds, round);
            p._code = lu._getBitCode(p, bounds);
            clippedPoints.push(p);
          }
          clippedPoints.push(a);
        } else if (!(b._code & edge)) {
          p = lu._getEdgeIntersection(b, a, edge, bounds, round);
          p._code = lu._getBitCode(p, bounds);
          clippedPoints.push(p);
        }
      }
      points = clippedPoints;
    }
    return points;
  };
  L.Polygon = L.Polyline.extend({
    options: {fill: true},
    isEmpty: function() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function() {
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }
      var i,
          j,
          p1,
          p2,
          f,
          area,
          x,
          y,
          center,
          points = this._rings[0],
          len = points.length;
      if (!len) {
        return null;
      }
      area = x = y = 0;
      for (i = 0, j = len - 1; i < len; j = i++) {
        p1 = points[i];
        p2 = points[j];
        f = p1.y * p2.x - p2.y * p1.x;
        x += (p1.x + p2.x) * f;
        y += (p1.y + p2.y) * f;
        area += f * 3;
      }
      if (area === 0) {
        center = points[0];
      } else {
        center = [x / area, y / area];
      }
      return this._map.layerPointToLatLng(center);
    },
    _convertLatLngs: function(latlngs) {
      var result = L.Polyline.prototype._convertLatLngs.call(this, latlngs),
          len = result.length;
      if (len >= 2 && result[0] instanceof L.LatLng && result[0].equals(result[len - 1])) {
        result.pop();
      }
      return result;
    },
    _setLatLngs: function(latlngs) {
      L.Polyline.prototype._setLatLngs.call(this, latlngs);
      if (L.Polyline._flat(this._latlngs)) {
        this._latlngs = [this._latlngs];
      }
    },
    _defaultShape: function() {
      return L.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function() {
      var bounds = this._renderer._bounds,
          w = this.options.weight,
          p = new L.Point(w, w);
      bounds = new L.Bounds(bounds.min.subtract(p), bounds.max.add(p));
      this._parts = [];
      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }
      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }
      for (var i = 0,
          len = this._rings.length,
          clipped; i < len; i++) {
        clipped = L.PolyUtil.clipPolygon(this._rings[i], bounds, true);
        if (clipped.length) {
          this._parts.push(clipped);
        }
      }
    },
    _updatePath: function() {
      this._renderer._updatePoly(this, true);
    }
  });
  L.polygon = function(latlngs, options) {
    return new L.Polygon(latlngs, options);
  };
  L.Rectangle = L.Polygon.extend({
    initialize: function(latLngBounds, options) {
      L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
    },
    setBounds: function(latLngBounds) {
      return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
    },
    _boundsToLatLngs: function(latLngBounds) {
      latLngBounds = L.latLngBounds(latLngBounds);
      return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
    }
  });
  L.rectangle = function(latLngBounds, options) {
    return new L.Rectangle(latLngBounds, options);
  };
  L.CircleMarker = L.Path.extend({
    options: {
      fill: true,
      radius: 10
    },
    initialize: function(latlng, options) {
      L.setOptions(this, options);
      this._latlng = L.latLng(latlng);
      this._radius = this.options.radius;
    },
    setLatLng: function(latlng) {
      this._latlng = L.latLng(latlng);
      this.redraw();
      return this.fire('move', {latlng: this._latlng});
    },
    getLatLng: function() {
      return this._latlng;
    },
    setRadius: function(radius) {
      this.options.radius = this._radius = radius;
      return this.redraw();
    },
    getRadius: function() {
      return this._radius;
    },
    setStyle: function(options) {
      var radius = options && options.radius || this._radius;
      L.Path.prototype.setStyle.call(this, options);
      this.setRadius(radius);
      return this;
    },
    _project: function() {
      this._point = this._map.latLngToLayerPoint(this._latlng);
      this._updateBounds();
    },
    _updateBounds: function() {
      var r = this._radius,
          r2 = this._radiusY || r,
          w = this._clickTolerance(),
          p = [r + w, r2 + w];
      this._pxBounds = new L.Bounds(this._point.subtract(p), this._point.add(p));
    },
    _update: function() {
      if (this._map) {
        this._updatePath();
      }
    },
    _updatePath: function() {
      this._renderer._updateCircle(this);
    },
    _empty: function() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    }
  });
  L.circleMarker = function(latlng, options) {
    return new L.CircleMarker(latlng, options);
  };
  L.Circle = L.CircleMarker.extend({
    initialize: function(latlng, options, legacyOptions) {
      if (typeof options === 'number') {
        options = L.extend({}, legacyOptions, {radius: options});
      }
      L.setOptions(this, options);
      this._latlng = L.latLng(latlng);
      if (isNaN(this.options.radius)) {
        throw new Error('Circle radius cannot be NaN');
      }
      this._mRadius = this.options.radius;
    },
    setRadius: function(radius) {
      this._mRadius = radius;
      return this.redraw();
    },
    getRadius: function() {
      return this._mRadius;
    },
    getBounds: function() {
      var half = [this._radius, this._radiusY || this._radius];
      return new L.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
    },
    setStyle: L.Path.prototype.setStyle,
    _project: function() {
      var lng = this._latlng.lng,
          lat = this._latlng.lat,
          map = this._map,
          crs = map.options.crs;
      if (crs.distance === L.CRS.Earth.distance) {
        var d = Math.PI / 180,
            latR = (this._mRadius / L.CRS.Earth.R) / d,
            top = map.project([lat + latR, lng]),
            bottom = map.project([lat - latR, lng]),
            p = top.add(bottom).divideBy(2),
            lat2 = map.unproject(p).lat,
            lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
        if (isNaN(lngR) || lngR === 0) {
          lngR = latR / Math.cos(Math.PI / 180 * lat);
        }
        this._point = p.subtract(map.getPixelOrigin());
        this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
        this._radiusY = Math.max(Math.round(p.y - top.y), 1);
      } else {
        var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = map.latLngToLayerPoint(this._latlng);
        this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
      }
      this._updateBounds();
    }
  });
  L.circle = function(latlng, options, legacyOptions) {
    return new L.Circle(latlng, options, legacyOptions);
  };
  L.SVG = L.Renderer.extend({
    getEvents: function() {
      var events = L.Renderer.prototype.getEvents.call(this);
      events.zoomstart = this._onZoomStart;
      return events;
    },
    _initContainer: function() {
      this._container = L.SVG.create('svg');
      this._container.setAttribute('pointer-events', 'none');
      this._rootGroup = L.SVG.create('g');
      this._container.appendChild(this._rootGroup);
    },
    _onZoomStart: function() {
      this._update();
    },
    _update: function() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }
      L.Renderer.prototype._update.call(this);
      var b = this._bounds,
          size = b.getSize(),
          container = this._container;
      if (!this._svgSize || !this._svgSize.equals(size)) {
        this._svgSize = size;
        container.setAttribute('width', size.x);
        container.setAttribute('height', size.y);
      }
      L.DomUtil.setPosition(container, b.min);
      container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
      this.fire('update');
    },
    _initPath: function(layer) {
      var path = layer._path = L.SVG.create('path');
      if (layer.options.className) {
        L.DomUtil.addClass(path, layer.options.className);
      }
      if (layer.options.interactive) {
        L.DomUtil.addClass(path, 'leaflet-interactive');
      }
      this._updateStyle(layer);
    },
    _addPath: function(layer) {
      this._rootGroup.appendChild(layer._path);
      layer.addInteractiveTarget(layer._path);
    },
    _removePath: function(layer) {
      L.DomUtil.remove(layer._path);
      layer.removeInteractiveTarget(layer._path);
    },
    _updatePath: function(layer) {
      layer._project();
      layer._update();
    },
    _updateStyle: function(layer) {
      var path = layer._path,
          options = layer.options;
      if (!path) {
        return;
      }
      if (options.stroke) {
        path.setAttribute('stroke', options.color);
        path.setAttribute('stroke-opacity', options.opacity);
        path.setAttribute('stroke-width', options.weight);
        path.setAttribute('stroke-linecap', options.lineCap);
        path.setAttribute('stroke-linejoin', options.lineJoin);
        if (options.dashArray) {
          path.setAttribute('stroke-dasharray', options.dashArray);
        } else {
          path.removeAttribute('stroke-dasharray');
        }
        if (options.dashOffset) {
          path.setAttribute('stroke-dashoffset', options.dashOffset);
        } else {
          path.removeAttribute('stroke-dashoffset');
        }
      } else {
        path.setAttribute('stroke', 'none');
      }
      if (options.fill) {
        path.setAttribute('fill', options.fillColor || options.color);
        path.setAttribute('fill-opacity', options.fillOpacity);
        path.setAttribute('fill-rule', options.fillRule || 'evenodd');
      } else {
        path.setAttribute('fill', 'none');
      }
    },
    _updatePoly: function(layer, closed) {
      this._setPath(layer, L.SVG.pointsToPath(layer._parts, closed));
    },
    _updateCircle: function(layer) {
      var p = layer._point,
          r = layer._radius,
          r2 = layer._radiusY || r,
          arc = 'a' + r + ',' + r2 + ' 0 1,0 ';
      var d = layer._empty() ? 'M0 0' : 'M' + (p.x - r) + ',' + p.y + arc + (r * 2) + ',0 ' + arc + (-r * 2) + ',0 ';
      this._setPath(layer, d);
    },
    _setPath: function(layer, path) {
      layer._path.setAttribute('d', path);
    },
    _bringToFront: function(layer) {
      L.DomUtil.toFront(layer._path);
    },
    _bringToBack: function(layer) {
      L.DomUtil.toBack(layer._path);
    }
  });
  L.extend(L.SVG, {
    create: function(name) {
      return document.createElementNS('http://www.w3.org/2000/svg', name);
    },
    pointsToPath: function(rings, closed) {
      var str = '',
          i,
          j,
          len,
          len2,
          points,
          p;
      for (i = 0, len = rings.length; i < len; i++) {
        points = rings[i];
        for (j = 0, len2 = points.length; j < len2; j++) {
          p = points[j];
          str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
        }
        str += closed ? (L.Browser.svg ? 'z' : 'x') : '';
      }
      return str || 'M0 0';
    }
  });
  L.Browser.svg = !!(document.createElementNS && L.SVG.create('svg').createSVGRect);
  L.svg = function(options) {
    return L.Browser.svg || L.Browser.vml ? new L.SVG(options) : null;
  };
  L.Browser.vml = !L.Browser.svg && (function() {
    try {
      var div = document.createElement('div');
      div.innerHTML = '<v:shape adj="1"/>';
      var shape = div.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      return shape && (typeof shape.adj === 'object');
    } catch (e) {
      return false;
    }
  }());
  L.SVG.include(!L.Browser.vml ? {} : {
    _initContainer: function() {
      this._container = L.DomUtil.create('div', 'leaflet-vml-container');
    },
    _update: function() {
      if (this._map._animatingZoom) {
        return;
      }
      L.Renderer.prototype._update.call(this);
      this.fire('update');
    },
    _initPath: function(layer) {
      var container = layer._container = L.SVG.create('shape');
      L.DomUtil.addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));
      container.coordsize = '1 1';
      layer._path = L.SVG.create('path');
      container.appendChild(layer._path);
      this._updateStyle(layer);
    },
    _addPath: function(layer) {
      var container = layer._container;
      this._container.appendChild(container);
      if (layer.options.interactive) {
        layer.addInteractiveTarget(container);
      }
    },
    _removePath: function(layer) {
      var container = layer._container;
      L.DomUtil.remove(container);
      layer.removeInteractiveTarget(container);
    },
    _updateStyle: function(layer) {
      var stroke = layer._stroke,
          fill = layer._fill,
          options = layer.options,
          container = layer._container;
      container.stroked = !!options.stroke;
      container.filled = !!options.fill;
      if (options.stroke) {
        if (!stroke) {
          stroke = layer._stroke = L.SVG.create('stroke');
        }
        container.appendChild(stroke);
        stroke.weight = options.weight + 'px';
        stroke.color = options.color;
        stroke.opacity = options.opacity;
        if (options.dashArray) {
          stroke.dashStyle = L.Util.isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
        } else {
          stroke.dashStyle = '';
        }
        stroke.endcap = options.lineCap.replace('butt', 'flat');
        stroke.joinstyle = options.lineJoin;
      } else if (stroke) {
        container.removeChild(stroke);
        layer._stroke = null;
      }
      if (options.fill) {
        if (!fill) {
          fill = layer._fill = L.SVG.create('fill');
        }
        container.appendChild(fill);
        fill.color = options.fillColor || options.color;
        fill.opacity = options.fillOpacity;
      } else if (fill) {
        container.removeChild(fill);
        layer._fill = null;
      }
    },
    _updateCircle: function(layer) {
      var p = layer._point.round(),
          r = Math.round(layer._radius),
          r2 = Math.round(layer._radiusY || r);
      this._setPath(layer, layer._empty() ? 'M0 0' : 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
    },
    _setPath: function(layer, path) {
      layer._path.v = path;
    },
    _bringToFront: function(layer) {
      L.DomUtil.toFront(layer._container);
    },
    _bringToBack: function(layer) {
      L.DomUtil.toBack(layer._container);
    }
  });
  if (L.Browser.vml) {
    L.SVG.create = (function() {
      try {
        document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
        return function(name) {
          return document.createElement('<lvml:' + name + ' class="lvml">');
        };
      } catch (e) {
        return function(name) {
          return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }
    })();
  }
  L.Canvas = L.Renderer.extend({
    onAdd: function() {
      L.Renderer.prototype.onAdd.call(this);
      this._layers = this._layers || {};
      this._draw();
    },
    _initContainer: function() {
      var container = this._container = document.createElement('canvas');
      L.DomEvent.on(container, 'mousemove', L.Util.throttle(this._onMouseMove, 32, this), this).on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this).on(container, 'mouseout', this._handleMouseOut, this);
      this._ctx = container.getContext('2d');
    },
    _update: function() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }
      this._drawnLayers = {};
      L.Renderer.prototype._update.call(this);
      var b = this._bounds,
          container = this._container,
          size = b.getSize(),
          m = L.Browser.retina ? 2 : 1;
      L.DomUtil.setPosition(container, b.min);
      container.width = m * size.x;
      container.height = m * size.y;
      container.style.width = size.x + 'px';
      container.style.height = size.y + 'px';
      if (L.Browser.retina) {
        this._ctx.scale(2, 2);
      }
      this._ctx.translate(-b.min.x, -b.min.y);
      this.fire('update');
    },
    _initPath: function(layer) {
      this._updateDashArray(layer);
      this._layers[L.stamp(layer)] = layer;
    },
    _addPath: L.Util.falseFn,
    _removePath: function(layer) {
      layer._removed = true;
      this._requestRedraw(layer);
    },
    _updatePath: function(layer) {
      this._redrawBounds = layer._pxBounds;
      this._draw(true);
      layer._project();
      layer._update();
      this._draw();
      this._redrawBounds = null;
    },
    _updateStyle: function(layer) {
      this._updateDashArray(layer);
      this._requestRedraw(layer);
    },
    _updateDashArray: function(layer) {
      if (layer.options.dashArray) {
        var parts = layer.options.dashArray.split(','),
            dashArray = [],
            i;
        for (i = 0; i < parts.length; i++) {
          dashArray.push(Number(parts[i]));
        }
        layer.options._dashArray = dashArray;
      }
    },
    _requestRedraw: function(layer) {
      if (!this._map) {
        return;
      }
      var padding = (layer.options.weight || 0) + 1;
      this._redrawBounds = this._redrawBounds || new L.Bounds();
      this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
      this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
      this._redrawRequest = this._redrawRequest || L.Util.requestAnimFrame(this._redraw, this);
    },
    _redraw: function() {
      this._redrawRequest = null;
      this._draw(true);
      this._draw();
      this._redrawBounds = null;
    },
    _draw: function(clear) {
      this._clear = clear;
      var layer,
          bounds = this._redrawBounds;
      this._ctx.save();
      if (bounds) {
        this._ctx.beginPath();
        this._ctx.rect(bounds.min.x, bounds.min.y, bounds.max.x - bounds.min.x, bounds.max.y - bounds.min.y);
        this._ctx.clip();
      }
      for (var id in this._layers) {
        layer = this._layers[id];
        if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
          layer._updatePath();
        }
        if (clear && layer._removed) {
          delete layer._removed;
          delete this._layers[id];
        }
      }
      this._ctx.restore();
    },
    _updatePoly: function(layer, closed) {
      var i,
          j,
          len2,
          p,
          parts = layer._parts,
          len = parts.length,
          ctx = this._ctx;
      if (!len) {
        return;
      }
      this._drawnLayers[layer._leaflet_id] = layer;
      ctx.beginPath();
      if (ctx.setLineDash) {
        ctx.setLineDash(layer.options && layer.options._dashArray || []);
      }
      for (i = 0; i < len; i++) {
        for (j = 0, len2 = parts[i].length; j < len2; j++) {
          p = parts[i][j];
          ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
        }
        if (closed) {
          ctx.closePath();
        }
      }
      this._fillStroke(ctx, layer);
    },
    _updateCircle: function(layer) {
      if (layer._empty()) {
        return;
      }
      var p = layer._point,
          ctx = this._ctx,
          r = layer._radius,
          s = (layer._radiusY || r) / r;
      this._drawnLayers[layer._leaflet_id] = layer;
      if (s !== 1) {
        ctx.save();
        ctx.scale(1, s);
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
      if (s !== 1) {
        ctx.restore();
      }
      this._fillStroke(ctx, layer);
    },
    _fillStroke: function(ctx, layer) {
      var clear = this._clear,
          options = layer.options;
      ctx.globalCompositeOperation = clear ? 'destination-out' : 'source-over';
      if (options.fill) {
        ctx.globalAlpha = clear ? 1 : options.fillOpacity;
        ctx.fillStyle = options.fillColor || options.color;
        ctx.fill(options.fillRule || 'evenodd');
      }
      if (options.stroke && options.weight !== 0) {
        ctx.globalAlpha = clear ? 1 : options.opacity;
        layer._prevWeight = ctx.lineWidth = clear ? layer._prevWeight + 1 : options.weight;
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineJoin = options.lineJoin;
        ctx.stroke();
      }
    },
    _onClick: function(e) {
      var point = this._map.mouseEventToLayerPoint(e),
          layers = [],
          layer;
      for (var id in this._layers) {
        layer = this._layers[id];
        if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
          L.DomEvent._fakeStop(e);
          layers.push(layer);
        }
      }
      if (layers.length) {
        this._fireEvent(layers, e);
      }
    },
    _onMouseMove: function(e) {
      if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
        return;
      }
      var point = this._map.mouseEventToLayerPoint(e);
      this._handleMouseOut(e, point);
      this._handleMouseHover(e, point);
    },
    _handleMouseOut: function(e, point) {
      var layer = this._hoveredLayer;
      if (layer && (e.type === 'mouseout' || !layer._containsPoint(point))) {
        L.DomUtil.removeClass(this._container, 'leaflet-interactive');
        this._fireEvent([layer], e, 'mouseout');
        this._hoveredLayer = null;
      }
    },
    _handleMouseHover: function(e, point) {
      var id,
          layer;
      for (id in this._drawnLayers) {
        layer = this._drawnLayers[id];
        if (layer.options.interactive && layer._containsPoint(point)) {
          L.DomUtil.addClass(this._container, 'leaflet-interactive');
          this._fireEvent([layer], e, 'mouseover');
          this._hoveredLayer = layer;
        }
      }
      if (this._hoveredLayer) {
        this._fireEvent([this._hoveredLayer], e);
      }
    },
    _fireEvent: function(layers, e, type) {
      this._map._fireDOMEvent(e, type || e.type, layers);
    },
    _bringToFront: L.Util.falseFn,
    _bringToBack: L.Util.falseFn
  });
  L.Browser.canvas = (function() {
    return !!document.createElement('canvas').getContext;
  }());
  L.canvas = function(options) {
    return L.Browser.canvas ? new L.Canvas(options) : null;
  };
  L.Polyline.prototype._containsPoint = function(p, closed) {
    var i,
        j,
        k,
        len,
        len2,
        part,
        w = this._clickTolerance();
    if (!this._pxBounds.contains(p)) {
      return false;
    }
    for (i = 0, len = this._parts.length; i < len; i++) {
      part = this._parts[i];
      for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
        if (!closed && (j === 0)) {
          continue;
        }
        if (L.LineUtil.pointToSegmentDistance(p, part[k], part[j]) <= w) {
          return true;
        }
      }
    }
    return false;
  };
  L.Polygon.prototype._containsPoint = function(p) {
    var inside = false,
        part,
        p1,
        p2,
        i,
        j,
        k,
        len,
        len2;
    if (!this._pxBounds.contains(p)) {
      return false;
    }
    for (i = 0, len = this._parts.length; i < len; i++) {
      part = this._parts[i];
      for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
        p1 = part[j];
        p2 = part[k];
        if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
          inside = !inside;
        }
      }
    }
    return inside || L.Polyline.prototype._containsPoint.call(this, p, true);
  };
  L.CircleMarker.prototype._containsPoint = function(p) {
    return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
  };
  L.GeoJSON = L.FeatureGroup.extend({
    initialize: function(geojson, options) {
      L.setOptions(this, options);
      this._layers = {};
      if (geojson) {
        this.addData(geojson);
      }
    },
    addData: function(geojson) {
      var features = L.Util.isArray(geojson) ? geojson : geojson.features,
          i,
          len,
          feature;
      if (features) {
        for (i = 0, len = features.length; i < len; i++) {
          feature = features[i];
          if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
            this.addData(feature);
          }
        }
        return this;
      }
      var options = this.options;
      if (options.filter && !options.filter(geojson)) {
        return this;
      }
      var layer = L.GeoJSON.geometryToLayer(geojson, options);
      if (!layer) {
        return this;
      }
      layer.feature = L.GeoJSON.asFeature(geojson);
      layer.defaultOptions = layer.options;
      this.resetStyle(layer);
      if (options.onEachFeature) {
        options.onEachFeature(geojson, layer);
      }
      return this.addLayer(layer);
    },
    resetStyle: function(layer) {
      layer.options = L.Util.extend({}, layer.defaultOptions);
      this._setLayerStyle(layer, this.options.style);
      return this;
    },
    setStyle: function(style) {
      return this.eachLayer(function(layer) {
        this._setLayerStyle(layer, style);
      }, this);
    },
    _setLayerStyle: function(layer, style) {
      if (typeof style === 'function') {
        style = style(layer.feature);
      }
      if (layer.setStyle) {
        layer.setStyle(style);
      }
    }
  });
  L.extend(L.GeoJSON, {
    geometryToLayer: function(geojson, options) {
      var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
          coords = geometry ? geometry.coordinates : null,
          layers = [],
          pointToLayer = options && options.pointToLayer,
          coordsToLatLng = options && options.coordsToLatLng || this.coordsToLatLng,
          latlng,
          latlngs,
          i,
          len;
      if (!coords && !geometry) {
        return null;
      }
      switch (geometry.type) {
        case 'Point':
          latlng = coordsToLatLng(coords);
          return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);
        case 'MultiPoint':
          for (i = 0, len = coords.length; i < len; i++) {
            latlng = coordsToLatLng(coords[i]);
            layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
          }
          return new L.FeatureGroup(layers);
        case 'LineString':
        case 'MultiLineString':
          latlngs = this.coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, coordsToLatLng);
          return new L.Polyline(latlngs, options);
        case 'Polygon':
        case 'MultiPolygon':
          latlngs = this.coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, coordsToLatLng);
          return new L.Polygon(latlngs, options);
        case 'GeometryCollection':
          for (i = 0, len = geometry.geometries.length; i < len; i++) {
            var layer = this.geometryToLayer({
              geometry: geometry.geometries[i],
              type: 'Feature',
              properties: geojson.properties
            }, options);
            if (layer) {
              layers.push(layer);
            }
          }
          return new L.FeatureGroup(layers);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    },
    coordsToLatLng: function(coords) {
      return new L.LatLng(coords[1], coords[0], coords[2]);
    },
    coordsToLatLngs: function(coords, levelsDeep, coordsToLatLng) {
      var latlngs = [];
      for (var i = 0,
          len = coords.length,
          latlng; i < len; i++) {
        latlng = levelsDeep ? this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) : (coordsToLatLng || this.coordsToLatLng)(coords[i]);
        latlngs.push(latlng);
      }
      return latlngs;
    },
    latLngToCoords: function(latlng) {
      return latlng.alt !== undefined ? [latlng.lng, latlng.lat, latlng.alt] : [latlng.lng, latlng.lat];
    },
    latLngsToCoords: function(latlngs, levelsDeep, closed) {
      var coords = [];
      for (var i = 0,
          len = latlngs.length; i < len; i++) {
        coords.push(levelsDeep ? L.GeoJSON.latLngsToCoords(latlngs[i], levelsDeep - 1, closed) : L.GeoJSON.latLngToCoords(latlngs[i]));
      }
      if (!levelsDeep && closed) {
        coords.push(coords[0]);
      }
      return coords;
    },
    getFeature: function(layer, newGeometry) {
      return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
    },
    asFeature: function(geojson) {
      if (geojson.type === 'Feature') {
        return geojson;
      }
      return {
        type: 'Feature',
        properties: {},
        geometry: geojson
      };
    }
  });
  var PointToGeoJSON = {toGeoJSON: function() {
      return L.GeoJSON.getFeature(this, {
        type: 'Point',
        coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
      });
    }};
  L.Marker.include(PointToGeoJSON);
  L.Circle.include(PointToGeoJSON);
  L.CircleMarker.include(PointToGeoJSON);
  L.Polyline.prototype.toGeoJSON = function() {
    var multi = !L.Polyline._flat(this._latlngs);
    var coords = L.GeoJSON.latLngsToCoords(this._latlngs, multi ? 1 : 0);
    return L.GeoJSON.getFeature(this, {
      type: (multi ? 'Multi' : '') + 'LineString',
      coordinates: coords
    });
  };
  L.Polygon.prototype.toGeoJSON = function() {
    var holes = !L.Polyline._flat(this._latlngs),
        multi = holes && !L.Polyline._flat(this._latlngs[0]);
    var coords = L.GeoJSON.latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true);
    if (!holes) {
      coords = [coords];
    }
    return L.GeoJSON.getFeature(this, {
      type: (multi ? 'Multi' : '') + 'Polygon',
      coordinates: coords
    });
  };
  L.LayerGroup.include({
    toMultiPoint: function() {
      var coords = [];
      this.eachLayer(function(layer) {
        coords.push(layer.toGeoJSON().geometry.coordinates);
      });
      return L.GeoJSON.getFeature(this, {
        type: 'MultiPoint',
        coordinates: coords
      });
    },
    toGeoJSON: function() {
      var type = this.feature && this.feature.geometry && this.feature.geometry.type;
      if (type === 'MultiPoint') {
        return this.toMultiPoint();
      }
      var isGeometryCollection = type === 'GeometryCollection',
          jsons = [];
      this.eachLayer(function(layer) {
        if (layer.toGeoJSON) {
          var json = layer.toGeoJSON();
          jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
        }
      });
      if (isGeometryCollection) {
        return L.GeoJSON.getFeature(this, {
          geometries: jsons,
          type: 'GeometryCollection'
        });
      }
      return {
        type: 'FeatureCollection',
        features: jsons
      };
    }
  });
  L.geoJSON = function(geojson, options) {
    return new L.GeoJSON(geojson, options);
  };
  L.geoJson = L.geoJSON;
  var eventsKey = '_leaflet_events';
  L.DomEvent = {
    on: function(obj, types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this._on(obj, type, types[type], fn);
        }
      } else {
        types = L.Util.splitWords(types);
        for (var i = 0,
            len = types.length; i < len; i++) {
          this._on(obj, types[i], fn, context);
        }
      }
      return this;
    },
    off: function(obj, types, fn, context) {
      if (typeof types === 'object') {
        for (var type in types) {
          this._off(obj, type, types[type], fn);
        }
      } else {
        types = L.Util.splitWords(types);
        for (var i = 0,
            len = types.length; i < len; i++) {
          this._off(obj, types[i], fn, context);
        }
      }
      return this;
    },
    _on: function(obj, type, fn, context) {
      var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : '');
      if (obj[eventsKey] && obj[eventsKey][id]) {
        return this;
      }
      var handler = function(e) {
        return fn.call(context || obj, e || window.event);
      };
      var originalHandler = handler;
      if (L.Browser.pointer && type.indexOf('touch') === 0) {
        this.addPointerListener(obj, type, handler, id);
      } else if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
        this.addDoubleTapListener(obj, handler, id);
      } else if ('addEventListener' in obj) {
        if (type === 'mousewheel') {
          obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
        } else if ((type === 'mouseenter') || (type === 'mouseleave')) {
          handler = function(e) {
            e = e || window.event;
            if (L.DomEvent._isExternalTarget(obj, e)) {
              originalHandler(e);
            }
          };
          obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
        } else {
          if (type === 'click' && L.Browser.android) {
            handler = function(e) {
              return L.DomEvent._filterClick(e, originalHandler);
            };
          }
          obj.addEventListener(type, handler, false);
        }
      } else if ('attachEvent' in obj) {
        obj.attachEvent('on' + type, handler);
      }
      obj[eventsKey] = obj[eventsKey] || {};
      obj[eventsKey][id] = handler;
      return this;
    },
    _off: function(obj, type, fn, context) {
      var id = type + L.stamp(fn) + (context ? '_' + L.stamp(context) : ''),
          handler = obj[eventsKey] && obj[eventsKey][id];
      if (!handler) {
        return this;
      }
      if (L.Browser.pointer && type.indexOf('touch') === 0) {
        this.removePointerListener(obj, type, id);
      } else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
        this.removeDoubleTapListener(obj, id);
      } else if ('removeEventListener' in obj) {
        if (type === 'mousewheel') {
          obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
        } else {
          obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type, handler, false);
        }
      } else if ('detachEvent' in obj) {
        obj.detachEvent('on' + type, handler);
      }
      obj[eventsKey][id] = null;
      return this;
    },
    stopPropagation: function(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else if (e.originalEvent) {
        e.originalEvent._stopped = true;
      } else {
        e.cancelBubble = true;
      }
      L.DomEvent._skipped(e);
      return this;
    },
    disableScrollPropagation: function(el) {
      return L.DomEvent.on(el, 'mousewheel', L.DomEvent.stopPropagation);
    },
    disableClickPropagation: function(el) {
      var stop = L.DomEvent.stopPropagation;
      L.DomEvent.on(el, L.Draggable.START.join(' '), stop);
      return L.DomEvent.on(el, {
        click: L.DomEvent._fakeStop,
        dblclick: stop
      });
    },
    preventDefault: function(e) {
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      return this;
    },
    stop: function(e) {
      return L.DomEvent.preventDefault(e).stopPropagation(e);
    },
    getMousePosition: function(e, container) {
      if (!container) {
        return new L.Point(e.clientX, e.clientY);
      }
      var rect = container.getBoundingClientRect();
      return new L.Point(e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop);
    },
    _wheelPxFactor: (L.Browser.win && L.Browser.chrome) ? 2 : L.Browser.gecko ? window.devicePixelRatio : 1,
    getWheelDelta: function(e) {
      return (L.Browser.edge) ? e.wheelDeltaY / 2 : (e.deltaY && e.deltaMode === 0) ? -e.deltaY / L.DomEvent._wheelPxFactor : (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : (e.deltaX || e.deltaZ) ? 0 : e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : e.detail ? e.detail / -32765 * 60 : 0;
    },
    _skipEvents: {},
    _fakeStop: function(e) {
      L.DomEvent._skipEvents[e.type] = true;
    },
    _skipped: function(e) {
      var skipped = this._skipEvents[e.type];
      this._skipEvents[e.type] = false;
      return skipped;
    },
    _isExternalTarget: function(el, e) {
      var related = e.relatedTarget;
      if (!related) {
        return true;
      }
      try {
        while (related && (related !== el)) {
          related = related.parentNode;
        }
      } catch (err) {
        return false;
      }
      return (related !== el);
    },
    _filterClick: function(e, handler) {
      var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
          elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);
      if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
        L.DomEvent.stop(e);
        return;
      }
      L.DomEvent._lastClick = timeStamp;
      handler(e);
    }
  };
  L.DomEvent.addListener = L.DomEvent.on;
  L.DomEvent.removeListener = L.DomEvent.off;
  L.Draggable = L.Evented.extend({
    options: {clickTolerance: 3},
    statics: {
      START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
      END: {
        mousedown: 'mouseup',
        touchstart: 'touchend',
        pointerdown: 'touchend',
        MSPointerDown: 'touchend'
      },
      MOVE: {
        mousedown: 'mousemove',
        touchstart: 'touchmove',
        pointerdown: 'touchmove',
        MSPointerDown: 'touchmove'
      }
    },
    initialize: function(element, dragStartTarget, preventOutline) {
      this._element = element;
      this._dragStartTarget = dragStartTarget || element;
      this._preventOutline = preventOutline;
    },
    enable: function() {
      if (this._enabled) {
        return;
      }
      L.DomEvent.on(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);
      this._enabled = true;
    },
    disable: function() {
      if (!this._enabled) {
        return;
      }
      L.DomEvent.off(this._dragStartTarget, L.Draggable.START.join(' '), this._onDown, this);
      this._enabled = false;
      this._moved = false;
    },
    _onDown: function(e) {
      if (e._simulated || !this._enabled) {
        return;
      }
      this._moved = false;
      if (L.DomUtil.hasClass(this._element, 'leaflet-zoom-anim')) {
        return;
      }
      if (L.Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches) || !this._enabled) {
        return;
      }
      L.Draggable._dragging = true;
      if (this._preventOutline) {
        L.DomUtil.preventOutline(this._element);
      }
      L.DomUtil.disableImageDrag();
      L.DomUtil.disableTextSelection();
      if (this._moving) {
        return;
      }
      this.fire('down');
      var first = e.touches ? e.touches[0] : e;
      this._startPoint = new L.Point(first.clientX, first.clientY);
      L.DomEvent.on(document, L.Draggable.MOVE[e.type], this._onMove, this).on(document, L.Draggable.END[e.type], this._onUp, this);
    },
    _onMove: function(e) {
      if (e._simulated || !this._enabled) {
        return;
      }
      if (e.touches && e.touches.length > 1) {
        this._moved = true;
        return;
      }
      var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
          newPoint = new L.Point(first.clientX, first.clientY),
          offset = newPoint.subtract(this._startPoint);
      if (!offset.x && !offset.y) {
        return;
      }
      if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
        return;
      }
      L.DomEvent.preventDefault(e);
      if (!this._moved) {
        this.fire('dragstart');
        this._moved = true;
        this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);
        L.DomUtil.addClass(document.body, 'leaflet-dragging');
        this._lastTarget = e.target || e.srcElement;
        if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
          this._lastTarget = this._lastTarget.correspondingUseElement;
        }
        L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
      }
      this._newPos = this._startPos.add(offset);
      this._moving = true;
      L.Util.cancelAnimFrame(this._animRequest);
      this._lastEvent = e;
      this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true);
    },
    _updatePosition: function() {
      var e = {originalEvent: this._lastEvent};
      this.fire('predrag', e);
      L.DomUtil.setPosition(this._element, this._newPos);
      this.fire('drag', e);
    },
    _onUp: function(e) {
      if (e._simulated || !this._enabled) {
        return;
      }
      L.DomUtil.removeClass(document.body, 'leaflet-dragging');
      if (this._lastTarget) {
        L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
        this._lastTarget = null;
      }
      for (var i in L.Draggable.MOVE) {
        L.DomEvent.off(document, L.Draggable.MOVE[i], this._onMove, this).off(document, L.Draggable.END[i], this._onUp, this);
      }
      L.DomUtil.enableImageDrag();
      L.DomUtil.enableTextSelection();
      if (this._moved && this._moving) {
        L.Util.cancelAnimFrame(this._animRequest);
        this.fire('dragend', {distance: this._newPos.distanceTo(this._startPos)});
      }
      this._moving = false;
      L.Draggable._dragging = false;
    }
  });
  L.Handler = L.Class.extend({
    initialize: function(map) {
      this._map = map;
    },
    enable: function() {
      if (this._enabled) {
        return this;
      }
      this._enabled = true;
      this.addHooks();
      return this;
    },
    disable: function() {
      if (!this._enabled) {
        return this;
      }
      this._enabled = false;
      this.removeHooks();
      return this;
    },
    enabled: function() {
      return !!this._enabled;
    }
  });
  L.Map.mergeOptions({
    dragging: true,
    inertia: !L.Browser.android23,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: Infinity,
    easeLinearity: 0.2,
    worldCopyJump: false,
    maxBoundsViscosity: 0.0
  });
  L.Map.Drag = L.Handler.extend({
    addHooks: function() {
      if (!this._draggable) {
        var map = this._map;
        this._draggable = new L.Draggable(map._mapPane, map._container);
        this._draggable.on({
          down: this._onDown,
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this);
        this._draggable.on('predrag', this._onPreDragLimit, this);
        if (map.options.worldCopyJump) {
          this._draggable.on('predrag', this._onPreDragWrap, this);
          map.on('zoomend', this._onZoomEnd, this);
          map.whenReady(this._onZoomEnd, this);
        }
      }
      L.DomUtil.addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
      this._draggable.enable();
      this._positions = [];
      this._times = [];
    },
    removeHooks: function() {
      L.DomUtil.removeClass(this._map._container, 'leaflet-grab');
      L.DomUtil.removeClass(this._map._container, 'leaflet-touch-drag');
      this._draggable.disable();
    },
    moved: function() {
      return this._draggable && this._draggable._moved;
    },
    moving: function() {
      return this._draggable && this._draggable._moving;
    },
    _onDown: function() {
      this._map._stop();
    },
    _onDragStart: function() {
      var map = this._map;
      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var bounds = L.latLngBounds(this._map.options.maxBounds);
        this._offsetLimit = L.bounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
        this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
      } else {
        this._offsetLimit = null;
      }
      map.fire('movestart').fire('dragstart');
      if (map.options.inertia) {
        this._positions = [];
        this._times = [];
      }
    },
    _onDrag: function(e) {
      if (this._map.options.inertia) {
        var time = this._lastTime = +new Date(),
            pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(pos);
        this._times.push(time);
        if (time - this._times[0] > 50) {
          this._positions.shift();
          this._times.shift();
        }
      }
      this._map.fire('move', e).fire('drag', e);
    },
    _onZoomEnd: function() {
      var pxCenter = this._map.getSize().divideBy(2),
          pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);
      this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
      this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function(value, threshold) {
      return value - (value - threshold) * this._viscosity;
    },
    _onPreDragLimit: function() {
      if (!this._viscosity || !this._offsetLimit) {
        return;
      }
      var offset = this._draggable._newPos.subtract(this._draggable._startPos);
      var limit = this._offsetLimit;
      if (offset.x < limit.min.x) {
        offset.x = this._viscousLimit(offset.x, limit.min.x);
      }
      if (offset.y < limit.min.y) {
        offset.y = this._viscousLimit(offset.y, limit.min.y);
      }
      if (offset.x > limit.max.x) {
        offset.x = this._viscousLimit(offset.x, limit.max.x);
      }
      if (offset.y > limit.max.y) {
        offset.y = this._viscousLimit(offset.y, limit.max.y);
      }
      this._draggable._newPos = this._draggable._startPos.add(offset);
    },
    _onPreDragWrap: function() {
      var worldWidth = this._worldWidth,
          halfWidth = Math.round(worldWidth / 2),
          dx = this._initialWorldOffset,
          x = this._draggable._newPos.x,
          newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
          newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
          newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
      this._draggable._absPos = this._draggable._newPos.clone();
      this._draggable._newPos.x = newX;
    },
    _onDragEnd: function(e) {
      var map = this._map,
          options = map.options,
          noInertia = !options.inertia || this._times.length < 2;
      map.fire('dragend', e);
      if (noInertia) {
        map.fire('moveend');
      } else {
        var direction = this._lastPos.subtract(this._positions[0]),
            duration = (this._lastTime - this._times[0]) / 1000,
            ease = options.easeLinearity,
            speedVector = direction.multiplyBy(ease / duration),
            speed = speedVector.distanceTo([0, 0]),
            limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
            limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
            decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
            offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
        if (!offset.x && !offset.y) {
          map.fire('moveend');
        } else {
          offset = map._limitOffset(offset, map.options.maxBounds);
          L.Util.requestAnimFrame(function() {
            map.panBy(offset, {
              duration: decelerationDuration,
              easeLinearity: ease,
              noMoveStart: true,
              animate: true
            });
          });
        }
      }
    }
  });
  L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);
  L.Map.mergeOptions({doubleClickZoom: true});
  L.Map.DoubleClickZoom = L.Handler.extend({
    addHooks: function() {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function() {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function(e) {
      var map = this._map,
          oldZoom = map.getZoom(),
          delta = map.options.zoomDelta,
          zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
      if (map.options.doubleClickZoom === 'center') {
        map.setZoom(zoom);
      } else {
        map.setZoomAround(e.containerPoint, zoom);
      }
    }
  });
  L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);
  L.Map.mergeOptions({
    scrollWheelZoom: true,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  });
  L.Map.ScrollWheelZoom = L.Handler.extend({
    addHooks: function() {
      L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
      this._delta = 0;
    },
    removeHooks: function() {
      L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function(e) {
      var delta = L.DomEvent.getWheelDelta(e);
      var debounce = this._map.options.wheelDebounceTime;
      this._delta += delta;
      this._lastMousePos = this._map.mouseEventToContainerPoint(e);
      if (!this._startTime) {
        this._startTime = +new Date();
      }
      var left = Math.max(debounce - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer);
      this._timer = setTimeout(L.bind(this._performZoom, this), left);
      L.DomEvent.stop(e);
    },
    _performZoom: function() {
      var map = this._map,
          zoom = map.getZoom(),
          snap = this._map.options.zoomSnap || 0;
      map._stop();
      var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
          d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
          delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
      this._delta = 0;
      this._startTime = null;
      if (!delta) {
        return;
      }
      if (map.options.scrollWheelZoom === 'center') {
        map.setZoom(zoom + delta);
      } else {
        map.setZoomAround(this._lastMousePos, zoom + delta);
      }
    }
  });
  L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);
  L.extend(L.DomEvent, {
    _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
    _touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',
    addDoubleTapListener: function(obj, handler, id) {
      var last,
          touch,
          doubleTap = false,
          delay = 250;
      function onTouchStart(e) {
        var count;
        if (L.Browser.pointer) {
          count = L.DomEvent._pointersCount;
        } else {
          count = e.touches.length;
        }
        if (count > 1) {
          return;
        }
        var now = Date.now(),
            delta = now - (last || now);
        touch = e.touches ? e.touches[0] : e;
        doubleTap = (delta > 0 && delta <= delay);
        last = now;
      }
      function onTouchEnd() {
        if (doubleTap && !touch.cancelBubble) {
          if (L.Browser.pointer) {
            var newTouch = {},
                prop,
                i;
            for (i in touch) {
              prop = touch[i];
              newTouch[i] = prop && prop.bind ? prop.bind(touch) : prop;
            }
            touch = newTouch;
          }
          touch.type = 'dblclick';
          handler(touch);
          last = null;
        }
      }
      var pre = '_leaflet_',
          touchstart = this._touchstart,
          touchend = this._touchend;
      obj[pre + touchstart + id] = onTouchStart;
      obj[pre + touchend + id] = onTouchEnd;
      obj[pre + 'dblclick' + id] = handler;
      obj.addEventListener(touchstart, onTouchStart, false);
      obj.addEventListener(touchend, onTouchEnd, false);
      if (!L.Browser.edge) {
        obj.addEventListener('dblclick', handler, false);
      }
      return this;
    },
    removeDoubleTapListener: function(obj, id) {
      var pre = '_leaflet_',
          touchstart = obj[pre + this._touchstart + id],
          touchend = obj[pre + this._touchend + id],
          dblclick = obj[pre + 'dblclick' + id];
      obj.removeEventListener(this._touchstart, touchstart, false);
      obj.removeEventListener(this._touchend, touchend, false);
      if (!L.Browser.edge) {
        obj.removeEventListener('dblclick', dblclick, false);
      }
      return this;
    }
  });
  L.extend(L.DomEvent, {
    POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
    POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
    POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
    POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',
    TAG_WHITE_LIST: ['INPUT', 'SELECT', 'OPTION'],
    _pointers: {},
    _pointersCount: 0,
    addPointerListener: function(obj, type, handler, id) {
      if (type === 'touchstart') {
        this._addPointerStart(obj, handler, id);
      } else if (type === 'touchmove') {
        this._addPointerMove(obj, handler, id);
      } else if (type === 'touchend') {
        this._addPointerEnd(obj, handler, id);
      }
      return this;
    },
    removePointerListener: function(obj, type, id) {
      var handler = obj['_leaflet_' + type + id];
      if (type === 'touchstart') {
        obj.removeEventListener(this.POINTER_DOWN, handler, false);
      } else if (type === 'touchmove') {
        obj.removeEventListener(this.POINTER_MOVE, handler, false);
      } else if (type === 'touchend') {
        obj.removeEventListener(this.POINTER_UP, handler, false);
        obj.removeEventListener(this.POINTER_CANCEL, handler, false);
      }
      return this;
    },
    _addPointerStart: function(obj, handler, id) {
      var onDown = L.bind(function(e) {
        if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
          if (this.TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
            L.DomEvent.preventDefault(e);
          } else {
            return;
          }
        }
        this._handlePointer(e, handler);
      }, this);
      obj['_leaflet_touchstart' + id] = onDown;
      obj.addEventListener(this.POINTER_DOWN, onDown, false);
      if (!this._pointerDocListener) {
        var pointerUp = L.bind(this._globalPointerUp, this);
        document.documentElement.addEventListener(this.POINTER_DOWN, L.bind(this._globalPointerDown, this), true);
        document.documentElement.addEventListener(this.POINTER_MOVE, L.bind(this._globalPointerMove, this), true);
        document.documentElement.addEventListener(this.POINTER_UP, pointerUp, true);
        document.documentElement.addEventListener(this.POINTER_CANCEL, pointerUp, true);
        this._pointerDocListener = true;
      }
    },
    _globalPointerDown: function(e) {
      this._pointers[e.pointerId] = e;
      this._pointersCount++;
    },
    _globalPointerMove: function(e) {
      if (this._pointers[e.pointerId]) {
        this._pointers[e.pointerId] = e;
      }
    },
    _globalPointerUp: function(e) {
      delete this._pointers[e.pointerId];
      this._pointersCount--;
    },
    _handlePointer: function(e, handler) {
      e.touches = [];
      for (var i in this._pointers) {
        e.touches.push(this._pointers[i]);
      }
      e.changedTouches = [e];
      handler(e);
    },
    _addPointerMove: function(obj, handler, id) {
      var onMove = L.bind(function(e) {
        if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
          return;
        }
        this._handlePointer(e, handler);
      }, this);
      obj['_leaflet_touchmove' + id] = onMove;
      obj.addEventListener(this.POINTER_MOVE, onMove, false);
    },
    _addPointerEnd: function(obj, handler, id) {
      var onUp = L.bind(function(e) {
        this._handlePointer(e, handler);
      }, this);
      obj['_leaflet_touchend' + id] = onUp;
      obj.addEventListener(this.POINTER_UP, onUp, false);
      obj.addEventListener(this.POINTER_CANCEL, onUp, false);
    }
  });
  L.Map.mergeOptions({
    touchZoom: L.Browser.touch && !L.Browser.android23,
    bounceAtZoomLimits: true
  });
  L.Map.TouchZoom = L.Handler.extend({
    addHooks: function() {
      L.DomUtil.addClass(this._map._container, 'leaflet-touch-zoom');
      L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function() {
      L.DomUtil.removeClass(this._map._container, 'leaflet-touch-zoom');
      L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function(e) {
      var map = this._map;
      if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
        return;
      }
      var p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]);
      this._centerPoint = map.getSize()._divideBy(2);
      this._startLatLng = map.containerPointToLatLng(this._centerPoint);
      if (map.options.touchZoom !== 'center') {
        this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
      }
      this._startDist = p1.distanceTo(p2);
      this._startZoom = map.getZoom();
      this._moved = false;
      this._zooming = true;
      map._stop();
      L.DomEvent.on(document, 'touchmove', this._onTouchMove, this).on(document, 'touchend', this._onTouchEnd, this);
      L.DomEvent.preventDefault(e);
    },
    _onTouchMove: function(e) {
      if (!e.touches || e.touches.length !== 2 || !this._zooming) {
        return;
      }
      var map = this._map,
          p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]),
          scale = p1.distanceTo(p2) / this._startDist;
      this._zoom = map.getScaleZoom(scale, this._startZoom);
      if (!map.options.bounceAtZoomLimits && ((this._zoom < map.getMinZoom() && scale < 1) || (this._zoom > map.getMaxZoom() && scale > 1))) {
        this._zoom = map._limitZoom(this._zoom);
      }
      if (map.options.touchZoom === 'center') {
        this._center = this._startLatLng;
        if (scale === 1) {
          return;
        }
      } else {
        var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
        if (scale === 1 && delta.x === 0 && delta.y === 0) {
          return;
        }
        this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
      }
      if (!this._moved) {
        map._moveStart(true);
        this._moved = true;
      }
      L.Util.cancelAnimFrame(this._animRequest);
      var moveFn = L.bind(map._move, map, this._center, this._zoom, {
        pinch: true,
        round: false
      });
      this._animRequest = L.Util.requestAnimFrame(moveFn, this, true);
      L.DomEvent.preventDefault(e);
    },
    _onTouchEnd: function() {
      if (!this._moved || !this._zooming) {
        this._zooming = false;
        return;
      }
      this._zooming = false;
      L.Util.cancelAnimFrame(this._animRequest);
      L.DomEvent.off(document, 'touchmove', this._onTouchMove).off(document, 'touchend', this._onTouchEnd);
      if (this._map.options.zoomAnimation) {
        this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
      } else {
        this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    }
  });
  L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);
  L.Map.mergeOptions({
    tap: true,
    tapTolerance: 15
  });
  L.Map.Tap = L.Handler.extend({
    addHooks: function() {
      L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function() {
      L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function(e) {
      if (!e.touches) {
        return;
      }
      L.DomEvent.preventDefault(e);
      this._fireClick = true;
      if (e.touches.length > 1) {
        this._fireClick = false;
        clearTimeout(this._holdTimeout);
        return;
      }
      var first = e.touches[0],
          el = first.target;
      this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);
      if (el.tagName && el.tagName.toLowerCase() === 'a') {
        L.DomUtil.addClass(el, 'leaflet-active');
      }
      this._holdTimeout = setTimeout(L.bind(function() {
        if (this._isTapValid()) {
          this._fireClick = false;
          this._onUp();
          this._simulateEvent('contextmenu', first);
        }
      }, this), 1000);
      this._simulateEvent('mousedown', first);
      L.DomEvent.on(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
    },
    _onUp: function(e) {
      clearTimeout(this._holdTimeout);
      L.DomEvent.off(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
      if (this._fireClick && e && e.changedTouches) {
        var first = e.changedTouches[0],
            el = first.target;
        if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
          L.DomUtil.removeClass(el, 'leaflet-active');
        }
        this._simulateEvent('mouseup', first);
        if (this._isTapValid()) {
          this._simulateEvent('click', first);
        }
      }
    },
    _isTapValid: function() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function(e) {
      var first = e.touches[0];
      this._newPos = new L.Point(first.clientX, first.clientY);
      this._simulateEvent('mousemove', first);
    },
    _simulateEvent: function(type, e) {
      var simulatedEvent = document.createEvent('MouseEvents');
      simulatedEvent._simulated = true;
      e.target._simulatedClick = true;
      simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
      e.target.dispatchEvent(simulatedEvent);
    }
  });
  if (L.Browser.touch && !L.Browser.pointer) {
    L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
  }
  L.Map.mergeOptions({boxZoom: true});
  L.Map.BoxZoom = L.Handler.extend({
    initialize: function(map) {
      this._map = map;
      this._container = map._container;
      this._pane = map._panes.overlayPane;
    },
    addHooks: function() {
      L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function() {
      L.DomEvent.off(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function() {
      return this._moved;
    },
    _resetState: function() {
      this._moved = false;
    },
    _onMouseDown: function(e) {
      if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) {
        return false;
      }
      this._resetState();
      L.DomUtil.disableTextSelection();
      L.DomUtil.disableImageDrag();
      this._startPoint = this._map.mouseEventToContainerPoint(e);
      L.DomEvent.on(document, {
        contextmenu: L.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function(e) {
      if (!this._moved) {
        this._moved = true;
        this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._container);
        L.DomUtil.addClass(this._container, 'leaflet-crosshair');
        this._map.fire('boxzoomstart');
      }
      this._point = this._map.mouseEventToContainerPoint(e);
      var bounds = new L.Bounds(this._point, this._startPoint),
          size = bounds.getSize();
      L.DomUtil.setPosition(this._box, bounds.min);
      this._box.style.width = size.x + 'px';
      this._box.style.height = size.y + 'px';
    },
    _finish: function() {
      if (this._moved) {
        L.DomUtil.remove(this._box);
        L.DomUtil.removeClass(this._container, 'leaflet-crosshair');
      }
      L.DomUtil.enableTextSelection();
      L.DomUtil.enableImageDrag();
      L.DomEvent.off(document, {
        contextmenu: L.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function(e) {
      if ((e.which !== 1) && (e.button !== 1)) {
        return;
      }
      this._finish();
      if (!this._moved) {
        return;
      }
      setTimeout(L.bind(this._resetState, this), 0);
      var bounds = new L.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
      this._map.fitBounds(bounds).fire('boxzoomend', {boxZoomBounds: bounds});
    },
    _onKeyDown: function(e) {
      if (e.keyCode === 27) {
        this._finish();
      }
    }
  });
  L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);
  L.Map.mergeOptions({
    keyboard: true,
    keyboardPanDelta: 80
  });
  L.Map.Keyboard = L.Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function(map) {
      this._map = map;
      this._setPanDelta(map.options.keyboardPanDelta);
      this._setZoomDelta(map.options.zoomDelta);
    },
    addHooks: function() {
      var container = this._map._container;
      if (container.tabIndex <= 0) {
        container.tabIndex = '0';
      }
      L.DomEvent.on(container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);
      this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function() {
      this._removeHooks();
      L.DomEvent.off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);
      this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function() {
      if (this._focused) {
        return;
      }
      var body = document.body,
          docEl = document.documentElement,
          top = body.scrollTop || docEl.scrollTop,
          left = body.scrollLeft || docEl.scrollLeft;
      this._map._container.focus();
      window.scrollTo(left, top);
    },
    _onFocus: function() {
      this._focused = true;
      this._map.fire('focus');
    },
    _onBlur: function() {
      this._focused = false;
      this._map.fire('blur');
    },
    _setPanDelta: function(panDelta) {
      var keys = this._panKeys = {},
          codes = this.keyCodes,
          i,
          len;
      for (i = 0, len = codes.left.length; i < len; i++) {
        keys[codes.left[i]] = [-1 * panDelta, 0];
      }
      for (i = 0, len = codes.right.length; i < len; i++) {
        keys[codes.right[i]] = [panDelta, 0];
      }
      for (i = 0, len = codes.down.length; i < len; i++) {
        keys[codes.down[i]] = [0, panDelta];
      }
      for (i = 0, len = codes.up.length; i < len; i++) {
        keys[codes.up[i]] = [0, -1 * panDelta];
      }
    },
    _setZoomDelta: function(zoomDelta) {
      var keys = this._zoomKeys = {},
          codes = this.keyCodes,
          i,
          len;
      for (i = 0, len = codes.zoomIn.length; i < len; i++) {
        keys[codes.zoomIn[i]] = zoomDelta;
      }
      for (i = 0, len = codes.zoomOut.length; i < len; i++) {
        keys[codes.zoomOut[i]] = -zoomDelta;
      }
    },
    _addHooks: function() {
      L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function() {
      L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }
      var key = e.keyCode,
          map = this._map,
          offset;
      if (key in this._panKeys) {
        if (map._panAnim && map._panAnim._inProgress) {
          return;
        }
        offset = this._panKeys[key];
        if (e.shiftKey) {
          offset = L.point(offset).multiplyBy(3);
        }
        map.panBy(offset);
        if (map.options.maxBounds) {
          map.panInsideBounds(map.options.maxBounds);
        }
      } else if (key in this._zoomKeys) {
        map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
      } else if (key === 27) {
        map.closePopup();
      } else {
        return;
      }
      L.DomEvent.stop(e);
    }
  });
  L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);
  L.Handler.MarkerDrag = L.Handler.extend({
    initialize: function(marker) {
      this._marker = marker;
    },
    addHooks: function() {
      var icon = this._marker._icon;
      if (!this._draggable) {
        this._draggable = new L.Draggable(icon, icon, true);
      }
      this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable();
      L.DomUtil.addClass(icon, 'leaflet-marker-draggable');
    },
    removeHooks: function() {
      this._draggable.off({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable();
      if (this._marker._icon) {
        L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
      }
    },
    moved: function() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function() {
      this._oldLatLng = this._marker.getLatLng();
      this._marker.closePopup().fire('movestart').fire('dragstart');
    },
    _onDrag: function(e) {
      var marker = this._marker,
          shadow = marker._shadow,
          iconPos = L.DomUtil.getPosition(marker._icon),
          latlng = marker._map.layerPointToLatLng(iconPos);
      if (shadow) {
        L.DomUtil.setPosition(shadow, iconPos);
      }
      marker._latlng = latlng;
      e.latlng = latlng;
      e.oldLatLng = this._oldLatLng;
      marker.fire('move', e).fire('drag', e);
    },
    _onDragEnd: function(e) {
      delete this._oldLatLng;
      this._marker.fire('moveend').fire('dragend', e);
    }
  });
  L.Control = L.Class.extend({
    options: {position: 'topright'},
    initialize: function(options) {
      L.setOptions(this, options);
    },
    getPosition: function() {
      return this.options.position;
    },
    setPosition: function(position) {
      var map = this._map;
      if (map) {
        map.removeControl(this);
      }
      this.options.position = position;
      if (map) {
        map.addControl(this);
      }
      return this;
    },
    getContainer: function() {
      return this._container;
    },
    addTo: function(map) {
      this.remove();
      this._map = map;
      var container = this._container = this.onAdd(map),
          pos = this.getPosition(),
          corner = map._controlCorners[pos];
      L.DomUtil.addClass(container, 'leaflet-control');
      if (pos.indexOf('bottom') !== -1) {
        corner.insertBefore(container, corner.firstChild);
      } else {
        corner.appendChild(container);
      }
      return this;
    },
    remove: function() {
      if (!this._map) {
        return this;
      }
      L.DomUtil.remove(this._container);
      if (this.onRemove) {
        this.onRemove(this._map);
      }
      this._map = null;
      return this;
    },
    _refocusOnMap: function(e) {
      if (this._map && e && e.screenX > 0 && e.screenY > 0) {
        this._map.getContainer().focus();
      }
    }
  });
  L.control = function(options) {
    return new L.Control(options);
  };
  L.Map.include({
    addControl: function(control) {
      control.addTo(this);
      return this;
    },
    removeControl: function(control) {
      control.remove();
      return this;
    },
    _initControlPos: function() {
      var corners = this._controlCorners = {},
          l = 'leaflet-',
          container = this._controlContainer = L.DomUtil.create('div', l + 'control-container', this._container);
      function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = L.DomUtil.create('div', className, container);
      }
      createCorner('top', 'left');
      createCorner('top', 'right');
      createCorner('bottom', 'left');
      createCorner('bottom', 'right');
    },
    _clearControlPos: function() {
      L.DomUtil.remove(this._controlContainer);
    }
  });
  L.Control.Zoom = L.Control.extend({
    options: {
      position: 'topleft',
      zoomInText: '+',
      zoomInTitle: 'Zoom in',
      zoomOutText: '-',
      zoomOutTitle: 'Zoom out'
    },
    onAdd: function(map) {
      var zoomName = 'leaflet-control-zoom',
          container = L.DomUtil.create('div', zoomName + ' leaflet-bar'),
          options = this.options;
      this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + '-in', container, this._zoomIn);
      this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + '-out', container, this._zoomOut);
      this._updateDisabled();
      map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      return container;
    },
    onRemove: function(map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },
    disable: function() {
      this._disabled = true;
      this._updateDisabled();
      return this;
    },
    enable: function() {
      this._disabled = false;
      this._updateDisabled();
      return this;
    },
    _zoomIn: function(e) {
      if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
        this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _zoomOut: function(e) {
      if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
        this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _createButton: function(html, title, className, container, fn) {
      var link = L.DomUtil.create('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;
      L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation).on(link, 'click', L.DomEvent.stop).on(link, 'click', fn, this).on(link, 'click', this._refocusOnMap, this);
      return link;
    },
    _updateDisabled: function() {
      var map = this._map,
          className = 'leaflet-disabled';
      L.DomUtil.removeClass(this._zoomInButton, className);
      L.DomUtil.removeClass(this._zoomOutButton, className);
      if (this._disabled || map._zoom === map.getMinZoom()) {
        L.DomUtil.addClass(this._zoomOutButton, className);
      }
      if (this._disabled || map._zoom === map.getMaxZoom()) {
        L.DomUtil.addClass(this._zoomInButton, className);
      }
    }
  });
  L.Map.mergeOptions({zoomControl: true});
  L.Map.addInitHook(function() {
    if (this.options.zoomControl) {
      this.zoomControl = new L.Control.Zoom();
      this.addControl(this.zoomControl);
    }
  });
  L.control.zoom = function(options) {
    return new L.Control.Zoom(options);
  };
  L.Control.Attribution = L.Control.extend({
    options: {
      position: 'bottomright',
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function(options) {
      L.setOptions(this, options);
      this._attributions = {};
    },
    onAdd: function(map) {
      map.attributionControl = this;
      this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
      if (L.DomEvent) {
        L.DomEvent.disableClickPropagation(this._container);
      }
      for (var i in map._layers) {
        if (map._layers[i].getAttribution) {
          this.addAttribution(map._layers[i].getAttribution());
        }
      }
      this._update();
      return this._container;
    },
    setPrefix: function(prefix) {
      this.options.prefix = prefix;
      this._update();
      return this;
    },
    addAttribution: function(text) {
      if (!text) {
        return this;
      }
      if (!this._attributions[text]) {
        this._attributions[text] = 0;
      }
      this._attributions[text]++;
      this._update();
      return this;
    },
    removeAttribution: function(text) {
      if (!text) {
        return this;
      }
      if (this._attributions[text]) {
        this._attributions[text]--;
        this._update();
      }
      return this;
    },
    _update: function() {
      if (!this._map) {
        return;
      }
      var attribs = [];
      for (var i in this._attributions) {
        if (this._attributions[i]) {
          attribs.push(i);
        }
      }
      var prefixAndAttribs = [];
      if (this.options.prefix) {
        prefixAndAttribs.push(this.options.prefix);
      }
      if (attribs.length) {
        prefixAndAttribs.push(attribs.join(', '));
      }
      this._container.innerHTML = prefixAndAttribs.join(' | ');
    }
  });
  L.Map.mergeOptions({attributionControl: true});
  L.Map.addInitHook(function() {
    if (this.options.attributionControl) {
      new L.Control.Attribution().addTo(this);
    }
  });
  L.control.attribution = function(options) {
    return new L.Control.Attribution(options);
  };
  L.Control.Scale = L.Control.extend({
    options: {
      position: 'bottomleft',
      maxWidth: 100,
      metric: true,
      imperial: true
    },
    onAdd: function(map) {
      var className = 'leaflet-control-scale',
          container = L.DomUtil.create('div', className),
          options = this.options;
      this._addScales(options, className + '-line', container);
      map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      map.whenReady(this._update, this);
      return container;
    },
    onRemove: function(map) {
      map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },
    _addScales: function(options, className, container) {
      if (options.metric) {
        this._mScale = L.DomUtil.create('div', className, container);
      }
      if (options.imperial) {
        this._iScale = L.DomUtil.create('div', className, container);
      }
    },
    _update: function() {
      var map = this._map,
          y = map.getSize().y / 2;
      var maxMeters = map.distance(map.containerPointToLatLng([0, y]), map.containerPointToLatLng([this.options.maxWidth, y]));
      this._updateScales(maxMeters);
    },
    _updateScales: function(maxMeters) {
      if (this.options.metric && maxMeters) {
        this._updateMetric(maxMeters);
      }
      if (this.options.imperial && maxMeters) {
        this._updateImperial(maxMeters);
      }
    },
    _updateMetric: function(maxMeters) {
      var meters = this._getRoundNum(maxMeters),
          label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
      this._updateScale(this._mScale, label, meters / maxMeters);
    },
    _updateImperial: function(maxMeters) {
      var maxFeet = maxMeters * 3.2808399,
          maxMiles,
          miles,
          feet;
      if (maxFeet > 5280) {
        maxMiles = maxFeet / 5280;
        miles = this._getRoundNum(maxMiles);
        this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);
      } else {
        feet = this._getRoundNum(maxFeet);
        this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
      }
    },
    _updateScale: function(scale, text, ratio) {
      scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
      scale.innerHTML = text;
    },
    _getRoundNum: function(num) {
      var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
          d = num / pow10;
      d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
      return pow10 * d;
    }
  });
  L.control.scale = function(options) {
    return new L.Control.Scale(options);
  };
  L.Control.Layers = L.Control.extend({
    options: {
      collapsed: true,
      position: 'topright',
      autoZIndex: true,
      hideSingleBase: false
    },
    initialize: function(baseLayers, overlays, options) {
      L.setOptions(this, options);
      this._layers = [];
      this._lastZIndex = 0;
      this._handlingClick = false;
      for (var i in baseLayers) {
        this._addLayer(baseLayers[i], i);
      }
      for (i in overlays) {
        this._addLayer(overlays[i], i, true);
      }
    },
    onAdd: function(map) {
      this._initLayout();
      this._update();
      this._map = map;
      map.on('zoomend', this._checkDisabledLayers, this);
      return this._container;
    },
    onRemove: function() {
      this._map.off('zoomend', this._checkDisabledLayers, this);
      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.off('add remove', this._onLayerChange, this);
      }
    },
    addBaseLayer: function(layer, name) {
      this._addLayer(layer, name);
      return (this._map) ? this._update() : this;
    },
    addOverlay: function(layer, name) {
      this._addLayer(layer, name, true);
      return (this._map) ? this._update() : this;
    },
    removeLayer: function(layer) {
      layer.off('add remove', this._onLayerChange, this);
      var obj = this._getLayer(L.stamp(layer));
      if (obj) {
        this._layers.splice(this._layers.indexOf(obj), 1);
      }
      return (this._map) ? this._update() : this;
    },
    expand: function() {
      L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
      this._form.style.height = null;
      var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
      if (acceptableHeight < this._form.clientHeight) {
        L.DomUtil.addClass(this._form, 'leaflet-control-layers-scrollbar');
        this._form.style.height = acceptableHeight + 'px';
      } else {
        L.DomUtil.removeClass(this._form, 'leaflet-control-layers-scrollbar');
      }
      this._checkDisabledLayers();
      return this;
    },
    collapse: function() {
      L.DomUtil.removeClass(this._container, 'leaflet-control-layers-expanded');
      return this;
    },
    _initLayout: function() {
      var className = 'leaflet-control-layers',
          container = this._container = L.DomUtil.create('div', className);
      container.setAttribute('aria-haspopup', true);
      L.DomEvent.disableClickPropagation(container);
      if (!L.Browser.touch) {
        L.DomEvent.disableScrollPropagation(container);
      }
      var form = this._form = L.DomUtil.create('form', className + '-list');
      if (this.options.collapsed) {
        if (!L.Browser.android) {
          L.DomEvent.on(container, {
            mouseenter: this.expand,
            mouseleave: this.collapse
          }, this);
        }
        var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
        link.href = '#';
        link.title = 'Layers';
        if (L.Browser.touch) {
          L.DomEvent.on(link, 'click', L.DomEvent.stop).on(link, 'click', this.expand, this);
        } else {
          L.DomEvent.on(link, 'focus', this.expand, this);
        }
        L.DomEvent.on(form, 'click', function() {
          setTimeout(L.bind(this._onInputClick, this), 0);
        }, this);
        this._map.on('click', this.collapse, this);
      } else {
        this.expand();
      }
      this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
      this._separator = L.DomUtil.create('div', className + '-separator', form);
      this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);
      container.appendChild(form);
    },
    _getLayer: function(id) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && L.stamp(this._layers[i].layer) === id) {
          return this._layers[i];
        }
      }
    },
    _addLayer: function(layer, name, overlay) {
      layer.on('add remove', this._onLayerChange, this);
      this._layers.push({
        layer: layer,
        name: name,
        overlay: overlay
      });
      if (this.options.autoZIndex && layer.setZIndex) {
        this._lastZIndex++;
        layer.setZIndex(this._lastZIndex);
      }
    },
    _update: function() {
      if (!this._container) {
        return this;
      }
      L.DomUtil.empty(this._baseLayersList);
      L.DomUtil.empty(this._overlaysList);
      var baseLayersPresent,
          overlaysPresent,
          i,
          obj,
          baseLayersCount = 0;
      for (i = 0; i < this._layers.length; i++) {
        obj = this._layers[i];
        this._addItem(obj);
        overlaysPresent = overlaysPresent || obj.overlay;
        baseLayersPresent = baseLayersPresent || !obj.overlay;
        baseLayersCount += !obj.overlay ? 1 : 0;
      }
      if (this.options.hideSingleBase) {
        baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
        this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
      }
      this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
      return this;
    },
    _onLayerChange: function(e) {
      if (!this._handlingClick) {
        this._update();
      }
      var obj = this._getLayer(L.stamp(e.target));
      var type = obj.overlay ? (e.type === 'add' ? 'overlayadd' : 'overlayremove') : (e.type === 'add' ? 'baselayerchange' : null);
      if (type) {
        this._map.fire(type, obj);
      }
    },
    _createRadioElement: function(name, checked) {
      var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : '') + '/>';
      var radioFragment = document.createElement('div');
      radioFragment.innerHTML = radioHtml;
      return radioFragment.firstChild;
    },
    _addItem: function(obj) {
      var label = document.createElement('label'),
          checked = this._map.hasLayer(obj.layer),
          input;
      if (obj.overlay) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'leaflet-control-layers-selector';
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement('leaflet-base-layers', checked);
      }
      input.layerId = L.stamp(obj.layer);
      L.DomEvent.on(input, 'click', this._onInputClick, this);
      var name = document.createElement('span');
      name.innerHTML = ' ' + obj.name;
      var holder = document.createElement('div');
      label.appendChild(holder);
      holder.appendChild(input);
      holder.appendChild(name);
      var container = obj.overlay ? this._overlaysList : this._baseLayersList;
      container.appendChild(label);
      this._checkDisabledLayers();
      return label;
    },
    _onInputClick: function() {
      var inputs = this._form.getElementsByTagName('input'),
          input,
          layer,
          hasLayer;
      var addedLayers = [],
          removedLayers = [];
      this._handlingClick = true;
      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        hasLayer = this._map.hasLayer(layer);
        if (input.checked && !hasLayer) {
          addedLayers.push(layer);
        } else if (!input.checked && hasLayer) {
          removedLayers.push(layer);
        }
      }
      for (i = 0; i < removedLayers.length; i++) {
        this._map.removeLayer(removedLayers[i]);
      }
      for (i = 0; i < addedLayers.length; i++) {
        this._map.addLayer(addedLayers[i]);
      }
      this._handlingClick = false;
      this._refocusOnMap();
    },
    _checkDisabledLayers: function() {
      var inputs = this._form.getElementsByTagName('input'),
          input,
          layer,
          zoom = this._map.getZoom();
      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) || (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);
      }
    },
    _expand: function() {
      return this.expand();
    },
    _collapse: function() {
      return this.collapse();
    }
  });
  L.control.layers = function(baseLayers, overlays, options) {
    return new L.Control.Layers(baseLayers, overlays, options);
  };
  L.PosAnimation = L.Evented.extend({
    run: function(el, newPos, duration, easeLinearity) {
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._duration = duration || 0.25;
      this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
      this._startPos = L.DomUtil.getPosition(el);
      this._offset = newPos.subtract(this._startPos);
      this._startTime = +new Date();
      this.fire('start');
      this._animate();
    },
    stop: function() {
      if (!this._inProgress) {
        return;
      }
      this._step(true);
      this._complete();
    },
    _animate: function() {
      this._animId = L.Util.requestAnimFrame(this._animate, this);
      this._step();
    },
    _step: function(round) {
      var elapsed = (+new Date()) - this._startTime,
          duration = this._duration * 1000;
      if (elapsed < duration) {
        this._runFrame(this._easeOut(elapsed / duration), round);
      } else {
        this._runFrame(1);
        this._complete();
      }
    },
    _runFrame: function(progress, round) {
      var pos = this._startPos.add(this._offset.multiplyBy(progress));
      if (round) {
        pos._round();
      }
      L.DomUtil.setPosition(this._el, pos);
      this.fire('step');
    },
    _complete: function() {
      L.Util.cancelAnimFrame(this._animId);
      this._inProgress = false;
      this.fire('end');
    },
    _easeOut: function(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  });
  L.Map.include({
    setView: function(center, zoom, options) {
      zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
      center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
      options = options || {};
      this._stop();
      if (this._loaded && !options.reset && options !== true) {
        if (options.animate !== undefined) {
          options.zoom = L.extend({animate: options.animate}, options.zoom);
          options.pan = L.extend({
            animate: options.animate,
            duration: options.duration
          }, options.pan);
        }
        var moved = (this._zoom !== zoom) ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
        if (moved) {
          clearTimeout(this._sizeTimer);
          return this;
        }
      }
      this._resetView(center, zoom);
      return this;
    },
    panBy: function(offset, options) {
      offset = L.point(offset).round();
      options = options || {};
      if (!offset.x && !offset.y) {
        return this.fire('moveend');
      }
      if (options.animate !== true && !this.getSize().contains(offset)) {
        this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
        return this;
      }
      if (!this._panAnim) {
        this._panAnim = new L.PosAnimation();
        this._panAnim.on({
          'step': this._onPanTransitionStep,
          'end': this._onPanTransitionEnd
        }, this);
      }
      if (!options.noMoveStart) {
        this.fire('movestart');
      }
      if (options.animate !== false) {
        L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');
        var newPos = this._getMapPanePos().subtract(offset).round();
        this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
      } else {
        this._rawPanBy(offset);
        this.fire('move').fire('moveend');
      }
      return this;
    },
    _onPanTransitionStep: function() {
      this.fire('move');
    },
    _onPanTransitionEnd: function() {
      L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
      this.fire('moveend');
    },
    _tryAnimatedPan: function(center, options) {
      var offset = this._getCenterOffset(center)._floor();
      if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
        return false;
      }
      this.panBy(offset, options);
      return true;
    }
  });
  L.Map.mergeOptions({
    zoomAnimation: true,
    zoomAnimationThreshold: 4
  });
  var zoomAnimated = L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.mobileOpera;
  if (zoomAnimated) {
    L.Map.addInitHook(function() {
      this._zoomAnimated = this.options.zoomAnimation;
      if (this._zoomAnimated) {
        this._createAnimProxy();
        L.DomEvent.on(this._proxy, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
      }
    });
  }
  L.Map.include(!zoomAnimated ? {} : {
    _createAnimProxy: function() {
      var proxy = this._proxy = L.DomUtil.create('div', 'leaflet-proxy leaflet-zoom-animated');
      this._panes.mapPane.appendChild(proxy);
      this.on('zoomanim', function(e) {
        var prop = L.DomUtil.TRANSFORM,
            transform = proxy.style[prop];
        L.DomUtil.setTransform(proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
        if (transform === proxy.style[prop] && this._animatingZoom) {
          this._onZoomTransitionEnd();
        }
      }, this);
      this.on('load moveend', function() {
        var c = this.getCenter(),
            z = this.getZoom();
        L.DomUtil.setTransform(proxy, this.project(c, z), this.getZoomScale(z, 1));
      }, this);
    },
    _catchTransitionEnd: function(e) {
      if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
        this._onZoomTransitionEnd();
      }
    },
    _nothingToAnimate: function() {
      return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
    },
    _tryAnimatedZoom: function(center, zoom, options) {
      if (this._animatingZoom) {
        return true;
      }
      options = options || {};
      if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
        return false;
      }
      var scale = this.getZoomScale(zoom),
          offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);
      if (options.animate !== true && !this.getSize().contains(offset)) {
        return false;
      }
      L.Util.requestAnimFrame(function() {
        this._moveStart(true)._animateZoom(center, zoom, true);
      }, this);
      return true;
    },
    _animateZoom: function(center, zoom, startAnim, noUpdate) {
      if (startAnim) {
        this._animatingZoom = true;
        this._animateToCenter = center;
        this._animateToZoom = zoom;
        L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');
      }
      this.fire('zoomanim', {
        center: center,
        zoom: zoom,
        noUpdate: noUpdate
      });
      setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function() {
      if (!this._animatingZoom) {
        return;
      }
      L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');
      this._animatingZoom = false;
      this._move(this._animateToCenter, this._animateToZoom);
      L.Util.requestAnimFrame(function() {
        this._moveEnd(true);
      }, this);
    }
  });
  L.Map.include({
    flyTo: function(targetCenter, targetZoom, options) {
      options = options || {};
      if (options.animate === false || !L.Browser.any3d) {
        return this.setView(targetCenter, targetZoom, options);
      }
      this._stop();
      var from = this.project(this.getCenter()),
          to = this.project(targetCenter),
          size = this.getSize(),
          startZoom = this._zoom;
      targetCenter = L.latLng(targetCenter);
      targetZoom = targetZoom === undefined ? startZoom : targetZoom;
      var w0 = Math.max(size.x, size.y),
          w1 = w0 * this.getZoomScale(startZoom, targetZoom),
          u1 = (to.distanceTo(from)) || 1,
          rho = 1.42,
          rho2 = rho * rho;
      function r(i) {
        var s1 = i ? -1 : 1,
            s2 = i ? w1 : w0,
            t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
            b1 = 2 * s2 * rho2 * u1,
            b = t1 / b1,
            sq = Math.sqrt(b * b + 1) - b;
        var log = sq < 0.000000001 ? -18 : Math.log(sq);
        return log;
      }
      function sinh(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2;
      }
      function cosh(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2;
      }
      function tanh(n) {
        return sinh(n) / cosh(n);
      }
      var r0 = r(0);
      function w(s) {
        return w0 * (cosh(r0) / cosh(r0 + rho * s));
      }
      function u(s) {
        return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
      }
      function easeOut(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }
      var start = Date.now(),
          S = (r(1) - r0) / rho,
          duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
      function frame() {
        var t = (Date.now() - start) / duration,
            s = easeOut(t) * S;
        if (t <= 1) {
          this._flyToFrame = L.Util.requestAnimFrame(frame, this);
          this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {flyTo: true});
        } else {
          this._move(targetCenter, targetZoom)._moveEnd(true);
        }
      }
      this._moveStart(true);
      frame.call(this);
      return this;
    },
    flyToBounds: function(bounds, options) {
      var target = this._getBoundsCenterZoom(bounds, options);
      return this.flyTo(target.center, target.zoom, options);
    }
  });
  L.Map.include({
    _defaultLocateOptions: {
      timeout: 10000,
      watch: false
    },
    locate: function(options) {
      options = this._locateOptions = L.extend({}, this._defaultLocateOptions, options);
      if (!('geolocation' in navigator)) {
        this._handleGeolocationError({
          code: 0,
          message: 'Geolocation not supported.'
        });
        return this;
      }
      var onResponse = L.bind(this._handleGeolocationResponse, this),
          onError = L.bind(this._handleGeolocationError, this);
      if (options.watch) {
        this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
      } else {
        navigator.geolocation.getCurrentPosition(onResponse, onError, options);
      }
      return this;
    },
    stopLocate: function() {
      if (navigator.geolocation && navigator.geolocation.clearWatch) {
        navigator.geolocation.clearWatch(this._locationWatchId);
      }
      if (this._locateOptions) {
        this._locateOptions.setView = false;
      }
      return this;
    },
    _handleGeolocationError: function(error) {
      var c = error.code,
          message = error.message || (c === 1 ? 'permission denied' : (c === 2 ? 'position unavailable' : 'timeout'));
      if (this._locateOptions.setView && !this._loaded) {
        this.fitWorld();
      }
      this.fire('locationerror', {
        code: c,
        message: 'Geolocation error: ' + message + '.'
      });
    },
    _handleGeolocationResponse: function(pos) {
      var lat = pos.coords.latitude,
          lng = pos.coords.longitude,
          latlng = new L.LatLng(lat, lng),
          bounds = latlng.toBounds(pos.coords.accuracy),
          options = this._locateOptions;
      if (options.setView) {
        var zoom = this.getBoundsZoom(bounds);
        this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
      }
      var data = {
        latlng: latlng,
        bounds: bounds,
        timestamp: pos.timestamp
      };
      for (var i in pos.coords) {
        if (typeof pos.coords[i] === 'number') {
          data[i] = pos.coords[i];
        }
      }
      this.fire('locationfound', data);
    }
  });
}(window, document));

})();
(function() {
var define = $__System.amdDefine;
define("14", ["13"], function(main) {
  return main;
});

})();
(function() {
var define = $__System.amdDefine;
(function(global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  "use strict";
  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  function DOMEval(code, doc) {
    doc = doc || document;
    var script = doc.createElement("script");
    script.text = code;
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  var version = "3.1.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    },
    isPlainObject: function(obj) {
      var proto,
          Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      DOMEval(code);
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        },
        unloadHandler = function() {
          setDocument();
        },
        disabledAncestor = addCombinator(function(elem) {
          return elem.disabled === true && ("form" in elem || "label" in elem);
        }, {
          dir: "parentNode",
          next: "legend"
        });
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var el = document.createElement("fieldset");
      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false);
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);
            if (elem) {
              node = elem.getAttributeNode("id");
              if (node && node.value === id) {
                return [elem];
              }
              elems = context.getElementsByName(id);
              i = 0;
              while ((elem = elems[i++])) {
                node = elem.getAttributeNode("id");
                if (node && node.value === id) {
                  return [elem];
                }
              }
            }
            return [];
          }
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(el) {
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          docElem.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(el) {
          support.disconnectedMatch = matches.call(el, "*");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.escape = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
        return false;
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[key] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(el) {
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    });
    if (!assert(function(el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function(elem) {
        return (indexOf.call(qualifier, elem) > -1) !== not;
      });
    }
    if (risSimple.test(qualifier)) {
      return jQuery.filter(qualifier, elements, not);
    }
    qualifier = jQuery.filter(qualifier, elements);
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          ret,
          len = this.length,
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject) {
    var method;
    try {
      if (value && jQuery.isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject);
      } else if (value && jQuery.isFunction((method = value.then))) {
        method.call(value, resolve, reject);
      } else {
        resolve.call(undefined, value);
      }
    } catch (value) {
      reject.call(undefined, value);
    }
  }
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred, handler, special) {
                return function() {
                  var that = this,
                      args = arguments,
                      mightThrow = function() {
                        var returned,
                            then;
                        if (depth < maxDepth) {
                          return;
                        }
                        returned = handler.apply(that, args);
                        if (returned === deferred.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }
                        then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                        if (jQuery.isFunction(then)) {
                          if (special) {
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                          } else {
                            maxDepth++;
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                          }
                        } else {
                          if (handler !== Identity) {
                            that = undefined;
                            args = [returned];
                          }
                          (special || deferred.resolveWith)(that, args);
                        }
                      },
                      process = special ? mightThrow : function() {
                        try {
                          mightThrow();
                        } catch (e) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e];
                            }
                            deferred.rejectWith(that, args);
                          }
                        }
                      };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[3 - i][2].disable, tuples[0][2].lock);
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(singleValue) {
      var remaining = arguments.length,
          i = remaining,
          resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          master = jQuery.Deferred(),
          updateFunc = function(i) {
            return function(value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!(--remaining)) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
        if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      }
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }
      return master.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function(error, stack) {
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
  jQuery.readyException = function(error) {
    window.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  jQuery.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error) {
      jQuery.readyException(error);
    });
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then;
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener("DOMContentLoaded", completed);
    window.addEventListener("load", completed);
  }
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[jQuery.camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[jQuery.camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
    },
    access: function(owner, key, value) {
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (jQuery.isArray(key)) {
          key = key.map(jQuery.camelCase);
        } else {
          key = jQuery.camelCase(key);
          key = key in cache ? [key] : (key.match(rnothtmlwhite) || []);
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, key);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHiddenWithinTree = function(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName] = display;
    return display;
  }
  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem, "display", display);
        }
      }
    }
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }
    return ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var documentElement = document.documentElement;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: jQuery.isFunction(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
      this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function(event) {
      var button = event.button;
      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      }
      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }
        if (button & 2) {
          return 3;
        }
        if (button & 4) {
          return 2;
        }
        return 0;
      }
      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return elem.getElementsByTagName("tbody")[0] || elem;
    }
    return elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  (function() {
    function computeStyleTests() {
      if (!div) {
        return;
      }
      div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
      div = null;
    }
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        computeStyleTests();
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        computeStyleTests();
        return reliableMarginLeftVal;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i,
        val = 0;
    if (extra === (isBorderBox ? "border" : "content")) {
      i = 4;
    } else {
      i = name === "width" ? 1 : 0;
    }
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var val,
        valueIsBorderBox = true,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (elem.getClientRects().length) {
      val = elem.getBoundingClientRect()[name];
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }});
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function raf() {
    if (timerId) {
      window.requestAnimationFrame(raf);
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = jQuery.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      }
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          if (!propTween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function() {
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    if (jQuery.fx.off || document.hidden) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(timerId);
    } else {
      window.clearInterval(timerId);
    }
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          i = 0,
          attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();
      if (!isXML) {
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnothtmlwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          }
          return ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : stripAndCollapse(jQuery.text(elem));
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, valueOrFunction) {
          var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        if (val == null) {
          return null;
        }
        if (jQuery.isArray(val)) {
          return jQuery.map(val, function(val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }
        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          completed,
          fireGlobals,
          i,
          uncached,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return completed ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (completed) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, "");
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
        }
        s.url = cacheURL + uncached;
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (completed) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (completed) {
            throw e;
          }
          done(-1, e);
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (completed) {
          return;
        }
        completed = true;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (jQuery.isFunction(html)) {
          html = html.call(this[0]);
        }
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery.expr.pseudos.hidden = function(elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxPrefilter(function(s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  support.createHTMLDocument = (function() {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base,
        parsed,
        scripts;
    if (!context) {
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument("");
        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  jQuery.fn.load = function(url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          rect,
          doc,
          elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      }
      rect = elem.getBoundingClientRect();
      if (rect.width || rect.height) {
        doc = elem.ownerDocument;
        win = getWindow(doc);
        docElem = doc.documentElement;
        return {
          top: rect.top + win.pageYOffset - docElem.clientTop,
          left: rect.left + win.pageXOffset - docElem.clientLeft
        };
      }
      return rect;
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset = {
          top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
          left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
        };
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  jQuery.parseJSON = JSON.parse;
  if (typeof define === "function" && define.amd) {
    define("15", [], function() {
      return jQuery;
    }), define("jquery", ["15"], function(m) {
      return m;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
});

})();
(function() {
var define = $__System.amdDefine;
define("16", ["15"], function(main) {
  return main;
});

})();
$__System.register("1", ["12", "14", "16"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var xhr_1,
      L,
      jquery_1;
  var realTimeRtdPos;
  return {
    setters: [function(xhr_1_1) {
      xhr_1 = xhr_1_1;
    }, function(L_1) {
      L = L_1;
    }, function(jquery_1_1) {
      jquery_1 = jquery_1_1;
    }],
    execute: function() {
      (function(realTimeRtdPos) {
        var app = {};
        app.positions = [];
        app.positions.ready = false;
        var mapStarted = false;
        var markers = [];
        var drawingPins = false;
        var map;
        var polTime = 33000;
        var countDownSteps = polTime / 1000;
        var countDownInterval;
        var counterdown = countDownSteps;
        var myLocation;
        var redIcon = L.icon({
          iconUrl: 'marker-icon-red.png',
          iconSize: [30, 50],
          iconAnchor: [15, 50]
        });
        var removePins = function() {
          if (!drawingPins && map) {
            drawingPins = true;
            if (app.positions.ready) {
              markers.forEach(function(m) {
                map.removeLayer(m);
              });
              markers = [];
            }
            drawingPins = false;
          }
        };
        var currentMeMarker;
        var redrawPins = function() {
          if (!drawingPins && map) {
            drawingPins = true;
            var bounds_1 = map.getBounds();
            if (currentMeMarker) {
              map.removeLayer(currentMeMarker);
            }
            currentMeMarker = L.marker(myLocation, {icon: redIcon}).addTo(map);
            if (app.positions.ready) {
              app.positions.forEach(function(pos) {
                if (bounds_1.contains(L.latLng(pos.lat, pos.long))) {
                  var mtemp = L.marker([pos.lat, pos.long]);
                  markers.push(mtemp);
                  mtemp.addTo(map).bindPopup(pos.line);
                }
              });
            }
            drawingPins = false;
          }
        };
        var countDown = function() {
          counterdown--;
          jquery_1.default('#countdown').text(counterdown.toString() + 's');
        };
        var getNewPositions = function() {
          app.positions = [];
          app.positions.ready = false;
          xhr_1.default({
            url: 'https://rtdrelay2.azurewebsites.net/rtdpos',
            method: 'get'
          }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
              var feed = void 0;
              try {
                feed = JSON.parse(body);
              } catch (error) {
                jquery_1.default('#infotext').text(body).show().css({
                  'color': 'red',
                  'font-size': 'large'
                });
                console.log(body);
              }
              if (typeof feed === 'object') {
                jquery_1.default('#infotext').hide();
                feed.forEach(function(entity) {
                  app.positions.push(entity);
                });
                app.positions.ready = true;
                removePins();
                redrawPins();
              }
            } else if (error) {
              console.log('request returned an error');
              console.log(error);
            } else if (response.statusCode != 200) {
              console.log('status code === ' + response.statusCode);
              console.log(error);
            }
          });
          if (countDownInterval) {
            clearInterval(countDownInterval);
          }
          countDownInterval = setInterval(countDown, 1000);
          counterdown = countDownSteps;
        };
        function InitMapLoop(startLoc) {
          if (!mapStarted) {
            mapStarted = true;
            jquery_1.default('#infotext').hide();
            map = L.map('map').setView(startLoc, 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
            getNewPositions();
            setInterval(getNewPositions, polTime);
            map.on('dragend zoomend', function(e) {
              removePins();
              redrawPins();
              jquery_1.default('#mapcenter').hide();
            });
          }
        }
        function reCenterMap() {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var curLoc = [position.coords.latitude, position.coords.longitude];
              myLocation = new L.LatLng(position.coords.latitude, position.coords.longitude);
              if (mapStarted) {
                map.setView(curLoc);
                jquery_1.default('#mapcenter').show();
              }
            }, function(err) {
              jquery_1.default('#infotext').text('we could not get your devices location, please try again in a few seconds').show().css({
                'color': 'red',
                'font-size': 'large'
              });
              setTimeout(function() {
                jquery_1.default('#infotext').text('').hide();
              }, 3000);
            });
          }
        }
        (function start() {
          window.reCenterMap = reCenterMap;
          setTimeout(function() {
            InitMapLoop(startLoc);
          }, 10000);
          var startLoc = [39.735, -104.99];
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              startLoc = [position.coords.latitude, position.coords.longitude];
              myLocation = new L.LatLng(position.coords.latitude, position.coords.longitude);
              if (!mapStarted) {
                InitMapLoop(startLoc);
              }
            }, function(err) {
              if (!mapStarted) {
                InitMapLoop(startLoc);
              }
            });
          } else {
            if (!mapStarted) {
              InitMapLoop(startLoc);
            }
          }
        })();
      })(realTimeRtdPos || (realTimeRtdPos = {}));
    }
  };
});

})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map