/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `carts`
--
DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `carts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    `user_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `carts`
--
LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */
;
INSERT INTO `carts`
VALUES (1, '2023-03-17 15:06:02', '2023-03-17 15:06:02', 1);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `colors`
--
DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `colors` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(30) NOT NULL,
    `ncs_value` varchar(15) NOT NULL,
    `rgb_value` varchar(16) NOT NULL,
    `hex_value` varchar(9) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `colors`
--
LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */
;
INSERT INTO `colors`
VALUES (
        1,
        'Pink',
        'NCS S 1040-Y80R',
        'rgb(241,115,89)',
        '#f17359',
        '2023-03-17 15:06:36',
        '2023-03-17 15:06:36'
    );
/*!40000 ALTER TABLE `colors` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `manufacturers`
--
DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `manufacturers` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(30) NOT NULL,
    `logo_url` varchar(1000) DEFAULT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `manufacturers`
--
LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */
;
INSERT INTO `manufacturers`
VALUES (
        1,
        'SAAB',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png',
        '2023-03-17 15:06:39',
        '2023-03-17 15:06:39'
    );
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `products` (
    `id` int NOT NULL AUTO_INCREMENT,
    `stock` int NOT NULL,
    `in_cart` int DEFAULT NULL,
    `name` varchar(30) NOT NULL,
    `category` varchar(30) NOT NULL,
    `image_url` varchar(1000) NOT NULL,
    `description` text NOT NULL,
    `price` float NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    `color_id` int NOT NULL,
    `cart_id` int DEFAULT NULL,
    `manufacturer_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `color_id` (`color_id`),
    KEY `cart_id` (`cart_id`),
    KEY `manufacturer_id` (`manufacturer_id`),
    CONSTRAINT `products_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `products_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE
    SET NULL ON UPDATE CASCADE,
        CONSTRAINT `products_ibfk_3` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 10 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `products`
--
LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */
;
INSERT INTO `products`
VALUES (
        1,
        40,
        2,
        'F├ñrg',
        'F├ñrg',
        'https://img.freepik.com/free-vector/blue-brush-stroke-watercolor-design_1035-21670.jpg',
        'En fin f├ñrg',
        5000,
        '2023-03-17 15:07:00',
        '2023-03-17 15:57:05',
        1,
        1,
        1
    ),
(
        2,
        50,
        NULL,
        'Falu R├Âdf├ñrg',
        'Big Bucket',
        'https://falurodfarg.com/app/uploads/2017/03/ljusrod_org-1024x768.jpg',
        'Nice Falu R├Âdf├ñrg. Looks great on any house!',
        250,
        '2023-03-17 16:04:13',
        '2023-03-17 16:04:13',
        1,
        NULL,
        1
    ),
(
        3,
        20,
        NULL,
        'F├ñrg',
        'f├ñrg',
        'https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators.jpg',
        'A good product to use for stuff',
        100,
        '2023-03-17 16:04:31',
        '2023-03-17 16:12:19',
        1,
        NULL,
        1
    ),
(
        4,
        1,
        NULL,
        'Thing',
        'Things',
        'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'It\'s a thing',
        100,
        '2023-03-17 16:05:44',
        '2023-03-17 16:05:44',
        1,
        NULL,
        1
    ),
(
        5,
        532,
        NULL,
        'Sprayed Ocean',
        'Sprays',
        'https://www.eurorc.se/tuotekuvat/1200x1200/tam85093.jpg',
        'Great blue spray paint, sticks to any surface!',
        45,
        '2023-03-17 16:06:43',
        '2023-03-17 16:09:25',
        1,
        NULL,
        1
    ),
(
        6,
        2,
        NULL,
        'Watch',
        'NotAColor',
        'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'A very cool watch to watch what time it is',
        1000,
        '2023-03-17 16:06:48',
        '2023-03-17 16:06:48',
        1,
        NULL,
        1
    ),
(
        8,
        1,
        NULL,
        'Truck',
        'Trucks',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'A truck for your warehouse or for homeusage. Driver included',
        100000,
        '2023-03-17 16:09:20',
        '2023-03-17 16:09:20',
        1,
        NULL,
        1
    ),
(
        9,
        1,
        NULL,
        'Nuclear Powerplant',
        'Infrastructure',
        'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'A nuclear powerplant to keep warm during the winter. Can generate both electricity and nuclear waste....mmmm yummy. Take a warm bath and host nice dinners',
        100000,
        '2023-03-17 16:16:01',
        '2023-03-17 16:16:01',
        1,
        NULL,
        1
    );
/*!40000 ALTER TABLE `products` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `ratings`
--
DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `ratings` (
    `id` int NOT NULL AUTO_INCREMENT,
    `score` int NOT NULL,
    `description` varchar(500) DEFAULT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    `user_id` int NOT NULL,
    `product_id` int NOT NULL,
    PRIMARY KEY (`id`),
    KEY `user_id` (`user_id`),
    KEY `product_id` (`product_id`),
    CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `ratings`
--
LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */
;
INSERT INTO `ratings`
VALUES (
        1,
        10,
        '10/10!',
        '2023-03-17 16:09:48',
        '2023-03-17 16:09:48',
        1,
        8
    );
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `user_name` varchar(30) NOT NULL,
    `first_name` varchar(30) DEFAULT NULL,
    `last_name` varchar(30) DEFAULT NULL,
    `address` varchar(30) DEFAULT NULL,
    `email` varchar(255) NOT NULL,
    `tel` varchar(255) DEFAULT NULL,
    `image_url` varchar(1000) NOT NULL,
    `password` varchar(100) NOT NULL,
    `created_at` datetime NOT NULL,
    `updated_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */
;
INSERT INTO `users`
VALUES (
        1,
        'Skruttlutt s',
        'Sebbe',
        'Lennis',
        'gatan 3',
        'skrutt@du.se',
        '112',
        'https://i.pinimg.com/236x/fd/14/a4/fd14a484f8e558209f0c2a94bc36b855--milk-tart-entertaiment-news.jpg',
        'dfsadfdasfwe',
        '2023-03-17 15:05:51',
        '2023-03-17 15:05:51'
    );
/*!40000 ALTER TABLE `users` ENABLE KEYS */
;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
