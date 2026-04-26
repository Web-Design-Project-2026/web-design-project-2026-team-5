import './NavLink.css'

function NavLink({ children, href}){
    return (
        <a href="href" className='nav-link'>
            {children}
        </a>
    )
}

export default NavLink