<!DOCTYPE html>
<html>
<head>
<meta charset="gbk"/>
<title>dw</title>
<link rel="stylesheet" type="text/css" href="dw_style.css"/>
</head>
<body>
<div>
<?php
header('Content-type: text/html; charset=gbk');
$farr = file("http://dwupdate.duoyi.com/news.txt");
foreach ($farr as $key => $value) {
	if($key>3){
		$value=preg_replace("/\s/","",$value);
		if($value!=""){
			if(preg_match("/2015/", $value)){
				echo '<h3>'.$value.'</h3>';
			}else{
				$c = substr($value,0,1);
				if(is_numeric($c)){
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