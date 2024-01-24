import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import { useNavigate } from "react-router-dom";
const CoursesCard = () => {
  const navigate = useNavigate();

  const handleEnroll = (course) => {
    
    const cart = JSON.parse(localStorage.getItem("cartcourses")) || [];
   // Check if the course is already in the cart
    const existingCourseIndex = cart.findIndex((c) => c.id === course.id);
  
    if (existingCourseIndex !== -1) {
    
      cart[existingCourseIndex].quantity += 1;
    } else {
      
      cart.push({ ...course, quantity: 1 });
    }
  
   
    localStorage.setItem("cartcourses", JSON.stringify(cart));
  
  
    navigate("/cart");
  };

  // const handleEnroll = (course) => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   const existingCourse = cart.find((c) => c.id === course.id);

  //   if (existingCourse) {
  //     existingCourse.quantity += 1;
  //   } else {
  //     cart.push({ ...course, quantity: 1 });
  //   }

  //   localStorage.setItem("cartcourses", JSON.stringify(cart));

  //   // Use React Router for navigation
  //   navigate("/cart");
  // };

  
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
