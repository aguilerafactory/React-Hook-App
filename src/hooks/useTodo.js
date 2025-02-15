import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer';

export const useTodo = (innitialState, init ) => {

    const [todos, dispatch] = useReducer(todoReducer, innitialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    
    const handleDelete = (  id ) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const handleNewTodo = ( todo ) => {
        const action={
            type: 'add',
            payload: todo
        }
        dispatch(action);
    }

    const handleToggle = ( id ) => {
        const action = {
            type: 'toggle',
            payload: id
        }

        dispatch(action);
    }
  
    return {
        todos,
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,
        handleDelete,
        handleNewTodo,
        handleToggle
    }
}
