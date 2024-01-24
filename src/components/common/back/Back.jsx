import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back'>
        <h2 className="mt-20 md:mt-0">Home / {location.pathname.split("/")[1]}</h2>
        <h1 className="text-[50px] md:text-[100px]">{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
