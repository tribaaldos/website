const Item = require('../models/item');

module.exports = {
  create,
  // Add this export
  delete: deleteReview
};

async function deleteReview(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const item = await Item.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
  // Rogue user!
  if (!item) return res.redirect('/items');
  // Remove the review using the remove method available on Mongoose arrays
  item.reviews.remove(req.params.id);
  // Save the updated item doc
  await item.save();
  // Redirect back to the item's show view
  res.redirect(`/items/${item._id}`);
}

async function create(req, res) {
  const item = await Item.findById(req.params.id);

  // Add the user-centric info to req.body (the new review)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  item.reviews.push(req.body);
  try {
    // Save any changes made to the item doc
    await item.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/items/${item._id}`);
}