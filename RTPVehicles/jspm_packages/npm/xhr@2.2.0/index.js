/* */ 
(function(process) {
  "use strict";
  var window = require('global/window');
  var once = require('once');
  var isFunction = require('is-function');
  var parseHeaders = require('parse-headers');
  var xtend = require('xtend');
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
    var callback = options.callback;
    if (typeof callback === "undefined") {
      throw new Error("callback argument missing");
    }
    callback = once(callback);
    function readystatechange() {
      if (xhr.readyState === 4) {
        loadFunc();
      }
    }
    function getBody() {
      var body = undefined;
      if (xhr.response) {
        body = xhr.response;
      } else if (xhr.responseType === "text" || !xhr.responseType) {
        body = xhr.responseText || xhr.responseXML;
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
      callback(evt, failureResponse);
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
      callback(err, response, response.body);
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
  function noop() {}
})(require('process'));