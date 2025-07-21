CREATE DATABASE IF NOT EXISTS `application` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `application`;

CREATE TABLE
	IF NOT EXISTS `income` (
		`id` bigint unsigned NOT NULL AUTO_INCREMENT,
		`income` bigint,
		PRIMARY KEY (`id`)
	);

CREATE TABLE
	IF NOT EXISTS `transactions` (
		`id` bigint unsigned NOT NULL AUTO_INCREMENT,
		`transaction` varchar(1000),
		`transaction_category` varchar(1000),
		`amount` bigint,
		`date_of_transaction` varchar(1000),
		PRIMARY KEY (`id`)
	);

CREATE TABLE
	IF NOT EXISTS `budgets` (
		`id` bigint unsigned NOT NULL AUTO_INCREMENT,
		`category` varchar(1000),
		`category_limit_amount` bigint,
		`color` varchar(1000),
		PRIMARY KEY (`id`)
	);

CREATE TABLE
	IF NOT EXISTS `pots` (
		`id` bigint unsigned NOT NULL AUTO_INCREMENT,
		`pot_name` varchar(1000),
		`money_saved` bigint,
		`target` bigint,
		`color` varchar(1000),
		PRIMARY KEY (`id`)
	);

CREATE TABLE
	IF NOT EXISTS `recurringbills` (
		`id` bigint unsigned NOT NULL AUTO_INCREMENT,
		`title` varchar(1000),
		`due_date` bigint,
		`amount` bigint,
		PRIMARY KEY (`id`)
	);

INSERT INTO
	`income` (income)
VALUES
	(180000),
	(30000);

INSERT INTO
	`transactions` (
		`transaction`,
		`transaction_category`,
		`amount`,
		`date_of_transaction`
	)
VALUES
	('Salary', 'General', 180000, '09-Sep-2024'),
	('Big Basket', 'Groceries', -2000, '09-Sep-2024'),
	('Free lancing', 'General', 30000, '10-Sep-2024'),
	('Rent', 'Bills', -22000, '11-Sep-2024'),
	('Movie', 'Entertainment', -500, '11-Sep-2024'),
	('Electricity', 'Bills', -500, '08-Sep-2024'),
	('Blink It', 'Groceries', -800, '10-Sep-2024'),
	(
		'Mobile Phone Recharge',
		'Bills',
		-249,
		'07-Sep-2024'
	),
	('Mc Donalds', 'Dining Out', -2000, '07-Sep-2024'),
	('Nykka', 'Personal Care', -1500, '09-Sep-2024');

INSERT INTO
	`budgets` (`category`, `category_limit_amount`, `color`)
VALUES
	('Housing', 22000, '#277C78'),
	('Utilities', 15000, '#626070'),
	('Food', 20000, '#82C9D7'),
	('Dining out', 10000, '#F2CDAC'),
	('Personal Care', 5000, '#826cb0');

INSERT INTO
	`pots` (`pot_name`, money_saved, target, `color`)
VALUES
	('Equity', 20000, 100000, '#277C78'),
	('Fixed Deposit', 5000, 15000, '#626070'),
	('Digital Gold', 15000, 50000, '#82C9D7'),
	('Stocks', 45000, 200000, '#F2CDAC');

INSERT INTO
	`recurringbills` (`due_date`, `title`, `amount`)
VALUES
	(5, 'Spotify', 119),
	(1, 'Rent', 22000),
	(16, 'Furniture Rent', 1500),
	(10, 'Water', 600),
	(10, 'WiFi', 800),
	(20, 'Netflix', 1000)