-- db/schema.sql

DROP DATABASE IF EXISTS spooky_travel_dev;
CREATE DATABASE spooky_travel_dev;

\c spooky_travel_dev;

CREATE TABLE tours (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 description TEXT,
 is_favorite BOOLEAN
);

CREATE TABLE spooky_reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT,
 title TEXT,
 content TEXT,
 rating NUMERIC CHECK (rating >= 0 AND rating <= 5),
 tour_id INTEGER NOT NULL REFERENCES tours (id) ON DELETE CASCADE
);
