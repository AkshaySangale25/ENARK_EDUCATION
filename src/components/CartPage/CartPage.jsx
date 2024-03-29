//cartpage.jsx
import React, { useState, useEffect } from "react";
import './cartPage.css';
import Back from "../common/back/Back";

const CartPage = () => {
  // Use state to manage the cart
  const [cart, setCart] = useState([]);

  // Load the cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartcourses")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (courseId) => {
    console.log("Removing course with ID:", courseId);

    // Filter out the course with the specified courseId
    const updatedCart = cart.filter(course => course.id !== courseId);
    console.log("Updated Cart:", updatedCart);

    // Update local storage with the updated cart
    localStorage.setItem("cartcourses", JSON.stringify(updatedCart));

    // Update the cart state to trigger a re-render
    setCart(updatedCart);
  };
  
  return (
    <>
    
      <section className='absolute w-full pt-[60%] md:pt-[15%] h-auto top-0 left-0 z-[-1] bg-[#99bfc5]'>
       
      </section>
   <div className="bg-[#99bfc5] py-5">
    <div className="text-center mx-[5%] md:mx-[30%] bg-white bg-opacity-20 py-5">
          <h2 className="text-black">CART SUMMARY</h2>
        </div>
        <div className="cartCard  mt-5 mx-[10%]">
          {cart.map((course) => (
            <div key={course.id} className="bg-white bg-opacity-20 py-4 px-4 mx-5">
              <div className="text">
                <p className="font-bold">{course.coursesName}</p>
                <p>Price: {course.priceAll}</p>
                <p>Quantity: {course.quantity}</p>
                <p>Total: {course.priceAll}</p>
              </div>
              <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => removeFromCart(course.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        </div> 
    </>
  );
};

export default CartPage;