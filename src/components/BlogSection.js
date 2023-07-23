import React from 'react';
import { useSelector} from 'react-redux';


const BlogPostLink = ({ headline, image, tags,  body, date }) => {
  const isDarkMode =  useSelector((state) => state.isdarkmode)

  return (

    <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12 divide-y divide-slate-700 ">
      <div className="mb-6 md:mb-0">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={image} alt={headline}  className="w-full "  />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div>
        <h3 className={`mb-3 text-2xl font-bold ${isDarkMode && 'text-black'}`}>{headline}</h3>
        {tags.map((tag) => (
        <div key={tag}
          className={`mb-3 inline italic text-sm font-medium mr-2  underline underline-offset-4 ${isDarkMode ? 'text-blue-700' : 'text-orange-700'}`}>
          {tag}
        </div>))}
        
        <p class="text-neutral-500 dark:text-neutral-300 mt-2 italic">
          {body} </p>

          <p class="mb-6 text-neutral-500 text-md">
          <small>{date}</small>
        </p>
        
      </div>
    
    </div>
    
  );
};

export default BlogPostLink;


