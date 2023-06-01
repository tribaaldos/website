const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
  const itemSchema = new Schema({
    title: {
      type: String
    },
    price: {
      type: Number
    },
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'JPY', 'GBP', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL']
    },
    image: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: String,
      enum: ['shirts', 'pants', 'dresses', 'skirts', 'jackets', 'sweaters', 'activewear', 'underwear', 'accessories']
    },
    quantity: {
      type: Number
    },
    reviews: [reviewSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String,
  });
  


module.exports = mongoose.model('Item', itemSchema);