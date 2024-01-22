import React from "react"
import Hero from "./hero/Hero"
 import AboutCard from "../about/AboutCard"
 import HAbout from "./HAbout"
 import Testimonal from "./testimonal/Testimonal"
 import Hblog from "./Hblog"
 import Hprice from "./Hprice"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
     <HAbout />
     <Testimonal />
     <Hblog />
     <Hprice />
    </>
  )
}

export default Home
