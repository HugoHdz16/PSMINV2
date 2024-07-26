const user = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//Trae todo el usuario
exports.getUser = async (req, res) => {
    
   const getuser = await user.find();

   if(!getuser) return res.status(401).send(err);

   res.status(200).send(getuser);

}

//registro del usuario
exports.SignUp = async(req, res) => {
    const { username, name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({username, name, email, password: hashedPassword});

    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id} , 'secretkey');

    res.status(200).json({token});
}

//validación del usuario
exports.SignIn = async(req, res) => {

    const {username, password } = req.body;
    const User = await user.findOne({ username });
    

    if(!User) return res.status(401).send('Usuario no existe');

    const isMatch = await bcrypt.compare(password, User.password);
    if(!isMatch) return res.status(401).send('Contraseña equivocada');

    const token = jwt.sign({_id: User._id}, 'secretkey');
    return res.status(200).json({ token });
}

exports.getUserbyid = async(res, req) => {

    const User = user.findById(req.params.id);

    if(!User) return res.status(401).send("usuario no encontrado");

    return res.status(200).send(User);

}
