
export const TodoItem = ({todo, onDeleteItem, onToggleItem}) => {
    return (
        <li key={ todo.id } className="list-group-item d-flex justify-content-between">
            <span className={`aling-self-center ${ (todo.done) ? 'text-decoration-line-through': ''}`} >{todo.description}</span> 
            <button className="btn btn-success" onClick={ () => onToggleItem( todo.id ) } >Completar</button>    
            <button className="btn btn-danger" onClick={ () => onDeleteItem( todo.id ) } >Borrar</button>    
        </li>
    )
}
