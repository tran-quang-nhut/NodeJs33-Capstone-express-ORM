/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `binh_luan` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `noi_dung` varchar(1000) DEFAULT NULL,
  `ngay_binh_luan` date DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE,
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(300) NOT NULL,
  `duong_dan` varchar(1000) NOT NULL,
  `mo_ta` varchar(1000) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` date DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE CASCADE,
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(300) NOT NULL,
  `mat_khau` varchar(300) NOT NULL,
  `ho_ten` varchar(300) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `noi_dung`, `ngay_binh_luan`) VALUES
(1, 1, 'ảnh đẹp', '2022-12-01');
INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `noi_dung`, `ngay_binh_luan`) VALUES
(1, 2, 'quá đẹp', '2022-12-01');
INSERT INTO `binh_luan` (`nguoi_dung_id`, `hinh_id`, `noi_dung`, `ngay_binh_luan`) VALUES
(2, 1, 'tuyệt vời', '2022-11-02');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1, 'hinh a', 'https://picsum.photos/id/1/500/400.jpg', NULL, 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(2, 'hinh ba', 'https://picsum.photos/id/2/500/400.jpg', NULL, 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(3, 'hinh cde', 'https://picsum.photos/id/3/500/400.jpg', NULL, 2);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(4, 'hinh def', 'https://picsum.photos/id/4/500/400.jpg', NULL, 3),
(5, 'hinh moi', '/public/images/1671885274975_test.jpg', 'hinh dep', 3);

INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 3, '2022-12-01');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(2, 4, '2022-12-01');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(3, 1, '2022-12-01');
INSERT INTO `luu_anh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(3, 2, '2022-12-01'),
(3, 3, '2022-11-02');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1, 'nhut@gmail.com', '123', 'Quang Nhut', 25, NULL);
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(2, 'nhut1@gmail.com', '123', 'Quang Nhut1', 26, NULL);
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(3, 'nhut2@gmail.com', '123', 'Quang Nhut2', 27, NULL);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;