<!DOCTYPE html>
<html>
<head>
<meta charset="gbk"/>
<title>mx2</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div>
<?php
header('Content-type: text/html; charset=gbk');
$farr = file("http://mx2update.duoyi.com/updatelog.txt");
foreach ($farr as $key => $value) {
	$value=preg_replace("/\s/","",$value);
	if($value!=""){
		if($key==0){
			echo '<h3>'.$value.'</h3>';
		}else{
			$c = substr($value, 0,1);
			if(is_numeric($c)){
				echo '<h4>'.$value.'</h4>';
			}else{
				echo '<p>'.$value.'</p>';
			}			
		}		
	}
}
?>
</div>
</body>
</html>