(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fetcher = require('./fetcher');

function $(id) {
	return document.getElementById(id);
}

fetcher.fetch('/log' + window.location.search, function(err, html){
	if (err) {
		alert(err);
		$("centerDiv").style.display = "none";
	} else {
		$("centerDiv").style.display = "none";
		$("myDiv").innerHTML = html;
	}
});

},{"./fetcher":2}],2:[function(require,module,exports){
module.exports = {
	fetch: function(url, cb) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onload = function(event) {
			if (xhr.readyState == 4 && xhr.status == 200) {
				cb(null, xhr.responseText);
			} else {
				cb(new Error(xhr.statusText));
			}
		};
		xhr.onerror = function(err) {
			cb(err);
		};
		xhr.send();
	}
};

},{}]},{},[1]);
