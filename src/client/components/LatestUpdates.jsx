import React from 'react';
import { useSelector} from 'react-redux';

// HiOutlineNewspaper
const LatestUpdates = () => {
  const latestUpdatesData = [
    {
      id: 1,
      title: 'Update 1',
      content: 'This is the content of update 1.',
    },
    {
      id: 2,
      title: 'Update 2',
      content: 'This is the content of update 2.',
    },
    {
      id: 3,
      title: 'Update 3',
      content: 'This is the content of update 3.',
    },
     {
        id: 4,
        title: 'Update 4',
        content: 'This is the content of update 3.',
      },
      {
        id: 5,
        title: 'Update 5',
        content: 'This is the content of update 3.',
      },
      {
        id: 6,
        title: 'Update 6',
        content: 'This is the content of update 3.',
      },
  ];
  const isDarkMode =  useSelector((state) => state.isdarkmode)

  return (
    <div className=' mt-7 mr-4 px-auto'>
    <div className="flex items-center justify-between mb-4 py-1 bg-gradient-to-r  from-[#3f3f73] to-purple-900 rounded-lg">
      <div className="flex items-center">
    
        <h2 className="xl:text-lg font-bold mx-3 text-white xl:pr-56">Latest Updates</h2>



      </div>
    </div>
    <div className=" overflow-auto max-h-48">
      {latestUpdatesData.map((update) => (
        <div key={update.id} className={`flex mb-2 pr-5  rounded-lg ${isDarkMode ? 'bg-white/10':'bg-black/10'}`}>
        <div className="w-24 h-14 rounded-lg bg-red-900 " >
        </div>
          
            <div className='ml-3 mt-3 whitespace-nowrap '>{update.content} </div>

   
          
    
          
        </div>
      ))}
    </div>
  </div>
  );
};

export default LatestUpdates;
