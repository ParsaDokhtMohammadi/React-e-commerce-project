import React from "react";
import { NavLink, Link } from "react-router";
import SearchBar from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import "tippy.js/dist/tippy.css";
import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import { useGetGenresQuery } from "../services/ProductsApiSlice";

const Header = () => {
  const CartLength = useSelector((state) => state.Movies.cart).length;
  const FavoritesLength = useSelector((state) => state.Movies.favorites).length;

  const { data: allgenres } = useGetGenresQuery();
  console.log(allgenres);
  return (
    <>
      <header className="flex items-center bg-[#1E1E1E] w-full justify-between px-4 py-2">
        <nav className="flex gap-3 w-1/3 items-center">
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#27AE60]" : ""}`
            }
          >
            <Tippy content="Cart">
              <div className="grid grid-cols-2 grid-rows-2 relative">
                <FaShoppingCart
                  size={24}
                  className="col-span-full row-span-full"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-[#EEE] rounded-full px-1 text-xs">
                  {CartLength}
                </span>
              </div>
            </Tippy>
          </NavLink>
          <NavLink
            to={"favorites"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#F5C518]" : ""}`
            }
          >
            <Tippy content="favorites">
              <div className="grid grid-cols-2 grid-rows-2 relative">
                <FaStar size={24} className="col-span-full row-span-full" />
                <span className="absolute top-4 left-4 bg-red-500 text-[#EEE] rounded-full px-1 text-xs">
                  {FavoritesLength}
                </span>
              </div>
            </Tippy>
          </NavLink>
          <NavLink
            to={"Trending/1"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#E50914]" : ""}`
            }
          >
            Trending
          </NavLink>
          <span className="relative group  ">
            category
            <ul
              className="absolute left-0 top-8 w-[300px] flex flex-wrap gap-2 bg-[#1E1E1E] 
                        rounded-b-2xl z-10 p-2 opacity-0  
                        group-hover:opacity-100 transition-opacity duration-200"
            >
              {allgenres?.genres.map((genre) => (
                <li key={genre.id}>
                  <Link to={`category/1?query=${genre.id}`}>{genre.name}</Link>
                </li>
              ))}
            </ul>
          </span>
        </nav>
        <Link to={"/"}>
          <img src="logo.png" className="w-28" />
        </Link>
        <div className="w-1/3 flex justify-end">
          <SearchBar></SearchBar>
        </div>
      </header>
    </>
  );
};

export default Header;
