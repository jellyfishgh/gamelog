function route(handle, logs, pathname, response, callback){
	console.log('About to route a request for ' + pathname);
	if(logs[pathname] != undefined){
		handle(logs, pathname, response, callback);
	}else{
		console.log('No request handler for ' + pathname);
		response.writeHead(404, {'Content-Type':'text/plain'});
		response.write('404 Not Found');
		response.end();
	}
}

exports.route = route;
