import React from 'react';

import { MdHomeFilled,MdOutlineSubscriptions,MdVideoLibrary,MdHistory,MdOutlineOndemandVideo,MdOutlineAccessTime,MdLocalFireDepartment,MdOutlineMovie,MdLiveTv } from "react-icons/md";
import { AiFillFire,AiOutlineShopping,AiOutlineDingding } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { TfiCup } from "react-icons/tfi";
import { GiSpellBook } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='p-5 shadow-md w-48]'>
      <ul className='mb-3'>
        <Link to="/"><li className='flex p-2'><MdHomeFilled style={{fontSize: "1.5em"}}/> &nbsp; Home</li></Link>
        <li className='flex p-2'><AiFillFire style={{fontSize: "1.5em"}}/> &nbsp; Shorts</li>
        <li className='flex p-2'><MdOutlineSubscriptions style={{fontSize: "1.5em"}}/> &nbsp; Subscriptions</li>
      </ul>
      <hr/>
      <ul className='my-3'>
        <li className='flex p-2'><MdVideoLibrary style={{fontSize: "1.5em"}}/> &nbsp; Library</li>
        <li className='flex p-2'><MdHistory style={{fontSize: "1.5em"}}/> &nbsp; History</li>
        <li className='flex p-2'><MdOutlineOndemandVideo style={{fontSize: "1.5em"}}/> &nbsp; Your Videos</li>
        <li className='flex p-2'><MdOutlineAccessTime style={{fontSize: "1.5em"}}/> &nbsp; Watch Later</li>
      </ul>
      <hr/>
      <h1 className='my-3'>Explore</h1>
      <ul >
        <li className='flex p-2'><MdLocalFireDepartment style={{fontSize: "1.5em"}}/> &nbsp; Trending</li>
        <li className='flex p-2'><AiOutlineShopping style={{fontSize: "1.5em"}}/> &nbsp; Shopping</li>
        <li className='flex p-2'><IoMusicalNoteOutline style={{fontSize: "1.5em"}}/> &nbsp; Music</li>
        <li className='flex p-2'><MdOutlineMovie style={{fontSize: "1.5em"}}/> &nbsp; Movies</li>
        <li className='flex p-2'><MdLiveTv style={{fontSize: "1.5em"}}/> &nbsp; Live</li>
        <li className='flex p-2'><SiYoutubegaming style={{fontSize: "1.5em"}}/> &nbsp; Gaming</li>
        <li className='flex p-2'><BiNews style={{fontSize: "1.5em"}}/> &nbsp; News</li>
        <li className='flex p-2'><TfiCup style={{fontSize: "1.5em"}}/> &nbsp; Sports</li>
        <li className='flex p-2'><GiSpellBook style={{fontSize: "1.5em"}}/> &nbsp; Learning</li>
        <li className='flex p-2'><AiOutlineDingding style={{fontSize: "1.5em"}}/> &nbsp; Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar