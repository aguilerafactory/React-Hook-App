import { useContext } from "react"
import { UserContext } from "./context/UserConext";

export const LoginPage = () => {
  
  const { user } = useContext(UserContext);

  return (
    <>
        <h1>Login Page</h1>
        <hr/>
        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>
    </>
  )
}
