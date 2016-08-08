const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const config = require('./config.js');
const routes = require('./routes.js');

let port = config.server.port,
    host = config.server.host;

http.createServer((req, res) => {
    let urlObj = url.parse(req.url);
    let pathname = urlObj.pathname === '/' ? '/html/index.html' : urlObj.pathname;
    console.log(pathname);
    if (routes[pathname]) {
        routes[pathname](req, res, resErr);
    } else {
        let file = path.join('./public', pathname);
        fs.stat(file, (err, stats) => {
            if (err) return resErr(res);
            if (!stats.isFile()) return resErr(res);
            fs.readFile(file, (err, data) => {
                if (err) return resErr(res);
                res.writeHead(200, {
                    'Content-Type': mime.lookup(file),
                    'Content-Length': stats.size
                });
                res.end(data);
            });
        });
    }
}).listen(port, host, (err) => {
    if (err) throw err;
    console.log(`server running at http://${host}:${port}/`);
});


function resErr(res) {
    let body = 'no such game';
    res.writeHead(404, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(body)
    });
    res.end(body);
}