const express = require('express')();
const app = express;
const request = require('request');
const bodyParser = require('body-parser');

const port = 5000;
const url 	= "https://www.datos.gov.co/resource/gt2j-8ykr.json"

app.get('/', (req, res) => res.send('hello World'));

app.get('/pacientesmasculinos', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val => val.sexo === 'M')
            res.send(result);
        }
    })
});
app.get('/pacientesfemeninos', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val => val.sexo === 'F')
            res.send(result);
        }
    })
});
app.get('/pacientesveinte', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val => val.edad <= 20)
            res.send(result);
        }
    })
});
app.get('/pacientescuarenta', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val => val.edad >20 && val.edad <= 40)
            res.send(result);
        }
    })
});
app.get('/pacientesmayores', (req, res) => {
    request (url, function(error, response, body) {
        if(!error &&  response.statusCode == 200){
            let parseBody = JSON.parse(body);
            let result = parseBody.filter(val =>  val.edad > 40)
            res.send(result);
        }
    })
});

app.listen(port,() => console.log(`App listening on port ${port}!`));
