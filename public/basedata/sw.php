<!DOCTYPE html>
<html>
<head>
<meta charset="gbk"/>
<title>sw</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div id="myDiv">
<?php
header('Content-type: text/html; charset=gbk');
$farr = file("http://wzupdate.duoyi.com/dynews.txt");
foreach ($farr as $key => $value) {
	$value=preg_replace("/\s/","",$value);
	if($value!=""){
		if($key==5){
			echo '<h3>'.$value.'</h3>';
		}else if($key>7){
			if($key==8){
				echo '<h4>'.$value.'</h4>';
			}else{
				if(strstr($value,"BUG")){
					echo '<h4>'.$value.'</h4>';
				}else{
					echo '<p>'.$value.'</p>';
				}
			}
		}
	}
}
?>
</div>
</body>
</html>