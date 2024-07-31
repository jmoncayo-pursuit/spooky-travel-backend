// queries/tours.js
const db = require('../db/dbConfig.js');

const getAllTours = async () => {
  try {
    const allTours = await db.any('SELECT * FROM tours');
    return allTours;
  } catch (error) {
    return error;
  }
};

const getTour = async (id) => {
  try {
    const oneTour = await db.one(
      'SELECT * FROM tours WHERE id=$1',
      id
    );
    return oneTour;
  } catch (error) {
    return error;
  }
};

const createTour = async (tour) => {
  try {
    const newTour = await db.one(
      'INSERT INTO tours (name, url, category, description, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        tour.name,
        tour.url,
        tour.category,
        tour.description,
        tour.is_favorite,
      ]
    );
    return newTour;
  } catch (error) {
    return error;
  }
};

const deleteTour = async (id) => {
  try {
    const deletedTour = await db.one(
      'DELETE FROM tours WHERE id = $1 RETURNING *',
      id
    );
    return deletedTour;
  } catch (error) {
    return error;
  }
};

const updateTour = async (id, tour) => {
  try {
    const updatedTour = await db.one(
      'UPDATE tours SET name=$1, url=$2, category=$3, description=$4, is_favorite=$5 WHERE id=$6 RETURNING *',
      [
        tour.name,
        tour.url,
        tour.category,
        tour.description,
        tour.is_favorite,
        id,
      ]
    );
    return updatedTour;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updateTour,
};
