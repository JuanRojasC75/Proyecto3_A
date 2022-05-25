const express = require('express');
const router = express.Router();

const controllerG = require('../controller/controller');


router.get('/',controllerG.inicio);
router.get('/stock',controllerG.stock);
router.post('/',controllerG.poststock);


module.exports = router;