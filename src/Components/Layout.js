import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return(
        <div className="Layout">
            Hello from Layout

            <br />
            <Outlet />
        </div>
    )

}

export default Layout