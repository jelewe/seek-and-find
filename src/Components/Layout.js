import React from "react"
import { Outlet } from "react-router-dom"
import NavbarComponent from "./Navbar"

const Layout = () => {

    return(
        <div className="Layout">
            <NavbarComponent />
            <Outlet />
        </div>
    )

}

export default Layout