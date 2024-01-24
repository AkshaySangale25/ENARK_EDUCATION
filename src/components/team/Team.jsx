import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Team = () => {
  return (
    <>
      
    <div className="w-full border h-[60vh] md:h-[90vh] xl:h-[70vh]">
      <Back title='Team' />
    </div>
     
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default Team
