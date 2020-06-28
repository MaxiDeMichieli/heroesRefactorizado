const fs = require('fs');

let heroesController = {
    db: './data/heroes.json',
    leerJSON: () => {
        let heroesJSON = fs.readFileSync(heroesController.db, 'utf-8');
        let heroes = JSON.parse(heroesJSON);
        return heroes
    },
    heroes: (req, res) => {
        res.send(heroesController.leerJSON());
    },
    detalle: (req, res) => {
        let id = req.params.id;
        let heroe = heroesController.leerJSON().filter((heroe) => {
            if(heroe.id == id){
                return heroe;
            };
        });
        heroe = heroe[0];
        if(heroe == undefined){
            res.send('Este héroe no fue encontrado :(  pruebe con otro numero de id.')
        }else{
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}.`)
        };
    },
    bio: (req, res) => {
        let id = req.params.id;
        let ok = req.params.ok;
        let heroe = heroesController.leerJSON().filter((heroe) =>{
            if(heroe.id == id){
                return heroe;
            };
        });
        heroe = heroe[0];

        if(ok != 'ok'){
            if(heroe == undefined){
                res.send('No encontramos un héroe para mostrarte en su biografía')
            }else{
                res.send(`${heroe.nombre}. Lamento que no desees saber más de mi :(`)
            }
        }else{
            if(heroe != undefined){
                res.send(`${heroe.nombre}: ${heroe.resenia}`)
            }else{
                res.send('No encontramos un héroe para mostrarte en su biografía')
            }
        };
    }
};

module.exports = heroesController;