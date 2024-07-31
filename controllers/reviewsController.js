// controllers/reviewsController.js
const express = require('express');

const reviews = express.Router({ mergeParams: true });

const { getTour } = require('../queries/tours');

const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require('../queries/spooky_reviews');

reviews.get('/', async (req, res) => {
  const { tour_id } = req.params;
  const reviews = await getAllReviews(tour_id);
  const tour = await getTour(tour_id);

  if (tour.id) {
    res.status(200).json({ ...tour, reviews });
  } else {
    res.status(500).json({ error: 'Tour not found or server error' });
  }
});

reviews.get('/:id', async (req, res) => {
  const { tour_id, id } = req.params;
  const review = await getReview(id);
  const tour = await getTour(tour_id);

  if (review) {
    res.json({ ...tour, review });
  } else {
    res.status(404).json({ error: 'not found' });
  }
});

reviews.put('/:id', async (req, res) => {
  const { id, tour_id } = req.params;
  const updatedReview = await updateReview({
    tour_id,
    id,
    ...req.body,
  });
  res.status(200).json(updatedReview);
});

reviews.post('/', async (req, res) => {
  try {
    const review = await newReview(req.body);
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

reviews.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json('Review not found');
  }
});

module.exports = reviews;
