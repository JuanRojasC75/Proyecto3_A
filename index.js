const express = require("express");
const app = express();
const puerto = process.env.PORT;
//Módulo para juntar palabras y construir una ruta.
const path = require('path'); 
//Extrae información de la solicitud entrante.              
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('static'));

//Setttings
app.set('port',puerto);
app.set('views','/app/src/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');


//Routes
app.use(require(path.join(__dirname,'/src/routes/route')));




app.listen(puerto, () => {console.log("Ejecutando express");});

