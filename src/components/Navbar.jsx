import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { categories } from "../data/dummy";
import "./styles/navbar.css";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  return (
    <nav
      className="relative  w-full xs:hidden lg:block"
      style={{ zIndex: "99", background: "#000000" }}
    >
      <div className=" w-full flex items-center py-2 justify-center">
        <ul className="nav-links">
          {categories.map((item, index) => (
            <li
              key={index}
              className="inline-flex list-none  text-gray-100 text-14 rounded-md transition-all ease-in duration-150 px-4 py-3 hover:bg-gray-800 hover:text-white"
              style={{ textDecoration: "none" }}
            >
              <a href={item.link}>{item.title}</a>
              {item.sub_tittle && (
                <li>
                  <div className="mega-box">
                    <div className="content">
                      {item.sub_tittle?.map((subItem, index2) => (
                        <div className="row" key={index2}>
                          <a
                            href={subItem.link}
                            className="text-xl font-semibold text-gray-800 "
                          >
                            {subItem.name}
                          </a>
                          <ul className="mega-links">
                            {subItem?.sub_sub_tittle?.map(
                              (subSubItem, index3) => (
                                <li key={index3}>
                                  <a href={subSubItem.link}>
                                    {subSubItem.name}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="w-full bg-white text-black py-2 font-bold flex justify-center text-lg">
                      Get free shipping when you order over Rs.1499
                    </p>
                  </div>
                </li>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// export default function MouseOverPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       <Typography
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup="true"
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         Hover with a Popover.
//       </Typography>
//       <Popover
//         id="mouse-over-popover"
//         sx={{
//           pointerEvents: 'none',
//         }}
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <Typography sx={{ p: 1 }}>I use Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }

// {categories.map((item, index) => (
//   <div className="" key={index}>
//     <NavLink
//       to={item.link}
//       className="pl-5 text-2xl font-bold text-white w-full"
//       style={{ backgroundColor: "#000000" }}
//     >
//       {item.title}
//       <br />
//     </NavLink>
//     {item.sub_tittle.map((subItem, index2) => (
//       <div className="" key={index2}>
//         <NavLink
//           to={subItem.link}
//           className="pl-5 text-lg font-semibold text-blue-400"
//         >
//           {subItem.name}
//         </NavLink>
//         {subItem.sub_sub_tittle.map((cat, index3) => (
//           <div className="" key={index3}>
//             <NavLink
//               to={cat.link}
//               className="pl-5 text-sm font-body text-red-500"
//             >
//               {cat.name}
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     ))}
//   </div>
// ))}

// <nav className="px-12  pb-3 lg:flex xs:hidden sm:hidden justify-center items-center ">
// <ul className="flex gap-4 relative" >
//   {categories?.length > 0 &&
//     categories?.map((item, index) => (
//       <li
//         key={index}
//         onMouseOver={() => {
//           setDropdownMenu(true);
//         }}
//         onMouseOut={() => {
//           setDropdownMenu(false);
//         }}
//       >
//         <a
//           href={item.link}
//           className=" text-md uppercase flex gap-1 items-center hover:text-white"
//           style={{ transition: "o.5s" }}
//         >
//           {item.title}
//           {item.sub_tittle &&
//             (dropdownMenu ? <IoIosArrowDown /> : <IoIosArrowUp />)}
//         </a>
//         {item?.sub_tittle?.length > 0 && (
//           <ul className="mt-8 flex bg-gray-400" style={{ zIndex: "1" }}>
//             {item?.sub_tittle?.map((subItem, index2) => (
//               <li key={index2}>
//                 <a
//                   href={subItem.link}
//                   className=" text-md  uppercase flex gap-1 items-center"
//                 >
//                   {subItem.name}
//                   {dropdownMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
// </ul>
// </nav>

// <li>
// <a href="#">About</a>
// </li>

// <li>
// <div className="mega-box">
//   <div className="content">
//     <div className="row">
//       <img src="img.jpg" alt="" />
//     </div>
//     <div className="row">
//       <header>Design Services</header>
//       <ul className="mega-links">
//         <li>
//           <a href="#">Graphics</a>
//         </li>
//         <li>
//           <a href="#">Vectors</a>
//         </li>
//         <li>
//           <a href="#">Business cards</a>
//         </li>
//         <li>
//           <a href="#">Custom logo</a>
//         </li>
//       </ul>
//     </div>
//     <div className="row">
//       <header>Email Services</header>
//       <ul className="mega-links">
//         <li>
//           <a href="#">Personal Email</a>
//         </li>
//         <li>
//           <a href="#">Business Email</a>
//         </li>
//         <li>
//           <a href="#">Mobile Email</a>
//         </li>
//         <li>
//           <a href="#">Web Marketing</a>
//         </li>
//       </ul>
//     </div>
//     <div className="row">
//       <header>Security services</header>
//       <ul className="mega-links">
//         <li>
//           <a href="#">Site Seal</a>
//         </li>
//         <li>
//           <a href="#">VPS Hosting</a>
//         </li>
//         <li>
//           <a href="#">Privacy Seal</a>
//         </li>
//         <li>
//           <a href="#">Website design</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// </li>
// <li>
// <a href="#">Feedback</a>
// </li>
