const fs = require('fs')
const path = require('path'); 
const controller = {};
let Productosx = [];
var numero = 0;
var Descripcion = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, illo? Aliquam nisi repellat."  
// Imagen: url1,
//url10 = "https://www.alkosto.com/medias/194252429945-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wyMTU4Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDJiL2hhYy8xMDQ5OTU5MDAyOTM0Mi5qcGd8Y2I0MTE3MGNmZGIyNTUzMDFmNTdkMTczYjUwOGZiMjFjMzcyMjk4ZmYzZWZlNWY0MGU0MDExNTUzOTA1ZjJmZA";
Productosx.push(
    {
        nombre:"ThinkPad E14 2da Gen - Black (Intel)",
        Imagen: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-e14-gen-2-hero.png?context=bWFzdGVyfHJvb3R8MjY4OTA2fGltYWdlL3BuZ3xoYTAvaGIyLzE0MTA2OTIyMzE5OTAyLnBuZ3xkMTM5OTVhY2M3ODRhNGZlOGZiN2M0N2RlNjJiYTA4Zjg2ZjUwM2RhY2UyM2VkZWYwMzY4OTA3ZmQ3ZTlkYjVh",
        Cantidad:10,
        Numero:1
});
Productosx.push(
    {
        nombre:"MacBook Air 13' M1 8GB",
        Imagen: "https://blogging-techies.com/wp-content/uploads/2021/12/Pura-locura-%C2%A1el-MacBook-Air-M1-por-menos-de-1000.jpg",
        Cantidad:10,
        Numero:2
});
Productosx.push(
    {
        nombre:"PORTÁTIL HP PAVILION",
        Imagen: "https://panamericana.vteximg.com.br/arquivos/ids/428874-1080-1080/portatil-hp-amd-ryzen-5-ram-8-gb-256-gb-ssd-15-eh0008la-15-6-fhd-azul-niebla-195697341489.jpg?v=637813350931600000",
        Cantidad:10,
        Numero:3
});


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
        url1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnTSEV-Eha-jvBZjfalA1qvVNHIFcmhNj1A&usqp=CAU"
    }
    else if (im =="2")
    {
        url1="https://falabella.scene7.com/is/image/FalabellaCO/23889429_1?wid=800&hei=800&qlt=70"
    }
    else if (im =="3")
    {
        url1="https://www.ktronix.com/medias/7708430041251-001-750Wx750H.jpg?context=bWFzdGVyfGltYWdlc3wyMDA3MzF8aW1hZ2UvanBlZ3xpbWFnZXMvaGMzL2hmNS8xMTUxNjczMDYwNTU5OC5qcGd8Yzc0NWIxMGMwN2QzOWUyZTc5ODI1OWRmNTZmZmRmNzE5NDQ0ZWY0YzhhYzNlYTE3Nzg2Nzk4YzkxYTY0YjAwMQ"
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