
const express = require('express'),
      pgp = require('pg-promise')(),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser');

// app.set('view engine', 'html');
// app.set('views', __dirname + '/views/');
// app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(require('./router'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}!`);

