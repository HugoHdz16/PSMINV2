const user = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const token = jwt;


//Trae todo el usuario
exports.getUser = async (req, res) => {
   const getuser = user.find();

   if(!getuser) return res.status(404).send('Usuario no encontrado').send(err);

   
   return res.status(200).send(getuser);

}

//registro del usuario
exports.SignUp = async(req, res) => {
    const { username, name, email, password } = req.body;

    const salt = await bcrypt.compare(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({username, name, email, password: hashedPassword});

    await newUser.save();

    token.sign({_id: newUser._id} , 'secretkey');

    res.status(200).send('usuario guardado con exito.').json({token});
}

//validación del usuario
exports.SignIn = async(req, res) => {

    const {username, password } = req.body;
    const User = await user.findOne({ username });

    if(!User) return res.status(401).send('Usuario no existe');

    const isMatch = await bcrypt.compare(password, User.password);
    if(!isMatch) return res.status(401).send('Contraseña equivocada');

    token.sign({_id: User._id}, 'secretkey');
    return res(200).json({ token });
}
