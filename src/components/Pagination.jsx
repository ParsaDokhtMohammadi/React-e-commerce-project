import React from 'react'
import { FaChevronLeft ,FaChevronRight } from "react-icons/fa";
const Pagination = ({page , totalpage , changePage}) => {

  
    const paginationPlus = () => {
        return [1,2].map((num) => {
          const pageNumber = page + num;
          if(page+num>=totalpage ) return
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
    const paginationNeg = () => {
        return [2,1].map((num) => {
          const pageNumber = page - num;
          if(page-num<=1 ) return
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
      className="px-4 py-2 flex  items-center gap-1 bg-[#E50914] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200"
      onClick={() => changePage(Math.max(page - 1, 1))}
      disabled={page === 1}
    >
      <FaChevronLeft /> Previous
    </button>
    <button
     className={`px-4 py-2 ${page===1 ?"bg-[#27AE60]" :"bg-[#E50914]"} text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200`}
     onClick={() => changePage(1)}>
      1
    </button>
    {page>3 ? <span className='text-2xl'>...</span> : ""}
    {paginationNeg()}
    <button
     className={`px-4 py-2 bg-[#27AE60] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200
      ${page===1 || page==totalpage ? "hidden" : "block"}
      `}
     onClick={() => changePage(page)}>
      {page}
    </button>
  
   
    {paginationPlus()}
    
    
    {totalpage-page > 3 ? <span className='text-2xl'>...</span> : ""}
    <button
     className={`px-4 py-2 ${page===totalpage ?"bg-[#27AE60]" :"bg-[#E50914]"} ${totalpage===1 ? "hidden" : "block"} text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200`}
     onClick={() => changePage(totalpage)}>
      {totalpage}
    </button>
    <button
      className="px-4 py-2 flex  items-center gap-1 bg-[#E50914] text-[#EEE] rounded disabled:opacity-50 cursor-pointer hover:bg-[#27AE60] duration-200"
      onClick={() => changePage(page + 1)}
      disabled={totalpage && page >= totalpage}
    >
      Next <FaChevronRight />
    </button>
  </div>
  )
}

export default Pagination