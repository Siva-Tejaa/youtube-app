import React from 'react';
import moment from 'moment';
import { numify } from "numify";

import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {
    // console.log(video);
    const{snippet, statistics} = video;
    const{channelTitle, description, title, thumbnails, publishedAt, channelId} = snippet;
    const{viewCount} = statistics;
    // console.log(moment([2022,03,19]).fromNow());
    // console.log(publishedAt.substring(0, 10).split("-"));
    // console.log([1,2,34])
    // const month = publishedAt.substring(0, 10).split("-")[1].replace("0","");
    // const date = publishedAt.substring(0, 10).split("-");
    // console.log(date.splice(1,1, month));
    // console.log(date)
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
       <Link to={`/watch/${video.id}`} ><img src={thumbnails.medium.url} alt="Video Thumbnail" className='rounded-lg mb-2'/></Link>
        <div className='flex'>
        <Link to={`/channel/${channelId}`}><img src={"https://api.multiavatar.com/"+ channelTitle.trim() +".svg?apikey=RIsT0Wt1q3cXVC"} className='rounded-full h-8 w-8 mr-2'/></Link>
          <div>
          <Link to={`/watch/${video.id}`}><h1 className='text-sm font-medium mb-1' style={st} title={title}>{title}</h1></Link>
          <Link to={`/channel/${channelId}`}><p className='text-xs text-gray-500' title={channelTitle}>{channelTitle}</p></Link>
             <p className='text-xs text-gray-500'>{numify(viewCount).toUpperCase()} views | { moment(publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow() }</p>
          </div>
        </div>
        
       </div>

    </div>
  )
}

export default VideoCard