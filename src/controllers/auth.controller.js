import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';
import User from '../models/User';
import { generarJWT } from '../helpers/jwt';


export const registro = async (req, res) => {
    const { firstName, lastName, email, password, roles } = req.body;

    const newUser = new User ({
        firstName,
        lastName,
        email,
        password: await User.encryptPassword(password)
    })

    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({name: 'cliente'})
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Generar JWT
    const token = await generarJWT( savedUser._id );
    /* const token = jwt.sign({id:savedUser._id}, config.SECRET, {
        expiresIn: 86400
    }) */

    res.json({token})
}

export const ingreso = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles");
    if (req.body.email.length<1) return res.status(400).json({message: "Correo electrónico es requerido"});
    if (!userFound) return res.status(400).json({message: "Correo electrónico no existe"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if (req.body.password.length<1) return res.status(401).json({token:null, message:'La contraseña es requerida'})
    if (!matchPassword) return res.status(401).json({token:null, message:'Contraseña incorrecta'})
    
    // Generar JWT
    const token = await generarJWT( userFound._id );
    /* const token = jwt.sign({id:userFound._id}, config.SECRET, {
        expiresIn: 86400
    }) */

    res.json({token});
}

export const renovarToken = async (req, res) => {

    const _id = req._id;

    // Generar JWT
    const token = await generarJWT( _id );

    console.log('id desde controller',req._id);

    res.json({
        ok: true,
        token
    });

}