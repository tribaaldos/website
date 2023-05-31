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
        enum: ['$', '€', 'Yen', 'CH.']
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
      
})



module.exports = mongoose.model('Item', itemSchema);