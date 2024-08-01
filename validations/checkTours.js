// validations/checkTours.js
const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite === 'true' ||
    is_favorite === 'false' ||
    is_favorite === true ||
    is_favorite === false ||
    is_favorite === undefined
  ) {
    next();
  } else {
    res
      .status(400)
      .json({
        error: 'is_favorite must be a boolean value or undefined',
      });
  }
};

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name) {
    next();
  } else {
    res.status(400).json({ error: 'A name is required' });
  }
};

const validateURL = (req, res, next) => {
  const { url } = req.body;
  const regex = /^[^ "]+\.[^ "]+$/;
  if (!url || regex.test(url)) {
    next();
  } else {
    res.status(400).json({ error: 'A valid URL is required' });
  }
};

module.exports = { checkBoolean, checkName, validateURL };
