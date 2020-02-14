/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : mango_new_life

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2020-02-14 17:26:04
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
-- Table structure for mango_notice
-- ----------------------------
DROP TABLE IF EXISTS `mango_notice`;
CREATE TABLE `mango_notice` (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT,
  `notice_detail` longtext NOT NULL,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

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
-- Table structure for mango_swiper
-- ----------------------------
DROP TABLE IF EXISTS `mango_swiper`;
CREATE TABLE `mango_swiper` (
  `swiper_id` int(11) NOT NULL AUTO_INCREMENT,
  `swiper_image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`swiper_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

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
