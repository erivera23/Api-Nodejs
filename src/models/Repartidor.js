import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Repartidor = sequelize.define('repartidores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombres: {
        type: Sequelize.TEXT
    },
    apellidos: {
        type: Sequelize.TEXT
    },
    fechanacimiento: {
        type: Sequelize.DATE
    },
    usuario: {
        type: Sequelize.TEXT
    },
    clave: {
        type: Sequelize.TEXT
    },
    correo: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.INTEGER
    }
});

export default Repartidor;