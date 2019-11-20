import express, { json } from 'express';
import morgan from 'morgan';
import routerEmpresa from './routes/empresa';
import routerProducto from './routes/productos';
import routerCategoria from './routes/categorias';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//Importando rutas

app.use('/api/empresas', routerEmpresa);
app.use('/api/productos', routerProducto);
app.use('/api/categorias', routerCategoria);

export default app;