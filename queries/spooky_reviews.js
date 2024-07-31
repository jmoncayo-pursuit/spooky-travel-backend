// queries/spooky_reviews.js
const db = require('../db/dbConfig.js');

const getAllReviews = async (tour_id) => {
  try {
    const allReviews = await db.any(
      'SELECT * FROM spooky_reviews WHERE tour_id=$1',
      tour_id
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};

const getReview = async (id) => {
  try {
    const oneReview = await db.one(
      'SELECT * FROM spooky_reviews WHERE id=$1',
      id
    );
    return oneReview;
  } catch (error) {
    return error;
  }
};

const newReview = async (review) => {
  try {
    const newReview = await db.one(
      'INSERT INTO spooky_reviews (reviewer, title, content, rating, tour_id) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.tour_id,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      'DELETE FROM spooky_reviews WHERE id = $1 RETURNING *',
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      'UPDATE spooky_reviews SET reviewer=$1, title=$2, content=$3, rating=$4, tour_id=$5 WHERE id=$6 RETURNING *',
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.tour_id,
        review.id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
};
