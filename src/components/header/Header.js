import React from "react";
import  './Header.module.css'
import Title from '../title/Title.js';
import logo from "../../assets/calindra-icon.png"
function Header(){
    return(
        <header>
            <Title
            text="Desafio front-end Calindra"
            />
            <img src={logo}/>
        </header>
    )
}

export default Header;