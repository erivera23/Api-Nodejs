import Empresa from '../models/Empresa';

export async function createEmpresa(req, res)
{
    const {nombre, descripcion, direccion, latitud, longitud, correo, telefono, avatar,
          idcategoria, usuario, clave, estado} = req.body;

    try
    {
        let nuevaEmpresa = await Empresa.create({
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
            estado
        },
        {
            fields: ['nombre', 'descripcion', 'direccion', 'latitud', 'longitud', 'correo', 'telefono',
                     'avatar', 'idcategoria', 'usuario', 'clave', 'estado']
        });

        if(nuevaEmpresa)
        {
            return res.json({
                mensaje: "Empresa creada satisfactoriamente.",
                data: nuevaEmpresa
            });
        }
    } catch(e)
    {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: {e}
        });
    }
}

export async function getEmpresas(req, res)
{
    try
    {
        const empresas = await Empresa.findAll({
            where: {
                estado: 1
            },
            attributes: ['id', 'nombre', 'descripcion', 'direccion', 'correo', 'telefono', 'latitud', 'longitud',
                         'avatar', 'idcategoria', 'usuario', 'clave', 'estado', 'updatedAt', 'createdAt']
        });

        return res.json({
            data: empresas
        });

    } catch(e)
    {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: {e}
        });
    }
}

export async function getOneEmpresa(req, res)
{
    const { id } = req.params;

    try
    {
        const empresa = await Empresa.findOne({
            where: {
                id
            },
            attributes: ['id','nombre', 'descripcion', 'direccion', 'correo', 'telefono', 'latitud', 'longitud',
                         'avatar', 'idcategoria', 'usuario', 'clave', 'estado', 'updatedAt', 'createdAt']
        });

        res.json({
            data: empresa
        });
    } catch(e)
    {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: {e}
        });
    }
}

export async function updateEmpresa(req, res)
{
    const { id } = req.params;
    const { nombre, descripcion, direccion, latitud, longitud, correo, telefono, avatar,
        idcategoria, usuario, clave, estado } = req.body;

    try
    {    
        const updateEmpresa = await Empresa.update({
            nombre, descripcion, direccion, latitud, longitud, correo,
            telefono, avatar, idcategoria, usuario, clave, estado
        },
        {
            where: {id}
        });
    
        res.json({
            mensaje: "Empresa actualizada",
            data: updateEmpresa
        });
    } catch(e)
    {
        res.status(500).json({
            mensaje: "Vaya! Algo ha ido mal :(",
            data: e
        });
    }
}

export async function getEmpresasByCategoria(req, res)
{
    
}