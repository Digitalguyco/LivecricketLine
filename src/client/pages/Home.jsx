import React from 'react';
import MatchCardCoursel from '../components/MatchCardCoursel';
import CurrentSeries from '../components/CurrentSeries';
import LatestUpdates from '../components/LatestUpdates';
import TopAdBanner from '../components/TopAdBanner';
import TopStories from '../components/TopStories';
import BlogSection from '../components/BlogSection';

const HomePage = () => {


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
