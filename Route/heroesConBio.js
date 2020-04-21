const fs = require('fs');
const listadoHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));


const biografia = {
    biografiaHeroe: function (req, res) {
        const idHeroe = req.params.id;
        const ok = req.params.ok;
        const heroe = listadoHeroes.find(heroe => {
            return heroe.id == idHeroe;
        });
        if (!heroe) {
            return res.send(`No se encontro el heroe con id ${idHeroe}, intente nuevamente.`);
        }else{
            if(!ok)
            {
                return res.send(`Nombre del Heroes: ${heroe.nombre}, lamento que no desees saber más de mi :(`);
            }
        }
        res.send(
            `<h3>Nombre:</h3>
            <p>${heroe.nombre}</p>
            <h3>Biografia:</h3>
            <p> ${heroe.resenia}</p>​ 
            `)
    }
}

module.exports = biografia;