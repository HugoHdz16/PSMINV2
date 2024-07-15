const { Schema, model, default: mongoose } = require('mongoose');

const UserSchema = new mongoose.Schema({ 

    username: String,
    name: String,
    email: String,
    password: String
},
{
    timestamps: true
});

module.exports = model('User', UserSchema);
