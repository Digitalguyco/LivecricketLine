import React from 'react';
import LiveMatchCard from '../components/LiveMatchCard';
import BlogPostLink from '../components/BlogSection';
import { useSelector} from 'react-redux';


const HomePage = () => {
  const isDarkMode =  useSelector((state) => state.isdarkmode)

  const liveMatches = [
    {
      id: 1,
      seriesName: 'Series 1',
      team1: 'Team A',
      team2: 'Team B',
      logo1: 'https://ik.imagekit.io/c7syb8qpjp/Teams/V.png',
      logo2: 'https://ik.imagekit.io/c7syb8qpjp/Teams/O.png',
      stadium: 'Stadium X',
      isLive: true,
    },
    {
      id: 2,
      seriesName: 'Series 2',
      team1: 'Team C',
      team2: 'Team D',
      logo1: 'https://ik.imagekit.io/c7syb8qpjp/Teams/2T.png',
      logo2: 'https://ik.imagekit.io/c7syb8qpjp/Teams/2U.png',
      stadium: 'Stadium Y',
      isLive: false,
    },
    // Add more live match data as needed
    {
    id: 3,
    seriesName: 'Series 3',
    team1: 'Team E',
    team2: 'Team F',
    logo1: 'https://ik.imagekit.io/c7syb8qpjp/Teams/1L.png',
    logo2: 'https://ik.imagekit.io/c7syb8qpjp/Teams/1I.png',
    stadium: 'Stadium Y',
    isLive: false,
  },
  ];

  const blogPosts = [
    {
      id: 1,
      headline: 'Harbhajan Singh Takes A Subtle Jab At Virat Kohli & Others Following Pujara’s Exclusion From WI Tests',
      image: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689157461329_kohli%20copy.jpg',
      tags: ['India', 'CLas', 'Tag3'],
      body: '“I have a lot of respect for Chesteshwar Pujara for what he has achieved. He has been an unsung hero of the Indian team for many years now. He has been one of those pillars of strength for India, doing the dirty work of hanging in there, making sure other batters got their comfort.” ',
      date: 'July 11, 2023',
    },
    {
        id: 2,
        headline: 'Harbhajan Singh Takes A Subtle Jab At Virat Kohli & Others Following Pujara’s Exclusion From WI Tests',
        image: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689157461329_kohli%20copy.jpg',
        tags: ['India', 'CLas', 'Tag3'],
        body: '“I have a lot of respect for Chesteshwar Pujara for what he has achieved. He has been an unsung hero of the Indian team for many years now. He has been one of those pillars of strength for India, doing the dirty work of hanging in there, making sure other batters got their comfort.” ',
        date: 'July 11, 2023',
      },
      {
        id: 3,
        headline: 'Harbhajan Singh Takes A Subtle Jab At Virat Kohli & Others Following Pujara’s Exclusion From WI Tests',
        image: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689157461329_kohli%20copy.jpg',
        tags: ['India', 'CLas', 'Tag3'],
        body: '“I have a lot of respect for Chesteshwar Pujara for what he has achieved. He has been an unsung hero of the Indian team for many years now. He has been one of those pillars of strength for India, doing the dirty work of hanging in there, making sure other batters got their comfort.” ',
        date: 'July 11, 2023',
      },
      {
        id: 4,
        headline: 'Harbhajan Singh Takes A Subtle Jab At Virat Kohli & Others Following Pujara’s Exclusion From WI Tests',
        image: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689157461329_kohli%20copy.jpg',
        tags: ['India', 'CLas', 'Tag3'],
        body: '“I have a lot of respect for Chesteshwar Pujara for what he has achieved. He has been an unsung hero of the Indian team for many years now. He has been one of those pillars of strength for India, doing the dirty work of hanging in there, making sure other batters got their comfort.” ',
        date: 'July 11, 2023',
      },
      {
        id: 5,
        headline: 'Harbhajan Singh Takes A Subtle Jab At Virat Kohli & Others Following Pujara’s Exclusion From WI Tests',
        image: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689157461329_kohli%20copy.jpg',
        tags: ['India', 'CLas', 'Tag3'],
        body: '“I have a lot of respect for Chesteshwar Pujara for what he has achieved. He has been an unsung hero of the Indian team for many years now. He has been one of those pillars of strength for India, doing the dirty work of hanging in there, making sure other batters got their comfort.” ',
        date: 'July 11, 2023',
      },
  ];

  return (
    <section className='container mx-auto px-4'>
        <div className="max-w-screen-lg mx-auto">
    <h1 className={`text-md font-bold ml-8 ${isDarkMode && 'text-black'  }` }><a className='cursor-pointer  '><span className='italic underline text-orange-700 hover:text-orange-500 underline-offset-8 text-xl '>Live</span></a> Matches</h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-8 ${isDarkMode && 'text-black'  } `}>
        {liveMatches.map((match) => (
          <LiveMatchCard key={match.id} {...match} />
        ))}
      </div>
      
      </div>
      <div className='max-w-screen-lg mx-auto mt-14 '>
      {blogPosts.map((post) => (
        <BlogPostLink key={post.id} {...post} />
        
      ))}
    </div>
    <h2 className={`text-center text-xl text-bold   ${isDarkMode ?   'text-blue-700 hover:text-blue-500' : 'text-orange-700 hover:text-orange-500'} hover:underline `}> <a href='#' >See more </a></h2>
    </section>
  );
};

export default HomePage;
