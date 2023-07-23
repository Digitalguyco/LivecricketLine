import React from 'react';
import {BsPlay} from 'react-icons/bs'

const TopStoryCard = ({ imageSrc, isVideo, content }) => {
  return (
    <div className="bg-black/30 flex-shrink-0 flex flex-col items-center m-2 p-4   shadow-md w-80">
      <div className="relative">
        <img src={imageSrc} alt="Top Story" className="w-full h-40 rounded-lg" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-black bg-opacity-50 p-4 rounded-full text-white">
                < BsPlay className='w-6 h-6'/>
            </button>
          </div>
        )}
      </div>
      <p className='italic text-md'>Vabssdk: 4 Hours Ago</p>
      <p className="mt-4 font-bold">{content}</p>
    </div>
  );
};

export default TopStoryCard;
