
const knex = require('knex')({

    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '#Nana2021',
        database: 'dolcebanana'
    },

    pool: { min: 0, max: 8 }

});

knex.schema.hasTable('contacto').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('contacto', function(t) {
            t.increments('idContacto').primary();
            t.string('nombre', 100);
            t.string('apellido', 100);
            t.string('telefono', 100);
            t.string('mail', 100);
            t.string('fecha', 30);
            t.string('consulta', 100);
            });
    }
});



knex.schema.hasTable('usuario').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('usuario', function(t) {
            t.increments('idUsuario').primary();
            t.string('nombre', 100);
            t.string('cuenta', 100);
            t.string('contraseña', 15);
            t.string('rol', 30);
        });
    }
});



knex.schema.hasTable('comentario').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('comentario', function(t) {
            t.increments('idComentario').primary();
            t.string('cuenta', 100);
            t.string('detalle', 100);
            });
    }
});




   module.exports = knex;
