const http = require('http');
const url = require('url');
const query = require('querystring');

const handler = require('./handler');

const config = require('./config.js');

let port = config.server.port,
	host = config.server.host;

http.createServer((req, res) => {
	let urlObj = url.parse(req.url);
	let queryObj = query.parse(urlObj.query);
	if (config.logurls[queryObj.game]) handler.handle(queryObj.game, req, res);
	else {
		let body = 'no such game log';
		res.writeHead(404, {
			'Content-Type': 'text/plain',
			'Content-Length': Buffer.byteLength(body);
		});
		res.end(body);
	}
}).listen(port, host, (err) => {
	if (err) throw err;
	console.log(`server running at ${host}:${port}`);
});
