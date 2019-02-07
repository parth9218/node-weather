const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { getWeather } = require('./weather.js');
const app = express()
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.route('/').get
((req, res) => {
  res.render('index', { weather: null, error: null});
})
.post((req, res) => {
  getWeather(req.body.city, (weather) => {
    if(weather.main)  {
      let weatherText = `It's ${weather.main.temp} degress in ${weather.name}!`;
      res.render('index', { weather: weatherText, error: null })
    }
    else  {
        res.render('index', { weather: null, error: 'Error, please try again'});
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})