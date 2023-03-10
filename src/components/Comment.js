import React,{useState, useEffect} from 'react'
import { GOOGLE_API_KEY, YOUTUBE_COMMENTS } from '../api/Api';

import moment from 'moment';

const Comment = ({id}) => {

    const[comments, setComments] = useState([]);

    const getComments = async () =>{

        await fetch(YOUTUBE_COMMENTS + id + "&key=" + GOOGLE_API_KEY)
          .then((res) => res.json())
          .then((json) => setComments(json.items))
          .catch((err) => console.log(err))

        //   snippet?.topLevelComment?.snippet?.authorDisplayName || authorProfileImageUrl || textOriginal || publishedAt
        //replies.comments(map).snippet
      }

      // console.log(comments)


      useEffect(() => {
            getComments();
      },[])

      if(comments === undefined) return "";

  return (
    <div>
        {
            comments.map((comment) => (<div key={comment.id}>
                <div className='flex mb-4 mt-4 items-center' >      
            <img src={comment.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className='rounded-full h-8 w-8 mr-2'/>
            <div>
            <span><span className='text-sm font-bold ' title="Channel Title">{comment.snippet?.topLevelComment?.snippet?.authorDisplayName} &nbsp;</span>{moment(comment.snippet?.topLevelComment?.snippet?.publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow()}</span>

            </div>
        </div>
        <p className='mx-3'>{comment.snippet?.topLevelComment?.snippet?.textOriginal} </p>

{
  comment?.replies &&


        <div className='ml-10 mt-5'>
        
        <details>
            <summary className='text-indigo-700'>{comment?.replies?.comments.length}replies</summary>
            {
              comment?.replies?.comments.map((com) =>(

                <div key={com.id}>

                
                <div className='flex mb-4 mt-4 items-center' >      
            <img src={com.snippet?.authorProfileImageUrl} className='rounded-full h-8 w-8 mr-2'/>
            <div>
            <span><span className='text-sm font-bold ' title="Channel Title">{com.snippet?.authorDisplayName} &nbsp;</span>{moment(com?.snippet?.publishedAt.substring(0, 10).replace(/-/g, ""), "YYYYMMDD").fromNow()}</span>

            </div>
        

        </div> 
        <p className='mx-3'>{com.snippet?.textOriginal} </p>
        </div>

              ))
            }
             
        </details>

        </div>
}
        </div>
            ))
        }
        
    </div>

  )
}

export default Comment