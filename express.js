var express = require('express');

var PORT = 8000;
var HOST = 'localhost';

var app = express();

app.get('/', function(req, res){
    res.json({
        title: 'Home'
    });
});

app.get('/hey', function(req, res) {
    res.send('HEY!');
});
app.post('/ho', function(req, res) {
    res.send('HO!');
});

app.get('/students', function (req, res, next) {
    res.json({msg: 'Wonna code like a boss graduate from Rolling Scopes!'})
});

app.get('/about', function(req, res){
    res.json({
        title: 'About',
            contact: {
                topic: 'React',
                description: 'react router 4'
            }
        });
});

app.get('/contact', function(req, res){
    res.json({
        title: 'Contact',
        contact: {
            name: 'Aliaksandr',
            telephone: '12312312'
        }
    });
});


app.listen(process.env.PORT || PORT, () => console.log('started'));
