var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AskIt' });
});

router.get('/q/:id', (req, res, next) => {
  // TODO: get question from id
  res.render('question', { id: req.params.id });
});

module.exports = router;
