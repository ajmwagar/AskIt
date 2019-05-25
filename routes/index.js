var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', async (req, res, next) => {

  let q = await models.Question.find({}); 
  console.log(q);
  res.render('feed', { title: 'AskIt', feed: q });
});

router.get('/q/:id', async (req, res, next) => {
    // let q = new models.Question({
    //   author: 'Avery Wagar',
    //   title: 'What is 1 + 1?',
    //   content: 'What is 1 + 1',
    //   answers: ['']
    // });

    // console.log(q);

    // q.save();
  console.log(req.params.id);

  let q = await models.Question.findById(req.params.id); 

  console.log(q);

  // TODO: get question from id
  res.render('question', { question: q });
});

module.exports = router;
