/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import {BiCricketBall} from 'react-icons/bi'; 
import { IconContext } from 'react-icons';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state';





const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    // const [isDarkmode, SetisDarkmode] = useState(false)

    const seriesData = [
        { id: 1, name: 'The Ashes, 2023' },
        { id: 2, name: 'Indian Tour of West Indies, 2023' },
        { id: 3, name: 'BAN VS AFG, 2023' },
        { id: 4, name: 'TNPL, 2023' },
        { id: 5, name: 'Series 5' },
        { id: 6, name: 'Series 6' },
        { id: 7, name: 'Series 7' },
        { id: 8, name: 'Series 8' },
        // Add more series data as needed
      ];

    const dispatch = useDispatch();
    const isDarkMode =  useSelector((state) => state.isdarkmode)

    // Get all  necessary action creators from redux
    const {isdarkmode,  islightmode } = bindActionCreators(actionCreators, dispatch);

    const renderSeriesItems = () => {
        return seriesData.slice(0, 4).map((series) => (
          <li key={series.id} className="px-4 py-2 hover:text-orange-700">
            <a href="#">{series.name}</a>
          </li>
        ));
      };

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
      };

    const handleClickOutside = (event) => {
    console.log(dropdownRef.current);
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
          setIsOpen(!isOpen);
        }
      };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, );
    
  return (
<header className={`backdrop-blur-sm   ${ isDarkMode ?  'bg-white/90' : 'bg-black/90'} flex flex-wrap place-items-center sticky top-0 z-10`}>
    <nav className='flex justify-between  text-white w-screen container mx-auto px-4 relative z-10' ref={dropdownRef} >

        <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
            <a href='#' className={`text-3xl font-bold font-heading flex items-center ${isDarkMode? 'text-black' : 'text-white'}`}> <span className='text-orange-700'>Cr</span>icS < BiCricketBall/></a>
        
        <ul className={`hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12  ${ isDarkMode ? 'text-black' : 'text-white'  }`}>
          <li><a className={` ${isDarkMode ? 'hover:text-blue-700' : 'hover:text-orange-700'}`}href="#">Home</a></li>
          <div className="relative">
      <button
        type="button"
        className={` focus:outline-none flex items-center ${isDarkMode ? 'hover:text-blue-700' : 'hover:text-orange-700'}`} 
        onClick={handleDropdownToggle}
      >
        Series <span className="ml-1"><AiOutlineCaretDown /></span>
      </button>
      {isOpen && (
        <ul className=" py-2 w-44 shadow text-sm text-white bg-gray-700 absolute left-0 rounded-md ">
          {renderSeriesItems()}
          <li className="px-4 py-2">
            <a href="/all-series"> <span className='text-blue-500  hover:text-orange-700'>All Series</span></a>
          </li>
        </ul>
      )}
    </div>
          <li><a className={` ${isDarkMode ? 'hover:text-blue-700' : 'hover:text-orange-700'}`} href="#">Fixtures</a></li>
          <li className="flex items-center">
  <a className= {`flex items-center  ${isDarkMode ? 'hover:text-blue-700' : 'hover:text-orange-700'}`}href="#">
    Stats
    <span className="ml-1 "><MdSportsCricket/></span>
    
    
  </a>
  
</li>

        </ul>

        <div className="hidden xl:flex items-center space-x-5 ">
        {isDarkMode ? <button className="flex px-1 " onClick={ () => {isdarkmode()}}><IconContext.Provider value={{ color: 'black',  }} ><FaMoon /></IconContext.Provider>  <span className='text-sm'></span></button> : <button className="flex px-2 " onClick={ () => {islightmode()}}><FaSun /><span className='text-sm bg-white'></span></button>}

          
        </div>


</div>

        

    </nav>

</header>
  );
};


export default Navbar;
