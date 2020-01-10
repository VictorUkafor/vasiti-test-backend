import express from 'express';
import { 
    createTodo, findTodo, allTodos, 
    updateTodo, deleteTodo 
} from '../controllers'

const routes = express.Router();

routes.get('todos', allTodos);
routes.post('todos', createTodo);
routes.get('todos', findTodo);
routes.put('todos', updateTodo);
routes.delete('todos', deleteTodo);


export default routes;
