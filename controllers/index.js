import { Todo } from '../models';


export const allTodos = async(req, res) => {
    try{
        const todos = await Todo.findAll();

        return res.status(200).send({ todos })

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}


export const createTodo = async(req, res) => {
    const { task } =  req.body;

    if(!task || !task.length){
        return res.status(400).send({
            errors: { task: 'Please enter a task' }
        })
    }

    try{
        const todo = await Todo.create({ task });

        return res.status(201).send({
            success: 'Todo added successfully',
            todo
        })

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}


export const findTodo = async(req, res) => {
    const { id } = req.params;

    try{
        const todo = await Todo.findOne({ where: { id } });

        if(!todo){
            return res.status(404).send({
                errors: { message: 'Todo could not be found' }
            })
        }

        return res.status(200).send({ todo })

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}


export const updateTodo = async(req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    try{
        const todo = await Todo.findOne({ where: { id } });

        if(!todo){
            return res.status(404).send({
                errors: { message: 'Todo could not be found' }
            })
        }

        const todoUpdate = Todo.update({ 
            task: task || todo.task,
            completed: completed || todo.completed
        }, { where: { id } })


        return res.status(201).send({ 
            success: 'Todo updated successfully',
            todoUpdate
         })

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}

export const deleteTodo = async(req, res) => {
    const { id } = req.params;

    try{
        const todo = await Todo.findOne({ where: { id } });

        if(!todo){
            return res.status(404).send({
                errors: { message: 'Todo could not be found' }
            })
        }

        await Todo.destroy({ where: { id } })

        return res.status(200).send({ 
            success: 'Todo deleted successfully',
         })

    }catch(e){
        return res.status(500).send({
            errors: { message: 'Internal server error', e }
        })
    }
}