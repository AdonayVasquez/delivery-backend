import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import './database';
import {createRoles} from './libs/initialSetup';

import authRoutes from './routes/auth.routes';
import categoriaRoutes from './routes/categoria.routes';
import comercioRoutes from './routes/comercios.routes';

const app = express();

app.use(cors());
createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/comercios', comercioRoutes);

app.listen(3000);
console.log('Servidor levantado en puerto: ', 3000);