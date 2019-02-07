const request = require('request');
const argv = require('yargs').argv;

let apikey = '22f86d80a7effd291134e4402cddbf25';
let city = argv.c || 'petlad';
let unit = 'metric'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`;
request.get(url, (err, res, body) => {
    if(err) {
        console.error(err);
    }
    else    {
        let weather = JSON.parse(body);
        console.log(`${weather.main.temp} ${weather.name}`);
    }
});