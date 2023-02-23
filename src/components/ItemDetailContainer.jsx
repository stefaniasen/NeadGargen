import ItemDetail from "./ItemDetail";
import Data from "../data.json";

const ItemDetailContainer = () => {
    return (
        <ItemDetail productos={Data}/>
    );
};

export default ItemDetailContainer;
