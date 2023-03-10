import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SearchPageSkeleton = () => {
  return (
    <div>
        <div className='flex' >
          <div className='ml-6'>
            {/* <p>Showing results for <span className='font-bold'>{text}</span></p> */}
  
            <Skeleton height={180} width={320} borderRadius={8} className='rounded-lg mb-2'/>
          </div>
          <div className='ml-5'>
            <Skeleton width={400} className= 'mt-4 font-semibold'/>
            {/* <p className='text-xs text-gray-500 mt-1'>{ moment(video?.snippet?.publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow() }</p> */}
            <div className='flex items-center my-3'>
            <Skeleton circle width={35} height={35} className='rounded-full h-8 w-8 mr-2'/>
               <Skeleton width={100} className='text-xs text-gray-500' />    
          </div>
          <Skeleton width={500} className='text-xs text-gray-500 mt-3' />
          </div>
        </div>
    </div>
  )
}

export default SearchPageSkeleton