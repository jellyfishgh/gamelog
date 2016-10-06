const iconv = require('iconv-lite');

const fetcher = require('./fetcher');
const formatter = require('./formatter');
const config = require('./config.js');

module.exports = {
    handle: function(game, req, res) {
        fetcher.fetch(config.logurls[game], (err, buffer) => {
            if (err) throw err;
            let data = iconv.decode(buffer, 'gbk');
            formatter.format(game, data, (err, html) => {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=utf-8'
                });
                res.end(html);
            });
        });
    }
};