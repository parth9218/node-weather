const request = require('request');
// const argv = require('yargs').argv;

let apikey = '22f86d80a7effd291134e4402cddbf25';
let unit = 'metric'

module.exports.getWeather = (city, cb) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`;
    request.get(url, (err, res, body) => {
        if(err) {
            cb(err);
        }
        else    {
            let weather = JSON.parse(body);
            cb(weather);
        }
    });
}



