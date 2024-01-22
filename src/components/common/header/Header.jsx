import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className="bg-white bg-opacity-20 mt-10 py-2">
        <nav className="flex  justify-between items-center">
          <ul
            className={`${
              click ? "absolute top-7vh left-0 w-full bg-teal-500 " : "hidden sm:flex space-x-4 px-5 py-3 xl:space-x-8"
            }`}
            onClick={() => setClick(false)}
          >
            <li>
              <Link
                to="/"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-black font-semibold transition duration-500 hover:text-teal-500"
              >
                Cart
              </Link>
            </li>
          </ul>
          <div>
          <div className="start bg-teal-500 py-3 px-5 text-white">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <div>
          <button
            className="block sm:hidden bg-none text-white text-3xl absolute right-0 top-[-15px] w-12 h-12"
            onClick={() => setClick(!click)}
          >
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
          </div>
          </div>
          
          
        </nav>
      </header>
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Head from "./Head";

// const Header = () => {
//   const [click, setClick] = useState(false);

//   return (
//     <>
//       <Head />
//       <header className="bg-white bg-opacity-20 mt-10 py-2">
//         <nav className="flex justify-between items-center">
//           {/* Navigation for medium (md), large (lg), and extra-large (xl) screens */}
//           <ul
//             className={`hidden sm:flex space-x-4 px-5 py-3 xl:space-x-8`}
//             onClick={() => setClick(false)}
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/courses"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 All Courses
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/team"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Team
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/pricing"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Pricing
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/journal"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Journal
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/cart"
//                 className="text-black font-semibold transition duration-500 hover:text-teal-500"
//               >
//                 Cart
//               </Link>
//             </li>
//           </ul>

//           {/* "Get Certificate" section and toggle button for small screens */}
//           <div className="start bg-teal-500 py-3 px-5 text-white">
//             <div className="button">GET CERTIFICATE</div>
//           </div>
          
//           <button
//             className="block sm:hidden bg-none text-white text-3xl w-12 h-12 mb-7"
//             onClick={() => setClick(!click)}
//           >
//             {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;

