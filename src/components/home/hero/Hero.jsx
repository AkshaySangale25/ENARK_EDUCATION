import React from "react";
// import "./Hero.css";

const Hero = () => {
  return (
    <>
    <div className="h-[80vh] ">
      <section
        className='hero absolute bg-cover border-4 w-full bg-fixed bg-right pt-[20%] py-4 h-full  top-0 left-0 w-full  z-[-1]'
        style={{ backgroundImage: 'url("./images/bg.webp")' }}
      >
        <div className='container w-full'>
          <div className='w-full md:w-[60%] mt-[50%] md:mt-0 text-white'>
            <p className="mt-2">WELCOME TO ENARK EDUCATION</p>
            <h1 className="md:text-3xl text-xl mt-4 font-semibold">Best Online Education Expertise</h1>
            <p className="mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className=''>
              <button className='primary-btn md:w-250 w-330'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="md:w-250 w-350 px-12">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
    
      </section>
      </div>
    </>
  );
};

export default Hero;
