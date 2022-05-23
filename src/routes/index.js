const express = require('express');
const router = express.Router();

const controllerG = require('../controller/controller');


router.get('/',controllerG.inicio);