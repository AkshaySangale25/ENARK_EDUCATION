import React from "react"

import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            
            <p className="mt-2">WELCOME TO ENARK EDUCATION</p>
            <h1 className="md:text-[36px] text-[24px] mt-4 font-semibold">Best Online Education Expertise</h1>
            <p className="mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button '>
              <button className='primary-btn md:w-[250px] w-[330px]'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="md:w-[250px] w-[330px]">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
