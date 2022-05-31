const fs = require('fs')
const path = require('path'); 
const controller = {};
let Productosx = [];
var Descripcion = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, illo? Aliquam nisi repellat, nesciunt illum odit eos repellendus natus itaque eligendi eaque dignissimos sapiente officiis? Rem molestiae eum asperiores blanditiis."  
// Imagen: url1,
Productosx.push({nombre:"Iphone 12",descripcion:Descripcion,Cantidad:10,Numero:1});
Productosx.push({nombre:"Iphone 11",descripcion:Descripcion,Cantidad:10,Numero:2});
Productosx.push({nombre:"Iphone 10",descripcion:Descripcion,Cantidad:10,Numero:3});

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
    CantidadAsignada_ = req.body.cantidad 
    for (let index = 0; index < Productosx.length; index++) {
        Productosx[index].Cantidad = Number(Productosx[index].Cantidad) + Number(CantidadAsignada_[index]);
    }
    res.render('index.html', {Productos:Productosx});
}
controller.comprar = (req,res) => {
    // Productosx = require('../controller/controller')
    CantidadAsignada_ = req.body.Cantidadcarrito 
    // console.log(CantidadAsignada_)
    for (let index = 0; index < Productosx.length; index++) {
        Productosx[index].Cantidad = Number(Productosx[index].Cantidad) - Number(CantidadAsignada_[index]);
    }
    res.render('index.html', {Productos:Productosx});
}
module.exports = controller;