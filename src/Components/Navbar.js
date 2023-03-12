import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {

    return (
        <Nav fill className="justify-content-center" variant="tabs">
            <Nav.Item>
                <NavLink
                        to="/"
                        style={({ isActive, isPending }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            };
                        }}>
                        Home
                    </NavLink>
            </Nav.Item>
            
            <Nav.Item>
                <NavLink
                       to="/info"
                       style={({ isActive, isPending }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            };
                        }}>
                            Info
                    </NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink
                       to="/game"
                       style={({ isActive, isPending }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            };
                        }}>
                            Game
                    </NavLink>
            </Nav.Item>

            <Nav.Item>
                <NavLink
                       to="/leaderboard"
                       style={({ isActive, isPending }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            };
                        }}>
                            Leaderboard
                    </NavLink>
            </Nav.Item>
            

        </Nav>

    )
}

export default NavbarComponent