const fs = require('fs')
const path = require('path'); 
const controller = {};


controller.inicio = (req,res) => {
    res.render('index.html');
}