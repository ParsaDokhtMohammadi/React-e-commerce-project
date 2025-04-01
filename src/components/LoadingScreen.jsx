import React from 'react'
import { BarLoader } from 'react-spinners'
const LoadingScreen = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center min-h-[calc(100vh-345px)]'>
        <BarLoader loading color='red'width={200} height={10}></BarLoader>
        <h2 className='text-2xl'>Loading...</h2>
    </div>
  )
}

export default LoadingScreen