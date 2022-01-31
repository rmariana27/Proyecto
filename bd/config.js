
const knex = require('knex')({

    client: 'mysql2',
    connection: {
        host: 'ec2-54-157-15-228.compute-1.amazonaws.com',
        port: 5432,
        user: 'bfafmwumtlsssl',
        password: 'd23527f0a7d0bbe4af0ca6ae996f715b020c60b411ba32d84f1b995def6576f1',
        database: 'd73hge7s1flh8p'
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
