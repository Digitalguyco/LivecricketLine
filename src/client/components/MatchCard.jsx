import {React} from "react";
import {GiTrophyCup} from "react-icons/gi";
import { useSelector} from 'react-redux';



const MatchCard = ({ match }) => {
    const isDarkMode = useSelector((state) => state.isdarkmode);
    const vs_white = require('../assets/vs-white.png');
    const vs_black = require('../assets/vs-black.png');

    function shortenTeamName(teamName) {
      const maxLength = 8; // Define the maximum length for team names
    
      if (teamName.length > maxLength) {
        // If the team name is longer than maxLength, shorten it
        const words = teamName.split(' '); // Split the name into words
        let shortenedName = words
          .map((word) => word.slice(0, 3)) // Take the first three letters of each word
          .join(' '); // Join the shortened words with a space
    
        // Ensure that the final shortened name is 7 characters or less
        if (shortenedName.length > maxLength) {
          shortenedName = shortenedName.slice(0, maxLength); // Truncate to maxLength
        }
    
        return shortenedName.toUpperCase(); // Convert to uppercase
      }
    
      return teamName.toUpperCase(); // If not too long, keep the original name
    }

    function limitWords(text, maxWords) {
      const words = text.split(' '); // Split the text into words
      if (words.length > maxWords) {
        const limitedWords = words.slice(0, maxWords); // Take the first maxWords words
        return limitedWords.join(' ') + '...'; // Join them back with "..." at the end
      }
      return text; // If the text has maxWords or fewer, return it as is
    }

    function getIndicatorColor(eventStatus) {
      switch (eventStatus) {
        case "Finished":
          return "blue"; // Set the color to blue for finished matches
        case "In Progress":
          return "red"; // Set the color to green for live matches
        case "":
          return "yellow"; // Set the color to yellow for matches yet to begin
        default:
          return "yellow"; // Set a default color (e.g., red) for unknown statuses
      }
    }
    
  
  
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
  
              <div className="rounded-lg  flex items-center">
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: getIndicatorColor(match.event_status) }}></div>

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
                        src={match.event_home_team_logo ? match.event_home_team_logo : require('../assets/Team_Flags.png') }
                        alt="team"
                        className="w-[50%] h-auto absolute bottom-9 right-[50px] rounded-lg"
                      />
                      <p className=" font-bold absolute bottom-1 text-sm whitespace-nowrap">{shortenTeamName(match.event_home_team)}</p>
                    </div>
                    <div className="h-12 w-20 absolute mt-2 left-[50px]">
                      <p
                        className={`${
                          isDarkMode ? 'border-b-[1px] border-black' : 'border-b-[1px] border-white'
                        } text-lg font-bold w-16`}
                      >
                        {match.event_home_final_result ? match.event_home_final_result : "N/A"}
                      </p>
                      {/* <p className="text-sm font-mono">30 Over</p> */}
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
                        {match.event_away_final_result  ? match.event_away_final_result : "N/A"}
                      </p>
                      {/* <p className="text-sm text-end font-mono w-16">30 Over</p> */}
                    </div>
                    <div className="h-24 w-24 relative">
                      <img
                        src={match.event_away_team_logo ? match.event_away_team_logo : require('../assets/Team_Flags.png')}
                        alt="team"
                        className="w-[50%] h-auto absolute bottom-9 left-[50px] rounded-lg"
                      />
                      <p className=" font-bold absolute bottom-1 text-sm whitespace-nowrap right-4">{shortenTeamName(match.event_away_team)}</p>
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
                  <p className="whitespace-nowrap mr-2">{limitWords(match.event_status_info,5)}</p>
                </div>
  
                <div className="absolute right-2 top-11 flex items-center">
                  <GiTrophyCup className="mr-2" />
                  <span className="mr-2 font-bold whitespace-nowrap">{shortenTeamName(match.event_home_team)}</span>
                  <span className="bg-red-500 rounded px-1 text-white text-[12px] mr-1">0</span>
                  <span className="bg-green-500 rounded px-1 text-white text-[12px]">0</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
  


export default MatchCard;