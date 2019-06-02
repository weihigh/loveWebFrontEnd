/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.0.90-community-nt : Database - kaolaxinwen
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`kaolaxinwen` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci */;

USE `kaolaxinwen`;

/*Table structure for table `xinwen` */

DROP TABLE IF EXISTS `xinwen`;

CREATE TABLE `xinwen` (
  `id` int(10) NOT NULL auto_increment,
  `biaoti` varchar(100) default NULL,
  `neirong` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

/*Data for the table `xinwen` */

insert  into `xinwen`(`id`,`biaoti`,`neirong`) values (1,'0716班同学顺利毕业','0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0716班同学顺利毕业0'),(2,'0716班同学都找到工作啦','0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找到工作啦0716班同学都找'),(3,'0716班同学都工资很高','0716班同学都工资很高0716班同学都工资很高0716班同学都工资很高0716班同学都工资很高0716班同学都工资很高0716班同学都工资很高'),(4,'上面说的都是逗你玩儿的','上面说的都是逗你玩儿的上面说的都是逗你玩儿的上面说的都是逗你玩儿的上面说的都是逗你玩儿的上面说的都是逗你玩儿的上面说的都是逗你玩儿的上面说的都是逗你玩儿的'),(5,'新的新闻','哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'),(6,'666','很6'),(7,'666','很6'),(8,'爱前端上市了','爱前端上市了'),(9,'可以听懂','666'),(10,'',''),(11,'讲的很好','能听懂'),(12,'---','清晰'),(13,'可以 ','清晰'),(14,'666','没毛病。老铁'),(15,'考拉老师666','考拉老师666考拉老师666考拉老师666考拉老师666考拉老师666考拉老师666考拉老师666考拉老师666'),(16,'wwwwww','aaaaaaa'),(17,'懂啦','讲的我热血沸腾\r\n非常棒'),(18,'wwwwww','aaaaaaa'),(19,'清楚，明白','清楚，明白'),(20,'懂的哈','很清楚'),(21,'',''),(22,'XSS','<img src=\"null\" onerror=\"alert(\'哇哈哈\')\">'),(23,'懂了','拒绝黄赌毒'),(24,'懂了','so cool！'),(25,'问题','1.php?id=1  是GET请求的格式'),(26,'问题','1.php?id=1  是GET请求的格式'),(27,'adsfasdf','asdfasdfasdf');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
