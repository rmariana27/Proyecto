const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require ('body-parser');
const hbs = require('hbs');
const Port = 3000;



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


//Configuración del motor de plantillas handlebars
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Configurar las Rutas de mi aplicación
app.use('/api/comentarios', require('./routes/comentarioRut'));
app.use('/api/consulta', require('./routes/consultaRut'));



//Rutas
app.get('/', (req, res) => {
    res.render('index', {titulo: 'Dolce & Banana'})
});

app.get('/consulta', (req, res) =>{
    res.render('consulta')
});


app.get('/pedidos', (req, res) =>{
    res.render('pedidos')
});

app.get('/comentarios', (req, res) =>{
    res.render('comentarios')
});

app.get('/productos', (req, res)=>{
    res.render('productos')
});

app.get('/listaProductos', (req, res)=>{
    res.render('listaProductos')
});

app.get('/combos', (req, res)=>{
    res.render('combos')
});

app.get('/registro', (req, res)=>{
    res.render('registro')
});

app.get('/listaComentarios', (req, res)=>{
    res.render('listaComentarios')
});

//Configuración del Puerto
app.listen(Port, () =>{
    console.log(`Servidor corriendo en el puerto ${Port}`);
});

app.on('error', (err) => {
    console.log(`Error en la ejecución del Servidor: ${error}`);
});

