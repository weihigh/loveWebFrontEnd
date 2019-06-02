<?php
	//链接数据库
	$conn = mysql_connect("localhost","root","123456");
	//选择数据库
	mysql_select_db("kaolaxinwen", $conn);
	//中文
	mysql_query("SET NAMES UTF8");
	//SQL语句
	$sql = "SELECT * FROM xinwen";
	//执行SQL语句
	$result = mysql_query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>考拉新闻网</title>
</head>
<body>
	<div class="box">
		<ul>
			<?php
				while($row = mysql_fetch_array($result)){
			?>
					<li><a href="news.php?id=<?php echo $row["id"]?>"><?php echo $row["biaoti"]; ?></a></li>
			<?php
				}
			?>
		</ul>
		
	</div>
</body>
</html>