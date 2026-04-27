import './NavLink.css'
import { Link } from 'react-router-dom'

function NavLink({ children, to}){
    return (
        <Link to={to} className='nav-link'>
            {children}
        </Link>
    )
}

export default NavLink