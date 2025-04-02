import React from 'react'
import { handleCart } from '../features/MovieSlice'
import { useDispatch } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";
const CartCard = (movie) => {
    const dispatch = useDispatch()
  return (
    <>
    <div className='flex row p-2 gap-3  border rounded h-fit'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`}
         className='w-[150px] h-[150px] rounded'/>
         <div className='flex flex-col gap-1 w-full '>
            <h4 className='text-xl'>{movie.movie.title}</h4>
            <span>{movie.movie.release_date}</span>
            <span>16.99$</span>
             <button
                            onClick={() => dispatch(handleCart(movie.movie))}
                            className="flex items-center gap-2.5 p-2  rounded-xl bg-[#27AE60] cursor-pointer 
                          hover:shadow-[5px_5px_8px_4px] hover:shadow-[#EEE]  transition-all  duration-300 w-fit"
                          >
                            remove from cart
                            <FaCartPlus />
                          </button>
         </div>
    </div>
    </>
  )
}

export default CartCard