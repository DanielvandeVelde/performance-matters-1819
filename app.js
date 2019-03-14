var compression = require('compression');
const express = require('express');
const minify = require('express-minify');
const path = require('path');
const app = express()
app.use(compression());
app.use(minify());
app.use(express.static(__dirname + '/public'));

app.use(compression())
const port = 3000
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => res.render('homepage', {
  title: 'oba trophy v1.1',
  ding: 'trofee'
}));

app.listen(port, () => console.log(`App listening on port ${port}!`))
