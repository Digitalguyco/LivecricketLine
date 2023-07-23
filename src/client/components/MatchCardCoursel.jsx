import React, {useState} from 'react';
import MatchCard from './MatchCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { IconContext } from "react-icons";  
import { useSelector} from 'react-redux';

const MatchCardCoursel = () => {

  const isDarkMode =  useSelector((state) => state.isdarkmode)


    const customDotStyle = {
        width: '50px',
        height: '18px',
        margin: '10px',
        borderRadius: '2px',
        backgroundColor: isDarkMode ? '#333' : '#fff',
        opacity: '0.5',
        transition: 'opacity 0.2s ease-in-out',
      };
    
      const customDotsContainerStyle = {
        display: 'flex', // Display the dots in a flex container
        alignItems: 'center', // Center the dots vertically
        justifyContent: 'center', // Center the dots horizontally
      };

      const customActiveDotStyle = {
        ...customDotStyle,
        backgroundColor: '#3c486b', // Highlight active dot in purple
        opacity:1,
      };

      const customDotStyleSmall = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#CBD5E0', // Default color for inactive dots
      };
      
      const customActiveDotStyleSmall = {
        width: '12px', // Slightly larger to indicate active dot
        height: '12px', // Slightly larger to indicate active dot
        borderRadius: '50%',
        backgroundColor: '#3c486b', // Highlight active dot in purple
      };

      const [currentSlide, setCurrentSlide] = useState(0);

      const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
      };

      const CustomNextArrow = ({ onClick }) => {
        return (
          <button
            onClick={onClick}
          >
        <IconContext.Provider value={{ color: isDarkMode ? 'black':'white', className: `slick-next mr-5 ${currentSlide === 4 ? 'hidden' : ''} ` }} ><FaAngleRight onClick={onClick}/></IconContext.Provider>
          </button>
        );
      };
    
      const CustomPrevArrow = ({ onClick }) => {
        return (
            <button
            onClick={onClick}
          >
        <IconContext.Provider value={{ color: isDarkMode ? 'black':'white', className: `slick-prev  ml-5 ${currentSlide === 0 ? 'hidden' : ''} ` }} ><FaAngleLeft onClick={onClick}/></IconContext.Provider>
          </button>
        );
      };
    
      const settings = {
        dots:true,
        dotsClass: 'custom-dots',
        customPaging: (i) => {
            // Modify customPaging function to apply active style to the current slide
            return (
              <div
                style={i === currentSlide ? customActiveDotStyle : customDotStyle}
                className="mx-1"
              />
            );
          },
        appendDots: (dots) => <ul style={customDotsContainerStyle}>{dots}</ul>,
        nextArrow: < CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true, // Enable swiping to directly go to a slide
        beforeChange: handleBeforeChange,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024, // Medium screens (Tablets and larger)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:true,
              dots:true
            },
          },
          {
            breakpoint: 768, // Small screens (Mobile landscape)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false, // Hide arrows on small screens
              dotsClass:'slick-dots',
              dots:true,
              customPaging: (i) => {
                // Modify customPaging function to apply active style to the current slide
                return (
                  <div
                    style={i === currentSlide ? customActiveDotStyleSmall : customDotStyleSmall}
                    className="mx-1"
                  />
                );
              },
              appendDots: (dots) => <ul style={customDotsContainerStyle}>{dots}</ul>,
            
            },
          },
          {
            breakpoint: 480, // Extra small screens (Mobile portrait)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false, // Hide arrows on small screens
              dotsClass:'slick-dots',
              dots:true,
              customPaging: (i) => {
                // Modify customPaging function to apply active style to the current slide
                return (
                  <div
                    style={i === currentSlide ? customActiveDotStyleSmall : customDotStyleSmall}
                    className="mx-1"
                  />
                );
              },
              appendDots: (dots) => <ul style={customDotsContainerStyle}>{dots}</ul>,
            },
          },
          {
            breakpoint: 300, // Extra small screens (Mobile portrait)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false, // Hide arrows on small screens
             
              dotsClass:'slick-dots',
              dots:true,
              customPaging: (i) => {
                // Modify customPaging function to apply active style to the current slide
                return (
                  <div
                    style={i === currentSlide ? customActiveDotStyleSmall : customDotStyleSmall}
                    className="mx-1"
                  />
                );
              },
              appendDots: (dots) => <ul style={customDotsContainerStyle}>{dots}</ul>,
            },
          },
        ],
      };

      return (
        <div className="  ">
          <Slider {...settings}>
            <div className="px-4 ">
              <MatchCard />
            </div>
            <div className="px-4 ">
              <div className="bg-gray-800 text-white p-20 rounded-md text-center">Ad Space</div>
            </div>
            <div className="px-4 ">
              <MatchCard />
            </div>
          
            <div className="px-4 ">
              <MatchCard />
            </div>
            <div className="px-4 ">
              <MatchCard />
            </div>
          </Slider>
        </div>
      );
    };
    
export default MatchCardCoursel;
