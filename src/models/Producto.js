import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Producto = sequelize.define('productos', {
    id: 
    {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre:
    {
        type: Sequelize.TEXT
    },
    descripcion:
    {
        type: Sequelize.TEXT
    },
    idEmpresa:
    {
        type: Sequelize.INTEGER
    },
    avatar:
    {
        type: Sequelize.TEXT
    },
    precio:
    {
        type: Sequelize.DOUBLE
    }
});

export default Producto;