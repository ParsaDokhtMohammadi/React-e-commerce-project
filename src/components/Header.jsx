import React from "react";
import { NavLink, Link } from "react-router";
import SearchBar from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import "tippy.js/dist/tippy.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import { useGetGenresQuery } from "../services/ProductsApiSlice";
import { useState } from "react";
import { FaChevronDown ,FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [mobileSidebarRender , setMobileSidebarRender] = useState(false)
  const [categoryListRender , setCategoryListRender] = useState(false)
  const [categoryMobileListRender , setMobileCategoryListRender] = useState(false)
  const CartLength = useSelector((state) => state.Movies.cart).length;
  const FavoritesLength = useSelector((state) => state.Movies.favorites).length;

  const { data: allgenres } = useGetGenresQuery();
  console.log(allgenres);
  return (
    <>
      <header className="  flex items-center bg-[#1E1E1E] w-full justify-between px-4 py-2">
      <div className="w-1/3 flex  max-md:hidden">
          <SearchBar></SearchBar>
        </div>
        <div className="md:hidden w-1/3  flex ">
        <HiMenuAlt3  size={28} className="cursor-pointer" onClick={()=>setMobileSidebarRender(!mobileSidebarRender)}/>
              <ul className={`list-none ${mobileSidebarRender ? "flex" : "hidden"} flex-col absolute top-20 left-0 z-10 bg-[#1E1E1E] h-fit p-2 gap-3 rounded-b md:hidden`}>
                <li>
                <SearchBar></SearchBar>
                </li>
                <li><Link to={"trending/1"}>trending</Link></li>
                <li>
                  <button className="cursor-pointer flex items-center gap-0.5" onClick={()=>setMobileCategoryListRender(!categoryMobileListRender)}>
                    category {categoryMobileListRender ?<FaChevronDown size={12}/> :<FaChevronRight size={12}/> }
                    </button>
                  <ul className={`list-none ml-4 ${categoryMobileListRender ? "flex" : "hidden"} flex-col gap-1`}>
                  {allgenres?.genres.map((genre) => (
                <li key={genre.id}>
                  <Link to={`category/1?query=${genre.id}`}>{genre.name}</Link>
                </li>
              ))}
                  </ul>
                </li>
              </ul>
        </div>
        
        <Link to={"/"}>
          <img src="logo.png" className="w-28" />
        </Link>
        <nav className="flex gap-3 w-1/3 items-center justify-end">
          <NavLink
            to={"cart"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#27AE60]" : ""} `
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
      
          <div className="relative">
            <button onClick={()=>setCategoryListRender(!categoryListRender)} className="cursor-pointer max-md:hidden flex gap-0.5 items-center">
              category
              {categoryListRender ?<FaChevronDown size={12}/> :<FaChevronRight size={12}/> }
              </button>
            <ul
              className={`absolute right-0 top-8 w-[300px] ${categoryListRender ? "flex" : "hidden"} flex-wrap gap-2 bg-[#1E1E1E] 
              rounded-b-2xl z-10 p-2  transition-opacity duration-200 max-md:hidden `}
            >
              {allgenres?.genres.map((genre) => (
                <li key={genre.id}>
                  <Link to={`category/1?query=${genre.id}`}>{genre.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <NavLink
            to={"Trending/1"}
            className={({ isActive }) =>
              `duration-200 ${isActive ? "text-[#E50914]" : ""} max-md:hidden`
            }
          >
            Trending
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
