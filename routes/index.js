var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', async (req, res, next) => {

  let q = await models.Question.find({});
  console.log(q);
  res.render('feed', { title: 'AskIT', feed: q });
});

router.get('/submit', async (req, res, next) => {
  res.render('submit', {});
});

router.post('/submit', async (req, res, next) => {
  if (req.body.title != '' && req.body.content != '' && req.body.author != ''){
    let q = new models.Question({
      author: req.body.author,
      title: req.body.title,
      content: req.body.content,
      answers: ['']
    });
    q.save();
    res.redirect('/q/' + q.id);
  }
  else {
    res.redirect('/');
  }
});

// app.get('/search/:query', function(req, res) {
//   let results = searchEngine.runSearch(req.query);
//   res.render('results', { results: results });
// });

router.get('/q/:id', async (req, res, next) => {
  console.log(req.params.id);

  let q = await models.Question.findById(req.params.id);

  console.log(q);

  // TODO: get question from id
  res.render('question', { question: q });
});

router.get('/q/up/:id', async (req, res, next) => {
  console.log(req.params.id);

  let q = await models.Question.findById(req.params.id);

  console.log(q);

  if (q.votes){
    q.votes += 1;
  }
  else {
    q.votes = 0;
  }
  q.save();
  res.redirect('/q/' + q.id);
  // TODO: get question from id
  //res.render('question', { question: q });
});

router.get('/q/down/:id', async (req, res, next) => {
  console.log(req.params.id);

  let q = await models.Question.findById(req.params.id);

  console.log(q);
  if (q.votes) {
  q.votes -= 1;
}
else {
  q.votes = 0;
}

  q.save();
  res.redirect('/q/' + q.id);
  // TODO: get question from id
  //res.render('question', { question: q });
});


module.exports = router;
