const mongoose = require("mongoose");

// user  schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age:
  {
    type: Number,
    require: true
  },
  email:{
    type: String,
  },
  mobile: {
    type: String
  },
  address:{
    type: String,
    require: true
  },
  aadharCardNumber:{
    type:Number,
    require: true,
    unique: true
  },
  password:{
    type: String,
    require: true
  },
  role:{
    type: String,
    enum: ['voter','admin'],
    default: 'voter'
  },
  isVoted:{
    type: Boolean,
    default: false
  }
});

const user=mongoose.model('user',userSchema);
module.exports=user;
