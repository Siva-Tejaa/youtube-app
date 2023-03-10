import React,{useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_VIDEOS } from '../api/Api';
import MiniSidebar from './MiniSidebar';

import moment from 'moment';
import SearchPageSkeleton from '../Shimmer/SearchPageSkeleton';


const SearchPage = () => {

  const{text} = useParams();

  const[searchVideos, setSearchVideos] = useState([]);

  const[loading, setLoading] = useState(false);

  const getSearchVideos = async () => {

    await fetch(YOUTUBE_SEARCH_VIDEOS + text + "&key=" + GOOGLE_API_KEY)
        .then((res) => res.json())
        .then((json) => setSearchVideos(json.items))
        .catch((err) => console.log(err))

        setLoading(false);
  }

  useEffect(() => {

    setLoading(true);
    getSearchVideos();

  },[text])

  // console.log(searchVideos)

  // if(searchVideos === undefined) return ""

  if(searchVideos === undefined) return <h1></h1>

  return (
    
  
    <div className='flex'>
      <MiniSidebar/>
      {
      loading ? <div>
          
          <SearchPageSkeleton/>
          <SearchPageSkeleton/>
          <SearchPageSkeleton/>
          
      </div> :
      <div>
        
      {
        searchVideos.map((video) =>(
          
          <Link to={`/watch/${video?.id.videoId}`} key={video?.id.videoId}><div className='flex' >
          <div className='ml-6'>
            {/* <p>Showing results for <span className='font-bold'>{text}</span></p> */}
  
            <img src={video?.snippet?.thumbnails?.medium?.url} alt="video Thumbnail" className={video?.id.kind === "youtube#channel" ? "rounded-full h-32 w-32 ml-24 mr-[133px] mt-3" :'rounded-lg m-2 mt-4'}/>
          </div>
          <div className='ml-5'>
            <p className= 'mt-4 font-semibold'>{video?.snippet?.title}</p>
            <p className='text-xs text-gray-500 mt-1'><span>{video?.id.kind.slice(7)} | &nbsp;</span>{ moment(video?.snippet?.publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow() }</p>
            <div className='flex items-center my-3'>
            <img src={"https://api.multiavatar.com/"+ video?.snippet?.channelTitle.trim() +".svg?apikey=RIsT0Wt1q3cXVC"} className='rounded-full h-8 w-8 mr-2'/>
               <p className='text-xs text-gray-500' title={video?.snippet?.channelTitle}>{video?.snippet?.channelTitle}</p>    
          </div>
          <p className='text-xs text-gray-500 mt-3'>{video?.snippet?.description}</p>
          </div>
        </div>
        </Link>
        
        ))
      }
      
      </div>
}
    </div>
  )
}

export default SearchPage;