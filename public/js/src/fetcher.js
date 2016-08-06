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
