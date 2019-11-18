import Task from '../models/Tasks';

export async function createTask(req, res)
{
    const {name, done, projectid} = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    }, {
        fields: ['name', 'done', 'projectid']
    });

    res.json({mensaje: 'Nueva tarea agregada'});
}

export async function getTasks(req, res)
{
    const tasks = await Task.findAll({
        attibutes: ['id', 'projectid', 'name', 'done'],
        order: [['id', 'DESC']]
    });

    res.json({tasks});
}

export async function updateTask(req, res)
{
    const { id } = req.params;
    const {name, done, projectid} = req.body;

    await Task.findOne({
        attributes: ['name', 'projectid', 'done', 'id'],
        where: {id}
    });

    const updatedTask = await Task.update({
        name,
        done,
        projectid
    }, 
    {
        where: {id}
    });

    res.json({
        mensaje: 'Tarea actualizada',
        updatedTask
    });
}

export async function deleteTask(req, res)
{
    const { id } = req.params;
    await Task.destroy({
        where: {
            id
        }
    });

    res.json({mensaje: "Tarea eliminada"});
}

export async function getOneTask(req, res)
{
    const { id } = req.params;
    const task = await Task.findOne({
        where: { id }
    });

    res.json(task);
}

export async function getTasksByProject(req, res)
{
    const { projectid } = req.params;

    const tasks = await Task.findAll({
        attributes: ["name", "done", "projectid"],
        where: { projectid }
    });

    res.json(tasks);
}