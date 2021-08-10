import express from 'express';
import morgan from 'morgan';
import './database';
import authRoutes from './routes/auth.routes';

import {createRoles} from './libs/initialSetup';

const app = express();
createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(3000);
console.log('Servidor levantado en puerto: ', 3000);