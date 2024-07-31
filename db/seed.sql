-- db/seed.sql

\c spooky_travel_dev;

-- Seed Data for tours table
INSERT INTO tours (name, description, url, is_favorite) VALUES
('Haunted Mansion', 'Explore the old mansion with a spooky history.', 'http://example.com/haunted-mansion', TRUE),
('Ghost Tour', 'A guided tour through the most haunted spots in the city.', 'http://example.com/ghost-tour', TRUE),
('Spooky Forest', 'Hike through the eerie forest known for its ghostly sightings.', 'http://example.com/spooky-forest', FALSE),
('Creepy Castle', 'Visit the castle where many paranormal activities have been reported.', 'http://example.com/creepy-castle', TRUE),
('Witchcraft Museum', 'Learn about witchcraft and the dark arts in this historical museum.', 'http://example.com/witchcraft-museum', FALSE),
('Abandoned Asylum', 'A tour through the eerie and abandoned asylum.', 'http://example.com/abandoned-asylum', TRUE),
('Murder Mystery Dinner', 'Enjoy a thrilling dinner while solving a murder mystery.', 'http://example.com/murder-mystery-dinner', TRUE);
