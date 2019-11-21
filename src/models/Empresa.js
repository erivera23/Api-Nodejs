import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Producto from './Producto';

const Empresa = sequelize.define('empresa', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    descripcion: {
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
    correo: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.TEXT
    },
    avatar: {
        type: Sequelize.TEXT
    },
    idcategoria: {
        type: Sequelize.INTEGER
    },
    usuario: {
        type: Sequelize.TEXT
    },
    clave: {
        type: Sequelize.TEXT
    },
    estado: {
        type: Sequelize.INTEGER
    },
    fechanacimiento: {
        type: Sequelize.DATE
    }
});

Empresa.hasMany(Producto, { foreignKey: 'idEmpresa', sourceKey: 'id' });
Producto.belongsTo(Empresa, { foreignKey: 'idEmpresa', sourceKey: 'id' });

export default Empresa;