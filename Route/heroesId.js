const fs = require('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroesId = {
    obtenerHeroe: function (req, res) {
        const idHeroe = req.params.id;
        const heroe = listadoHeroes.find(heroe => {
            return heroe.id == idHeroe;
        });
        if (!heroe) {
            return res.send(`No se encontro el heroe con id ${idHeroe}, intente nuevamente.`);
        }
        res.send(
            `Hola, mi nombre es ${heroe.nombre} y soy  ${heroe.profesion}.​ 
            `)
    }
}

module.exports = heroesId;