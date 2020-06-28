const express = require('express');
const app = express();

const heroes = require('./routes/heroes');
const main = require('./routes/main');

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));


app.use('/', main);

app.use('/heroes', heroes);

app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!')
});