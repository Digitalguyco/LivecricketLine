import React from 'react';
import MatchCardCoursel from '../components/MatchCardCoursel';
import CurrentSeries from '../components/CurrentSeries';
import LatestUpdates from '../components/LatestUpdates';
import TopAdBanner from '../components/TopAdBanner';
import TopStories from '../components/TopStories';
import BlogSection from '../components/BlogSection';

const HomePage = () => {


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
    <section className='container mx-auto px-4 mt-8'>
        <div className='container mx-auto '>
        <MatchCardCoursel />

        </div>
        <div className=' container mx-auto  mb-2 xl:flex items-start justify-between'>
          <CurrentSeries/>
          <LatestUpdates />

        </div>
        <div className=' container mx-auto   flex items-start justify-between'>
          <TopAdBanner />
        </div>
        <div className=' container mx-auto    '>
          <h2 className='ml-8 font-bold text-3xl  underline underline-offset-8'> Top Stories</h2>
          <TopStories />
        </div>

        <div className=' container mx-auto  mt-5 mb-8'>
        
          <BlogSection />
        </div>
       
    </section>
   
  );
};

export default HomePage;
