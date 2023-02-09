import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {

    const categorias = ["Herramientas","Decoracion"]
    
    return (
        <nav>
            <h1>Nead Garden</h1>
            <ul>
                {categorias.map((menu)=>(
                    <button><li>{menu}</li></button>
                ))}
                
            </ul>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;
