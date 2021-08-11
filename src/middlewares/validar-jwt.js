import jwt from 'jsonwebtoken';
import config from '../config';

const validarJWT = (req, res, next) => {

    // Leer el Token
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { _id } = jwt.verify( token, config.SECRET );
        req._id = _id;
        console.log('_id de token: ',_id);

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

}


module.exports = {
    validarJWT
}