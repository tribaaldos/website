const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({

})
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

    reviews: [commentSchema],
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
      
})



module.exports = mongoose.model('Item', itemSchema);