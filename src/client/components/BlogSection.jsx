import React from 'react';
import BlogPost from './BlogPost';

const BlogSection = () => {
    const blogPostsData = [
        {
          imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689682110364_natsc.jpg',
          title: "The Hundred 2023 | MI Star Back As Skipper For Trent Rockets, Parnell To Assume Northern Superchargers' Leadership",
          subheadline: 'This is the subheadline of Blog Post 1.',
          date: '12th July 2023',
          author: 'Nirmal',
        },
        {
          imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689682110364_natsc.jpg',
          title:  "The Hundred 2023 | MI Star Back As Skipper For Trent Rockets, Parnell To Assume Northern Superchargers' Leadership",
          subheadline: 'This is the subheadline of Blog Post 2.',
          date: '12th July 2023',
          author: 'Nirmal',
        },
        {
          imageSrc: 'https://ik.imagekit.io/c7syb8qpjp/oc/oc-dashboard/news-images-prod/1689682110364_natsc.jpg',
          title:  "The Hundred 2023 | MI Star Back As Skipper For Trent Rockets, Parnell To Assume Northern Superchargers' Leadership",
          subheadline: 'This is the subheadline of Blog Post 3.',
          date: '12th July 2023',
          author: 'Nirmal',
        },
        // Add more blog posts as needed
      ];
      
      return (
        <div className="grid grid-cols-12 gap-4">
          {/* First ad */}
          <div className="col-span-12 bg-gray-200 p-4  shadow-md h-32">
            {/* Ad content goes here */} <h2 className='text-black  text-3xl text-center mt-9'>Ads Space</h2>
          </div>
    
          {/* Blog posts */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9">
          <h2 className='ml-8 font-bold text-3xl  underline underline-offset-8'> Latest News</h2>
            <div className="grid grid-cols-1 gap-4 overflow-auto">
              {blogPostsData.map((post, index) => (
                <BlogPost
                  key={index}
                  imageSrc={post.imageSrc}
                  title={post.title}
                  subheadline={post.subheadline}
                  date={post.date}
                  author={post.author}

                />
              ))}
            </div>
          </div>
    
          {/* Second ad */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-gray-200 p-4 rounded-lg shadow-md">
            {/* Ad content goes here */} <h2 className='text-black  text-3xl text-center mt-56'>Ads Space</h2>
          </div>
        </div>
      );
    };

export default BlogSection;
