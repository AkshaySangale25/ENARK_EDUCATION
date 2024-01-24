// import React from "react"
// import { awrapper } from "../../dummydata"

// const Awrapper = () => {
//   return (
//     <>
  
//       <section className='awrapper h-[100%] border-4' style={{ backgroundImage: 'url("./images/awrapper.webp")' }}>
//         <div className='container grid'>
//           {awrapper.map((val) => {
//             return (
//               <div className='box flex'>
//                 <div className='img'>
//                   <img src={val.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <h1>{val.data}</h1>
//                   <h3>{val.title}</h3>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Awrapper


import React from "react";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <>
      <section className='awrapper bg-cover h-[40vh] bg-center bg-no-repeat' style={{ backgroundImage: 'url("./images/awrapper.webp")' }}>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {awrapper.map((val, index) => (
            <div key={index} className='box flex items-center justify-center text-white p-10'>
              <div className='img'>
                <img src={val.cover} alt='' className='mr-6' />
              </div>
              <div className='text'>
                <h1 className='text-5xl'>{val.data}</h1>
                <h3 className='text-lg font-semibold'>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Awrapper;

