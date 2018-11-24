/*
Navicat MySQL Data Transfer

Source Server         : localhosttest
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : js212

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2018-11-24 15:33:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for answers
-- ----------------------------
DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `QuestionID` int(11) DEFAULT NULL,
  `Answers` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `UserID` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answers
-- ----------------------------
INSERT INTO `answers` VALUES ('1', '1000', '1', 'خوب ');
INSERT INTO `answers` VALUES ('3', '1001', '1', ' افتضاح');
INSERT INTO `answers` VALUES ('5', '1001', '2', 'شنا');

-- ----------------------------
-- Table structure for questionoptions
-- ----------------------------
DROP TABLE IF EXISTS `questionoptions`;
CREATE TABLE `questionoptions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `QuestionID` int(11) DEFAULT NULL,
  `QuestionItems` varchar(255) DEFAULT NULL,
  `ItemOrder` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKquestionId` (`QuestionID`),
  CONSTRAINT `FKquestionId` FOREIGN KEY (`QuestionID`) REFERENCES `questions` (`QuestionID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questionoptions
-- ----------------------------
INSERT INTO `questionoptions` VALUES ('5', '2', 'فوتبال', '1');
INSERT INTO `questionoptions` VALUES ('6', '2', 'والیبال', '2');
INSERT INTO `questionoptions` VALUES ('7', '2', 'بسکتبال', '3');
INSERT INTO `questionoptions` VALUES ('8', '2', 'شنا', '4');

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `QuestionID` int(11) NOT NULL AUTO_INCREMENT,
  `QuestionsType` varchar(255) DEFAULT NULL,
  `QuestionsContent` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`QuestionID`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES ('1', '1', 'حال شما چطور است؟');
INSERT INTO `questions` VALUES ('2', '1', 'از زندگی راضی هستید؟');
INSERT INTO `questions` VALUES ('3', '2', 'چه ورزش هایی را دوست می دارید؟');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1000', '123');
INSERT INTO `user` VALUES ('1001', '1234');
INSERT INTO `user` VALUES ('1002', '12345');
INSERT INTO `user` VALUES ('1003', '123456');

-- ----------------------------
-- Table structure for user_copy
-- ----------------------------
DROP TABLE IF EXISTS `user_copy`;
CREATE TABLE `user_copy` (
  `UserID` int(11) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_copy
-- ----------------------------
INSERT INTO `user_copy` VALUES ('1000', '123');
INSERT INTO `user_copy` VALUES ('1001', '1234');
INSERT INTO `user_copy` VALUES ('1002', '12345');
INSERT INTO `user_copy` VALUES ('1003', '123456');
