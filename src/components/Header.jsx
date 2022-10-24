import React from "react";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import Logo from "../data/logo.png";
import SearchBar from "./SearchBar";
import { BsPersonCircle } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="bg-navbar  text-14 flex justify-center px-5 py-1 ">
        <span className="text-white">
          Get free shipping when you order over &nbsp;
        </span>
        <span style={{ color: "#FF9900" }}>Rs.1499</span>
      </div>
      <div
        className="w-full text-white p-1 px-7"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="flex justify-between items-center md:flex xs:hidden sm:hidden">
          <div className="flex gap-4 text-2xl">
            {links.map((item, index) => (
              <a
                href={`${item.link}`}
                key={index}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="font-semibold">30 DAYS HAPPINESS GUARANTEE</p>
          <div className="flex gap-5 uppercase font-semibold">
            <NavLink to="/contact-us" className="uppercase">
              help
            </NavLink>
            <NavLink to="/ReturnAndExchange">Return & Exchange</NavLink>
          </div>
        </div>
        <div className="pt-3 flex items-center justify-between">
          <div className="md:hidden flex">
            <AiOutlineMenu />
          </div>
          <NavLink to="/">
            <img src={Logo} className="invert" width="115px" alt="logo" />
          </NavLink>
          <div className="w-full items-center pt-3 pl-9 pr-12 md:block xs:hidden sm:hidden">
            <SearchBar />
          </div>
          <div className="flex text-2xl items-center gap-4 pb-1 ">
            <NavLink to="/login">
              <BsPersonCircle />
            </NavLink>
            <NavLink to="/cart">
              <FaShoppingBasket />
            </NavLink>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;

// {links.map((item) => (
//     <div key={item.title}>
//       <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
//       {item.links.map((link) => (
//         <NavLink
//           to={`/${link.name}`}
//           key={link.name}
//           onClick={handleCloseSidebar}
//           style={({ isActive }) => ({
//             backgroundColor: isActive ? currentColor : " ",
//           })}
//           className={({ isActive }) =>
//             isActive ? activeLink : normalLink
//           }
//         >
//           {link.icon}
//           <span className="capitalize">{link.name}</span>
//         </NavLink>
//       ))}
//     </div>
//   ))}
