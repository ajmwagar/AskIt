var models = require('./models');
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://askit:askit!2019@ds261616.mlab.com:61616/ask-it', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.info("Connected to MongoDB");
  ask();
});

async function ask(){
  let title , content, author;

  rl.question('Title: ', (ans) => {
    title = ans;
    rl.question('Content: ', (ans) => {
      content = ans;
      rl.question('Author: ', (ans) => {
        author = ans;
        let q = new models.Question({
          author,
          title,
          content,
          answers: ['']
        });

        console.log(q);
        rl.question('Does this look ok? (y(es)/n(o)) ', (answer) => {
          if (answer.match(/^y(es)?$/i)) {
            console.log("OK! Saving to database");
            q.save((err) => {
              if (err){
                console.error(err);
              }
              else {
                console.log("Saved!")
                rl.close();
                process.exit(0);
              }

            });
          }
          else {
            console.log("OK! Restarting questions...");
            ask();
          }
        });
      }); 
    }); 
  }); 
}
