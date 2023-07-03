const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 
});

const Tator = mongoose.model('Pengguna', userSchema);

module.exports = Tator;
