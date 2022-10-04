const {Router} = require('express'); //Llaves porque requiero un metodo de express y no el mismo express
const router = Router();



router.get('/', (req,res) => {
    res.send('Hello');
});


module.exports = router;