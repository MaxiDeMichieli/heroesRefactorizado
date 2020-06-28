let mainController = {
    home: (req, res) => {
        res.send('Ni superman, Iron Mam o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!')
    },
    creditos: (req, res) => {
        res.send('Página creada por Máximo De Michieli.')
    }
};

module.exports = mainController;