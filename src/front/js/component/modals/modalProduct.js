import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '/workspaces/Proyecto-final-G-J-C-F/src/front/styles/modalProduct.css';



export const ModalProduct = ({ show, onHide, item, handleAddItem }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = () => {
    handleAddItem({ ...item, quantity });
    onHide(); // Cierra el modal después de agregar el producto
    onClose()
  };


  return (
    <Modal show={show} onHide={onHide} centered animation>
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content-wrapper">
          <img src={item.image} alt={item.name} className="modal-product-image" />
          <div className="modal-product-info">
            <p className="modal-product-description">{item.description}</p>
            <p className="modal-product-price">{item.price}</p>
            <div className="modal-quantity-controls">
              <button onClick={decrement} className="quantity-btn">-</button>
              <span>{quantity}</span>
              <button onClick={increment} className="quantity-btn">+</button>
            </div>
            <Button onClick={handleAddToCart} className="add-to-cart-btn">Aceptar</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
