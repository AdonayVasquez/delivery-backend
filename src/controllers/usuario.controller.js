import Role from '../models/Role';
import User from '../models/User';

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find({}, {}).populate("roles");
        console.log('Ver usuarios');
        res.json(usuarios);
    } catch (error) {
        console.error(error);
    }
}