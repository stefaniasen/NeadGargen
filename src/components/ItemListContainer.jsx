import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {category} = useParams();

    const catFilter = Data.filter((producto) => producto.category === category);
    return(
        <div>
            <h3>Categorías</h3>
            {category ? <ItemList productos={catFilter}/>:<ItemList productos={Data}/>}
        </div>
    );

};

export default ItemListContainer;
