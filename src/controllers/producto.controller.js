import Producto from '../models/Producto';

export async function createProducto(req, res) {
    const { nombre, descripcion, idempresa, avatar, precio } = req.body;
    try {
        const nuevoProducto = await Producto.create({
            nombre,
            descripcion,
            idempresa,
            avatar,
            precio
        }, {
            fields: ['nombre', 'descripcion', 'idempresa', 'avatar', 'precio']
        });

        if (nuevoProducto) {
            return res.json({
                mensaje: "Producto agregado exitosamente.",
                data: nuevoProducto
            });
        }
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function getProductos(req, res) {
    try {
        const productos = await Producto.findAll({
            attributes: ['id', 'nombre', 'descripcion', 'idempresa', 'avatar', 'precio']
        });

        res.json({
            data: productos
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function getOneProducto(req, res) {
    const { id } = req.params;

    try {
        const producto = await Producto.findOne({
            where: { id },
            attributes: ['id', 'nombre', 'descripcion', 'idempresa', 'avatar', 'precio']
        });


        return res.json({
            producto
        });

    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function getProductosByEmpresa(req, res) {
    const { idempresa } = req.params;

    try {
        const productos = await Producto.findAll({
            where: { idempresa },
            attributes: ['nombre', 'descripcion', 'avatar', 'precio']
        });

        res.json({
            data: productos
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function updateProducto(req, res) {
    const { id } = req.params;
    const { nombre, descripcion, avatar, precio } = req.body;

    try {
        const actualizaProducto = await Producto.update({
            nombre,
            descripcion,
            avatar,
            precio
        }, {
            where: { id }
        });

        res.json({
            mensaje: "Producto actualizado satisfactoriamente",
            data: actualizaProducto
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function deleteProducto(req, res) {
    const { id } = req.params;

    try {
        const eliminaProducto = await Producto.destroy({
            where: { id }
        });

        res.json({
            mensaje: "Producto eliminado con éxito",
            data: eliminaProducto
        });
    } catch (e) {
        res.json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}