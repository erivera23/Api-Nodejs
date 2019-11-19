import express, { json } from 'express';
import morgan from 'morgan';
import router from './routes/projects';
import routerTask from './routes/tasks';
import routerEmpresa from './routes/empresa';
import routerProducto from './routes/productos';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//Importando rutas
app.use('/api/projects', router);
app.use('/api/tasks', routerTask);
app.use('/api/empresas', routerEmpresa);
app.use('/api/productos', routerProducto);

export default app;