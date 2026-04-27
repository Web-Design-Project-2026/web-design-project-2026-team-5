import NavLink from "./ui/NavLink";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import Logo from "../assets/logoInnoBrain.svg";

function Header() {
    return (
        <header>
            <div>
                <img src={Logo} alt="InnoBrain" />
            </div>

            <nav>
                <NavLink to="/platform">Platform</NavLink>
                <NavLink to="#">Industries</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="#">Sector</NavLink>
            </nav>

            <div className="header__actions">
                <Button variant="outline">Login</Button>
                <Button>Book a Free Demo</Button>
            </div>

        </header>
    );
}

export default Header;
