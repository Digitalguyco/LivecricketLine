import {React, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators}  from '../../state';
import {RxHamburgerMenu} from 'react-icons/rx'
import { IconContext } from "react-icons"; 
import { Link } from 'react-router-dom';

const NavBar = () => {
    const logo =require('../assets/logo.png')
    const dark =require('../assets/dark.png')
    const dispatch = useDispatch();
    const isDarkMode =  useSelector((state) => state.isdarkmode)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    // Get all  necessary action creators from redux
    const {isdarkmode,  islightmode } = bindActionCreators(actionCreators, dispatch);
  return (
    <header className="  backdrop-blur-sm">
    <nav className=" bg-gradient-to-r  from-[#3f3f73] to-purple-900 ">
      <div className="max-w-7xl mx-auto py-0 px-6 flex items-center justify-between h-14">
        <div className="flex items-center ml-15">
        <img src={logo} alt="Logo" className="w-14 h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] mr-1" />
          <span className="text-white text-2xl  lg:text-3xl font-bold">LiveCricketLine</span>
        </div>
        <div className="flex items-center">
          <ul className=" space-x-10 xl:flex hidden">
          <li className="relative group">
            <Link to="/" >
              Home
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link to="#" >
              News
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link to="/series" >
              Series
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <Link to="/fixtures" >
              Fixtures
            </Link>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          {/* <li className="relative group">
            <a href="#" >
              Stats
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" >
              Points Table
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li> */}

        </ul>
        {isDarkMode? 
        <img
          src={dark}
          alt="Logo"
          className="w-10 h-10 ml-4 transform rotate-180  hover:rotate-0 cursor-pointer transition ease-in-out duration-300"
          onClick={() => {isdarkmode()}}
        />:
        <img
          src={dark}
          alt="Logo"
          className="w-10 h-10 ml-4 transform hover:rotate-180 cursor-pointer transition ease-in-out duration-300"
          onClick={() => {islightmode()}}
        />}
        <div className='xl:hidden'>
        <IconContext.Provider value={{size:'30px'}}>
          <RxHamburgerMenu className='ml-3' onClick={handleMenuToggle}/>     
        </IconContext.Provider>
        </div>
       

        
        
            
        </div>
        
          {/* mobile nav */}
      </div>
      <div className={`xl:hidden flex-wrap ${isMenuOpen ? 'flex' : 'hidden'} `}>
        <ul className=" w-full text-start px-4 mt-2  ">
          <li className="relative group">
          <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >

              Home
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
            <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >
              News
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
          <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >

              Series
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
          <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >

              Fixtures
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
          <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >

              Stats
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>
          <li className="relative group">
          <a href="#" className='text-white text-xl font-bold py-2 block transition-colors duration-200 hover:text-purple-400' >

              Points Table
            </a>
            <div className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition ease-in-out duration-300"></div>
          </li>

        </ul>
        </div>
    </nav>
  </header>
);
};

export default NavBar;
