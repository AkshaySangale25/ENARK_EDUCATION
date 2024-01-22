import React from "react";
import './cartPage.css'

const CartPage = () => {
  
  const cart = JSON.parse(localStorage.getItem("cartcourses")) || [];

  const removeFromCart = (courseId) => {
    console.log("Removing course with ID:", courseId);
  
    const updatedCart = cart.filter(course => course.id !== courseId);
    console.log("Updated Cart:", updatedCart);
  
    localStorage.setItem("cartcourses", JSON.stringify(updatedCart));

  };
  

  return (
    <div className="cart">
      <div className="cartTitle">
        <h2>CART SUMMARY</h2>
      </div>
      <div className="cartCard">
      {cart.map((course) => (
        <div key={course.id} className="text">
          <p>{course.coursesName}</p>
          <p>Price: {course.priceAll}</p>
          <p>Quantity: {course.quantity}</p>
          
      <p>Total: {course.priceAll}</p>
      
      <button onClick={() => removeFromCart(course.id)}>Remove</button>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default CartPage;
