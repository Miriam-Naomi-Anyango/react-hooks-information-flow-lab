import React from "react";


function Header({onDarkModeClick, isDarkMode}){

    return (
        <header>
            <h2>Shopstar</h2>
            <button onClick= {onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
        </header>
    )
}
export default Header;