import React from "react"
import NavBar from "./NavBar"
import MainCard from "./MainCard"
import "../css/body.css"
import "../css/responsive.css"

const Body = () => {
    return (
        <div className="container">
            <NavBar />
            <MainCard />
        </div>
    );
}

export default Body