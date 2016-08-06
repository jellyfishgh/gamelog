const http = require('http');

module.exports = {
    fetch: function(url, cb) {
        http.get(url, (res) => {
            let chunks = [];
            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                cb(null, Buffer.concat(chunks));
            });
        }).on('error', (err) => {
            cb(err);
        });
    }
};