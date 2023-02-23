import { useParams } from "react-router-dom";
import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const productoFilter = productos.filter((producto) => producto.id == id);
    return (
        <>
            productoFilter.map((producto) => (
                <div key={producto.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Image src={herramienta}/>
                            <Card.Text>Descripción: {herramienta.description}</Card.Text>
                            <Card.Text>Categoria: {herramienta.category}</Card.Text>
                            <Card.Text>Precio: ${herramienta.price}</Card.Text>
                            <Card.Subtitle mb="2" text="muted">Stock: {herramienta.stock}</Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                </div>
            );
        </>
    );
};

export default ItemDetail;