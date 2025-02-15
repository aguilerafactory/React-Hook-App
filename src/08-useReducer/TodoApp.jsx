import { TodoList, TodoAdd } from './';
import { useTodo } from '../hooks';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const {todos, todosCount, todosPending, handleNewTodo, handleDelete, handleToggle} = useTodo([], init);

    return (
        <>
            <h1>Todo App ({todosCount}), <small>Pendientes: {todosPending}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteItem={ handleDelete } onToggleItem={ handleToggle } />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
            
        </>
    )
}
