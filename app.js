
const express = require('express');
const home = require('./Route/home');
const heroes = require('./Route/heroes');
const heroesId = require('./Route/heroesId');
const biografia = require('./Route/heroesConBio');
const creditos = require('./Route/creditos');
const app = express();
const port = 3030;

app.listen(port, () => console.log('Server running in 3030 port'));

app.get('/',home.bienvenido);
app.get('/heroes',heroes.listarHeroes);
//app.get('/heroes/detalle/:id', heroesId.obtenerHeroe);
app.get('/heroes/detalle/:id/:ok?', biografia.biografiaHeroe);
app.get('/creditos', creditos.creditosTM);
