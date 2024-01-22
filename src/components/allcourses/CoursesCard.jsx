import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  const handleEnroll = (course) => {
    // Retrieve existing cart from local storage or create an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the course is already in the cart
    const existingCourse = cart.find((c) => c.id === course.id);

    if (existingCourse) {
      // If the course is already in the cart, update the quantity
      existingCourse.quantity += 1;
    } else {
      // If the course is not in the cart, add it
      cart.push({ ...course, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem("cartcourses", JSON.stringify(cart));
    window.location.href = "/cart";
  };
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn ' onClick={() => handleEnroll(val)}>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard