import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Cliente = sequelize.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.TEXT
    },
    clave: {
        type: Sequelize.TEXT
    },
    nombres: {
        type: Sequelize.TEXT
    },
    apellidos: {
        type: Sequelize.TEXT
    },
    identidad: {
        type: Sequelize.TEXT
    },
    correo: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.TEXT
    },
    direccion: {
        type: Sequelize.TEXT
    },
    latitud: {
        type: Sequelize.TEXT
    },
    longitud: {
        type: Sequelize.TEXT
    },
    avatar: {
        type: Sequelize.TEXT
    }
});

export default Cliente;