const express = require('express');

const router = express.Router();

//Register
router.get('/register', (req, res, next) => {
  res.send('REGISTER');
});
//Authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('authenticate');
});
//Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
