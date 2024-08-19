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

// Get all reviews for a specific tour
reviews.get('/', async (req, res) => {
  const { tour_id } = req.params;

  try {
    const tour = await getTour(tour_id);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    const reviews = await getAllReviews(tour_id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get a single review by id
reviews.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const review = await getReview(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new review
reviews.post('/', async (req, res) => {
  const { tour_id } = req.params;
  const newReviewData = { ...req.body, tour_id };

  try {
    const newReview = await newReview(newReviewData);
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a review by id
reviews.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedReviewData = { ...req.body, id };

  try {
    const updatedReview = await updateReview(updatedReviewData);
    if (!updatedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a review by id
reviews.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await deleteReview(id);
    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = reviews;
