import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
    <div className="border w-full h-[60vh] md:h-[74vh]">
    <Back title='About Us' />
    </div>
    <div>
    <AboutCard />
    </div>
    
  

      
    </>
  )
}

export default About
