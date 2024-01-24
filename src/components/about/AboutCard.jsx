// import React from "react"
// import Heading from "../common/heading/Heading"
// import "./about.css"
// import { homeAbout } from "../../dummydata"
// import Awrapper from "./Awrapper"

// const AboutCard = () => {
//   return (
//     <>
//       <section className='aboutHome border-4 mt-[120%]  md:mt-[32%]'>
//         <div className='container flexSB'>
//           <div className='left row'>
//             <img src='./images/about.webp' alt='' />
//           </div>
//           <div className='right row'>
//             <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
//             <div className='items'>
//               {homeAbout.map((val) => {
//                 return (
//                   <div className='item flexSB'>
//                     <div className='img'>
//                       <img src={val.cover} alt='' />
//                     </div>
//                     <div className='text'>
//                       <h2>{val.title}</h2>
//                       <p>{val.desc}</p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Awrapper />
//     </>
//   )
// }

// export default AboutCard



import React from "react";
import Heading from "../common/heading/Heading";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import './about.css'

const AboutCard = () => {
  return (
    <>
    {/* //mt-[120%] xl:mt-[45%] 2xl:mt-[32%] */}
      <section className='aboutHome'>
        <div className='container  flexSB flex justify-between mx-10'>
          <div className='left row w-full'>
            <img
              src='./images/about.webp'
              alt=''
              className='w-[100%] h-full object-cover'
            />
          </div>
          <div className='right row md:px-[50px]'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />

            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.title}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
