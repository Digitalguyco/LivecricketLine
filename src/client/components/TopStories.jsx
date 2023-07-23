import React from 'react';
import TopStoryCard from './TopStoryCard';

const TopStories = () => {
  const topStoriesData = [

      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: false ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: true ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: false ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: true ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: false ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: true ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
      {
        imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689702479517_AP23190442569808 (1).jpg',
        isVideo: true ,
        content: "With The Hundred 2023 fast approaching,  deck has seen Nat Sciver-Brunt return to captain Trent ...",
      },
  ];

  return (
    <div className="max-w-full mx-auto self-center flex space-x-4 p-4 overflow-auto">
      {topStoriesData.map((story, index) => (
        <TopStoryCard key={index} imageSrc={story.imageSrc} isVideo={story.isVideo} content={story.content} />
      ))}
    </div>
  );
};

export default TopStories;
