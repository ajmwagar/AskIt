var express = require('express');
var router = express.Router();

/* GET API page. */
router.get('/', function(req, res, next) {
  res.json(null);
});

module.exports = router;
