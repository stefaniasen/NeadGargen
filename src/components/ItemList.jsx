import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos?.map((producto)=> (
                <Item
                key={producto.id}
                id={producto.id}
                name={producto.name}
                description={producto.description}
                price={producto.price}
                stock={producto.stock}
                category={producto.category}
                />
            ))}
        </>
    );
};

export default ItemList;