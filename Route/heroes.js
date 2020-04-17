const fs = require('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroes =  {
    listarHeroes: function(req,res) {
        
        res.send(listadoHeroes);
    }
}

module.exports = heroes;