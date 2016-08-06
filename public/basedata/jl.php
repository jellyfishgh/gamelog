<!DOCTYPE html>
<html>
<head>
<meta charset="gbk"/>
<link rel="stylesheet" type="text/css" href="style.css"/>
<title>jl</title>
</head>
<body>
<div>
<?php
header('Content-type: text/html; charset=gbk');
$farr = file("http://jlupdate.duoyi.com/dynews.txt");
foreach ($farr as $key => $value) {
	if($key>2){
		$value=preg_replace("/\s/","",$value);
		if($value!=""){
			if($key==4){
				echo '<h3>'.$value.'</h3>';
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