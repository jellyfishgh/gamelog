function showLog(id,name){
	var url = "http://"+window.location.host+"/MyTest/"+name+"news.txt";
	var iframe1 = document.createElement("iframe");
	iframe1.src = url;
	iframe1.hidden="hidden";
	document.body.appendChild(iframe1);
	var div = document.getElementById(id);
	iframe1.onload = function(){
		console.log(this.contentWindow.document);
		var log = this.contentWindow.document.firstChild.childNodes[1].firstChild.innerHTML;
		div.innerHTML = format(log,name);
	}
}
function format(log,type){
	var arr = log.split(/[\s]+/);
	var html = "";
	switch(type){
		case 'sw':
			for(var i = 0; i < arr.length; i++){
				if(i>2){
					if(i==3){
						html += "<h3>"+arr[i]+"</h3>";
					}else if(i==4){
						html += "<h4>"+arr[i]+"</h4>";
					}else{
						if(arr[i].indexOf("BUG")>0){
							html += "<h4>"+arr[i]+"</h4>";
						}else{
							html += "<p>"+arr[i]+"</p>";
						}
					}
				}
			}
			break;
		case 'mx':
			for(var i = 1; i < arr.length-1; i++){
				if(i==1){
					html += "<h3>" + arr[i].replace(/#c43e1f4/g,"").replace(/#Y/g,"") + "</h3>";
				}else{
					var c = arr[i].substr(0,1);
					if(c=="i"){
						html += "<p class='left'>"+arr[i]+"</p>";
					}else{
						html += "<p>"+arr[i]+"</p>";
					}
				}
			}
			break;
		case 'mx2':
			for(var i = 0; i < arr.length; i++){
				if(i==0){
					html += "<h3>"+arr[i]+"</h3>";
				}else{
					var c = arr[i].substr(0,1);
					if(isNaN(c)){
						html += "<p class='left'>"+arr[i]+"</p>";
					}else{
						html += "<p>"+arr[i]+"</p>";
					}
				}
			}
			break;
		case 'jl':
			for(var i = 4; i < arr.length; i++){
				if(i==4){
					html += "<h3>"+arr[i]+"</h3>";
				}else{
					html += "<p>"+arr[i]+"</p>";
				}
			}
			break;
		case 'dw':
			for(var i = 3; i < arr.length; i++){
				if(arr[i].indexOf("2015")>0){
					html += "<h4 id='dw_h4'>"+arr[i]+"</h4>";
				}else{
					var c = arr[i].substr(0,1);
					if(isNaN(c)){
						html += "<p class='left'>"+arr[i]+"</p>";
					}else{
						html += "<p>"+arr[i]+"</p>";
					}
				}
			}
			break;
		default:break;
	}
	return html;
}