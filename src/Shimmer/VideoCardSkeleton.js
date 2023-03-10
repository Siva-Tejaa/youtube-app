import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoCardSkeleton = () => {
  return (
    <div>   
        <div className='m-2  w-[17rem]'>
          <Skeleton height={150} borderRadius={8} className='rounded-lg mb-2'/>
          <div className='flex'>
            <Skeleton circle width={35} height={35} className='rounded-full h-8 w-8 mr-2'/>
            <div>
              <Skeleton width={200} height={20} className='text-sm font-medium mb-1'/>
              <Skeleton width={150} height={15} className='text-xs text-gray-500'/>
              {/* <p className='text-xs text-gray-500'>{viewCount} views | {publishedAt.substring(0, 10)}</p> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoCardSkeleton