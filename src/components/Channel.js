import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL, YOUTUBE_CHANNEl_VIDEOS } from '../api/Api';
import MiniSidebar from './MiniSidebar';

import { numify } from "numify";
import ChannelVideoCard from './ChannelVideoCard';

const Channel = () => {

    const {channelid} = useParams();

    const[channelDetails, setChannelDetails] = useState([]);
    const[channelVideos, setChannelVideos] = useState([]);
    
    const getChannelDetails = async () =>{

        await fetch(YOUTUBE_CHANNEL + channelid + "&key=" + GOOGLE_API_KEY)
        .then((res) => res.json())
        .then((json) => setChannelDetails(json.items))
        .catch((err) => console.log(err))

   }

   const getChannelVideos = async () =>{

    await fetch(YOUTUBE_CHANNEl_VIDEOS + channelid + "&maxResults=50&key=" + GOOGLE_API_KEY)
    .then((res) => res.json())
    .then((json) => setChannelVideos(json.items))
    .catch((err) => console.log(err))

}

useEffect(() => {   

    getChannelDetails();
      getChannelVideos()

   },[channelid]);

   if(channelDetails[0] === undefined) return <h1></h1>
   if(channelVideos[0] === undefined) return <h1></h1>

     const{brandingSettings, snippet, statistics} = channelDetails[0];
     const{channel, image} = brandingSettings;

     const{customUrl, description, title, thumbnails, publishedAt} = snippet;
     const{subscriberCount, videoCount} = statistics;

     

  return (
    <div className='flex'>
        <MiniSidebar/>

        {/* {console.log(channelVideos)} */}
      
        <div className=''>
            <div>
                <img src={image?.bannerExternalUrl + "=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"} alt="ChannelBanner" className='w-[100%]'/>
            </div>
            <div className='flex mt-4 ml-8 items-center'>
                <img src={thumbnails?.high?.url} alt="Channel Logo" className='rounded-full h-[8rem] w-[8rem] mr-2'/>
                <div className='mt-3'>
                    <p className='font-bold text-xl'>{title}</p>
                    <p className='text-gray-400 mt-2'>{customUrl} &nbsp; {numify(subscriberCount)} subscribers &nbsp; {numify(videoCount)} videos</p>
                    <p className='text-gray-400 mt-2'>{description.slice(0, 110)}...</p>
                </div>
                <div>
                <p className='mx-5 px-3 py-1 bg-slate-900 text-white rounded-full '>Subscribe</p>
                </div>
            </div>
            <br/>
            <hr/>
            <div className='mt-4 ml-1'>
                <p className='font-bold text-xl'>Recently Uploaded Videos</p>

                <div className='flex flex-wrap'>
                
                {
                channelVideos.map((video) => (
          <Link to={`/watch/${video?.id?.videoId}`} key={video.id}><ChannelVideoCard video={video}/></Link>
        ))
                }
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Channel