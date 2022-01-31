
const knex = require ('../bd/config');
const nodemailer = require('nodemailer');



const inicio = (req, res) => {
    res.render('/api/consulta')
}



const all = (req, res) => {
    knex
        .from('contactos')
        .then((json) =>{
            res.render('/consulta', {data: json})
        })
}

const mostrarConsulta = (req, res) => {
    res.render('/consulta')
};

const search = (req, res) => {
}



const createConsulta = (req, res) => {
 
 const {nombre, apellido, telefono, mail, fecha, consulta} = req.body;

 function validacion() {
    if (nombre == "" || apellido =="" || telefono == "" || mail =="" || fecha =="" || consulta == "") {
        let validacion = "Por favor completa los datos";
        res.render('consulta', {
        validacion,
        nombre, 
        apellido, 
        telefono, 
        mail, 
        fecha, 
        consulta
        });
    }else {
        knex('dolcebanana.contacto').insert({
            nombre,
            apellido, 
            telefono, 
            mail, 
            fecha, 
            consulta
        }).then(() =>{
            res.render ('formularioEnviado', {
                nombre,
                apellido, 
                telefono, 
                mail, 
                fecha, 
                consulta
            }).catch(error => {
                console.log(error);
            });
        })
    }
}
validacion();
}




const updateConsulta = (req, res) => {
}


const deleteConsulta = (req, res) => {
}


module.exports = {
    inicio,
    all,
    mostrarConsulta,
    search,
    createConsulta,
    updateConsulta,
    deleteConsulta
};


