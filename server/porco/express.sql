/*
 _____       ___   _____       ___   _____       ___   _____   _____        _____   _____   __   _   _____   _____        ___   _____   _   _____   __   _  
|  _  \     /   | |_   _|     /   | |  _  \     /   | /  ___/ | ____|      /  ___| | ____| |  \ | | | ____| |  _  \      /   | |_   _| | | /  _  \ |  \ | | 
| | | |    / /| |   | |      / /| | | |_| |    / /| | | |___  | |__        | |     | |__   |   \| | | |__   | |_| |     / /| |   | |   | | | | | | |   \| | 
| | | |   / / | |   | |     / / | | |  _  {   / / | | \___  \ |  __|       | |  _  |  __|  | |\   | |  __|  |  _  /    / / | |   | |   | | | | | | | |\   | 
| |_| |  / /  | |   | |    / /  | | | |_| |  / /  | |  ___| | | |___       | |_| | | |___  | | \  | | |___  | | \ \   / /  | |   | |   | | | |_| | | | \  | 
|_____/ /_/   |_|   |_|   /_/   |_| |_____/ /_/   |_| /_____/ |_____|      \_____/ |_____| |_|  \_| |_____| |_|  \_\ /_/   |_|   |_|   |_| \_____/ |_|  \_| 
 */


CREATE DATABASE IF NOT EXISTS `porco.main` DEFAULT CHARACTER SET utf8;

USE `porco.main`;

/* Table `good` */
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sn` TEXT DEFAULT NULL,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `unit` VARCHAR(255) DEFAULT NULL,
  `description` LONGTEXT DEFAULT NULL,
  `images` LONGTEXT DEFAULT NULL,
  `vendor` LONGTEXT DEFAULT NULL,
  `price` LONGTEXT DEFAULT NULL,
  `tags` TEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/* end of `good` */

/* Table `cart` */
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `user` LONGTEXT DEFAULT NULL,
  `goods` LONGTEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
/* end of `cart` */

/* Table `administrator` */
DROP TABLE IF EXISTS `administrator`;
CREATE TABLE `administrator` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `user` LONGTEXT DEFAULT NULL,
  `privilages` LONGTEXT DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `role` VARCHAR(255) DEFAULT NULL,
  `comment` TEXT DEFAULT NULL,
  `phone` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `cert` LONGTEXT DEFAULT NULL,
  `passwordhash` TEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/* end of `administrator` */

/* Table `order` */
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `cart` LONGTEXT DEFAULT NULL,
  `user` LONGTEXT DEFAULT NULL,
  `address` TEXT DEFAULT NULL,
  `usercomment` TEXT DEFAULT NULL,
  `comment` TEXT DEFAULT NULL,
  `payment` LONGTEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
/* end of `order` */

/* Table `price` */
DROP TABLE IF EXISTS `price`;
CREATE TABLE `price` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `good` LONGTEXT DEFAULT NULL,
  `unit` VARCHAR(255) DEFAULT NULL,
  `currency` VARCHAR(255) DEFAULT NULL,
  `price` LONGTEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
/* end of `price` */

/* Table `user` */
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` TEXT DEFAULT NULL,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `gender` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `comment` TEXT DEFAULT NULL,
  `birthday` VARCHAR(255) DEFAULT NULL,
  `accounts` TEXT DEFAULT NULL,
  `addresses` TEXT DEFAULT NULL,
  `memberships` TEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
/* end of `user` */

/* Table `vendor` */
DROP TABLE IF EXISTS `vendor`;
CREATE TABLE `vendor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `createdtime` VARCHAR(255) DEFAULT NULL,
  `updatedtime` VARCHAR(255)  DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(255) DEFAULT NULL,
  `contact` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `address` TEXT DEFAULT NULL,
  `comment` TEXT DEFAULT NULL,
  `extend` LONGTEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
/* end of `vendor` */
