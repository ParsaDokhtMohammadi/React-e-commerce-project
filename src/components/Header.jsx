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
            to={"Trending/1"}
            className={({ isActive }) =>  `duration-200 ${isActive ? "text-[#E50914]" : ""}`}
          >
            Trending
          </NavLink>
        </nav>
        <Link to={"/"}><img src="logo.png"  className="w-28"/></Link>
        <div className="w-1/3 flex justify-end">
        </div>
        
      </header>
    </>
  );
};

export default Header;
