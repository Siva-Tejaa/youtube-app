import React from 'react';
import moment from 'moment';
import { numify } from "numify";

const ChannelVideoCard = ({video}) => {
    // console.log(video);
    const{snippet} = video;
    const{title, thumbnails, publishedAt} = snippet;
    // const{viewCount} = statistics;

    const st ={
      "width": "13rem",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "display": "-webkit-box",
  "lineHeight": "21px",
  "maxHeight":"45px",
  "WebkitLineClamp": "2",
  "WebkitBoxOrient": "vertical"
    }
    
  return (
    <div>
       <div className='m-2  w-[17rem]'>
        <img src={thumbnails.medium.url} alt="Video Thumbnail" className='rounded-lg mb-2'/>
        <div className='flex'>
          {/* <img src={"https://api.multiavatar.com/"+ channelTitle.trim() +".svg?apikey=RIsT0Wt1q3cXVC"} className='rounded-full h-8 w-8 mr-2'/> */}
          <div>
             <h1 className='text-sm font-medium mb-1' style={st} title={title}>{title}</h1>
             {/* <p className='text-xs text-gray-500' title={channelTitle}>{channelTitle}</p> */}
             <p className='text-xs text-gray-500'> { moment(publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow() }</p>
          </div>
        </div>
        
       </div>

    </div>
  )
}

export default ChannelVideoCard