import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark rouded-3'>
            <div className='container-fluid'>
                <Link className="navbar-brand" href="#">useContext</Link>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`} to="/">Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`} to="/about">About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className={({ isActive }) => `nav-link ${ isActive ? 'active' : ''}`} to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
