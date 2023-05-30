const Item = require('../models/item');
// const Performer = require('../models/performer');

module.exports = {
  index,
  show,
  new: newItem,
  create
};

async function index(req, res) {
  const items = await Item.find({});
  res.render('items/index', { title: 'All Items', items });
}

async function show(req, res) {
  try {
    const itemDetail = await Item.findById(req.params.id)
    // const performers = await Performer.find({ _id: { $nin: item.cast } }).sort('name');
    res.render('items/show', { title: 'Item Detail', item: itemDetail });
  } catch (err) {
    console.log(err);
    res.redirect('/items'); // Manejar el error de acuerdo a tus necesidades
  }
}
function newItem(req, res) {
  res.render('items/new', { title: 'Add Item', errorMsg: '' });
}

async function create(req, res) {

  // Remove empty properties so that defaults will be applied
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  try {
    // Update this line because now we need the _id of the new item
    const newItem = await Item.create(req.body);
    // Redirect to the new item's show functionality 
    res.redirect(`/items/${newItem._id}`);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('items/new', { errorMsg: err.message });
  }
}