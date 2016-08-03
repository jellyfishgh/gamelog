var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var logs = {
	'sw' : 'http://wzupdate.duoyi.com/dynews.txt',
	'mx' : 'http://mxupdate.duoyi.com/news.txt',
	'mx2' : 'http://mx2update.duoyi.com/updatelog.txt',
	'jl' : 'http://jlupdate.duoyi.com/dynews.txt',
	'dw' : 'http://dwupdate.duoyi.com/news.txt'
};

var ip = '10.32.20.110';
var port = 8886;
server.start(ip, port, handler.handle, logs, router.route);