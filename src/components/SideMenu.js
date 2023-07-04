import React from "react";
import "./SideMenu.css"
import { TbStack } from "react-icons/tb"
import { GiDeadEye } from "react-icons/gi"
import { BsPeople } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return( <>
      <div className="sidecontainer">
            <div className="content">
                <p><TbStack className="icon" /> <Link to="/dashboard/ListPrinting" style={{textDecoration:'none', color:'black'}}> List Printing</Link></p>
            </div>
            <div className="content">
                <p><GiDeadEye className="icon" /> <Link to="/dashboard/SubjectMapping" style={{textDecoration:'none', color:'black'}}> Subject Mapping</Link></p>
            </div>
            <div className="content">
                <p><BsPeople className="icon" /> <Link to="/dashboard/GenerateLetters" style={{textDecoration:'none', color:'black'}}> Generate Letters</Link></p>
            </div>
            <div className="content">
                <p><FiLogOut className="icon" /> <Link to="/" style={{textDecoration:'none', color:'black'}}>Logout</Link></p>
            </div>
            <p className="pTag">@Getfly Technologies</p>
        </div>
        <Outlet/>
</>
  )
};

export default Sidebar;



//------------w3school---------

// import { Outlet, Link } from "react-router-dom";

// const SideMenu = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default SideMenu;