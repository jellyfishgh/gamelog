var http = require('http');
var url = require('url');

function start(ip, port, handle, logs, route){
	function onRequest(request, response){
		var urlObj = url.parse(request.url);
		var hrefObj = url.parse(urlObj.href,true);
		var pathname = urlObj.pathname.substr(1);
		var callback = hrefObj.query.callback;
		route(handle, logs, pathname, response, callback);
	}
	http.createServer(onRequest).listen(port,ip);
	console.log("server running at " + ip + ":" + port);
}

exports.start = start;
