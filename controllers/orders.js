const Order = require('../models/order');
const Item = require('../models/item');

module.exports = {
  index,
  create,
};

async function create(req, res) {
  
  const itemId = req.params.itemId;
  const quantity = parseInt(req.body.quantity);
  const userId = req.user._id;

  try {

    const order = new Order({
      items: [{ item: itemId, quantity }],
      isPaid: true,
      user: userId,
    });
    console.log(order)
    await order.save();
 res.redirect('/orders');
  } catch (err) {
    console.log(err);
  }
}

async function index(req, res) {
  const orders = await Order.find({ user: req.user._id })
    .populate({ path: "items", populate: { path: "item", model: "Item" } })
    .populate("user")
    .sort({ "items.item.price": 1 })
    .exec();
  console.log(orders);
  res.render('orders/index', { title: 'All Orders', orders });
} 

