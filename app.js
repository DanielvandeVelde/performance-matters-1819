const express = require('express');
const path = require('path');
const app = express()
const port = 3000
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('homepage', {
  title: 'oba trophy v1.1',
  ding: 'trofee'
}));

app.listen(port, () => console.log(`App listening on port ${port}!`))
