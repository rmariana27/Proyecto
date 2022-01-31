const knex = require ('../bd/config');



const inicio = (req, res) => {
    res.render('index', {titulo: 'Dolce&Banana'})
}


const all = (req, res) => {
    knex
        .from('usuarios')
        .then((json) =>{
            //res.status(200).json({data: json});
            res.render('list', {data: json})
        })
}


const search = (req, res) => {
}



const createRegistro = (req, res) => {
}


const updateRegistro = (req, res) => {
}


const deleteRegistro = (req, res) => {
}


module.exports = {
    inicio,
    all,
    search,
    createRegistro,
    updateRegistro,
    deleteRegistro
}