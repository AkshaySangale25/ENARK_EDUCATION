import React from "react";
const Head = () => {
  return (
    <>
      <section className='head mt-5'>
        <div className='container flex justify-between items-center'>
          <div className='logo'>
            <h1 className='text-3xl font-extrabold'>ENARK</h1>
            <span className="text-[17px]">ONLINE EDUCATION & LEARNING</span>
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
