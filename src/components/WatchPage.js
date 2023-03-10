import React,{useState,useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import { YOUTUBE_VIDEO_API, GOOGLE_API_KEY, YOUTUBE_CHANNEL, YOUTUBE_RELATED_VIDEOS, YOUTUBE_COMMENTS } from '../api/Api';

import { BiLike,BiDislike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import MiniSidebar from './MiniSidebar';
import VideoCardSkeleton from '../Shimmer/VideoCardSkeleton';
import WatchPageSkeleton from '../Shimmer/WatchPageSkeleton';

import { numify } from "numify";
import moment from 'moment';
import Comment from './Comment';




const WatchPage = () => {


    const{id} = useParams();

    const[videoDetails, setVideoDetails] = useState([]);
    const[relatedVideos, setRelatedVideos] = useState([]);
    const[loading, setLoading] = useState(false);
    const[loadingg, setLoadingg] = useState(false);

    const getVideoDetails = async () =>{

        await fetch(YOUTUBE_VIDEO_API + id + "&key=" + GOOGLE_API_KEY)
        .then((res) => res.json())
        .then((json) => setVideoDetails(json.items))
        .catch((err) => console.log(err))

        setLoadingg(false)
   }

   const getRelatedVideos = async () =>{

    await fetch(YOUTUBE_RELATED_VIDEOS + id + "&type=video&key=" + GOOGLE_API_KEY)
    .then((res) => res.json())
    .then((json) => setRelatedVideos(json.items))
    .catch((err) => console.log(err))

    setLoading(false);
}
   
   
     useEffect(() => {
      setLoadingg(true)
      setLoading(true);
      
        getVideoDetails();
        getRelatedVideos()

        // getChannelDetails();
     },[id])


     if(videoDetails[0] === undefined) return <h1></h1>

     const{snippet, statistics} = videoDetails[0];

     const{channelTitle, description, title, thumbnails, publishedAt, channelId} = snippet;
     const{viewCount, likeCount, commentCount} = statistics;

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

    // const navHandler = () => 

  return (
    <div className='flex'>
              {console.log(relatedVideos)}

      <MiniSidebar/>
        <div className='p-5'>
            <iframe width="750" height="423" src={`https://www.youtube.com/embed/${id}?&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            
          {loadingg ? <WatchPageSkeleton/>: <>
            <h1 className='mb-2 mt-2 font-bold'>{title}</h1>
            <div className='flex mb-4 mt-4 items-center'>
              
              <Link to={`/channel/${channelId}`} className="flex items-center"><img src={"https://api.multiavatar.com/"+ channelTitle.trim() +".svg?apikey=RIsT0Wt1q3cXVC"} className='rounded-full h-8 w-8 mr-2'/>
              <p className='text-sm font-bold ' title="Channel Title">{channelTitle}</p></Link>
              <p className='mx-5 px-3 py-1 bg-slate-900 text-white rounded-full'>Subscribe</p>
               
            <p className='bg-gray-200 mx-5 px-3 py-1 rounded-full flex items-center'><BiLike/> &nbsp; {numify(likeCount)} &nbsp;| &nbsp;<BiDislike/> </p>
            <p className='bg-gray-200 mx-5 px-3 py-1 rounded-full flex items-center'><IoMdShareAlt/> Share</p>
          
            </div>
            <div className='cursor-pointer bg-gray-200 px-2 py-3 rounded-lg max-w-[750px]'>
              <p>{numify(viewCount).toUpperCase()} views | {moment(publishedAt.substring(0, 10).replace(/-/g, "")).format('ll')} </p>
              <details>
                <summary>Description</summary>
                <p>
              {description}
              </p>
              </details>
            </div>
            
            <div className='py-6'>
              {commentCount} comments
              <hr className='my-3'/>
              <Comment id={id}/>
            </div>
            </>}
        </div>
        <div className='p-4'>
          <p className='font-bold'>Related Videos</p>
          {loading && Array(5).fill("").map((ar) =><VideoCardSkeleton key={Math.random()}/>)}
          
          {
            relatedVideos.map((video) => (
       <div className='m-2  w-[17rem]' key={video.id.videoId}>
        <Link to={`/watch/${video.id.videoId}`}><img src={video?.snippet?.thumbnails.medium.url} alt="Video Thumbnail" className='rounded-lg mb-2'/></Link>
        <div className='flex'>
        <Link to={`/channel/${video?.snippet?.channelId}`}><img src={"https://api.multiavatar.com/"+ video?.snippet?.channelTitle.trim() +".svg?apikey=RIsT0Wt1q3cXVC"} className='rounded-full h-8 w-8 mr-2'/></Link>
          <div>
          <Link to={`/watch/${video.id.videoId}`}><h1 className='text-sm font-medium mb-1' style={st} title={video?.snippet?.title}>{video?.snippet?.title}</h1></Link>
          <Link to={`/channel/${video?.snippet?.channelId}`}><p className='text-xs text-gray-500' title={video?.snippet?.channelTitle}>{video?.snippet?.channelTitle}</p></Link>
             {/* <p className='text-xs text-gray-500'>{video?.statistics?.viewCount} views | {video?.statistics?.publishedAt.substring(0, 10)}</p> */}
          </div>
        </div>
        
       </div>

    
            ))
          }
        </div>
    </div>
  )
}

export default WatchPage