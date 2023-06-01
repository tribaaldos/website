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
    quantity: {
      type: Number
    },
    brand: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: String,
      enum: ['shirts', 'pants', 'dresses', 'skirts', 'jackets', 'shoes', 'sweaters', 'activewear', 'underwear', 'accessories']
    },
    size: {
      type: String,
      enum: ['S', 'M', 'L'],
      required: function() {
        return this.category !== 'shoes';
      }
    },
    sizeShoes: {
      type: String,
      enum: ['8', '9', '10'],
      required: function() {
        return this.category === 'shoes';
      }
    },
    image: {
      type: String
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