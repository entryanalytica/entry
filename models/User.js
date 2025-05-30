const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
  availbalance:{
    type: String,
    default: '00.00'
  },
  activedeposit:{
    type: String,
    default: '00.00'
  },
  activeinvestment:{
    type: String,
    default: '00.00'
  },
  withdrawals:{
    type: String,
    default: '00.00'
  },
  plantype:{
    type: String,
    default: 'None'
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
