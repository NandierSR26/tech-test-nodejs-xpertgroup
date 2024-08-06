import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },

});


export const LogModel = mongoose.model('Product', productSchema );