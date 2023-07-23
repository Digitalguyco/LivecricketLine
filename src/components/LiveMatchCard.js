import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const LiveMatchCard = ({ seriesName, team1, team2, logo1, logo2, stadium, isLive }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4">
      <div className="flex items-center mb-2">
        <Link to={`/series/${seriesName}`} className="flex items-center">
          <div className="w-2 h-2 bg-[#ff0000] rounded-full mr-2 animate-pulse"></div>
          <h2 className="text-sm font-semibold hover:text-orange-700">{seriesName}</h2>
          <MdKeyboardArrowRight className="ml-1 text-gray-500" />
        </Link>
      </div>
      <div className="flex items-center mb-2 text-sm">
        <img src={logo1} alt={team1} className="w-8 h-8 mr-2" />
        <span className="mr-2 text-sm">{team1}</span>
        <span className="text-gray-500">vs</span>
        <span className="ml-2 text-sm">{team2}</span>
        <img src={logo2} alt={team2} className="w-8 h-8 ml-2" />
      </div>
      <p className="text-gray-500 text-sm">{stadium}</p>
    </div>
  );
};

export default LiveMatchCard;
