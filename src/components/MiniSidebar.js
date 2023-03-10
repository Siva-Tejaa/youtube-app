import React from 'react';
import { MdHomeFilled,MdOutlineSubscriptions,MdVideoLibrary} from "react-icons/md";
import { AiFillFire} from "react-icons/ai";
import { Link } from 'react-router-dom';

const MiniSidebar = () => {
  return (
    <div className='text-center w-25 mt-5 shadow-md mr-3'>
        <ul className='mb-3 mx-2'>
        <Link to="/"><li className='mb-5 text-xs place-self-center'><MdHomeFilled style={{fontSize: "2em", marginLeft:"22px"}}/>Home</li></Link>
        <li className='mb-5 text-xs'><AiFillFire style={{fontSize: "2em",marginLeft:"22px"}}/>Shorts</li>
        <li className='mb-5 text-xs'><MdOutlineSubscriptions style={{fontSize: "2em",marginLeft:"22px"}}/>Subscriptions</li>
        <li className='mb-5 text-xs'><MdVideoLibrary style={{fontSize: "2em",marginLeft:"22px"}}/> Library</li>
      </ul>

      {/* <ul className='mb-3'>
        <li className='mb-5 text-xs align-baseline'><MdHomeFilled style={{fontSize: "2em",marginLeft:"29px" }}/>Home</li>
        <li className='mb-5 text-xs'><AiFillFire style={{fontSize: "2em",marginLeft:"29px"}}/>Shorts</li>
        <li className='mb-5 text-xs'><MdOutlineSubscriptions style={{fontSize: "2em",marginLeft:"29px"}}/>Subscriptions</li>
        <li className='mb-5 text-xs'><MdVideoLibrary style={{fontSize: "2em",marginLeft:"29px"}}/> Library</li>
      </ul> */}
    </div>
  )
}

export default MiniSidebar