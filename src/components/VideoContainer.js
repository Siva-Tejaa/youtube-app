import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from '../api/Api'
import VideoCardSkeleton from '../Shimmer/VideoCardSkeleton';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);
  const[loading, setLoading] = useState(false);

const getVideos = async () =>{

     await fetch(YOUTUBE_VIDEOS_API)
     .then((res) => res.json())
     .then((json) => setVideos(json.items))
     .catch((err) => console.log(err))

    setLoading(false);

}

  useEffect(() => {
    setLoading(true);
    getVideos();

  },[])
  
  // if(videos === undefined) return <h1>Loading...</h1>

  return (
    <div className='flex flex-wrap'>
    
    {
      loading ? <>
      {
        Array(12).fill("").map((arr,index) =>(
          <VideoCardSkeleton key={index}/>
        ))
      }
      </> :
    
    

      
        videos.map((video) => (
          <VideoCard video={video}/>
        ))
      
    } 
    </div>
  )
}

export default VideoContainer