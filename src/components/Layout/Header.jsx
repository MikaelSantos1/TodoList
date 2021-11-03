import React from "react";
import './Header.css'
import fundo from "../../assets/bg-desktop-dark.jpg"
const Header = props =>{
    return  (
        <div className="header">
            <img src={fundo} alt="img" className="headerimg" />
        </div>
    )
}

export default Header