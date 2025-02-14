import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'iaguilera',
        email: 'iaguilera@aguilerafactory.mx'
    })

    const{userName, email} = formState;

    const onInputChange = ({ target }) =>{
        const {value, name} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect(() => {
        //console.log('The useEffect Form State Changed!')
    }, [ ]);

    useEffect(() => {
        //console.log('formState Changed!')
    }, [formState]);

    useEffect(() => {
        //console.log('email Changed!')
    }, [email]);
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <input type="text" className="form-control" placeholder="Username" name="userName" value={ userName } onChange={ onInputChange }/>
            <input type="email" className="form-control mt-2" placeholder="user@domain.com" name="email" value={ email } onChange={ onInputChange} />
            {
                (userName === 'serviauci') && <Message/>
            }
        </>
    )
}
