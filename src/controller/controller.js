const fs = require('fs')
const path = require('path'); 
const controller = {};
let Productosx = [];
var numero = 0;
var Descripcion = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, illo? Aliquam nisi repellat."  
// Imagen: url1,
url10 = "https://www.alkosto.com/medias/194252429945-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyMTU4Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDJiL2hhYy8xMDQ5OTU5MDAyOTM0Mi5qcGd8Y2I0MTE3MGNmZGIyNTUzMDFmNTdkMTczYjUwOGZiMjFjMzcyMjk4ZmYzZWZlNWY0MGU0MDExNTUzOTA1ZjJmZA";
Productosx.push({nombre:"Iphone 12",descripcion:Descripcion,Cantidad:10,Numero:1,Imagen: url10});
Productosx.push({nombre:"Iphone 11",descripcion:Descripcion,Cantidad:10,Numero:2,Imagen: url10});
Productosx.push({nombre:"Iphone 10",descripcion:Descripcion,Cantidad:10,Numero:3,Imagen: url10});

controller.inicio = (req,res) => {
    // Productosx = require('../controller/controller')
    res.render('index.html', {Productos:Productosx});
}
controller.stock = (req,res) => {
    // Productosx = require('../controller/controller')
    res.render('Stock.html', {Productos:Productosx});
}
controller.add = (req,res) => {
    // Productosx = require('../controller/controller')
    res.render('agregarproductos.html');
}
controller.addproductos = (req,res) => {
    var Body = req.body;
    var Nombre=req.body.nom;
    var Descripcion=req.body.desp;
    var im = req.body.img;
    if(im == "1"){
        url1="https://www.alkosto.com/medias/194252039922-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyMzEzOTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI5L2g1OS85OTQ5MjE2NDczMTE4LmpwZ3wzNzI4YzVlNzk1MjJiZTVmMWU4OWM0MTM0YTE2ZDQ2ZTM0ZjA4NTVhOTAzNjNiNzE3ODY5ZGIwODAwYzJhOTMw"
    }
    else if (im =="2")
    {
        url1="https://www.alkosto.com/medias/194252716304-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxMTI3NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDVjL2hmNi8xMDc5Mjg0OTExMzExOC5qcGd8ZDgwMWQ5OTIxYjk0YTRhMmJlMzkyZTE1NjgzYTRkNzE1YmNlMmVmNGEyYzBjZDc4M2EwYWRiZWE1NjQ3NzA4ZQ"
    }
    else if (im =="3")
    {
        url1="https://www.alkosto.com/medias/194253120056-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wxNDgwNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ3L2hhYy8xMTcyMzg1MTU5NTgwNi5qcGd8NDdhZWE3NTM4MDYyYjA5MDM2ZTA1NzI3N2VlMTExMjBjZDM4ZjcyYTAwMWU5NmEzZWY3YjBkMDRiNGY4YTRhZQ"
    }
    // var Img=path.resolve("C:\\  Users\\CO-189\\Imágenes\\"+im.toString());
    // var Img=req.body.imgp;
    // console.log(im);
    numero += 1;  
    //  Productosx.push({nombre:Nombre,descripcion:Descripcion,Imagen: url1,Numero:numero});  
     Productosx.push({nombre:Nombre,descripcion:Descripcion,Cantidad:req.body.cantidad,Numero:1,Imagen: url1});
    console.log(Productosx);
    module.exports = Productosx;
    res.render('agregarproductos.html');
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