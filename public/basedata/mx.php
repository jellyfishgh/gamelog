<!DOCTYPE html>
<html>
<head>
<meta charset="gbk"/>
<title>mx</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div>
<?php
header('Content-type: text/html; charset=gbk');
$farr = file("http://mxupdate.duoyi.com/news.txt");
foreach ($farr as $key => $value) {
	$value=preg_replace("/\s/","",$value);
	$value=preg_replace("/#n/","",$value);
	if($value!=""){
		if($key>1){
			if($key==2){
				$value=preg_replace("/#c43e1f4/","",$value);
				$value=preg_replace("/#Y/","",$value);
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