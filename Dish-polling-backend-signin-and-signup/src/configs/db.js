const mongoose = require('mongoose');
module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://Arjun:Arjun009@cluster0.4dwre.mongodb.net/arjun-auth-app?retryWrites=true&w=majority'
  );
};


