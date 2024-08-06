import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

});


export const LogModel = mongoose.model('Product', productSchema );