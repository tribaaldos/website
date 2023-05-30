const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const itemsCtrl = require('../controllers/items');
const ensureLoggedIn = require('../config/ensureLoggedIn');

	
// GET /item
router.get('/', itemsCtrl.index);
// GET /item/new
router.get('/new', ensureLoggedIn, itemsCtrl.new);
// GET /item/:id (show functionality) MUST be below new route
router.get('/:id', itemsCtrl.show);
// POST /item
router.post('/', ensureLoggedIn, itemsCtrl.create);

router.delete('/:id', itemsCtrl.delete);

module.exports = router;
