<?php
	//链接数据库
	$conn = mysql_connect("localhost","root","123456");
	//选择数据库
	mysql_select_db("kaolaxinwen", $conn);
	//中文
	mysql_query("SET NAMES UTF8");
	//得到id
	$id = $_GET["id"];
	//SQL语句
	$sql = "SELECT * FROM xinwen WHERE id = {$id}";
	//执行SQL语句
	$result = mysql_query($sql);
	//转变结果的格式
	$row = mysql_fetch_array($result);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo $row["biaoti"] ?> - 考拉新闻网</title>
	<style type="text/css">
		.box{
			width:1000px;
			margin: 0 auto;
			background-color: skyblue;
		}
		h1{
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="box">
		<h1><?php echo $row["biaoti"] ?></h1>
		<div class="content">
			<?php echo $row["neirong"] ?>
		</div>
		<p>
			<a href="news.php?id=<?php echo $id + 1;?>">下一条</a>
		</p>
	</div>
</body>
</html>