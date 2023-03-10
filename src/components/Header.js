import React,{useState, useEffect} from 'react';

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/MenuSlice';

import { YOUTUBE_SUGGESTIONS } from '../api/Api';


import { Link } from 'react-router-dom';


const Header = () => {

  const[searchText, setSearchText] = useState("");

  const[suggestionsList, setSuggestionsList] = useState([]);

  const dispatch = useDispatch();

  const toggleMenuHandler = ()  => {
    dispatch(toggleMenu());
  }

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS + searchText);
    const json = await data.json();
    // console.log(json);
    setSuggestionsList(json[1]);
  }

  useEffect(() => {

    const timer = setTimeout(() => getSearchSuggestions(),200);

    return() =>{
      clearTimeout(timer);
    }

  },[searchText])

  return (
    <div className='grid grid-flow-col m-2 p-2 shadow-sm'>
        <div className='flex col-span-1 text-center'>
            <RxHamburgerMenu style={{fontSize: "1.5em", marginTop:'6.5px'}} onClick={() => toggleMenuHandler()} className="cursor-pointer ml-4"/>
           <Link to="/"><img src="https://raw.githubusercontent.com/Siva-Tejaa/Projects-Data/main/Youtube%20Logo.png" alt="Youtube Logo" className='h-9 mx-2'/></Link>
        </div>
        <div className='col-span-10 px-10'>
            <input type="text" placeholder='  Search' list="searchSuggestions" className='w-1/2 border border-gray-400 p-1.5 rounded-l-full' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <datalist id="searchSuggestions">

              {
                suggestionsList.map((suggestion) => (
                  <option key={suggestion} onClick={() => setSearchText(suggestion)}>{suggestion}</option>
                  
                ))
              }
           

            </datalist>
            {/* <button title='Search' className='border border-gray-400 pt-[5.8px] pb-[11px] px-3 rounded-r-full'><TfiSearch style={{fontSize: "1.2em"}}/></button> */}
            <Link to={`/search/${searchText}`}><button title='Search' className='border border-gray-400 pt-[5.8px] pb-[5.8px] px-3 rounded-r-full'>Search</button></Link>
        </div>
        <div className='col-span-1'>
            <FaUserCircle style={{fontSize: "1.5em"}}/>
        </div>
    </div>
  )
}

export default Header