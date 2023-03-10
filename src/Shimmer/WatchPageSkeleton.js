import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WatchPageSkeleton = () => {
  return (
    <div>
        <Skeleton width={700} height={25} className='mb-2 mt-2 font-bold'/>
            <div className='flex mb-4 mt-4 items-center'>
              
              <Skeleton circle width={35} height={35} className='rounded-full h-8 w-8 mr-2'/>
              <Skeleton width={500} height={22} className='text-sm font-bold ' />
          
            </div>
            <Skeleton width={750} height={80}/>
    </div>
  )
}

export default WatchPageSkeleton