CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  distance INTEGER,
  stars INTEGER,
  category VARCHAR,
  favorite_dish VARCHAR,
  takeout BOOLEAN,
  last_visit DATE
)

--Insert Data Statements
--

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Champ Burger', '1','4','American','Lunch Special','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('The Original Ninfas', '1','4','Mexican','Quesadillas','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Merida Mexican', '2','3','Mexican','Chicken Tacos','True', '01-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Jackson Street BBQ', '2','3','American','Brisket','True', '02-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Huynh', '2.4','2','Chinese','General Tso','True', '09-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Vic & Anthonys', '4','5','American','Ribeye Steak','True', '10-28-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Jack in the Box', '4','1','American','Ultimate Cheeseburger','True', '02-24-2017');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Kim Son', '2','1','Chinese','Schezuan Chicken','True', '05-15-2015');

INSERT INTO restaurant (name, distance, stars, category, favorite_dish, takeout, last_visit) VALUES ('Chick Fila', '5','4','American','Spicy Chicken Sandwich Deluxe','True', '10-01-2017');

--Queries
--

SELECT * FROM restaurant WHERE stars = 5;

SELECT favorite_dish FROM restaurant WHERE stars = 5;

SELECT * FROM restaurant WHERE name = 'Chick Fila';

SELECT * FROM restaurant WHERE category = 'American';

SELECT * FROM restaurant WHERE takeout = 'TRUE';

SELECT * FROM restaurant WHERE takeout = 'TRUE'
	AND category = 'American';

SELECT * FROM restaurant WHERE distance < 2;

SELECT * FROM restaurant WHERE last_visit < '09-27-2017';

SELECT * FROM restaurant WHERE last_visit < '09-27-2017'
  AND stars = 5;

--Aggregation and Sorting Queries
--
SELECT * FROM restaurant ORDER BY distance;

SELECT * FROM restaurant ORDER BY distance LIMIT 2;

SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2 WHERE distance < 2;

SELECT COUNT(*) FROM restaurant;

SELECT COUNT(category) FROM restaurant WHERE category = 'American';

SELECT category,
	COUNT(category)
	FROM restaurant GROUP BY category;

SELECT category,
  AVG(stars)
FROM restaurant GROUP BY category;

SELECT category,
  AVG(stars)
FROM restaurant GROUP BY category;

SELECT category,
	MAX(stars)
FROM restaurant GROUP BY category;
