SELECT code, name, population FROM country
    WHERE region = "Southern Europe"
    ORDER BY population
    LIMIT 1;

SELECT language FROM countrylanguage
    WHERE countrycode = "VAT";

SELECT countrycode FROM countrylanguage
    WHERE language = "Italian" AND isofficial = "t" AND percentage = 100;

SELECT name FROM city 
    WHERE  countrycode = "SMR" AND name != "San Marino";

SELECT name, countrycode FROM city
    WHERE name LIKE ("Serr%") AND countrycode != "SMR";

-- #6
SELECT name, capital FROM country
    WHERE code = "BRA";

SELECT name FROM city
    WHERE id = 211;

SELECT name FROM city
    WHERE population = 91084;