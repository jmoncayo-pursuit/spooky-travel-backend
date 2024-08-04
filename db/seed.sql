-- db/seed.sql

\c spooky_travel_dev;

-- Seed Data for tours table
INSERT INTO tours (name, description, url) VALUES
('Haunted Mansion', 'Explore the old mansion with a spooky history.', 'http://example.com/haunted-mansion'),
('Ghost Tour', 'A guided tour through the most haunted spots in the city.', 'http://example.com/ghost-tour'),
('Spooky Forest', 'Hike through the eerie forest known for its ghostly sightings.', 'http://example.com/spooky-forest'),
('Creepy Castle', 'Visit the castle where many paranormal activities have been reported.', 'http://example.com/creepy-castle'),
('Witchcraft Museum', 'Learn about witchcraft and the dark arts in this historical museum.', 'http://example.com/witchcraft-museum'),
('Abandoned Asylum', 'A tour through the eerie and abandoned asylum.', 'http://example.com/abandoned-asylum'),
('Murder Mystery Dinner', 'Enjoy a thrilling dinner while solving a murder mystery.', 'http://example.com/murder-mystery-dinner');

-- Seed Data for spooky_reviews table
INSERT INTO spooky_reviews (tour_id, reviewer, title, content, rating) VALUES
(1, 'John Doe', 'Amazing Experience', 'An unforgettable experience, highly recommend!', 5),
(2, 'Jane Smith', 'Great Tour', 'The tour guide was fantastic and the stories were spine-chilling.', 4),
(3, 'Jim Brown', 'Not Spooky', 'Not as spooky as expected, but still an interesting hike.', 3),
(4, 'Susan White', 'Creepy Castle', 'The castle was incredibly creepy, and the stories were chilling.', 5),
(5, 'Lucy Black', 'Fascinating Museum', 'The museum was fascinating and well-curated.', 4),
(6, 'Tom Green', 'Eerie Experience', 'A truly eerie experience; felt like I was being watched.', 5),
(7, 'Alice Blue', 'Fun Dinner', 'The dinner was fun and engaging, and the mystery was well-crafted.', 4);