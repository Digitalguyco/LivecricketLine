import React from 'react';
import {BsArrowRight} from 'react-icons/bs'

const BlogPost = ({ imageSrc, title, subheadline, date, author }) => {
  return (
    <div className="p-4 border-b-2 shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
      {/* Image and Title */}
      <div className="w-full md:w-72 h-52 md:h-72 overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-110 flex-shrink-0">
        <img src={imageSrc} alt="Blog Post" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {/* Subheadline */}
        <p className="text-gray-600">{subheadline}</p>
        {/* Date and Author */}
        <p className="text-gray-400 mt-2">Published on {date} by {author}</p>
      </div>
      {/* Continue Reading Button */}
      <button className="ml-auto mt-4 md:mt-0 py-2 px-4 bg-gradient-to-r from-[#3f3f73] to-purple-900 whitespace-nowrap text-white flex items-center gap-2 hover:bg-blue-600">
        Continue Reading <BsArrowRight />
      </button>
    </div>
  );
};


export default BlogPost;
