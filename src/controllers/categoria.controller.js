import Categoria from '../models/Categoria';

export async function createCategoria(req, res) {
    const { nombre } = req.body;

    try {
        let nuevaCategoria = await Categoria.create({
            nombre
        }, {
            fields: ['nombre']
        });

        if (nuevaCategoria) {
            res.json({
                mensaje: "Categoría creada con éxito.",
                data: nuevaCategoria
            });
        }
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function getCategorias(req, res) {
    try {
        let categorias = await Categoria.findAll({
            attributes: ['id', 'nombre']
        });

        return res.json({
            data: categorias
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        });
    }
}

export async function getOneCategoria(req, res) {
    const { id } = req.params;

    try {
        const categoria = await Categoria.findOne({
            where: { id },
            attributes: ['id', 'nombre']
        });

        return res.json({
            categoria
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function updateCategoria(req, res) {
    const { id } = req.params;
    const { nombre } = req.body;

    try {
        const actualizaCategoria = await Categoria.update({
            nombre
        }, {
            where: { id }
        });

        res.json({
            mensaje: "Empresa actualizada con éxito",
            data: actualizaCategoria
        });

    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function deleteCategoria(req, res) {
    const { id } = req.params;

    try {
        const eliminaCategoria = await Categoria.destroy({
            where: { id }
        });

        res.json({
            mensaje: "Categoría eliminada con éxito.",
            data: eliminaCategoria
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}