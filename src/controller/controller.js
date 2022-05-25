const fs = require('fs')
const path = require('path'); 
const controller = {};
let Productosx = [];
var Descripcion = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, illo? Aliquam nisi repellat, nesciunt illum odit eos repellendus natus itaque eligendi eaque dignissimos sapiente officiis? Rem molestiae eum asperiores blanditiis."  
// Imagen: url1,
Productosx.push({nombre:"Iphone 12",descripcion:Descripcion,Numero:1});
Productosx.push({nombre:"Iphone 11",descripcion:Descripcion,Numero:2});
Productosx.push({nombre:"Iphone 10",descripcion:Descripcion,Numero:3});

controller.inicio = (req,res) => {
    // Productosx = require('../controller/controller')
    res.render('index.html', {Productos:Productosx});
}
controller.stock = (req,res) => {
    // Productosx = require('../controller/controller')
    res.render('Stock.html', {Productos:Productosx});
}
controller.poststock = (req,res) => {
    // Productosx = require('../controller/controller')
    console.log(req.body.cantidad)
    res.render('Stock.html', {Productos:Productosx});
}
// controller.senddatos = (req,res) => {
      
//     console.log(Productosx);
//     module.exports = Productosx;
//     res.render('index.html', { nume: Productosx});
// }





module.exports = controller;