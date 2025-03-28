import React from "react";
import { NavLink , Link } from "react-router";
const Header = () => {
  return (
    <>
      <header className="flex items-center bg-[#1E1E1E] w-full justify-between px-4">
        <nav className="flex gap-3 w-1/3" >
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#E50914]" : ""}`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to={"favorites"}
            className={({ isActive }) =>  `duration-200 ${isActive ? "text-[#E50914]" : ""}`}
          >
            Favorites
          </NavLink>
          <NavLink
            to={"Trending"}
            className={({ isActive }) =>  `duration-200 ${isActive ? "text-[#E50914]" : ""}`}
          >
            Trending
          </NavLink>
        </nav>
        <Link to={"/"}><img src="logo.png"  className="w-28"/></Link>
        <div className="w-1/3 flex justify-end">
        <button className="bg-[#E50914] px-2.5 py-1 rounded cursor-pointer hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE] transition-all duration-300 ease-in-out">login</button>
        </div>
        
      </header>
    </>
  );
};

export default Header;
