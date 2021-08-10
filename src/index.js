import express from 'express';
import morgan from 'morgan';
import './database';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.listen(3000);
console.log('Servidor levantado en puerto: ', 3000);