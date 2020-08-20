const express = require('express')();
const app = express;
const request = require('request');
const bodyParser = require('body-parser');

const port = 5000;
const url 	= "https://www.datos.gov.co/resource/gt2j-8ykr.json"

app.get('/', (req, res) => res.send('hello World'));

app.get('/pacientes', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val => val.sexo === 'M')
            res.send(result);
        }
    })
});

app.listen(port,() => console.log(`App listening on port ${port}!`));
