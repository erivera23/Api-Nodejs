const PORT = process.env.PORT || 4000;
import express, { json } from 'express';
import morgan from 'morgan';
import path from 'path';
import multer from 'multer';

import routerEmpresa from './routes/empresa';
import routerProducto from './routes/productos';
import routerCategoria from './routes/categorias';
import routerCliente from './routes/clientes';
import routerRepartidor from './routes/repartidores';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//Importando rutas

app.use('/api/empresas', routerEmpresa);
app.use('/api/productos', routerProducto);
app.use('/api/categorias', routerCategoria);
app.use('/api/clientes', routerCliente);
app.use('/api/repartidores', routerRepartidor);

export default app;