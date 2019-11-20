import express, { json } from 'express';
import morgan from 'morgan';
import routerEmpresa from './routes/empresa';
import routerProducto from './routes/productos';
import routerCategoria from './routes/categorias';
import routerCliente from './routes/clientes';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//Importando rutas

app.use('/api/empresas', routerEmpresa);
app.use('/api/productos', routerProducto);
app.use('/api/categorias', routerCategoria);
app.use('/api/clientes', routerCliente);

export default app;