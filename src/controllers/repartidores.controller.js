import Repartidor from '../models/Repartidor';

export async function createRepartidor(req, res) {
    const { nombres, apellidos, fechanacimiento, correo, telefono, usuario, clave, estado } = req.body;

    try {
        let nuevoRepartidor = await Repartidor.create({
            nombres,
            apellidos,
            correo,
            telefono,
            fechanacimiento,
            usuario,
            clave,
            estado
        }, {
            fields: ['nombres', 'apellidos', 'fechanacimiento', 'correo', 'telefono', 'usuario', 'clave', 'estado']
        });

        if (nuevoRepartidor) {
            res.json({
                mensaje: "Repartidor creado con éxito",
                data: nuevoRepartidor
            });
        }
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal.",
            data: e
        });
    }
}

export async function getRepartidores(req, res) {
    try {
        const repartidores = await Repartidor.findAll({
            attibutes: ['id', 'nombres', 'apellidos', 'telefono', 'correo', 'usuario', 'estado', 'fechanacimiento']
        });

        res.json({
            data: repartidores
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal.",
            data: e
        });
    }
}

export async function getOneRepartidor(req, res) {
    const { id } = req.params;

    try {
        const repartidor = await Repartidor.findOne({
            attibutes: ['id', 'nombres', 'apellidos', 'telefono', 'correo', 'usuario', 'estado', 'fechanacimiento'],
            where: { id }
        });

        res.json({
            data: repartidor
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function updateRepartidor(req, res) {
    const { id } = req.params;
    const { nombres, apellidos, telefono, correo, usuario, fechanamiento, estado } = req.body;

    try {
        const actualizaRepartidor = await Repartidor.update({
            nombres,
            apellidos,
            telefono,
            usuario,
            correo,
            fechanacimiento,
            estado
        }, {
            where: { id }
        });

        res.json({
            data: actualizaRepartidor
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function deleteRepartidor(req, res) {

}

export async function updateEstadoRepartidor(req, res) {
    const { id } = req.params;
    const { estado } = req.body;

    try {
        const actualizaEstado = await Repartidor.update({
            estado
        }, {
            where: { id }
        });

        res.json({
            mensaje: "Estado actualizado con éxito.",
            data: actualizaEstado
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}