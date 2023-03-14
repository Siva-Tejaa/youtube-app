import React,{useState, useEffect} from 'react'
import { YOUTUBE_VIDEO_CATEGORY } from '../api/Api';


import Carousel from 'react-elastic-carousel';


import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



const Button = () => {

  const[category, setCategory] = useState();


    const getVideoCategories = async () =>{

      await fetch(YOUTUBE_VIDEO_CATEGORY)
      .then((res) => res.json())
      .then((json) => setCategory(json.items))
      .catch((err) => console.log(err))
 }


 
   useEffect(() => {
    getVideoCategories();
   },[])
   
   if(category === undefined) return <h1></h1>


  return (
    <div className=''>

<Carousel itemPadding={[0, 0]} itemsToShow={5} outerSpacing={5} pagination={false} itemsToScroll={2}>
      {
        category.map((categ, index) => (
            // <button className="px-3 py-2 m-1 max-w-fit  bg-gray-200 rounded-lg" key={index}>{categ?.snippet?.title}</button>
            <button className="px-3 py-2 m-1 w-52 whitespace-nowrap bg-gray-200 rounded-lg" key={index}>{categ?.snippet?.title}</button>
        ))
        }
        </Carousel>
  

        

        
    </div>
  )
}

export default Button