import NavLink from "./ui/NavLink";
import { ArrowUpRight } from "lucide-react";

function Navbar() {
    return (
        <nav>
            <NavLink href="/">
                Home <ArrowUpRight size={16} />
            </NavLink>
        </nav>
    );
}

export default Navbar;
