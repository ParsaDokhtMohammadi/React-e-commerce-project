import React from 'react'
import { useNavigate } from 'react-router';
const Pagination = ({page , totalpage , newPage}) => {
    const navigate = useNavigate();
    const changePage = (newPage) => {
        navigate(`/trending/${newPage}`);
      };
    const pagination = () => {
        return [1,2,3,4].map((num) => {
          const pageNumber = page + num;
          if(page+num>=totalpage) return
          return (
            <button
              key={pageNumber}
              className="px-4 py-2 bg-[#E50914] text-[#EEE] rounded disabled:opacity-50 cursor-pointer mx-1 hover:bg-[#27AE60] duration-200"
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        });
      };
  return (
    <div className="flex gap-2 mt-6">
    <button
      className="px-4 py-2 bg-[#E50914] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200"
      onClick={() => changePage(Math.max(page - 1, 1))}
      disabled={page === 1}
    >
      Previous
    </button>
    <button
     className={`px-4 py-2 ${page===1 ?"bg-[#27AE60]" :"bg-[#E50914]"} text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200`}
     onClick={() => changePage(1)}>
      1
    </button>
    <button
     className={`px-4 py-2 bg-[#27AE60] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200
      ${page===1 || page==totalpage ? "hidden" : "block"}
      `}
     onClick={() => changePage(page)}>
      {page}
    </button>
  
   
    {pagination()}
    
    

    <button
     className={`px-4 py-2 ${page===totalpage ?"bg-[#27AE60]" :"bg-[#E50914]"} text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200`}
     onClick={() => changePage(totalpage)}>
      {totalpage}
    </button>
    <button
      className="px-4 py-2 bg-[#E50914] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200"
      onClick={() => changePage(page + 1)}
      disabled={totalpage && page >= totalpage}
    >
      Next
    </button>
  </div>
  )
}

export default Pagination