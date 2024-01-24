import React from "react";
const Head = () => {
  return (
    <>
      <section className='mt-4  w-full'>
        <div className='md:flex justify-between mx-5 items-center'>
          <div className='logo'>
            <h1 className='text-3xl font-extrabold text-white'>ENARK</h1>
            <span className="text-[17px] text-white">ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
