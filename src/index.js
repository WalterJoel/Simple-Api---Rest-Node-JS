//import express from 'express';
//Morgan es un middleware, es decir procesa datos antes de que el servidor lo reciba
const morgan  = require('morgan');
const express = require('express');
const app = express();
const port = '8080';

//Settings

//En caso exista un puerto definido en la nube o donde despliegue que lo use, sino 
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2); //Defino espacio entre el json que retorno

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Routes 
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies')); //Para tener la convencion
app.use('/api/users',require('./routes/users')); //Para tener la convencion

//Starting the server
app.listen(app.get('port'),() => {
    console.log('Server On Port: ', app.get('port'))
});

