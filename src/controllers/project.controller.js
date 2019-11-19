import Project from '../models/Project';

export async function crearProyecto(req, res)
{
    
    const {name, priority, description, deliverydate } = req.body;

    try {
        const nuevoProyecto = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },
        {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
    
        if(nuevoProyecto)
        {
            return res.json({
                mensaje: 'Proyecto creado satisfactoriamente',
                data: nuevoProyecto
            });
        }
    } catch(e)
    {
        res.status(500).json({
            mensaje: 'Vaya, algo ha ido mal :(',
            data: {}
        });
    }
}

export async function getProyectos(req, res)
{
    const proyectos = await Project.findAll();

    res.json({
        data: proyectos
    })
}

export async function getProyecto(req, res)
{
    const { id } = req.params;
    const proyecto = await Project.findOne({
        where: {
            id
        }
    });

    res.json({
        data: proyecto
    })
}

export async function deleteProyecto(req, res)
{
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });

    res.json({
        mensaje: 'Proyecto eliminado exitosamente',
        count: deleteRowCount
    })
}

export async function updateProyecto(req, res)
{
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const projects = await Project.findAll({
        attributes: ['id', 'name', 'description', 'deliverydate'],
        where: {
            id
        }
    });

    if(projects.length>0)
    {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        })
    }

    res.json({
        mensaje: 'Datos actualizados correctamente',
        data: projects
    })
}