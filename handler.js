const fetcher = require('./fetcher');
const formattor = require('./formattor');

function format(log,type){
	var arr = log.split(/[\s]+/);
	var html = Array();
	switch(type){
		case 'sw':
			for(var i = 0; i < arr.length; i++){
				if(i>2){
					if(i==3){
						html.push("<h3>"+arr[i]+"</h3>");
					}else if(i==4){
						html.push("<h4>"+arr[i]+"</h4>");
					}else{
						if(arr[i].indexOf("BUG")>0){
							html.push("<h4>"+arr[i]+"</h4>");
						}else{
							html.push("<p>"+arr[i]+"</p>");
						}
					}
				}
			}
			break;
		case 'mx':
			for(var i = 1; i < arr.length-1; i++){
				if(i==1){
					html.push("<h3>" + arr[i].replace(/#c43e1f4/g,"").replace(/#Y/g,"") + "</h3>");
				}else{
					var c = arr[i].substr(0,1);
					if(c=="i"){
						html.push("<p class=left>"+arr[i]+"</p>");
					}else{
						html.push("<p>"+arr[i]+"</p>");
					}
				}
			}
			break;
		case 'mx2':
			for(var i = 0; i < arr.length; i++){
				if(i==0){
					html.push("<h3>"+arr[i]+"</h3>");
				}else{
					var c = arr[i].substr(0,1);
					if(isNaN(c)){
						html.push("<p class=left>"+arr[i]+"</p>");
					}else{
						html.push("<p>"+arr[i]+"</p>");
					}
				}
			}
			break;
		case 'jl':
			for(var i = 4; i < arr.length; i++){
				if(i==4){
					html.push("<h3>"+arr[i]+"</h3>");
				}else{
					html.push("<p>"+arr[i]+"</p>");
				}
			}
			break;
		case 'dw':
			for(var i = 3; i < arr.length; i++){
				if(arr[i].indexOf("2015")>0){
					html.push("<h4 id=dw_h4>"+arr[i]+"</h4>");
				}else if(arr[i]!=""){
					var c = arr[i].substr(0,1);
					if(isNaN(c)){
						html.push("<p class=left>"+arr[i]+"</p>");
					}else{
						html.push("<p>"+arr[i]+"</p>");
					}
				}
			}
			break;
		default:break;
	}
	return html;
}

function handle(game, req, res){
	response.setHeader('Content-Type','text/javascript;charset=utf-8');
	http.get(logs[pathname], function(res){
		var size = 0;
		var chunks = [];
		res.on('data', function(chunk){
			size += chunk.length;
			chunks.push(chunk);
		});
		res.on('end',function(){
			var data = Buffer.concat(chunks, size);
			var html = format(iconv.decode(data,'gbk').toString(), pathname);
			var str = JSON.stringify(html);
			var json = JSON.parse(str);
			response.write(callback+"('"+json+"')");
			response.end();
		})
	}).on('error', function(e){
		console.log('error: ' + e.message);
	});
}

module.exports = {
	handle: function(game, url, req, res) {
		fetcher.fetch(url, (err, data) => {
			if(err) throw err;
			formattor.format(game, data, (err, html) => {
				res.write(html);
			});
		});
	}
};
