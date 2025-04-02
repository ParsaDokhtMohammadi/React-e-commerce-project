import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
const SearchBar = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const handleForm = (e) =>{
    e.preventDefault()
    navigate(`/search/1?query=${search}`)
    

  }
  return (
      <form action="" onSubmit={handleForm}>
      <div className="flex gap-2 items-center border rounded pl-2">
        <button
          className="cursor-pointer"
          type="submit"
          >
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="search for movie"
          className="outline-none bg-[#EEE] text-[#1E1E1E] pl-1 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
      </div>
      </form>
    
  );
};

export default SearchBar;
