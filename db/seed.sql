-- db/seed.sql

\c spooky_travel_dev;

-- Seed Data for tours table
INSERT INTO tours (name, description, url, category, is_favorite) VALUES
('Salem Witch Museum', 'Delve into the chilling history of the Salem Witch Trials.', 'https://salemwitchmuseum.com/', 'Museum', TRUE),
('Eastern State Penitentiary', 'Explore the crumbling halls of a once-notorious prison.', 'https://www.easternstate.org/', 'Historical', TRUE),
('The Stanley Hotel', 'Spend a night in the hotel that inspired "The Shining."', 'https://www.stanleyhotel.com/', 'Hotel', TRUE),
('New Orleans Ghost Adventures', 'Embark on a spooky walking tour through the French Quarter.', 'https://www.ghostcitytours.com/new-orleans/', 'Tour', TRUE),
('Waverly Hills Sanatorium', 'Experience the paranormal activity of a former tuberculosis sanatorium.', 'https://www.whslegends.com/', 'Historical', TRUE),
('Catacombs of Paris', 'Descend into the underground tunnels lined with millions of skeletons.', 'https://www.catacombes.paris.fr/en', 'Historical', TRUE),
('Aokigahara "Suicide Forest"', 'Hike through the eerie and desolate forest at the base of Mount Fuji.', 'https://www.japan-guide.com/e/e5210.html', 'Nature', TRUE);

-- Seed Data for spooky_reviews table
INSERT INTO spooky_reviews (tour_id, reviewer, title, content, rating) VALUES
(1, 'Sarah M.', 'A must-see in Salem!', 'The exhibits were so well-done and truly brought the history to life.', 5),
(2, 'John D.', 'Chilling experience', 'You can feel the weight of history in those cell blocks.', 4),
(3, 'Emily R.', 'Worth the hype!', 'The hotel itself is beautiful, and the ghost stories just add to the charm.', 5),
(4, 'Mike T.', 'Spooky and informative', 'Our guide was fantastic and told great stories about the city''s haunted past.', 4),
(5, 'Jessica S.', 'Intense paranormal activity', 'We had some unexplained experiences on our tour that left us speechless.', 5),
(6, 'David L.', 'A sobering reminder of history', 'The sheer number of skeletons is both fascinating and unsettling.', 4),
(7, 'Amanda P.', 'Eerie and beautiful', 'The forest has a strange beauty, but it''s definitely an unsettling place.', 3);