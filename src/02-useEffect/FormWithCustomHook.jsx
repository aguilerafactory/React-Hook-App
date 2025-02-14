import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {onResetForm, onInputChange, userName, email, password} = useForm({
        userName: '',
        email: '',
        password: '',
    });
    
    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr/>
            <form>
                <input type="text" className="form-control" placeholder="Username" name="userName" value={ userName } onChange={ onInputChange } />
                <input type="email" className="form-control mt-2" placeholder="user@domain.com" name="email" value={ email } onChange={ onInputChange} />
                <input type="password" className="form-control mt-2" placeholder="Contraseña" name="password" value={ password } onChange={ onInputChange} />

                <button className="btn btn-primary mt-2" onClick={ onResetForm }>Reset</button>
            </form>
        </>
    )
}
