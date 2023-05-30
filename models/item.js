const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String,
      
})


module.exports = mongoose.model('Item', itemSchema);