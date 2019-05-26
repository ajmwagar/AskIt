var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', async (req, res, next) => {

  let q = await models.Question.find({});
  console.log(q);
  res.render('feed', { title: 'AskIT', feed: q });
});

router.get('/about', async (req, res, next) => {

  res.render('about');
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
      answers: []
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

router.post('/q/answer/:id', async (req,res,next) => {
  console.log("Answer");
  let answer = req.body.answer;

  let q = await models.Question.findById(req.params.id);

  let ans = new models.Answer({
    author: "Anyonomous",
    content: req.body.answer,
    question: req.params.id
  });

  ans.save();

  q.answers.push(ans);

  await models.Question.findByIdAndUpdate(req.params.id, { $set: {answers: q.answers} }, {upsert: true, useFindAndModify: false});

  res.redirect('/q/'+req.params.id);
})

module.exports = router;
