<<<<<<< HEAD
const express = require('express'),
      pgp = require('pg-promise')(),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser');
=======
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// app.set('view engine', 'html');
// app.set('views', __dirname + '/views/');
// app.use(express.static(__dirname + '/public/'));
>>>>>>> e10933ef6bc0a1f4d12502476702292268f51bc0

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(require('./router'));

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}!`);
=======
const Port = process.env.Port || 9000;

app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
>>>>>>> e10933ef6bc0a1f4d12502476702292268f51bc0
});
