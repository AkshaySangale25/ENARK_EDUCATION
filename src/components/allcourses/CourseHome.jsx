import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
    <div className="w-full border h-[60vh] md:h-[90vh] xl:h-[80vh]">
    <Back title='Explore Courses' />
    </div>
     
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
