import {React,useState,useEffect} from "react";
import {GiTrophyCup} from "react-icons/gi";
import { useSelector} from 'react-redux';



const MatchCard = ({ match }) => {
    const isDarkMode = useSelector((state) => state.isdarkmode);
    const vs_white = require('../assets/vs-white.png');
    const vs_black = require('../assets/vs-black.png');
  
  
    return (
      <div className="container ">
          <div
            key={match.event_key}
            className={`${
              isDarkMode ? 'bg-white/10' : 'bg-black/10'
            } w-[325px] h-[178px] text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
          >
            <div className="max-w-[310px] mx-auto text-start px-2 py-1 relative flex flex-wrap items-center justify-between">
              <div className="">
                <p className="font-bold flex ">
                  {match.league_name}
                </p>
                <p className="text-start text-[12px] w-full ">
                  Match Day, {match.event_date_start} - {match.event_time}
                </p>
              </div>
  
              <div className="rounded-lg bg-red-600 py- flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                {/* <h2 className="text-small text-white">Live</h2> */}
              </div>
  
              <div
                className={` ${
                  isDarkMode ? 'border-b-2 border-black' : 'border-b-2 border-white'
                } h-1 w-72 absolute top-12`}
              ></div>
  
              <div className="flex">
                <div className="relative flex items-center">
                  <div className="flex items-start">
                    <div className="h-24 w-24 relative">
                      <img
                        src={match.event_home_team_logo ? match.event_home_team_logo : require('../assets/ind.png')}
                        alt="team"
                        className="w-full h-auto absolute bottom-3 right-[22px]"
                      />
                      <p className=" font-bold absolute bottom-1 right-[50px] ">{match.event_home_team}</p>
                    </div>
                    <div className="h-12 w-20 absolute mt-2 left-[50px]">
                      <p
                        className={`${
                          isDarkMode ? 'border-b-[1px] border-black' : 'border-b-[1px] border-white'
                        } text-lg font-bold w-16`}
                      >
                        {match.event_home_final_result}
                      </p>
                      <p className="text-sm font-mono">30 Over</p>
                    </div>
                  </div>
                </div>
                <div className="mr-1 mb-9">
                  <img
                    src={isDarkMode ? vs_black : vs_white}
                    alt="team"
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <div className="relative flex items-center">
                  <div className="flex items-start">
                    <div className="h-12 w-24 absolute mt-2 right-[22px] ">
                      <p
                        className={`${
                          isDarkMode ? 'border-b-[1px] border-black' : 'border-b-[1px] border-white'
                        } text-lg font-bold text-end w-16`}
                      >
                        {match.event_away_final_result}
                      </p>
                      <p className="text-sm text-end font-mono w-16">30 Over</p>
                    </div>
                    <div className="h-24 w-24 relative">
                      <img
                        src={match.event_away_team_logo ? match.event_away_team_logo : require('../assets/sa.png')}
                        alt="team"
                        className="w-full h-auto absolute bottom-3 left-[22px]"
                      />
                      <p className=" font-bold absolute bottom-1 left-[55px] ">{match.event_away_team}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isDarkMode ? 'border-b-2 border-black' : 'border-b-2 border-white'
                } h-1 w-72 absolute bottom-6 `}
              ></div>
              <div className="relative">
                <div className="text-[10px] absolute top-12 right-[150px]">
                  <p className="whitespace-nowrap">{match.event_status_info}</p>
                </div>
  
                <div className="absolute right-2 top-11 flex items-center">
                  <GiTrophyCup className="mr-2" />
                  <span className="mr-2 font-bold">{match.event_away_team}</span>
                  <span className="bg-red-500 rounded px-1 text-white text-[12px] mr-1">23</span>
                  <span className="bg-green-500 rounded px-1 text-white text-[12px]">24</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  


export default MatchCard;