import React from 'react';

import { useSelector} from 'react-redux';


import Sidebar from './Sidebar';
import Container from './Container';
import MiniSidebar from './MiniSidebar';


const Body = () => {

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen)


  return (
    <div className="flex w-fit">

        {/* {!isMenuOpen ? <Sidebar/> : <MiniSidebar/> } */}
        <MiniSidebar/>
        
      
        <Container/>
        {console.clear()}
    </div>
  )
}

export default Body