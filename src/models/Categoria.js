import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Empresa from './Empresa';

const Categoria = sequelize.define('categorias', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    }
});

Categoria.hasMany(Empresa, { foreignKey: 'idcategoria', sourceKey: 'id' });
Empresa.belongsTo(Categoria, { foreignKey: 'idcategoria', sourceKey: 'id' });

export default Categoria;