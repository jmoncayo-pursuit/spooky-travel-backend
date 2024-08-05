const express = require('express');
const router = express.Router();
const db = require('../db/dbConfig');
const {
  checkName, // Assuming you still want to check for name
  validateURL,
} = require('../validations/checkTours');

// Index Route
router.get('/', async (req, res) => {
  try {
    const tours = await db.any('SELECT * FROM tours');
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Show Route
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await db.one(
      'SELECT * FROM tours WHERE id = $1',
      id
    );
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Route
router.post('/', checkName, validateURL, async (req, res) => {
  const { name, description, url } = req.body;
  try {
    const newTour = await db.one(
      'INSERT INTO tours (name, description, url) VALUES ($1, $2, $3) RETURNING *',
      [name, description, url]
    );
    res.status(201).json(newTour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Route
router.put('/:id', checkName, validateURL, async (req, res) => {
  const { id } = req.params;
  const { name, description, url } = req.body;
  try {
    const updatedTour = await db.one(
      'UPDATE tours SET name=$1, description=$2, url=$3 WHERE id=$4 RETURNING *',
      [name, description, url, id]
    );
    res.json(updatedTour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Route
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTour = await db.one(
      'DELETE FROM tours WHERE id=$1 RETURNING *',
      id
    );
    res.json(deletedTour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
