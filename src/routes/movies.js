const {Router, request} = require('express');
const router   = Router();

const movies   = require('../samples.json');
console.log(movies);
router.get('/', (req,res)   => {    
        //res.send('desde movies');
        res.json(movies);
    })

//Hare esta peticion post desde insomnia o postman
router.delete('/:id',(req,res) => {
    const {id}       = req.params;
    const foundMovie = movies.find(iter => iter.id === id);
    console.log('found' ,foundMovie)
    if(foundMovie){
        movies.splice(foundMovie); //Elimino
        res.json(movies);
    }
    else{
        res.status(500).send('Movie not found');
    }
})
router.put('/:id',(req,res) => {
    const {id}       = req.params;
    const foundMovie = movies.find(iter => iter.id === id);
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        console.log('foundmovie',foundMovie);
            foundMovie.title = title;
            foundMovie.year = year;
            foundMovie.rating = rating;   
            foundMovie.director = director;
            res.json(movies);
    }
    else{
        res.status(500).send('Movie not found');
    }
})
router.post('/', (req, res) => {
        const {title, director, year, rating} = req.body;
        if(title && director && year && rating){ //Aqui podriamos usar express validator si es correo, str, etc
            const id       = movies.length+1;
            const newMovie = {...req.body ,id}; // ... Quiere decir que copio todo lo q tiene req.body en el nuevo objeto  
            movies.push(newMovie);
            res.json(movies);
        }
        else{
            res.send('wrong request')
        }
    })


module.exports = router;