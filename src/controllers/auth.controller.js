import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const registro = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User ({
        username,
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
    
    const token = jwt.sign({id:savedUser._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token})
}

export const ingreso = async (req, res) => {
    res.json('ingreso')
}