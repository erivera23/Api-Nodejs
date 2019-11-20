import Cliente from '../models/Cliente';

export async function createCliente(req, res) {
    const {
        usuario,
        clave,
        nombres,
        apellidos,
        identidad,
        correo,
        telefono,
        direccion,
        latitud,
        longitud,
        avatar
    } = req.body;

    try {
        let nuevoCliente = await Cliente.create({
            usuario,
            clave,
            nombres,
            apellidos,
            identidad,
            correo,
            telefono,
            direccion,
            latitud,
            longitud,
            avatar
        }, {
            fields: ['usuario', 'clave', 'nombres', 'apellidos', 'identidad', 'correo', 'telefono',
                'direccion', 'latitud', 'longitud', 'avatar'
            ]
        });

        if (nuevoCliente) {
            res.json({
                mensaje: "Cliente creado con éxito",
                data: nuevoCliente
            });
        }
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function getClientes(req, res) {
    try {
        let clientes = await Cliente.findAll({
            attributes: ['id', 'usuario', 'nombres', 'apellidos', 'telefono', 'correo', 'direccion',
                'avatar', 'identidad', 'latitud', 'longitud'
            ]
        });

        res.json({
            data: clientes
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal.",
            data: e
        });
    }
}

export async function getOneCliente(req, res) {
    const { id } = req.params;

    try {
        let cliente = await Cliente.findOne({
            where: { id },
            attributes: ['id', 'usuario', 'nombres', 'apellidos', 'telefono', 'correo', 'direccion',
                'avatar', 'identidad', 'latitud', 'longitud'
            ]
        });

        res.json({
            data: cliente
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function updateCliente(req, res) {
    const { id } = req.params;
    const {
        usuario,
        clave,
        nombres,
        apellidos,
        identidad,
        correo,
        telefono,
        direccion,
        latitud,
        longitud,
        avatar
    } = req.body;

    try {
        const actualizaCliente = await Cliente.update({
            usuario,
            clave,
            nombres,
            apellidos,
            identidad,
            correo,
            telefono,
            direccion,
            latitud,
            longitud,
            avatar
        }, {
            where: { id }
        });

        res.json({
            mensaje: "Cliente actualizado con éxito",
            data: actualizaCliente
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal",
            data: e
        });
    }
}

export async function deleteCliente(req, res) {

}