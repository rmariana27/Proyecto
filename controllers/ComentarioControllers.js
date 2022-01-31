const knex = require ('../bd/config');
const res = require('express/lib/response');


const inicio = (req, res) => {
    res.render('comentarios')
};


const listado = (req, res)=>{
    knex
    .select()
    .table('comentario')
    .then((rows) => {
        for (row of rows) {
            //console.log(`${row['idComentario']} ${row['cuenta']} ${row['detalle']}`);
            res.render('/listaComentarios', {rows});

        }
    });
    }
    /* knex
        .from('comentario').select("*")
        .then((rows) =>{
            //res.status(200).json({data: json});
            res.render('listaComentarios', {data: rows})
        });
     */
    /* knex.from('comentario').select("*")
        .then((rows) => {
            for (row of rows) {
                //console.log(`${row['idComentario']} ${row['cuenta']} ${row['detalle']}`);
                res.render('/listaComentarios', {rows});
            }
        }).catch((err) => { 
            console.log(err); throw err})
            .finally(() => {
            knex.destroy();
    }); */



/* const inicio = (req, res) => {
    res.render('listaComentarios', {rows})
}; */


const idComentario = (req, res) => {

}

const formularioComentario = (req, res) => {
    res.render('comentarios');
};

const crearComentario = (req, res) => {

    const { cuenta, detalle } = req.body;
    function validacion() {
    if (cuenta == "" || detalle == "") {
        let validacion = "Faltan datos para guardar el comentario";
        res.render('/api/comentarios', { 
            validacion, 
            cuenta,
            detalle
        });
    } else {
        knex('dolcebanana.comentario').insert({
            cuenta,
            detalle
        }).then((rows) =>{
            res.render('mensajeComentario', (rows));
        })
        .catch(error => {
            console.log(error);
        })
    }
}
    validacion();
}


function actualizarComentario(idComentario){
        /* return knex('dolcebanana.comentarios').where('idComentario', dolcebanana.comentario.idComentario)
            .update('cuenta', dolcebanana.comentario.cuenta)
            .then( editRowNum => {
                return editRowNum
            })
            .catch(err => {
                throw err
            }) */
};


function eliminarComentario(idComentario){
    /* return knex('dolcebanana.comentarios').where('idComenterio', idComenterio).del()
        .then( deleteRowNum => {            
            return deleteRowNum
        })
        .catch(err => {
            throw err
        }) */
};




    module.exports = {
        inicio,
        listado,
        idComentario,
        formularioComentario,
        crearComentario,
        actualizarComentario,
        eliminarComentario
    };
