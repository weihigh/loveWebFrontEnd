<?php
	//得到表单提交的标题和内容
	$biaoti = $_POST["biaoti"];
	$neirong = $_POST["neirong"];

	 
	//链接数据库
	$conn = mysql_connect("localhost","root","123456");
	//选择数据库
	mysql_select_db("kaolaxinwen", $conn);
	//中文
	mysql_query("SET NAMES UTF8");
	//SQL语句
	$sql = "INSERT INTO xinwen (biaoti , neirong) VALUES ('${biaoti}' , '${neirong}')";
	//执行SQL语句
	$result = mysql_query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>提交新闻成功！</h1>
</body>
</html>