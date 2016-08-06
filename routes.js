const url = require('url');
const query = require('querystring');

const handler = require('./handler.js');
const config = require('./config.js');

module.exports = {
    '/log': function(req, res, resErr) {
        let urlObj = url.parse(req.url);
        let queryObj = query.parse(urlObj.query);
        if(queryObj.game && config.logurls[queryObj.game]){
            handler.handle(queryObj.game, req, res);
        }else {
            resErr(res);
        }
    }
};
