import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], onDeleteItem, onToggleItem }) => {

    return (
        <ul className="list-group">
            {
                todos.map( todo =>(
                    <TodoItem key={todo.id} todo={todo} onDeleteItem={ onDeleteItem } onToggleItem={ onToggleItem }  />
                ))
            }                        
        </ul>
    )
}
