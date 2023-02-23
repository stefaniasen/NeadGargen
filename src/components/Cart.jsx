import React, { useState, useContext , Component} from "react";
import { Form, Button } from 'bootstrap-4-react';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
  
    const handleSubmit = (e) => {
      console.log(e);
      e.preventDefault();
      console.log(userName);
      console.log(userEmail);
      alert("Formulario enviado");
    };
  
    const deleteId = cart.map((item) => {
      return item.id;
    });
  
    return (
      <>
        <Form>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Nombre</label>
            <Form.Input type="text" id="exampleInputPassword1" placeholder="Password" />
            <label htmlFor="exampleInputPassword1">Apellido</label>
            <Form.Input type="text" id="exampleInputPassword1" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputEmail1">Mail</label>
            <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
          </Form.Group>
          <Button primary type="submit">Comprar</Button>
      </Form>
    </>
    );
};

export default Cart;