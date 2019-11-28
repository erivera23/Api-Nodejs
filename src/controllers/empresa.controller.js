import Empresa from '../models/Empresa';


export async function createEmpresa(req, res) {
    console.log(req.hostname + req.file.path);
}

export async function getEmpresas(req, res) {
    try {
        const empresas = await Empresa.findAll({
            where: {
                estado: 1
            },
            attributes: ['id', 'nombre', 'descripcion', 'direccion', 'correo', 'telefono', 'latitud', 'longitud',
                'avatar', 'idcategoria', 'usuario', 'clave', 'estado', 'updatedAt', 'createdAt', 'fechanacimiento'
            ]
        });

        return res.json({
            data: empresas
        });

    } catch (e) {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: { e }
        });
    }
}

export async function getOneEmpresa(req, res) {
    const { id } = req.params;

    try {
        const empresa = await Empresa.findOne({
            where: {
                id
            },
            attributes: ['id', 'nombre', 'descripcion', 'direccion', 'correo', 'telefono', 'latitud', 'longitud',
                'avatar', 'idcategoria', 'usuario', 'clave', 'estado', 'updatedAt', 'createdAt', 'fechanacimiento'
            ]
        });

        return res.json({
            data: empresa
        });
    } catch (e) {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: { e }
        });
    }
}

export async function updateEmpresa(req, res) {
    const { id } = req.params;
    const {
        nombre,
        descripcion,
        direccion,
        latitud,
        longitud,
        correo,
        telefono,
        avatar,
        idcategoria,
        usuario,
        clave,
        estado,
        fechanacimiento
    } = req.body;

    try {
        const updateEmpresa = await Empresa.update({
            nombre,
            descripcion,
            direccion,
            latitud,
            longitud,
            correo,
            telefono,
            avatar,
            idcategoria,
            usuario,
            clave,
            estado,
            fechanacimiento
        }, {
            where: { id }
        });

        res.json({
            mensaje: "Empresa actualizada",
            data: updateEmpresa
        });
    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya! Algo ha ido mal :(",
            data: e
        });
    }
}

export async function getEmpresasByCategoria(req, res) {
    const { idcategoria } = req.params;

    try {
        const empresas = await Empresa.findAll({
            attributes: ['nombre', 'descripcion', 'direccion', 'telefono', 'avatar', 'fechanacimiento'],
            where: { idcategoria }
        });
        res.json({ empresas });

    } catch (e) {
        res.status(500).json({
            mensaje: "Vaya, algo ha ido mal :(",
            data: e
        })
    }
}