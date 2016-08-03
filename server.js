const http = require('http');
const url = require('url');

function start(ip, port, handle, logs, route) {
	http.createServer((req, res) => {
		var urlObj = url.parse(request.url);
		var hrefObj = url.parse(urlObj.href, true);
		var pathname = urlObj.pathname.substr(1);
		var callback = hrefObj.query.callback;
		route(handle, logs, pathname, response, callback);
	}).listen(port, ip, (err) => {
		if (err) throw err;
		console.log("server running at " + ip + ":" + port);
	});
}

exports.start = start;
