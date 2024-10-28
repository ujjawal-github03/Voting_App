const mongoose = require("mongoose");

// candidate schema
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  candidateId:{
    type: Number,
    required: true
  },
  party:{
    type: String,
    required: true
  },
  age:
  {
    type: Number,
    require: true
  },
  votes:
  [ //Stores Object, where each obj represents each vote
    {
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        votedAt:
        {
            type: Date,
            default: Date.now()
        }
    }
  ],
  voteCount:
  {
    type: Number,
    default: 0
  }

});

const candidate=mongoose.model('candidate',candidateSchema);
module.exports=candidate;
