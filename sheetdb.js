var sheetDbUrlGet = function (t, e) {
    var s = sheetDbUrl(t),
      n = "",
      r = addLimitOffsetTransposed(e);
    return (
      e.search && (n += sheetDbSearch(e)),
      "" != r && (e.search ? (n += "&" + r) : (n += "?" + r)),
      s + n
    );
  },
  sheetDbUrlPost = function (t, e) {
    return sheetDbUrl(t) + "";
  },
  sheetDbUrl = function (t) {
    return t.startsWith("https://sheetdb.io/api/v1/")
      ? t
      : "https://sheetdb.io/api/v1/" + t;
  },
  sheetDbSearch = function (t) {
    var e = [],
      s = t.search;
    for (key in s) e.push(key + "=" + s[key]);
    return "/search?" + e.join("&");
  },
  addLimitOffsetTransposed = function (t) {
    var e = [];
    return (
      t.casesensitive && e.push("casesensitive=" + t.casesensitive),
      t.sheet && e.push("sheet=" + t.sheet),
      e.join("&")
    );
  };
String.prototype.startsWith ||
  (String.prototype.startsWith = function (t, e) {
    return (e = e || 0), this.indexOf(t, e) === e;
  }),
  (SheetDB = {
    read: function () {
      return read.apply(null, arguments);
    },
    write: function () {
      return write.apply(null, arguments);
    },
    version: "1.0",
  }),
  "undefined" != typeof module && (module.exports = SheetDB);
function read(t, e) {
  return new Promise(function (s, n) {
    var r = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    r.open("GET", sheetDbUrlGet(t, e), !0),
      (r.onload = function () {
        this.status >= 200 && this.status < 300
          ? s(JSON.parse(r.responseText))
          : n({ status: this.status, statusText: r.statusText });
      }),
      r.setRequestHeader("Content-Type", "application/json"),
      (r.onerror = function (t) {
        n(t);
      }),
      r.send();
  });
}
function write(t, e, s) {
  return new Promise(function (n, r) {
    var i = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    i.open("POST", sheetDbUrlPost(t, s), !0),
      (i.onload = function () {
        this.status >= 200 && this.status < 300
          ? n(JSON.parse(i.responseText))
          : r({ status: this.status, statusText: i.statusText });
      }),
      i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
      (i.onerror = function (t) {
        r(t);
      }),
      i.send(JSON.stringify(e));
  });
}
var sheetDbUrlGet = function (t, e) {
    var s = sheetDbUrl(t),
      n = "",
      r = addLimitOffsetTransposed(e);
    return (
      e.search && (n += sheetDbSearch(e)),
      "" != r && (e.search ? (n += "&" + r) : (n += "?" + r)),
      s + n
    );
  },
  sheetDbUrlPost = function (t, e) {
    return sheetDbUrl(t) + "";
  },
  sheetDbUrl = function (t) {
    return t.startsWith("https://sheetdb.io/api/v1/")
      ? t
      : "https://sheetdb.io/api/v1/" + t;
  },
  sheetDbSearch = function (t) {
    var e = [],
      s = t.search;
    for (key in s) e.push(key + "=" + s[key]);
    return "/search?" + e.join("&");
  },
  addLimitOffsetTransposed = function (t) {
    var e = [];
    return (
      t.casesensitive && e.push("casesensitive=" + t.casesensitive),
      t.sheet && e.push("sheet=" + t.sheet),
      e.join("&")
    );
  };
String.prototype.startsWith ||
  (String.prototype.startsWith = function (t, e) {
    return (e = e || 0), this.indexOf(t, e) === e;
  }),
  (SheetDB = {
    read: function () {
      return read.apply(null, arguments);
    },
    write: function () {
      return write.apply(null, arguments);
    },
    version: "1.0",
  }),
  "undefined" != typeof module && (module.exports = SheetDB);
function read(t, e) {
  return new Promise(function (s, n) {
    var r = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    r.open("GET", sheetDbUrlGet(t, e), !0),
      (r.onload = function () {
        this.status >= 200 && this.status < 300
          ? s(JSON.parse(r.responseText))
          : n({ status: this.status, statusText: r.statusText });
      }),
      r.setRequestHeader("Content-Type", "application/json"),
      (r.onerror = function (t) {
        n(t);
      }),
      r.send();
  });
}
function write(t, e, s) {
  return new Promise(function (n, r) {
    var i = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    i.open("POST", sheetDbUrlPost(t, s), !0),
      (i.onload = function () {
        this.status >= 200 && this.status < 300
          ? n(JSON.parse(i.responseText))
          : r({ status: this.status, statusText: i.statusText });
      }),
      i.setRequestHeader("Content-Type", "application/json; charset=UTF-8"),
      (i.onerror = function (t) {
        r(t);
      }),
      i.send(JSON.stringify(e));
  });
}
