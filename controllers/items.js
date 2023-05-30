const Item = require('../models/item');
// const Performer = require('../models/performer');

module.exports = {
  index,
  show,
  new: newItem,
  create,
  delete: deleteItem,
};

async function index(req, res) {
  const items = await Item.find({});
  res.render('items/index', { title: 'All Items', items });
}

async function show(req, res) {
  try {
    const itemDetail = await Item.findById(req.params.id)
    res.render('items/show', { title: 'Item Detail', item: itemDetail });
  } catch (err) {
    console.log(err);
    res.redirect('/items'); 
  }
}
function newItem(req, res) {
  res.render('items/new', { title: 'Add Item', errorMsg: '' });
}

async function create(req, res) {

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  try {
    const newItem = await Item.create(req.body);
    res.redirect(`/items/${newItem._id}`);
  } catch (err) {
    console.log(err);
    res.render('items/new', { errorMsg: err.message });
  }
}

async function deleteItem(req, res) {
  await Item.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}
  );
  res.redirect('/items');
}