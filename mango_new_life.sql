/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : mango_new_life

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2020-02-25 13:42:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mango_attend
-- ----------------------------
DROP TABLE IF EXISTS `mango_attend`;
CREATE TABLE `mango_attend` (
  `attend_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  PRIMARY KEY (`attend_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_attend
-- ----------------------------
INSERT INTO `mango_attend` VALUES ('3', '21', '21');
INSERT INTO `mango_attend` VALUES ('4', '21', '25');
INSERT INTO `mango_attend` VALUES ('5', '21', '24');
INSERT INTO `mango_attend` VALUES ('6', '21', '19');
INSERT INTO `mango_attend` VALUES ('8', '21', '10');
INSERT INTO `mango_attend` VALUES ('9', '21', '11');
INSERT INTO `mango_attend` VALUES ('10', '21', '4');

-- ----------------------------
-- Table structure for mango_category
-- ----------------------------
DROP TABLE IF EXISTS `mango_category`;
CREATE TABLE `mango_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_image` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_category
-- ----------------------------
INSERT INTO `mango_category` VALUES ('1', '失物招领', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('2', '交友墙', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('3', '拼车', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('4', '兼职', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('5', '闲置交易', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('6', '相约学习', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('7', '校园活动', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('8', '吐槽专区', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('9', '资源分享', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('10', '我想要的', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('11', '最新消息', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('12', '问题反馈', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');
INSERT INTO `mango_category` VALUES ('13', '问题解答', 'http://img1.imgtn.bdimg.com/it/u=1485155798,1399786289&fm=26&gp=0.jpg');

-- ----------------------------
-- Table structure for mango_collect
-- ----------------------------
DROP TABLE IF EXISTS `mango_collect`;
CREATE TABLE `mango_collect` (
  `collect_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  PRIMARY KEY (`collect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_collect
-- ----------------------------
INSERT INTO `mango_collect` VALUES ('6', '21', '24');
INSERT INTO `mango_collect` VALUES ('8', '21', '17');
INSERT INTO `mango_collect` VALUES ('9', '21', '16');
INSERT INTO `mango_collect` VALUES ('10', '21', '12');

-- ----------------------------
-- Table structure for mango_comment
-- ----------------------------
DROP TABLE IF EXISTS `mango_comment`;
CREATE TABLE `mango_comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  `comment_detail` longtext NOT NULL,
  `comment_creat_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_comment
-- ----------------------------
INSERT INTO `mango_comment` VALUES ('8', '21', '21', 'sadasdasdasdasdasda', '2019-08-17 14:52:24');
INSERT INTO `mango_comment` VALUES ('9', '21', '21', 'asdasdasdasasasdasdasd', '2019-08-17 14:52:44');
INSERT INTO `mango_comment` VALUES ('10', '21', '25', 'sadasdasdasasasd', '2019-08-17 14:54:53');
INSERT INTO `mango_comment` VALUES ('13', '21', '19', 'sadasdasdsasadasdasasda', '2019-08-17 15:08:07');
INSERT INTO `mango_comment` VALUES ('15', '21', '10', 'sadasdasdasdasdasdasd', '2019-08-17 15:08:26');
INSERT INTO `mango_comment` VALUES ('16', '21', '11', 'sadasdasdasdasda', '2019-08-17 15:09:34');
INSERT INTO `mango_comment` VALUES ('23', '21', '25', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-08-17 16:38:55');
INSERT INTO `mango_comment` VALUES ('25', '22', '25', '我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。', '2019-08-17 17:23:00');
INSERT INTO `mango_comment` VALUES ('26', '21', '25', 'asdasdasdasdshjaskdhasjkdhsajkdasdasdasd', '2019-08-17 17:54:44');
INSERT INTO `mango_comment` VALUES ('27', '21', '25', 'asdasdasdasdasdsadsaasdasasda', '2019-08-17 17:57:15');
INSERT INTO `mango_comment` VALUES ('28', '21', '4', 'asdasdasdasdasdasdasdasdasda', '2019-08-17 17:58:39');
INSERT INTO `mango_comment` VALUES ('29', '22', '25', '我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一', '2019-08-17 19:11:37');

-- ----------------------------
-- Table structure for mango_comment_reply
-- ----------------------------
DROP TABLE IF EXISTS `mango_comment_reply`;
CREATE TABLE `mango_comment_reply` (
  `comment_reply_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) NOT NULL,
  `comment_user_id` int(11) NOT NULL,
  `replay_user_id` int(11) NOT NULL,
  `replay_user_name` varchar(255) NOT NULL,
  `receive_user_id` int(11) NOT NULL,
  `receive_user_name` varchar(255) NOT NULL,
  `reply_detail` longtext NOT NULL,
  `reply_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_reply_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_comment_reply
-- ----------------------------
INSERT INTO `mango_comment_reply` VALUES ('5', '11', '21', '21', '勿忘我', '21', '勿忘我', 'asdasdasdasdasdasdasdasdas', '2019-08-17 16:32:05');
INSERT INTO `mango_comment_reply` VALUES ('10', '10', '21', '21', '勿忘我', '21', '勿忘我', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-08-17 16:41:52');
INSERT INTO `mango_comment_reply` VALUES ('11', '11', '21', '21', '勿忘我', '21', '勿忘我', '我我关心你??????', '2019-08-17 16:54:06');
INSERT INTO `mango_comment_reply` VALUES ('12', '10', '21', '22', '芷若初心', '21', '勿忘我', '哟哟哟西哟西哟西哟西哟西哟西哟西哟西哟西', '2019-08-17 16:57:42');
INSERT INTO `mango_comment_reply` VALUES ('13', '10', '22', '21', '勿忘我', '22', '芷若初心', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-08-17 17:15:56');
INSERT INTO `mango_comment_reply` VALUES ('14', '10', '21', '21', '勿忘我', '21', '勿忘我', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2019-08-17 17:16:14');
INSERT INTO `mango_comment_reply` VALUES ('16', '16', '21', '21', '勿忘我', '21', '勿忘我', 'asdasdasdasdasdasdasd', '2019-08-17 17:31:08');

-- ----------------------------
-- Table structure for mango_message
-- ----------------------------
DROP TABLE IF EXISTS `mango_message`;
CREATE TABLE `mango_message` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id_anonymity` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_major` varchar(255) NOT NULL,
  `user_level` varchar(255) NOT NULL,
  `message_detail` longtext NOT NULL,
  `message_share` int(11) NOT NULL DEFAULT '0',
  `message_comment` int(11) NOT NULL DEFAULT '0',
  `message_watch` int(11) NOT NULL DEFAULT '0',
  `message_creat_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_message
-- ----------------------------
INSERT INTO `mango_message` VALUES ('4', '1', '21', '1', '11111111111', '222222222', '22', '11111111111111111111', '0', '0', '11', '2019-08-16 13:31:57');
INSERT INTO `mango_message` VALUES ('10', '0', '21', '1', '15991682563', '软件工程', '18', 'fasdasdsadasdasdasdasdas', '0', '0', '4', '2019-08-16 16:54:23');
INSERT INTO `mango_message` VALUES ('11', '1', '21', '1', '15991682563', '软件工程', '18', '12312312123123123123123123', '0', '0', '8', '2019-08-16 16:55:31');
INSERT INTO `mango_message` VALUES ('12', '0', '21', '1', '15991682563', '全面发展', '18', 'asjdkhaskljdjaslkdjaskldjaklsdasd', '0', '0', '3', '2019-08-16 18:35:02');
INSERT INTO `mango_message` VALUES ('13', '0', '21', '1', '15991682454', '软将从撒打算', '18', '123122222222352163521362178312312313', '0', '0', '3', '2019-08-16 19:10:02');
INSERT INTO `mango_message` VALUES ('16', '0', '21', '1', '15954552454', 'sadasdsa', '18', 'qweqwqweqwewqeqweqw', '0', '0', '3', '2019-08-16 19:30:47');
INSERT INTO `mango_message` VALUES ('17', '0', '21', '1', '15954545645', 'jkassd', '18', 'qweqweqwqweqweqweqw速度大大熬是熬是啊熬是熬是熬是大啊飒飒熬是啊 熬是大', '0', '0', '3', '2019-08-16 19:31:37');
INSERT INTO `mango_message` VALUES ('19', '0', '21', '1', '15982465465', '阮籍按时间可达上的', '18', 'ajksdhasdhasjkasdasdkhlasjdkashdjkashdjkashdjkashdjksahjkashdjkahdjkashjkjkashjkashjksahjkasjhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj ajksdhasdhasjkasdasdkhlasjdkashdjkashdjkashdjkashdjksahjkashdjkahdjkashjkjkashjkashjksahjkasjhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj ajksdhasdhasjkasdasdkhlasjdkashdjkashdjkashdjkashdjksahjkashdjkahdjkashjkjkashjkashjksahjkasjhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj ajksdhasdhasjkasdasdkhlasjdkashdjkashdjkashdjkashdjksahjkashdjkahdjkashjkjkashjkashjksahjkasjhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj ajksdhasdhasjkasdasdkhlasjdkashdjkashdjkashdjkashdjksahjkashdjkahdjkashjkjkashjkashjksahjkasjhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', '0', '0', '11', '2019-08-16 19:33:34');
INSERT INTO `mango_message` VALUES ('21', '1', '21', '1', '15995445645', '软件工程', '18', 'asdasdkjasdhjaskdhjkashjkashdjkashdjkashdjksadasdasdasdasda', '0', '0', '14', '2019-08-16 20:00:28');
INSERT INTO `mango_message` VALUES ('22', '1', '21', '1', '15965654564', '软件工程', '18', 'yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd yhuasgdhsdashu2178687183128312jh3ghjbnasdasdasdasd', '0', '0', '14', '2019-08-16 20:04:54');
INSERT INTO `mango_message` VALUES ('24', '0', '22', '1', '15967643433', '软件工程', '18', 'asdkjasdhajksdakjsdkasjdkasjdklasjdklasdlasdasdasdasd', '0', '0', '54', '2019-08-16 20:56:04');
INSERT INTO `mango_message` VALUES ('25', '1', '21', '11', '15991682563', '软件工程', '18', '2.0正式发布', '0', '0', '117', '2019-08-16 22:32:44');

-- ----------------------------
-- Table structure for mango_message_images
-- ----------------------------
DROP TABLE IF EXISTS `mango_message_images`;
CREATE TABLE `mango_message_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_message_images
-- ----------------------------
INSERT INTO `mango_message_images` VALUES ('7', '4', 'images/2019/08/16 13:47:59/156593447921881.png');
INSERT INTO `mango_message_images` VALUES ('14', '10', 'images/2019/08/16 16:54:23/156594566309743.png');
INSERT INTO `mango_message_images` VALUES ('15', '10', 'images/2019/08/16 16:54:23/1565945663144140.png');
INSERT INTO `mango_message_images` VALUES ('16', '10', 'images/2019/08/16 16:54:23/156594566318260.png');
INSERT INTO `mango_message_images` VALUES ('17', '10', 'images/2019/08/16 16:54:23/156594566321999.png');
INSERT INTO `mango_message_images` VALUES ('18', '10', 'images/2019/08/16 16:54:23/156594566325449.png');
INSERT INTO `mango_message_images` VALUES ('19', '10', 'images/2019/08/16 16:54:23/156594566328556.png');
INSERT INTO `mango_message_images` VALUES ('20', '10', 'images/2019/08/16 16:54:23/156594566331784.png');
INSERT INTO `mango_message_images` VALUES ('21', '10', 'images/2019/08/16 16:54:23/156594566335160.png');
INSERT INTO `mango_message_images` VALUES ('22', '11', 'images/2019/08/16 16:55:31/156594573155371.png');
INSERT INTO `mango_message_images` VALUES ('23', '11', 'images/2019/08/16 16:55:31/1565945731599146.png');
INSERT INTO `mango_message_images` VALUES ('24', '11', 'images/2019/08/16 16:55:31/1565945731632126.png');
INSERT INTO `mango_message_images` VALUES ('25', '11', 'images/2019/08/16 16:55:31/156594573166365.png');
INSERT INTO `mango_message_images` VALUES ('26', '19', 'images/2019/08/16 19:33:36/1565955216267127.png');
INSERT INTO `mango_message_images` VALUES ('27', '25', 'images/2019/08/16 22:32:44/1565965964063117.png');
INSERT INTO `mango_message_images` VALUES ('28', '25', 'images/2019/08/16 22:32:44/1565965964102139.png');

-- ----------------------------
-- Table structure for mango_new_message
-- ----------------------------
DROP TABLE IF EXISTS `mango_new_message`;
CREATE TABLE `mango_new_message` (
  `new_message_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `new_message_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `new_message_type` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  `new_message_detail` varchar(255) NOT NULL,
  PRIMARY KEY (`new_message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_new_message
-- ----------------------------
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '5', '21', '1', '21', 'sadasdasdasdasdasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '6', '21', '1', '21', 'asdasdasdasasasdasdasd');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '7', '21', '1', '25', 'sadasdasdasasasd');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '8', '22', '1', '24', 'asdasasasdasasdasdasdasdasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '9', '22', '1', '24', '111111111111111111111111111111');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '10', '21', '1', '19', 'sadasdasdsasadasdasasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '12', '21', '1', '10', 'sadasdasdasdasdasdasd');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '13', '21', '1', '11', 'sadasdasdasdasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '14', '21', '1', '25', 'asdasdasdasdasdasd');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '19', '22', '1', '24', 'dasaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '20', '21', '1', '25', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '21', '21', '1', '25', 'aaaaaaaaaaaaaaaaaaaaaa');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '22', '21', '1', '25', '我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。我我我我现在就是一个是必须的那个软件吗。');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '23', '21', '1', '25', 'asdasdasdasdshjaskdhasjkdhsajkdasdasdasd');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '24', '21', '1', '25', 'asdasdasdasdasdsadsaasdasasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 18:50:34', '25', '21', '1', '4', 'asdasdasdasdasdasdasdasdasda');
INSERT INTO `mango_new_message` VALUES ('2019-08-17 19:11:37', '26', '21', '1', '25', '我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一我共一');

-- ----------------------------
-- Table structure for mango_notice
-- ----------------------------
DROP TABLE IF EXISTS `mango_notice`;
CREATE TABLE `mango_notice` (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT,
  `notice_detail` longtext NOT NULL,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_notice
-- ----------------------------
INSERT INTO `mango_notice` VALUES ('1', '芒果New Life 2.0正式发布');
INSERT INTO `mango_notice` VALUES ('2', '欢迎大家使用我们的小程序');
INSERT INTO `mango_notice` VALUES ('3', '如果有问题，请在我的界面联系我噢');

-- ----------------------------
-- Table structure for mango_shop
-- ----------------------------
DROP TABLE IF EXISTS `mango_shop`;
CREATE TABLE `mango_shop` (
  `shop_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(255) NOT NULL,
  `shop_intro` longtext NOT NULL,
  `shop_phone` varchar(255) NOT NULL,
  `shop_avatar` varchar(255) NOT NULL,
  `shop_latitude` varchar(255) NOT NULL,
  `shop_longitude` varchar(255) NOT NULL,
  `shop_creat_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_shop
-- ----------------------------
INSERT INTO `mango_shop` VALUES ('1', '某某商店', '一段描述', '123456789000', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '108.9431762695', '34.2679987360', '2019-08-15 19:00:00');
INSERT INTO `mango_shop` VALUES ('2', '某某商店', '一段描述', '666666666666', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '108', '34', '2019-08-15 20:25:33');

-- ----------------------------
-- Table structure for mango_shop_business
-- ----------------------------
DROP TABLE IF EXISTS `mango_shop_business`;
CREATE TABLE `mango_shop_business` (
  `business_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `shop_goods_image` varchar(255) NOT NULL,
  `shop_goods_title` varchar(255) NOT NULL,
  `shop_goods_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`business_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_shop_business
-- ----------------------------
INSERT INTO `mango_shop_business` VALUES ('1', '1', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '盖饭', '15.00');
INSERT INTO `mango_shop_business` VALUES ('2', '1', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '测试', '20.00');
INSERT INTO `mango_shop_business` VALUES ('3', '2', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '测试', '15.00');
INSERT INTO `mango_shop_business` VALUES ('4', '2', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg', '米饭', '10.00');

-- ----------------------------
-- Table structure for mango_shop_images
-- ----------------------------
DROP TABLE IF EXISTS `mango_shop_images`;
CREATE TABLE `mango_shop_images` (
  `shop_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `shop_images` varchar(255) NOT NULL,
  PRIMARY KEY (`shop_detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_shop_images
-- ----------------------------
INSERT INTO `mango_shop_images` VALUES ('1', '1', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg');
INSERT INTO `mango_shop_images` VALUES ('2', '1', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg');
INSERT INTO `mango_shop_images` VALUES ('3', '2', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg');
INSERT INTO `mango_shop_images` VALUES ('4', '2', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=457057301,2957259415&fm=26&gp=0.jpg');

-- ----------------------------
-- Table structure for mango_swiper
-- ----------------------------
DROP TABLE IF EXISTS `mango_swiper`;
CREATE TABLE `mango_swiper` (
  `swiper_id` int(11) NOT NULL AUTO_INCREMENT,
  `swiper_image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`swiper_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_swiper
-- ----------------------------
INSERT INTO `mango_swiper` VALUES ('1', 'http://img0.imgtn.bdimg.com/it/u=424233641,3202817263&fm=15&gp=0.jpg');
INSERT INTO `mango_swiper` VALUES ('2', 'http://img4.imgtn.bdimg.com/it/u=285866535,754232053&fm=15&gp=0.jpg');
INSERT INTO `mango_swiper` VALUES ('3', 'http://img0.imgtn.bdimg.com/it/u=4147480226,3583698002&fm=15&gp=0.jpg');
INSERT INTO `mango_swiper` VALUES ('4', 'http://img0.imgtn.bdimg.com/it/u=1055990694,1882863912&fm=15&gp=0.jpg');
INSERT INTO `mango_swiper` VALUES ('5', 'http://img0.imgtn.bdimg.com/it/u=3585502864,1315933428&fm=15&gp=0.jpg');

-- ----------------------------
-- Table structure for mango_user
-- ----------------------------
DROP TABLE IF EXISTS `mango_user`;
CREATE TABLE `mango_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_openid` varchar(255) NOT NULL,
  `user_gender` int(11) NOT NULL,
  `user_avatar` varchar(255) NOT NULL,
  `user_nickname` varchar(255) NOT NULL,
  `user_is_admin` int(11) NOT NULL DEFAULT '1',
  `user_allow` int(11) NOT NULL DEFAULT '1',
  `user_creat_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of mango_user
-- ----------------------------
INSERT INTO `mango_user` VALUES ('21', 'oJkG55ciUTRqDzrY1Mr4KFzzcRoQ', '1', 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIt68dtytiaSXU3AkY2XjYxA8cehzdicntdnUJI7IVBPia9yQNpvQ2HYhCXGMCw5iaR9YUaH9NEU5VyTA/132', '勿忘我', '2', '1', '2019-08-15 16:52:08');
INSERT INTO `mango_user` VALUES ('22', 'oJkG55eTLbRdhqPNz9e6sIN9J1Q0', '0', 'https://wx.qlogo.cn/mmopen/vi_32/EdlWtjkCMeibibHG9vOjukTbLmonRk9S5okaONwxn6E0tpkfiaGS3LKmvLwNbMrM7p7UtNDne0cf2HM2yribcMdEXA/132', '芷若初心', '1', '1', '2019-08-16 20:55:38');
INSERT INTO `mango_user` VALUES ('23', 'oJkG55RFXecc1mFOCOPPKKHRFIzE', '2', 'https://wx.qlogo.cn/mmopen/vi_32/9zviaicVWtRQNYqRzMVxSaYn7zibD7g5thgQA5NCATZgNbOrxkv2M3MGsXrvSicNLxQsnU6kUPpQGhOkSyibbODR39g/132', '谁懂我心', '1', '1', '2019-08-16 20:57:15');
