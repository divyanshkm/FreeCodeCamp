import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("superman");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleCommentChange = (event) => setComment(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);
  const handlePaymentChange = (event) => setPayment(event.target.value);
  const handleShippingChange = (event) => setShipping(event.target.value);

  return (
    <div>
      <input className="input" value={name} onChange={handleNameChange}></input>
      <p className="p-box">Name: {name}</p>

      <input
        className="input"
        value={quantity}
        type="number"
        onChange={handleQuantityChange}
      ></input>
      <p className="p-box">Quantity: {quantity}</p>

      <textarea
        className="input"
        value={comment}
        placeholder="This is a comment"
        onChange={handleCommentChange}
      ></textarea>
      <p className="p-box">Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Giftcard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <input
        type="radio"
        value="Pick Up"
        checked={shipping === "Pick Up"}
        onChange={handleShippingChange}
      ></input>
      <label>Pick up</label>
      <br />

      <input
        type="radio"
        value="Delivery"
        checked={shipping === "Delivery"}
        onChange={handleShippingChange}
      ></input>
      <label>Delivery</label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
