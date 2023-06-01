const express = require('express')
const router = express.Router();

const orderCtrl = require ('../controllers/orders')
const ensureLoggedIn = require ('../config/ensureLoggedIn');



router.get('/orders' , orderCtrl.index);
router.post('/orders/:itemId', ensureLoggedIn, orderCtrl.create);




module.exports = router;