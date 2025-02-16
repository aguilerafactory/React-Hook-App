import { UserContext } from "./UserConext"

const user ={
  id: 123,
  name: 'Ismael Aguilera Camacho',
  email: 'iaguilera@aguilerafactory.mx'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={ {user} }>
        { children }
    </UserContext.Provider>
  )
}
